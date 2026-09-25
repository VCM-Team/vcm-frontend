import Image from "next/image";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

type TechLogo = {
    key: string;
    name: string;
    src: string;
};

const TECH_STACK = {
    badge: "Our Tech Stack",
};

const TECH_LOGOS: readonly TechLogo[] = [
    { key: "roofr", name: "Roofr", src: "https://workninjas.com/wp-content/uploads/2026/03/Roofr-Logo-BLUE-WN.svg" },
    { key: "bluebeam", name: "Bluebeam", src: "https://workninjas.com/wp-content/uploads/2025/07/bluebean-1024x222.png" },
    { key: "jobnimbus", name: "JobNimbus", src: "https://workninjas.com/wp-content/uploads/2025/06/jobnimbus.svg" },
    { key: "sumoquote", name: "SumoQuote", src: "https://workninjas.com/wp-content/uploads/2025/06/sumoquote.svg" },
    { key: "acculynx", name: "AccuLynx", src: "https://workninjas.com/wp-content/uploads/2025/06/acculynx.svg" },
    { key: "hubspot", name: "HubSpot", src: "https://workninjas.com/wp-content/uploads/2025/06/hubspot.svg" },
    { key: "leap", name: "Leap", src: "https://workninjas.com/wp-content/uploads/2025/06/leap.svg" },
    { key: "stack-exchange", name: "Stack Exchange", src: "https://workninjas.com/wp-content/uploads/2025/07/Stack.svg" },
    { key: "salesforce", name: "Salesforce", src: "https://workninjas.com/wp-content/uploads/2025/06/Salesforce.com_logo.svg" },
];

// Líneas que se dibujan desde el badge hacia fuera (solo escala horizontal)
const LINE_DRAW =
    "scale-x-0 transition-[scale] duration-700 ease-out group-data-[inview=true]/reveal:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none";

// Los logos alternan entre tres entradas
const LOGO_VARIANTS = [REVEAL.up, REVEAL.blur, REVEAL.down] as const;
const LOGO_STAGGER_MS = 70;

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

                <ul className="mt-16 grid grid-cols-3 items-center gap-x-6 gap-y-12 lg:mt-20 lg:flex lg:flex-nowrap lg:justify-between lg:gap-10">
                    {TECH_LOGOS.map((logo, i) => (
                        <li
                            key={logo.key}
                            className={cn(
                                "flex items-center justify-center lg:flex-1",
                                LOGO_VARIANTS[i % LOGO_VARIANTS.length]
                            )}
                            style={{ transitionDelay: `${400 + i * LOGO_STAGGER_MS}ms` }}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={280}
                                height={80}
                                className="h-12 w-auto max-w-full object-contain brightness-0 invert md:h-14 lg:h-12 xl:h-14"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </RevealSection>
    );
}