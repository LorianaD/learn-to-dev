import type { CourseStep } from '../../types/course';

export const typescriptBasicsSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Découvrir TypeScript",
    "intro": "Comprendre le rôle du typage.",
    "blocks": [
      {
        "type": "text",
        "content": "TypeScript ajoute un système de types statique à JavaScript. Le compilateur vérifie le code puis produit du JavaScript. Les types sont effacés à la compilation."
      },
      {
        "type": "heading",
        "content": "JavaScript puis TypeScript"
      },
      {
        "type": "code",
        "code": "// JavaScript\nfunction double(n) { return n * 2; }\n\n// TypeScript (exemple indépendant)\nfunction double(n: number): number { return n * 2; }\ndouble(5); // 10\n// double(\"5\"); // Erreur de typage"
      },
      {
        "type": "warning",
        "content": "Le typage ne valide pas automatiquement les données reçues à l’exécution."
      },
      {
        "type": "tip",
        "content": "Teste les exemples dans le [TypeScript Playground](https://www.typescriptlang.org/play/)."
      }
    ]
  },
  {
    "label": "Installation",
    "title": "Installer TypeScript et créer un projet",
    "intro": "Compiler et exécuter sans framework.",
    "blocks": [
      {
        "type": "heading",
        "content": "Créer un projet avec Node.js et npm"
      },
      {
        "type": "code",
        "code": "node -v\nnpm -v\nmkdir atelier-typescript\ncd atelier-typescript\nnpm init -y\nnpm install -D typescript\nnpx tsc --version\nmkdir src"
      },
      {
        "type": "text",
        "content": "Crée le fichier `tsconfig.json` à la racine avec cette configuration minimale."
      },
      {
        "type": "code",
        "code": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"CommonJS\",\n    \"rootDir\": \"src\",\n    \"outDir\": \"dist\",\n    \"strict\": true,\n    \"noEmitOnError\": true\n  },\n  \"include\": [\"src/**/*.ts\"]\n}"
      },
      {
        "type": "heading",
        "content": "Premier programme : src/index.ts"
      },
      {
        "type": "code",
        "code": "const message: string = \"Bonjour TypeScript !\";\nconsole.log(message);"
      },
      {
        "type": "code",
        "code": "npx tsc\nnode dist/index.js\n# Compilation automatique (terminal séparé)\nnpx tsc --watch"
      },
      {
        "type": "text",
        "content": "Pour les exercices suivants, remplace le contenu de `src/index.ts` par un exemple à la fois. Les exemples sont indépendants."
      },
      {
        "type": "heading",
        "content": "Alternative pour le navigateur avec Vite"
      },
      {
        "type": "code",
        "code": "npm create vite@latest atelier-web -- --template vanilla-ts\ncd atelier-web\nnpm install\nnpm run dev"
      },
      {
        "type": "tip",
        "content": "Vite transforme TypeScript mais le serveur de développement ne vérifie pas nécessairement les types. Utilise aussi `npx tsc --noEmit`."
      }
    ]
  },
  {
    "label": "Types primitifs",
    "title": "Déclarer et inférer les types",
    "intro": "Utiliser les types simples.",
    "blocks": [
      {
        "type": "code",
        "code": "let name: string = \"Alice\";\nlet age: number = 25;\nlet active: boolean = true;\nlet empty: null = null;\nlet missing: undefined = undefined;\nconst price = 19.99; // type inféré\nlet score = 0;\n// score = \"10\"; // Erreur\nexport {};"
      },
      {
        "type": "text",
        "content": "L’inférence permet au compilateur de déduire un type. Utilise `string`, `number` et `boolean` plutôt que les types objets String, Number et Boolean."
      },
      {
        "type": "tip",
        "content": "Exercice : déclare un titre, un prix et une disponibilité. Essaie ensuite une affectation incompatible."
      }
    ]
  },
  {
    "label": "Tableaux et tuples",
    "title": "Typer les collections",
    "intro": "Distinguer listes homogènes et positions typées.",
    "blocks": [
      {
        "type": "code",
        "code": "const names: string[] = [\"Alice\", \"Bob\"];\nconst scores: Array<number> = [10, 20];\nnames.push(\"Chloé\");\nconst point: [number, number] = [12, 8];\nconst entry: [number, string] = [1, \"Alice\"];\nconst fixed: readonly string[] = [\"A\", \"B\"];\n// fixed.push(\"C\"); // Erreur"
      },
      {
        "type": "tip",
        "content": "Exercice : crée un tableau de prix et calcule le total avec `reduce`. Correction : `scores.reduce((sum, n) => sum + n, 0)`."
      }
    ]
  },
  {
    "label": "Objets",
    "title": "Typer les propriétés des objets",
    "intro": "Gérer les champs facultatifs et en lecture seule.",
    "blocks": [
      {
        "type": "code",
        "code": "const user: { readonly id: number; name: string; email?: string } = {\n  id: 1,\n  name: \"Alice\"\n};\nuser.name = \"Bob\";\nconsole.log(user.email?.toLowerCase() ?? \"Non renseigné\");\n// user.id = 2; // Erreur"
      },
      {
        "type": "text",
        "content": "`?` rend une propriété facultative. `?.` évite un accès sur null ou undefined. `??` fournit une valeur de secours. `readonly` est une contrainte de typage, pas un gel de l’objet à l’exécution."
      },
      {
        "type": "tip",
        "content": "Exercice : crée un produit avec id, nom, prix et description facultative."
      }
    ]
  },
  {
    "label": "Fonctions",
    "title": "Typer les paramètres et les retours",
    "intro": "Écrire des fonctions prévisibles.",
    "blocks": [
      {
        "type": "code",
        "code": "function add(a: number, b: number): number {\n  return a + b;\n}\nconst multiply = (a: number, b: number): number => a * b;\nfunction greet(name: string, prefix = \"Bonjour\"): string {\n  return `${prefix} ${name}`;\n}\nfunction log(message?: string): void {\n  console.log(message ?? \"Vide\");\n}\nconsole.log(add(2, 3), greet(\"Alice\"));"
      },
      {
        "type": "heading",
        "content": "Typer un callback"
      },
      {
        "type": "code",
        "code": "function calculate(a: number, b: number, operation: (x: number, y: number) => number): number {\n  return operation(a, b);\n}\nconsole.log(calculate(2, 3, (x, y) => x + y));"
      },
      {
        "type": "tip",
        "content": "Exercice : écris une fonction calculant un prix TTC avec un taux par défaut de 20 %."
      }
    ]
  },
  {
    "label": "Types personnalisés",
    "title": "Utiliser type et interface",
    "intro": "Réutiliser les structures.",
    "blocks": [
      {
        "type": "code",
        "code": "interface User {\n  id: number;\n  name: string;\n}\ninterface Admin extends User {\n  permissions: string[];\n}\ntype Product = { id: number; price: number };\ntype Timestamped = { createdAt: Date };\ntype SavedProduct = Product & Timestamped;\nconst admin: Admin = { id: 1, name: \"Alice\", permissions: [\"read\"] };"
      },
      {
        "type": "text",
        "content": "Les deux syntaxes peuvent décrire des objets. `interface` peut être étendue et fusionnée par déclarations ; `type` permet aussi les unions et les alias de types primitifs."
      },
      {
        "type": "tip",
        "content": "Exercice : crée une interface Task et un tableau Task[]."
      }
    ]
  },
  {
    "label": "Unions et littéraux",
    "title": "Limiter les valeurs autorisées",
    "intro": "Modéliser les états métier.",
    "blocks": [
      {
        "type": "code",
        "code": "type Status = \"pending\" | \"done\";\nlet statusValue: Status = \"pending\";\nstatusValue = \"done\";\nfunction formatId(id: string | number): string {\n  return String(id);\n}\ntype Result = { ok: true; data: string } | { ok: false; error: string };\nfunction display(result: Result): string {\n  return result.ok ? result.data : result.error;\n}"
      },
      {
        "type": "tip",
        "content": "Exercice : définis les variantes primary, secondary et danger d’un bouton avec une union littérale."
      }
    ]
  },
  {
    "label": "Types spéciaux",
    "title": "Comprendre any, unknown, void et never",
    "intro": "Choisir le type adapté.",
    "blocks": [
      {
        "type": "code",
        "code": "let unsafe: any = 42; // Désactive les contrôles sur cette valeur\nconst input: unknown = \"Bonjour\";\nif (typeof input === \"string\") {\n  console.log(input.toUpperCase());\n}\nfunction notify(message: string): void { console.log(message); }\nfunction fail(message: string): never { throw new Error(message); }"
      },
      {
        "type": "warning",
        "content": "Préfère unknown à any pour une donnée dont le type est inconnu. Une assertion `as` ne transforme ni ne valide une valeur."
      },
      {
        "type": "tip",
        "content": "Exercice : traite une valeur unknown seulement si elle est un nombre."
      }
    ]
  },
  {
    "label": "Narrowing",
    "title": "Affiner un type avant de l’utiliser",
    "intro": "Vérifier les données avec des conditions.",
    "blocks": [
      {
        "type": "code",
        "code": "function format(value: string | number): string {\n  if (typeof value === \"number\") return value.toFixed(2);\n  return value.toUpperCase();\n}\ntype Cat = { meow: () => void };\ntype Dog = { bark: () => void };\nfunction speak(animal: Cat | Dog): void {\n  if (\"meow\" in animal) animal.meow();\n  else animal.bark();\n}\nfunction isString(value: unknown): value is string {\n  return typeof value === \"string\";\n}"
      },
      {
        "type": "tip",
        "content": "Exercice : écris une fonction qui accepte string | null et retourne une chaîne non nulle."
      }
    ]
  },
  {
    "label": "Génériques",
    "title": "Créer des fonctions et types génériques",
    "intro": "Conserver le type des données.",
    "blocks": [
      {
        "type": "code",
        "code": "function identity<T>(value: T): T { return value; }\nconst text = identity(\"Bonjour\");\nconst number = identity(42);\nfunction first<T>(items: T[]): T | undefined { return items[0]; }\ninterface ApiResponse<T> { data: T; }\nconst response: ApiResponse<number[]> = { data: [1, 2] };"
      },
      {
        "type": "heading",
        "content": "Contraindre un générique"
      },
      {
        "type": "code",
        "code": "function getId<T extends { id: number }>(item: T): number {\n  return item.id;\n}\nconsole.log(getId({ id: 1, name: \"Alice\" }));"
      },
      {
        "type": "tip",
        "content": "Exercice : crée une fonction générique qui retourne le dernier élément d’un tableau ou undefined."
      }
    ]
  },
  {
    "label": "Utility Types",
    "title": "Transformer les types existants",
    "intro": "Éviter les duplications.",
    "blocks": [
      {
        "type": "code",
        "code": "interface User { id: number; name: string; email?: string }\ntype UpdateUser = Partial<User>;\ntype CompleteUser = Required<User>;\ntype UserPreview = Pick<User, \"id\" | \"name\">;\ntype CreateUser = Omit<User, \"id\">;\ntype FrozenUser = Readonly<User>;\ntype Roles = Record<\"admin\" | \"member\", string[]>;\nconst update: UpdateUser = { name: \"Alice\" };"
      },
      {
        "type": "text",
        "content": "Partial rend les champs facultatifs ; Required les rend obligatoires ; Pick sélectionne ; Omit exclut ; Readonly interdit les réaffectations directes ; Record associe des clés à un type de valeur. Ces transformations sont superficielles."
      },
      {
        "type": "tip",
        "content": "Exercice : dérive un type de création de tâche sans id et un type de modification partielle."
      }
    ]
  },
  {
    "label": "Classes et POO",
    "title": "Créer des classes et des instances",
    "intro": "Découvrir encapsulation et héritage.",
    "blocks": [
      {
        "type": "code",
        "code": "class User {\n  constructor(public readonly id: number, protected name: string) {}\n  greet(): string { return `Bonjour ${this.name}`; }\n}\nclass Admin extends User {\n  private permissions: string[] = [];\n  addPermission(permission: string): void {\n    this.permissions.push(permission);\n  }\n  override greet(): string { return `${super.greet()} (admin)`; }\n}\nconst admin = new Admin(1, \"Alice\");\nadmin.addPermission(\"read\");\nconsole.log(admin.greet());"
      },
      {
        "type": "text",
        "content": "public : accessible partout ; protected : classe et sous-classes ; private : accès limité par TypeScript à la classe. Les champs JavaScript #private offrent une confidentialité à l’exécution."
      },
      {
        "type": "tip",
        "content": "Exercice : crée une classe Product avec une méthode calculant le prix TTC."
      }
    ]
  },
  {
    "label": "Modules",
    "title": "Organiser le code avec import et export",
    "intro": "Séparer les types et les fonctions.",
    "blocks": [
      {
        "type": "heading",
        "content": "src/types.ts"
      },
      {
        "type": "code",
        "code": "export interface Task { id: number; title: string; done: boolean }"
      },
      {
        "type": "heading",
        "content": "src/tasks.ts"
      },
      {
        "type": "code",
        "code": "import type { Task } from \"./types\";\nexport function completed(tasks: Task[]): Task[] {\n  return tasks.filter(task => task.done);\n}"
      },
      {
        "type": "heading",
        "content": "src/index.ts"
      },
      {
        "type": "code",
        "code": "import type { Task } from \"./types\";\nimport { completed } from \"./tasks\";\nconst tasks: Task[] = [{ id: 1, title: \"Apprendre TS\", done: true }];\nconsole.log(completed(tasks));"
      },
      {
        "type": "text",
        "content": "Ces imports correspondent au projet CommonJS du début. Avec Node ESM natif, les règles de résolution et extensions peuvent différer. `import type` est réservé aux types et disparaît du JavaScript."
      },
      {
        "type": "tip",
        "content": "Exercice : ajoute une fonction exportée qui filtre les tâches non terminées."
      }
    ]
  },
  {
    "label": "DOM et événements",
    "title": "Manipuler le HTML avec TypeScript",
    "intro": "Utiliser le projet Vite vanilla-ts.",
    "blocks": [
      {
        "type": "heading",
        "content": "index.html : contenu du body"
      },
      {
        "type": "code",
        "code": "<form id=\"form\">\n  <input id=\"title\" required />\n  <button>Ajouter</button>\n</form>\n<ul id=\"list\"></ul>\n<script type=\"module\" src=\"/src/main.ts\"></script>"
      },
      {
        "type": "heading",
        "content": "src/main.ts"
      },
      {
        "type": "code",
        "code": "const form = document.querySelector(\"#form\");\nconst input = document.querySelector(\"#title\");\nconst list = document.querySelector(\"#list\");\nif (form instanceof HTMLFormElement && input instanceof HTMLInputElement && list instanceof HTMLUListElement) {\n  form.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) return;\n    const li = document.createElement(\"li\");\n    li.textContent = title;\n    list.append(li);\n    form.reset();\n  });\n}"
      },
      {
        "type": "warning",
        "content": "querySelector peut retourner null. Vérifie le type réel de l’élément. Utilise textContent pour afficher du texte utilisateur plutôt que innerHTML."
      },
      {
        "type": "tip",
        "content": "Exercice : ajoute un bouton de suppression à chaque élément."
      }
    ]
  },
  {
    "label": "API REST",
    "title": "Récupérer et vérifier des données JSON",
    "intro": "Utiliser fetch et async/await.",
    "blocks": [
      {
        "type": "code",
        "code": "interface Todo { id: number; title: string; completed: boolean }\nfunction isTodo(value: unknown): value is Todo {\n  return typeof value === \"object\" && value !== null\n    && \"id\" in value && typeof value.id === \"number\"\n    && \"title\" in value && typeof value.title === \"string\"\n    && \"completed\" in value && typeof value.completed === \"boolean\";\n}\nasync function getTodo(): Promise<Todo> {\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/1\");\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  const data: unknown = await response.json();\n  if (!isTodo(data)) throw new Error(\"Format invalide\");\n  return data;\n}\ngetTodo().then(console.log).catch(console.error);"
      },
      {
        "type": "text",
        "content": "Cet exemple nécessite Internet et un navigateur moderne ou Node.js récent. Promise<Todo> décrit le résultat attendu ; le garde isTodo vérifie les données réellement reçues."
      },
      {
        "type": "tip",
        "content": "Exercice : récupère une liste de tâches et vérifie chaque élément avec `Array.isArray` et `every(isTodo)`."
      }
    ]
  },
  {
    "label": "Configuration",
    "title": "Comprendre tsconfig.json",
    "intro": "Configurer les vérifications et la compilation.",
    "blocks": [
      {
        "type": "code",
        "code": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"CommonJS\",\n    \"strict\": true,\n    \"noUncheckedIndexedAccess\": true,\n    \"noEmitOnError\": true,\n    \"rootDir\": \"src\",\n    \"outDir\": \"dist\"\n  },\n  \"include\": [\"src/**/*.ts\"]\n}"
      },
      {
        "type": "text",
        "content": "target : version JavaScript ciblée ; module : format des modules ; strict : ensemble de contrôles stricts ; noUncheckedIndexedAccess : tient compte des accès indexés potentiellement absents ; noEmitOnError : empêche la nouvelle émission en cas d’erreur."
      },
      {
        "type": "code",
        "code": "npx tsc --noEmit\nnpx tsc --showConfig\nnpx tsc -p tsconfig.json"
      },
      {
        "type": "warning",
        "content": "Dans un projet Vite, conserve sa configuration adaptée au bundler. Ne remplace pas automatiquement son tsconfig par celui de Node."
      }
    ]
  },
  {
    "label": "Projet pratique",
    "title": "Construire un gestionnaire de tâches",
    "intro": "Mettre en pratique les types, fonctions et tableaux.",
    "blocks": [
      {
        "type": "heading",
        "content": "Objectifs"
      },
      {
        "type": "text",
        "content": "Créer, afficher, terminer et supprimer des tâches. Utiliser un projet console sans framework. Remplace src/index.ts par la correction après avoir essayé seul."
      },
      {
        "type": "heading",
        "content": "Correction complète : src/index.ts"
      },
      {
        "type": "code",
        "code": "type Status = \"pending\" | \"done\";\ninterface Task { readonly id: number; title: string; status: Status }\ntype NewTask = Pick<Task, \"title\">;\nlet tasks: Task[] = [];\nlet nextId = 1;\nfunction addTask(input: NewTask): Task {\n  const title = input.title.trim();\n  if (!title) throw new Error(\"Titre obligatoire\");\n  const task: Task = { id: nextId++, title, status: \"pending\" };\n  tasks.push(task);\n  return task;\n}\nfunction completeTask(id: number): boolean {\n  const task = tasks.find(item => item.id === id);\n  if (!task) return false;\n  task.status = \"done\";\n  return true;\n}\nfunction deleteTask(id: number): void {\n  tasks = tasks.filter(task => task.id !== id);\n}\nfunction listTasks(status?: Status): Task[] {\n  return status ? tasks.filter(task => task.status === status) : [...tasks];\n}\nconst first = addTask({ title: \"Apprendre TypeScript\" });\naddTask({ title: \"Créer une API\" });\ncompleteTask(first.id);\nconsole.table(listTasks());\nconsole.table(listTasks(\"pending\"));\ndeleteTask(first.id);\nconsole.table(listTasks());\nexport {};"
      },
      {
        "type": "code",
        "code": "npx tsc\nnode dist/index.js"
      },
      {
        "type": "tip",
        "content": "Défi : ajoute une fonction updateTask, un compteur par statut et une interface HTML avec Vite. Les données de cette version console sont uniquement en mémoire."
      }
    ]
  },
  {
    "label": "Fiche mémo",
    "title": "Retrouver les syntaxes essentielles",
    "intro": "Réviser rapidement pendant le développement.",
    "blocks": [
      {
        "type": "code",
        "code": "let title: string = \"TS\";\nconst ids: number[] = [1, 2];\ntype Status = \"pending\" | \"done\";\ninterface Task { id: number; title: string; done?: boolean }\ntype CreateTask = Omit<Task, \"id\">;\ntype UpdateTask = Partial<CreateTask>;\nconst add = (a: number, b: number): number => a + b;\nfunction identity<T>(value: T): T { return value; }\nconst value: unknown = \"TS\";\nif (typeof value === \"string\") console.log(value);\nexport {};"
      },
      {
        "type": "heading",
        "content": "Commandes"
      },
      {
        "type": "code",
        "code": "npm install -D typescript\nnpx tsc --init\nnpx tsc --noEmit\nnpx tsc\nnpx tsc --watch"
      },
      {
        "type": "heading",
        "content": "Documentation officielle"
      },
      {
        "type": "text",
        "content": "[Handbook TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html) — [TSConfig](https://www.typescriptlang.org/tsconfig/) — [Playground](https://www.typescriptlang.org/play/)"
      }
    ]
  }
];
