import type { Metadata } from "next";
import RoofingSpecialistsContainer from "@/src/features/services/roofing-specialists/RoofingSpecialistsContainer";

export const metadata: Metadata = {
    title: "Nombre del servicio",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <RoofingSpecialistsContainer />;
}