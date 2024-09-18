import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";


export const metadata: Metadata = {
  title: "Systeno",
  description: "Enogrid's Design System",
};

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
