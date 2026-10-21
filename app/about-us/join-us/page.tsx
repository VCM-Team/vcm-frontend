import type { Metadata } from "next";
import JobsContainer from "@/src/features/jobs/JobsContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Join VCM",
    description:
        "Join VCM’s LATAM team. Full-time roles working with U.S. construction and roofing companies, with training and room to grow. See open positions.",
    path: "/about-us/join-us",
});

export default function Page() {
    return <JobsContainer />;
}