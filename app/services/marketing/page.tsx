import type { Metadata } from "next";
import MarketingContainer from "@/src/features/services/marketing/MarketingContainer";

export const metadata: Metadata = {
    title: "Marketing",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <MarketingContainer />;
}