import type { CourseStep } from '../../types/course';
import {
  angular01Schema,
  angular01Demo,
  angular02Schema,
  angular02Demo,
  angular03Schema,
  angular03Demo,
  angular04Schema,
  angular04Demo,
  angular05Schema,
  angular05Demo,
  angular06Schema,
  angular06Demo,
  angular07Schema,
  angular07Demo,
  angular08Schema,
  angular08Demo,
  angular09Schema,
  angular09Demo,
  angular10Schema,
  angular10Demo,
  angular11Schema,
  angular11Demo,
  angular12Schema,
  angular12Demo,
  angular13Schema,
  angular13Demo,
  angular14Schema,
  angular14Demo,
  angular15Schema,
  angular15Demo,
  angular16Schema,
  angular16Demo,
  angular17Schema,
  angular17Demo,
  angular18Schema,
  angular18Demo
} from '../../assets/images/courses/angular';

export const angularTypescriptSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Comprendre Angular",
    "intro": "Découvrir un framework frontend structuré.",
    "blocks": [
      {
        "type": "image",
        "src": angular01Schema,
        "alt": "Découverte — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "heading",
        "content": "Angular, React et Vue.js"
      },
      {
        "type": "text",
        "content": "Angular fournit un routeur, des formulaires, un client HTTP et une injection de dépendances. React est une bibliothèque UI ; Vue propose un framework progressif. Angular utilise principalement TypeScript et des templates HTML."
      },
      {
        "type": "code",
        "code": "React : JSX + props + hooks\nVue : template + ref + computed\nAngular : template + input + signal + services"
      },
      {
        "type": "text",
        "content": "AngularJS (1.x) est différent d’Angular moderne. Un composant standalone ne nécessite pas de NgModule."
      },
      {
        "type": "tip",
        "content": "Projet fil rouge : TaskBoard, une application de gestion de tâches. Documentation : [Angular](https://angular.dev/overview)."
      },
      {
        "type": "image",
        "src": angular01Demo,
        "alt": "Découverte — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : TaskBoard — architecture. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Installation",
    "title": "Installer Angular CLI",
    "intro": "Préparer Windows, macOS ou Linux.",
    "blocks": [
      {
        "type": "image",
        "src": angular02Schema,
        "alt": "Installation — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "heading",
        "content": "Prérequis"
      },
      {
        "type": "text",
        "content": "Installe une version de Node.js compatible avec la version Angular choisie. Ce cours fixe Angular 22 et utilise une version de Node compatible selon la matrice officielle. Consulte [la matrice de compatibilité](https://angular.dev/reference/versions)."
      },
      {
        "type": "code",
        "code": "node -v\nnpm -v\nnpm install -g @angular/cli@22\nng version"
      },
      {
        "type": "heading",
        "content": "Sans installation globale"
      },
      {
        "type": "code",
        "code": "npx --package @angular/cli@22 ng version"
      },
      {
        "type": "warning",
        "content": "Si PowerShell bloque ng.ps1, utilise ng.cmd ou le terminal CMD. Ne désactive pas globalement les protections PowerShell."
      },
      {
        "type": "tip",
        "content": "Vérifie la version de Node et de la CLI avant de poursuivre."
      },
      {
        "type": "image",
        "src": angular02Demo,
        "alt": "Installation — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : ng version : vérifier Angular et Node. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Création du projet",
    "title": "Créer et lancer un projet Angular",
    "intro": "Utiliser la CLI et comprendre les fichiers.",
    "blocks": [
      {
        "type": "image",
        "src": angular03Schema,
        "alt": "Création du projet — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "heading",
        "content": "Dans le terminal"
      },
      {
        "type": "code",
        "code": "ng new taskboard --routing --style=css --standalone --ssr=false --file-name-style-guide=2016\ncd taskboard\nng serve --open"
      },
      {
        "type": "text",
        "content": "Ouvre http://localhost:4200. Les exemples suivent la convention de fichiers *.component.ts, sélectionnée explicitement ci-dessus."
      },
      {
        "type": "code",
        "code": "src/\n  main.ts\n  styles.css\n  app/\n    app.component.ts\n    app.component.html\n    app.component.css\n    app.config.ts\n    app.routes.ts\nangular.json\npackage.json\ntsconfig.json"
      },
      {
        "type": "text",
        "content": "main.ts initialise Angular. app.config.ts configure les providers. app.routes.ts associe les URLs aux pages. angular.json configure les commandes de build et de test."
      },
      {
        "type": "code",
        "code": "ng generate component features/tasks/task-list\nng generate service core/services/task\nng generate interface core/models/task\nng build"
      },
      {
        "type": "tip",
        "content": "Arrête le serveur avec Ctrl+C. Relance-le depuis le dossier taskboard."
      },
      {
        "type": "heading",
        "content": "Comprendre le démarrage"
      },
      {
        "type": "code",
        "code": "// src/main.ts\nimport { bootstrapApplication } from '@angular/platform-browser';\nimport { appConfig } from './app/app.config';\nimport { App } from './app/app.component';\nbootstrapApplication(App, appConfig).catch(console.error);"
      },
      {
        "type": "text",
        "content": "index.html contient app-root. main.ts démarre App avec appConfig. Le sélecteur app-root relie la classe au DOM. Ne crée pas un deuxième projet si TaskBoard existe déjà. Les noms exportés par la CLI peuvent varier : vérifie les fichiers générés."
      },
      {
        "type": "tip",
        "content": "Résultat : la page initiale Angular apparaît sur localhost:4200. Garde le serveur ouvert et utilise un deuxième terminal pour les commandes."
      },
      {
        "type": "image",
        "src": angular03Demo,
        "alt": "Création du projet — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : localhost:4200 — page initiale. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Composants",
    "title": "Créer un composant réutilisable",
    "intro": "Séparer logique, présentation et styles.",
    "blocks": [
      {
        "type": "image",
        "src": angular04Schema,
        "alt": "Composants — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "heading",
        "content": "Créer le composant depuis taskboard"
      },
      {
        "type": "code",
        "code": "ng g c shared/components/header"
      },
      {
        "type": "text",
        "content": "La CLI crée quatre fichiers : TypeScript (logique), HTML (template), CSS (styles locaux) et spec.ts (tests). Vérifie le nom de la classe exportée ; ici Header. Si la CLI utilise un autre nom, adapte les imports et les tests."
      },
      {
        "type": "heading",
        "content": "src/app/shared/components/header/header.component.ts"
      },
      {
        "type": "code",
        "code": "import { Component } from '@angular/core';\n@Component({\n  selector: 'app-header',\n  standalone: true,\n  templateUrl: './header.component.html',\n  styleUrl: './header.component.css'\n})\nexport class Header { title = 'TaskBoard'; }"
      },
      {
        "type": "text",
        "content": "@Component est un décorateur : il décrit le composant. selector définit sa balise HTML ; templateUrl et styleUrl pointent vers des fichiers voisins. standalone permet de l’importer directement."
      },
      {
        "type": "heading",
        "content": "header.component.html"
      },
      {
        "type": "code",
        "code": "<header><h1>{{ title }}</h1></header>"
      },
      {
        "type": "heading",
        "content": "header.component.css"
      },
      {
        "type": "code",
        "code": "header { padding: 16px 24px; background: #1e293b; color: white; }\nh1 { margin: 0; }"
      },
      {
        "type": "heading",
        "content": "src/app/app.component.ts — remplacer le contenu"
      },
      {
        "type": "code",
        "code": "import { Component } from '@angular/core';\nimport { Header } from './shared/components/header/header.component';\n@Component({\n  selector: 'app-root',\n  imports: [Header],\n  templateUrl: './app.component.html',\n  styleUrl: './app.component.css'\n})\nexport class App {}"
      },
      {
        "type": "text",
        "content": "L’import TypeScript rend la classe disponible ; imports dans @Component rend son sélecteur utilisable dans le HTML. Les deux sont nécessaires. Conserve le nom App utilisé dans main.ts."
      },
      {
        "type": "heading",
        "content": "src/app/app.component.html — remplacer le contenu"
      },
      {
        "type": "code",
        "code": "<app-header></app-header>\n<main><h1>Bienvenue sur TaskBoard</h1></main>"
      },
      {
        "type": "warning",
        "content": "Une page blanche ? Vérifie le terminal ng serve, la console du navigateur, le contenu de app.component.html et les deux imports. Le DOM doit contenir app-root puis app-header."
      },
      {
        "type": "tip",
        "content": "Exercice : change title dans Header et observe le résultat sans recharger manuellement."
      },
      {
        "type": "image",
        "src": angular04Demo,
        "alt": "Composants — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : TaskBoard | Bienvenue sur TaskBoard. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Templates",
    "title": "Maîtriser le data binding",
    "intro": "Relier les propriétés et événements au HTML.",
    "blocks": [
      {
        "type": "image",
        "src": angular05Schema,
        "alt": "Templates — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Crée le compteur avec ng g c shared/components/counter. Remplace le fichier counter.component.ts par le code ci-dessous (template intégré). Importe CounterComponent dans app.component.ts et ajoute-le à imports, puis ajoute <app-counter></app-counter> dans app.component.html. Si tu renommes la classe générée, adapte aussi son spec.ts."
      },
      {
        "type": "heading",
        "content": "Exemple isolé : composant compteur"
      },
      {
        "type": "code",
        "code": "import { Component, signal } from '@angular/core';\n@Component({\n  selector: 'app-counter',\n  template: `\n    <h2>{{ title }}</h2>\n    <p>{{ count() }}</p>\n    <button (click)=\"increment()\">+</button>\n    <button [disabled]=\"count() === 0\" (click)=\"decrement()\">-</button>\n    <p [class.active]=\"count() > 0\">Compteur</p>\n  `\n})\nexport class CounterComponent {\n  title = 'Compteur';\n  count = signal(0);\n  increment() { this.count.update(n => n + 1); }\n  decrement() { this.count.update(n => Math.max(0, n - 1)); }\n}"
      },
      {
        "type": "text",
        "content": "{{ }} affiche une valeur ; [ ] lie une propriété ; ( ) écoute un événement ; [( )] réalise une liaison bidirectionnelle avec une directive adaptée."
      },
      {
        "type": "tip",
        "content": "Importe CounterComponent dans le composant racine et ajoute <app-counter>."
      },
      {
        "type": "image",
        "src": angular05Demo,
        "alt": "Templates — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Compteur : 1 | + | −. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Directives",
    "title": "Afficher des listes et conditions",
    "intro": "Utiliser le contrôle de flux et les pipes.",
    "blocks": [
      {
        "type": "image",
        "src": angular06Schema,
        "alt": "Directives — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Travaille dans features/tasks/task-list. Les propriétés vont dans la classe TaskListComponent, les blocs @if et @for dans task-list.component.html. Importe TaskListComponent dans App et ajoute son sélecteur au HTML pour le tester."
      },
      {
        "type": "code",
        "code": "// Propriétés dans un composant\ntasks = [{ id: 1, title: 'Apprendre Angular', completed: false }];\nstatus = 'ready';"
      },
      {
        "type": "code",
        "code": " @if (tasks.length > 0) {\n  <ul>\n    @for (task of tasks; track task.id) {\n      <li>{{ task.title }} — {{ task.completed ? \"Terminée\" : \"À faire\" }}</li>\n    }\n  </ul>\n} @else {\n  <p>Aucune tâche</p>\n}\n@switch (status) {\n  @case (\"ready\") { <p>Prêt</p> }\n  @default { <p>En attente</p> }\n}"
      },
      {
        "type": "text",
        "content": "track identifie chaque élément. Dans les anciens projets, tu rencontreras *ngIf et *ngFor avec CommonModule. Les blocs modernes ne nécessitent pas cet import."
      },
      {
        "type": "heading",
        "content": "Pipes et directives"
      },
      {
        "type": "code",
        "code": "// Ajouter DatePipe et UpperCasePipe aux imports du composant\nimport { DatePipe, UpperCasePipe } from '@angular/common';"
      },
      {
        "type": "code",
        "code": "{{ \"angular\" | uppercase }}\n{{ today | date:\"dd/MM/yyyy\" }}"
      },
      {
        "type": "text",
        "content": "Déclare today = new Date() dans la classe. Un pipe transforme l’affichage ; une directive modifie le comportement ou la présentation d’un élément."
      },
      {
        "type": "tip",
        "content": "Vide le tableau puis vérifie l’état vide."
      },
      {
        "type": "heading",
        "content": "src/app/features/tasks/task-list/task-list.component.ts — version complète"
      },
      {
        "type": "code",
        "code": "import { Component, signal } from '@angular/core';\nimport { DatePipe, UpperCasePipe } from '@angular/common';\n@Component({selector:'app-task-list', imports:[DatePipe, UpperCasePipe], templateUrl:'./task-list.component.html'})\nexport class TaskListComponent {\n tasks = [{id:1,title:'Apprendre Angular',completed:false}];\n status = 'ready';\n today = new Date();\n}"
      },
      {
        "type": "image",
        "src": angular06Demo,
        "alt": "Directives — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Apprendre Angular — À faire. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Réactivité",
    "title": "Utiliser les Signals",
    "intro": "Gérer un état et ses valeurs dérivées.",
    "blocks": [
      {
        "type": "image",
        "src": angular07Schema,
        "alt": "Réactivité — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Reprends CounterComponent : remplace ses propriétés et méthodes par celles ci-dessous, puis adapte son template. Un signal se lit avec (), set remplace la valeur et update calcule la suivante. computed dérive une valeur ; effect sert aux effets externes, pas à recopier un état."
      },
      {
        "type": "code",
        "code": "import { signal, computed, effect } from '@angular/core';\n\n// Dans la classe d’un composant\ncount = signal(0);\ndouble = computed(() => this.count() * 2);\nconstructor() {\n  effect(() => console.log(this.count()));\n}\nincrement() { this.count.update(n => n + 1); }\nreset() { this.count.set(0); }"
      },
      {
        "type": "code",
        "code": "<p>{{ count() }} / {{ double() }}</p>\n<button (click)=\"increment()\">+</button>"
      },
      {
        "type": "text",
        "content": "signal conserve un état ; computed calcule une valeur dérivée ; effect déclenche un effet externe. Utilise computed plutôt que effect pour dériver un état."
      },
      {
        "type": "warning",
        "content": "Pour modifier un tableau signal, utilise update avec un nouveau tableau plutôt que push sur la valeur existante."
      },
      {
        "type": "tip",
        "content": "Ajoute un computed qui indique si le compteur est pair."
      },
      {
        "type": "image",
        "src": angular07Demo,
        "alt": "Réactivité — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Compteur : 2 | Double : 4. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Communication",
    "title": "Communiquer entre composants",
    "intro": "Transmettre les données au composant enfant et remonter un événement.",
    "blocks": [
      {
        "type": "image",
        "src": angular08Schema,
        "alt": "Communication — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Crée ng g c shared/components/task-card. Le parent TaskListComponent possède le tableau ; l’enfant reçoit un titre et émet un événement. Importe TaskCardComponent dans le parent, pas seulement dans App."
      },
      {
        "type": "heading",
        "content": "task-card.component.ts"
      },
      {
        "type": "code",
        "code": "import { Component, input, output } from '@angular/core';\n@Component({\n  selector: 'app-task-card',\n  template: `<p>{{ title() }}</p><button (click)=\"remove.emit()\">Supprimer</button>`\n})\nexport class TaskCardComponent {\n  title = input.required<string>();\n  remove = output<void>();\n}"
      },
      {
        "type": "heading",
        "content": "Dans le parent"
      },
      {
        "type": "code",
        "code": "<app-task-card [title]=\"task.title\" (remove)=\"deleteTask(task.id)\" />"
      },
      {
        "type": "text",
        "content": "Importe TaskCardComponent dans le parent. task doit être une propriété ou une variable de boucle ; deleteTask doit être définie dans la classe. Les anciennes API @Input(), @Output() et EventEmitter restent fréquentes."
      },
      {
        "type": "tip",
        "content": "Ajoute un input completed de type boolean."
      },
      {
        "type": "heading",
        "content": "Dans TaskListComponent — importer et gérer la suppression"
      },
      {
        "type": "code",
        "code": "import { TaskCardComponent } from '../../../shared/components/task-card/task-card.component';\n// Ajouter TaskCardComponent à imports dans @Component.\n// Ajouter cette méthode dans la classe :\ndeleteTask(id: number) { this.tasks = this.tasks.filter(task => task.id !== id); }"
      },
      {
        "type": "heading",
        "content": "task-list.component.html — remplacer la liste"
      },
      {
        "type": "code",
        "code": "@for (task of tasks; track task.id) {\n  <app-task-card [title]=\"task.title\" (remove)=\"deleteTask(task.id)\" />\n} @empty { <p>Aucune tâche</p> }"
      },
      {
        "type": "image",
        "src": angular08Demo,
        "alt": "Communication — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Apprendre Angular | Supprimer. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Services",
    "title": "Créer un service et injecter une dépendance",
    "intro": "Centraliser les données du projet fil rouge.",
    "blocks": [
      {
        "type": "image",
        "src": angular09Schema,
        "alt": "Services — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Utilise les fichiers déjà générés core/models/task.ts et core/services/task.service.ts (ou adapte leurs noms réels). Le service fourni à la racine partage une instance. Le signal privé protège les écritures ; les composants lisent tasks() et appellent les méthodes."
      },
      {
        "type": "heading",
        "content": "core/models/task.ts"
      },
      {
        "type": "code",
        "code": "export interface Task {\n  id: number;\n  title: string;\n  completed: boolean;\n}"
      },
      {
        "type": "heading",
        "content": "core/services/task.service.ts"
      },
      {
        "type": "code",
        "code": "import { Injectable, signal } from '@angular/core';\nimport type { Task } from '../models/task';\n@Injectable({ providedIn: 'root' })\nexport class TaskService {\n  private readonly state = signal<Task[]>([]);\n  readonly tasks = this.state.asReadonly();\n  private nextId = 1;\n  add(title: string) {\n    if (!title.trim()) return;\n    this.state.update(items => [...items, { id: this.nextId++, title: title.trim(), completed: false }]);\n  }\n  toggle(id: number) {\n    this.state.update(items => items.map(t => t.id === id ? { ...t, completed: !t.completed } : t));\n  }\n  remove(id: number) {\n    this.state.update(items => items.filter(t => t.id !== id));\n  }\n}"
      },
      {
        "type": "text",
        "content": "providedIn: root partage une instance dans l’application. inject(TaskService) récupère cette instance dans un composant. Les données sont en mémoire et disparaissent au rechargement."
      },
      {
        "type": "tip",
        "content": "Ajoute une méthode rename(id, title)."
      },
      {
        "type": "heading",
        "content": "task-list.component.ts — connecter le service"
      },
      {
        "type": "code",
        "code": "import { Component, inject } from '@angular/core';\nimport { TaskService } from '../../../core/services/task.service';\n@Component({selector:'app-task-list',templateUrl:'./task-list.component.html'})\nexport class TaskListComponent { readonly service = inject(TaskService); }"
      },
      {
        "type": "heading",
        "content": "task-list.component.html"
      },
      {
        "type": "code",
        "code": "<button (click)=\"service.add('Apprendre Angular')\">Ajouter</button>\n@for (task of service.tasks(); track task.id) {\n <p>{{ task.title }} <button (click)=\"service.toggle(task.id)\">{{ task.completed ? \"Terminée\" : \"À faire\" }}</button> <button (click)=\"service.remove(task.id)\">Supprimer</button></p>\n} @empty { <p>Aucune tâche</p> }"
      },
      {
        "type": "image",
        "src": angular09Demo,
        "alt": "Services — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Ajouter | Apprendre Angular | À faire. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Routing",
    "title": "Créer les pages et la navigation",
    "intro": "Configurer Angular Router.",
    "blocks": [
      {
        "type": "image",
        "src": angular10Schema,
        "alt": "Routing — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Crée les pages depuis taskboard. Utilise les classes HomeComponent et NotFoundComponent dans les fichiers générés, en adaptant leurs tests si nécessaire. Le routeur remplace uniquement router-outlet ; garde le Header en dehors."
      },
      {
        "type": "code",
        "code": "ng g c features/home\nng g c features/not-found"
      },
      {
        "type": "heading",
        "content": "app.routes.ts"
      },
      {
        "type": "code",
        "code": "import { Routes } from '@angular/router';\nimport { HomeComponent } from './features/home/home.component';\nimport { TaskListComponent } from './features/tasks/task-list/task-list.component';\nimport { NotFoundComponent } from './features/not-found/not-found.component';\nexport const routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'tasks', component: TaskListComponent },\n  { path: '**', component: NotFoundComponent }\n];"
      },
      {
        "type": "heading",
        "content": "app.component.ts"
      },
      {
        "type": "code",
        "code": "import { Component } from '@angular/core';\nimport { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';\nimport { Header } from './shared/components/header/header.component';\n@Component({selector:'app-root',imports:[Header,RouterLink,RouterLinkActive,RouterOutlet],templateUrl:'./app.component.html',styleUrl:'./app.component.css'})\nexport class App {}"
      },
      {
        "type": "text",
        "content": "Vérifie que app.config.ts contient provideRouter(routes). Pour une route tasks/:id, injecte ActivatedRoute puis lis paramMap ; utilise son observable si le paramètre peut changer sans recréer le composant."
      },
      {
        "type": "code",
        "code": "// Dans un composant de détail\nprivate route = inject(ActivatedRoute);\nid = this.route.snapshot.paramMap.get('id');"
      },
      {
        "type": "tip",
        "content": "Teste /tasks et une URL inexistante."
      },
      {
        "type": "heading",
        "content": "app.component.html — remplacer le contenu"
      },
      {
        "type": "code",
        "code": "<app-header />\n<nav><a routerLink=\"/\">Accueil</a> <a routerLink=\"/tasks\" routerLinkActive=\"active\">Tâches</a></nav>\n<main><router-outlet /></main>"
      },
      {
        "type": "heading",
        "content": "home.component.html et not-found.component.html (respectivement)"
      },
      {
        "type": "code",
        "code": "<h1>Bienvenue sur TaskBoard</h1>\n\n<!-- Dans not-found.component.html : -->\n<h1>Page introuvable</h1>"
      },
      {
        "type": "image",
        "src": angular10Demo,
        "alt": "Routing — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Accueil | Tâches | Page introuvable. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Formulaires",
    "title": "Créer et valider un formulaire",
    "intro": "Comparer ngModel et Reactive Forms.",
    "blocks": [
      {
        "type": "image",
        "src": angular11Schema,
        "alt": "Formulaires — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Le formulaire remplace la liste provisoire du chapitre précédent. FormsModule est nécessaire uniquement pour ngModel ; ReactiveFormsModule est nécessaire pour formControl. Le service reste inchangé."
      },
      {
        "type": "heading",
        "content": "Template-driven : exemple indépendant"
      },
      {
        "type": "code",
        "code": "import { FormsModule } from '@angular/forms';\n// Ajouter FormsModule aux imports du composant\n// Dans la classe :\nname = '';"
      },
      {
        "type": "code",
        "code": "<input [(ngModel)]=\"name\" aria-label=\"Nom\">\n<p>{{ name }}</p>"
      },
      {
        "type": "heading",
        "content": "Reactive Forms : task-list.component.ts"
      },
      {
        "type": "code",
        "code": "import { Component, inject, computed } from '@angular/core';\nimport { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';\nimport { TaskService } from '../../../core/services/task.service';\n@Component({\n  selector: 'app-task-list',\n  imports: [ReactiveFormsModule],\n  templateUrl: './task-list.component.html'\n})\nexport class TaskListComponent {\n  readonly service = inject(TaskService);\n  readonly title = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\\S/)] });\n  readonly remaining = computed(() => this.service.tasks().filter(t => !t.completed).length);\n  add() {\n    if (this.title.invalid) return;\n    this.service.add(this.title.value);\n    this.title.reset();\n  }\n}"
      },
      {
        "type": "heading",
        "content": "task-list.component.html"
      },
      {
        "type": "code",
        "code": "<form (ngSubmit)=\"add()\">\n  <label for=\"title\">Nouvelle tâche</label>\n  <input id=\"title\" [formControl]=\"title\">\n  @if (title.touched && title.invalid) { <p>Le titre est obligatoire.</p> }\n  <button [disabled]=\"title.invalid\">Ajouter</button>\n</form>\n<p>{{ remaining() }} tâche(s) restante(s)</p>\n@for (task of service.tasks(); track task.id) {\n  <p>\n    <label><input type=\"checkbox\" [checked]=\"task.completed\" (change)=\"service.toggle(task.id)\"> {{ task.title }}</label>\n    <button (click)=\"service.remove(task.id)\">Supprimer</button>\n  </p>\n} @empty { <p>Aucune tâche</p> }"
      },
      {
        "type": "tip",
        "content": "Teste un titre vide, une tâche valide, puis la suppression. FormGroup permet de regrouper plusieurs FormControl."
      },
      {
        "type": "image",
        "src": angular11Demo,
        "alt": "Formulaires — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Nouvelle tâche | Ajouter | 1 restante. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "RxJS",
    "title": "Comprendre les Observables",
    "intro": "Manipuler les flux asynchrones.",
    "blocks": [
      {
        "type": "image",
        "src": angular12Schema,
        "alt": "RxJS — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Teste of dans un composant ou un fichier TypeScript importé. Un Observable émet des valeurs dans le temps ; subscribe déclenche notamment une requête HTTP froide. AsyncPipe s’abonne et se désabonne automatiquement."
      },
      {
        "type": "code",
        "code": "import { of, map, filter } from 'rxjs';\nof(1, 2, 3, 4).pipe(\n  filter(n => n % 2 === 0),\n  map(n => n * 10)\n).subscribe(console.log); // 20, 40"
      },
      {
        "type": "text",
        "content": "Un Observable peut émettre plusieurs valeurs. subscribe déclenche notamment les requêtes HttpClient. async pipe gère automatiquement son abonnement. switchMap remplace le flux précédent ; debounceTime attend une pause ; catchError traite une erreur."
      },
      {
        "type": "code",
        "code": "import { AsyncPipe } from '@angular/common';\nimport { interval } from 'rxjs';\n// Ajouter AsyncPipe aux imports du composant\n// Dans la classe\ntimer$ = interval(1000);"
      },
      {
        "type": "code",
        "code": "<p>{{ timer$ | async }}</p>"
      },
      {
        "type": "warning",
        "content": "Pour les abonnements longs manuels, utilise takeUntilDestroyed avec un DestroyRef ou désabonne-toi. Les requêtes HTTP ordinaires se terminent après leur réponse."
      },
      {
        "type": "tip",
        "content": "Change la fréquence du timer à 500 ms."
      },
      {
        "type": "image",
        "src": angular12Demo,
        "alt": "RxJS — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Console : 20 puis 40. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "API REST",
    "title": "Connecter Angular à une API REST",
    "intro": "Utiliser HttpClient et gérer un CRUD distant.",
    "blocks": [
      {
        "type": "image",
        "src": angular13Schema,
        "alt": "API REST — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Crée ng g c features/tasks/task-remote et ng g s core/services/task-api. Conserve la liste locale sur /tasks et ajoute une route /remote. Le serveur doit exposer les quatre opérations décrites ; sans serveur, la liste distante affiche une erreur."
      },
      {
        "type": "heading",
        "content": "Préparer le backend"
      },
      {
        "type": "text",
        "content": "Exemple optionnel, indépendant du service local : une API Spring Boot sur localhost:8080 expose GET/POST /api/tasks et PUT/DELETE /api/tasks/:id. Elle doit accepter le JSON et autoriser l’origine http://localhost:4200 en développement. Aucun backend n’est fourni dans ce cours."
      },
      {
        "type": "heading",
        "content": "app.config.ts"
      },
      {
        "type": "code",
        "code": "import { ApplicationConfig } from '@angular/core';\nimport { provideRouter } from '@angular/router';\nimport { provideHttpClient } from '@angular/common/http';\nimport { routes } from './app.routes';\nexport const appConfig: ApplicationConfig = {\n  providers: [provideRouter(routes), provideHttpClient()]\n};"
      },
      {
        "type": "heading",
        "content": "core/services/task-api.service.ts"
      },
      {
        "type": "code",
        "code": "import { Injectable, inject } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport type { Task } from '../models/task';\n@Injectable({ providedIn: 'root' })\nexport class TaskApiService {\n  private http = inject(HttpClient);\n  private url = 'http://localhost:8080/api/tasks';\n  list() { return this.http.get<Task[]>(this.url); }\n  create(title: string) { return this.http.post<Task>(this.url, { title, completed: false }); }\n  update(task: Task) { return this.http.put<Task>(`${this.url}/${task.id}`, task); }\n  remove(id: number) { return this.http.delete<void>(`${this.url}/${id}`); }\n}"
      },
      {
        "type": "heading",
        "content": "Exemple de page de lecture distante"
      },
      {
        "type": "code",
        "code": "import { Component, inject, signal, OnInit } from '@angular/core';\nimport { finalize } from 'rxjs';\nimport { TaskApiService } from '../../../core/services/task-api.service';\nimport type { Task } from '../../../core/models/task';\n@Component({\n selector: 'app-task-remote',\n template: `\n   @if (loading()) { <p>Chargement...</p> }\n   @else if (error()) { <p>{{ error() }}</p><button (click)=\"load()\">Réessayer</button> }\n   @else { @for (task of tasks(); track task.id) { <p>{{ task.title }}</p> } @empty { <p>Aucune tâche</p> } }\n `\n})\nexport class TaskRemoteComponent implements OnInit {\n private api = inject(TaskApiService);\n tasks = signal<Task[]>([]);\n loading = signal(false);\n error = signal('');\n ngOnInit() { this.load(); }\n load() {\n   this.loading.set(true); this.error.set('');\n   this.api.list().pipe(finalize(() => this.loading.set(false))).subscribe({\n     next: tasks => this.tasks.set(tasks),\n     error: () => this.error.set('Impossible de charger les tâches.')\n   });\n }\n}"
      },
      {
        "type": "text",
        "content": "Crée cette page dans features/tasks/task-remote et ajoute une route tasks-remote avant la route **. Pour les mutations, appelle create/update/remove, abonne-toi et recharge la liste après succès."
      },
      {
        "type": "warning",
        "content": "Les types TypeScript ne valident pas les réponses JSON à l’exécution. Une erreur CORS se corrige côté serveur ou via un proxy de développement, pas en désactivant la sécurité du navigateur."
      },
      {
        "type": "tip",
        "content": "Vérifie les requêtes dans DevTools > Network."
      },
      {
        "type": "heading",
        "content": "app.routes.ts — ajouter avant la route **"
      },
      {
        "type": "code",
        "code": "import { TaskRemoteComponent } from './features/tasks/task-remote/task-remote.component';\n// Dans routes :\n{ path: 'remote', component: TaskRemoteComponent },"
      },
      {
        "type": "text",
        "content": "Contrat API : GET /api/tasks retourne un tableau Task[] ; POST reçoit title et completed et retourne une tâche avec id ; PUT /api/tasks/:id reçoit la tâche complète ; DELETE retourne 204. Autorise localhost:4200 dans la configuration CORS du backend. Les méthodes CRUD du service sont prêtes, mais seule la lecture distante est connectée à une interface ici."
      },
      {
        "type": "image",
        "src": angular13Demo,
        "alt": "API REST — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Chargement / Liste / Erreur. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Architecture",
    "title": "Organiser une application professionnelle",
    "intro": "Séparer les responsabilités.",
    "blocks": [
      {
        "type": "image",
        "src": angular14Schema,
        "alt": "Architecture — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Ne déplace pas les fichiers déjà rangés. core contient les services partagés, shared les composants génériques, features les fonctionnalités. Le lazy loading charge le composant lorsque la route est visitée."
      },
      {
        "type": "code",
        "code": "src/app/\n  core/\n    models/task.ts\n    services/task.service.ts\n    services/task-api.service.ts\n    guards/\n    interceptors/\n  shared/components/\n  features/\n    home/\n    tasks/\n      task-list/\n      task-remote/\n    not-found/\n  app.routes.ts\n  app.config.ts"
      },
      {
        "type": "text",
        "content": "core contient les services et contrats transversaux ; shared les éléments réutilisables ; features les fonctionnalités métier. Cette organisation est un choix, pas une obligation Angular."
      },
      {
        "type": "heading",
        "content": "Lazy loading"
      },
      {
        "type": "code",
        "code": "// Exemple de route remplaçant la route tasks\n{ path: 'tasks', loadComponent: () => import('./features/tasks/task-list/task-list.component').then(m => m.TaskListComponent) }"
      },
      {
        "type": "tip",
        "content": "Déplace une carte de tâche dans shared si elle est réellement générique."
      },
      {
        "type": "image",
        "src": angular14Demo,
        "alt": "Architecture — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : core / shared / features. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Authentification",
    "title": "Comprendre Guards, Interceptors et JWT",
    "intro": "Préparer une intégration avec un backend authentifié.",
    "blocks": [
      {
        "type": "image",
        "src": angular15Schema,
        "alt": "Authentification — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Cette étape est une démonstration isolée : ne protège pas /tasks avant de disposer d’une vraie page de connexion et d’un backend. Le guard ne sécurise pas le serveur ; le backend doit vérifier le JWT et les autorisations."
      },
      {
        "type": "text",
        "content": "Exemple indépendant : le serveur délivre un jeton d’accès après connexion. Le service ci-dessous conserve uniquement le jeton en mémoire ; un rechargement déconnecte l’utilisateur. Le backend doit vérifier le token et les autorisations à chaque requête protégée."
      },
      {
        "type": "code",
        "code": "// core/services/auth.service.ts\nimport { Injectable, signal } from '@angular/core';\n@Injectable({ providedIn: 'root' })\nexport class AuthService {\n  private state = signal<string | null>(null);\n  token = this.state.asReadonly();\n  setToken(token: string) { this.state.set(token); }\n  logout() { this.state.set(null); }\n}"
      },
      {
        "type": "code",
        "code": "// core/guards/auth.guard.ts\nimport { inject } from '@angular/core';\nimport { CanActivateFn, Router } from '@angular/router';\nimport { AuthService } from '../services/auth.service';\nexport const authGuard: CanActivateFn = () =>\n  inject(AuthService).token() ? true : inject(Router).createUrlTree(['/login']);"
      },
      {
        "type": "code",
        "code": "// core/interceptors/auth.interceptor.ts\nimport { inject } from '@angular/core';\nimport { HttpInterceptorFn } from '@angular/common/http';\nimport { AuthService } from '../services/auth.service';\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).token();\n  if (!token || !req.url.startsWith('http://localhost:8080/api/')) return next(req);\n  return next(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));\n};"
      },
      {
        "type": "code",
        "code": "// Dans app.config.ts : importer withInterceptors et authInterceptor\nprovideHttpClient(withInterceptors([authInterceptor]))\n// Sur une route protégée : canActivate: [authGuard]"
      },
      {
        "type": "warning",
        "content": "Crée une page /login avant d’activer le guard. Ce chapitre ne fournit pas un système de connexion complet. En production, HTTPS, expiration des jetons et gestion des sessions sont indispensables ; un guard ne constitue pas une protection serveur."
      },
      {
        "type": "tip",
        "content": "Prévois les états 401 (non authentifié) et 403 (accès interdit)."
      },
      {
        "type": "image",
        "src": angular15Demo,
        "alt": "Authentification — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Accès refusé sans session. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Tests",
    "title": "Tester les services et composants",
    "intro": "Utiliser TestBed et Vitest.",
    "blocks": [
      {
        "type": "image",
        "src": angular16Schema,
        "alt": "Tests — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Place les tests à côté des fichiers testés. Vérifie que les tests générés importent les noms de classes réellement exportés. Exécute les commandes depuis taskboard."
      },
      {
        "type": "heading",
        "content": "task.service.spec.ts"
      },
      {
        "type": "code",
        "code": "import { TestBed } from '@angular/core/testing';\nimport { describe, it, expect, beforeEach } from 'vitest';\nimport { TaskService } from './task.service';\ndescribe('TaskService', () => {\n let service: TaskService;\n beforeEach(() => { TestBed.configureTestingModule({}); service = TestBed.inject(TaskService); });\n it('ajoute et termine une tâche', () => {\n   service.add('Angular');\n   expect(service.tasks()).toHaveLength(1);\n   service.toggle(service.tasks()[0].id);\n   expect(service.tasks()[0].completed).toBe(true);\n });\n it('refuse un titre vide', () => { service.add(' '); expect(service.tasks()).toHaveLength(0); });\n});"
      },
      {
        "type": "heading",
        "content": "task-list.component.spec.ts"
      },
      {
        "type": "code",
        "code": "import { TestBed } from '@angular/core/testing';\nimport { it, expect } from 'vitest';\nimport { TaskListComponent } from './task-list.component';\nit('ajoute une tâche depuis le formulaire', async () => {\n await TestBed.configureTestingModule({ imports: [TaskListComponent] }).compileComponents();\n const fixture = TestBed.createComponent(TaskListComponent);\n fixture.componentInstance.title.setValue('Réviser');\n fixture.componentInstance.add();\n await fixture.whenStable();\n expect(fixture.nativeElement.textContent).toContain('Réviser');\n});"
      },
      {
        "type": "code",
        "code": "ng test\nng test --no-watch"
      },
      {
        "type": "warning",
        "content": "Adapte ou remplace les tests générés qui vérifient encore le template initial. Les anciens projets Angular peuvent utiliser Jasmine/Karma plutôt que Vitest."
      },
      {
        "type": "tip",
        "content": "Ajoute un test qui vérifie la suppression."
      },
      {
        "type": "image",
        "src": angular16Demo,
        "alt": "Tests — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Tests : ajout et titre vide. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Production",
    "title": "Compiler et déployer Angular",
    "intro": "Préparer une application SPA pour la production.",
    "blocks": [
      {
        "type": "image",
        "src": angular17Schema,
        "alt": "Production — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Le build produit des fichiers statiques, généralement dans dist/taskboard/browser. Configure le serveur pour renvoyer index.html pour les routes SPA. GitHub Pages ne propose pas ce fallback automatiquement."
      },
      {
        "type": "code",
        "code": "ng build --configuration production"
      },
      {
        "type": "text",
        "content": "Vérifie le dossier dist/taskboard/browser selon angular.json. Déploie son contenu sur un hébergement statique. Configure un fallback vers index.html pour les routes Angular."
      },
      {
        "type": "code",
        "code": "ng build --base-href /taskboard/"
      },
      {
        "type": "text",
        "content": "Cette dernière commande convient à un hébergement sous /taskboard/. Sur GitHub Pages, une actualisation d’une route peut provoquer une 404 : configure une stratégie hash avec withHashLocation() dans provideRouter si nécessaire."
      },
      {
        "type": "warning",
        "content": "Ne mets jamais de secret backend dans le code frontend ou dans les fichiers environment : ils deviennent publics après compilation."
      },
      {
        "type": "tip",
        "content": "Exécute les tests puis le build avant ton commit."
      },
      {
        "type": "image",
        "src": angular17Demo,
        "alt": "Production — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Build : fichiers statiques. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  },
  {
    "label": "Projet final",
    "title": "Réaliser TaskBoard",
    "intro": "Consolider les acquis avec une application fonctionnelle.",
    "blocks": [
      {
        "type": "image",
        "src": angular18Schema,
        "alt": "Projet final — schema",
        "caption": "Schéma de repérage des notions."
      },
      {
        "type": "text",
        "content": "Reprends la liste locale du chapitre Formulaires. Ajoute les filtres sans supprimer le formulaire ni les actions. Les tâches en mémoire disparaissent au rechargement : la persistance est un exercice supplémentaire."
      },
      {
        "type": "heading",
        "content": "Version locale"
      },
      {
        "type": "text",
        "content": "Les chapitres Services, Routing et Formulaires assemblent le CRUD local (ajout, lecture, changement de statut, suppression). Complète la modification du titre avec rename, puis ajoute les filtres Toutes / À faire / Terminées."
      },
      {
        "type": "code",
        "code": "// Dans TaskListComponent\n// Importer signal depuis @angular/core\nfilter = signal<'all' | 'todo' | 'done'>('all');\nvisibleTasks = computed(() => this.service.tasks().filter(t =>\n this.filter() === 'all' || (this.filter() === 'done' ? t.completed : !t.completed)\n));"
      },
      {
        "type": "code",
        "code": "<button (click)=\"filter.set('all')\">Toutes</button>\n<button (click)=\"filter.set('todo')\">À faire</button>\n<button (click)=\"filter.set('done')\">Terminées</button>"
      },
      {
        "type": "text",
        "content": "Remplace service.tasks() par visibleTasks() dans la boucle du template. Ajoute une navigation, un état vide, des labels accessibles et des styles responsive."
      },
      {
        "type": "heading",
        "content": "Extension full-stack"
      },
      {
        "type": "text",
        "content": "Connecte ensuite une API Spring Boot compatible en remplaçant le service local par des appels HTTP ; ajoute chargement, erreurs et confirmation de suppression. L’authentification est une extension séparée."
      },
      {
        "type": "heading",
        "content": "Validation"
      },
      {
        "type": "text",
        "content": "Vérifie : création, modification, suppression, filtres, navigation, formulaires invalides, tests et build. Les données locales disparaissent au rechargement tant que tu n’ajoutes pas de persistance."
      },
      {
        "type": "code",
        "code": "git add .\ngit commit -m \"feat: build Angular task management app\""
      },
      {
        "type": "tip",
        "content": "Documentation : [Angular](https://angular.dev) et [RxJS](https://rxjs.dev)."
      },
      {
        "type": "text",
        "content": "Dans task-list.component.html, remplace uniquement service.tasks() dans @for par visibleTasks(). Place les trois boutons de filtre hors du formulaire. Vérifie ajout, changement d’état, suppression et chaque filtre."
      },
      {
        "type": "image",
        "src": angular18Demo,
        "alt": "Projet final — demo",
        "caption": "Simulation du résultat attendu, non issue d’une exécution réelle."
      },
      {
        "type": "tip",
        "content": "Point de contrôle : Toutes | À faire | Terminées. Vérifie le terminal et la console avant de poursuivre."
      }
    ]
  }
];
