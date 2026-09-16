import type { Metadata } from "next";
import MeasurementsContainer from "@/src/features/services/measurements/MeasurementsContainer";

export const metadata: Metadata = {
    title: "Measurements & Takeoffs",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <MeasurementsContainer />;
}