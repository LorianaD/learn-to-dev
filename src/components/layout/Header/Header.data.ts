import { logoLight } from "../../../assets";
import type { NavItem } from "../../../types/nav";

export const headerData = {
  logo: logoLight,
  
  nav: [
    { 
      label: 'Accueil', 
      to: '/' 
    },
    { 
      label: 'Langages', 
      to: '/categories/langages' 
    },
    { 
      label: 'Conception', 
      to: '/categories/conception' 
    },
    { 
      label: 'Frameworks', 
      to: '/categories/frameworks' 
    },
    { 
      label: 'Bases de données', 
      to: '/categories/database' 
    },
    { 
      label: 'Prod', 
      to: '/categories/prod' 
    },
    { 
      label: 'À propos', 
      to: '/a-propos' 
    },
  ] satisfies NavItem[],
};