"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useHeaderScroll } from "@/src/shared/hooks/useHeaderScroll";
import {
    NAV_ITEMS,
    type NavItem,
    type NavMenu,
} from "@/src/shared/data/navigation";
import { cn } from "@/src/lib/utils";

const CLOSE_DELAY = 140;

const EASE_IN = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const EASE_OUT = "ease-[cubic-bezier(0.55,0,1,0.45)]";

export default function Header() {
    const pathname = usePathname();
    const { hidden, scrolled } = useHeaderScroll();

    const [openKey, setOpenKey] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isHome = pathname === "/";
    const isTransparent = isHome && !scrolled && !mobileOpen;
    const isHidden = hidden && !mobileOpen;

    // Cerrar al navegar
    const lastPath = useRef(pathname);

    if (lastPath.current !== pathname) {
        lastPath.current = pathname;

        if (openKey !== null) setOpenKey(null);
        if (mobileOpen) setMobileOpen(false);
    }

    // El menú abierto no sobrevive al header oculto
    const activeKey = hidden ? null : openKey;

    // El submenú no sobrevive al drawer cerrado
    const activeSubmenu = mobileOpen ? mobileSubmenu : null;

    // Bloquear scroll del body con el drawer abierto
    useEffect(() => {
        if (!mobileOpen) return;

        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previous;
        };
    }, [mobileOpen]);

    // Cerrar con Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;

            setOpenKey(null);
            setMobileOpen(false);
        };

        window.addEventListener("keydown", onKey);

        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Limpiar timer
    useEffect(() => {
        return () => {
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
            }
        };
    }, []);

    const open = (key: string) => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }

        setOpenKey(key);
    };

    const scheduleClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }

        closeTimer.current = setTimeout(() => {
            setOpenKey(null);
        }, CLOSE_DELAY);
    };

    return (
        <header
            data-transparent={isTransparent}
            className={cn(
                "group fixed inset-x-0 top-0 z-50",
                "transition-[translate,background-color,box-shadow]",
                "motion-reduce:transition-none will-change-transform",
                "bg-white shadow-sm",
                isTransparent && "lg:bg-transparent lg:shadow-none",
                isHidden
                    ? cn("lg:-translate-y-full duration-300", EASE_OUT)
                    : cn("translate-y-0 duration-[600ms]", EASE_IN)
            )}
        >
            <div className="mx-auto flex min-h-header-sm max-w-7xl items-center justify-between px-7 pb-4 pt-4 lg:min-h-header lg:px-1 lg:pb-8 lg:pt-7">
                <Link href="/" className="shrink-0">
                    <Image
                        src="https://workninjas.com/wp-content/uploads/2025/02/colorWN.svg"
                        alt="WorkNinjas"
                        width={260}
                        height={54}
                        priority
                        className="h-10 w-auto lg:h-12.5"
                    />
                </Link>

                <nav
                    className="relative hidden h-full lg:flex lg:items-center lg:gap-2"
                    onMouseLeave={scheduleClose}
                >
                    {NAV_ITEMS.map((item) => (
                        <NavEntry
                            key={item.key}
                            item={item}
                            isOpen={activeKey === item.key}
                            onOpen={() => open(item.key)}
                            onClose={scheduleClose}
                        />
                    ))}
                </nav>

                <Link
                    href="/book-demo"
                    className="hidden rounded-full bg-brand-400 px-7 py-2.5 text-base font-medium text-[#044065] transition-colors hover:bg-brand-500 lg:inline-flex"
                >
                    Book a Demo
                </Link>

                <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-nav"
                    aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                    className="grid size-12 place-items-center rounded-full bg-navy-800 text-white transition-transform duration-200 active:scale-95 lg:hidden"
                >
          <span
              className={cn(
                  "transition-transform duration-300",
                  mobileOpen && "rotate-90"
              )}
          >
            {mobileOpen ? <CloseIcon /> : <GridIcon />}
          </span>
                </button>
            </div>

            {/* Drawer móvil */}
            <div
                id="mobile-nav"
                className={cn(
                    "grid lg:hidden",
                    "transition-[grid-template-rows,opacity,visibility] duration-[400ms]",
                    "motion-reduce:transition-none",
                    mobileOpen
                        ? cn("visible grid-rows-[1fr] opacity-100", EASE_IN)
                        : cn("invisible grid-rows-[0fr] opacity-0", EASE_OUT)
                )}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="max-h-[calc(100dvh-var(--spacing-header-sm))] overflow-y-auto overscroll-contain border-t border-black/5 bg-surface-soft">
                        <ul>
                            {NAV_ITEMS.map((item) => (
                                <MobileEntry
                                    key={item.key}
                                    item={item}
                                    isOpen={activeSubmenu === item.key}
                                    onToggle={() =>
                                        setMobileSubmenu((k) =>
                                            k === item.key ? null : item.key
                                        )
                                    }
                                    onNavigate={() => setMobileOpen(false)}
                                />
                            ))}
                        </ul>

                        <div className="p-5">
                            <Link
                                href="/contact-us"
                                onClick={() => setMobileOpen(false)}
                                className="flex justify-center rounded-full bg-brand-400 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-500"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
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

function NavEntry({
                      item,
                      isOpen,
                      onOpen,
                      onClose,
                  }: EntryProps) {
    const hasMenu = Boolean(item.menu);

    return (
        <div
            className={cn(
                "flex h-full items-center",
                item.menu?.type === "simple" && "relative"
            )}
            onMouseEnter={hasMenu ? onOpen : undefined}
            onFocus={hasMenu ? onOpen : undefined}
            onBlur={(e) => {
                if (
                    hasMenu &&
                    !e.currentTarget.contains(e.relatedTarget as Node)
                ) {
                    onClose();
                }
            }}
        >
            <Link
                href={item.href}
                aria-expanded={hasMenu ? isOpen : undefined}
                className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-medium",
                    "transition-colors duration-200",
                    "text-ink-900 hover:text-brand-500",
                    "group-data-[transparent=true]:text-white",
                    !isOpen &&
                    "group-data-[transparent=true]:hover:text-white/80",
                    isOpen &&
                    "bg-white/90 text-brand-500 shadow-sm hover:text-brand-500 group-data-[transparent=true]:text-brand-500"
                )}
            >
                {item.label}

                {hasMenu && (
                    <Chevron
                        className={cn(
                            "transition-transform duration-300",
                            isOpen && "rotate-180"
                        )}
                    />
                )}
            </Link>

            {item.menu && (
                <MenuPanel menu={item.menu} isOpen={isOpen} />
            )}
        </div>
    );
}

type MobileEntryProps = {
    item: NavItem;
    isOpen: boolean;
    onToggle: () => void;
    onNavigate: () => void;
};

function MobileEntry({
                         item,
                         isOpen,
                         onToggle,
                         onNavigate,
                     }: MobileEntryProps) {
    const links = item.menu?.links ?? [];

    return (
        <li className="border-b border-white/70">
            <div className="flex items-center">
                <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="flex-1 px-5 py-4 text-[15px] font-medium text-ink-900 transition-colors hover:bg-brand-400 hover:text-white"
                >
                    {item.label}
                </Link>

                {links.length > 0 && (
                    <button
                        type="button"
                        onClick={onToggle}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Cerrar" : "Abrir"} ${item.label}`}
                        className="grid size-14 place-items-center text-ink-900 transition-colors hover:text-brand-500"
                    >
                        <Chevron
                            className={cn(
                                "transition-transform duration-300",
                                isOpen && "rotate-180"
                            )}
                        />
                    </button>
                )}
            </div>

            {links.length > 0 && (
                <div
                    className={cn(
                        "grid transition-[grid-template-rows,opacity,visibility] duration-300",
                        "motion-reduce:transition-none",
                        isOpen
                            ? cn("visible grid-rows-[1fr] opacity-100", EASE_IN)
                            : cn(
                                "invisible grid-rows-[0fr] opacity-0",
                                EASE_OUT
                            )
                    )}
                >
                    <ul className="min-h-0 overflow-hidden bg-white/60">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    onClick={onNavigate}
                                    className="block px-8 py-3 text-[15px] text-ink-900 transition-colors hover:bg-brand-400 hover:text-white"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}

function MenuPanel({
                       menu,
                       isOpen,
                   }: {
    menu: NavMenu;
    isOpen: boolean;
}) {
    const wrapper = cn(
        "absolute top-full z-10 pt-3",
        "transition-[opacity,translate,visibility] duration-300 motion-reduce:transition-none",
        isOpen
            ? cn("visible translate-y-0 opacity-100", EASE_IN)
            : cn(
                "invisible -translate-y-2 opacity-0 pointer-events-none",
                EASE_OUT
            ),
        menu.type === "mega"
            ? "left-1/2 w-[780px] -translate-x-1/2"
            : "left-0"
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
        <div
            className={cn(
                wrapper,
                isOpen
                    ? "-translate-x-1/2 translate-y-0"
                    : "-translate-x-1/2 -translate-y-2"
            )}
        >
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
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden
        >
            <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ArrowUpRight() {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                d="M7 17 17 7M8 7h9v9"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function GridIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
        >
            {[5, 12, 19].map((cy) =>
                [5, 12, 19].map((cx) => (
                    <circle
                        key={`${cx}-${cy}`}
                        cx={cx}
                        cy={cy}
                        r="1.8"
                    />
                ))
            )}
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}