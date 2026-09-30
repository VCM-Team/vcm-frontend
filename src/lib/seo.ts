import type { Metadata } from "next";

export const SITE_NAME = "VCM";

type PageSeo = {
    title: string;
    description: string;
    /** Ruta de la página, por ejemplo "/services" */
    path: string;
    /** true para usar el título tal cual, sin añadir "| VCM" */
    absoluteTitle?: boolean;
};

/** Metadata completa de una página: título, descripción, canonical, Open Graph y Twitter */
export function pageMetadata({ title, description, path, absoluteTitle = false }: PageSeo): Metadata {
    const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            locale: "en_US",
            siteName: SITE_NAME,
            url: path,
            title: fullTitle,
            description,
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
        },
    };
}