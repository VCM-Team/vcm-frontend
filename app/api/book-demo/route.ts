import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const REVENUE_LABELS: Record<string, string> = {
    "under-1m": "Under $1M",
    "1m-3m": "$1M – $3M",
    "3m-5m": "$3M – $5M",
    "5m-plus": "$5M+",
};

const TENURE_LABELS: Record<string, string> = {
    "under-1": "Less than 1 year",
    "1-3": "1–3 years",
    "3-5": "3–5 years",
    "5-plus": "5+ years",
};

const TIMELINE_LABELS: Record<string, string> = {
    now: "Immediately",
    weeks: "Within a few weeks",
    "3-months": "Within 3 months",
    "6-months": "Within 6 months",
};

const SUPPORT_LABELS: Record<string, string> = {
    "job-scheduling": "Job Scheduling",
    supplements: "Supplements",
    "lead-management": "Lead Management",
    measurement: "Measurement",
    "crm-build-out": "CRM Build-Out",
    "not-sure": "Not Sure Yet",
};

const row = (label: string, value: string) => `
    <tr>
        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; width:180px; color:#6B6355; vertical-align:top;">${label}</td>
        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; color:#171717;">${value || "—"}</td>
    </tr>`;

export async function POST(req: Request) {
    try {
        const d = await req.json();

        const fullName = `${d.firstName ?? ""} ${d.lastName ?? ""}`.trim();

        await resend.emails.send({
            from: "Advanced Leads <info@contact.advancedteamelite.com>",
            to: process.env.NOTIFICATION_EMAIL || "dtalledo@advancedteamelite.com",
            subject: `New Discovery Call Request: ${fullName}`,
            html: `
                <div style="background:#F0F0F0; padding:24px 0; font-family:Helvetica, Arial, sans-serif;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px; margin:0 auto; background:#171717; border-radius:16px; overflow:hidden;">
                        <tr>
                            <td style="padding:28px 32px;">
                                <span style="font-size:24px; font-weight:bold; letter-spacing:1px; color:#FFFFFF;">VC<span style="color:#FEBD17;">M</span></span>
                                <div style="margin-top:4px; font-size:10px; letter-spacing:2px; color:#FFFFFF; opacity:0.6;">VIRTUAL CONSTRUCTION MANAGEMENT</div>
                            </td>
                        </tr>
                        <tr><td style="height:4px; background:#FEBD17; line-height:4px; font-size:0;">&nbsp;</td></tr>
                        <tr>
                            <td style="padding:32px; background:#FFFFFF;">
                                <h2 style="margin:0 0 6px; font-size:20px; color:#171717;">New Discovery Call Request</h2>
                                <p style="margin:0 0 24px; font-size:13px; color:#6B6355;">Scale Readiness Diagnostic — completed assessment</p>

                                <p style="margin:0 0 8px; font-size:12px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#6B6355;">Contact</p>
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size:14px;">
                                    ${row("Name", fullName)}
                                    ${row("Company", d.company)}
                                    ${row("Email", `<a href="mailto:${d.email}" style="color:#171717;">${d.email}</a>`)}
                                    ${row("Phone", `<a href="tel:${d.phone}" style="color:#171717;">${d.phone}</a>`)}
                                    ${row("SMS consent", d.smsConsent ? "Yes" : "No")}
                                </table>

                                <p style="margin:28px 0 8px; font-size:12px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; color:#6B6355;">Assessment</p>
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size:14px;">
                                    ${row("Annual revenue", REVENUE_LABELS[d.revenue] ?? d.revenue)}
                                    ${row("Years in business", TENURE_LABELS[d.tenure] ?? d.tenure)}
                                    ${row("Territories", (d.territories ?? []).join(", "))}
                                    ${row("Support needed", (d.support ?? []).map((s: string) => SUPPORT_LABELS[s] ?? s).join(", "))}
                                    ${row("Uses a CRM", d.usesCrm === true ? "Yes" : d.usesCrm === false ? "No" : "—")}
                                    ${row("Platforms", (d.platforms ?? []).join(", "))}
                                    ${row("Timeline", TIMELINE_LABELS[d.timeline] ?? d.timeline)}
                                    ${row("Found us via", d.source)}
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:18px 32px; font-size:11px; color:#FFFFFF; opacity:0.6;">
                                Automated notification — VCM
                            </td>
                        </tr>
                    </table>
                </div>
            `,
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}