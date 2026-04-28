"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/umkm", label: "Direktori UMKM" },
    { href: "/pembiayaan", label: "Info Pembiayaan" },
    { href: "/event", label: "Event & Pelatihan" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-primary-600 tracking-tight">GARENG GO!</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            className="text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-full transition-colors"
          >
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-primary-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            className="block text-base font-medium text-primary-600"
            onClick={() => setIsOpen(false)}
          >
            Login Admin
          </Link>
        </div>
      )}
    </nav>
  );
}
