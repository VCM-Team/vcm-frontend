import type { Metadata } from "next";
import BookkeepingContainer from "@/src/features/services/automation/BookkeepingContainer";

export const metadata: Metadata = {
    title: "IA Automation",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <BookkeepingContainer />;
}