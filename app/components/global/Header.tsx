"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { title: "Home", ref: "" },
  { title: "Programs", ref: "programs" },
  { title: "Faculty", ref: "faculty" },
  { title: "Gallery", ref: "gallery" },
  { title: "Testimonials", ref: "testimonials" },
  { title: "Contact", ref: "contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mr-2 flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo_white.png"
            width={250}
            height={100}
            alt="VRFuture Coaching Institute"
            className="w-auto h-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((nav) => (
            <Link key={nav.ref} href={`/${nav.ref}`} className="text-lg">
              {nav.title}
            </Link>
          ))}
          <button className="rounded-full bg-accent-brand px-4 py-2 font-semibold text-xl text-brand">
            Enquire Now
          </button>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="flex flex-col gap-4 px-6 py-4 md:hidden">
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.ref}
              href={`/${nav.ref}`}
              onClick={() => setIsOpen(false)}
            >
              {nav.title}
            </Link>
          ))}
          <button className="rounded-full bg-accent px-4 py-2 font-semibold text-brand">
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
}
