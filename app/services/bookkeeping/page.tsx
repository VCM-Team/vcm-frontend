import type { Metadata } from "next";
import BookkeepingContainer from "@/src/features/services/bookkeeping/BookkeepingContainer";

export const metadata: Metadata = {
    title: "Bookkeeping",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <BookkeepingContainer />;
}