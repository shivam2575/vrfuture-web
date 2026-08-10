"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/constants";
import { EnquiryButton } from "./EnquiryButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    //Store ref value of sentinel
    const sentinelRef = document.getElementById("sentinel");
    if (!sentinelRef) {
      setIsSolid(true);
      return;
    }

    //initialize the observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSolid(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    //start observing
    observer.observe(sentinelRef);

    //when unmount then stop observing
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-40 ${isSolid ? "bg-background shadow-lg" : "bg-transparent"} transition-all duration-300`}
    >
      {/* <div className="h-10 w-full bg-amber-700">trial box</div> */}
      <div className="mr-2 flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo_white.png"
            width={768}
            height={288}
            alt="VRFuture Coaching Institute"
            className="w-auto h-12"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((nav) => (
            <Link key={nav.ref} href={`/${nav.ref}`} className="text-lg">
              {nav.title}
            </Link>
          ))}
          <EnquiryButton />
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
          <EnquiryButton className="w-full" />
        </div>
      )}
    </nav>
  );
}
