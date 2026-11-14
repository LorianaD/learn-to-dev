// types/category.ts
export interface CategoryItem {
    label: string;
    slug: string;
}

export interface CategoryGroup {
    title: string;
    items: CategoryItem[];
}

export interface Category {
    title: string;
    slug: string;
    description: string;
    icon: string;
    variant: string;
    groups: CategoryGroup[];
}