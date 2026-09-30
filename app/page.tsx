import type { Metadata } from "next";
import HomeContainer from "@/src/features/home/HomeContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Business Growth Consulting & Talent Solutions | VCM",
  description:
      "Strategy, systems and talent for U.S. construction and roofing companies. VCM finds what holds your business back, fixes the process and builds the team to scale.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeContainer />;
}