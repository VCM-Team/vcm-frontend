export type SuccessStory = {
    slug: string;
    badge: string;
    title: string;
    image: string;
};

const PLACEHOLDER_IMAGE = "/success/placeholder.jpg";

export const SUCCESS_STORIES: readonly SuccessStory[] = [
    {
        slug: "historia-uno",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
    {
        slug: "historia-dos",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
    {
        slug: "historia-tres",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
    {
        slug: "historia-cuatro",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
    {
        slug: "historia-cinco",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
    {
        slug: "historia-seis",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
    {
        slug: "historia-siete",
        badge: "Success story",
        title: "Título del caso de éxito",
        image: PLACEHOLDER_IMAGE,
    },
];

export const getStoryBySlug = (slug: string) =>
    SUCCESS_STORIES.find((s) => s.slug === slug);