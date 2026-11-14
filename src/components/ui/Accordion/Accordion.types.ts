// Accordion.types.ts
export interface AccordionTypes {
    title: string;
    isOpen: boolean;
    controlsId: string;
    onToggle: () => void;
}