import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "../../constants";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand flex flex-col text-white items-center justify-center p-2">
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
                className="w-auto h-auto "
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
          {SOCIALS.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <div className="relative h-6 w-6">
                <Image
                  src={social.src}
                  alt={social.alt}
                  className="object-contain"
                  sizes="24px"
                />
              </div>
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
        {/* Google map block */}
        <div className="my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.116102399088!2d72.83073177639803!3d20.41930288108189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0db998798bf1d%3A0xbb39b0acec2edbfe!2sV%20R%20Future%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1783707026938!5m2!1sen!2sin"
            className="w-full max-w-md"
            title="VRFuture location map"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div className="text-center my-4">
        <p>© {new Date().getFullYear()} VRFuture Coaching Institute</p>
      </div>
    </footer>
  );
}
