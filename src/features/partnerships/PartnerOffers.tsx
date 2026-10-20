import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    title: "Construction Companies",
    titleAccent: "Growing With VCM",
    description:
        "We work side by side with construction and roofing companies across the U.S., helping them build the systems, processes and teams they need to grow.",
};

type ClientLogo = {
    key: string;
    name: string;
    src: string;
    width: number;
    height: number;
};

// Misma carpeta que usan los logos de TechStack
const LOGO_DIR = "/assets/logos";

const LOGOS: readonly ClientLogo[] = [
    { key: "r-and-d", name: "R&D", src: `${LOGO_DIR}/r-and-d.svg`, width: 147, height: 91 },
    { key: "309-technology", name: "309 Technology", src: `${LOGO_DIR}/309-technology.svg`, width: 150, height: 61 },
    { key: "new-beginnings", name: "New Beginnings Construction", src: `${LOGO_DIR}/new-beginnings.svg`, width: 141, height: 87 },
    { key: "advanced-roofing", name: "Advanced Roofing Team Construction", src: `${LOGO_DIR}/advanced-roofing.svg`, width: 155, height: 81 },
    { key: "kondrat", name: "Kondrat & Associates", src: `${LOGO_DIR}/kondrat.svg`, width: 214, height: 54 },
    { key: "mast", name: "Mast Roofing & Construction", src: `${LOGO_DIR}/mast.svg`, width: 171, height: 75 },
    { key: "premier", name: "Premier Construction", src: `${LOGO_DIR}/premier.svg`, width: 214, height: 54 },
    { key: "new-edge", name: "New Edge Improvement Co.", src: `${LOGO_DIR}/new-edge.svg`, width: 183, height: 68 },
    { key: "coast-mountain", name: "Coast Mountain Roof", src: `${LOGO_DIR}/coast-mountain.svg`, width: 143, height: 101 },
    { key: "nitro", name: "Nitro Roofing & Construction", src: `${LOGO_DIR}/nitro.svg`, width: 174, height: 48 },
    { key: "do-it-right", name: "Do It Right Roofing", src: `${LOGO_DIR}/do-it-right.svg`, width: 134, height: 62 },
    { key: "innovative", name: "Innovative Roofing Pros", src: `${LOGO_DIR}/innovative.svg`, width: 253, height: 52 },
];

// Encabezado visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none";
const ENTER_UP = `${ENTER} starting:translate-y-6 starting:opacity-0`;
const ENTER_FADE = `${ENTER} starting:opacity-0`;

// Los logos alternan entrada; el retraso va por columna (4 en desktop)
const LOGO_VARIANTS = [REVEAL.zoomIn, REVEAL.up] as const;
const LOGO_COLUMNS = 3;

export default function PartnerOffers() {
    return (
        <section>
            <Container className="pt-14 text-center lg:pt-20">
                <h1
                    className={cn(
                        "mx-auto max-w-[24ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl",
                        ENTER_UP
                    )}
                >
                    {HEADING.title}{" "}
                    <span className="text-accent">{HEADING.titleAccent}</span>
                </h1>

                <p
                    className={cn(
                        "mx-auto mt-6 max-w-[68ch] text-left text-[15px] leading-relaxed text-fg-muted lg:text-center",
                        ENTER_FADE,
                        "delay-150"
                    )}
                >
                    {HEADING.description}
                </p>
            </Container>

            <div className="mx-3 mt-12 rounded-panel bg-gradient-to-b from-brand-400/12 to-bg lg:mx-4 lg:mt-16">
                <Container className="py-14 lg:py-20">
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:gap-y-16">
                        {LOGOS.map((logo, i) => (
                            <li key={logo.key}>
                                {/* Cada logo tiene su propio reveal: anima al llegar a él */}
                                <RevealSection>
                                    <figure
                                        className={cn(
                                            "group flex flex-col items-center gap-4",
                                            LOGO_VARIANTS[i % LOGO_VARIANTS.length]
                                        )}
                                        style={{ transitionDelay: `${(i % LOGO_COLUMNS) * 100}ms` }}
                                    >
                                        {/* Alto fijo: logos de proporciones distintas quedan alineados */}
                                        <div className="flex h-16 w-full items-center justify-center">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={logo.width}
                                                height={logo.height}
                                                unoptimized
                                                // brightness-0: convierte el SVG blanco en negro
                                                className="max-h-full w-auto max-w-full object-contain brightness-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                                            />
                                        </div>

                                        <figcaption className="text-center text-xs font-medium leading-snug text-fg-muted">
                                            {logo.name}
                                        </figcaption>
                                    </figure>
                                </RevealSection>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </section>
    );
}