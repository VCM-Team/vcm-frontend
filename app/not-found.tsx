import Link from "next/link";
import Container from "@/src/shared/components/ui/Container";
import ArrowUpRight from "@/src/shared/icons/ArrowUpRight";
import { cn } from "@/src/lib/utils";

// Visible al cargar: basta con @starting-style (variante starting:)
const ENTER =
    "transition-[opacity,translate,scale] duration-700 ease-out motion-reduce:transition-none";
const ENTER_ZOOM = `${ENTER} starting:scale-90 starting:opacity-0`;
const ENTER_UP = `${ENTER} starting:translate-y-6 starting:opacity-0`;

export default function NotFound() {
    return (
        <div className="pt-header-sm lg:pt-header">
            <section className="mx-3 mb-16 lg:mt-8">
                <div className="overflow-hidden rounded-panel bg-gradient-to-b from-brand-400/12 to-bg">
                    <Container className="flex min-h-[60svh] flex-col items-center justify-center py-20 text-center">
                        <p className={cn("text-7xl font-bold leading-none text-brand-400 sm:text-8xl lg:text-9xl", ENTER_ZOOM)}>
                            404
                        </p>

                        <h1 className={cn("mt-8 text-3xl font-semibold text-fg sm:text-4xl", ENTER_UP, "delay-100")}>
                            Page not found
                        </h1>

                        <p className={cn("mt-4 max-w-[44ch] text-base text-fg-muted", ENTER_UP, "delay-200")}>
                            The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
                        </p>

                        <div className={cn("mt-10 flex flex-col items-center gap-5 sm:flex-row", ENTER_UP, "delay-300")}>
                            <div className="group flex w-fit items-center gap-2">
                                <Link
                                    href="/"
                                    className="inline-flex items-center rounded-full bg-brand-400 px-7 py-3.5 text-[15px] font-semibold leading-none text-black transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                                >
                                    Back to Home
                                </Link>

                                <Link
                                    href="/"
                                    aria-hidden
                                    tabIndex={-1}
                                    className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full bg-brand-400 text-black transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-white"
                                >
                                    <ArrowUpRight className="col-start-1 row-start-1 size-4 transition-[translate] duration-300 group-hover:-translate-y-11" />
                                    <ArrowUpRight className="col-start-1 row-start-1 size-4 translate-y-11 transition-[translate] duration-300 group-hover:translate-y-0" />
                                </Link>
                            </div>

                            <Link
                                href="/contact-us"
                                className="text-[15px] font-semibold text-fg underline-offset-4 transition-colors hover:text-brand-500 hover:underline"
                            >
                                Contact us
                            </Link>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    );
}