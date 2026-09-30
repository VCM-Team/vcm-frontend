import type { Metadata } from "next";
import MarketingContainer from "@/src/features/services/marketing/MarketingContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Marketing & Customer Acquisition",
    description:
        "Sharper positioning, a clear funnel and campaigns that bring the right customers. Marketing consulting for U.S. construction and roofing companies.",
    path: "/services/marketing",
});

export default function Page() {
    return <MarketingContainer />;
}