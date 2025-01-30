"use client"

import { useState } from "react"
import Link from "next/link"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "application">("overview")

  return (
    <div className="w-full bg-black">
    <div className="padding-container max-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left Column - Job Details */}
        <div className="w-full md:w-1/3">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Location</h2>
              <p className="text-gray-400">Green Park, New Delhi</p>
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Type</h2>
              <p className="text-gray-400">Full-Time</p>
            </div>
            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Department</h2>
              <p className="text-gray-400">IT</p>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-2/3">
          <div className="mb-8">
            <div className="border-b border-gray-800">
              <nav className="flex gap-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-4 relative ${
                    activeTab === "overview" ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Overview
                  {activeTab === "overview" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
                </button>
                <button
                  onClick={() => setActiveTab("application")}
                  className={`py-4 relative ${
                    activeTab === "application" ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Application
                  {activeTab === "application" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
                </button>
              </nav>
            </div>

            {activeTab === "overview" ? (
              <div className="py-8 space-y-6">
                <h1 className="text-2xl font-bold mb-6">
                  We are an applied AI lab building end-to-end software agents.
                </h1>
                <p className="text-gray-300">
                  We're building collaborative AI teammates that enable engineers to focus on more interesting problems
                  and empower engineering teams to strive for more ambitious goals.
                </p>
                <p className="text-gray-300">
                  Our team is small and talent-dense. Among our founding team, we have world-class competitive
                  programmers, former founders, and leaders from companies at the cutting edge of AI including Cursor,
                  Scale AI, Lunchclub, Modal, Google DeepMind, Waymo, and Nuro.
                </p>
                <p className="text-gray-300">
                  At UnbiaslyAI, we aim to change the way people consume news, making a big impact and building trust in
                  "The Fourth Pillar of Democracy." We are dedicated to delivering trustworthy news through AI-powered
                  technology, ensuring source verification and personalized content. Our goal is to combat
                  misinformation, promote media literacy, and uphold the integrity of journalism as the cornerstone of
                  democracy.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setActiveTab("application")} size="lg" className="w-full md:w-auto">
                    Apply for this role
                  </Button>
                </div>
              </div>
            ) : (
              <div className="py-8">
                <div className="mb-8 p-6 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Upload className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Autofill from resume</h3>
                      <p className="text-sm text-gray-400">
                        Upload your resume here to autofill key application fields.
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Upload File
                  </Button>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" type="text" required className="bg-transparent" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" required className="bg-transparent" />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium mb-2">
                      Resume
                    </label>
                    <Textarea id="resume" required className="min-h-[100px] bg-transparent" />
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                      Link to LinkedIn Profile
                    </label>
                    <Input id="linkedin" type="url" className="bg-transparent" />
                  </div>

                  <div>
                    <label htmlFor="additional" className="block text-sm font-medium mb-2">
                      Is there anything else you'd like to add in support of your application?
                    </label>
                    <Textarea id="additional" className="min-h-[100px] bg-transparent" />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Apply for this role
                  </Button>

                  <div className="text-center">
                    <span className="text-gray-400">OR</span>
                    <div className="mt-2">
                      <Link href="/positions" className="text-white hover:underline">
                        Browse open positions
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

