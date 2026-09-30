import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/src/shared/components/ui/LegalPage";

// Pendiente de confirmar: correo de contacto real de VCM
const CONTACT_EMAIL = "email@dominio.com";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "The terms that govern your use of the VCM website.",
};

export default function TermsOfServicePage() {
    return (
        <LegalPage badge="Legal" title="Terms of Service" updated="September 30, 2026">
            <p>
                These Terms of Service (“Terms”) govern your use of the website of VCM — Virtual Construction
                Management (“VCM”, “we”, “us” or “our”). By accessing or using our website, you agree to these Terms.
                If you do not agree, please do not use the website.
            </p>

            <h2>1. About Our Website</h2>
            <p>
                Our website provides information about VCM’s business growth consulting and talent solutions. The
                content is for general information only. Any services we provide are governed by a separate written
                agreement between VCM and the client, which takes precedence over these Terms.
            </p>

            <h2>2. Use of the Website</h2>
            <p>You agree to use the website only for lawful purposes. You must not:</p>
            <ul>
                <li>Use the website in a way that could damage, disable or impair it.</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems.</li>
                <li>Submit false or misleading information through our forms.</li>
                <li>Use automated tools to collect content or data from the website without our permission.</li>
            </ul>

            <h2>3. Information You Submit</h2>
            <p>
                When you submit information through our forms, you confirm that it is accurate and that you are
                authorized to share it. How we handle that information is described in our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
                All content on this website, including text, graphics, logos and design, is owned by VCM or its
                licensors and is protected by intellectual property laws. You may not copy, reproduce or distribute it
                without our prior written permission, except for personal, non-commercial use.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
                The website may include links to third-party websites. We do not control and are not responsible for
                their content, policies or practices.
            </p>

            <h2>6. No Professional Advice</h2>
            <p>
                The information on this website, including blog articles, does not constitute legal, financial,
                insurance or professional advice. You should consult a qualified professional before making decisions
                based on it.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
                The website is provided “as is” and “as available”. We do not guarantee that it will be uninterrupted,
                error-free or free of harmful components, or that the information it contains is complete or current.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by law, VCM will not be liable for any indirect, incidental or
                consequential damages arising from your use of, or inability to use, the website.
            </p>

            <h2>9. Governing Law</h2>
            <p>
                These Terms are governed by the laws of the jurisdiction in which VCM is legally established, without
                regard to its conflict of law principles.
            </p>

            <h2>10. Changes to These Terms</h2>
            <p>
                We may update these Terms from time to time. When we do, we will update the “Last updated” date at the
                top of this page. Your continued use of the website means you accept the updated Terms.
            </p>

            <h2>11. Contact Us</h2>
            <p>
                If you have any questions about these Terms, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or through our{" "}
                <Link href="/contact-us">contact page</Link>.
            </p>
        </LegalPage>
    );
}