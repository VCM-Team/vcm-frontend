"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { cn } from "@/src/lib/utils";

const CTA = {
    title: "Primera parte del titular",
    titleAccent: "parte resaltada",
    titleRest: "y cierre del titular.",
    subtitle: "Línea de apoyo del CTA.",
    button: { label: "Free Consultation", href: "/contact-us" },
};

const CONTACT = {
    label: "CONTACT US",
    phone: { label: "Our Phone", value: "(000) 000-0000", href: "tel:+10000000000" },
    email: { label: "Our Email", value: "email@dominio.com", href: "mailto:email@dominio.com" },
    note: "Nota de ubicación o disponibilidad.",
};

const FOOTER_NAV = [
    { label: "Who we are", href: "/about-us" },
    { label: "Careers", href: "/about-us/jobs" },
    { label: "Roofing Services", href: "/services" },
    { label: "Success story", href: "/success-story" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQ", href: "/faq" },
];

const LEGAL = [
    { label: "Terms Of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
];

const SOCIAL = [
    { label: "Instagram", href: "https://instagram.com/", Icon: FaInstagram },
    { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutube },
    { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedinIn },
    { label: "Facebook", href: "https://facebook.com/", Icon: FaFacebookF },
];

export default function Footer() {
    const pathname = usePathname();
    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <footer className="bg-white">
            {/* ── Panel CTA ───────────────────────────────── */}
            <div className="px-0 lg:px-3">
                <div className="rounded-b-[2rem] bg-surface-soft px-5 py-14 lg:rounded-[2rem] lg:px-16 lg:py-16">
                    <div className="mx-auto max-w-6xl">
                        {/* Logo centrado en mobile */}
                        <Image
                            src="/logo.svg"
                            alt="VCM"
                            width={172}
                            height={36}
                            className="mx-auto mb-8 lg:mx-0"
                        />

                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            {/* Izquierda: titular + botón */}
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                <h2 className="text-3xl font-semibold leading-[1.15] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                                    {CTA.title}{" "}
                                    <span className="text-brand-400">{CTA.titleAccent}</span>{" "}
                                    {CTA.titleRest}
                                </h2>

                                <p className="mt-5 text-base text-ink-900">{CTA.subtitle}</p>

                                <div className="mt-10 flex items-center justify-center gap-2 lg:mt-auto lg:justify-start lg:pt-14">
                                    <Link
                                        href={CTA.button.href}
                                        className="inline-flex items-center rounded-full bg-navy-800 px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-ink-900"
                                    >
                                        {CTA.button.label}
                                    </Link>
                                    <Link
                                        href={CTA.button.href}
                                        aria-hidden
                                        tabIndex={-1}
                                        className="grid size-[52px] shrink-0 place-items-center rounded-full bg-navy-800 text-brand-400 transition-transform duration-200 hover:-translate-y-0.5"
                                    >
                                        <ArrowUpRight />
                                    </Link>
                                </div>
                            </div>

                            {/* Derecha: contacto */}
                            <div className="text-center lg:pt-24 lg:text-left">
                                <p className="text-[15px] text-ink-600">{CONTACT.label}</p>

                                <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <dt className="text-[15px] text-ink-900">
                                            {CONTACT.phone.label}
                                        </dt>
                                        <dd>
                                            <a
                                                href={CONTACT.phone.href}
                                                className="text-[15px] text-ink-900 transition-colors hover:text-brand-500"
                                            >
                                                {CONTACT.phone.value}
                                            </a>
                                        </dd>
                                    </div>

                                    <div>
                                        <dt className="text-[15px] text-ink-900">
                                            {CONTACT.email.label}
                                        </dt>
                                        <dd>
                                            <a
                                                href={CONTACT.email.href}
                                                className="text-[15px] text-ink-900 transition-colors hover:text-brand-500"
                                            >
                                                {CONTACT.email.value}
                                            </a>
                                        </dd>
                                    </div>
                                </dl>

                                <p className="mx-auto mt-6 max-w-[22ch] text-[15px] text-ink-900 sm:max-w-none lg:mx-0">
                                    {CONTACT.note}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Navegación ──────────────────────────────── */}
            <nav className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-between lg:gap-x-4">
                    {FOOTER_NAV.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-sm uppercase tracking-[0.06em] transition-colors hover:text-brand-500",
                                    isActive(item.href) ? "text-brand-400" : "text-ink-900"
                                )}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ── Barra inferior ──────────────────────────── */}
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <div className="border-t border-slate-200 py-8">
                    <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:gap-4 lg:text-left">
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                            <p className="text-sm text-ink-900">
                                © {new Date().getFullYear()} VCM. ALL RIGHTS RESERVED
                            </p>
                            {LEGAL.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm text-ink-900 transition-colors hover:text-brand-500"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <ul className="flex items-center justify-center gap-5">
                            {SOCIAL.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="block text-navy-800 transition-colors hover:text-brand-500"
                                    >
                                        <Icon className="size-5" aria-hidden />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function ArrowUpRight() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M7 17 17 7M8 7h9v9"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
            />
        </svg>
    );
}