import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

const satoshi = localFont({
  src: [
    { path: "../../public/fonts-satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts-satoshi/Satoshi-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts-satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts-satoshi/Satoshi-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts-satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts-satoshi/Satoshi-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts-satoshi/Satoshi-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts-satoshi/Satoshi-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-satoshi",
});

// const clashDisplay = localFont({
//   src: [
//     { path: "../../public/fonts/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../../public/fontsClashDisplay-Medium.woff2", weight: "500", style: "normal" },
//     { path: "../../public/fonts/ClashDisplay-Semibold.woff2", weight: "700", style: "normal" },
//     { path: "../../public/fonts/ClashDisplay-Bold.woff2", weight: "900", style: "normal" },
//   ],
//   variable: "--font-clashDisplay",
// });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable}  antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}