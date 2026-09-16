"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/** Rutas que se renderizan sin header ni footer. */
const BARE_ROUTES = ["/book-demo"];

function isBare(pathname: string) {
    return BARE_ROUTES.some((route) => pathname.startsWith(route));
}

export function SiteHeader() {
    return isBare(usePathname()) ? null : <Header />;
}

export function SiteFooter() {
    return isBare(usePathname()) ? null : <Footer />;
}