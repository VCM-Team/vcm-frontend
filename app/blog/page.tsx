import type { Metadata } from "next";
import BlogContainer from "@/src/features/blog/BlogContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Blog",
    description:
        "Practical ideas on sales, operations, leadership and growth for U.S. construction and roofing companies, from the VCM team.",
    path: "/blog",
});

export default function Page() {
    return <BlogContainer />;
}