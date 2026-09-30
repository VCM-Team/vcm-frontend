import type { Metadata } from "next";
import LeadManagementContainer from "@/src/features/services/lead-management/LeadManagementContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Lead Management Specialists",
    description:
        "Dedicated specialists who answer, qualify and follow up with every lead, so construction and roofing companies turn more inquiries into real projects.",
    path: "/services/lead-management",
});

export default function Page() {
    return <LeadManagementContainer />;
}