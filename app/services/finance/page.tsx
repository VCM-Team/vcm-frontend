import type { Metadata } from "next";
import SupplementsContainer from "@/src/features/services/supplements/SupplementsContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Financial Performance",
    description:
        "Get clear visibility into profitability, pricing, costs and cash flow. Financial consulting that protects margins for U.S. construction and roofing companies.",
    path: "/services/finance",
});

export default function Page() {
    return <SupplementsContainer />;
}