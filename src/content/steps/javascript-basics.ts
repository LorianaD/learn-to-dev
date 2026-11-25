import type { CourseStep } from '../../types/course';

export const javascriptBasicsSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Découvrir JavaScript",
    "intro": "Comprendre le rôle du langage.",
    "blocks": [
      {
        "type": "heading",
        "content": "HTML, CSS et JavaScript"
      },
      {
        "type": "text",
        "content": "HTML structure la page, CSS la présente, JavaScript ajoute le comportement. Le navigateur exécute JavaScript ; Node.js permet aussi de l’exécuter hors du navigateur."
      },
      {
        "type": "code",
        "code": "console.log(\"Bonjour !\");\nconsole.log(2 + 3); // 5"
      },
      {
        "type": "heading",
        "content": "Premier script"
      },
      {
        "type": "text",
        "content": "Dans une page HTML, charge un fichier JavaScript avec defer pour attendre la lecture du HTML."
      },
      {
        "type": "code",
        "code": "<script src=\"app.js\" defer></script>"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ouvre la console du navigateur avec F12 et affiche ton prénom."
      }
    ]
  },
  {
    "label": "Installation",
    "title": "Créer et exécuter un premier projet",
    "intro": "Utiliser le terminal et le navigateur.",
    "blocks": [
      {
        "type": "heading",
        "content": "Installer Node.js"
      },
      {
        "type": "text",
        "content": "Installe la version LTS depuis [nodejs.org](https://nodejs.org/), puis ouvre un nouveau terminal."
      },
      {
        "type": "code",
        "code": "node -v\nnpm -v\nmkdir javascript-basics\ncd javascript-basics\nnpm init -y"
      },
      {
        "type": "heading",
        "content": "Exécuter un fichier"
      },
      {
        "type": "text",
        "content": "Crée app.js dans VS Code et écris le code suivant."
      },
      {
        "type": "code",
        "code": "console.log(\"Mon premier projet\");"
      },
      {
        "type": "heading",
        "content": "Lancer le script"
      },
      {
        "type": "text",
        "content": "Depuis le dossier du projet :"
      },
      {
        "type": "code",
        "code": "node app.js"
      },
      {
        "type": "heading",
        "content": "Créer un projet web avec Vite"
      },
      {
        "type": "text",
        "content": "Alternative pour les exercices DOM : crée ce projet dans un dossier parent distinct."
      },
      {
        "type": "code",
        "code": "npm create vite@latest javascript-web -- --template vanilla\ncd javascript-web\nnpm install\nnpm run dev"
      },
      {
        "type": "warning",
        "content": "Node.js ne fournit pas le DOM du navigateur : document et window ne sont pas disponibles par défaut."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Exécute un script avec Node puis ouvre le projet Vite à l’adresse affichée dans le terminal."
      }
    ]
  },
  {
    "label": "Variables",
    "title": "Déclarer des variables",
    "intro": "Choisir entre const, let et var.",
    "blocks": [
      {
        "type": "heading",
        "content": "Déclarations"
      },
      {
        "type": "text",
        "content": "const empêche la réaffectation, let l’autorise. var est une ancienne syntaxe à portée de fonction."
      },
      {
        "type": "code",
        "code": "const name = \"Alice\";\nlet age = 25;\nage += 1;\nconsole.log(name, age);"
      },
      {
        "type": "heading",
        "content": "Portée et mutation"
      },
      {
        "type": "text",
        "content": "let et const ont une portée de bloc. Un objet déclaré avec const reste modifiable."
      },
      {
        "type": "code",
        "code": "const user = { name: \"Alice\" };\nuser.name = \"Emma\";\nif (true) {\n  let message = \"Local\";\n  console.log(message);\n}\n// console.log(message); // ReferenceError"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Déclare un prix constant et une quantité modifiable, puis calcule le total."
      }
    ]
  },
  {
    "label": "Types de données",
    "title": "Comprendre les types JavaScript",
    "intro": "Identifier et convertir les valeurs.",
    "blocks": [
      {
        "type": "heading",
        "content": "Types primitifs"
      },
      {
        "type": "text",
        "content": "Les primitives sont string, number, boolean, undefined, null, bigint et symbol. Les tableaux et objets sont des objets."
      },
      {
        "type": "code",
        "code": "const name = \"Alice\";\nconst price = 12.5;\nconst active = true;\nlet missing;\nconst empty = null;\nconst big = 123n;\nconst key = Symbol(\"id\");\nconsole.log(typeof price); // number\nconsole.log(Array.isArray([])); // true"
      },
      {
        "type": "heading",
        "content": "Conversions"
      },
      {
        "type": "text",
        "content": "Les valeurs de formulaire sont généralement des chaînes. Convertis-les explicitement."
      },
      {
        "type": "code",
        "code": "const amount = Number(\"42\");\nconsole.log(amount + 1); // 43\nconsole.log(Number.isNaN(Number(\"abc\"))); // true\nconsole.log(String(42)); // \"42\"\nconsole.log(Boolean(\"false\")); // true"
      },
      {
        "type": "warning",
        "content": "typeof null renvoie object pour des raisons historiques. NaN est de type number."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Convertis \"15.50\" en nombre et calcule son double."
      }
    ]
  },
  {
    "label": "Opérateurs",
    "title": "Calculer et comparer",
    "intro": "Utiliser les opérateurs courants.",
    "blocks": [
      {
        "type": "heading",
        "content": "Calculs"
      },
      {
        "type": "text",
        "content": "Les opérateurs arithmétiques permettent de calculer et de mettre à jour des valeurs."
      },
      {
        "type": "code",
        "code": "let n = 10;\nn += 2;\nconsole.log(n - 3, n * 2, n / 2, n % 5, n ** 2);"
      },
      {
        "type": "heading",
        "content": "Comparaisons et logique"
      },
      {
        "type": "text",
        "content": "Privilégie === et !== pour éviter les conversions implicites."
      },
      {
        "type": "code",
        "code": "console.log(5 === \"5\"); // false\nconsole.log(5 == \"5\"); // true\nconst age = 20;\nconst active = true;\nconsole.log(age >= 18 && active);\nconsole.log(age < 18 || !active);"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Vérifie si un prix est compris entre 10 et 50 euros."
      }
    ]
  },
  {
    "label": "Conditions",
    "title": "Exécuter du code selon une condition",
    "intro": "Utiliser if, switch et le ternaire.",
    "blocks": [
      {
        "type": "heading",
        "content": "if / else"
      },
      {
        "type": "text",
        "content": "Une condition est évaluée comme vraie ou fausse."
      },
      {
        "type": "code",
        "code": "const score = 14;\nif (score >= 16) {\n  console.log(\"Très bien\");\n} else if (score >= 10) {\n  console.log(\"Admis\");\n} else {\n  console.log(\"Non admis\");\n}"
      },
      {
        "type": "heading",
        "content": "switch et ternaire"
      },
      {
        "type": "text",
        "content": "switch compare plusieurs valeurs ; le ternaire produit une valeur."
      },
      {
        "type": "code",
        "code": "const role = \"admin\";\nswitch (role) {\n  case \"admin\": console.log(\"Administration\"); break;\n  default: console.log(\"Accueil\");\n}\nconst label = role === \"admin\" ? \"Admin\" : \"Utilisateur\";"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Affiche un tarif réduit si un utilisateur a moins de 18 ans."
      }
    ]
  },
  {
    "label": "Boucles",
    "title": "Répéter des instructions",
    "intro": "Parcourir des collections.",
    "blocks": [
      {
        "type": "heading",
        "content": "for et while"
      },
      {
        "type": "text",
        "content": "for convient à un nombre connu d’itérations ; while répète tant que la condition est vraie."
      },
      {
        "type": "code",
        "code": "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}\nlet count = 3;\nwhile (count > 0) {\n  console.log(count--);\n}"
      },
      {
        "type": "heading",
        "content": "for...of et for...in"
      },
      {
        "type": "text",
        "content": "for...of parcourt les valeurs d’un iterable ; for...in parcourt les clés énumérables, y compris héritées."
      },
      {
        "type": "code",
        "code": "for (const name of [\"Alice\", \"Emma\"]) {\n  console.log(name);\n}\nconst user = { name: \"Alice\", age: 25 };\nfor (const key of Object.keys(user)) {\n  console.log(key, user[key]);\n}\nfor (const key in user) {\n  if (Object.hasOwn(user, key)) console.log(key);\n}"
      },
      {
        "type": "warning",
        "content": "Évite for...in pour parcourir les valeurs d’un tableau. Pense à la condition d’arrêt de while."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Affiche les nombres pairs de 0 à 20."
      }
    ]
  },
  {
    "label": "Fonctions",
    "title": "Créer des fonctions réutilisables",
    "intro": "Paramètres, retours et callbacks.",
    "blocks": [
      {
        "type": "heading",
        "content": "Fonctions classiques et fléchées"
      },
      {
        "type": "text",
        "content": "return renvoie une valeur. Un paramètre peut avoir une valeur par défaut."
      },
      {
        "type": "code",
        "code": "function greet(name = \"visiteur\") {\n  return `Bonjour ${name}`;\n}\nconst double = n => n * 2;\nconsole.log(greet(), double(4));"
      },
      {
        "type": "heading",
        "content": "Callbacks"
      },
      {
        "type": "text",
        "content": "Une fonction peut recevoir une autre fonction en paramètre."
      },
      {
        "type": "code",
        "code": "function calculate(a, b, operation) {\n  return operation(a, b);\n}\nconsole.log(calculate(2, 3, (a, b) => a + b));"
      },
      {
        "type": "warning",
        "content": "Les fonctions fléchées ne possèdent pas leur propre this."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée une fonction calculant un prix TTC avec un taux par défaut de 20 %."
      }
    ]
  },
  {
    "label": "Chaînes de caractères",
    "title": "Manipuler du texte",
    "intro": "Utiliser les méthodes de string.",
    "blocks": [
      {
        "type": "heading",
        "content": "Méthodes utiles"
      },
      {
        "type": "text",
        "content": "Les chaînes sont immuables : les méthodes retournent une nouvelle valeur."
      },
      {
        "type": "code",
        "code": "const text = \"  Bonjour JavaScript  \";\nconsole.log(text.trim());\nconsole.log(text.toLowerCase());\nconsole.log(text.includes(\"Java\"));\nconsole.log(text.trim().slice(0, 7));\nconsole.log(text.replace(\"JavaScript\", \"Emma\"));\nconsole.log(\"a,b,c\".split(\",\"));"
      },
      {
        "type": "heading",
        "content": "Template literals"
      },
      {
        "type": "text",
        "content": "Les accents graves permettent d’insérer des expressions."
      },
      {
        "type": "code",
        "code": "const name = \"Alice\";\nconst age = 25;\nconsole.log(`${name} a ${age} ans.`);"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Nettoie une adresse e-mail avec trim et toLowerCase."
      }
    ]
  },
  {
    "label": "Tableaux",
    "title": "Créer et modifier des tableaux",
    "intro": "Manipuler une liste ordonnée.",
    "blocks": [
      {
        "type": "heading",
        "content": "Accès et modification"
      },
      {
        "type": "text",
        "content": "Les indices commencent à zéro."
      },
      {
        "type": "code",
        "code": "const fruits = [\"pomme\", \"poire\"];\nfruits.push(\"orange\");\nfruits[0] = \"banane\";\nconsole.log(fruits.length, fruits[0]);\nfruits.pop();\nfruits.unshift(\"kiwi\");\nfruits.shift();"
      },
      {
        "type": "heading",
        "content": "slice et splice"
      },
      {
        "type": "text",
        "content": "slice copie une portion ; splice modifie le tableau."
      },
      {
        "type": "code",
        "code": "const items = [\"a\", \"b\", \"c\"];\nconst copy = items.slice(0, 2);\nitems.splice(1, 1, \"d\");\nconsole.log(copy, items);"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée une liste de courses, ajoute deux produits et supprime le premier."
      }
    ]
  },
  {
    "label": "Méthodes de tableaux",
    "title": "Transformer et rechercher des données",
    "intro": "Maîtriser les méthodes utilisées dans les frameworks.",
    "blocks": [
      {
        "type": "heading",
        "content": "map, filter, find"
      },
      {
        "type": "text",
        "content": "map transforme, filter sélectionne, find retourne le premier élément correspondant ou undefined."
      },
      {
        "type": "code",
        "code": "const products = [{ id: 1, price: 10 }, { id: 2, price: 25 }];\nconsole.log(products.map(p => p.price));\nconsole.log(products.filter(p => p.price > 15));\nconsole.log(products.find(p => p.id === 2));"
      },
      {
        "type": "heading",
        "content": "reduce, forEach, some, every"
      },
      {
        "type": "text",
        "content": "reduce accumule une valeur ; forEach exécute une action ; some et every testent des conditions."
      },
      {
        "type": "code",
        "code": "const numbers = [1, 2, 3];\nconsole.log(numbers.reduce((sum, n) => sum + n, 0));\nnumbers.forEach(n => console.log(n));\nconsole.log(numbers.some(n => n > 2));\nconsole.log(numbers.every(n => n > 0));"
      },
      {
        "type": "heading",
        "content": "Trier"
      },
      {
        "type": "text",
        "content": "sort modifie le tableau ; copie-le si nécessaire."
      },
      {
        "type": "code",
        "code": "const values = [10, 2, 30];\nconst sorted = [...values].sort((a, b) => a - b);\nconsole.log(sorted);"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Filtre les produits à moins de 20 euros et calcule leur total."
      }
    ]
  },
  {
    "label": "Objets",
    "title": "Manipuler des objets",
    "intro": "Regrouper des propriétés et des méthodes.",
    "blocks": [
      {
        "type": "heading",
        "content": "CRUD sur un objet"
      },
      {
        "type": "text",
        "content": "Accède aux propriétés par point ou crochets."
      },
      {
        "type": "code",
        "code": "const user = { id: 1, name: \"Alice\" };\nuser.email = \"alice@example.com\";\nuser[\"name\"] = \"Emma\";\ndelete user.email;\nconsole.log(Object.keys(user));\nconsole.log(Object.values(user));\nconsole.log(Object.entries(user));"
      },
      {
        "type": "heading",
        "content": "Méthodes et this"
      },
      {
        "type": "text",
        "content": "Dans cet appel de méthode, this désigne l’objet user."
      },
      {
        "type": "code",
        "code": "const user = {\n  name: \"Alice\",\n  greet() { return `Bonjour ${this.name}`; }\n};\nconsole.log(user.greet());"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée un objet produit avec une méthode calculant son prix TTC."
      }
    ]
  },
  {
    "label": "Syntaxe moderne",
    "title": "Utiliser les syntaxes modernes",
    "intro": "Simplifier la manipulation des données.",
    "blocks": [
      {
        "type": "heading",
        "content": "Destructuring, spread et rest"
      },
      {
        "type": "text",
        "content": "Le destructuring extrait des valeurs ; spread déplie ; rest rassemble."
      },
      {
        "type": "code",
        "code": "const user = { id: 1, name: \"Alice\" };\nconst { id, name } = user;\nconst updated = { ...user, name: \"Emma\" };\nconst [first, ...others] = [1, 2, 3];\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}"
      },
      {
        "type": "heading",
        "content": "Optional chaining et nullish coalescing"
      },
      {
        "type": "text",
        "content": "?. évite un accès sur null ou undefined ; ?? fournit un défaut uniquement pour ces deux valeurs."
      },
      {
        "type": "code",
        "code": "const user = { profile: null };\nconsole.log(user.profile?.city ?? \"Inconnue\");\nconsole.log(0 ?? 10); // 0\nconsole.log(0 || 10); // 10"
      },
      {
        "type": "warning",
        "content": "Le spread réalise une copie superficielle : les objets imbriqués restent partagés."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Copie un objet sans modifier l’original et remplace une propriété."
      }
    ]
  },
  {
    "label": "DOM",
    "title": "Manipuler le document HTML",
    "intro": "Sélectionner et créer des éléments dans le navigateur.",
    "blocks": [
      {
        "type": "heading",
        "content": "HTML de départ"
      },
      {
        "type": "text",
        "content": "Utilise le projet Vite ou une page HTML avec app.js chargé en defer."
      },
      {
        "type": "code",
        "code": "<h1 id=\"title\">Bonjour</h1>\n<ul id=\"list\"></ul>"
      },
      {
        "type": "heading",
        "content": "Sélection et modification"
      },
      {
        "type": "text",
        "content": "querySelector retourne null si aucun élément ne correspond."
      },
      {
        "type": "code",
        "code": "const title = document.querySelector(\"#title\");\nif (title) {\n  title.textContent = \"Mes tâches\";\n  title.classList.add(\"active\");\n}\nconst list = document.querySelector(\"#list\");\nconst li = document.createElement(\"li\");\nli.textContent = \"Apprendre JavaScript\";\nlist?.append(li);\n// li.remove();"
      },
      {
        "type": "warning",
        "content": "Utilise textContent pour les données utilisateur plutôt que innerHTML, afin d’éviter les injections HTML."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute trois éléments à la liste à partir d’un tableau."
      }
    ]
  },
  {
    "label": "Événements",
    "title": "Réagir aux interactions",
    "intro": "Gérer les clics et les formulaires.",
    "blocks": [
      {
        "type": "heading",
        "content": "HTML de départ"
      },
      {
        "type": "text",
        "content": "Crée un formulaire et un espace de résultat."
      },
      {
        "type": "code",
        "code": "<form id=\"form\">\n  <input id=\"name\" required>\n  <button>Envoyer</button>\n</form>\n<p id=\"result\"></p>"
      },
      {
        "type": "heading",
        "content": "Écouter submit"
      },
      {
        "type": "text",
        "content": "preventDefault empêche la navigation native du formulaire."
      },
      {
        "type": "code",
        "code": "const form = document.querySelector(\"#form\");\nform.addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const name = document.querySelector(\"#name\").value.trim();\n  if (!name) return;\n  document.querySelector(\"#result\").textContent = `Bonjour ${name}`;\n  form.reset();\n});"
      },
      {
        "type": "heading",
        "content": "Autres événements"
      },
      {
        "type": "text",
        "content": "input se déclenche pendant la saisie ; click lors de l’activation."
      },
      {
        "type": "code",
        "code": "document.querySelector(\"#name\").addEventListener(\"input\", event => {\n  console.log(event.target.value);\n});"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute un compteur de caractères au formulaire."
      }
    ]
  },
  {
    "label": "Classes et POO",
    "title": "Découvrir les classes",
    "intro": "Créer des instances et utiliser l’héritage.",
    "blocks": [
      {
        "type": "heading",
        "content": "Classe et constructeur"
      },
      {
        "type": "text",
        "content": "new crée une instance. Le constructeur initialise ses propriétés."
      },
      {
        "type": "code",
        "code": "class User {\n  constructor(name) { this.name = name; }\n  greet() { return `Bonjour ${this.name}`; }\n}\nconst user = new User(\"Alice\");\nconsole.log(user.greet());"
      },
      {
        "type": "heading",
        "content": "Héritage et champ privé"
      },
      {
        "type": "text",
        "content": "extends hérite d’une classe ; super appelle son constructeur ; # déclare un champ privé."
      },
      {
        "type": "code",
        "code": "class Admin extends User {\n  #role = \"admin\";\n  constructor(name) { super(name); }\n  getRole() { return this.#role; }\n}\nconsole.log(new Admin(\"Emma\").getRole());"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée une classe Product avec une méthode calculant le prix TTC."
      }
    ]
  },
  {
    "label": "Modules",
    "title": "Organiser le code en modules",
    "intro": "Séparer les responsabilités.",
    "blocks": [
      {
        "type": "heading",
        "content": "Exports"
      },
      {
        "type": "text",
        "content": "Crée utils.js avec un export nommé et un export par défaut."
      },
      {
        "type": "code",
        "code": "export function double(n) { return n * 2; }\nexport default function greet(name) { return `Bonjour ${name}`; }"
      },
      {
        "type": "heading",
        "content": "Imports"
      },
      {
        "type": "text",
        "content": "Dans app.js, importe les fonctions."
      },
      {
        "type": "code",
        "code": "import greet, { double } from \"./utils.js\";\nconsole.log(greet(\"Alice\"), double(5));"
      },
      {
        "type": "heading",
        "content": "Exécution"
      },
      {
        "type": "text",
        "content": "Dans le navigateur, utilise un script module via un serveur local (Vite par exemple). Pour Node, configure type: module dans package.json."
      },
      {
        "type": "code",
        "code": "<script type=\"module\" src=\"./app.js\"></script>\n\n# Terminal (projet Node)\nnpm pkg set type=module\nnode app.js"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Déplace tes fonctions de calcul dans un module séparé."
      }
    ]
  },
  {
    "label": "Asynchrone",
    "title": "Comprendre les promesses",
    "intro": "Attendre une opération sans bloquer le programme.",
    "blocks": [
      {
        "type": "heading",
        "content": "Promise"
      },
      {
        "type": "text",
        "content": "Une promesse peut être en attente, tenue ou rejetée."
      },
      {
        "type": "code",
        "code": "function wait(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\nwait(500).then(() => console.log(\"Terminé\"));\nconsole.log(\"Début\");"
      },
      {
        "type": "heading",
        "content": "async / await"
      },
      {
        "type": "text",
        "content": "Une fonction async retourne toujours une promesse. await suspend la fonction, pas tout le programme."
      },
      {
        "type": "code",
        "code": "async function run() {\n  await wait(500);\n  return \"OK\";\n}\nrun().then(console.log).catch(console.error);"
      },
      {
        "type": "heading",
        "content": "Opérations parallèles"
      },
      {
        "type": "text",
        "content": "Promise.all attend toutes les promesses et rejette si l’une échoue."
      },
      {
        "type": "code",
        "code": "Promise.all([wait(200), wait(400)]).then(() => console.log(\"Fini\"));"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée une fonction asynchrone affichant un message après une seconde."
      }
    ]
  },
  {
    "label": "API REST",
    "title": "Consommer une API avec Fetch",
    "intro": "Lire et envoyer des données JSON.",
    "blocks": [
      {
        "type": "heading",
        "content": "GET"
      },
      {
        "type": "text",
        "content": "Exemple avec JSONPlaceholder, une API de démonstration nécessitant Internet."
      },
      {
        "type": "code",
        "code": "async function getPosts() {\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}\ngetPosts().then(console.log).catch(console.error);"
      },
      {
        "type": "heading",
        "content": "POST"
      },
      {
        "type": "text",
        "content": "Envoie un objet sérialisé en JSON. Cette API simule la création sans persistance réelle."
      },
      {
        "type": "code",
        "code": "async function createPost(title) {\n  const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ title, body: \"Exemple\", userId: 1 })\n  });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  return response.json();\n}\ncreatePost(\"Bonjour\").then(console.log).catch(console.error);"
      },
      {
        "type": "warning",
        "content": "fetch ne rejette pas automatiquement les réponses HTTP 404 ou 500. Vérifie response.ok. PUT remplace généralement une ressource, PATCH la modifie partiellement et DELETE la supprime."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Récupère les utilisateurs sur /users et affiche leurs noms."
      }
    ]
  },
  {
    "label": "Erreurs et stockage",
    "title": "Déboguer et conserver des données",
    "intro": "Gérer les exceptions et localStorage.",
    "blocks": [
      {
        "type": "heading",
        "content": "try / catch / finally"
      },
      {
        "type": "text",
        "content": "throw déclenche une exception ; finally s’exécute même en cas d’erreur."
      },
      {
        "type": "code",
        "code": "try {\n  const data = JSON.parse(\"invalid\");\n  console.log(data);\n} catch (error) {\n  console.error(error.message);\n} finally {\n  console.log(\"Fin\");\n}"
      },
      {
        "type": "heading",
        "content": "Débogage"
      },
      {
        "type": "text",
        "content": "Utilise la console et les points d’arrêt dans les outils développeur."
      },
      {
        "type": "code",
        "code": "const user = { id: 1, name: \"Alice\" };\nconsole.table([user]);\n// debugger;"
      },
      {
        "type": "heading",
        "content": "localStorage"
      },
      {
        "type": "text",
        "content": "Dans le navigateur, les valeurs sont stockées sous forme de chaînes."
      },
      {
        "type": "code",
        "code": "localStorage.setItem(\"tasks\", JSON.stringify([\"Apprendre JS\"]));\nconst tasks = JSON.parse(localStorage.getItem(\"tasks\") ?? \"[]\");\nconsole.log(tasks);\nlocalStorage.removeItem(\"tasks\");"
      },
      {
        "type": "warning",
        "content": "Ne stocke pas de secrets dans localStorage. JSON.parse peut échouer et le stockage peut être indisponible."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Enregistre une préférence de thème et relis-la après rechargement."
      }
    ]
  },
  {
    "label": "Projet pratique",
    "title": "Construire un gestionnaire de tâches",
    "intro": "Mettre en pratique le DOM, les tableaux et le stockage.",
    "blocks": [
      {
        "type": "heading",
        "content": "Préparer le projet"
      },
      {
        "type": "text",
        "content": "Crée un projet Vite vanilla comme au chapitre Installation. Remplace le contenu de index.html par une page HTML valide contenant ce fragment dans body. Crée app.js à la racine."
      },
      {
        "type": "code",
        "code": "npm create vite@latest task-manager -- --template vanilla\ncd task-manager\nnpm install\nnpm run dev"
      },
      {
        "type": "heading",
        "content": "Interface HTML"
      },
      {
        "type": "text",
        "content": "Le formulaire ajoute une tâche, le filtre sélectionne les tâches et la liste affiche les résultats."
      },
      {
        "type": "code",
        "code": "<form id=\"task-form\">\n  <label for=\"task-title\">Nouvelle tâche</label>\n  <input id=\"task-title\" required maxlength=\"100\">\n  <button>Ajouter</button>\n</form>\n<label for=\"filter\">Filtrer</label>\n<select id=\"filter\">\n  <option value=\"all\">Toutes</option>\n  <option value=\"todo\">À faire</option>\n  <option value=\"done\">Terminées</option>\n</select>\n<p id=\"message\" role=\"status\"></p>\n<ul id=\"tasks\"></ul>\n<script type=\"module\" src=\"./app.js\"></script>"
      },
      {
        "type": "heading",
        "content": "Correction JavaScript complète"
      },
      {
        "type": "text",
        "content": "Les données restent en mémoire et sont sauvegardées dans localStorage. crypto.randomUUID fonctionne sur localhost ou HTTPS."
      },
      {
        "type": "code",
        "code": "const form = document.querySelector(\"#task-form\");\nconst input = document.querySelector(\"#task-title\");\nconst list = document.querySelector(\"#tasks\");\nconst filter = document.querySelector(\"#filter\");\nconst message = document.querySelector(\"#message\");\nlet tasks = [];\ntry {\n  const saved = JSON.parse(localStorage.getItem(\"tasks\") ?? \"[]\");\n  if (Array.isArray(saved)) {\n    tasks = saved.filter(t => t && typeof t.id === \"string\" &&\n      typeof t.title === \"string\" && typeof t.done === \"boolean\");\n  }\n} catch {\n  message.textContent = \"Impossible de lire les tâches.\";\n}\nfunction save() {\n  try {\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n  } catch {\n    message.textContent = \"Impossible de sauvegarder les tâches.\";\n  }\n}\nfunction render() {\n  list.replaceChildren();\n  const visible = tasks.filter(t => filter.value === \"all\" ||\n    (filter.value === \"done\" ? t.done : !t.done));\n  for (const task of visible) {\n    const li = document.createElement(\"li\");\n    const label = document.createElement(\"span\");\n    label.textContent = task.title + (task.done ? \" (terminée)\" : \"\");\n    const toggle = document.createElement(\"button\");\n    toggle.textContent = task.done ? \"Réouvrir\" : \"Terminer\";\n    toggle.addEventListener(\"click\", () => {\n      tasks = tasks.map(t => t.id === task.id ? { ...t, done: !t.done } : t);\n      save(); render();\n    });\n    const remove = document.createElement(\"button\");\n    remove.textContent = \"Supprimer\";\n    remove.addEventListener(\"click\", () => {\n      tasks = tasks.filter(t => t.id !== task.id);\n      save(); render();\n    });\n    li.append(label, toggle, remove);\n    list.append(li);\n  }\n}\nform.addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const title = input.value.trim();\n  if (!title) return;\n  tasks.push({ id: crypto.randomUUID(), title, done: false });\n  save(); render(); form.reset();\n});\nfilter.addEventListener(\"change\", render);\nrender();"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute trois tâches, termine-en une, filtre, recharge la page et supprime une tâche. Puis ajoute un compteur de tâches restantes."
      }
    ]
  },
  {
    "label": "Fiche mémo",
    "title": "Retrouver rapidement les syntaxes",
    "intro": "Réviser les commandes et méthodes essentielles.",
    "blocks": [
      {
        "type": "heading",
        "content": "Variables et fonctions"
      },
      {
        "type": "text",
        "content": "Les syntaxes à retenir."
      },
      {
        "type": "code",
        "code": "const name = \"Alice\";\nlet count = 0;\nconst double = n => n * 2;\nconst message = `${name}: ${count}`;"
      },
      {
        "type": "heading",
        "content": "Tableaux et objets"
      },
      {
        "type": "text",
        "content": "Transformer les données sans modifier la source lorsque possible."
      },
      {
        "type": "code",
        "code": "const items = [{ id: 1, done: false }];\nconst ids = items.map(t => t.id);\nconst pending = items.filter(t => !t.done);\nconst task = items.find(t => t.id === 1);\nconst updated = { ...task, done: true };"
      },
      {
        "type": "heading",
        "content": "DOM et API"
      },
      {
        "type": "text",
        "content": "Sélection, événements et requêtes."
      },
      {
        "type": "code",
        "code": "// Navigateur\ndocument.querySelector(\"button\")?.addEventListener(\"click\", () => console.log(\"clic\"));\nasync function load(url) {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  return res.json();\n}"
      },
      {
        "type": "heading",
        "content": "Commandes et ressources"
      },
      {
        "type": "text",
        "content": "Documentation : [Guide JavaScript MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide) et [Node.js](https://nodejs.org/)."
      },
      {
        "type": "code",
        "code": "node -v\nnode app.js\nnpm install\nnpm run dev"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Refais le projet sans regarder la correction, puis compare tes solutions."
      }
    ]
  }
];
