import type { Metadata } from "next";
import AboutContainer from "@/src/features/about-us/AboutContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "About VCM",
    description:
        "VCM helps U.S. construction companies recruit, hire, train and scale with reliable nearshore talent, combining growth consulting with a dedicated team in Lima, Peru.",
    path: "/about-us",
});

export default function Page() {
    return <AboutContainer />;
}