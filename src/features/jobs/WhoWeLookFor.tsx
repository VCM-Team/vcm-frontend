import Container from "@/src/shared/components/ui/Container";
import Badge from "@/src/shared/components/ui/Badge";
import RevealSection from "@/src/shared/components/ui/RevealSection";
import IconCard, { type IconCardItem } from "@/src/shared/components/ui/IconCard";
import { REVEAL } from "@/src/lib/reveal";
import { cn } from "@/src/lib/utils";

const HEADING = {
    badge: "Who We Look For",
    title: "People Who Take",
    titleAccent: "Ownership",
    titleRest: "of Their Work",
};

const ITEMS: readonly IconCardItem[] = [
    {
        key: "experience",
        title: "Hands-On Experience",
        description:
            "At least a year of experience in your field, and the judgment to solve problems on your own.",
        Icon: BrainIcon,
    },
    {
        key: "learning",
        title: "Eager to Learn",
        description:
            "Comfort with new tools and software, from industry platforms to AI productivity tools.",
        Icon: BookIcon,
    },
    {
        key: "english",
        title: "Advanced English",
        description:
            "You communicate clearly with U.S. clients every day, in writing and on calls.",
        Icon: ChatIcon,
    },
    {
        key: "commitment",
        title: "Committed to the Team",
        description:
            "You work full-time, in person at our offices in Lima, and care about the people you support.",
        Icon: HandIcon,
    },
];

// Zigzag: las tarjetas alternan bajar y subir
const CARD_VARIANTS = [REVEAL.down, REVEAL.up] as const;
const CARD_STAGGER_MS = 120;

export default function WhoWeLookFor() {
    return (
        <RevealSection className="py-16 lg:py-24">
            <Container>
                <div className="flex flex-col items-center text-center">
                    <div className={REVEAL.blur}>
                        <Badge>{HEADING.badge}</Badge>
                    </div>

                    <h2
                        className={cn(
                            "mt-8 max-w-[20ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-[2.75rem]",
                            REVEAL.zoomIn,
                            "delay-100"
                        )}
                    >
                        {HEADING.title}{" "}
                        <span className="text-accent">{HEADING.titleAccent}</span>{" "}
                        {HEADING.titleRest}
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
                    {ITEMS.map((item, i) => (
                        <div
                            key={item.key}
                            className={cn("h-full", CARD_VARIANTS[i % CARD_VARIANTS.length])}
                            style={{ transitionDelay: `${250 + i * CARD_STAGGER_MS}ms` }}
                        >
                            <IconCard item={item} />
                        </div>
                    ))}
                </div>
            </Container>
        </RevealSection>
    );
}

function BrainIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
            <path
                d="M19 28C18.7111 28 18.4278 27.9722 18.15 27.9167C17.8722 27.8611 17.6 27.7778 17.3333 27.6667V4.33333C17.6 4.22222 17.8722 4.13889 18.15 4.08333C18.4278 4.02778 18.7111 4 19 4C20.1556 4 21.15 4.38889 21.9833 5.16667C22.8167 5.94444 23.2667 6.9 23.3333 8.03333C24.6444 8.21111 25.75 8.8 26.65 9.8C27.55 10.8 28 11.9778 28 13.3333C28 13.8222 27.9389 14.2889 27.8167 14.7333C27.6944 15.1778 27.5111 15.6 27.2667 16C27.5111 16.4 27.6944 16.8278 27.8167 17.2833C27.9389 17.7389 28 18.2 28 18.6667C28 20.0444 27.55 21.2278 26.65 22.2167C25.75 23.2056 24.6333 23.7889 23.3 23.9667C23.1889 25.0778 22.7278 26.0278 21.9167 26.8167C21.1056 27.6056 20.1333 28 19 28ZM13 28C11.8667 28 10.8889 27.6056 10.0667 26.8167C9.24444 26.0278 8.77778 25.0778 8.66667 23.9667C7.33333 23.7889 6.22222 23.2 5.33333 22.2C4.44444 21.2 4 20.0222 4 18.6667C4 18.2 4.06111 17.7389 4.18333 17.2833C4.30556 16.8278 4.48889 16.4 4.73333 16C4.48889 15.6 4.30556 15.1778 4.18333 14.7333C4.06111 14.2889 4 13.8222 4 13.3333C4 11.9778 4.44444 10.8056 5.33333 9.81667C6.22222 8.82778 7.32222 8.24444 8.63333 8.06667C8.7 6.93333 9.15556 5.97222 10 5.18333C10.8444 4.39444 11.8444 4 13 4C13.2889 4 13.5722 4.03333 13.85 4.1C14.1278 4.16667 14.4 4.25556 14.6667 4.36667V27.6667C14.4 27.7778 14.1278 27.8611 13.85 27.9167C13.5722 27.9722 13.2889 28 13 28Z"
                fill="currentColor"
            />
        </svg>
    );
}

function BookIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
            <path
                d="M10.0007 29.3333C8.71176 29.3333 7.61176 28.8777 6.70065 27.9666C5.78954 27.0555 5.33398 25.9555 5.33398 24.6666V7.33329C5.33398 6.0444 5.78954 4.9444 6.70065 4.03329C7.61176 3.12218 8.71176 2.66663 10.0007 2.66663H26.6673V22.6666C26.1118 22.6666 25.6395 22.8611 25.2507 23.25C24.8618 23.6388 24.6673 24.1111 24.6673 24.6666C24.6673 25.2222 24.8618 25.6944 25.2507 26.0833C25.6395 26.4722 26.1118 26.6666 26.6673 26.6666V29.3333H10.0007ZM10.6673 20H13.334V5.33329H10.6673V20ZM10.0007 26.6666H22.434C22.3007 26.3555 22.1951 26.0388 22.1173 25.7166C22.0395 25.3944 22.0007 25.0444 22.0007 24.6666C22.0007 24.3111 22.034 23.9666 22.1007 23.6333C22.1673 23.3 22.2784 22.9777 22.434 22.6666H10.0007C9.42287 22.6666 8.9451 22.8611 8.56732 23.25C8.18954 23.6388 8.00065 24.1111 8.00065 24.6666C8.00065 25.2444 8.18954 25.7222 8.56732 26.1C8.9451 26.4777 9.42287 26.6666 10.0007 26.6666Z"
                fill="currentColor"
            />
        </svg>
    );
}

function ChatIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
            <path
                d="M2.66602 29.3333V5.33329C2.66602 4.59996 2.92713 3.97218 3.44935 3.44996C3.97157 2.92774 4.59935 2.66663 5.33268 2.66663H26.666C27.3993 2.66663 28.0271 2.92774 28.5493 3.44996C29.0716 3.97218 29.3327 4.59996 29.3327 5.33329V21.3333C29.3327 22.0666 29.0716 22.6944 28.5493 23.2166C28.0271 23.7388 27.3993 24 26.666 24H7.99935L2.66602 29.3333Z"
                fill="currentColor"
            />
        </svg>
    );
}

function HandIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
            <path
                d="M16 26.9L23.4667 22.3333C22.3556 21.5556 21.1667 20.9722 19.9 20.5833C18.6333 20.1944 17.3333 20 16 20C14.6667 20 13.3611 20.1944 12.0833 20.5833C10.8056 20.9722 9.6 21.5444 8.46667 22.3L16 26.9ZM19.3 15.9667C20.2111 15.0556 20.6667 13.9556 20.6667 12.6667C20.6667 11.3778 20.2111 10.2778 19.3 9.36667C18.3889 8.45556 17.2889 8 16 8C14.7111 8 13.6111 8.45556 12.7 9.36667C11.7889 10.2778 11.3333 11.3778 11.3333 12.6667C11.3333 13.9556 11.7889 15.0556 12.7 15.9667C13.6111 16.8778 14.7111 17.3333 16 17.3333C17.2889 17.3333 18.3889 16.8778 19.3 15.9667ZM16 30L4 22.6667V9.33333L16 2L28 9.33333V22.6667L16 30Z"
                fill="currentColor"
            />
        </svg>
    );
}