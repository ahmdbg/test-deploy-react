"use client";
import React, { useState } from "react";
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {/* Hamburger Button */}
      <button
        className="lg:hidden fixed right-4 top-4 z-50 p-2 "
        onClick={toggleMenu}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/about">About Us</HoveredLink>
              <HoveredLink href="/gallery">Gallery</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
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
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 w-full right-0 h-full backdrop-blur-lg bg-[#03082461] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 mt-16">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-3">Services</h3>
              <div className="flex flex-col space-y-3 ">
                <HoveredLink href="/" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Home</HoveredLink>
                <HoveredLink href="/about" className="text-gray-600 hover:text-gray-900 w-full transition-colors">About Us</HoveredLink>
                <HoveredLink href="/gallery" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Gallery</HoveredLink>
                <HoveredLink href="/contact" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Contact</HoveredLink>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-3">Products</h3>
              <div className="flex flex-col space-y-3 pl-2">
                <HoveredLink href="/store" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Algochurn</HoveredLink>
                <HoveredLink href="/store" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Tailwind Master Kit</HoveredLink>
                <HoveredLink href="/store" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Moonbeam</HoveredLink>
                <HoveredLink href="/store" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Rogue</HoveredLink>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-3">Pricing</h3>
              <div className="flex flex-col space-y-3 pl-2">
                <HoveredLink href="/hobby" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Hobby</HoveredLink>
                <HoveredLink href="/individual" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Individual</HoveredLink>
                <HoveredLink href="/team" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Team</HoveredLink>
                <HoveredLink href="/enterprise" className="text-gray-600 hover:text-gray-900 w-full transition-colors">Enterprise</HoveredLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
