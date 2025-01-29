import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import MainLayout from "@/app/main-layout";


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
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    );
}
