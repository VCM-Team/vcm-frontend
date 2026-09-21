import type { Metadata } from "next";
import { Urbanist, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/src/shared/components/layout/SiteChrome";

const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://vcm-frontend.vercel.app"),
    title: {
        default: "VCM",
        template: "%s | VCM",
    },
    description: "Descripción del sitio — reemplázala con la tuya.",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "VCM",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${urbanist.variable} ${montserrat.variable}`}>
        <body className="min-h-dvh bg-bg font-sans text-ink-900 antialiased">
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
        >
            Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        </body>
        </html>
    );
}