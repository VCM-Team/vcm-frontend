import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Button from "@/src/shared/components/ui/Button";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";

const CONTENT = {
    badge: "Join the team",
    title: "Titular de la sección",
    description: "Párrafo de apoyo — reemplázalo con el texto propio.",
    cta: { label: "Open Positions", href: "#open-positions" },
    image: "https://workninjas.com/wp-content/uploads/2025/06/Mask-group-2.jpg",
    seal: "https://workninjas.com/wp-content/uploads/2025/03/great-place-logo.svg",
};

export default function Training() {
    return (
        <section className="pb-16 lg:pb-24">
            <Container>
                <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                    {/* imagen */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-auto lg:min-h-[34rem]">
                        <Image
                            src={CONTENT.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            className="object-cover"
                        />

                        {CONTENT.seal && (
                            <span className="absolute bottom-6 right-6 block w-20 lg:w-24">
                <Image
                    src={CONTENT.seal}
                    alt=""
                    width={96}
                    height={120}
                    className="h-auto w-full"
                />
              </span>
                        )}
                    </div>

                    {/* tarjeta */}
                    <div className="flex flex-col rounded-card bg-accent-soft p-7 lg:p-9">
                        <div className="flex items-start justify-between gap-4">
                            <Badge className="border-transparent bg-white/70">
                                {CONTENT.badge}
                            </Badge>
                            <span aria-hidden className="text-2xl leading-none text-navy-800">
                ✳
              </span>
                        </div>

                        <h2 className="mt-8 max-w-[14ch] text-2xl font-semibold leading-snug text-navy-800 lg:text-3xl">
                            {CONTENT.title}
                        </h2>

                        <p className="mt-8 text-[15px] leading-relaxed text-navy-800/85 lg:mt-auto lg:pt-12">
                            {CONTENT.description}
                        </p>

                        <div className="mt-8 flex items-center gap-2">
                            <Button href={CONTENT.cta.href} variant="dark" size="sm">
                                {CONTENT.cta.label}
                            </Button>
                            <span
                                aria-hidden
                                className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-800 text-white"
                            >
                <ArrowUpRight className="size-4" />
              </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}