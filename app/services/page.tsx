import type { Metadata } from "next";
import ServicesContainer from "@/src/features/services/ServicesContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Business Growth Consulting Services",
    description:
        "Sales, operations, leadership, finance, marketing and AI automation: VCM’s business growth consulting for U.S. construction and roofing companies.",
    path: "/services",
});

export default function Page() {
    return <ServicesContainer />;
}