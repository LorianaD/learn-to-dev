// Un cours dans la sidebar → lien vers /cours/:slug
export interface SidebarItem {
  label: string;
  slug: string;
}

// Un sous-groupe : React, Node, HTML, CSS…
export interface SidebarGroup {
  title: string;
  items: SidebarItem[];
}

// Une catégorie dépliable : Langages, Frameworks…
export interface SidebarCategory {
  title: string;
  slug: string; // → /categories/:slug
  groups: SidebarGroup[];
}

export interface SidebarDataType {
  title: string;
  categories: SidebarCategory[];
}
