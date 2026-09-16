import type { Metadata } from "next";
import LeadManagementContainer from "@/src/features/services/lead-management/LeadManagementContainer";

export const metadata: Metadata = {
    title: "Lead Management Specialists",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <LeadManagementContainer />;
}