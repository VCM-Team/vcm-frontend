import type { Metadata } from "next";
import RecruitContainer from "@/src/features/services/ninjarecruit/RecruitContainer";

export const metadata: Metadata = {
    title: "Nombre del servicio",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <RecruitContainer />;
}