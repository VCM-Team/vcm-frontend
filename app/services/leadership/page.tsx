import type { Metadata } from "next";
import CrmMigrationContainer from "@/src/features/services/crm-migration/CrmMigrationContainer";

export const metadata: Metadata = {
    title: "Leadership",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <CrmMigrationContainer />;
}