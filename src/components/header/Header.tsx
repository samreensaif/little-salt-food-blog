

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <h1
            style={{ fontFamily: "Rubik Vinyl, cursive" }}
            className="text-2xl xsm:text-3xl sm:text-4xl text-[#7C4EE4] mb-4 md:mb-0"
          >
            Little Salt.
          </h1>

          {/* Navigation */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-3 xsm:gap-4 text-lg xsm:text-xl justify-center">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
          </nav>

          {/* Contact Button */}
          <Link href="/contact">
            <button className="inline-flex items-center bg-[#7C4EE4] text-white border-0 py-2 px-4 xsm:py-2 xsm:px-5 focus:outline-none hover:bg-purple-400 hover:text-black rounded text-sm xsm:text-base mt-4 md:mt-0">
              Contact Us
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;


