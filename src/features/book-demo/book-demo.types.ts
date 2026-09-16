export type Revenue = "under-1m" | "1m-3m" | "3m-5m" | "5m-plus";
export type Tenure = "under-1" | "1-3" | "3-5" | "5-plus";
export type Timeline = "now" | "weeks" | "3-months" | "6-months";

export type BookDemoData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    smsConsent: boolean;
    revenue: Revenue | null;
    territories: string[];
    tenure: Tenure | null;
    support: string[];
    usesCrm: boolean | null;
    platforms: string[];
    timeline: Timeline | null;
    source: string | null;
};

export const INITIAL_DATA: BookDemoData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    smsConsent: false,
    revenue: null,
    territories: [],
    tenure: null,
    support: [],
    usesCrm: null,
    platforms: [],
    timeline: null,
    source: null,
};

export type StepProps = {
    data: BookDemoData;
    update: (patch: Partial<BookDemoData>) => void;
    next: () => void;
};