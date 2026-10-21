export type BookDemoData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    /** Consentimiento SMS: opcional (TCPA) */
    smsConsent: boolean;
    /** Contacto + política de privacidad: obligatorio para enviar */
    privacy: boolean;
};

export const INITIAL_DATA: BookDemoData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
    privacy: false,
};

export type StepProps = {
    data: BookDemoData;
    update: (patch: Partial<BookDemoData>) => void;
    next: () => void;
};