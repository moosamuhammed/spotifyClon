import React from "react";
import { Globe } from "lucide-react";

export default function Sidebar() {
  return (
    <div
      role="navigation"
      className="fixed top-0 left-0 bg-black text-white w-[300px] h-screen flex flex-col justify-between p-4"
    >
      {/* Top Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Your Library</h2>

        {/* Create Playlist Card */}
        <div className="bg-neutral-900 rounded-xl p-4">
          <h3 className="font-semibold mb-1">Create your first playlist</h3>
          <p className="text-sm text-gray-400 mb-3">
            It's easy, we'll help you
          </p>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform">
            Create playlist
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-xs text-gray-400">
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Safety & Privacy Center
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <a href="#" className="hover:underline">
            About Ads
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
        </div>

        {/* Language Selector */}
        <button
          aria-label="Change language"
          className="flex items-center gap-2 border border-gray-500 rounded-full px-3 py-1 hover:border-white transition-colors"
        >
          <Globe size={16} />
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
