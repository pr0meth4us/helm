import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
    title: "HELM | Digital Exhibition",
    description: "Steer toward digital. The portfolio of Prometheus.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.variable} font-sans bg-helm-dark text-helm-silver min-h-screen`}>
        {children}
        </body>
        </html>
    );
}