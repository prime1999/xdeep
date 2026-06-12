import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

// Configure custom local font
const myCustomFont = localFont({
  src: [
    {
      path: "./fonts/font-embrace.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});
const myDeepFont = localFont({
  src: [
    {
      path: "./fonts/font-adelia.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-deep",
});

export const metadata: Metadata = {
  title: "X-Deep",
  description:
    "A special session designed for deep, unfiltered conversations about life, personal growth, and navigating the real world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${lato.variable} ${myCustomFont.variable} ${myDeepFont.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
