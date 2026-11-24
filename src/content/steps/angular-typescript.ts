import type { CourseStep } from '../../types/course';

export const angularTypescriptSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Comprendre Angular",
    "intro": "Découvrir un framework frontend structuré.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Installation",
    "title": "Installer Angular CLI",
    "intro": "Préparer Windows, macOS ou Linux.",
    "blocks": [
      {
        "type": "heading",
        "content": "Prérequis"
      },
      {
        "type": "text",
        "content": "Installe une version de Node.js compatible avec la version Angular choisie. Ce cours fixe Angular 21 et utilise Node 24 LTS à jour. Consulte [la matrice de compatibilité](https://angular.dev/reference/versions)."
      },
      {
        "type": "code",
        "code": "node -v\nnpm -v\nnpm install -g @angular/cli@21\nng version"
      },
      {
        "type": "heading",
        "content": "Sans installation globale"
      },
      {
        "type": "code",
        "code": "npx --package @angular/cli@21 ng version"
      },
      {
        "type": "warning",
        "content": "Si PowerShell bloque ng.ps1, utilise ng.cmd ou le terminal CMD. Ne désactive pas globalement les protections PowerShell."
      },
      {
        "type": "tip",
        "content": "Vérifie la version de Node et de la CLI avant de poursuivre."
      }
    ]
  },
  {
    "label": "Création du projet",
    "title": "Créer et lancer un projet Angular",
    "intro": "Utiliser la CLI et comprendre les fichiers.",
    "blocks": [
      {
        "type": "heading",
        "content": "Dans le terminal, hors du site learn-to-dev"
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
      }
    ]
  },
  {
    "label": "Composants",
    "title": "Créer un composant réutilisable",
    "intro": "Séparer logique, présentation et styles.",
    "blocks": [
      {
        "type": "heading",
        "content": "Créer un composant"
      },
      {
        "type": "code",
        "code": "ng g c shared/components/header"
      },
      {
        "type": "heading",
        "content": "header.component.ts"
      },
      {
        "type": "code",
        "code": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-header',\n  standalone: true,\n  templateUrl: './header.component.html',\n  styleUrl: './header.component.css'\n})\nexport class HeaderComponent {\n  title = 'TaskBoard';\n}"
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
        "code": "header { padding: 1rem; background: #eef2ff; }"
      },
      {
        "type": "heading",
        "content": "app.component.ts"
      },
      {
        "type": "code",
        "code": "import { Component } from '@angular/core';\nimport { HeaderComponent } from './shared/components/header/header.component';\n\n@Component({\n  selector: 'app-root',\n  imports: [HeaderComponent],\n  template: '<app-header></app-header>'\n})\nexport class AppComponent {}"
      },
      {
        "type": "tip",
        "content": "Crée un FooterComponent et importe-le dans AppComponent. Les styles du composant sont encapsulés par défaut."
      }
    ]
  },
  {
    "label": "Templates",
    "title": "Maîtriser le data binding",
    "intro": "Relier les propriétés et événements au HTML.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Directives",
    "title": "Afficher des listes et conditions",
    "intro": "Utiliser le contrôle de flux et les pipes.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Réactivité",
    "title": "Utiliser les Signals",
    "intro": "Gérer un état et ses valeurs dérivées.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Communication",
    "title": "Communiquer entre composants",
    "intro": "Transmettre les données au composant enfant et remonter un événement.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Services",
    "title": "Créer un service et injecter une dépendance",
    "intro": "Centraliser les données du projet fil rouge.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Routing",
    "title": "Créer les pages et la navigation",
    "intro": "Configurer Angular Router.",
    "blocks": [
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
        "code": "import { Component } from '@angular/core';\nimport { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';\n@Component({\n  selector: 'app-root',\n  imports: [RouterLink, RouterLinkActive, RouterOutlet],\n  template: `<nav><a routerLink=\"/\">Accueil</a> <a routerLink=\"/tasks\" routerLinkActive=\"active\">Tâches</a></nav><router-outlet />`\n})\nexport class AppComponent {}"
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
      }
    ]
  },
  {
    "label": "Formulaires",
    "title": "Créer et valider un formulaire",
    "intro": "Comparer ngModel et Reactive Forms.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "RxJS",
    "title": "Comprendre les Observables",
    "intro": "Manipuler les flux asynchrones.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "API REST",
    "title": "Connecter Angular à une API REST",
    "intro": "Utiliser HttpClient et gérer un CRUD distant.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Architecture",
    "title": "Organiser une application professionnelle",
    "intro": "Séparer les responsabilités.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Authentification",
    "title": "Comprendre Guards, Interceptors et JWT",
    "intro": "Préparer une intégration avec un backend authentifié.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Tests",
    "title": "Tester les services et composants",
    "intro": "Utiliser TestBed et Vitest.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Production",
    "title": "Compiler et déployer Angular",
    "intro": "Préparer une application SPA pour la production.",
    "blocks": [
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
      }
    ]
  },
  {
    "label": "Projet final",
    "title": "Réaliser TaskBoard",
    "intro": "Consolider les acquis avec une application fonctionnelle.",
    "blocks": [
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
      }
    ]
  }
];
