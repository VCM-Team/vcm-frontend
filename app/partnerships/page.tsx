import type { Metadata } from "next";
import PartnershipsContainer from "@/src/features/partnerships/PartnershipsContainer";

export const metadata: Metadata = {
    title: "Partnerships",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <PartnershipsContainer />;
}