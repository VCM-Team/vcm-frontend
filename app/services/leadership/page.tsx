import type { Metadata } from "next";
import CrmMigrationContainer from "@/src/features/services/crm-migration/CrmMigrationContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Leadership & Organizational Development",
    description:
        "Clear roles, faster decisions and accountable teams. Leadership consulting that helps construction and roofing companies grow beyond their owner.",
    path: "/services/leadership",
});

export default function Page() {
    return <CrmMigrationContainer />;
}