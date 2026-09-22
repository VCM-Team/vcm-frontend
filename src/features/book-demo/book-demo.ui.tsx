"use client";

import type { ComponentType, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

/* ── Encabezado común de cada paso ─────── */

export function StepShell({
                              title,
                              description,
                              icon,
                              children,
                          }: {
    title: string;
    description?: string;
    icon?: ReactNode;
    children: ReactNode;
}) {
    return (
        <div className="mx-auto w-full max-w-2xl px-5 py-12 lg:py-20">
            <div className="flex flex-col items-center text-center">
                {icon && (
                    <span className="mb-6 grid size-14 place-items-center rounded-full bg-brand-400/15 text-brand-400">
                        {icon}
                    </span>
                )}

                <h1 className="text-3xl font-semibold leading-tight text-white lg:text-[2.5rem]">
                    {title}
                </h1>

                {description && (
                    <p className="mt-3 text-base text-white/60 lg:text-lg">{description}</p>
                )}
            </div>

            <div className="mt-10 lg:mt-12">{children}</div>
        </div>
    );
}

/* ── Tarjeta de opción única (radio) ───── */

export function ChoiceCard({
                               title,
                               description,
                               selected,
                               onSelect,
                               Icon,
                           }: {
    title: string;
    description?: string;
    selected: boolean;
    onSelect: () => void;
    Icon?: ComponentType<{ className?: string }>;
}) {
    return (
        <button
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={onSelect}
            className={cn(
                "flex w-full cursor-pointer items-center gap-4 rounded-2xl border p-5 text-left",
                "transition-[background-color,border-color,translate] duration-200",
                "hover:-translate-y-0.5",
                selected
                    ? "border-brand-400 bg-brand-400/10"
                    : "border-white/10 bg-white/[0.06] hover:border-white/25"
            )}
        >
            {Icon && (
                <span
                    className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-200",
                        selected ? "bg-brand-400 text-black" : "bg-white/10 text-white/70"
                    )}
                >
                    <Icon className="size-5" />
                </span>
            )}

            <span className="flex-1">
                <span className="block text-lg font-semibold text-white">{title}</span>
                {description && (
                    <span className="mt-1 block text-sm text-white/55">{description}</span>
                )}
            </span>

            <span
                className={cn(
                    "grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors duration-200",
                    selected ? "border-brand-400" : "border-white/25"
                )}
            >
                {selected && <span className="size-2.5 rounded-full bg-brand-400" />}
            </span>
        </button>
    );
}

/* ── Tarjeta de selección múltiple ─────── */

export function ToggleCard({
                               label,
                               selected,
                               onToggle,
                               Icon,
                           }: {
    label: string;
    selected: boolean;
    onToggle: () => void;
    Icon: ComponentType<{ className?: string }>;
}) {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={selected}
            onClick={onToggle}
            className={cn(
                "flex cursor-pointer flex-col items-center gap-3 rounded-2xl border p-6",
                "transition-[background-color,border-color,translate] duration-200 hover:-translate-y-0.5",
                selected
                    ? "border-brand-400 bg-brand-400/10"
                    : "border-white/10 bg-white/[0.06] hover:border-white/25"
            )}
        >
            <span
                className={cn(
                    "grid size-12 place-items-center rounded-full transition-colors duration-200",
                    selected ? "bg-brand-400 text-black" : "bg-white/10 text-white/70"
                )}
            >
                <Icon className="size-6" />
            </span>
            <span
                className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    selected ? "text-brand-400" : "text-white/80"
                )}
            >
                {label}
            </span>
        </button>
    );
}

/* ── Pill seleccionable ────────────────── */

export function SelectPill({
                               label,
                               selected,
                               onToggle,
                           }: {
    label: string;
    selected: boolean;
    onToggle: () => void;
}) {
    return (
        <button
            type="button"
            aria-pressed={selected}
            onClick={onToggle}
            className={cn(
                "cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200",
                selected
                    ? "border-brand-400 bg-brand-400 text-black"
                    : "border-white/10 bg-white/[0.06] text-white/80 hover:border-white/25"
            )}
        >
            {label}
        </button>
    );
}

/* ── Campo de texto ────────────────────── */

export function TextField({
                              label,
                              value,
                              onChange,
                              placeholder,
                              type = "text",
                              autoComplete,
                          }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    type?: string;
    autoComplete?: string;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                autoComplete={autoComplete}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-[15px] text-white outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-brand-400"
            />
        </label>
    );
}

/* ── Botón principal ───────────────────── */

export function StepButton({
                               children,
                               onClick,
                               disabled,
                               type = "button",
                           }: {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit";
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-semibold",
                "transition-colors duration-200",
                disabled
                    ? "cursor-not-allowed bg-white/10 text-white/40"
                    : "bg-brand-400 text-black hover:bg-brand-500 hover:text-white"
            )}
        >
            {children}
        </button>
    );
}