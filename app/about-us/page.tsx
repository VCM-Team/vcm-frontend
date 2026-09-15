import type { Metadata } from "next";
import AboutContainer from "@/src/features/about-us/AboutContainer";

export const metadata: Metadata = {
    title: "About Us",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <AboutContainer />;
}