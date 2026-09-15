import FeatureGrid, {
    type FeatureGridItem,
} from "@/src/shared/components/ui/FeatureGrid";

const HEADING = {
    title: "Titular de la sección",
};

const ITEMS: readonly FeatureGridItem[] = [
    {
        key: "item-1",
        title: "Título del primer servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: SearchIcon,
    },
    {
        key: "item-2",
        title: "Título del segundo servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: ExportIcon,
    },
    {
        key: "item-3",
        title: "Título del tercer servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: FilterIcon,
    },
    {
        key: "item-4",
        title: "Título del cuarto servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: WindowIcon,
    },
    {
        key: "item-5",
        title: "Título del quinto servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: CloudIcon,
    },
    {
        key: "item-6",
        title: "Título del sexto servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: ImportIcon,
    },
    {
        key: "item-7",
        title: "Título del séptimo servicio",
        description: "Descripción del servicio — reemplázala con el texto propio.",
        Icon: DocCheckIcon,
    },
];

export default function WhatWeHandle() {
    return <FeatureGrid title={HEADING.title} items={ITEMS} />;
}

/* ── Iconos ─────────────────────────────── */

function SearchIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M5 4h6l2 2.5H5V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M5 8h9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="m18.8 18.8 2.2 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function ExportIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M4 5h6l2 2.5H4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M4 9h8v9H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 13.5h7m0 0-2.5-2.5M21 13.5 18.5 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function FilterIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M4 6h16l-6.2 7.2V19l-3.6-2v-3.8L4 6Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function WindowIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" />
            <path d="M6.5 12.5h7M6.5 15.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}

function CloudIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M7.5 18a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.6 1.3A3.6 3.6 0 0 1 17 18H7.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="M12 15.5v-4m0 0-1.8 1.8M12 11.5l1.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ImportIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path d="M12 5h8v14h-8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M3 12h9m0 0-2.5-2.5M12 12l-2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function DocCheckIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
            <path
                d="M6 3.5h7l5 5V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4a.5.5 0 0 1 .5-.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="M13 3.5V9h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="m9.5 14.5 2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}