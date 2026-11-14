// Button.types.ts
export type ButtonVariant = "primary" | "secondary" | "outline" | "filter";

export interface ButtonTypes {
    label: string;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
    active?: boolean;
    onClick?: () => void;
}