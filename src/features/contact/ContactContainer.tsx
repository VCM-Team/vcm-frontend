import Image from "next/image";
import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
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
        <div>
            {/* ── Hero ─────────────────────────────── */}
            <section className="mx-3 mt-24 lg:mt-28">
                <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                    <Container className="py-16 text-center lg:py-20">
                        <Badge>Contact Us</Badge>

                        <h1 className="mt-7 text-3xl font-bold text-fg sm:text-4xl lg:text-5xl">
                            Título <span className="text-brand-400">resaltado</span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-[46ch] text-base text-fg-muted">
                            Subtítulo de la página — reemplázalo.
                        </p>

                        <ul className="mt-14 grid gap-8 text-left sm:grid-cols-3">
                            {INFO.map(({ label, value, href, Icon }) => (
                                <li key={label} className="flex items-center justify-center gap-4">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-400 text-black">
                                        <Icon />
                                    </span>
                                    <span>
                                        <span className="block text-sm font-semibold text-fg">
                                            {label}
                                        </span>
                                        {href ? (
                                            <Link
                                                href={href}
                                                className="text-sm text-fg-muted transition-colors hover:text-brand-500"
                                            >
                                                {value}
                                            </Link>
                                        ) : (
                                            <span className="text-sm text-fg-muted">{value}</span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div>
            </section>

            {/* ── Formulario ───────────────────────── */}
            <section>
                <Container className="py-16 lg:py-20">
                    <Badge>Contact Us</Badge>

                    <h2 className="mt-6 max-w-[16ch] text-2xl font-bold leading-tight text-fg sm:text-3xl lg:text-4xl">
                        Título del formulario
                    </h2>

                    {/* items-stretch para igualar la altura de las 2 columnas */}
                    <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
                        <div className="rounded-panel bg-[#E3E3E3] p-6 lg:p-10">
                            <ContactForm />
                        </div>

                        {/* h-full para forzar al figure a llenar toda la altura del grid */}
                        <figure className="relative aspect-[4/3] h-full overflow-hidden rounded-panel lg:aspect-auto lg:min-h-[32rem]">
                            <Image
                                src={FORM_IMAGE}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                            <figcaption className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-full bg-white/90 p-3 pr-6 backdrop-blur-sm">
                                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-400 text-black">
                                    <PhoneIcon />
                                </span>
                                <span className="text-sm leading-snug text-black">
                                    Texto del aviso flotante — reemplázalo.
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </section>

            {/* ── CTA final ────────────────────────── */}
            <section>
                <Container className="pb-16 lg:pb-24">
                    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-panel lg:aspect-auto lg:min-h-[28rem]">
                            <Image
                                src={BOTTOM_IMAGE}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 58vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col rounded-panel bg-brand-400 p-8 lg:p-10">
                            <div className="flex items-start justify-between gap-4">
                                <Badge className="border-black bg-transparent text-black">
                                    Free Consultation
                                </Badge>

                                <span
                                    aria-hidden
                                    className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-black"
                                >
                                    <ChartIcon className="size-5" />
                                </span>
                            </div>

                            <h2 className="mt-8 max-w-[14ch] text-2xl font-bold leading-tight text-black lg:text-[2rem]">
                                Título de la tarjeta
                            </h2>

                            <p className="mt-8 max-w-[38ch] text-[15px] leading-relaxed text-black/80 lg:mt-auto lg:pt-12">
                                Texto de apoyo — reemplázalo.
                            </p>

                            <div className="group mt-10 flex w-fit items-center gap-2">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                                >
                                    Free Consultation
                                </Link>

                                <Link
                                    href="/contact-us"
                                    aria-hidden
                                    tabIndex={-1}
                                    className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                                >
                                    <ArrowUpRight className="col-start-1 row-start-1 size-4 transition-[translate] duration-300 group-hover:-translate-y-11" />
                                    <ArrowUpRight
                                        aria-hidden
                                        className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0"
                                    />
                                </Link>
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

function ChartIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 30 30" fill="none" className={className} aria-hidden>
            <path
                d="M2.5625 26.25L10.625 15H16.9375L26.25 4.125V26.25H2.5625ZM4.75 18.9688L2.75 17.5312L8.125 10H14.4375L20.3125 3.15625L22.1875 4.78125L15.5625 12.5H9.375L4.75 18.9688Z"
                fill="currentColor"
            />
        </svg>
    );
}