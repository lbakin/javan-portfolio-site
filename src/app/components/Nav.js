"use client";

import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#e2a43d] focus:outline-none fixed top-4 right-4 z-50"
        aria-label="Toggle navigation"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Menu */}
      <nav
        className={`fixed top-0 right-0 z-50 bg-[#542642] text-[#e2a43d] transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    w-full h-1/2 p-6 
                    lg:w-1/5 lg:h-full lg:top-0 lg:right-0`}
      >
        <ul className="flex flex-col space-y-4">
          <li><a href="/" className="text-xl" onClick={() => setIsOpen(false)}>Home</a></li>
          {/* Portfolio Section Header */}
          <h2 className="text-2xl font-semibold mt-6">Portfolios</h2>
          <li className="ml-4"><a href="/#portfolio1" className="text-xl" onClick={() => setIsOpen(false)}>Animator</a></li>
          <li className="ml-4"><a href="/#portfolio2" className="text-xl" onClick={() => setIsOpen(false)}>Rigger</a></li>
          <li className="ml-4"><a href="/#portfolio3" className="text-xl" onClick={() => setIsOpen(false)}>Maker</a></li>
          
          <li><a href="/#contact" className="text-xl" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="/downloadables" className="text-xl" onClick={() => setIsOpen(false)}>Downloadables</a></li>
        </ul>
      </nav>
    </div>
  );
} 
