import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import Button from "@/src/shared/components/ui/Button";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import ContactForm from "./ContactForm";

const INFO = [
    { label: "Remote Time Zone", value: "Aligned with U.S", Icon: PinIcon },
    { label: "Our Phone", value: "(000) 000-0000", href: "tel:+10000000000", Icon: PhoneIcon },
    { label: "Our Email", value: "email@dominio.com", href: "mailto:email@dominio.com", Icon: MailIcon },
];

const FORM_IMAGE = "https://workninjas.com/wp-content/uploads/2025/03/Mask-group-4.jpg";
const BOTTOM_IMAGE = "https://workninjas.com/wp-content/uploads/2025/06/Scene-25-scaled.jpg";

export default function ContactContainer() {
    return (
        <div className="pt-header-sm lg:pt-header">
            {/* ── Hero ─────────────────────────────── */}
            <section className="bg-surface lg:mx-3 lg:rounded-t-panel">
                <Container className="py-16 text-center lg:py-20">
                    <Badge>Contact Us</Badge>

                    <h1 className="mt-7 text-3xl font-semibold text-fg sm:text-4xl lg:text-5xl">
                        Título{" "}
                        <span className="text-accent">resaltado</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-[46ch] text-base text-fg-muted">
                        Subtítulo de la página — reemplázalo.
                    </p>

                    <ul className="mt-14 grid gap-8 text-left sm:grid-cols-3">
                        {INFO.map(({ label, value, href, Icon }) => (
                            <li key={label} className="flex items-center justify-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-800 text-white">
                  <Icon />
                </span>
                                <span>
                  <span className="block text-sm text-fg-muted">{label}</span>
                                    {href ? (
                                        <a href={href} className="text-sm text-fg hover:text-accent">
                                            {value}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-fg">{value}</span>
                                    )}
                </span>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* ── Formulario ───────────────────────── */}
            <section className="bg-surface lg:mx-3">
                <Container className="pb-20 lg:pb-28">
                    <Badge>Contact Us</Badge>

                    <h2 className="mt-6 text-2xl font-semibold text-fg sm:text-3xl lg:text-4xl">
                        Título del formulario
                    </h2>

                    <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                        <div className="rounded-card bg-bg/50 p-6 lg:p-10">
                            <ContactForm />
                        </div>

                        <figure className="relative aspect-[4/3] overflow-hidden rounded-card">
                            <Image
                                src={FORM_IMAGE}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                            <figcaption className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-full bg-white/85 p-3 pr-6 backdrop-blur-sm">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <PhoneIcon />
                </span>
                                <span className="text-sm leading-snug text-fg">
                  Texto del aviso flotante — reemplázalo.
                </span>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </section>

            {/* ── CTA final ────────────────────────── */}
            <section className="lg:mx-3 lg:rounded-b-panel">
                <Container className="py-16 lg:py-20">
                    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-auto lg:min-h-[28rem]">
                            <Image
                                src={BOTTOM_IMAGE}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 58vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col rounded-card bg-accent-soft p-8 lg:p-10">
                            <div className="flex items-start justify-between gap-4">
                                <Badge className="border-transparent bg-white/70">Free Consultation</Badge>
                                <span aria-hidden className="text-2xl text-navy-800">✳</span>
                            </div>

                            <h2 className="mt-8 text-2xl font-semibold leading-snug text-navy-800 lg:text-3xl">
                                Título de la tarjeta
                            </h2>

                            <p className="mt-5 text-[15px] leading-relaxed text-navy-800/85">
                                Texto de apoyo — reemplázalo.
                            </p>

                            <div className="mt-12 flex items-center gap-2 lg:mt-auto lg:pt-12">
                                <Button href="/contact-us" variant="dark" size="sm">
                                    Free Consultation
                                </Button>
                                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-800 text-white">
                  <ArrowUpRight className="size-4" />
                </span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

function PinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}