import type { Metadata } from "next";
import { Geist, Geist_Mono ,Rubik} from "next/font/google";
import "./globals.css";
import Navabar from "@/components/ui/Navabar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Fresh Harvests',
  description: 'Your one-stop shop for fresh produce.',
};
const roboto = Rubik({
  weight: '400',
  
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
         <Navabar />
        {children}
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
