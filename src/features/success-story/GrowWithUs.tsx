import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";

const CONTENT = {
    badge: "Etiqueta de la sección",
    title: "Primera línea del titular",
    titleRest: "segunda línea",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    image: "/success/grow.jpg",
};

export default function GrowWithUs() {
    return (
        <section className="py-16 lg:py-24">
            <Container>
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-auto lg:min-h-[32rem]">
                        <Image
                            src={CONTENT.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col rounded-card bg-accent-soft p-7 lg:p-10">
                        <div className="flex items-start justify-between gap-4">
                            <Badge className="border-transparent bg-transparent ring-1 ring-navy-800/20">
                                {CONTENT.badge}
                            </Badge>

                            <span
                                aria-hidden
                                className="grid size-12 shrink-0 place-items-center rounded-full bg-navy-800 text-accent"
                            >
                <ChartIcon />
              </span>
                        </div>

                        <h2 className="mt-8 max-w-[12ch] text-3xl font-semibold leading-tight text-navy-800 lg:text-4xl">
                            {CONTENT.title}
                            <br />
                            {CONTENT.titleRest}
                        </h2>

                        <p className="mt-10 max-w-[46ch] text-[15px] leading-relaxed text-navy-800/85 lg:mt-auto lg:pt-16">
                            {CONTENT.description}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function ChartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M5 19V11M10 19V5M15 19v-6M20 19V8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    );
}