import type { Metadata } from "next";
import BookDemoContainer from "@/src/features/book-demo/BookDemoContainer";

export const metadata: Metadata = {
    title: "Book a Demo",
    description: "Scale Readiness Diagnostic",
};

export default function BookDemoPage() {
    return <BookDemoContainer />;
}