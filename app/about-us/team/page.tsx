import type { Metadata } from "next";
import TeamContainer from "@/src/features/team/TeamContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Our Team",
    description:
        "Meet the people behind VCM: a team in Lima, Peru, combining business growth consulting and talent solutions to help U.S. construction companies grow.",
    path: "/about-us/team",
});

export default function Page() {
    return <TeamContainer />;
}