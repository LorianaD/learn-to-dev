import type { CourseStep } from '../../types/course';

export const dddCleanArchitectureSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Découvrir le Domain-Driven Design",
    "intro": "Comprendre le DDD sans framework ni base de données.",
    "blocks": [
      {
        "type": "heading",
        "content": "À quoi sert le DDD ?"
      },
      {
        "type": "text",
        "content": "Le Domain-Driven Design (DDD) est une démarche de conception qui part du fonctionnement de l’activité à informatiser. Dans une application de réservation, on commence par comprendre ce que signifie réserver une salle, avant de créer les tables SQL."
      },
      {
        "type": "heading",
        "content": "Notre projet fil rouge : une réservation de salle"
      },
      {
        "type": "text",
        "content": "Nous allons construire un petit système fictif : une salle peut être réservée sur un créneau. La fin doit être après le début et deux réservations de la même salle ne doivent pas se chevaucher. Deux créneaux qui se touchent sont autorisés."
      },
      {
        "type": "text",
        "content": "Le DDD aide à représenter ces règles dans le code. La Clean Architecture aide à les isoler des outils techniques. Ce sont deux approches complémentaires, pas deux frameworks."
      },
      {
        "type": "tip",
        "content": "Exercice : faut-il connaître PostgreSQL pour décider si 10h–12h chevauche 9h–11h ?"
      },
      {
        "type": "text",
        "content": "Correction : non. Cette règle dépend uniquement des horaires."
      }
    ]
  },
  {
    "label": "Vocabulaire",
    "title": "Comprendre le vocabulaire métier",
    "intro": "Apprendre les mots avant de les utiliser dans le code.",
    "blocks": [
      {
        "type": "heading",
        "content": "Les termes essentiels"
      },
      {
        "type": "text",
        "content": "Le domaine (Domain) est l’activité étudiée : ici la réservation de salles. Une règle métier est une condition imposée par cette activité. Un expert métier est une personne qui connaît cette activité, par exemple le gérant des salles. Dans un exercice fictif, les règles sont données ; tu n’as personne à contacter."
      },
      {
        "type": "heading",
        "content": "Langage ubiquitaire (Ubiquitous Language)"
      },
      {
        "type": "text",
        "content": "Il s’agit de partager les mêmes mots dans les discussions, le cahier des charges et le code. Par exemple, préférer reserver() à updateStatus(1) si l’action consiste réellement à réserver."
      },
      {
        "type": "code",
        "code": "SalleDeReunion\nCreneauHoraire\nReservation\nreserver()"
      },
      {
        "type": "tip",
        "content": "Exercice : comment nommer une méthode qui annule une réservation ?"
      },
      {
        "type": "text",
        "content": "Correction : annulerReservation(), plutôt que modifier(2)."
      }
    ]
  },
  {
    "label": "Règles métier",
    "title": "Écrire une première règle métier",
    "intro": "Passer d’une phrase du cahier des charges à une condition.",
    "blocks": [
      {
        "type": "heading",
        "content": "Préparer un atelier TypeScript"
      },
      {
        "type": "text",
        "content": "Dans un nouveau dossier, utilise le terminal. Node.js doit être installé. Les exercices des étapes 3 et 4 sont indépendants ; remplace atelier.ts à chaque exemple."
      },
      {
        "type": "code",
        "code": "mkdir atelier-ddd\ncd atelier-ddd\nnpm init -y\nnpm install -D typescript tsx vitest"
      },
      {
        "type": "text",
        "content": "Crée atelier.ts à la racine et copie ce code."
      },
      {
        "type": "code",
        "code": "function verifierCreneau(debut: number, fin: number): void {\n    if (fin <= debut) {\n        throw new Error(\"La fin doit être après le début.\");\n    }\n}\n\nverifierCreneau(9, 11);\nconsole.log(\"Créneau valide\");"
      },
      {
        "type": "code",
        "code": "npx tsx atelier.ts"
      },
      {
        "type": "tip",
        "content": "Exercice : remplace 9, 11 par 11, 9 puis relance la commande."
      },
      {
        "type": "text",
        "content": "Correction : une erreur apparaît. La règle fonctionne sans serveur ni SQL."
      }
    ]
  },
  {
    "label": "Rappels POO",
    "title": "Réviser les classes TypeScript",
    "intro": "Comprendre comment protéger une propriété.",
    "blocks": [
      {
        "type": "heading",
        "content": "Constructeur, private et readonly"
      },
      {
        "type": "code",
        "code": "class Salle {\n    constructor(private readonly nom: string) {}\n\n    getNom(): string {\n        return this.nom;\n    }\n}\n\nconst salle = new Salle(\"Einstein\");\nconsole.log(salle.getNom());"
      },
      {
        "type": "text",
        "content": "Le constructeur initialise l’objet. private limite l’accès direct en TypeScript. readonly interdit la réaffectation en TypeScript après initialisation. Une méthode publique permet de lire la valeur."
      },
      {
        "type": "tip",
        "content": "Exercice : change Einstein en Newton et exécute atelier.ts."
      },
      {
        "type": "text",
        "content": "Correction : le terminal affiche Newton."
      }
    ]
  },
  {
    "label": "Entity",
    "title": "Créer une entité métier",
    "intro": "Comprendre pourquoi une identité est importante.",
    "blocks": [
      {
        "type": "heading",
        "content": "Une entité possède une identité"
      },
      {
        "type": "text",
        "content": "Deux réservations peuvent avoir les mêmes horaires mais des identifiants différents. Une entité DDD est définie par son identité et peut évoluer. Contrairement à une entité Doctrine, elle ne nécessite pas de mapping SQL."
      },
      {
        "type": "text",
        "content": "À partir de maintenant, crée les fichiers indiqués dans le dossier atelier-ddd. Ils seront réutilisés dans le projet final."
      },
      {
        "type": "heading",
        "content": "domain/Reservation.ts"
      },
      {
        "type": "code",
        "code": "import type { CreneauHoraire } from \"./CreneauHoraire\";\n\nexport class Reservation {\n    constructor(\n        public readonly id: string,\n        public readonly creneau: CreneauHoraire\n    ) {}\n}"
      },
      {
        "type": "text",
        "content": "Le fichier CreneauHoraire sera créé à l’étape suivante. Attends cette étape avant de compiler."
      },
      {
        "type": "tip",
        "content": "Exercice : deux réservations ont le même créneau mais les ID r1 et r2. Sont-elles la même entité ?"
      },
      {
        "type": "text",
        "content": "Correction : non, leurs identités sont différentes."
      }
    ]
  },
  {
    "label": "Value Object",
    "title": "Créer un objet valeur",
    "intro": "Regrouper les horaires et garantir leur validité.",
    "blocks": [
      {
        "type": "heading",
        "content": "domain/CreneauHoraire.ts"
      },
      {
        "type": "text",
        "content": "Un Value Object représente une valeur sans identité propre. Deux créneaux ayant les mêmes horaires sont équivalents. Un invariant est une règle qui doit toujours rester vraie. Ici, nous utilisons des heures entières sur une seule journée pour simplifier."
      },
      {
        "type": "code",
        "code": "export class CreneauHoraire {\n    constructor(\n        public readonly debut: number,\n        public readonly fin: number\n    ) {\n        if (!Number.isInteger(debut) || !Number.isInteger(fin) ||\n            debut < 0 || fin > 24 || fin <= debut) {\n            throw new Error(\"Créneau invalide\");\n        }\n    }\n\n    chevauche(autre: CreneauHoraire): boolean {\n        return this.debut < autre.fin && this.fin > autre.debut;\n    }\n\n    equals(autre: CreneauHoraire): boolean {\n        return this.debut === autre.debut && this.fin === autre.fin;\n    }\n}"
      },
      {
        "type": "heading",
        "content": "Tester dans atelier.ts"
      },
      {
        "type": "code",
        "code": "import { CreneauHoraire } from \"./domain/CreneauHoraire\";\nconst a = new CreneauHoraire(9, 11);\nconsole.log(a.chevauche(new CreneauHoraire(10, 12)));\nconsole.log(a.chevauche(new CreneauHoraire(11, 12)));"
      },
      {
        "type": "tip",
        "content": "Exercice : prédis les deux résultats, puis lance npx tsx atelier.ts."
      },
      {
        "type": "text",
        "content": "Correction : true puis false. Deux créneaux qui se touchent ne se chevauchent pas."
      }
    ]
  },
  {
    "label": "Aggregate",
    "title": "Protéger plusieurs objets ensemble",
    "intro": "Découvrir la racine d’agrégat avec une salle.",
    "blocks": [
      {
        "type": "text",
        "content": "Un agrégat est un ensemble cohérent d’objets métier. Sa racine (Aggregate Root) contrôle les modifications. Ici la salle contrôle ses réservations : on ne modifie pas directement sa liste."
      },
      {
        "type": "heading",
        "content": "domain/SalleDeReunion.ts"
      },
      {
        "type": "code",
        "code": "import { Reservation } from \"./Reservation\";\n\nexport class SalleDeReunion {\n    private reservations: Reservation[] = [];\n\n    constructor(public readonly id: string) {}\n\n    reserver(reservation: Reservation): void {\n        if (this.reservations.some(r => r.id === reservation.id)) {\n            throw new Error(\"Identifiant déjà utilisé\");\n        }\n        if (this.reservations.some(r => r.creneau.chevauche(reservation.creneau))) {\n            throw new Error(\"Salle déjà réservée\");\n        }\n        this.reservations.push(reservation);\n    }\n\n    lister(): readonly Reservation[] {\n        return [...this.reservations];\n    }\n}"
      },
      {
        "type": "tip",
        "content": "Exercice : repère la ligne qui ajoute la réservation."
      },
      {
        "type": "text",
        "content": "Correction : this.reservations.push(reservation). Elle ne s’exécute que si les contrôles précédents réussissent."
      }
    ]
  },
  {
    "label": "Repository",
    "title": "Comprendre les repositories",
    "intro": "Séparer le contrat de stockage de sa réalisation.",
    "blocks": [
      {
        "type": "text",
        "content": "Comme avec un repository Doctrine, on veut retrouver et sauvegarder des objets. Mais ici le contrat ne connaît ni Doctrine, ni Prisma, ni SQL. Une interface décrit les méthodes attendues."
      },
      {
        "type": "heading",
        "content": "domain/ISalleRepository.ts"
      },
      {
        "type": "code",
        "code": "import type { SalleDeReunion } from \"./SalleDeReunion\";\n\nexport interface ISalleRepository {\n    trouver(id: string): Promise<SalleDeReunion | undefined>;\n    sauvegarder(salle: SalleDeReunion): Promise<void>;\n}"
      },
      {
        "type": "heading",
        "content": "infrastructure/SalleRepositoryMemoire.ts"
      },
      {
        "type": "code",
        "code": "import type { ISalleRepository } from \"../domain/ISalleRepository\";\nimport type { SalleDeReunion } from \"../domain/SalleDeReunion\";\n\nexport class SalleRepositoryMemoire implements ISalleRepository {\n    private salles = new Map<string, SalleDeReunion>();\n\n    async trouver(id: string) {\n        return this.salles.get(id);\n    }\n\n    async sauvegarder(salle: SalleDeReunion): Promise<void> {\n        this.salles.set(salle.id, salle);\n    }\n}"
      },
      {
        "type": "tip",
        "content": "Exercice : où sont stockées les salles ?"
      },
      {
        "type": "text",
        "content": "Correction : dans une Map en mémoire. Elles disparaissent à l’arrêt du programme."
      }
    ]
  },
  {
    "label": "Clean Architecture",
    "title": "Comprendre les quatre couches",
    "intro": "Faire le lien avec MVC sans confondre les architectures.",
    "blocks": [
      {
        "type": "heading",
        "content": "Les responsabilités"
      },
      {
        "type": "text",
        "content": "Domain : règles et objets métier. Application : orchestration des actions. Presentation : réception des demandes et affichage ou réponse HTTP. Infrastructure : stockage, services externes et outils techniques."
      },
      {
        "type": "code",
        "code": "Presentation ──> Application ──> Domain\nInfrastructure ─────────────────> Domain\n\nmain.ts assemble les composants"
      },
      {
        "type": "text",
        "content": "Les flèches représentent les dépendances du code, pas l’ordre des appels. Le domaine ne doit pas importer les couches extérieures. Un contrôleur MVC correspond souvent à une partie de Presentation, mais MVC et Clean Architecture ne sont pas équivalents."
      },
      {
        "type": "tip",
        "content": "Exercice : où placer une requête SQL ?"
      },
      {
        "type": "text",
        "content": "Correction : Infrastructure. La règle de chevauchement reste dans Domain."
      }
    ]
  },
  {
    "label": "Use Case",
    "title": "Créer un cas d’utilisation",
    "intro": "Orchestrer une réservation sans connaître le stockage.",
    "blocks": [
      {
        "type": "heading",
        "content": "application/ReserverSalle.ts"
      },
      {
        "type": "code",
        "code": "import type { ISalleRepository } from \"../domain/ISalleRepository\";\nimport { Reservation } from \"../domain/Reservation\";\nimport { CreneauHoraire } from \"../domain/CreneauHoraire\";\n\nexport class ReserverSalle {\n    constructor(private readonly repo: ISalleRepository) {}\n\n    async executer(salleId: string, reservationId: string, debut: number, fin: number) {\n        const salle = await this.repo.trouver(salleId);\n        if (!salle) throw new Error(\"Salle introuvable\");\n        salle.reserver(new Reservation(reservationId, new CreneauHoraire(debut, fin)));\n        await this.repo.sauvegarder(salle);\n    }\n}"
      },
      {
        "type": "text",
        "content": "Le repository est fourni au constructeur : c’est l’injection de dépendance. Le cas d’utilisation retrouve la salle, demande au domaine de réserver, puis sauvegarde."
      },
      {
        "type": "tip",
        "content": "Exercice : quelle classe vérifie le chevauchement ?"
      },
      {
        "type": "text",
        "content": "Correction : SalleDeReunion, avec CreneauHoraire. Le Use Case ne duplique pas cette règle."
      }
    ]
  },
  {
    "label": "Organisation",
    "title": "Organiser les fichiers",
    "intro": "Retrouver chaque responsabilité dans le projet.",
    "blocks": [
      {
        "type": "code",
        "code": "atelier-ddd/\n├── domain/\n│   ├── CreneauHoraire.ts\n│   ├── Reservation.ts\n│   ├── SalleDeReunion.ts\n│   └── ISalleRepository.ts\n├── application/\n│   └── ReserverSalle.ts\n├── infrastructure/\n│   └── SalleRepositoryMemoire.ts\n├── presentation/\n│   └── demo.ts (étape 13)\n├── tests/\n│   └── reservation.test.ts (étape 12)\n└── package.json"
      },
      {
        "type": "text",
        "content": "Cette organisation est un choix pédagogique, pas une structure obligatoire du DDD. Dans un projet plus grand, on peut regrouper ces dossiers par fonctionnalité."
      },
      {
        "type": "tip",
        "content": "Exercice : retrouve le fichier qui contient le contrat du stockage."
      },
      {
        "type": "text",
        "content": "Correction : domain/ISalleRepository.ts."
      }
    ]
  },
  {
    "label": "Tests unitaires",
    "title": "Tester le domaine avec Vitest",
    "intro": "Vérifier les règles sans API ni base de données.",
    "blocks": [
      {
        "type": "heading",
        "content": "tests/reservation.test.ts"
      },
      {
        "type": "code",
        "code": "import { describe, it, expect } from \"vitest\";\nimport { CreneauHoraire } from \"../domain/CreneauHoraire\";\nimport { SalleDeReunion } from \"../domain/SalleDeReunion\";\nimport { Reservation } from \"../domain/Reservation\";\n\ndescribe(\"Réservations\", () => {\n    it(\"refuse un créneau inversé\", () => {\n        expect(() => new CreneauHoraire(11, 9)).toThrow();\n    });\n    it(\"refuse un chevauchement\", () => {\n        const salle = new SalleDeReunion(\"s1\");\n        salle.reserver(new Reservation(\"r1\", new CreneauHoraire(9, 11)));\n        expect(() => salle.reserver(new Reservation(\"r2\", new CreneauHoraire(10, 12)))).toThrow(\"Salle déjà réservée\");\n        expect(salle.lister()).toHaveLength(1);\n    });\n});"
      },
      {
        "type": "code",
        "code": "npx vitest run"
      },
      {
        "type": "tip",
        "content": "Exercice : ajoute un test pour deux créneaux qui se touchent."
      },
      {
        "type": "heading",
        "content": "Correction : à ajouter dans describe"
      },
      {
        "type": "code",
        "code": "it(\"accepte deux créneaux consécutifs\", () => {\n    const salle = new SalleDeReunion(\"s1\");\n    salle.reserver(new Reservation(\"r1\", new CreneauHoraire(9, 11)));\n    salle.reserver(new Reservation(\"r2\", new CreneauHoraire(11, 12)));\n    expect(salle.lister()).toHaveLength(2);\n});"
      }
    ]
  },
  {
    "label": "Projet guidé",
    "title": "Exécuter une réservation complète",
    "intro": "Assembler les fichiers déjà écrits, sans nouveau framework.",
    "blocks": [
      {
        "type": "heading",
        "content": "presentation/demo.ts"
      },
      {
        "type": "code",
        "code": "import { SalleDeReunion } from \"../domain/SalleDeReunion\";\nimport { SalleRepositoryMemoire } from \"../infrastructure/SalleRepositoryMemoire\";\nimport { ReserverSalle } from \"../application/ReserverSalle\";\n\nasync function main() {\n    const repo = new SalleRepositoryMemoire();\n    await repo.sauvegarder(new SalleDeReunion(\"s1\"));\n    const reserver = new ReserverSalle(repo);\n    await reserver.executer(\"s1\", \"r1\", 9, 11);\n    try {\n        await reserver.executer(\"s1\", \"r2\", 10, 12);\n    } catch (error) {\n        console.log(error instanceof Error ? error.message : error);\n    }\n    console.log((await repo.trouver(\"s1\"))?.lister().length);\n}\n\nmain().catch(console.error);"
      },
      {
        "type": "code",
        "code": "npx tsx presentation/demo.ts"
      },
      {
        "type": "text",
        "content": "Résultat attendu : Salle déjà réservée, puis 1. Ce fichier sert à la fois de démonstration en console et de point d’assemblage. Une API pourra remplacer la console plus tard."
      },
      {
        "type": "tip",
        "content": "Exercice : remplace 10, 12 par 11, 12 et relance."
      },
      {
        "type": "text",
        "content": "Correction : aucune erreur de conflit, puis 2."
      },
      {
        "type": "warning",
        "content": "Ce projet est volontairement limité à une journée, à des heures entières et à une exécution en mémoire. En production, des réservations simultanées nécessitent une protection transactionnelle ou une contrainte de stockage adaptée."
      }
    ]
  },
  {
    "label": "Mémo",
    "title": "Retenir les notions essentielles",
    "intro": "Un aide-mémoire pour les prochains projets.",
    "blocks": [
      {
        "type": "code",
        "code": "DDD : comprendre et modéliser le métier\nEntity : identité\nValue Object : valeur, égalité par contenu\nInvariant : règle toujours vraie\nAggregate Root : contrôle les modifications\nRepository : contrat de persistance\nUse Case : orchestre une action\nClean Architecture : protège le domaine"
      },
      {
        "type": "heading",
        "content": "Dans quel ordre travailler ?"
      },
      {
        "type": "text",
        "content": "Comprendre le besoin, nommer les objets, écrire les règles, tester le domaine, créer les cas d’utilisation, puis connecter les outils techniques."
      },
      {
        "type": "tip",
        "content": "Exercice final : si tu remplaces la Map par PostgreSQL, quels fichiers doivent changer ?"
      },
      {
        "type": "text",
        "content": "Correction : principalement l’implémentation du repository et le point d’assemblage. Les règles métier et le cas d’utilisation restent identiques si le contrat reste adapté."
      },
      {
        "type": "text",
        "content": "Pour aller plus loin, un autre cours pourra aborder le DDD stratégique, les événements métier, les transactions et une API réelle."
      }
    ]
  }
];
