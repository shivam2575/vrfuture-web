"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/constants";
import { EnquiryButton } from "./EnquiryButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const sentinelRef = document.getElementById("sentinel");
    if (!sentinelRef) {
      setIsSolid(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSolid(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    observer.observe(sentinelRef);
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        isSolid
          ? "bg-background/70 backdrop-blur-lg border-b border-border shadow-sm"
          : "surface-dark",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={isSolid ? "/logo_yellow.png" : "/logo_white.png"}
            width={768}
            height={288}
            alt="VRFuture Coaching Institute"
            priority
            className="w-auto h-12"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((nav) => {
            const href = `/${nav.ref}`;
            const isActive = pathname === href;
            return (
              <Link
                key={nav.ref}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-1 text-base transition-colors duration-200",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px",
                  "after:origin-left after:scale-x-0 after:bg-highlight",
                  "after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {nav.title}
              </Link>
            );
          })}
          <EnquiryButton />
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((nav) => {
            const href = `/${nav.ref}`;
            const isActive = pathname === href;
            return (
              <Link
                key={nav.ref}
                href={href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-2 py-2.5 transition-colors",
                  isActive
                    ? "bg-muted text-foreground font-medium"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground",
                )}
              >
                {nav.title}
              </Link>
            );
          })}
          <EnquiryButton className="mt-2 w-full" />
        </div>
      )}
    </nav>
  );
}
