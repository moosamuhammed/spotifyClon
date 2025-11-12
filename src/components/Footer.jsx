import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">For the Record</a></li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-white font-semibold mb-3">Communities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">For Artists</a></li>
              <li><a href="#" className="hover:underline">Developers</a></li>
              <li><a href="#" className="hover:underline">Advertising</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Vendors</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Useful links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Free Mobile App</a></li>
              <li><a href="#" className="hover:underline">Popular by Country</a></li>
              <li><a href="#" className="hover:underline">Import your music</a></li>
            </ul>
          </div>

          {/* Spotify Plans */}
          <div>
            <h3 className="text-white font-semibold mb-3">Spotify Plans</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Premium Individual</a></li>
              <li><a href="#" className="hover:underline">Premium Duo</a></li>
              <li><a href="#" className="hover:underline">Premium Family</a></li>
              <li><a href="#" className="hover:underline">Premium Student</a></li>
              <li><a href="#" className="hover:underline">Spotify Free</a></li>
              <li><a href="#" className="hover:underline">Audiobooks Access</a></li>
            </ul>
          </div>
        </div>
        

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-sm">
          <p className="text-gray-400">© 2025 Spotify AB</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
