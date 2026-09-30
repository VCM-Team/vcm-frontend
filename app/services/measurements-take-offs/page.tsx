import type { Metadata } from "next";
import MeasurementsContainer from "@/src/features/services/measurements/MeasurementsContainer";
import { pageMetadata } from "@/src/lib/seo";

export const metadata: Metadata = pageMetadata({
    title: "Estimating & Takeoffs",
    description:
        "Dedicated estimators for takeoffs, plan reading and cost estimates on residential and commercial projects, so your team keeps bidding without slowing down.",
    path: "/services/estimating",
});

export default function Page() {
    return <MeasurementsContainer />;
}