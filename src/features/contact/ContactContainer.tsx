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
                                    className="inline-flex items-center rounded-full bg-black px-7 py-3.5 text-[15px] font-semibold leading-none text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
                                >
                                    Free Consultation
                                </Link>

                                <Link
                                    href="/contact-us"
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
            </section>
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

function PhoneIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 41 41" fill="none" aria-hidden>
            <path
                d="M33.4865 35.2495C29.9896 35.2495 26.5346 34.4872 23.1215 32.9625C19.7085 31.4378 16.6032 29.2767 13.8056 26.4791C11.008 23.6815 8.84686 20.5762 7.32218 17.1632C5.7975 13.7501 5.03516 10.2951 5.03516 6.79812C5.03516 6.29456 5.20301 5.87492 5.53872 5.53921C5.87443 5.2035 6.29407 5.03564 6.79763 5.03564H13.5958C13.9874 5.03564 14.3371 5.16853 14.6448 5.4343C14.9526 5.70007 15.1344 6.0148 15.1904 6.37848L16.2814 12.2534C16.3374 12.701 16.3234 13.0787 16.2395 13.3864C16.1555 13.6942 16.0017 13.9599 15.7779 14.1837L11.7074 18.2962C12.2669 19.3313 12.9313 20.3314 13.7007 21.2966C14.47 22.2617 15.3163 23.1919 16.2395 24.0872C17.1067 24.9544 18.0159 25.7587 18.9671 26.5001C19.9183 27.2414 20.9254 27.9199 21.9885 28.5353L25.9331 24.5907C26.1849 24.3389 26.5136 24.1501 26.9192 24.0242C27.3249 23.8983 27.7235 23.8634 28.1152 23.9193L33.9062 25.0943C34.2978 25.2062 34.6196 25.409 34.8713 25.7028C35.1231 25.9965 35.249 26.3252 35.249 26.6889V33.487C35.249 33.9906 35.0812 34.4102 34.7455 34.7459C34.4098 35.0817 33.9901 35.2495 33.4865 35.2495Z"
                fill="currentColor"
            />
        </svg>
    );
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