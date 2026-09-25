import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";
import ContactForm from "./ContactForm";

// Pendiente de confirmar: VCM no publica su correo en la web
const CONTACT_EMAIL = "email@dominio.com";

const INFO = [
    { label: "Our Offices", value: "Lima, Peru", Icon: PinIcon },
    {
        label: "LinkedIn",
        value: "discovervcm",
        href: "https://www.linkedin.com/company/discovervcm",
        Icon: LinkedInIcon,
    },
    { label: "Our Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, Icon: MailIcon },
];

const FORM_IMAGE = "https://workninjas.com/wp-content/uploads/2025/03/Mask-group-4.jpg";
const BOTTOM_IMAGE = "https://workninjas.com/wp-content/uploads/2025/06/Scene-25-scaled.jpg";

// Hero visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate,scale,filter] duration-700 ease-out motion-reduce:transition-none";
const ENTER_ZOOM = `${ENTER} starting:scale-90 starting:opacity-0`;
const ENTER_UP = `${ENTER} starting:translate-y-6 starting:opacity-0`;
const ENTER_FADE = `${ENTER} starting:opacity-0`;
const ENTER_BLUR_UP = `${ENTER} starting:translate-y-4 starting:opacity-0 starting:blur-sm`;

export default function ContactContainer() {
    return (
        <div>
            {/* ── Hero ─────────────────────────────── */}
            <section className="mx-3 mt-24 lg:mt-28">
                <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                    <Container className="py-16 text-center lg:py-20">
                        <div className={cn("mx-auto w-fit", ENTER_ZOOM)}>
                            <Badge>Contact Us</Badge>
                        </div>

                        <h1 className={cn("mt-7 text-3xl font-bold text-fg sm:text-4xl lg:text-5xl", ENTER_UP, "delay-100")}>
                            Let’s Talk About <span className="text-brand-400">Your Growth</span>
                        </h1>

                        <p className={cn("mx-auto mt-5 max-w-[46ch] text-base text-fg-muted", ENTER_FADE, "delay-200")}>
                            Tell us about your business and where you want to take it. We’ll start with a free strategy session.
                        </p>

                        <ul className="mt-14 grid gap-8 text-left sm:grid-cols-3">
                            {INFO.map(({ label, value, href, Icon }, i) => {
                                const external = href?.startsWith("http");

                                return (
                                    <li
                                        key={label}
                                        className={cn("flex items-center justify-center gap-4", ENTER_BLUR_UP)}
                                        style={{ transitionDelay: `${350 + i * 120}ms` }}
                                    >
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
                                                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                                    className="text-sm text-fg-muted transition-colors hover:text-brand-500"
                                                >
                                                    {value}
                                                </Link>
                                            ) : (
                                                <span className="text-sm text-fg-muted">{value}</span>
                                            )}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Container>
                </div>
            </section>

            {/* ── Formulario ───────────────────────── */}
            <RevealSection className="overflow-x-clip">
                <Container className="py-16 lg:py-20">
                    <div className={REVEAL.left}>
                        <Badge>Get in Touch</Badge>
                    </div>

                    <h2
                        className={cn(
                            "mt-6 max-w-[16ch] text-2xl font-bold leading-tight text-fg sm:text-3xl lg:text-4xl",
                            REVEAL.blur,
                            "delay-100"
                        )}
                    >
                        Tell Us About Your Business
                    </h2>

                    {/* items-stretch para igualar la altura de las 2 columnas */}
                    <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
                        <div className={cn("rounded-panel bg-[#E3E3E3] p-6 lg:p-10", REVEAL.left, "delay-200")}>
                            <ContactForm />
                        </div>

                        {/* h-full para forzar al figure a llenar toda la altura del grid */}
                        <figure
                            className={cn(
                                "relative aspect-[4/3] h-full overflow-hidden rounded-panel lg:aspect-auto lg:min-h-[32rem]",
                                REVEAL.right,
                                "delay-300"
                            )}
                        >
                            <Image
                                src={FORM_IMAGE}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className={cn("object-cover", REVEAL.zoomOut, "duration-[1200ms] delay-300")}
                            />
                            <figcaption
                                className={cn(
                                    "absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-full bg-white/90 p-3 pr-6 backdrop-blur-sm",
                                    REVEAL.up,
                                    "delay-[700ms]"
                                )}
                            >
                                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-400 text-black">
                                    <PinIcon />
                                </span>
                                <span className="text-sm leading-snug text-black">
                                    Our team works from Lima, Peru, in time zones close to the U.S.
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </RevealSection>

            {/* ── CTA final ────────────────────────── */}
            <RevealSection className="overflow-x-clip">
                <Container className="pb-16 lg:pb-24">
                    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                        <div
                            className={cn(
                                "relative aspect-[4/3] overflow-hidden rounded-panel lg:aspect-auto lg:min-h-[28rem]",
                                REVEAL.left
                            )}
                        >
                            <Image
                                src={BOTTOM_IMAGE}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 58vw, 100vw"
                                className={cn("object-cover", REVEAL.zoomOut, "duration-[1200ms]")}
                            />
                        </div>

                        <div className={cn("flex flex-col rounded-panel bg-brand-400 p-8 lg:p-10", REVEAL.zoomIn, "delay-200")}>
                            <div className="flex items-start justify-between gap-4">
                                <div className={cn(REVEAL.fade, "delay-[400ms]")}>
                                    <Badge className="border-black bg-transparent text-black">
                                        Free Strategy Session
                                    </Badge>
                                </div>

                                <span
                                    aria-hidden
                                    className={cn(
                                        "grid size-11 shrink-0 place-items-center rounded-full bg-accent text-black",
                                        REVEAL.zoomIn,
                                        "delay-500"
                                    )}
                                >
                                    <ChartIcon className="size-5" />
                                </span>
                            </div>

                            <h2
                                className={cn(
                                    "mt-8 max-w-[14ch] text-2xl font-bold leading-tight text-black lg:text-[2rem]",
                                    REVEAL.up,
                                    "delay-500"
                                )}
                            >
                                Not Sure Where to Start?
                            </h2>

                            <p
                                className={cn(
                                    "mt-8 max-w-[38ch] text-[15px] leading-relaxed text-black/80 lg:mt-auto lg:pt-12",
                                    REVEAL.fade,
                                    "delay-[600ms]"
                                )}
                            >
                                Take our 2-minute growth assessment and get a clear picture of what is holding your business back.
                            </p>

                            <div className={cn("group mt-10 flex w-fit items-center gap-2", REVEAL.up, "delay-[700ms]")}>
                                <Link
                                    href="/book-demo"
                                    className="inline-flex items-center rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                                >
                                    Start Assessment
                                </Link>

                                <Link
                                    href="/book-demo"
                                    aria-hidden
                                    tabIndex={-1}
                                    className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
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
            </RevealSection>
        </div>
    );
}

function PinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 41 41" fill="none" aria-hidden>
            <path
                d="M12.8827 35.5224C11.0083 34.5852 10.0711 33.3752 10.0711 31.8925C10.0711 31.2211 10.274 30.5986 10.6796 30.0251C11.0852 29.4516 11.6518 28.955 12.3791 28.5354L15.0228 31.0113C14.7711 31.1232 14.4983 31.2491 14.2046 31.3889C13.9108 31.5288 13.68 31.6967 13.5121 31.8925C13.8758 32.3401 14.7151 32.7318 16.03 33.0675C17.3448 33.4032 18.7156 33.571 20.1424 33.571C21.5692 33.571 22.947 33.4032 24.2758 33.0675C25.6047 32.7318 26.451 32.3401 26.8146 31.8925C26.6188 31.6687 26.367 31.4869 26.0593 31.347C25.7516 31.2071 25.4578 31.0812 25.1781 30.9693L27.7798 28.4515C28.5631 28.8991 29.1646 29.4096 29.5842 29.9831C30.0039 30.5567 30.2137 31.1931 30.2137 31.8925C30.2137 33.3752 29.2765 34.5852 27.4021 35.5224C25.5278 36.4595 23.1079 36.9281 20.1424 36.9281C17.177 36.9281 14.7571 36.4595 12.8827 35.5224ZM20.1424 31.8925C16.1978 28.983 13.2534 26.1575 11.3091 23.4158C9.36474 20.6742 8.39258 17.9885 8.39258 15.3588C8.39258 13.3725 8.74927 11.631 9.46265 10.1343C10.176 8.63761 11.0922 7.38569 12.2113 6.37856C13.3303 5.37144 14.5892 4.61609 15.988 4.11252C17.3868 3.60896 18.7716 3.35718 20.1424 3.35718C21.5132 3.35718 22.898 3.60896 24.2968 4.11252C25.6956 4.61609 26.9545 5.37144 28.0736 6.37856C29.1926 7.38569 30.1088 8.63761 30.8222 10.1343C31.5356 11.631 31.8923 13.3725 31.8923 15.3588C31.8923 17.9885 30.9201 20.6742 28.9758 23.4158C27.0315 26.1575 24.087 28.983 20.1424 31.8925ZM20.1424 18.4641C21.0656 18.4641 21.8559 18.1354 22.5134 17.478C23.1708 16.8205 23.4995 16.0302 23.4995 15.107C23.4995 14.1838 23.1708 13.3935 22.5134 12.7361C21.8559 12.0786 21.0656 11.7499 20.1424 11.7499C19.2192 11.7499 18.4289 12.0786 17.7715 12.7361C17.114 13.3935 16.7853 14.1838 16.7853 15.107C16.7853 16.0302 17.114 16.8205 17.7715 17.478C18.4289 18.1354 19.2192 18.4641 20.1424 18.4641Z"
                fill="currentColor"
            />
        </svg>
    );
}

function LinkedInIcon() {
    return <FaLinkedinIn className="size-4" aria-hidden />;
}

function MailIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 41 41" fill="none" aria-hidden>
            <path
                d="M6.71452 33.5709C5.79132 33.5709 5.001 33.2422 4.34357 32.5847C3.68614 31.9273 3.35742 31.137 3.35742 30.2138V10.0712C3.35742 9.14801 3.68614 8.35769 4.34357 7.70026C5.001 7.04283 5.79132 6.71411 6.71452 6.71411H33.5713C34.4945 6.71411 35.2848 7.04283 35.9422 7.70026C36.5997 8.35769 36.9284 9.14801 36.9284 10.0712V30.2138C36.9284 31.137 36.5997 31.9273 35.9422 32.5847C35.2848 33.2422 34.4945 33.5709 33.5713 33.5709H6.71452ZM20.1429 21.821L33.5713 13.4283V10.0712L20.1429 18.4639L6.71452 10.0712V13.4283L20.1429 21.821Z"
                fill="currentColor"
            />
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