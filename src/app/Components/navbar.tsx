"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          Food<span className="text-white">tuck</span>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="lg:flex items-center space-x-8 text-sm font-medium hidden">
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/'}>Home</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/OurMenu'}>Menu</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/BlogList'}>Blog</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/FAQPage'}>Pages</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/AboutUsPage'}>About</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/Shop'}>Shop</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/Contact'}>Contact</Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-yellow-500">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-yellow-500 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="absolute right-3 top-2 text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Cart Icon */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 2.6a1 1 0 00.3 1.4 1 1 0 001.4-.3L7 13zm10 0l1.3 2.6a1 1 0 01-.3 1.4 1 1 0 01-1.4-.3L17 13z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white py-4`}>
        <ul className="flex flex-col space-y-4 items-center text-sm font-medium">
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/'}>Home</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/OurMenu'}>Menu</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/BlogList'}>Blog</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/FAQPage'}>Pages</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/AboutUsPage'}>About</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/Shop'}>Shop</Link>
          <Link className="hover:text-yellow-500 cursor-pointer" href={'/Contact'}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
