import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import CountUp from "@/src/shared/components/ui/CountUp";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

type Props = {
    badge: string;
    title: string;
    titleRest?: string;
    /** Parte final del titular, en amarillo. */
    titleAccent?: string;
    className?: string;
};

// Datos del gráfico. PLACEHOLDER: confirmar las cifras antes de publicar (ver nota del pie)
const CHART = {
    before: 35.8, // % de objetivos antes de VCM
    growth: 65.2, // % de crecimiento con VCM
    metrics: ["Accounting Accuracy", "Leads Quantity", "Web Performance", "Brand Consistency", "CRM Efficiency"],
    note: "Illustrative example based on a typical client engagement.",
};

// El arco de "después" llena el valor de antes más el crecimiento
const AFTER_VALUE = Math.min(100, CHART.before * (1 + CHART.growth / 100));

const COLORS = {
    before: "#DC2626",
    after: "#DC9D06", // accent de VCM
};

// Secuencia de entrada (ms desde que la sección entra en pantalla)
const T = {
    card: 200,
    header: 400,
    logo: 500,
    titleLine: 550,
    titleAccent: 700,
    subtitle: 850,
    gaugeBefore: 900,
    gaugeAfter: 1050,
    trackOffset: 100, // la pista se traza justo después de aparecer el medidor
    arcOffset: 400, // el arco y el número arrancan cuando la pista va avanzada
    arcDuration: 1600,
    metrics: 1700,
    metricStep: 90,
    legend: 2300,
    legendStep: 100,
    note: 2600,
} as const;

// Línea de texto que sube desde detrás de su máscara (overflow-hidden)
const LINE_UP =
    "block translate-y-full transition-[translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[inview=true]/reveal:translate-y-0 motion-reduce:translate-y-0 motion-reduce:transition-none";

const at = (ms: number): CSSProperties => ({ transitionDelay: `${ms}ms` });

export default function TalentPerformance({ badge, title, titleRest, titleAccent, className }: Props) {
    return (
        <RevealSection className={cn("overflow-x-clip py-16 lg:py-24", className)}>
            <Container>
                {/* ── Encabezado: igual que la sección de Talent Solutions ── */}
                <div className={REVEAL.fade}>
                    <Badge>{badge}</Badge>
                </div>

                <h2
                    className={cn(
                        "mt-8 max-w-[26ch] text-3xl font-bold leading-[1.15] tracking-tight text-fg sm:text-4xl lg:text-[2.75rem]",
                        REVEAL.blur,
                        "delay-100"
                    )}
                >
                    {title}
                    {titleRest && (
                        <>
                            <br />
                            {titleRest}
                        </>
                    )}
                    {titleAccent && (
                        <>
                            {" "}
                            <span className="text-accent">{titleAccent}</span>
                        </>
                    )}
                </h2>

                {/* ── Gráfico: una sola columna ── */}
                <div
                    className={cn(
                        "mt-12 rounded-panel bg-[#F0F0F0] px-6 py-10 sm:px-10 lg:mt-16 lg:px-16 lg:py-14",
                        REVEAL.up
                    )}
                    style={at(T.card)}
                >
                    {/* Cabecera: el texto entra desde la izquierda; el logo, desde la derecha */}
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-fg">
                        <span className={REVEAL.left} style={at(T.header)}>
                            Before/After
                        </span>
                        <span className={REVEAL.right} style={at(T.logo)}>
                            <Image
                                src="/assets/brand/vcm_dark_logo.webp"
                                alt="VCM"
                                width={120}
                                height={25}
                                className="h-4 w-auto"
                            />
                        </span>
                    </div>

                    {/* Título: la primera línea sube tras su máscara; "Performance" se enfoca */}
                    <h3 className="mt-8 text-center text-3xl font-semibold leading-tight text-fg lg:text-4xl">
                        <span className="block overflow-hidden pb-[0.08em]">
                            <span className={LINE_UP} style={at(T.titleLine)}>
                                Overall Business
                            </span>
                        </span>
                        <span className={cn("block text-accent", REVEAL.blur)} style={at(T.titleAccent)}>
                            Performance
                        </span>
                    </h3>

                    <p className={cn("mt-2 text-center text-xs font-semibold text-fg", REVEAL.fade)} style={at(T.subtitle)}>
                        % of Goals Achieved
                    </p>

                    {/* Medidores */}
                    <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-16">
                        <Gauge value={CHART.before} count={CHART.before} color={COLORS.before} delay={T.gaugeBefore} />
                        <Gauge
                            value={AFTER_VALUE}
                            count={CHART.growth}
                            prefix="+"
                            sublabel="Growth"
                            color={COLORS.after}
                            delay={T.gaugeAfter}
                        />
                    </div>

                    {/* Métricas: cada una entra por separado, alternando subir y bajar */}
                    <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 text-center text-[11px] font-medium uppercase leading-snug text-fg sm:grid-cols-5">
                        {CHART.metrics.map((metric, i) => (
                            <li
                                key={metric}
                                className={i % 2 === 0 ? REVEAL.up : REVEAL.down}
                                style={at(T.metrics + i * T.metricStep)}
                            >
                                {metric}
                            </li>
                        ))}
                    </ul>

                    {/* Leyenda: cada elemento aparece con un zoom */}
                    <div className="mt-10 flex items-center justify-center gap-6 text-xs text-fg">
                        <LegendItem color={COLORS.before} label="Before VCM" delay={T.legend} />
                        <LegendItem color={COLORS.after} label="After VCM" delay={T.legend + T.legendStep} />
                    </div>

                    <p className={cn("mt-6 text-center text-[11px] text-fg-muted", REVEAL.fade)} style={at(T.note)}>
                        {CHART.note}
                    </p>
                </div>
            </Container>
        </RevealSection>
    );
}

/* ── Medidor semicircular: aparece → se traza la pista → se dibuja el arco mientras el número cuenta ── */

const RADIUS = 80;
const ARC_LENGTH = Math.PI * RADIUS; // longitud del semicírculo
const ARC_PATH = `M20 100 A${RADIUS} ${RADIUS} 0 0 1 180 100`;

// Trazo SVG que se dibuja con stroke-dashoffset (entre --dash-from y --dash-to)
const STROKE_DRAW =
    "opacity-0 [stroke-dashoffset:var(--dash-from)] transition-[stroke-dashoffset,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[inview=true]/reveal:opacity-100 group-data-[inview=true]/reveal:[stroke-dashoffset:var(--dash-to)] motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:[stroke-dashoffset:var(--dash-to)]";

function Gauge({
                   value,
                   count,
                   prefix = "",
                   sublabel,
                   color,
                   delay,
               }: {
    /** Cuánto se llena el arco (0–100) */
    value: number;
    /** Número que cuenta en el centro */
    count: number;
    prefix?: string;
    sublabel?: string;
    color: string;
    delay: number;
}) {
    const arcStart = delay + T.arcOffset;

    return (
        <div className={cn("relative mx-auto w-full max-w-[17rem]", REVEAL.zoomIn)} style={at(delay)}>
            <svg viewBox="0 0 200 112" fill="none" className="w-full overflow-visible" aria-hidden>
                {/* Pista fina: se traza completa */}
                <path
                    d={ARC_PATH}
                    stroke={color}
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeDasharray={ARC_LENGTH}
                    className={cn(STROKE_DRAW, "duration-[900ms]")}
                    style={
                        {
                            "--dash-from": ARC_LENGTH,
                            "--dash-to": 0,
                            transitionDelay: `${delay + T.trackOffset}ms`,
                        } as CSSProperties
                    }
                />

                {/* Arco del valor: se dibuja hasta su porcentaje, a la vez que cuenta el número */}
                <path
                    d={ARC_PATH}
                    stroke={color}
                    strokeWidth={14}
                    strokeLinecap="round"
                    strokeDasharray={ARC_LENGTH}
                    className={STROKE_DRAW}
                    style={
                        {
                            "--dash-from": ARC_LENGTH,
                            "--dash-to": ARC_LENGTH * (1 - value / 100),
                            transitionDelay: `${arcStart}ms`,
                            transitionDuration: `${T.arcDuration}ms`,
                        } as CSSProperties
                    }
                />
            </svg>

            {/* Número que cuenta desde 0, sincronizado con el arco */}
            <div className="absolute inset-x-0 bottom-2 flex flex-col items-center">
                <span className="text-4xl font-bold leading-none lg:text-5xl" style={{ color }}>
                    <CountUp to={count} prefix={prefix} delay={arcStart} duration={T.arcDuration} />
                </span>
                {sublabel && (
                    <span
                        className={cn("mt-1 text-xs font-semibold", REVEAL.up)}
                        style={{ color, ...at(arcStart + T.arcDuration) }}
                    >
                        {sublabel}
                    </span>
                )}
            </div>

            <span className="sr-only">
                {sublabel ? `${prefix}${count}% ${sublabel}` : `${count}% of goals achieved`}
            </span>
        </div>
    );
}

function LegendItem({ color, label, delay }: { color: string; label: string; delay: number }) {
    return (
        <span className={cn("inline-flex items-center gap-2", REVEAL.zoomIn)} style={at(delay)}>
            <span aria-hidden className="size-3 rounded-sm" style={{ backgroundColor: color }} />
            {label}
        </span>
    );
}