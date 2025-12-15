import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google"; // Added Cormorant_Garamond
import "./globals.css";
import { RadarCursor } from '@/components/ui/RadarCursor'; // Import here

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
// Define Cormorant Garamond
const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: '--font-cormorant-garamond',
    weight: ['300', '400', '600', '700'],
    style: ['normal', 'italic']
});

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
        <body className={`${inter.variable} ${cormorant.variable} font-sans bg-helm-dark text-helm-silver min-h-screen cursor-none`}>

        <RadarCursor /> {/* Add here */}
        {children}
        </body>
        </html>
    );
}