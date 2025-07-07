"use Client";
import "./globals.css";
import { Montserrat, Quicksand } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "EMME CONSTRUCTION LTD - Yacht Services & HotelCare",
  description:
    "Premium yacht construction, transformation, and repair services in Malta. Professional hotel maintenance through our HotelCare division.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${quicksand.variable}`}>
      <body className="font-montserrat bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
