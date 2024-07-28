"use client";
import Image from "next/image";
import CopyIcon from "@/public/icons/copy.png";

export default function ShareBlogPostIcon() {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <Image
      src={CopyIcon}
      alt="Copy blog link"
      className="w-5 h-5 lg:w-9 lg:h-9 cursor-pointer"
      onClick={handleCopyToClipboard}
    />
  );
}
