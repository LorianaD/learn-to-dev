# Learn to Dev

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Tests-Vitest-6E9F18?logo=vitest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)

[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Voir_le_site-222222?logo=github&logoColor=white)](https://lorianad.github.io/learn-to-dev/)

**Site en ligne :** [https://lorianad.github.io/learn-to-dev/](https://lorianad.github.io/learn-to-dev/)

## Présentation

**Learn to Dev** est une plateforme pédagogique dédiée à l'apprentissage du développement web et web mobile.

Ce projet personnel a été conçu pour centraliser mes connaissances, découvrir de nouvelles technologies, réviser les notions déjà acquises et retrouver rapidement des commandes, des exemples de code et des méthodes de travail.

L'approche privilégie la pratique : des explications synthétiques, des exemples concrets, des commandes de terminal, des illustrations et des exercices guidés.

Le contenu évolue progressivement au fil de mes apprentissages et de mes projets.

## Objectifs

- Centraliser les cours et les ressources techniques dans une seule application.
- Apprendre de nouveaux langages, frameworks et outils.
- Disposer d'un aide-mémoire technique facilement consultable.
- Consolider les connaissances par la pratique.
- Maintenir une application évolutive grâce à des composants réutilisables et à des contenus structurés.

## Fonctionnalités

- Catalogue de cours organisé par catégories et groupes de technologies.
- Navigation et filtrage par catégorie.
- Cours découpés en étapes avec navigation entre les chapitres.
- Fil d'Ariane et indicateur d'avancement dans les étapes du cours.
- Affichage de blocs pédagogiques : titres, textes, code, conseils, avertissements et images.
- Composants d'interface réutilisables.
- Tests unitaires des composants.
- Déploiement automatisé sur GitHub Pages.

## Catalogue des cours

Le catalogue comprend actuellement 11 cours répartis dans 5 catégories.

| Catégorie | Technologie | Cours |
| --- | --- | --- |
| Langages | TypeScript | Framework front maison |
| Langages | Java | Installation et configuration |
| Langages | Java | Créer et gérer un projet |
| Conception | Figma | Du Design System à la maquette |
| Frameworks | React | React JS — les bases |
| Frameworks | Vue.js | Vue.js 3 — Les bases |
| Frameworks | Spring Boot | Créer une API REST |
| Bases de données | SQL | Révisions et pratique |
| Bases de données | PostgreSQL | De l'installation à la pratique |
| Production | CI/CD | Automatiser avec GitHub Actions |
| Production | Docker | Les bases et la conteneurisation |

## Stack technique

| Technologie | Utilisation |
| --- | --- |
| React | Construction de l'interface utilisateur |
| TypeScript | Typage des composants et des contenus |
| Vite | Serveur de développement et compilation |
| React Router | Navigation entre les pages et les cours |
| CSS Modules | Styles propres aux composants |
| Vitest | Tests unitaires |
| Git / GitHub | Gestion de versions |
| GitHub Actions | Automatisation de la CI/CD |
| GitHub Pages | Hébergement de l'application |

L'application est une SPA front-end. Les contenus pédagogiques sont définis dans des fichiers TypeScript, sans nécessiter de serveur applicatif ni de base de données pour leur consultation.

## Installation

### Prérequis

- Node.js compatible avec Vite 7 (20.19+ ou 22.12+ ; Node.js 24 convient également).
- npm
- Git

### Récupérer le projet

Cloner le dépôt depuis GitHub, puis ouvrir le dossier `learn-to-dev` dans un terminal.

```bash
cd learn-to-dev
npm install
npm run dev
```

Ouvrir l'adresse indiquée dans le terminal par Vite (généralement `http://localhost:5173`).

## Commandes utiles

| Commande | Description |
| --- | --- |
| `npm install` | Installer les dépendances |
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Générer la version de production |
| `npm run preview` | Prévisualiser la version compilée |
| `npm run test:run` | Exécuter les tests unitaires |

## Architecture du projet

Arborescence simplifiée des principaux dossiers :

```text
learn-to-dev/
├── .github/
│   └── workflows/          # Automatisation CI/CD
├── src/
│   ├── assets/             # Images et icônes
│   ├── components/         # Composants réutilisables
│   ├── content/
│   │   ├── categories.ts   # Catégories et groupes de cours
│   │   ├── courses.ts      # Catalogue et métadonnées
│   │   └── steps/          # Contenu des étapes de chaque cours
│   └── types/              # Types TypeScript
├── package.json
└── README.md
```

### Organisation des contenus

Les contenus sont séparés de l'interface afin de pouvoir ajouter de nouveaux cours sans modifier les composants d'affichage.

- `categories.ts` organise les cours par catégorie et groupe.
- `courses.ts` référence les métadonnées de chaque cours : slug, titre, description, technologies, niveau, date et étapes.
- `steps/` contient les chapitres et les blocs pédagogiques.
- `getCourse()` retrouve un cours à partir de son slug.
- `getCourseLocation()` retrouve sa catégorie et son groupe.

## Ajouter un nouveau cours

### 1. Créer le fichier des étapes

Créer un fichier `src/content/steps/mon-cours.ts`.

```ts
import type { CourseStep } from '../../types/course';

export const monCoursSteps: CourseStep[] = [
  {
    label: 'Introduction',
    title: 'Découvrir la technologie',
    intro: 'Comprendre les notions essentielles.',
    blocks: [
      { type: 'heading', content: 'Installation' },
      { type: 'text', content: 'Installer les dépendances du projet.' },
      { type: 'code', code: 'npm install' },
      { type: 'tip', content: 'Vérifier la configuration avant de continuer.' },
    ],
  },
];
```

Le champ `label` correspond au nom court de l'étape, et non à son numéro. Le champ `title` correspond à son titre détaillé.

### 2. Référencer le cours

Dans `src/content/courses.ts`, importer les étapes :

```ts
import { monCoursSteps } from './steps/mon-cours';
```

Ajouter l'objet suivant au tableau `courses` :

```ts
{
  slug: 'mon-cours',
  title: 'Mon nouveau cours',
  description: 'Description du cours.',
  techno: ['TypeScript'],
  level: 'debutant',
  date: '2026-11-25',
  steps: monCoursSteps,
},
```

### 3. Ajouter le cours à une catégorie

Dans `src/content/categories.ts`, ajouter une entrée au tableau `items` du groupe correspondant :

```ts
{ label: 'Mon nouveau cours', slug: 'mon-cours' },
```

Le slug doit être unique et identique dans `courses.ts` et `categories.ts`.

### 4. Vérifier le résultat

Lancer l'application, vérifier que le cours apparaît dans sa catégorie et que toutes ses étapes sont accessibles. Exécuter les tests et la compilation avant de publier les modifications.

## Tests unitaires

Les composants d'interface sont testés avec Vitest, notamment :

- `Button`
- `Accordion`
- `Card`

Pour exécuter les tests :

```bash
npm run test:run
```

## CI/CD et déploiement

Le projet utilise GitHub Actions pour automatiser les opérations de vérification et de déploiement sur GitHub Pages.

Les workflows sont centralisés dans `.github/workflows/`. La compilation de production est générée avec Vite dans le dossier `dist/`.

La configuration de déploiement tient compte de la navigation côté client de la SPA.

## Évolutions envisagées

- Enrichir progressivement le catalogue de cours.
- Ajouter davantage d'exercices pratiques et de projets guidés.
- Compléter les illustrations et les exemples de code.
- Approfondir les sujets existants avec des cours de niveau intermédiaire et avancé.
- Améliorer continuellement l'interface, l'accessibilité et la couverture des tests.

## Auteur

**Loriana Diano** — Développeuse web et web mobile.

Projet personnel d'apprentissage et de consolidation des compétences en développement full-stack.

[Profil GitHub](https://github.com/LorianaD)
