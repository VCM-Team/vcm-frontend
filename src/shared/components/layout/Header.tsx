"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useHeaderScroll} from "@/src/shared/hooks/useHeaderScroll";
import { NAV_ITEMS, type NavItem, type NavMenu } from "@/src/shared/data/navigation";
import { cn } from "@/src/lib/utils";

const CLOSE_DELAY = 140;

export default function Header() {
    const pathname = usePathname();
    const { hidden, scrolled } = useHeaderScroll();
    const [openKey, setOpenKey] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isHome = pathname === "/";
    const isTransparent = isHome && !scrolled && !openKey;

    // cerrar al navegar
    useEffect(() => {
        setOpenKey(null);
        setMobileOpen(false);
    }, [pathname]);

    // cerrar cuando el header se oculta
    useEffect(() => {
        if (hidden) setOpenKey(null);
    }, [hidden]);

    // cerrar con Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenKey(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    }, []);

    const open = (key: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenKey(key);
    };

    const scheduleClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY);
    };

    return (
        <header
            data-transparent={isTransparent}
            className={cn(
                "fixed inset-x-0 top-0 z-50",
                "transition-[transform,background-color,box-shadow] duration-300 ease-out",
                "motion-reduce:transition-none will-change-transform",
                "bg-white shadow-sm translate-y-0",
                isTransparent && "lg:bg-transparent lg:shadow-none",
                hidden && !mobileOpen && "lg:-translate-y-full"
            )}
        >
            <div className="mx-auto flex h-header-sm max-w-7xl items-center justify-between px-5 lg:h-header lg:px-8">
                <Link href="/" className="shrink-0">
                    <Image src="/logo.svg" alt="WorkNinjas" width={196} height={40} priority />
                </Link>

                <nav
                    className="relative hidden h-full lg:flex lg:items-center lg:gap-2"
                    onMouseLeave={scheduleClose}
                >
                    {NAV_ITEMS.map((item) => (
                        <NavEntry
                            key={item.key}
                            item={item}
                            isOpen={openKey === item.key}
                            onOpen={() => open(item.key)}
                            onClose={scheduleClose}
                        />
                    ))}
                </nav>

                <Link
                    href="/contact-us"
                    className="hidden rounded-full bg-brand-400 px-7 py-3 text-[15px] font-medium text-white transition-colors hover:bg-brand-500 lg:inline-flex"
                >
                    Book a Demo
                </Link>

                <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-expanded={mobileOpen}
                    aria-label="Abrir menú"
                    className="grid size-11 place-items-center rounded-full bg-navy-800 text-white lg:hidden"
                >
                    <GridIcon />
                </button>
            </div>
        </header>
    );
}

type EntryProps = {
    item: NavItem;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

function NavEntry({ item, isOpen, onOpen, onClose }: EntryProps) {
    const hasMenu = Boolean(item.menu);

    return (
        <div
            className={cn("flex h-full items-center", item.menu?.type === "simple" && "relative")}
            onMouseEnter={hasMenu ? onOpen : undefined}
            onFocus={hasMenu ? onOpen : undefined}
            onBlur={(e) => {
                if (hasMenu && !e.currentTarget.contains(e.relatedTarget as Node)) onClose();
            }}
        >
            <Link
                href={item.href}
                aria-expanded={hasMenu ? isOpen : undefined}
                className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-medium",
                    "transition-colors duration-200",
                    "text-ink-900 hover:text-brand-500",
                    isOpen && "bg-white/90 text-ink-900 shadow-sm"
                )}
            >
                {item.label}
                {hasMenu && (
                    <Chevron className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
                )}
            </Link>

            {item.menu && <MenuPanel menu={item.menu} isOpen={isOpen} />}
        </div>
    );
}

function MenuPanel({ menu, isOpen }: { menu: NavMenu; isOpen: boolean }) {
    const wrapper = cn(
        "absolute top-full z-10 pt-3",
        "transition-all duration-200 ease-out motion-reduce:transition-none",
        isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        menu.type === "mega" ? "left-1/2 w-[780px] -translate-x-1/2" : "left-0"
    );

    if (menu.type === "simple") {
        return (
            <div className={wrapper}>
                <ul className="min-w-[184px] rounded-2xl bg-surface-soft p-3 shadow-xl ring-1 ring-black/5">
                    {menu.links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className="block rounded-lg px-4 py-2.5 text-[15px] text-ink-900 transition-colors hover:bg-white hover:text-brand-500"
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className={cn(wrapper, isOpen && "translate-y-0 -translate-x-1/2")}>
            <div className="grid grid-cols-[300px_1fr] gap-10 rounded-3xl bg-surface-soft p-8 shadow-xl ring-1 ring-black/5">
                <Link
                    href={menu.promo.ctaHref}
                    className="group/promo flex flex-col justify-between rounded-2xl bg-navy-800 p-7 transition-transform duration-200 hover:-translate-y-0.5"
                >
                    <p className="text-lg font-semibold leading-snug text-brand-400">
                        {menu.promo.title}
                    </p>
                    <span className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-white">
            {menu.promo.ctaLabel}
                        <span className="grid size-5 place-items-center rounded-full bg-brand-400 text-navy-800 transition-transform duration-200 group-hover/promo:translate-x-0.5">
              <ArrowUpRight />
            </span>
          </span>
                </Link>

                <div>
                    <p className="mb-5 text-xs font-semibold tracking-[0.12em] text-ink-600">
                        {menu.groupLabel}
                    </p>
                    <ul className="space-y-1">
                        {menu.links.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-[15px] text-ink-900 transition-colors hover:bg-white hover:text-brand-500"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Chevron({ className }: { className?: string }) {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

function ArrowUpRight() {
    return (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

function GridIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            {[5, 12, 19].map((cy) =>
                [5, 12, 19].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" />)
            )}
        </svg>
    );
}