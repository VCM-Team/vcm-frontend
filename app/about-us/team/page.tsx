import type { Metadata } from "next";
import TeamContainer from "@/src/features/team/TeamContainer";

export const metadata: Metadata = {
    title: "Team",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <TeamContainer />;
}