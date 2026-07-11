import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/hero1.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-white">
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-7xl md:text-9xl font-heading">
            Learn with Virtual Reality
          </h1>
          <p className="text-2xl md:text-5xl font-sans">
            Classes 5-12, JEE, NEET
          </p>
        </div>
        <div className="flex flex-col mt-6 md:flex-row gap-4">
          <Link
            href="/contact"
            className="rounded-full border border-black px-6 py-3 bg-accent-brand hover:bg-yellow-600 text-brand cursor-pointer"
          >
            Enquire Now
          </Link>

          <Link
            href="https://wa.me/917208978248?text=Hi,%20I'd%20like%20to%20know%20about%20VRFuture%20programs"
            className="rounded-full border border-black px-6 py-3 bg-whatsapp text-brand hover:bg-green-600 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp Us
          </Link>
        </div>
      </div>
    </section>
  );
}
