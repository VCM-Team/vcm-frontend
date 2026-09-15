"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/src/shared/components/ui/Container";
import YearTabs from "@/src/shared/components/ui/YearTabs";
import { cn } from "@/src/lib/utils";

const HEADING = {
    title: "Primera parte del titular",
    titleAccent: "parte resaltada del titular",
};

type Milestone = {
    year: string;
    title: string;
    description: string;
    image: string;
};

const MILESTONES: readonly Milestone[] = [
    {
        year: "2019",
        title: "Título del hito",
        description: "Descripción del hito — reemplázala con el texto propio.",
        image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3894-scaled.jpg",
    },
    {
        year: "2021",
        title: "Título del hito",
        description: "Descripción del hito — reemplázala con el texto propio.",
        image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3895-scaled.jpg",
    },
    {
        year: "2023",
        title: "Título del hito",
        description: "Descripción del hito — reemplázala con el texto propio.",
        image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3895-scaled.jpg",
    },
    {
        year: "2025",
        title: "Título del hito",
        description: "Descripción del hito — reemplázala con el texto propio.",
        image: "https://workninjas.com/wp-content/uploads/2025/06/Group-3895-scaled.jpg",
    },
];

const YEARS = MILESTONES.map((m) => m.year);

export default function OurStory() {
    const [active, setActive] = useState(MILESTONES[0].year);
    const current = MILESTONES.find((m) => m.year === active) ?? MILESTONES[0];

    return (
        <section>
            <Container className="pb-12 text-center lg:pb-16">
                <h2 className="mx-auto max-w-[22ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
                    {HEADING.title}{" "}
                    <span className="text-accent">{HEADING.titleAccent}</span>
                </h2>
            </Container>

            <div className="relative isolate min-h-[34rem] overflow-hidden lg:min-h-[40rem]">
                {/* fondo con crossfade */}
                {MILESTONES.map((m) => (
                    <Image
                        key={m.year}
                        src={m.image}
                        alt=""
                        fill
                        sizes="100vw"
                        priority={m.year === MILESTONES[0].year}
                        className={cn(
                            "-z-10 object-cover object-center transition-opacity duration-500",
                            m.year === active ? "opacity-100" : "opacity-0"
                        )}
                    />
                ))}

                <div aria-hidden className="absolute inset-0 -z-10 bg-black/35" />

                <Container className="flex min-h-[34rem] flex-col justify-end gap-8 py-12 lg:min-h-[40rem] lg:flex-row lg:items-end lg:justify-between lg:py-16">
                    <div
                        role="tabpanel"
                        id={`year-panel-${current.year}`}
                        aria-labelledby={`year-tab-${current.year}`}
                        className="max-w-md rounded-card bg-white/85 p-7 backdrop-blur-md lg:p-8"
                    >
            <span className="inline-flex items-center rounded-full border border-border bg-bg px-4 py-1.5 text-xs font-medium text-fg">
              {current.year}
            </span>

                        <h3 className="mt-6 text-xl font-semibold leading-snug text-fg lg:text-2xl">
                            {current.title}
                        </h3>

                        <p className="mt-6 text-[15px] leading-relaxed text-fg-muted">
                            {current.description}
                        </p>
                    </div>

                    <YearTabs
                        years={YEARS}
                        active={active}
                        onChange={setActive}
                        className="justify-center lg:justify-end lg:pb-2"
                    />
                </Container>
            </div>
        </section>
    );
}