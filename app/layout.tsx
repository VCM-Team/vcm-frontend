import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/src/shared/components/layout/Header";
import "./globals.css";
import Footer from "@/src/shared/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
      <html lang="en" className={poppins.variable}>
      <body className="min-h-dvh bg-white font-sans text-ink-900 antialiased">
      <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Header />
      <main id="main">{children}</main>
      <Footer />
      </body>
      </html>
  );
}