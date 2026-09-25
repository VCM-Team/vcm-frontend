import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    title: "Primera parte del titular",
    titleAccent: "parte resaltada del titular",
    description: "Párrafo de apoyo de la sección — reemplázalo con el texto propio.",
};

type Offer = {
    key: string;
    logo: string;
    logoAlt: string;
    offer: string;
};

const OFFERS: readonly Offer[] = [
    {
        key: "socio-1",
        logo: "https://workninjas.com/wp-content/uploads/2025/06/acculynxs-2048x314.png",
        logoAlt: "Nombre del socio",
        offer: "Descripción de la oferta del socio.",
    },
    {
        key: "socio-2",
        logo: "https://workninjas.com/wp-content/uploads/2025/07/leap.png",
        logoAlt: "Nombre del socio",
        offer: "Descripción de la oferta del socio.",
    },
    {
        key: "socio-3",
        logo: "https://workninjas.com/wp-content/uploads/2025/07/sumoquote.png",
        logoAlt: "Nombre del socio",
        offer: "Descripción de la oferta del socio.",
    },
    {
        key: "socio-4",
        logo: "https://workninjas.com/wp-content/uploads/2025/07/the-catch.svg",
        logoAlt: "Nombre del socio",
        offer: "Descripción de la oferta del socio.",
    },
];

// Encabezado visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none";
const ENTER_UP = `${ENTER} starting:translate-y-6 starting:opacity-0`;
const ENTER_FADE = `${ENTER} starting:opacity-0`;

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
                    <ul className="flex flex-col items-center gap-16 lg:gap-20">
                        {OFFERS.map((o) => (
                            <li key={o.key}>
                                {/* Cada oferta tiene su propio reveal: anima al llegar a ella */}
                                <RevealSection className="flex flex-col items-center text-center">
                                    <span
                                        className={cn(
                                            "relative block h-12 w-64 lg:h-[3.25rem] lg:w-72",
                                            REVEAL.zoomIn
                                        )}
                                    >
                                        <Image
                                            src={o.logo}
                                            alt={o.logoAlt}
                                            fill
                                            sizes="18rem"
                                            className="object-contain"
                                        />
                                    </span>

                                    <p
                                        className={cn(
                                            "mt-7 max-w-[48ch] text-2xl text-fg lg:text-[1.625rem]",
                                            REVEAL.blur,
                                            "delay-150"
                                        )}
                                    >
                                        {o.offer}
                                    </p>
                                </RevealSection>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </section>
    );
}