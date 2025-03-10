'use client';

import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import AppSplashScreen from "@/public/app-images/splash-screen-2.png";
import { FaSpinner } from "react-icons/fa";

interface BranchOptions {
  timeout?: number;
  tracking_disabled?: boolean;
  branch_match_id?: string;
}

interface BranchLinkData {
  channel?: string;
  campaign?: string;
  feature?: string;
  data: {
    [key: string]: any;
    $deeplink_path?: string;
    $desktop_url?: string;
  };
}

interface BranchInitData {
  data_parsed: {
    [key: string]: any;
    '+match_id'?: string;
    $deeplink_path?: string;
  };
  referring_link?: string;
}

interface Branch {
  init: (
    branchKey: string,
    options: BranchOptions,
    callback: (err: Error | null, data: BranchInitData) => void
  ) => void;
  link: (
    data: BranchLinkData,
    callback: (err: Error | null, link: string) => void
  ) => void;
}

declare global {
  interface Window {
    branch: Branch;
  }
}

export default function BranchPage() {
  const searchParams = useSearchParams();
  const [branchData, setBranchData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [deepLink, setDeepLink] = useState<string>('');
  const [isBranchLoaded, setIsBranchLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const branchKey = "key_live_ixg1KsOZhbgh0cYawaCmcfogvFfZXzF3";

  useEffect(() => {
    const checkBranchLoaded = setInterval(() => {
      if (window.branch) {
        setIsBranchLoaded(true);
        clearInterval(checkBranchLoaded);
      }
    }, 100);

    return () => clearInterval(checkBranchLoaded);
  }, []);

  useEffect(() => {
    if (!branchKey) {
      setError('Branch key not configured');
      return;
    }

    if (!isBranchLoaded) return;

    const matchId = searchParams.get('_branch_match_id') || '';
    const utmMedium = searchParams.get('utm_medium');
    const referrer = searchParams.get('_branch_referrer');
    console.log('Match ID:', matchId);

    window.branch.init(
      branchKey,
      {
        branch_match_id: matchId,
        tracking_disabled: false,
      },
      async (err: Error | null, initData: BranchInitData) => {
        if (err) {
          setError(`Branch initialization failed: ${err.message}`);
          console.error(err);
          return;
        }

        console.log('Init data:', initData);

        const dataParsed = initData.data_parsed || {};
        const branchInfo: any = {
          matchId: dataParsed['+match_id'] || matchId,
          utmMedium: utmMedium || undefined,
          referrer: referrer || initData.referring_link || undefined,
          deepLinkPath: dataParsed.$deeplink_path,
        };

        setBranchData(branchInfo);

        try {
          window.branch.link(
            {
              channel: utmMedium || 'share',
              campaign: 'qr_campaign',
              feature: 'deeplink',
              data: {
                ...dataParsed,
                $deeplink_path: dataParsed.$deeplink_path || `content/${matchId}`,
                $desktop_url: window.location.origin,
                '+match_id': dataParsed['+match_id'] || matchId,
              },
            },
            (linkErr: Error | null, link: string) => {
              if (linkErr) {
                setError(`Deep link creation failed: ${linkErr.message}`);
                console.error(linkErr);
                return;
              }
              console.log('Generated deep link:', link);
              setDeepLink(link);
            }
          );
        } catch (linkError) {
          setError('Error creating deep link');
          console.error(linkError);
        }
      }
    );
  }, [searchParams, branchKey, isBranchLoaded]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!branchData || !isBranchLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* <div className="animate-pulse"><FaSpinner></FaSpinner></div> */}
        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2 p-12 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Scan QR Code</h1>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <QRCodeSVG
                value={deepLink}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <p className="text-gray-600 text-sm mt-6 text-center max-w-xs">
              Scan this QR code with your mobile device to access the deep link
            </p>
          </div>

          <div className="md:w-1/2 p-12 bg-gray-50 flex items-center justify-center">
            <div className="relative w-[280px] h-[560px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-800">
              <Image
                src={AppSplashScreen}
                alt="App Screenshot"
                className="w-full h-full object-cover"
                loading="lazy"

              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}