import type { Metadata } from "next";
import JobsContainer from "@/src/features/jobs/JobsContainer";

export const metadata: Metadata = {
    title: "Careers",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <JobsContainer />;
}