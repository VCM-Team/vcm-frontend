import Image from "next/image";
import Container from "./Container";
import Badge from "./Badge";

type Props = {
    badge: string;
    title: string;
    titleAccent?: string;
    titleRest?: string;
    image: string;
    imageClassName?: string;
};

export default function PageHero({
                                     badge,
                                     title,
                                     titleAccent,
                                     titleRest,
                                     image,
                                     imageClassName,
                                 }: Props) {
    return (
        <section className="bg-gradient-to-b from-surface to-bg lg:mx-3 lg:rounded-t-panel">
            <Container className="pt-14 lg:pt-20">
                <Badge>{badge}</Badge>

                <h1 className="mt-8 max-w-[24ch] text-3xl font-semibold leading-[1.15] text-fg sm:text-4xl lg:text-5xl">
                    {title}
                    {titleAccent && <> <span className="text-accent">{titleAccent}</span></>}
                    {titleRest && <> {titleRest}</>}
                </h1>

                <div
                    className={
                        imageClassName ??
                        "relative mt-12 aspect-[16/10] overflow-hidden rounded-panel lg:mt-16 lg:aspect-[21/9]"
                    }
                >
                    <Image
                        src={image}
                        alt=""
                        fill
                        priority
                        sizes="(min-width: 1024px) 80rem, 100vw"
                        className="object-cover object-center"
                    />
                </div>
            </Container>
        </section>
    );
}