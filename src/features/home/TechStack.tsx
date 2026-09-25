import Image from "next/image";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

type ClientLogo = {
    key: string;
    name: string;
    src: string;
    width: number;
    height: number;
};

const TECH_STACK = {
    badge: "Our Tech Stack",
};

const LOGO_DIR = "/assets/logos/";

const LOGOS: readonly ClientLogo[] = [
    { key: "r-and-d", name: "R&D", src: `${LOGO_DIR}/r-and-d.svg`, width: 147, height: 91 },
    { key: "309-technology", name: "309 Technology", src: `${LOGO_DIR}/309-technology.svg`, width: 150, height: 61 },
    { key: "new-beginnings", name: "New Beginnings Construction", src: `${LOGO_DIR}/new-beginnings.svg`, width: 141, height: 87 },
    { key: "advanced-roofing", name: "Advanced Roofing Team Construction", src: `${LOGO_DIR}/advanced-roofing.svg`, width: 155, height: 81 },
    { key: "kondrat", name: "Kondrat & Associates", src: `${LOGO_DIR}/kondrat.svg`, width: 214, height: 54 },
    { key: "mast", name: "Mast Roofing & Construction", src: `${LOGO_DIR}/mast.svg`, width: 171, height: 75 },
    { key: "new-edge", name: "New Edge Improvement Co.", src: `${LOGO_DIR}/new-edge.svg`, width: 183, height: 68 },
    { key: "coast-mountain", name: "Coast Mountain Roof", src: `${LOGO_DIR}/coast-mountain.svg`, width: 143, height: 101 },
    { key: "nitro", name: "Nitro Roofing & Construction", src: `${LOGO_DIR}/nitro.svg`, width: 174, height: 48 },
    { key: "do-it-right", name: "Do It Right Roofing", src: `${LOGO_DIR}/do-it-right.svg`, width: 134, height: 62 },
    { key: "innovative", name: "Innovative Roofing Pros", src: `${LOGO_DIR}/innovative.svg`, width: 253, height: 52 },
];

// Líneas que se dibujan desde el badge hacia fuera (solo escala horizontal)
const LINE_DRAW =
    "scale-x-0 transition-[scale] duration-700 ease-out group-data-[inview=true]/reveal:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none";

export default function TechStack() {
    return (
        <RevealSection className="bg-ink-900 py-20 lg:py-28">
            {/* 14/16 del ancho total, en vez del Container de página */}
            <div className="mx-auto w-[87.5%]">
                <div className="flex items-center gap-4 lg:gap-8">
                    <span
                        aria-hidden
                        className={cn("h-px flex-1 origin-right bg-white/15", LINE_DRAW, "delay-200")}
                    />
                    <div className={REVEAL.zoomIn}>
                        <Badge className="border-brand-400 bg-transparent text-brand-400">
                            {TECH_STACK.badge}
                        </Badge>
                    </div>
                    <span
                        aria-hidden
                        className={cn("h-px flex-1 origin-left bg-white/15", LINE_DRAW, "delay-200")}
                    />
                </div>
            </div>

            {/* Banda infinita: bordes difuminados con máscara, se pausa al pasar el ratón */}
            <div
                className={cn(
                    "group/marquee mt-16 overflow-hidden lg:mt-20",
                    "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
                    REVEAL.fade,
                    "delay-[400ms]"
                )}
            >
                <div className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
                    <LogoList />
                    {/* Segunda copia para el bucle; oculta a lectores de pantalla */}
                    <LogoList hidden />
                </div>
            </div>
        </RevealSection>
    );
}

function LogoList({ hidden = false }: { hidden?: boolean }) {
    return (
        <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
            {LOGOS.map((logo) => (
                // Separación con padding (no gap): el -50% del bucle cuadra exacto
                <li key={logo.key} className="shrink-0 px-8 lg:px-12">
                    <Image
                        src={logo.src}
                        alt={hidden ? "" : logo.name}
                        width={logo.width}
                        height={logo.height}
                        unoptimized
                        className="h-10 w-auto object-contain opacity-70 lg:h-12"
                    />
                </li>
            ))}
        </ul>
    );
}