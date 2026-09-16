import Image from "next/image";
import Badge from "@/src/shared/components/ui/Badge";

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

export default function TechStack() {
    return (
        <section className="bg-bg py-20 lg:py-28">
            {/* 14/16 del ancho total, en vez del Container de página */}
            <div className="mx-auto w-[87.5%]">
                <div className="flex items-center gap-4 lg:gap-8">
                    <span className="h-px flex-1 bg-border" aria-hidden />
                    <Badge>{TECH_STACK.badge}</Badge>
                    <span className="h-px flex-1 bg-border" aria-hidden />
                </div>

                <ul className="mt-16 grid grid-cols-2 items-center gap-x-10 gap-y-16 md:grid-cols-3 lg:mt-20 lg:flex lg:flex-nowrap lg:justify-between lg:gap-10">
                    {TECH_LOGOS.map((logo) => (
                        <li
                            key={logo.key}
                            className="flex items-center justify-center lg:flex-1"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={280}
                                height={80}
                                className="h-12 w-auto max-w-full object-contain md:h-14 lg:h-12 xl:h-14"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}