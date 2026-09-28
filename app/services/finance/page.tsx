import type { Metadata } from "next";
import SupplementsContainer from "@/src/features/services/supplements/SupplementsContainer";

export const metadata: Metadata = {
    title: "Financial Performance",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <SupplementsContainer />;
}