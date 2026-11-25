// src/content/courses.ts
import type { CourseMeta } from '../types/course';
import { angularTypescriptSteps } from './steps/angular-typescript';
import { dddCleanArchitectureSteps } from './steps/ddd-clean-architecture';
import { dockerSteps } from './steps/docker';
import { figmaDesignSystemSteps } from './steps/figma-design-system';
import { frameworkMaisonSteps } from './steps/framework-made-home';
import { githubActionsSteps } from './steps/github-actions-cicd';
import { javaInstallationSteps } from './steps/java-installation';
import { javaProjetSteps } from './steps/java-projet';
import { postgresqlSteps } from './steps/postgresql-initial';
import { reactJsSteps } from './steps/react-js';
import { springBootSteps } from './steps/spring-boot';
import { sqlRevisionSteps } from './steps/sql-revisions';
import { typescriptBasicsSteps } from './steps/typescript-basics';
import { vueJsSteps } from './steps/vue-js';

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
  {
    slug: 'github-actions-cicd',
    title: 'CI/CD — Automatiser avec GitHub Actions',
    description:
      'Comprendre la CI/CD, créer des workflows YAML, automatiser les tests et déployer une application React sur GitHub Pages.',
    techno: ['GitHub Actions', 'Git', 'YAML', 'Vite', 'Vitest'],
    level: 'debutant',
    date: '2026-11-17',
    steps: githubActionsSteps,
  },
  {
    slug: "figma-design-system",
    title: "Figma — Du Design System à la maquette",
    description:
      "Apprendre Figma, créer un Design System, utiliser des bibliothèques et concevoir des maquettes interactives.",
    techno: ["Figma", "UI/UX", "Design System"],
    level: "debutant",
    date: "2026-11-17",
    steps: figmaDesignSystemSteps,
  },
  {
      slug: "docker",
      title: "Docker — Les bases et la conteneurisation",
      description:
          "Apprendre Docker : images, conteneurs, Dockerfile, Docker Compose, volumes et lancement de serveurs.",
      techno: ["Docker", "Node.js", "PostgreSQL", "React"],
      level: "debutant",
      date: "2026-11-20",
      steps: dockerSteps,
  },
  {
    slug: "vue-js",
    title: "Vue.js 3 — Les bases",
    description:
      "Apprendre Vue.js 3 avec TypeScript : composants, réactivité, directives, formulaires, Vue Router, Pinia et API REST.",
    techno: ["Vue.js", "TypeScript", "Vite"],
    level: "debutant",
    date: "2026-11-23",
    steps: vueJsSteps,
  },
  {
    slug: "angular-typescript",
    title: "Angular — De l’installation à la création d’une application",
    description:
        "Apprendre Angular avec TypeScript : composants, Signals, services, routing, formulaires, RxJS et API REST.",
    techno: ["Angular", "TypeScript", "RxJS"],
    level: "debutant",
    date: "2026-11-24",
    steps: angularTypescriptSteps,
  },
  {
    slug: "ddd-clean-architecture",
    title: "DDD & Clean Architecture — Les bases",
    description:
        "Découvrir le Domain-Driven Design, les règles métier, les entités, les Value Objects, les agrégats et la Clean Architecture avec TypeScript.",
    techno: ["DDD", "Clean Architecture", "TypeScript"],
    level: "debutant",
    date: "2026-11-25",
    steps: dddCleanArchitectureSteps,
  },
  {
    slug: 'typescript-basics',
    title: 'TypeScript — Les bases',
    description:
        'Apprendre TypeScript : types, interfaces, fonctions, génériques, classes, modules, DOM et API REST.',
    techno: ['TypeScript', 'JavaScript', 'Node.js'],
    level: 'debutant',
    date: '2026-11-25',
    steps: typescriptBasicsSteps,
  },
];

export function getCourse(slug: string | undefined): CourseMeta | undefined {
  return courses.find((course) => course.slug === slug);
}
