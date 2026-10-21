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

const SITE_URL = "https://discovervcm.com";
const SITE_NAME = "VCM";
const SITE_DESCRIPTION =
    "VCM helps U.S. construction and roofing companies grow with business growth consulting and dedicated nearshore talent from LATAM.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Business Growth Consulting & Talent Solutions | VCM",
        template: "%s | VCM",
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    icons: {
        icon: "/icon-yellow.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: SITE_NAME,
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: { index: true, follow: true },
};

// Datos estructurados: identifica a VCM como organización para Google
const ORGANIZATION_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "Virtual Construction Management",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/brand/vcm_dark_logo.webp`,
    description: SITE_DESCRIPTION,
    sameAs: ["https://www.linkedin.com/company/discovervcm"],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
        addressCountry: "PE",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${urbanist.variable} ${montserrat.variable}`}>
        <body className="min-h-dvh overflow-x-clip bg-bg font-sans text-ink-900 antialiased">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />

        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
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