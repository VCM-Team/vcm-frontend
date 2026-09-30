import type { Metadata } from "next";
import ContactContainer from "@/src/features/contact/ContactContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Contact Us",
    description:
        "Tell us about your construction or roofing business and where you want to take it. Contact VCM to book a free strategy session with our team.",
    path: "/contact-us",
});

export default function Page() {
    return <ContactContainer />;
}