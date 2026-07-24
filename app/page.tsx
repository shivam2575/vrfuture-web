import { About } from "./components/homepage/About";
import { Courses } from "./components/homepage/Courses";
import { CTA } from "./components/homepage/CTA";
import { Hero } from "./components/homepage/Hero";
import { Testimonials } from "./components/homepage/Testimonials";
import { Trust } from "./components/homepage/Trust";
import { WhyVR } from "./components/homepage/WhyVR";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "V R Future Coaching Institute",
    description:
      "V R Future is here to introduce you to the concept of Education with Virtual Reality. Admissions Open for grade 5th - 12th (CBSE/ICSE/GSEB) for the year 2025-2026. 7 days free demo lectures available.",
    url: "https://vrfuture.in",
    telephone: "+918849620478",
    logo: "https://vrfuture.in/logo_white.png",
    image: "https://vrfuture.in/og-image.png",
    sameAs: [
      "https://www.instagram.com/vrfuture_",
      "https://www.facebook.com/vrfuture20/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "A- Maruti Appt, Nani, Tin Batti, Daman",
      addressLocality: "Marwad",
      addressRegion: "Dadra and Nagar Haveli and Daman and Diu",
      postalCode: "396210",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.419514029303482",
      longitude: "72.83326378160012",
    },
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhyVR />
      <About />
      <Courses />
      <Trust />
      <Testimonials />
      <CTA />
    </div>
  );
}
