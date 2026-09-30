import type { Metadata } from "next";
import BookkeepingContainer from "@/src/features/services/automation/BookkeepingContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "AI & Business Automation",
    description:
        "Connect your systems, automate manual workflows and get dashboards that give real answers. AI and automation for U.S. construction and roofing companies.",
    path: "/services/automation",
});

export default function Page() {
    return <BookkeepingContainer />;
}