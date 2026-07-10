import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { WhatsappButton } from "./components/WhatsappButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const montserrate = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrate.variable} ${inter.variable} `}>
      <body className="font-sans text-brand">
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
