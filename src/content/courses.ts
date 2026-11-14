// src/content/courses.ts
import type { CourseMeta } from '../types/course';
import { frameworkMaisonSteps } from './steps/framework-made-home';
import { javaInstallationSteps } from './steps/java-installation';
import { javaProjetSteps } from './steps/java-projet';
import { postgresqlSteps } from './steps/postgresql-initial';
import { reactJsSteps } from './steps/react-js';
import { springBootSteps } from './steps/spring-boot';
import { sqlRevisionSteps } from './steps/sql-revisions';

export const courses: CourseMeta[] = [
  {
    slug: 'react-js',
    title: 'React JS — les bases',
    description: 'Composants, props, useState, useEffect et React Router.',
    techno: ['React', 'TypeScript', 'Vite'],
    level: 'debutant',
    date: '2026-11-12',
    steps: reactJsSteps,
  },

  {
    slug: 'framework-front-maison',
    title: 'Framework front maison',
    description:
      'Construire son propre framework front en HTML, CSS et TypeScript.',
    techno: ['TypeScript', 'HTML / CSS', 'Vite'],
    level: 'intermediaire',
    date: '2026-11-10',
    steps: frameworkMaisonSteps,
  },
  {
    slug: 'java-installation',
    title: 'Java — Installation et configuration',
    description:
      'Installer le JDK, configurer JAVA_HOME et Path, vérifier java et javac, et exécuter un premier programme.',
    techno: ['Java'],
    level: 'debutant',
    date: '2026-11-13',
    steps: javaInstallationSteps,
  },
  {
    slug: 'java-projet',
    title: 'Java — Créer et gérer un projet',
    description:
      'Installer Java, créer un projet, comprendre les classes, utiliser Maven, VS Code et Git.',
    techno: ['Java', 'Maven', 'Git'],
    level: 'debutant',
    date: '2026-11-13',
    steps: javaProjetSteps,
  },
  {
    slug: 'spring-boot',
    title: 'Spring Boot',
    description:
      'Créer une API REST avec Spring Boot, les contrôleurs, les services et Maven.',
    techno: ['Java', 'Spring Boot', 'Maven'],
    level: 'debutant',
    date: '2026-11-13',
    steps: springBootSteps,
  },
  {
    slug: 'sql-revisions',
    title: 'SQL — Révisions et pratique',
    description:
      'Réviser les requêtes SQL, créer des bases et des tables, maîtriser le CRUD, les relations et les jointures.',
    techno: ['SQL', 'PostgreSQL', 'pgAdmin'],
    level: 'debutant',
    date: '2026-11-13',
    steps: sqlRevisionSteps,
  },
  {
    slug: 'postgresql',
    title: 'PostgreSQL — De l’installation à la pratique',
    description:
      'Installer PostgreSQL et pgAdmin, réviser SQL, créer une base et gérer ses données.',
    techno: ['PostgreSQL', 'SQL', 'pgAdmin'],
    level: 'debutant',
    date: '2026-11-13',
    steps: postgresqlSteps,
  },
];

export function getCourse(slug: string | undefined): CourseMeta | undefined {
  return courses.find((course) => course.slug === slug);
}
