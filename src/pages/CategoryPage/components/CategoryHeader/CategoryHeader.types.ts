import type { CategoryGroup } from "../../../../types";

export interface CategoryHeaderTypes {
    title: string;
    description: string;
    icon: string;
    variant: string;
    groups: CategoryGroup[];
}