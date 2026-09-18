"use client";

import { useRef, useState } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
    src: string;
    title: string;
    poster?: string;
    className?: string;
};

export default function VideoEmbed({ src, title, poster, className }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);

    const play = () => {
        videoRef.current?.play();
        setStarted(true);
    };

    return (
        <div
            className={cn(
                "relative aspect-video overflow-hidden rounded-card bg-black",
                className
            )}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                title={title}
                controls={started}
                playsInline
                preload="auto"
                onPlay={() => setStarted(true)}
                className="size-full object-cover"
            />

            {!started && (
                <button
                    type="button"
                    onClick={play}
                    aria-label={`Play: ${title}`}
                    className="group absolute inset-0 size-full cursor-pointer"
                >
                    <span
                        aria-hidden
                        className="absolute inset-0 bg-black/15 transition-colors duration-200 group-hover:bg-black/25"
                    />

                    <span
                        aria-hidden
                        className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-brand-400 bg-brand-400/20 backdrop-blur-sm transition-[scale,background-color] duration-200 group-hover:scale-105 group-hover:bg-brand-400/35"
                    >
                                                <svg
                                                    width="36"
                                                    height="36"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="ml-0.5 text-brand-400"
                                                >
                            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                        </svg>
                    </span>
                </button>
            )}
        </div>
    );
}