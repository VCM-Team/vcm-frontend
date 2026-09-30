import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/src/shared/components/ui/LegalPage";

// Pendiente de confirmar: correo de contacto real de VCM
const CONTACT_EMAIL = "email@dominio.com";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How VCM collects, uses and protects the personal information you share with us.",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPage badge="Legal" title="Privacy Policy" updated="September 30, 2026">
            <p>
                This Privacy Policy explains how VCM — Virtual Construction Management (“VCM”, “we”, “us” or “our”)
                collects, uses and protects the personal information you provide when you visit our website or
                contact us. By using our website, you agree to the practices described in this policy.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect the information you choose to share with us, including:</p>
            <ul>
                <li><strong>Contact details</strong>, such as your name, company name, work email and phone number, when you fill out our contact form or growth assessment.</li>
                <li><strong>Business information</strong> you share in the assessment, such as company size, revenue range, markets, tools and goals.</li>
                <li><strong>Any other information</strong> you include in your messages to us.</li>
            </ul>
            <p>
                We may also collect limited technical information automatically, such as your browser type, device,
                pages visited and approximate location, to understand how our website is used.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Respond to your inquiries and schedule strategy sessions.</li>
                <li>Evaluate your needs and prepare recommendations or proposals.</li>
                <li>Provide, manage and improve our services.</li>
                <li>Send you information related to your request, which you can opt out of at any time.</li>
                <li>Analyze and improve the performance of our website.</li>
                <li>Comply with legal obligations.</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>
                We do not sell your personal information. We only share it with trusted service providers that help us
                operate our website and business, such as hosting, email delivery and analytics providers. These
                providers may only use your information to perform services on our behalf. We may also disclose
                information when required by law or to protect our rights.
            </p>

            <h2>4. Cookies and Analytics</h2>
            <p>
                Our website may use cookies and similar technologies to remember your preferences and measure how the
                site is used. You can control or disable cookies through your browser settings. Disabling cookies may
                affect how some parts of the website work.
            </p>

            <h2>5. Data Retention</h2>
            <p>
                We keep your personal information only for as long as necessary to fulfill the purposes described in
                this policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2>6. Data Security</h2>
            <p>
                We use reasonable technical and organizational measures to protect your information against
                unauthorized access, loss or misuse. However, no method of transmission over the internet is completely
                secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. International Data Transfers</h2>
            <p>
                VCM works with companies in the United States and operates from Peru. Your information may be processed
                in countries other than your own. When this happens, we take reasonable steps to ensure it remains
                protected in accordance with this policy.
            </p>

            <h2>8. Your Rights</h2>
            <p>
                Depending on where you live, you may have the right to access, correct or delete your personal
                information, or to object to or limit how we use it. To exercise any of these rights, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within the time required by
                applicable law.
            </p>

            <h2>9. Children’s Privacy</h2>
            <p>
                Our website and services are intended for businesses and are not directed to children under 16. We do
                not knowingly collect personal information from children.
            </p>

            <h2>10. Third-Party Links</h2>
            <p>
                Our website may contain links to third-party websites, such as LinkedIn. We are not responsible for the
                privacy practices of those websites, and we encourage you to review their policies.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. When we do, we will update the “Last updated” date
                at the top of this page.
            </p>

            <h2>12. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or through our{" "}
                <Link href="/contact-us">contact page</Link>.
            </p>
        </LegalPage>
    );
}