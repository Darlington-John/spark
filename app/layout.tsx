import type { Metadata } from "next";
import "./globals.css";
import { UtilsProvider } from "./context/utils-context";
import Header from "./components/header";

import localFont from "next/font/local";
import Footer from "./components/footer";
import Overlay from "./components/overlay";
import BgGradients from "./components/bg-gradient";

export const metadata: Metadata = {
  title: "Spark",
  description: "The World first AI powered banking",
};

const neue_reg = localFont({
  src: "./../public/fonts/neue.otf",
  variable: "--font-neue-reg",
});

const neue_bold = localFont({
  src: "./../public/fonts/neue-bold.otf",
  variable: "--font-neue-bold",
});
const neue_thin = localFont({
  src: "./../public/fonts/neue-thin.otf",
  variable: "--font-neue-thin",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${neue_reg.variable}  ${neue_bold.variable}  ${neue_thin.variable} antialiased`}
      >
        <UtilsProvider>
          <Header />
          <BgGradients />
          {children}
          <Overlay />
          <Footer />
        </UtilsProvider>
      </body>
    </html>
  );
}
