import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LEADERSHIP, getLeaderBySlug } from "@/src/shared/data/team.data";
import MemberDetailContainer from "@/src/features/team/MemberDetailContainer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return LEADERSHIP.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const member = getLeaderBySlug(slug);
    if (!member) return {};

    return {
        title: member.name,
        description: member.bio,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const member = getLeaderBySlug(slug);
    if (!member) notFound();

    return <MemberDetailContainer member={member} />;
}