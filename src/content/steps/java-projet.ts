import type { CourseStep } from '../../types/course';

export const javaProjetSteps: CourseStep[] = [
  {
    label: "Introduction",
    title: "Comprendre un projet Java",
    intro: "Java compile du code source avant de l’exécuter.",
    blocks: [
      {
        type: "heading",
        content: "Du fichier .java au programme"
      },
      {
        type: "text",
        content: "JavaScript est généralement exécuté par un moteur. En Java, javac transforme Main.java en Main.class (bytecode), puis la JVM l’exécute."
      },
      {
        type: "code",
        file: "Schéma",
        code: "Main.java → javac → Main.class → java Main"
      },
      {
        type: "code",
        file: "Terminal",
        code: "java -version\njavac -version"
      },
      {
        type: "tip",
        content: "Le JDK contient javac et les outils de développement. La JVM exécute le bytecode."
      },
      {
        type: "warning",
        content: "Si javac est introuvable, vérifier l’installation du JDK et le PATH."
      }
    ]
  },
  {
    label: "Installation",
    title: "Créer un premier projet",
    intro: "Un projet minimal permet de voir chaque fichier.",
    blocks: [
      {
        type: "heading",
        content: "Dossiers et premier programme"
      },
      {
        type: "code",
        file: "Terminal",
        code: "mkdir java-gestion-taches\ncd java-gestion-taches\nmkdir src"
      },
      {
        type: "code",
        file: "src/Main.java",
        code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Bonjour Java !\");\n    }\n}"
      },
      {
        type: "text",
        content: "public class Main : classe portant le même nom que Main.java. main : point d’entrée. println : affiche une ligne."
      },
      {
        type: "code",
        file: "Terminal",
        code: "javac -d out src/Main.java\njava -cp out Main"
      },
      {
        type: "tip",
        content: "-d out place le .class dans out ; -cp out indique où le retrouver."
      },
      {
        type: "warning",
        content: "La casse compte : Main.java, Main et main ne sont pas interchangeables."
      }
    ]
  },
  {
    label: "VS Code",
    title: "Ouvrir et lancer dans VS Code",
    intro: "Utiliser VS Code sans masquer ce que fait Java.",
    blocks: [
      {
        type: "heading",
        content: "Organisation de travail"
      },
      {
        type: "code",
        file: "Arborescence",
        code: "java-gestion-taches/\n├── src/\n│   └── Main.java\n├── out/                 # généré\n└── README.md"
      },
      {
        type: "text",
        content: "Ouvre le dossier racine dans VS Code. Installe l’extension Extension Pack for Java, puis ouvre Main.java. Le bouton Run lance le programme ; le terminal permet de comprendre la compilation."
      },
      {
        type: "code",
        file: "Terminal",
        code: "javac -d out src/Main.java\njava -cp out Main"
      },
      {
        type: "tip",
        content: "Après chaque modification, recompile avant de relancer si tu utilises javac manuellement."
      }
    ]
  },
  {
    label: "Compilation",
    title: "Comprendre classes, objets et méthodes",
    intro: "Construire une première tâche avec des champs.",
    blocks: [
      {
        type: "heading",
        content: "Une classe = un modèle"
      },
      {
        type: "code",
        file: "src/Task.java",
        code: "public class Task {\n    private final String title;\n    private boolean done;\n\n    public Task(String title) {\n        this.title = title;\n        this.done = false;\n    }\n\n    public String getTitle() { return title; }\n    public boolean isDone() { return done; }\n    public void complete() { done = true; }\n}"
      },
      {
        type: "text",
        content: "private protège les champs ; le constructeur initialise une tâche ; complete() modifie son état. En JavaScript, cela ressemble à une class avec constructor et méthodes."
      },
      {
        type: "code",
        file: "Extrait de main",
        code: "Task task = new Task(\"Apprendre Java\");\nSystem.out.println(task.getTitle());\ntask.complete();\nSystem.out.println(task.isDone());"
      },
      {
        type: "tip",
        content: "Un objet est créé avec new. Chaque instance conserve son propre état."
      }
    ]
  },
  {
    label: "Variables",
    title: "Gérer plusieurs fichiers",
    intro: "Compiler les classes qui collaborent.",
    blocks: [
      {
        type: "heading",
        content: "Main utilise Task"
      },
      {
        type: "code",
        file: "src/Main.java",
        code: "public class Main {\n    public static void main(String[] args) {\n        Task task = new Task(\"Créer un projet\");\n        System.out.println(task.getTitle());\n        task.complete();\n        System.out.println(task.isDone());\n    }\n}"
      },
      {
        type: "code",
        file: "Terminal (macOS / Linux / Git Bash)",
        code: "javac -d out src/*.java\njava -cp out Main"
      },
      {
        type: "code",
        file: "Terminal (toutes plateformes)",
        code: "javac -d out src/Main.java src/Task.java\njava -cp out Main"
      },
      {
        type: "warning",
        content: "Dans PowerShell, le joker src/*.java peut se comporter différemment : utilise les noms explicites."
      }
    ]
  },
  {
    label: "Conditions",
    title: "Organiser le code avec des packages",
    intro: "Passer d’un dossier de fichiers à une vraie structure Java.",
    blocks: [
      {
        type: "heading",
        content: "Le package correspond au chemin"
      },
      {
        type: "code",
        file: "Arborescence",
        code: "src/\n└── fr/\n    └── learn/\n        └── tasks/\n            ├── Main.java\n            └── Task.java"
      },
      {
        type: "code",
        file: "src/fr/learn/tasks/Main.java",
        code: "package fr.learn.tasks;\n\npublic class Main {\n    public static void main(String[] args) {\n        Task task = new Task(\"Organiser le projet\");\n        System.out.println(task.getTitle());\n    }\n}"
      },
      {
        type: "text",
        content: "Ajoute aussi package fr.learn.tasks; en première ligne de Task.java. Le package évite les collisions de noms."
      },
      {
        type: "code",
        file: "Terminal (macOS / Linux / Git Bash)",
        code: "javac -d out src/fr/learn/tasks/*.java\njava -cp out fr.learn.tasks.Main"
      },
      {
        type: "tip",
        content: "Avec un package, le lancement utilise le nom complet fr.learn.tasks.Main."
      }
    ]
  },
  {
    label: "Boucles",
    title: "Installer et comprendre Maven",
    intro: "Maven automatise compilation, dépendances et tests.",
    blocks: [
      {
        type: "heading",
        content: "Le rôle de pom.xml"
      },
      {
        type: "code",
        file: "Terminal",
        code: "mvn -version"
      },
      {
        type: "code",
        file: "pom.xml",
        code: "<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>fr.learn</groupId>\n  <artifactId>java-gestion-taches</artifactId>\n  <version>1.0-SNAPSHOT</version>\n  <properties>\n    <maven.compiler.release>17</maven.compiler.release>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n</project>"
      },
      {
        type: "text",
        content: "groupId identifie l’organisation, artifactId le projet, version sa version. release 17 compile pour Java 17."
      },
      {
        type: "warning",
        content: "La commande mvn exige Maven installé et accessible dans le PATH."
      }
    ]
  },
  {
    label: "Classes",
    title: "Adopter la structure Maven",
    intro: "Maven s’attend à trouver les sources dans des dossiers précis.",
    blocks: [
      {
        type: "heading",
        content: "Convention Maven"
      },
      {
        type: "code",
        file: "Arborescence",
        code: "java-gestion-taches/\n├── pom.xml\n├── src/\n│   ├── main/java/fr/learn/tasks/\n│   │   ├── Main.java\n│   │   └── Task.java\n│   └── test/java/fr/learn/tasks/\n└── target/                 # généré"
      },
      {
        type: "text",
        content: "Déplace les fichiers Java de src/fr/learn/tasks vers src/main/java/fr/learn/tasks. Conserve la ligne package fr.learn.tasks;."
      },
      {
        type: "code",
        file: "Terminal",
        code: "mvn compile\nmvn package"
      },
      {
        type: "tip",
        content: "target/ contient les fichiers générés. Ne le versionne pas dans Git."
      },
      {
        type: "warning",
        content: "Un JAR produit par Maven n’est pas nécessairement exécutable avec java -jar : il faut une classe Main-Class dans son manifeste."
      }
    ]
  },
  {
    label: "Collections",
    title: "Construire le gestionnaire de tâches",
    intro: "Stocker plusieurs tâches et les parcourir.",
    blocks: [
      {
        type: "heading",
        content: "ArrayList et boucle"
      },
      {
        type: "code",
        file: "src/main/java/fr/learn/tasks/TaskManager.java",
        code: "package fr.learn.tasks;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class TaskManager {\n    private final List<Task> tasks = new ArrayList<>();\n\n    public void add(String title) {\n        tasks.add(new Task(title));\n    }\n\n    public void showAll() {\n        for (int i = 0; i < tasks.size(); i++) {\n            Task task = tasks.get(i);\n            System.out.println((i + 1) + \". \" + task.getTitle()\n                    + (task.isDone() ? \" [OK]\" : \" [ ]\"));\n        }\n    }\n\n    public void complete(int index) {\n        if (index >= 0 && index < tasks.size()) {\n            tasks.get(index).complete();\n        }\n    }\n}"
      },
      {
        type: "code",
        file: "src/main/java/fr/learn/tasks/Main.java",
        code: "package fr.learn.tasks;\n\npublic class Main {\n    public static void main(String[] args) {\n        TaskManager manager = new TaskManager();\n        manager.add(\"Créer le projet\");\n        manager.add(\"Comprendre Maven\");\n        manager.complete(0);\n        manager.showAll();\n    }\n}"
      },
      {
        type: "text",
        content: "List<Task> stocke les objets ; add ajoute ; get lit par index ; la boucle parcourt les tâches. complete(0) termine la première tâche."
      },
      {
        type: "code",
        file: "Terminal",
        code: "mvn compile\njava -cp target/classes fr.learn.tasks.Main"
      }
    ]
  },
  {
    label: "Packages",
    title: "Ajouter une suppression et tester",
    intro: "Apprendre à modifier le programme sans tout casser.",
    blocks: [
      {
        type: "heading",
        content: "Supprimer une tâche"
      },
      {
        type: "code",
        file: "À ajouter dans TaskManager",
        code: "public boolean remove(int index) {\n    if (index < 0 || index >= tasks.size()) {\n        return false;\n    }\n    tasks.remove(index);\n    return true;\n}"
      },
      {
        type: "text",
        content: "La méthode vérifie les bornes avant de supprimer. Elle renvoie true si une tâche a été supprimée, sinon false."
      },
      {
        type: "code",
        file: "À ajouter dans Main après les autres actions",
        code: "manager.remove(1);\nmanager.showAll();"
      },
      {
        type: "heading",
        content: "Exercice"
      },
      {
        type: "text",
        content: "Ajoute une méthode count() qui renvoie le nombre de tâches. Essaie avant de regarder la correction."
      },
      {
        type: "code",
        file: "Correction dans TaskManager",
        code: "public int count() {\n    return tasks.size();\n}"
      },
      {
        type: "tip",
        content: "Un test manuel consiste à prévoir un résultat, lancer le programme, puis comparer la sortie."
      }
    ]
  },
  {
    label: "Maven",
    title: "Versionner avec Git et documenter",
    intro: "Séparer les sources du code généré.",
    blocks: [
      {
        type: "heading",
        content: "Initialiser Git"
      },
      {
        type: "code",
        file: " .gitignore",
        code: "target/\nout/\n.classpath\n.project\n.settings/\n.vscode/"
      },
      {
        type: "code",
        file: "Terminal",
        code: "git init\ngit add .\ngit commit -m \"Initialiser le projet Java Maven\"\ngit status"
      },
      {
        type: "text",
        content: "Le README explique comment installer, compiler et lancer le projet. Le pom.xml et les fichiers .java doivent être suivis par Git."
      },
      {
        type: "code",
        file: "README.md",
        code: "# Gestionnaire de tâches Java\n\nPrérequis : JDK 17 et Maven.\n\n## Compiler\n`mvn compile`\n\n## Exécuter\n`java -cp target/classes fr.learn.tasks.Main`\n\n## Construire le JAR\n`mvn package`"
      },
      {
        type: "tip",
        content: "Commite une étape fonctionnelle à la fois, avec un message précis."
      }
    ]
  },
  {
    label: "Git & bilan",
    title: "Cycle de vie et suite du projet",
    intro: "Savoir gérer un projet Java au quotidien.",
    blocks: [
      {
        type: "heading",
        content: "Commandes essentielles"
      },
      {
        type: "code",
        file: "Terminal",
        code: "mvn clean\nmvn compile\nmvn test\nmvn package\njava -cp target/classes fr.learn.tasks.Main\ngit status\ngit add .\ngit commit -m \"Ajouter la gestion des tâches\""
      },
      {
        type: "text",
        content: "clean efface target ; compile produit les .class ; test lance les tests configurés ; package produit le JAR. Sans tests écrits, mvn test ne valide pas le comportement métier."
      },
      {
        type: "heading",
        content: "Défi final"
      },
      {
        type: "text",
        content: "Ajoute un menu console avec Scanner : 1 afficher, 2 ajouter, 3 terminer, 4 supprimer, 0 quitter. Vérifie les saisies incorrectes."
      },
      {
        type: "code",
        file: "Point de départ pour le menu",
        code: "import java.util.Scanner;\n\nScanner scanner = new Scanner(System.in);\nSystem.out.print(\"Votre choix : \");\nString choice = scanner.nextLine();\nSystem.out.println(\"Choix : \" + choice);"
      },
      {
        type: "tip",
        content: "Étape suivante : tests JUnit, gestion des erreurs, persistance dans un fichier, puis API Spring Boot. La console d’abord !"
      }
    ]
  }
];
