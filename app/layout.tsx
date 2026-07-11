import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { WhatsappButton } from "./components/global/WhatsappButton";
import { Footer } from "./components/global/Footer";
import { Header } from "./components/global/Header";
import { cn } from "@/lib/utils";

const montserrate = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(montserrate.variable, "font-sans", inter.variable)}>
      <body className="font-sans text-brand">
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
