import Link from "next/link";
import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import type { TeamMember } from "@/src/shared/data/team.data";
import { cn } from "@/src/lib/utils";

// Visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate,scale,filter] duration-700 ease-out motion-reduce:transition-none";
const ENTER_ZOOM = `${ENTER} starting:scale-90 starting:opacity-0`;
const ENTER_LEFT = `${ENTER} starting:-translate-x-8 starting:opacity-0`;
const ENTER_UP = `${ENTER} starting:translate-y-6 starting:opacity-0`;
const ENTER_FADE = `${ENTER} starting:opacity-0`;
const ENTER_BLUR_UP = `${ENTER} starting:translate-y-4 starting:opacity-0 starting:blur-sm`;

export default function MemberDetailContainer({ member }: { member: TeamMember }) {
    return (
        <div className="pt-header-sm lg:pt-header">
            <section className="overflow-x-clip bg-gradient-to-b from-surface to-bg lg:mx-3 lg:rounded-panel">
                <Container className="py-14 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-16">
                        {/* Tarjeta de foto — primero en móvil */}
                        <div className={cn("order-first mx-auto w-full max-w-sm lg:order-last", ENTER_ZOOM)}>
                            <div className="overflow-hidden rounded-card bg-transparent">
                                <div className="flex items-center justify-center p-8">
                                    <span className="relative aspect-square w-full max-w-[24rem] overflow-hidden rounded-full bg-surface">
                                        {/* Zoom out dentro del círculo */}
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            priority
                                            sizes="(min-width: 1024px) 18rem, 70vw"
                                            className={cn("object-cover object-top", ENTER, "duration-[1200ms] delay-150 starting:scale-110")}
                                        />
                                    </span>
                                </div>

                                {member.linkedin && (
                                    <div className={cn("flex justify-center border-t border-border/60 py-5", ENTER_ZOOM, "delay-500")}>
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`LinkedIn — ${member.name}`}
                                            className="grid size-10 place-items-center rounded-full bg-surface text-navy-800 transition-colors hover:text-accent"
                                        >
                                            <LinkedInIcon />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Información */}
                        <div>
                            {/* Botón de volver a Team */}
                            <div className={cn("mb-6", ENTER_FADE)}>
                                <Link
                                    href="/about-us/team"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg group"
                                >
                                    <span className="grid size-8 place-items-center rounded-full bg-surface transition-transform group-hover:-translate-x-1">
                                        <ArrowLeftIcon />
                                    </span>
                                    <span>Back to Team</span>
                                </Link>
                            </div>

                            <div className={cn("w-fit", ENTER_FADE)}>
                                <Badge>VCM Team</Badge>
                            </div>

                            <h1 className={cn("mt-7 text-3xl font-semibold text-fg sm:text-4xl lg:text-5xl", ENTER_LEFT, "delay-100")}>
                                {member.name}
                            </h1>

                            <p className={cn("mt-2 text-base text-fg-muted", ENTER_FADE, "delay-200")}>
                                {member.role}
                            </p>

                            {member.bio && (
                                <p className={cn("mt-7 max-w-[52ch] text-[15px] leading-relaxed text-fg-muted", ENTER_BLUR_UP, "delay-300")}>
                                    {member.bio}
                                </p>
                            )}

                            {member.email && (
                                <div className={cn("mt-9", ENTER_UP, "delay-[400ms]")}>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="inline-flex w-full max-w-md items-center gap-4 rounded-full bg-surface p-2 pr-6 transition-colors hover:bg-surface/70"
                                    >
                                        <span
                                            aria-hidden
                                            className="grid size-12 shrink-0 place-items-center rounded-full bg-navy-800 text-white"
                                        >
                                            <MailIcon />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block text-sm text-fg-muted">Email address</span>
                                            <span className="block truncate text-[15px] text-fg">
                                                {member.email}
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}

function ArrowLeftIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.46-2.2 2.97V21h-4V9Z" />
        </svg>
    );
}