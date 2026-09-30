import type { Metadata } from "next";
import RoofingSpecialistsContainer from "@/src/features/services/roofing-specialists/RoofingSpecialistsContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Roofing Specialists",
    description:
        "Dedicated nearshore specialists who understand roofing, from sales and estimating to customer service and admin, working inside your tools and processes.",
    path: "/services/roofing-specialists",
});

export default function Page() {
    return <RoofingSpecialistsContainer />;
}