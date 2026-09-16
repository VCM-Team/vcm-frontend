import type { Metadata } from "next";
import ServicesContainer from "@/src/features/services/ServicesContainer";

export const metadata: Metadata = {
    title: "Services",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <ServicesContainer />;
}