"use client";

import { useState } from "react";
import { cn } from "@/src/lib/utils";

type Props = {
    videoId: string;
    title: string;
    className?: string;
};

export default function VideoEmbed({ videoId, title, className }: Props) {
    const [playing, setPlaying] = useState(false);
    const [thumb, setThumb] = useState(
        `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    );

    return (
        <div
            className={cn(
                "relative aspect-video overflow-hidden rounded-card bg-navy-800",
                className
            )}
        >
            {playing ? (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 size-full"
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play: ${title}`}
                    className="group absolute inset-0 size-full"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={thumb}
                        alt=""
                        loading="lazy"
                        onError={() =>
                            setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
                        }
                        className="absolute inset-0 size-full object-cover"
                    />

                    <span
                        aria-hidden
                        className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25"
                    />

                    <span
                        aria-hidden
                        className="absolute left-1/2 top-1/2 grid h-14 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl bg-[#ff0000] transition-transform duration-200 group-hover:scale-105"
                    >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </span>
                </button>
            )}
        </div>
    );
}