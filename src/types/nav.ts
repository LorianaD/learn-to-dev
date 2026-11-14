// src/types/nav.ts
export interface NavItem {
  label: string;
  to: string;
}

export interface HeaderNavProps {
  nav: NavItem[];
}