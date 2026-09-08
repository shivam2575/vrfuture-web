import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "../../constants";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="surface-dark bg-background flex flex-col text-foreground items-center justify-center p-2">
      <div className="flex flex-col items-center justify-evenly gap-8 md:flex-row md:justify-between">
        {/* Logo + tag line */}
        <div className="mt-2">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <Image
                src="/logo_white.png"
                width={180}
                height={72}
                alt="VRFuture Coaching Institute"
                className="w-auto h-10"
              />
            </Link>
          </div>
          {/* Tagline */}
          <div className="">Fall in love with Learning</div>
        </div>

        {/* Quick links (nav) */}
        <div className="flex flex-col">
          {NAV_LINKS.map((nav) => (
            <Link href={`/${nav.ref}`} key={nav.ref}>
              {nav.title}
            </Link>
          ))}
        </div>

        {/* Social links */}
        <div className="flex md:flex-col gap-6">
          {SOCIALS.map(({ id, Icon, label, url }) => (
            <Link
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>

        {/* Contact block*/}
        <div className="flex flex-col gap-2 ml-2">
          <div className="flex items-start gap-2 mb-1">
            <MapPin className="mt-1 shrink-0" />
            <p>
              A - Maruti Appt, Nani, Tin Batti, Daman, Marwad, Dadra and
              <br />
              Nagar Haveli and Daman and Diu 396210
            </p>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Phone className="shrink-0" />
            <p>088496 20478</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="shrink-0" />
            <p>vrfuture@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <p>© {new Date().getFullYear()} VRFuture Coaching Institute</p>
      </div>
    </footer>
  );
}
