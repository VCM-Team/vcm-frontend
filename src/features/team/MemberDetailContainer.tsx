import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import type { TeamMember } from "@/src/shared/data/team.data";

export default function MemberDetailContainer({ member }: { member: TeamMember }) {
    return (
        <div className="pt-header-sm lg:pt-header">
            <section className="bg-gradient-to-b from-surface to-bg lg:mx-3 lg:rounded-panel">
                <Container className="py-14 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-16">
                        {/* tarjeta de foto — primero en móvil */}
                        <div className="order-first mx-auto w-full max-w-sm lg:order-last">
                            <div className="overflow-hidden rounded-card bg-bg ring-1 ring-border/60">
                                <div className="flex items-center justify-center p-8">
                                    <span className="relative aspect-square w-full max-w-[15rem] overflow-hidden rounded-full bg-surface">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            priority
                                            sizes="(min-width: 1024px) 15rem, 60vw"
                                            className="object-cover object-top"
                                        />
                                    </span>
                                </div>

                                {member.linkedin && (
                                    <div className="flex justify-center border-t border-border/60 py-5">
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

                        {/* información */}
                        <div>
                            <Badge>Team</Badge>

                            <h1 className="mt-7 text-3xl font-semibold text-fg sm:text-4xl lg:text-5xl">
                                {member.name}
                            </h1>

                            <p className="mt-2 text-base text-fg-muted">{member.role}</p>

                            {member.bio && (
                                <p className="mt-7 max-w-[52ch] text-[15px] leading-relaxed text-fg-muted">
                                    {member.bio}
                                </p>
                            )}

                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="mt-9 inline-flex w-full max-w-md items-center gap-4 rounded-full bg-surface p-2 pr-6 transition-colors hover:bg-surface/70"
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
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
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