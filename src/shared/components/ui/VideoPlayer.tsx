"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

type Props = {
    src: string;
    poster: string;
    title: string;
    className?: string;
};

export default function VideoPlayer({ src, poster, title, className }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);

    const play = () => {
        setStarted(true);
        requestAnimationFrame(() => videoRef.current?.play());
    };

    return (
        <div
            className={cn(
                "relative aspect-square overflow-hidden rounded-card bg-navy-800",
                className
            )}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                title={title}
                controls={started}
                preload="metadata"
                playsInline
                controlsList="nodownload"
                className="absolute inset-0 size-full object-cover"
            />

            {!started && (
                <button
                    type="button"
                    onClick={play}
                    aria-label={`Reproducir: ${title}`}
                    className="group absolute inset-0 size-full"
                >
                    <Image
                        src={poster}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                    />

                    <span
                        aria-hidden
                        className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent/85 text-white backdrop-blur-sm transition-transform duration-200 group-hover:scale-105"
                    >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </span>
                </button>
            )}
        </div>
    );
}