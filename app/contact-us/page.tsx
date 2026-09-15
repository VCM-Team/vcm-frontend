import type { Metadata } from "next";
import ContactContainer from "@/src/features/contact/ContactContainer";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <ContactContainer />;
}