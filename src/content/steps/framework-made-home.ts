import type { CourseStep } from '../../types/course';

export const frameworkMaisonSteps: CourseStep[] = [
  {
    label: "Installation",
    title: "Initialiser un projet HTML, CSS et TypeScript",
    intro: "Un projet sans React ni Vue, avec Vite pour le développement local.",
    blocks: [
      {
        type: "heading",
        content: "Créer le projet",
      },
      {
        type: "code",
        code: "npm create vite@latest framework-demo -- --template vanilla-ts\ncd framework-demo\nnpm install\nnpm run dev",
      },
      {
        type: "heading",
        content: "Vérifier TypeScript",
      },
      {
        type: "code",
        code: "npx tsc --noEmit",
      },
      {
        type: "text",
        content: "`npm install` installe les dépendances du `package.json`. `npm run dev` démarre Vite. `npx tsc --noEmit` vérifie les types sans générer de fichiers.",
      },
      {
        type: "heading",
        content: "Structure de départ",
      },
      {
        type: "code",
        code: "framework-demo/\n├── index.html\n├── package.json\n├── tsconfig.json\n└── src/\n    ├── main.ts\n    └── style.css",
      },
      {
        type: "warning",
        content: "Vite est un outil de développement, pas le framework que nous construisons. Vérifie son autorisation pour le rendu scolaire.",
      },
    ],
  },
  {
    label: "Design tokens",
    title: "Centraliser couleurs et espacements",
    intro: "Définir une fois les valeurs communes pour garder une interface cohérente.",
    blocks: [
      {
        type: "heading",
        content: "Déclarer les variables",
      },
      {
        type: "code",
        code: ":root {\n  --color-primary: #2563eb;\n  --color-bg: #f8fafc;\n  --color-text: #0f172a;\n  --space-2: 8px;\n  --space-4: 16px;\n  --radius-md: 8px;\n}",
        file: "src/styles/tokens.css",
      },
      {
        type: "heading",
        content: "Les réutiliser",
      },
      {
        type: "code",
        code: ".button {\n  padding: var(--space-2) var(--space-4);\n  background: var(--color-primary);\n  color: white;\n  border-radius: var(--radius-md);\n}",
        file: "src/styles/components.css",
      },
      {
        type: "heading",
        content: "Charger les styles",
      },
      {
        type: "code",
        code: "import './styles/tokens.css';\nimport './styles/components.css';",
        file: "src/main.ts",
      },
      {
        type: "tip",
        content: "Changer `--color-primary` met à jour tous les éléments qui l’utilisent.",
      },
    ],
  },
  {
    label: "Utilitaires CSS",
    title: "Construire des classes CSS utilitaires",
    intro: "Une classe = une responsabilité. Pas besoin de Tailwind ni de générateur.",
    blocks: [
      {
        type: "heading",
        content: "Définir les classes",
      },
      {
        type: "code",
        code: ".flex { display: flex; }\n.grid { display: grid; }\n.items-center { align-items: center; }\n.justify-between { justify-content: space-between; }\n.gap-4 { gap: var(--space-4); }\n.p-4 { padding: var(--space-4); }\n.rounded { border-radius: var(--radius-md); }\n.bg-primary { background: var(--color-primary); }\n.text-white { color: white; }",
        file: "src/styles/utilities.css",
      },
      {
        type: "heading",
        content: "Composer une interface",
      },
      {
        type: "code",
        code: "<div class=\"flex items-center justify-between p-4\">\n  <h1>Mes projets</h1>\n  <button class=\"bg-primary text-white p-4 rounded\">Ajouter</button>\n</div>",
        file: "index.html",
      },
      {
        type: "heading",
        content: "Importer",
      },
      {
        type: "code",
        code: "import './styles/tokens.css';\nimport './styles/utilities.css';",
        file: "src/main.ts",
      },
      {
        type: "tip",
        content: "Une classe utilitaire ne doit pas dépendre du nom d’une page.",
      },
    ],
  },
  {
    label: "DOM",
    title: "Manipuler le DOM en TypeScript",
    intro: "Sélectionner, créer et modifier des éléments HTML.",
    blocks: [
      {
        type: "heading",
        content: "Sélectionner un élément",
      },
      {
        type: "code",
        code: "<div id=\"app\"><h1 id=\"title\">Bienvenue</h1></div>",
        file: "index.html",
      },
      {
        type: "code",
        code: "const title = document.querySelector<HTMLHeadingElement>('#title');\nif (title) title.textContent = 'Bienvenue sur IntraVerse';",
        file: "src/main.ts",
      },
      {
        type: "heading",
        content: "Créer et insérer",
      },
      {
        type: "code",
        code: "const app = document.querySelector<HTMLDivElement>('#app');\nconst button = document.createElement('button');\nbutton.textContent = 'Nouveau projet';\nbutton.type = 'button';\napp?.append(button);",
        file: "src/main.ts",
      },
      {
        type: "heading",
        content: "Écouter un clic",
      },
      {
        type: "code",
        code: "button.addEventListener('click', () => {\n  button.classList.toggle('bg-primary');\n});",
        file: "src/main.ts",
      },
      {
        type: "tip",
        content: "`textContent` insère du texte sans interpréter du HTML fourni par l’utilisateur.",
      },
    ],
  },
  {
    label: "Composants",
    title: "Créer des composants réutilisables",
    intro: "Un composant est une fonction qui retourne un élément du DOM.",
    blocks: [
      {
        type: "heading",
        content: "Créer un bouton",
      },
      {
        type: "code",
        code: "export interface ButtonProps {\n  label: string;\n  onClick: () => void;\n}\n\nexport function Button({ label, onClick }: ButtonProps): HTMLButtonElement {\n  const button = document.createElement('button');\n  button.type = 'button';\n  button.textContent = label;\n  button.className = 'bg-primary text-white p-4 rounded';\n  button.addEventListener('click', onClick);\n  return button;\n}",
        file: "src/framework/components/Button.ts",
      },
      {
        type: "heading",
        content: "Réutiliser le bouton",
      },
      {
        type: "code",
        code: "import { Button } from './framework/components/Button';\n\ndocument.querySelector('#app')?.append(\n  Button({ label: 'Ajouter', onClick: () => alert('Clic !') })\n);",
        file: "src/main.ts",
      },
      {
        type: "heading",
        content: "Créer une carte",
      },
      {
        type: "code",
        code: "export function ProjectCard(title: string): HTMLElement {\n  const card = document.createElement('article');\n  const heading = document.createElement('h3');\n  heading.textContent = title;\n  card.append(heading);\n  return card;\n}",
        file: "src/framework/components/ProjectCard.ts",
      },
      {
        type: "tip",
        content: "Utilise les interfaces TypeScript pour décrire les paramètres des composants.",
      },
    ],
  },
  {
    label: "Store",
    title: "Partager un état entre composants",
    intro: "Un store conserve une valeur et avertit ses abonnés lorsqu’elle change.",
    blocks: [
      {
        type: "heading",
        content: "Créer le store générique",
      },
      {
        type: "code",
        code: "export function createStore<T>(initial: T) {\n  let state = initial;\n  const listeners = new Set<(value: T) => void>();\n\n  const getState = () => state;\n  const setState = (next: T) => {\n    state = next;\n    listeners.forEach(listener => listener(state));\n  };\n  const subscribe = (listener: (value: T) => void) => {\n    listeners.add(listener);\n    return () => { listeners.delete(listener); };\n  };\n  return { getState, setState, subscribe };\n}",
        file: "src/framework/store.ts",
      },
      {
        type: "heading",
        content: "Utiliser le store",
      },
      {
        type: "code",
        code: "import { createStore } from './framework/store';\n\nconst counter = createStore(0);\nconst output = document.createElement('p');\nconst button = document.createElement('button');\nbutton.textContent = '+1';\nconst render = (value: number) => { output.textContent = String(value); };\nrender(counter.getState());\nconst unsubscribe = counter.subscribe(render);\nbutton.addEventListener('click', () => counter.setState(counter.getState() + 1));\ndocument.querySelector('#app')?.append(output, button);\n// Appeler unsubscribe() au démontage du composant.",
        file: "src/main.ts",
      },
      {
        type: "warning",
        content: "Ce store conserve les données uniquement en mémoire. Pour les objets, évite de modifier les propriétés directement.",
      },
    ],
  },
  {
    label: "Routeur SPA",
    title: "Naviguer entre plusieurs pages",
    intro: "Associer une URL à une fonction de rendu avec les API du navigateur.",
    blocks: [
      {
        type: "heading",
        content: "Créer deux pages",
      },
      {
        type: "code",
        code: "export function HomePage(): HTMLElement {\n  const page = document.createElement('main');\n  page.textContent = 'Accueil';\n  return page;\n}",
        file: "src/pages/HomePage.ts",
      },
      {
        type: "code",
        code: "export function ProjectsPage(): HTMLElement {\n  const page = document.createElement('main');\n  page.textContent = 'Mes projets';\n  return page;\n}",
        file: "src/pages/ProjectsPage.ts",
      },
      {
        type: "heading",
        content: "Créer le routeur",
      },
      {
        type: "code",
        code: "type Page = () => HTMLElement;\nexport function createRouter(routes: Record<string, Page>, root: HTMLElement) {\n  const render = () => {\n    const page = routes[location.pathname];\n    root.replaceChildren(page ? page() : document.createTextNode('404'));\n  };\n  const navigate = (path: string) => {\n    history.pushState(null, '', path);\n    render();\n  };\n  window.addEventListener('popstate', render);\n  render();\n  return { navigate };\n}",
        file: "src/framework/router.ts",
      },
      {
        type: "heading",
        content: "Configurer",
      },
      {
        type: "code",
        code: "import { createRouter } from './framework/router';\nimport { HomePage } from './pages/HomePage';\nimport { ProjectsPage } from './pages/ProjectsPage';\nconst root = document.querySelector<HTMLElement>('#app');\nif (!root) throw new Error('#app introuvable');\nconst router = createRouter({ '/': HomePage, '/projets': ProjectsPage }, root);\nrouter.navigate('/projets');",
        file: "src/main.ts",
      },
      {
        type: "warning",
        content: "Pour ouvrir directement `/projets`, le serveur doit servir `index.html` en fallback. Un routeur complet doit aussi nettoyer les abonnements et gérer les liens.",
      },
    ],
  },
  {
    label: "API & fetch",
    title: "Appeler une API avec fetch",
    intro: "Lire et envoyer du JSON depuis le navigateur.",
    blocks: [
      {
        type: "heading",
        content: "Les méthodes HTTP",
      },
      {
        type: "text",
        content: "`GET` lire · `POST` créer · `PUT` remplacer · `PATCH` modifier · `DELETE` supprimer.",
      },
      {
        type: "heading",
        content: "Créer un client API",
      },
      {
        type: "code",
        code: "const BASE_URL = '/api';\n\nexport async function api<T>(path: string, options: RequestInit = {}): Promise<T> {\n  const headers = new Headers(options.headers);\n  if (typeof options.body === 'string' && !headers.has('Content-Type')) {\n    headers.set('Content-Type', 'application/json');\n  }\n  const response = await fetch(BASE_URL + path, { ...options, headers });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  if (response.status === 204) return undefined as T;\n  return response.json() as Promise<T>;\n}",
        file: "src/framework/api.ts",
      },
      {
        type: "heading",
        content: "Définir les données",
      },
      {
        type: "code",
        code: "export interface Project {\n  id: number;\n  title: string;\n  status: 'todo' | 'progress' | 'done';\n}\nexport type NewProject = Omit<Project, 'id'>;",
        file: "src/types/project.ts",
      },
      {
        type: "heading",
        content: "Créer un service",
      },
      {
        type: "code",
        code: "import { api } from '../framework/api';\nimport type { Project, NewProject } from '../types/project';\n\nexport const projectService = {\n  getAll: () => api<Project[]>('/projects'),\n  create: (data: NewProject) => api<Project>('/projects', {\n    method: 'POST', body: JSON.stringify(data),\n  }),\n  remove: (id: number) => api<void>(`/projects/${id}`, { method: 'DELETE' }),\n};",
        file: "src/services/projectService.ts",
      },
      {
        type: "heading",
        content: "Gérer les erreurs",
      },
      {
        type: "code",
        code: "try {\n  const projects = await projectService.getAll();\n  console.log(projects);\n} catch (error) {\n  console.error('Chargement impossible', error);\n}",
        file: "src/main.ts",
      },
      {
        type: "warning",
        content: "Le typage générique de `api<T>` ne valide pas le JSON reçu. Il faut valider les données côté serveur et, si nécessaire, côté client.",
      },
    ],
  },
  {
    label: "Formulaires",
    title: "Lire et valider un formulaire",
    intro: "Récupérer les valeurs, vérifier les champs et afficher les erreurs.",
    blocks: [
      {
        type: "heading",
        content: "Créer le formulaire HTML",
      },
      {
        type: "code",
        code: "<form id=\"project-form\">\n  <label for=\"title\">Titre du projet</label>\n  <input id=\"title\" name=\"title\" required minlength=\"3\" />\n  <p id=\"form-error\" role=\"alert\"></p>\n  <button type=\"submit\">Enregistrer</button>\n</form>",
        file: "index.html",
      },
      {
        type: "heading",
        content: "Écouter la soumission",
      },
      {
        type: "code",
        code: "const form = document.querySelector<HTMLFormElement>('#project-form');\nconst errorBox = document.querySelector<HTMLElement>('#form-error');\n\nform?.addEventListener('submit', async (event) => {\n  event.preventDefault();\n  if (!form.reportValidity()) return;\n  const data = new FormData(form);\n  const title = String(data.get('title') ?? '').trim();\n  if (title.length < 3) {\n    if (errorBox) errorBox.textContent = 'Minimum 3 caractères';\n    return;\n  }\n  try {\n    await projectService.create({ title, status: 'todo' });\n    form.reset();\n    if (errorBox) errorBox.textContent = '';\n  } catch {\n    if (errorBox) errorBox.textContent = 'Enregistrement impossible';\n  }\n});",
        file: "src/main.ts",
      },
      {
        type: "heading",
        content: "Comprendre les instructions",
      },
      {
        type: "text",
        content: "`preventDefault()` évite le rechargement, `FormData` lit les champs nommés et `reportValidity()` affiche les erreurs HTML natives.",
      },
      {
        type: "warning",
        content: "La validation côté navigateur améliore l’expérience utilisateur, mais ne remplace jamais celle du backend.",
      },
    ],
  },
  {
    label: "Authentification",
    title: "Comprendre les sessions et l’authentification",
    intro: "Distinguer la connexion, l’autorisation et les requêtes authentifiées.",
    blocks: [
      {
        type: "heading",
        content: "Connexion par session",
      },
      {
        type: "code",
        code: "export async function login(email: string, password: string): Promise<void> {\n  const response = await fetch('/api/login', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    credentials: 'same-origin',\n    body: JSON.stringify({ email, password }),\n  });\n  if (!response.ok) throw new Error('Connexion refusée');\n}",
        file: "src/services/authService.ts",
      },
      {
        type: "heading",
        content: "Requête avec cookie de session",
      },
      {
        type: "code",
        code: "const response = await fetch('/api/me', { credentials: 'same-origin' });\nif (!response.ok) throw new Error('Session absente ou expirée');\nconst user: unknown = await response.json();\nconsole.log(user);",
        file: "src/main.ts",
      },
      {
        type: "heading",
        content: "Déconnexion",
      },
      {
        type: "code",
        code: "await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' });",
        file: "src/main.ts",
      },
      {
        type: "warning",
        content: "Le backend doit configurer le cookie `HttpOnly`, `Secure` en HTTPS et `SameSite`, vérifier les autorisations et protéger les actions sensibles contre le CSRF. Ne stocke pas de mot de passe dans le frontend.",
      },
      {
        type: "tip",
        content: "Une session et un JWT sont deux approches possibles. Le choix dépend du backend ; le frontend ne décide pas seul de la sécurité.",
      },
    ],
  },
  {
    label: "Assemblage",
    title: "Assembler une mini-application",
    intro: "Réunir styles, routeur, composants et services dans un point d’entrée.",
    blocks: [
      {
        type: "heading",
        content: "Structure finale",
      },
      {
        type: "code",
        code: "src/\n├── framework/\n│   ├── api.ts\n│   ├── router.ts\n│   ├── store.ts\n│   └── components/Button.ts\n├── pages/\n│   ├── HomePage.ts\n│   └── ProjectsPage.ts\n├── services/projectService.ts\n├── styles/\n│   ├── tokens.css\n│   └── utilities.css\n├── types/project.ts\n└── main.ts",
      },
      {
        type: "heading",
        content: "Brancher le point d’entrée",
      },
      {
        type: "code",
        code: "import './styles/tokens.css';\nimport './styles/utilities.css';\nimport { createRouter } from './framework/router';\nimport { HomePage } from './pages/HomePage';\nimport { ProjectsPage } from './pages/ProjectsPage';\n\nconst app = document.querySelector<HTMLElement>('#app');\nif (!app) throw new Error('Conteneur introuvable');\ncreateRouter({ '/': HomePage, '/projets': ProjectsPage }, app);",
        file: "src/main.ts",
      },
      {
        type: "heading",
        content: "Vérifier le projet",
      },
      {
        type: "code",
        code: "npx tsc --noEmit\nnpm run build",
      },
      {
        type: "heading",
        content: "Checklist de compréhension",
      },
      {
        type: "text",
        content: "Sais-tu expliquer `createElement`, `append`, `subscribe`, `pushState`, `fetch`, `FormData` et les imports CSS ?",
      },
      {
        type: "tip",
        content: "Travaille chaque fichier dans un mini-projet d’essai, puis reconstruis les fonctionnalités de mémoire.",
      },
    ],
  },
  {
    label: "Quiz & exercices",
    title: "Vérifier les acquis",
    intro: "Quelques petits défis pour consolider la logique du framework.",
    blocks: [
      {
        type: "heading",
        content: "Défi 1 — Styles",
      },
      {
        type: "text",
        content: "Ajoute `--color-danger` et une classe `.bg-danger`. Applique-la à un bouton de suppression.",
      },
      {
        type: "heading",
        content: "Défi 2 — Composant",
      },
      {
        type: "text",
        content: "Crée `Badge(status)` qui retourne un `<span>` avec un texte adapté.",
      },
      {
        type: "heading",
        content: "Défi 3 — Store",
      },
      {
        type: "text",
        content: "Ajoute un bouton qui remet un compteur à zéro via `setState(0)`.",
      },
      {
        type: "heading",
        content: "Défi 4 — Routeur",
      },
      {
        type: "text",
        content: "Ajoute une page `/profil` et vérifie le bouton Retour du navigateur.",
      },
      {
        type: "heading",
        content: "Défi 5 — API",
      },
      {
        type: "text",
        content: "Ajoute `getById(id)` au service des projets et gère une réponse HTTP 404.",
      },
      {
        type: "heading",
        content: "Auto-évaluation",
      },
      {
        type: "tip",
        content: "Si tu peux refaire ces exercices sans recopier les solutions, tu maîtrises les mécanismes fondamentaux.",
      },
    ],
  },
];
