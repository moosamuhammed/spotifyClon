import { Search, Home, ArrowDownToLine } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black flex items-center justify-between px-6 py-3 z-50 shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Spotify Logo */}
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZ1ZcQ0so9d4v4dxVX-pcSyvBZdHqbZm3CA&s"
            alt="Spotify Logo"
            className="w-10 h-8"
          />
        </div>

        {/* Home Button */}
        <button className="bg-neutral-800 rounded-full p-2 hover:bg-neutral-700 transition">
          <Home className="text-white w-5 h-5" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-neutral-900 rounded-full px-3 py-1.5 w-96">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-gray-300 placeholder-gray-400 outline-none w-full"
          />
          <div className="border-l border-gray-700 pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-18-9V4.5A2.25 2.25 0 015.25 2.25h13.5A2.25 2.25 0 0121 4.5v3m-18 9h18m-18-9h18"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-5 text-sm font-semibold">
        <a href="#" className="text-gray-300 hover:text-white transition">
          Premium
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Support
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Download
        </a>
        <span className="text-gray-500">|</span>
        <a
          href="#"
          className="flex items-center text-gray-300 hover:text-white transition"
        >
          <ArrowDownToLine className="w-4 h-4 mr-1" /> Install App
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition">
          Sign up
        </a>
        <button className="bg-white text-black rounded-full px-5 py-1.5 font-semibold hover:scale-105 transition">
          Log in
        </button>
      </div>
    </nav>
  );
}
