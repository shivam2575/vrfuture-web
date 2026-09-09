import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "../../constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section } from "./Section";

const headingClass =
  "mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground";

export function Footer() {
  return (
    <footer className="surface-dark bg-background text-foreground">
      <Section className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo_white.png"
                width={180}
                height={72}
                alt="VRFuture Coaching Institute"
                className="w-auto h-10"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Fall in love with Learning
            </p>

            <p className={`${headingClass} mt-8`}>Social</p>
            <div className="flex gap-4">
              {SOCIALS.map(({ id, Icon, label, url }) => (
                <Link
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className={headingClass}>QUICK LINKS</p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((nav) => (
                <Link
                  href={`/${nav.ref}`}
                  key={nav.ref}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className={headingClass}>Contact</p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 shrink-0 h-4 w-4" />A - Maruti Appt,
                Nani, Tin Batti, Daman, Marwad, Dadra and Nagar Haveli and Daman
                and Diu 396210
              </p>
              <a
                href="tel:+918849620478"
                className="flex items-center gap-2.5 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                088496 20478
              </a>
              <a
                href="tel:+918849620478"
                className="flex items-center gap-2.5 transition-colors hover:text-foreground"
              >
                <Mail className="shrink-0 h-4 w-4" />
                vrfuture@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VRFuture Coaching Institute
        </div>
      </Section>
    </footer>
  );
}
