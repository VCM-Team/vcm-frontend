import type { Metadata } from "next";
import PartnershipsContainer from "@/src/features/partnerships/PartnershipsContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = {
    ...pageMetadata({
        title: "Partnerships",
        description:
            "VCM works with software providers, coaches and service partners focused on construction and roofing to help clients build better systems and grow.",
        path: "/partnerships",
    }),
    // Contenido de ejemplo: no indexar hasta tener alianzas reales
    robots: { index: false, follow: true },
};

export default function Page() {
    return <PartnershipsContainer />;
}