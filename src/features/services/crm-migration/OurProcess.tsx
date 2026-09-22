import ProcessSection from "@/src/shared/components/ui/ProcessSection";
import type { NumberedCardItem } from "@/src/shared/components/ui/NumberedCard";

const HEADING = {
    badge: "Our Process",
    title: "Primera parte del titular",
    titleAccent: "parte resaltada del titular",
    cta: { label: "Free Consultation", href: "/contact-us" },
};

const STEPS: readonly NumberedCardItem[] = [
    {
        number: "01",
        title: "Título del primer paso",
        description: "Descripción del paso — reemplázala con el texto propio.",
    },
    {
        number: "02",
        title: "Título del segundo paso",
        description: "Descripción del paso — reemplázala con el texto propio.",
    },
    {
        number: "03",
        title: "Título del tercer paso",
        description: "Descripción del paso — reemplázala con el texto propio.",
    },
    {
        number: "04",
        title: "Título del cuarto paso",
        description: "Descripción del paso — reemplázala con el texto propio.",
    },
];

export default function OurProcess() {
    return (
        <ProcessSection
            badge={HEADING.badge}
            title={HEADING.title}
            titleAccent={HEADING.titleAccent}
            steps={STEPS}
            cta={HEADING.cta}
        />
    );
}