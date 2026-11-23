import type { CourseStep } from '../../types/course';

/** Vue.js 3 — Les bases : cours pratique pour Learn to Dev. */
export const vueJsSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Découvrir Vue.js",
    "intro": "Comprendre Vue 3 et faire le lien avec React.",
    "blocks": [
      {
        "type": "heading",
        "content": "Vue.js, c’est quoi ?"
      },
      {
        "type": "text",
        "content": "**Vue.js** est un framework JavaScript progressif pour créer des interfaces utilisateur. Vue 3 propose notamment la **Composition API**, pratique avec TypeScript. Vue et React répondent à des besoins proches, mais leurs syntaxes diffèrent."
      },
      {
        "type": "heading",
        "content": "Comparaison rapide"
      },
      {
        "type": "code",
        "content": "",
        "file": "React / Vue (mémo)",
        "code": "React : JSX/TSX, useState(), onClick, props\nVue : <template>, ref(), @click, defineProps()"
      },
      {
        "type": "heading",
        "content": "Un composant Vue"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { ref } from \"vue\";\n\nconst message = ref(\"Bonjour Vue !\");\n</script>\n\n<template>\n  <h1>{{ message }}</h1>\n</template>"
      },
      {
        "type": "tip",
        "content": "Dans un template, Vue déballe automatiquement les refs : écris {{ message }} et non {{ message.value }}."
      }
    ]
  },
  {
    "label": "Installation",
    "title": "Installer Vue 3 avec Vite et TypeScript",
    "intro": "Créer et démarrer un projet Vue.",
    "blocks": [
      {
        "type": "heading",
        "content": "Préparer le poste"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "node --version\nnpm --version\nnpm create vue@latest"
      },
      {
        "type": "text",
        "content": "À la question du nom, saisis `demo-vue`. Active **TypeScript** et, pour ce premier essai, désactive les options facultatives (Router, Pinia, tests). Tu les ajouteras plus loin. Le générateur officiel crée un projet Vue basé sur Vite."
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "cd demo-vue\nnpm install\nnpm run dev"
      },
      {
        "type": "heading",
        "content": "Commandes utiles"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "npm run build\nnpm run preview"
      },
      {
        "type": "warning",
        "content": "Les scripts exacts sont définis dans `package.json`. Si tu actives d’autres options à la création, les fichiers générés peuvent varier."
      },
      {
        "type": "tip",
        "content": "Documentation officielle : https://vuejs.org/guide/quick-start.html"
      }
    ]
  },
  {
    "label": "Structure Vue",
    "title": "Comprendre les fichiers .vue",
    "intro": "Repérer les points d’entrée et les composants.",
    "blocks": [
      {
        "type": "heading",
        "content": "Structure simplifiée"
      },
      {
        "type": "code",
        "content": "",
        "file": "Arborescence",
        "code": "demo-vue/\n├── index.html\n├── package.json\n├── src/\n│   ├── main.ts\n│   ├── App.vue\n│   └── components/\n└── vite.config.ts"
      },
      {
        "type": "heading",
        "content": "Point d’entrée"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/main.ts",
        "code": "import { createApp } from \"vue\";\nimport App from \"./App.vue\";\n\ncreateApp(App).mount(\"#app\");"
      },
      {
        "type": "heading",
        "content": "Composant à fichier unique (SFC)"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nconst titre = \"Mon application Vue\";\n</script>\n\n<template>\n  <main><h1>{{ titre }}</h1></main>\n</template>\n\n<style scoped>\nh1 { color: #42b883; }\n</style>"
      },
      {
        "type": "text",
        "content": "`<script setup>` contient la logique, `<template>` le rendu et `<style scoped>` les styles ciblés sur le composant."
      },
      {
        "type": "tip",
        "content": "Exercice : change le titre et la couleur, puis observe le rechargement automatique."
      }
    ]
  },
  {
    "label": "Directives",
    "title": "Templates et directives",
    "intro": "Afficher des valeurs, des conditions et des listes.",
    "blocks": [
      {
        "type": "heading",
        "content": "Interpolation et attributs"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nconst titre = \"Catalogue\";\nconst image = \"https://vuejs.org/images/logo.png\";\nconst visible = true;\nconst produits = [\n  { id: 1, nom: \"Clavier\" },\n  { id: 2, nom: \"Souris\" },\n];\n</script>\n\n<template>\n  <h1>{{ titre }}</h1>\n  <img :src=\"image\" alt=\"Logo Vue\" width=\"60\" />\n  <p v-if=\"visible\">Catalogue disponible</p>\n  <p v-else>Catalogue masqué</p>\n  <ul>\n    <li v-for=\"produit in produits\" :key=\"produit.id\">\n      {{ produit.nom }}\n    </li>\n  </ul>\n</template>"
      },
      {
        "type": "text",
        "content": "`v-bind:src` s’abrège en `:src`. `v-if` ajoute ou retire un élément selon une condition. `v-for` répète un élément ; fournis une clé stable avec `:key`."
      },
      {
        "type": "warning",
        "content": "N’utilise pas `v-if` et `v-for` sur le même élément : filtre plutôt la liste avec `computed()`."
      }
    ]
  },
  {
    "label": "Réactivité",
    "title": "Réactivité et événements",
    "intro": "Modifier l’interface quand les données changent.",
    "blocks": [
      {
        "type": "heading",
        "content": "ref et reactive"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { ref, reactive } from \"vue\";\n\nconst compteur = ref(0);\nconst profil = reactive({ prenom: \"Alex\", actif: true });\n\nfunction incrementer() {\n  compteur.value++;\n}\n</script>\n\n<template>\n  <p>{{ profil.prenom }} : {{ compteur }}</p>\n  <button @click=\"incrementer\">Ajouter 1</button>\n  <button @click=\"profil.actif = !profil.actif\">\n    {{ profil.actif ? \"Actif\" : \"Inactif\" }}\n  </button>\n</template>"
      },
      {
        "type": "text",
        "content": "`ref()` enveloppe une valeur réactive : en TypeScript, accède à `.value`. `reactive()` crée un objet réactif dont les propriétés sont accessibles directement. `@click` est l’abréviation de `v-on:click`."
      },
      {
        "type": "tip",
        "content": "Équivalent React : `useState()` pour un compteur. Contrairement à React, Vue ne demande pas de fonction setter pour modifier une ref."
      }
    ]
  },
  {
    "label": "Composants",
    "title": "Composants, props et emits",
    "intro": "Découper une interface et communiquer.",
    "blocks": [
      {
        "type": "heading",
        "content": "Composant enfant"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/components/TaskItem.vue",
        "code": "<script setup lang=\"ts\">\nconst props = defineProps<{\n  titre: string;\n  terminee: boolean;\n}>();\n\nconst emit = defineEmits<{\n  basculer: [];\n}>();\n</script>\n\n<template>\n  <li>\n    <span :style=\"{ textDecoration: props.terminee ? 'line-through' : 'none' }\">\n      {{ props.titre }}\n    </span>\n    <button @click=\"emit('basculer')\">Changer</button>\n  </li>\n</template>"
      },
      {
        "type": "heading",
        "content": "Composant parent"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { ref } from \"vue\";\nimport TaskItem from \"./components/TaskItem.vue\";\n\nconst terminee = ref(false);\n</script>\n\n<template>\n  <ul>\n    <TaskItem\n      titre=\"Apprendre Vue\"\n      :terminee=\"terminee\"\n      @basculer=\"terminee = !terminee\"\n    />\n  </ul>\n</template>"
      },
      {
        "type": "text",
        "content": "Les **props** vont du parent vers l’enfant. Les **emits** permettent à l’enfant de signaler une action au parent. Évite de modifier directement une prop dans l’enfant."
      },
      {
        "type": "tip",
        "content": "`defineProps` et `defineEmits` sont des macros de `<script setup>` : pas besoin de les importer."
      }
    ]
  },
  {
    "label": "Formulaires",
    "title": "Formulaires et v-model",
    "intro": "Relier les champs aux données et valider.",
    "blocks": [
      {
        "type": "heading",
        "content": "Formulaire simple"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { ref } from \"vue\";\n\nconst nom = ref(\"\");\nconst email = ref(\"\");\nconst message = ref(\"\");\n\nfunction envoyer() {\n  if (!nom.value.trim() || !email.value.includes(\"@\")) {\n    message.value = \"Vérifie les champs.\";\n    return;\n  }\n  message.value = `Bonjour ${nom.value} !`;\n}\n</script>\n\n<template>\n  <form @submit.prevent=\"envoyer\">\n    <label>Nom <input v-model.trim=\"nom\" required /></label>\n    <label>Email <input v-model.trim=\"email\" type=\"email\" required /></label>\n    <button type=\"submit\">Envoyer</button>\n  </form>\n  <p role=\"status\">{{ message }}</p>\n</template>"
      },
      {
        "type": "text",
        "content": "`v-model` synchronise un champ avec une donnée réactive. `.trim` retire les espaces aux extrémités. `@submit.prevent` empêche le rechargement classique du formulaire."
      },
      {
        "type": "warning",
        "content": "La validation côté navigateur ne remplace jamais la validation côté serveur."
      }
    ]
  },
  {
    "label": "Cycle de vie",
    "title": "computed, watch et cycle de vie",
    "intro": "Calculer une valeur et réagir aux changements.",
    "blocks": [
      {
        "type": "heading",
        "content": "computed : valeur dérivée"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { computed, onMounted, ref, watch } from \"vue\";\n\nconst recherche = ref(\"\");\nconst noms = ref([\"Alice\", \"Bruno\", \"Camille\"]);\nconst filtres = computed(() =>\n  noms.value.filter((nom) =>\n    nom.toLowerCase().includes(recherche.value.toLowerCase())\n  )\n);\n\nwatch(recherche, (valeur) => {\n  console.log(\"Recherche :\", valeur);\n});\n\nonMounted(() => {\n  console.log(\"Composant monté\");\n});\n</script>\n\n<template>\n  <input v-model=\"recherche\" placeholder=\"Rechercher\" />\n  <ul><li v-for=\"nom in filtres\" :key=\"nom\">{{ nom }}</li></ul>\n</template>"
      },
      {
        "type": "text",
        "content": "`computed()` met en cache un résultat dérivé de dépendances réactives. `watch()` sert aux effets de bord déclenchés par un changement. `onMounted()` exécute une fonction après le montage du composant."
      },
      {
        "type": "tip",
        "content": "Utilise `computed()` pour filtrer une liste, et `watch()` si tu dois déclencher une action externe."
      }
    ]
  },
  {
    "label": "Vue Router",
    "title": "Vue Router",
    "intro": "Créer des pages et gérer une route inconnue.",
    "blocks": [
      {
        "type": "heading",
        "content": "Installer le routeur"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "npm install vue-router@4"
      },
      {
        "type": "heading",
        "content": "Définir les routes"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/router/index.ts",
        "code": "import { createRouter, createWebHistory } from \"vue-router\";\nimport HomeView from \"../views/HomeView.vue\";\nimport AboutView from \"../views/AboutView.vue\";\n\nexport const router = createRouter({\n  history: createWebHistory(import.meta.env.BASE_URL),\n  routes: [\n    { path: \"/\", component: HomeView },\n    { path: \"/a-propos\", component: AboutView },\n    { path: \"/:pathMatch(.*)*\", component: () => import(\"../views/NotFoundView.vue\") },\n  ],\n});"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/main.ts",
        "code": "import { createApp } from \"vue\";\nimport App from \"./App.vue\";\nimport { router } from \"./router\";\n\ncreateApp(App).use(router).mount(\"#app\");"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<template>\n  <nav>\n    <RouterLink to=\"/\">Accueil</RouterLink>\n    <RouterLink to=\"/a-propos\">À propos</RouterLink>\n  </nav>\n  <RouterView />\n</template>"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/views/HomeView.vue",
        "code": "<template><h1>Accueil</h1></template>"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/views/AboutView.vue",
        "code": "<template><h1>À propos</h1></template>"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/views/NotFoundView.vue",
        "code": "<template><h1>Page introuvable (404)</h1></template>"
      },
      {
        "type": "warning",
        "content": "Avec `createWebHistory()`, l’hébergeur doit renvoyer `index.html` pour les routes de l’application. Sinon, un rechargement direct sur `/a-propos` peut produire une 404 serveur."
      },
      {
        "type": "tip",
        "content": "Pour GitHub Pages sur un dépôt de projet, vérifie aussi `base` dans `vite.config.ts` et le fallback SPA."
      }
    ]
  },
  {
    "label": "Pinia",
    "title": "Pinia : état global",
    "intro": "Partager des données entre plusieurs composants.",
    "blocks": [
      {
        "type": "heading",
        "content": "Installer Pinia"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "npm install pinia"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/main.ts",
        "code": "import { createApp } from \"vue\";\nimport { createPinia } from \"pinia\";\nimport App from \"./App.vue\";\n\ncreateApp(App).use(createPinia()).mount(\"#app\");"
      },
      {
        "type": "heading",
        "content": "Créer un store"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/stores/counter.ts",
        "code": "import { defineStore } from \"pinia\";\nimport { ref } from \"vue\";\n\nexport const useCounterStore = defineStore(\"counter\", () => {\n  const count = ref(0);\n  function increment() { count.value++; }\n  return { count, increment };\n});"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { useCounterStore } from \"./stores/counter\";\nconst counter = useCounterStore();\n</script>\n\n<template>\n  <p>{{ counter.count }}</p>\n  <button @click=\"counter.increment()\">Ajouter</button>\n</template>"
      },
      {
        "type": "text",
        "content": "Pinia centralise un état partagé. Pour de simples données locales, `ref()` suffit. Dans un store de type setup, les refs sont accessibles directement dans les templates et sur le store."
      },
      {
        "type": "tip",
        "content": "Évite de multiplier les stores pour des données qui ne concernent qu’un composant."
      }
    ]
  },
  {
    "label": "API REST",
    "title": "Consommer une API REST",
    "intro": "Gérer chargement, succès et erreur.",
    "blocks": [
      {
        "type": "heading",
        "content": "Récupérer des données"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { onMounted, ref } from \"vue\";\n\ninterface Todo {\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\nconst todos = ref<Todo[]>([]);\nconst loading = ref(false);\nconst error = ref(\"\");\n\nasync function charger() {\n  loading.value = true;\n  error.value = \"\";\n  try {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/todos?_limit=5\");\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    todos.value = (await response.json()) as Todo[];\n  } catch (err) {\n    error.value = err instanceof Error ? err.message : \"Erreur inconnue\";\n  } finally {\n    loading.value = false;\n  }\n}\n\nonMounted(charger);\n</script>\n\n<template>\n  <p v-if=\"loading\">Chargement...</p>\n  <p v-else-if=\"error\" role=\"alert\">{{ error }}</p>\n  <ul v-else>\n    <li v-for=\"todo in todos\" :key=\"todo.id\">{{ todo.title }}</li>\n  </ul>\n  <button @click=\"charger\">Actualiser</button>\n</template>"
      },
      {
        "type": "text",
        "content": "`fetch()` retourne une réponse HTTP. Vérifie `response.ok`, traite les erreurs et affiche un état de chargement. L’interface TypeScript décrit les données attendues, mais ne valide pas la réponse à l’exécution."
      },
      {
        "type": "warning",
        "content": "L’API de démonstration nécessite une connexion Internet. Pour une vraie application, vérifie les données reçues et configure correctement CORS côté serveur."
      }
    ]
  },
  {
    "label": "Mini-projet",
    "title": "Mini-projet : gestionnaire de tâches",
    "intro": "Assembler composants, formulaire, filtre et persistance locale.",
    "blocks": [
      {
        "type": "heading",
        "content": "Créer une application autonome"
      },
      {
        "type": "text",
        "content": "Dans un projet Vue simple sans Router ni Pinia, remplace `src/App.vue` par le code suivant. Tu pourras ensuite extraire le formulaire et chaque tâche en composants."
      },
      {
        "type": "code",
        "content": "",
        "file": "src/App.vue",
        "code": "<script setup lang=\"ts\">\nimport { computed, ref, watch } from \"vue\";\n\ninterface Task { id: string; title: string; done: boolean }\nconst storageKey = \"vue-demo-tasks\";\nfunction initialTasks(): Task[] {\n  try {\n    const saved = localStorage.getItem(storageKey);\n    return saved ? (JSON.parse(saved) as Task[]) : [];\n  } catch { return []; }\n}\n\nconst tasks = ref<Task[]>(initialTasks());\nconst title = ref(\"\");\nconst filter = ref<\"all\" | \"todo\" | \"done\">(\"all\");\n\nconst visibleTasks = computed(() => tasks.value.filter((task) =>\n  filter.value === \"all\" ||\n  (filter.value === \"done\" ? task.done : !task.done)\n));\nconst remaining = computed(() => tasks.value.filter((task) => !task.done).length);\n\nfunction addTask() {\n  const value = title.value.trim();\n  if (!value) return;\n  tasks.value.push({ id: crypto.randomUUID(), title: value, done: false });\n  title.value = \"\";\n}\nfunction removeTask(id: string) {\n  tasks.value = tasks.value.filter((task) => task.id !== id);\n}\nwatch(tasks, (value) => localStorage.setItem(storageKey, JSON.stringify(value)), { deep: true });\n</script>\n\n<template>\n  <main>\n    <h1>Mes tâches</h1>\n    <form @submit.prevent=\"addTask\">\n      <label for=\"task\">Nouvelle tâche</label>\n      <input id=\"task\" v-model=\"title\" placeholder=\"Ex. Apprendre Vue\" />\n      <button type=\"submit\">Ajouter</button>\n    </form>\n\n    <p>{{ remaining }} tâche(s) restante(s)</p>\n    <label for=\"filter\">Filtrer</label>\n    <select id=\"filter\" v-model=\"filter\">\n      <option value=\"all\">Toutes</option>\n      <option value=\"todo\">À faire</option>\n      <option value=\"done\">Terminées</option>\n    </select>\n\n    <ul>\n      <li v-for=\"task in visibleTasks\" :key=\"task.id\">\n        <label>\n          <input v-model=\"task.done\" type=\"checkbox\" />\n          {{ task.title }}\n        </label>\n        <button type=\"button\" @click=\"removeTask(task.id)\">Supprimer</button>\n      </li>\n    </ul>\n    <p v-if=\"visibleTasks.length === 0\">Aucune tâche à afficher.</p>\n  </main>\n</template>"
      },
      {
        "type": "text",
        "content": "Cette application utilise `ref`, `computed`, `watch`, `v-model`, `v-for` et `localStorage`. Le navigateur garde les tâches après actualisation."
      },
      {
        "type": "warning",
        "content": "`localStorage` ne convient pas aux données sensibles et peut contenir des données malformées. Ici, le code est un exercice local, pas une solution de production."
      },
      {
        "type": "tip",
        "content": "Exercice : ajoute une date limite, un compteur de tâches terminées et un bouton « Tout terminer »."
      }
    ]
  },
  {
    "label": "Tests et build",
    "title": "Tester, construire et poursuivre",
    "intro": "Vérifier son application et préparer un vrai projet.",
    "blocks": [
      {
        "type": "heading",
        "content": "Vérifier la compilation"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "npm run build\nnpm run preview"
      },
      {
        "type": "heading",
        "content": "Tests unitaires avec Vitest"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "npm install -D vitest"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/utils/countRemaining.ts",
        "code": "export interface Task { done: boolean }\n\nexport function countRemaining(tasks: Task[]): number {\n  return tasks.filter((task) => !task.done).length;\n}"
      },
      {
        "type": "code",
        "content": "",
        "file": "src/utils/countRemaining.test.ts",
        "code": "import { describe, expect, it } from \"vitest\";\nimport { countRemaining } from \"./countRemaining\";\n\ndescribe(\"countRemaining\", () => {\n  it(\"compte les tâches non terminées\", () => {\n    expect(countRemaining([{ done: false }, { done: true }])).toBe(1);\n  });\n});"
      },
      {
        "type": "code",
        "content": "",
        "file": "Terminal",
        "code": "npx vitest run"
      },
      {
        "type": "heading",
        "content": "Et ensuite ?"
      },
      {
        "type": "text",
        "content": "Entraîne-toi à : extraire les composants, typer les props, ajouter Vue Router, utiliser Pinia seulement si plusieurs pages partagent l’état, puis connecter une API REST. Pour les tests de composants Vue, ajoute `@vue/test-utils` et une configuration de test adaptée."
      },
      {
        "type": "tip",
        "content": "Documentation : https://vuejs.org/guide/introduction.html — https://router.vuejs.org/ — https://pinia.vuejs.org/ — https://vitest.dev/"
      }
    ]
  }
];
