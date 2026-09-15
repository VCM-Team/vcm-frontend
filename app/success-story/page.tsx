import type { Metadata } from "next";
import SuccessStoryContainer from "@/src/features/success-story/SuccessStoryContainer";

export const metadata: Metadata = {
    title: "Success Stories",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <SuccessStoryContainer />;
}