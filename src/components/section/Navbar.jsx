"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/NavbarMenu";
import { cn } from "../../utils/cn";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "py-2" : "py-6",
      className
    )}>
      <div className={cn(
        "mx-auto transition-all duration-300 px-4",
        scrolled ? "max-w-5xl" : "max-w-7xl"
      )}>
        <Menu setActive={setActive} isScrolled={scrolled}>
          {/* Logo and Mobile Menu */}
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0">
              <a href="/" className={cn(
                "font-bold text-black dark:text-white transition-all duration-300",
                scrolled ? "text-lg" : "text-xl"
              )}>
                EventLogo
              </a>
            </div>
            
            {/* Hamburger - visible on mobile only */}
            <button
              className="lg:hidden p-2"
              onClick={toggleMenu}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-black dark:bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-full bg-black dark:bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-black dark:bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            {/* Desktop Menu Items - hidden on mobile */}
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/about">About</HoveredLink>
              <HoveredLink href="/gallery">Gallery</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
              <MenuItem setActive={setActive} active={active} item="Store">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Algochurn"
                    href="/store"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before." />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="/store"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project" />
                  <ProductItem
                    title="Moonbeam"
                    href="/store"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes." />
                  <ProductItem
                    title="Rogue"
                    href="/store"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
                </div>
              </MenuItem>
            </div>

            {/* Get Started Button - hidden on mobile */}
            <div className="hidden lg:block">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </Menu>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Sidebar Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <a href="/" className="text-xl font-bold text-black dark:text-white">
              EventLogo
            </a>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
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
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="py-6 px-4">
            <div className="flex flex-col space-y-1">
              <HoveredLink 
                href="/" 
                className="py-3 px-4 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Home
              </HoveredLink>
              <HoveredLink 
                href="/about" 
                className="py-3 px-4 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                About
              </HoveredLink>
              <HoveredLink 
                href="/gallery" 
                className="py-3 px-4 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Gallery
              </HoveredLink>
              <HoveredLink 
                href="/contact" 
                className="py-3 px-4 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Contact
              </HoveredLink>
              <HoveredLink 
                href="/products" 
                className="py-3 px-4 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Store
              </HoveredLink>
            </div>

            {/* Call to Action Button */}
            <div className="mt-6 px-4">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
