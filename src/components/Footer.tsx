import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#111727] to-[#0c0c0cdf] text-gray-300 px-8 py-8">
      {/* Top section */}
      <div className="flex flex-row justify-between p-2 mx-5">
        {/* Logo and social links */}
        <div className="flex flex-col gap-6">
          {/* Brand text */}
          <div className="gap-2">
            <h2 className="text-2xl font-kanit text-white text-left">
              Jenny's Shutter
            </h2>
            <p className="text-gray-400 text-left">
              Capturing life’s quiet moments.
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-pink-500 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-blue-700 transition"
            >
              <FaLinkedin className="text-white" />
            </a>
          </div>
        </div>

        {/* Quick links section */}
        <div className="flex flex-col justify-center gap-y-4 mr-10 ">
          <p className="text-sm uppercase text-gray-400 tracking-wider font-semibold">
            Quick Links
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-300 hover:text-white hover:underline"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white hover:underline"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-6" />

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500">
        &copy; 2025 Jenny's Shutter. All rights reserved.
      </p>
    </footer>
  );
}
