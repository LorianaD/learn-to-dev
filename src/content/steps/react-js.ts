// src/content/steps/react-js.ts
import type { CourseStep } from '../../types/course';

export const reactJsSteps: CourseStep[] = [
  {
    label: 'Installation',
    title: 'Créer un projet React avec Vite',
    intro: "Vite génère un projet React + TypeScript prêt à l'emploi, avec un serveur de développement très rapide.",
    blocks: [
      { type: 'heading', content: 'Créer le projet' },
      {
        type: 'code',
        code: `npm create vite@latest mon-app -- --template react-ts
cd mon-app
npm install
npm run dev`,
      },
      { type: 'tip', content: "Le site s'ouvre sur `http://localhost:5173` et se recharge à chaque sauvegarde." },
      { type: 'heading', content: 'Les fichiers importants' },
      { type: 'text', content: "`index.html` charge `src/main.tsx`, qui affiche le composant `App` dans la `div#root`." },
    ],
  },
  {
    label: 'JSX',
    title: 'JSX : du HTML dans le JavaScript',
    intro: "Le JSX ressemble à du HTML, mais c'est du JavaScript : on peut y insérer des variables avec des accolades.",
    blocks: [
      { type: 'heading', content: 'Afficher une variable' },
      {
        type: 'code',
        file: 'src/App.tsx',
        code: `function App() {
  const name = 'Ana';

  return <h1>Bonjour {name} !</h1>;
}`,
      },
      { type: 'heading', content: 'Les différences avec le HTML' },
      { type: 'text', content: "On écrit `className` au lieu de `class`, et `htmlFor` au lieu de `for`." },
      { type: 'warning', content: "Un composant renvoie un seul élément parent. Pour en renvoyer plusieurs, entoure-les d'un fragment `<>...</>`." },
    ],
  },
  {
    label: 'Composants & props',
    title: 'Composants & props',
    intro: 'Un composant est une fonction qui renvoie du JSX. Les props sont ses paramètres.',
    blocks: [
      { type: 'heading', content: 'Créer un composant' },
      {
        type: 'code',
        file: 'src/components/Hello/Hello.tsx',
        code: `interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return <p>Bonjour {name}</p>;
}`,
      },
      { type: 'heading', content: "L'utiliser" },
      { type: 'code', code: `<Hello name="Ana" />` },
      { type: 'tip', content: 'Un nom de composant commence toujours par une majuscule.' },
    ],
  },
  {
    label: 'useState',
    title: 'useState : donner une mémoire au composant',
    intro: 'Un composant React est une fonction : elle est rappelée à chaque rendu, donc une variable normale repart de zéro. `useState` garde une valeur entre deux rendus et redessine le composant quand elle change.',
    blocks: [
      { type: 'heading', content: 'Pourquoi useState ?' },
      {
        type: 'code',
        file: 'src/components/Counter/Counter.tsx',
        code: `import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Cliqué {count} fois
    </button>
  );
}`,
      },
      { type: 'heading', content: 'Syntaxe et typage' },
      { type: 'tip', content: 'Le générique `<number>` est facultatif ici : TypeScript le déduit de la valeur initiale `0`.' },
      { type: 'heading', content: 'Mettre à jour le state' },
      { type: 'warning', content: 'Ne modifie jamais le state directement (`count++`) : passe toujours par `setCount`, sinon React ne redessine pas.' },
      { type: 'heading', content: "State d'un objet ou d'un tableau" },
      { type: 'text', content: "Pour un objet ou un tableau, on crée une copie avec `...` puis on la passe au setter." },
      {
        type: 'code',
        code: `const [user, setUser] = useState({ name: 'Ana', age: 30 });

setUser({ ...user, age: 31 });`,
      },
      { type: 'heading', content: 'Exercice' },
      { type: 'text', content: 'Ajoute un bouton « Remettre à zéro » au compteur, qui remet `count` à `0`.' },
    ],
    aside: {
      title: 'Le parallèle Symfony',
      content: "Côté serveur, l'état vit en session ou en base. Côté React, il vit dans le composant, le temps que la page est ouverte.",
    },
  },
  {
    label: 'useEffect',
    title: 'useEffect : réagir aux changements',
    intro: "`useEffect` lance du code après l'affichage : appel API, abonnement, mise à jour du titre de la page…",
    blocks: [
      { type: 'heading', content: 'Charger des données' },
      {
        type: 'code',
        code: `useEffect(() => {
  fetch('/api/courses')
    .then((response) => response.json())
    .then((data) => setCourses(data));
}, []);`,
      },
      { type: 'heading', content: 'Le tableau de dépendances' },
      { type: 'tip', content: 'Avec `[]`, l\'effet ne tourne qu\'une fois, au premier affichage.' },
    ],
  },
  {
    label: 'React Router',
    title: 'React Router : plusieurs pages',
    intro: "React Router affiche un composant différent selon l'URL, sans recharger la page.",
    blocks: [
      { type: 'heading', content: 'Déclarer les routes' },
      {
        type: 'code',
        file: 'src/router.tsx',
        code: `export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'cours/:slug', element: <CoursePage /> },
]);`,
      },
      { type: 'heading', content: 'Lire un paramètre' },
      { type: 'code', code: `const { slug } = useParams<{ slug: string }>();` },
    ],
  },
  {
    label: 'Quiz',
    title: 'Quiz',
    intro: 'Le quiz de fin de cours arrive bientôt.',
    blocks: [],
  },
];
