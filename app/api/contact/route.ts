import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { firstName, lastName, phone, email, company, website } = body;

        // honeypot: si viene relleno, es un bot
        if (website) {
            return NextResponse.json({ success: true }, { status: 201 });
        }

        await resend.emails.send({
            from: 'Advanced Leads <info@contact.advancedteamelite.com>',
            to: process.env.NOTIFICATION_EMAIL || 'dtalledo@advancedteamelite.com',
            subject: `New Contact Request: ${firstName} ${lastName}`,
            html: `
                <div style="background:#F0F0F0; padding:24px 0; font-family:Helvetica, Arial, sans-serif;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px; margin:0 auto; background:#171717; border-radius:16px; overflow:hidden;">
                        <tr>
                            <td style="padding:28px 32px; background:#171717;">
                                <span style="display:inline-block; font-size:24px; font-weight:bold; letter-spacing:1px; color:#FFFFFF;">VC<span style="color:#FEBD17;">M</span></span>
                                <div style="margin-top:4px; font-size:10px; letter-spacing:2px; color:#FFFFFF; opacity:0.6;">VIRTUAL CONSTRUCTION MANAGEMENT</div>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:4px; background:#FEBD17; line-height:4px; font-size:0;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="padding:32px; background:#FFFFFF;">
                                <h2 style="margin:0 0 24px; font-size:20px; color:#171717;">New Contact Request</h2>

                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size:14px; color:#171717;">
                                    <tr>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; width:120px; color:#6B6355;">Name</td>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; font-weight:bold;">${firstName} ${lastName}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; color:#6B6355;">Company</td>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8;">${company}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; color:#6B6355;">Email</td>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8;"><a href="mailto:${email}" style="color:#171717; text-decoration:none;">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8; color:#6B6355;">Phone</td>
                                        <td style="padding:10px 0; border-bottom:1px solid #E7E2D8;"><a href="tel:${phone}" style="color:#171717; text-decoration:none;">${phone}</a></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:18px 32px; background:#171717; font-size:11px; color:#FFFFFF; opacity:0.6;">
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