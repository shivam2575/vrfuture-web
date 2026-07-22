import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { WhatsappButton } from "./components/global/WhatsappButton";
import { Footer } from "./components/global/Footer";
import { Header } from "./components/global/Header";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  metadataBase: new URL("https://vrfuture.in"),
  title: {
    template: "%s | VR Future Coaching Institute",
    default: "VR Future Coaching Institute",
  },
  description:
    "VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB & ICSE boards in English, Hindi & Gujarati.",
  openGraph: {
    title: "VR Future Coaching Institute — Learn with Virtual Reality.",
    description:
      "VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB & ICSE boards in English, Hindi & Gujarati.",
    url: "https://vrfuture.in",
    siteName: "VR Future Coaching Institute",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Future Coaching Institute — Learn with Virtual Reality.",
    description:
      "VR-powered coaching for Classes 5–12, JEE & NEET in Daman. CBSE, GSEB & ICSE boards in English, Hindi & Gujarati.",
  },
};

const montserrate = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(montserrate.variable, "font-sans", inter.variable)}
    >
      <body className="font-sans text-brand">
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
