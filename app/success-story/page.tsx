import type { Metadata } from "next";
import SuccessStoryContainer from "@/src/features/success-story/SuccessStoryContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Case Studies",
    description:
        "See how construction and roofing companies build the systems and teams they need to scale with VCM’s strategy, processes and dedicated nearshore talent.",
    path: "/success-story",
});

export default function Page() {
    return <SuccessStoryContainer />;
}