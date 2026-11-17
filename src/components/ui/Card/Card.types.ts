export interface CardTarget {
    text: string;
    variant: string;
}

export interface CardLink {
    to: string;
    label?: string;
}

export interface CardTypes {
    title: string;
    description?: string;
    icon?: string;
    iconVariant?: string;
    targets?: CardTarget[];
    targetsLanguages?: CardTarget[];
    breadcrumb?: string[];
    link?: CardLink;
    clickable?: boolean;
}