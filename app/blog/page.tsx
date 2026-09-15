import type { Metadata } from "next";
import BlogContainer from "@/src/features/blog/BlogContainer";

export const metadata: Metadata = {
    title: "Blog",
    description: "Descripción de la página — reemplázala.",
};

export default function Page() {
    return <BlogContainer />;
}