import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(1, "Required").max(80),
    lastName: z.string().min(1, "Required").max(80),
    phone: z.string().min(7, "Enter a valid phone").max(25),
    email: z.email("Enter a valid email"),
    // Opcional: el consentimiento SMS no puede ser condición para enviar el formulario (TCPA)
    consent: z.boolean().optional(),
    website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;