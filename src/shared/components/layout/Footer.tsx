"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

const CTA = {
    title: "Time to",
    titleAccent: "Ditch the Chaos",
    titleRest: "and Lead Like a Pro.",
    subtitle: "Tell us your goals, we've got your back.",
    button: { label: "Free Consultation", href: "/contact-us" },
};

const CONTACT = {
    label: "CONTACT US",
    phone: { label: "Our Phone", value: "(866) 969-5155", href: "tel:+18669695155" },
    email: { label: "Our Email", value: "support@vcm.com", href: "mailto:support@vcm.com" },
    note: "Remote, Time Zone Aligned with U.S.",
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
    { label: "Terms of Service", href: "/terms-of-service" },
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
        <footer className="bg-ink-900 text-white">
            <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-24">
                <Image
                    src="/assets/brand/vcm_logo.webp"
                    alt="VCM"
                    width={200}
                    height={42}
                    className="h-10 w-auto"
                />

                <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Izquierda: titular, subtítulo y botón */}
                    <div className="flex flex-col items-start">
                        <h2 className="max-w-[18ch] text-3xl font-semibold leading-[1.2] sm:text-4xl lg:text-[2.5rem]">
                            {CTA.title}{" "}
                            <span className="text-brand-400">{CTA.titleAccent}</span>{" "}
                            {CTA.titleRest}
                        </h2>

                        <p className="mt-8 text-[15px] text-white/80">{CTA.subtitle}</p>

                        <div className="group mt-14 flex w-fit items-center gap-2">
                            <Link
                                href={CTA.button.href}
                                className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                            >
                                {CTA.button.label}
                            </Link>

                            <Link
                                href={CTA.button.href}
                                aria-hidden
                                tabIndex={-1}
                                className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white"
                            >
                                <ArrowUpRight className="col-start-1 row-start-1 size-4 transition-[translate] duration-300 group-hover:-translate-y-11" />
                                <ArrowUpRight
                                    aria-hidden
                                    className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Derecha: contacto */}
                    <div className="lg:pt-24">
                        <p className="text-[15px] uppercase tracking-[0.04em] text-white">
                            {CONTACT.label}
                        </p>

                        <dl className="mt-8 grid gap-8 sm:grid-cols-2">
                            <div>
                                <dt className="text-[15px] text-white/70">
                                    {CONTACT.phone.label}
                                </dt>
                                <dd className="mt-1">
                                    <Link
                                        href={CONTACT.phone.href}
                                        className="text-[15px] text-white underline underline-offset-4 transition-colors hover:text-brand-400"
                                    >
                                        {CONTACT.phone.value}
                                    </Link>
                                </dd>
                            </div>

                            <div>
                                <dt className="text-[15px] text-white/70">
                                    {CONTACT.email.label}
                                </dt>
                                <dd className="mt-1">
                                    <Link
                                        href={CONTACT.email.href}
                                        className="break-all text-[15px] text-white underline underline-offset-4 transition-colors hover:text-brand-400"
                                    >
                                        {CONTACT.email.value}
                                    </Link>
                                </dd>
                            </div>
                        </dl>

                        <p className="mt-8 max-w-[24ch] text-[15px] text-white/80">
                            {CONTACT.note}
                        </p>
                    </div>
                </div>

                {/* ── Navegación ──────────────────────────────── */}
                <nav className="mt-20 lg:mt-24">
                    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:justify-between lg:gap-x-4">
                        {FOOTER_NAV.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "text-[13px] uppercase tracking-[0.08em] transition-colors hover:text-brand-400",
                                        isActive(item.href) ? "text-brand-400" : "text-white/85"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ── Barra inferior ──────────────────────────── */}
                <div className="mt-8 border-t border-brand-400/50 py-8 lg:py-10">
                    <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:gap-4 lg:text-left">
                        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
                            <p className="text-[13px] text-white/85">
                                © {new Date().getFullYear()} VCM. All Rights Reserved
                            </p>
                            {LEGAL.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-[13px] text-white/85 transition-colors hover:text-brand-400"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <ul className="flex items-center justify-center gap-6">
                            {SOCIAL.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="block text-white transition-colors hover:text-brand-400"
                                    >
                                        <Icon className="size-4" aria-hidden />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}