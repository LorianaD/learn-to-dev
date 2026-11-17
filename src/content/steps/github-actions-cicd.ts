import type { CourseStep } from '../../types/course';

export const githubActionsSteps: CourseStep[] = [
  {
    label: 'Comprendre',
    title: 'CI/CD : pourquoi automatiser ?',
    intro: 'La CI vérifie ton code à chaque modification. La CD prépare ou réalise sa mise en ligne. GitHub Actions exécute ces opérations sur les serveurs de GitHub.',
    blocks: [
      { type: 'heading', content: 'Le parcours du code' },
      { type: 'code', code: `Code local → git push → GitHub Actions
                         ↓
                    npm ci
                         ↓
                 lint + tests
                         ↓
                    build
                         ↓
                déploiement` },
      { type: 'text', content: '**CI (intégration continue)** : installer les dépendances, vérifier le code, lancer les tests et construire le projet. **Livraison continue** : préparer une version déployable, avec une validation humaine possible. **Déploiement continu** : publier automatiquement chaque modification validée.' },
      { type: 'tip', content: 'Un workflow est un fichier YAML ; un job est un ensemble d’étapes ; une step est une action ou une commande.' },
    ],
  },
  {
    label: 'Préparer le projet',
    title: 'Vérifier les scripts npm avant la CI',
    intro: 'GitHub Actions ne devine pas les commandes : elles doivent fonctionner sur ton ordinateur avant de fonctionner sur GitHub.',
    blocks: [
      { type: 'heading', content: 'Créer un projet de démonstration' },
      { type: 'code', code: `npm create vite@latest demo-cicd -- --template react-ts
cd demo-cicd
npm install
npm install -D vitest` },
      { type: 'heading', content: 'Ajouter les scripts nécessaires' },
      { type: 'code', file: 'package.json (extrait : scripts)', code: `"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "test:run": "vitest run",
  "preview": "vite preview"
}` },
      { type: 'text', content: 'Garde les autres champs et dépendances du `package.json` généré par Vite. `npm ci` utilise le fichier `package-lock.json` : il doit être versionné avec ton projet.' },
      { type: 'heading', content: 'Créer un premier test simple' },
      { type: 'code', file: 'src/sum.test.ts', code: `import { expect, test } from 'vitest';

test('additionne deux nombres', () => {
  expect(2 + 3).toBe(5);
});` },
      { type: 'heading', content: 'Vérifier dans le terminal' },
      { type: 'code', code: `npm run lint
npm run test:run
npm run build` },
      { type: 'warning', content: 'Si une commande échoue en local, corrige-la avant de créer le workflow. Les scripts npm doivent correspondre à ton projet réel.' },
    ],
  },
  {
    label: 'Premier workflow',
    title: 'Créer .github/workflows/ci.yml',
    intro: 'GitHub recherche automatiquement les workflows dans `.github/workflows/`, à la racine du dépôt.',
    blocks: [
      { type: 'heading', content: 'Créer les dossiers et le fichier' },
      { type: 'code', code: `# Depuis la racine du projet (terminal Git Bash)
mkdir -p .github/workflows
touch .github/workflows/ci.yml` },
      { type: 'text', content: 'Dans VS Code, tu peux aussi créer le dossier `.github`, puis le sous-dossier `workflows`, et enfin le fichier `ci.yml`. L’extension `.yml` indique un fichier YAML.' },
      { type: 'heading', content: 'Écrire le workflow complet' },
      { type: 'code', file: '.github/workflows/ci.yml', code: `name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read

jobs:
  verify:
    runs-on: ubuntu-latest

    steps:
      - name: Récupérer le code
        uses: actions/checkout@v4

      - name: Installer Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: npm

      - name: Installer les dépendances
        run: npm ci

      - name: Vérifier le code
        run: npm run lint

      - name: Exécuter les tests
        run: npm run test:run

      - name: Construire le site
        run: npm run build` },
      { type: 'heading', content: 'Comprendre chaque élément' },
      { type: 'text', content: '`name` : nom affiché dans GitHub. - `on` : événements déclencheurs. - `jobs` : tâches à exécuter. - `runs-on` : machine virtuelle. - `steps` : étapes successives. - `uses` : action réutilisable. - `run` : commande de terminal. - `with` : paramètres d’une action.' },
      { type: 'tip', content: 'YAML utilise les indentations avec des espaces, pas des tabulations. `branches: [main]` limite ici les événements à la branche `main`.' },
    ],
  },
  {
    label: 'Exécuter la CI',
    title: 'Lancer et observer le workflow sur GitHub',
    intro: 'Dès que le fichier `ci.yml` est envoyé sur GitHub, le workflow peut se déclencher automatiquement.',
    blocks: [
      { type: 'heading', content: 'Enregistrer et envoyer les fichiers' },
      { type: 'code', code: `git status
git add .github/workflows/ci.yml package.json package-lock.json src/sum.test.ts
git commit -m "ci: add GitHub Actions checks"
git push origin main` },
      { type: 'text', content: 'Si tu as aussi modifié d’autres fichiers nécessaires, ajoute-les au commit. Pour une nouvelle branche, ouvre une Pull Request vers `main` afin de tester le déclencheur `pull_request`.' },
      { type: 'heading', content: 'Lire les résultats' },
      { type: 'text', content: 'Sur GitHub : ouvre ton dépôt → **Actions** → **CI** → sélectionne une exécution → **verify**. Déplie une étape pour voir sa sortie.' },
      { type: 'tip', content: 'Une coche verte indique que toutes les étapes du job ont réussi. Une croix rouge indique un échec : ouvre la première étape en erreur pour trouver le message utile.' },
      { type: 'warning', content: 'Un workflow CI réussi ne signifie pas que le site est publié : la CI vérifie seulement le code dans cet exemple.' },
    ],
  },
  {
    label: 'Préparer Pages',
    title: 'Configurer Vite pour GitHub Pages',
    intro: 'GitHub Pages publie des fichiers statiques. Avec Vite, la commande `npm run build` crée ces fichiers dans `dist/`.',
    blocks: [
      { type: 'heading', content: 'Configurer le chemin de base' },
      { type: 'code', file: 'vite.config.ts', code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/demo-cicd/',
});` },
      { type: 'text', content: 'Remplace `demo-cicd` par le nom exact de ton dépôt. Pour un dépôt `utilisateur.github.io`, utilise généralement `base: "/"`. Conserve les autres plugins et réglages existants de ton projet.' },
      { type: 'heading', content: 'Activer GitHub Pages' },
      { type: 'text', content: 'Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**. Vérifie que les Actions sont autorisées pour ce dépôt.' },
      { type: 'warning', content: 'Si ton application React utilise BrowserRouter, les accès directs à des routes profondes peuvent renvoyer une erreur 404 sur GitHub Pages. Prévois une stratégie adaptée (HashRouter ou solution de repli).' },
    ],
  },
  {
    label: 'Déployer',
    title: 'Créer le workflow de déploiement',
    intro: 'Le second workflow reconstruit le site puis publie le dossier `dist` sur GitHub Pages.',
    blocks: [
      { type: 'heading', content: 'Créer le fichier de déploiement' },
      { type: 'code', code: `touch .github/workflows/deploy.yml` },
      { type: 'code', file: '.github/workflows/deploy.yml', code: `name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Récupérer le code
        uses: actions/checkout@v4

      - name: Installer Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: npm

      - name: Installer les dépendances
        run: npm ci

      - name: Vérifier le code
        run: npm run lint

      - name: Exécuter les tests
        run: npm run test:run

      - name: Construire le site
        run: npm run build

      - name: Préparer GitHub Pages
        uses: actions/configure-pages@v5

      - name: Envoyer les fichiers générés
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Publier sur GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4` },
      { type: 'heading', content: 'Ce qui change par rapport à la CI' },
      { type: 'text', content: '`workflow_dispatch` permet un lancement manuel. `permissions` autorise la publication. `upload-pages-artifact` envoie le dossier `dist`. `needs: build` impose que la construction et les vérifications réussissent avant le déploiement. `deploy-pages` publie le site.' },
      { type: 'tip', content: 'Dans cette version, le workflow de déploiement relance lint, tests et build : la publication ne dépend donc pas de la réussite d’un autre workflow CI exécuté en parallèle.' },
    ],
  },
  {
    label: 'Diagnostiquer',
    title: 'Comprendre les erreurs courantes',
    intro: 'Les erreurs de CI/CD sont souvent des erreurs de configuration ou des commandes qui ne fonctionnent pas sur une machine neuve.',
    blocks: [
      { type: 'heading', content: 'npm ci échoue' },
      { type: 'text', content: 'Vérifie que `package-lock.json` existe, est commité et correspond à `package.json`. En local, exécute `npm install`, puis commit le lockfile mis à jour.' },
      { type: 'heading', content: 'Missing script: test:run' },
      { type: 'text', content: 'Le script `test:run` manque dans `package.json`. Ajoute-le ou adapte la commande YAML au nom réel du script.' },
      { type: 'heading', content: 'Tests rouges ou erreur TypeScript' },
      { type: 'text', content: 'Exécute localement `npm run test:run` et `npm run build`. Lis le premier message d’erreur dans les logs Actions.' },
      { type: 'heading', content: 'Page blanche après déploiement' },
      { type: 'text', content: 'Vérifie `base` dans `vite.config.ts`, les chemins des ressources, et l’URL exacte de ton dépôt GitHub Pages.' },
      { type: 'heading', content: 'Permission denied / Pages non configuré' },
      { type: 'text', content: 'Vérifie **Settings → Pages**, les permissions `pages: write` et `id-token: write`, ainsi que les règles de protection de l’environnement `github-pages`.' },
      { type: 'warning', content: 'Ne mets jamais de mot de passe, clé API ou token directement dans un fichier YAML. Utilise les secrets et variables GitHub lorsque nécessaire.' },
    ],
  },
  {
    label: 'Exercice',
    title: 'Mini-projet : de Git à la mise en ligne',
    intro: 'À toi de reproduire le parcours complet dans un dépôt de démonstration.',
    blocks: [
      { type: 'heading', content: 'Objectif' },
      { type: 'text', content: 'Crée un projet React + TypeScript, ajoute un test Vitest, puis crée les deux fichiers `.github/workflows/ci.yml` et `.github/workflows/deploy.yml`.' },
      { type: 'heading', content: 'Vérifications à effectuer' },
      { type: 'code', code: `npm run lint
npm run test:run
npm run build
git status
git add .
git commit -m "ci: configure checks and pages"
git push origin main` },
      { type: 'text', content: 'Sur GitHub, vérifie que **CI** est verte, puis que **Deploy GitHub Pages** est vert et que ton URL publique affiche le site. Modifie ensuite volontairement l’assertion du test pour observer un échec, puis corrige-la.' },
      { type: 'tip', content: 'Défi supplémentaire : crée une branche `feature/test`, ouvre une Pull Request vers `main` et vérifie que la CI se déclenche avant la fusion.' },
    ],
  },

  {
    label: 'Full-stack : structure',
    title: 'Préparer une application React + Node.js',
    intro: 'Une application full-stack possède deux projets avec leurs propres dépendances et scripts. On automatise leurs vérifications séparément.',
    blocks: [
      { type: 'heading', content: 'Créer les dossiers depuis le terminal' },
      { type: 'code', code: `mkdir demo-fullstack
cd demo-fullstack
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
npm install -D vitest
cd ..
mkdir backend
cd backend
npm init -y
npm install express
npm install -D supertest
cd ..
mkdir -p .github/workflows` },
      { type: 'heading', content: 'Arborescence du projet' },
      { type: 'code', code: `demo-fullstack/
├── .github/
│   └── workflows/
│       ├── ci-fullstack.yml
│       └── deploy-frontend.yml
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   └── server.js
│   ├── test/
│   │   └── app.test.js
│   ├── package.json
│   └── package-lock.json
└── .gitignore` },
      { type: 'tip', content: 'Les fichiers package-lock.json des deux projets doivent être commités : npm ci en a besoin. Ignore les dossiers node_modules et les fichiers .env.' },
    ],
  },
  {
    label: 'Backend Node.js',
    title: 'Créer une API Express testable',
    intro: 'On sépare la création de l’application Express de son démarrage : les tests peuvent appeler l’API sans ouvrir de port réseau.',
    blocks: [
      { type: 'heading', content: 'Créer le fichier de l’application' },
      { type: 'code', file: 'backend/src/app.js', code: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;` },
      { type: 'heading', content: 'Créer le serveur' },
      { type: 'code', file: 'backend/src/server.js', code: `const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('API démarrée sur le port ' + port);
});` },
      { type: 'heading', content: 'Créer un test automatique avec node:test et Supertest' },
      { type: 'code', file: 'backend/test/app.test.js', code: `const { test } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../src/app');

test('GET /api/health retourne 200', async () => {
  const response = await request(app).get('/api/health');
  assert.equal(response.status, 200);
  assert.deepEqual(response.body, { status: 'ok' });
});` },
      { type: 'heading', content: 'Ajouter les scripts npm' },
      { type: 'code', file: 'backend/package.json (extrait)', code: `"scripts": {
  "start": "node src/server.js",
  "test": "node --test"
}` },
      { type: 'heading', content: 'Tester en local' },
      { type: 'code', code: `cd backend
npm test
npm start
# Dans un autre terminal :
curl http://localhost:3000/api/health` },
      { type: 'text', content: 'Le test doit passer et la route doit retourner { "status": "ok" }. Le projet utilise CommonJS, comme le package.json créé par npm init -y.' },
    ],
  },
  {
    label: 'Frontend React',
    title: 'Préparer les tests et la compilation React',
    intro: 'Le frontend doit pouvoir être testé et compilé sans serveur de développement. On réutilise les scripts npm pour GitHub Actions.',
    blocks: [
      { type: 'heading', content: 'Créer un test Vitest' },
      { type: 'code', file: 'frontend/src/calcul.test.ts', code: `import { expect, test } from 'vitest';

test('2 + 2 vaut 4', () => {
  expect(2 + 2).toBe(4);
});` },
      { type: 'heading', content: 'Vérifier les scripts du frontend' },
      { type: 'code', file: 'frontend/package.json (extrait)', code: `"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "test:run": "vitest run",
  "preview": "vite preview"
}` },
      { type: 'heading', content: 'Tester localement' },
      { type: 'code', code: `cd frontend
npm run lint
npm run test:run
npm run build` },
      { type: 'tip', content: 'npm run build génère le dossier frontend/dist. C’est ce dossier qui contient les fichiers statiques à publier.' },
    ],
  },
  {
    label: 'CI full-stack',
    title: 'Créer le workflow qui teste Node.js et React',
    intro: 'Deux jobs parallèles, un pour chaque application. Chaque job s’exécute dans une machine GitHub isolée et utilise son propre package-lock.json.',
    blocks: [
      { type: 'heading', content: 'Créer le fichier YAML' },
      { type: 'code', code: `# Git Bash, depuis la racine du dépôt
mkdir -p .github/workflows
touch .github/workflows/ci-fullstack.yml` },
      { type: 'heading', content: 'Workflow complet' },
      { type: 'code', file: '.github/workflows/ci-fullstack.yml', code: `name: CI Fullstack

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read

jobs:
  backend:
    name: Tests Node.js
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: backend
    steps:
      - name: Récupérer le code
        uses: actions/checkout@v4

      - name: Installer Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: npm
          cache-dependency-path: backend/package-lock.json

      - name: Installer les dépendances
        run: npm ci

      - name: Tester l’API
        run: npm test

  frontend:
    name: Tests et build React
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: frontend
    steps:
      - name: Récupérer le code
        uses: actions/checkout@v4

      - name: Installer Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: npm
          cache-dependency-path: frontend/package-lock.json

      - name: Installer les dépendances
        run: npm ci

      - name: Vérifier ESLint
        run: npm run lint

      - name: Tester React
        run: npm run test:run

      - name: Compiler React
        run: npm run build` },
      { type: 'heading', content: 'Comprendre les lignes importantes' },
      { type: 'text', content: '`on` définit les événements déclencheurs. `jobs` contient les travaux. `runs-on` choisit la machine. `working-directory` indique dans quel dossier exécuter les commandes. `cache-dependency-path` pointe vers le bon package-lock.json. `npm ci` installe exactement les dépendances verrouillées.' },
      { type: 'warning', content: 'Ne place pas npm ci à la racine si le dépôt ne possède pas de package.json à cet endroit. Le frontend et le backend ont chacun leur dossier.' },
      { type: 'heading', content: 'Envoyer le workflow sur GitHub' },
      { type: 'code', code: `git add .
git commit -m "ci: test frontend and backend"
git push origin main` },
      { type: 'text', content: 'Dans GitHub → Actions → CI Fullstack, ouvre chaque job pour lire ses étapes. Si un test échoue, le job passe au rouge et la CI globale n’est pas validée.' },
    ],
  },
  {
    label: 'CD full-stack',
    title: 'Déployer le frontend et comprendre le backend',
    intro: 'Le frontend Vite produit des fichiers statiques. Le backend Express nécessite un serveur Node.js en fonctionnement : GitHub Pages ne peut pas l’héberger.',
    blocks: [
      { type: 'heading', content: 'Configurer la base Vite pour GitHub Pages' },
      { type: 'code', file: 'frontend/vite.config.ts (adapter le fichier existant)', code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_DEPOT/',
});` },
      { type: 'text', content: 'Remplace NOM_DU_DEPOT par le nom réel du dépôt GitHub. Pour un domaine racine ou un déploiement sur une autre plateforme, la valeur de base peut être différente.' },
      { type: 'heading', content: 'Créer le déploiement GitHub Pages' },
      { type: 'code', file: '.github/workflows/deploy-frontend.yml', code: `name: Deploy React

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: github-pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: frontend
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: npm
          cache-dependency-path: frontend/package-lock.json
      - run: npm ci
      - run: npm run lint
      - run: npm run test:run
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: frontend/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4` },
      { type: 'text', content: 'Dans GitHub → Settings → Pages → Build and deployment, choisis GitHub Actions. Le job deploy attend la réussite du job build grâce à needs: build.' },
      { type: 'warning', content: 'Le workflow de publication ci-dessus vérifie le frontend, mais ne dépend pas du job backend de ci-fullstack.yml. Pour garantir que les tests backend passent avant publication, regroupe les jobs dans un même workflow avec needs: [backend, frontend].' },
      { type: 'heading', content: 'Et pour le backend Node.js ?' },
      { type: 'text', content: 'Déploie Express sur une plateforme qui exécute Node.js (par exemple Render, Railway, un VPS ou un hébergement compatible). Configure les variables d’environnement et les secrets côté plateforme. La commande de démarrage de notre exemple est npm start, avec le dossier backend comme racine du service.' },
      { type: 'tip', content: 'En production, configure l’URL de l’API du frontend via une variable VITE_API_URL définie à la compilation. Ne mets jamais de secret dans une variable VITE_ : elle est exposée au navigateur. Pense aussi à CORS si frontend et backend sont sur des domaines différents.' },
    ],
  },
  {
    label: 'Soutenance',
    title: 'Présenter et défendre sa CI/CD devant le jury',
    intro: 'L’important n’est pas seulement d’avoir un workflow vert : il faut montrer ce qu’il vérifie et ce que cela apporte au projet.',
    blocks: [
      { type: 'heading', content: 'Démonstration en 5 étapes' },
      { type: 'text', content: '1. Montrer la structure frontend/backend et .github/workflows. 2. Ouvrir le YAML et expliquer les événements. 3. Montrer les deux jobs backend et frontend. 4. Ouvrir un run vert dans Actions et détailler npm ci, tests et build. 5. Présenter le déploiement et ses limites.' },
      { type: 'heading', content: 'Questions fréquentes du jury' },
      { type: 'text', content: '**Pourquoi npm ci plutôt que npm install ?** Parce que npm ci installe les versions fixées par le lockfile et échoue si celui-ci n’est pas cohérent. **Pourquoi deux jobs ?** Pour isoler les vérifications du frontend et du backend. **Que se passe-t-il si un test échoue ?** Le job échoue ; la publication doit être bloquée par une dépendance explicite ou une protection de branche. **CI et CD, quelle différence ?** La CI vérifie le code ; la CD prépare ou réalise la livraison.' },
      { type: 'heading', content: 'Exercice de préparation' },
      { type: 'text', content: 'Modifie volontairement le résultat attendu du test API, pousse la modification sur une branche de démonstration et observe l’échec dans Actions. Corrige le test, pousse à nouveau et montre le retour au vert.' },
      { type: 'warning', content: 'Ne prétends pas que le backend est déployé si tu as seulement publié le frontend sur GitHub Pages. Présente précisément ce qui est automatisé et ce qui reste manuel.' },
    ],
  },
];
