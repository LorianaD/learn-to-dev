// src/types/course.ts

export type Level = 'debutant' | 'intermediaire' | 'avance';

// D'où vient le cours : fait avec Claude ou par un formateur
export type CourseSource = 'claude' | 'formateur';

// Un bloc de contenu dans une étape.
// Dans les textes, ce qui est entre `backticks` s'affiche comme du code.
export type CourseBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }                     // sous-titre, listé dans « Dans cette étape »
  | { type: 'code'; code: string; file?: string }            // file = nom du fichier affiché au-dessus du code
  | { type: 'tip'; content: string }                         // encadré vert « Astuce »
  | { type: 'warning'; content: string };                    // encadré orange « Attention »

export interface CourseStep {
  label: string;           // texte court de l'onglet : "useState"
  title: string;           // grand titre de l'étape : "useState : donner une mémoire au composant"
  intro?: string;          // paragraphe sous le titre
  blocks: CourseBlock[];
  aside?: {                // carte sous le sommaire, à droite
    title: string;
    content: string;
  };
}

export interface CourseMeta {
  slug: string;            // "nestjs" → URL /cours/nestjs
  title: string;
  description?: string;
  techno: string[];        // ["NestJS", "TypeScript"]
  level: Level;
  source?: CourseSource;
  date?: string;            // "2026-11-07"
  htmlFile?: string;       // cours HTML autonome dans public/ (ex. "/cours/nestjs.html")
  steps?: CourseStep[];    // cours écrit en données, affiché par la page CoursePage
}
