import type { Metadata } from "next";
import RecruitContainer from "@/src/features/services/recruitment/RecruitContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Nearshore Talent Solutions",
    description:
        "Dedicated nearshore professionals from LATAM, recruited, evaluated and integrated into your tools and processes. Talent solutions for U.S. construction companies.",
    path: "/services/talent",
});

export default function Page() {
    return <RecruitContainer />;
}