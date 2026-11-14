import type { CourseStep } from '../../types/course';

export const postgresqlSteps: CourseStep[] = [
  {
    label: "Découvrir PostgreSQL",
    title: "Comprendre PostgreSQL, SQL et les outils",
    intro: "Identifier le rôle du serveur, de psql et de pgAdmin.",
    blocks: [
      {
        type: "heading",
        content: "Les outils",
      },
      {
        type: "text",
        content: "PostgreSQL est un serveur de bases de données relationnelles. SQL est le langage de requête. psql est son client en terminal ; pgAdmin 4 est une interface graphique qui permet de naviguer dans les bases et d’exécuter du SQL.",
      },
      {
        type: "code",
        code: "Serveur PostgreSQL\n└── Base bibliotheque_demo\n    └── Schéma public\n        ├── auteurs\n        ├── livres\n        └── emprunts",
        file: "Vue logique",
      },
      {
        type: "heading",
        content: "Comparer avec MySQL",
      },
      {
        type: "text",
        content: "Tu connais déjà MySQL : les principes SELECT, JOIN, PRIMARY KEY et FOREIGN KEY restent les mêmes. PostgreSQL ajoute notamment RETURNING, des types comme UUID et des commandes psql spécifiques.",
      },
      {
        type: "tip",
        content: "Notre fil rouge est une bibliothèque fictive, indépendante de tout projet scolaire.",
      },
    ],
  },
  {
    label: "Installer Windows",
    title: "Installer PostgreSQL et pgAdmin sous Windows",
    intro: "Installer le serveur et conserver les paramètres de connexion.",
    blocks: [
      {
        type: "heading",
        content: "Télécharger",
      },
      {
        type: "text",
        content: "Va sur https://www.postgresql.org/download/windows/ et suis le lien vers l’installateur Windows EDB. Sélectionne PostgreSQL Server, pgAdmin 4 et Command Line Tools. Stack Builder est facultatif.",
      },
      {
        type: "heading",
        content: "Paramètres",
      },
      {
        type: "text",
        content: "Pendant l’installation, définis un mot de passe solide pour le rôle postgres, conserve le port 5432 si disponible et note le répertoire d’installation. Le service PostgreSQL est généralement configuré pour démarrer avec Windows.",
      },
      {
        type: "heading",
        content: "Vérifier le service",
      },
      {
        type: "text",
        content: "Ouvre Services sous Windows et cherche un service postgresql-x64-XX (XX varie selon la version). Son état doit être En cours d’exécution.",
      },
      {
        type: "code",
        code: "\"C:\\Program Files\\PostgreSQL\\<VERSION>\\bin\\psql.exe\" --version",
        file: "Chemin indicatif — remplacer <VERSION>",
      },
      {
        type: "warning",
        content: "Le mot de passe postgres est celui du rôle administrateur PostgreSQL, pas celui de Windows.",
      },
    ],
  },
  {
    label: "Installer macOS / Linux",
    title: "Installer PostgreSQL sur macOS et Linux",
    intro: "Connaître les alternatives selon le système.",
    blocks: [
      {
        type: "heading",
        content: "macOS",
      },
      {
        type: "text",
        content: "Utilise le téléchargement officiel https://www.postgresql.org/download/macosx/ ou Homebrew. pgAdmin peut être installé séparément depuis https://www.pgadmin.org/download/.",
      },
      {
        type: "code",
        code: "brew install postgresql\nbrew services start postgresql\npsql --version",
        file: "macOS — Homebrew",
      },
      {
        type: "heading",
        content: "Ubuntu / Debian",
      },
      {
        type: "code",
        code: "sudo apt update\nsudo apt install postgresql postgresql-client\nsudo systemctl status postgresql",
        file: "Terminal Linux",
      },
      {
        type: "text",
        content: "Sous Ubuntu, le compte système postgres permet généralement une première connexion avec sudo -u postgres psql. La méthode d’authentification diffère selon l’installation.",
      },
      {
        type: "code",
        code: "sudo -u postgres psql",
        file: "Ubuntu / Debian",
      },
      {
        type: "warning",
        content: "Les versions et commandes d’installation peuvent varier selon la distribution. Suis les indications de l’installateur choisi.",
      },
    ],
  },
  {
    label: "Vérifier les outils",
    title: "Vérifier PostgreSQL, psql et le serveur",
    intro: "Ne pas confondre client installé et serveur accessible.",
    blocks: [
      {
        type: "heading",
        content: "Versions",
      },
      {
        type: "code",
        code: "psql --version\npg_config --version",
        file: "Terminal",
      },
      {
        type: "text",
        content: "Ces commandes vérifient les outils, pas forcément que le serveur fonctionne.",
      },
      {
        type: "heading",
        content: "Connexion réelle",
      },
      {
        type: "code",
        code: "psql -h localhost -p 5432 -U postgres -d postgres",
        file: "Terminal",
      },
      {
        type: "code",
        code: "SELECT version();\nSELECT current_database(), current_user;",
        file: "Dans psql ou Query Tool",
      },
      {
        type: "heading",
        content: "Commandes utiles psql",
      },
      {
        type: "code",
        code: "\\l\n\\du\n\\conninfo\n\\q",
        file: "psql uniquement",
      },
      {
        type: "warning",
        content: "Les commandes commençant par \\ sont propres à psql : ne les colle pas dans le Query Tool de pgAdmin.",
      },
    ],
  },
  {
    label: "Découvrir pgAdmin",
    title: "Prendre en main pgAdmin 4",
    intro: "Utiliser une interface graphique sans perdre le SQL de vue.",
    blocks: [
      {
        type: "heading",
        content: "Ouvrir et enregistrer le serveur",
      },
      {
        type: "text",
        content: "Ouvre pgAdmin 4. Dans le panneau Browser, fais Register > Server si aucun serveur local n’apparaît. Dans General, saisis un nom libre (ex. PostgreSQL local). Dans Connection : Host = localhost, Port = 5432, Maintenance database = postgres, Username = postgres et le mot de passe choisi.",
      },
      {
        type: "heading",
        content: "Explorer",
      },
      {
        type: "text",
        content: "Déplie Servers > PostgreSQL local > Databases > postgres > Schemas > public > Tables. Tu verras les objets de la base sélectionnée.",
      },
      {
        type: "heading",
        content: "Exécuter du SQL",
      },
      {
        type: "text",
        content: "Sélectionne une base, puis Tools > Query Tool. Écris une requête et lance-la avec Execute (icône lecture). Les résultats apparaissent dans Data Output.",
      },
      {
        type: "code",
        code: "SELECT current_database();\nSELECT now();",
        file: "pgAdmin — Query Tool",
      },
      {
        type: "tip",
        content: "pgAdmin sert à explorer et administrer ; apprendre le SQL reste indispensable.",
      },
    ],
  },
  {
    label: "Créer la base",
    title: "Créer une base de démonstration",
    intro: "Séparer les exercices de tes autres projets.",
    blocks: [
      {
        type: "heading",
        content: "Depuis pgAdmin",
      },
      {
        type: "text",
        content: "Clic droit sur Databases > Create > Database. Name : bibliotheque_demo. Owner : postgres pour commencer. Enregistre, puis ouvre Query Tool sur cette nouvelle base.",
      },
      {
        type: "heading",
        content: "Équivalent SQL",
      },
      {
        type: "code",
        code: "CREATE DATABASE bibliotheque_demo;",
        file: "Exécuter depuis la base postgres",
      },
      {
        type: "heading",
        content: "Équivalent terminal",
      },
      {
        type: "code",
        code: "psql -h localhost -U postgres -d bibliotheque_demo",
        file: "Terminal",
      },
      {
        type: "code",
        code: "SELECT current_database();",
        file: "SQL",
      },
      {
        type: "warning",
        content: "CREATE DATABASE ne s’exécute pas à l’intérieur d’une transaction. Vérifie toujours la base sélectionnée dans pgAdmin avant de créer des tables.",
      },
    ],
  },

  {
    label: "Naviguer dans pgAdmin",
    title: "Retrouver ses bases, tables, colonnes et données",
    intro: "Apprendre à se repérer dans pgAdmin 4 sans captures d’écran.",
    blocks: [
      { type: "heading", content: "Comprendre l’arborescence" },
      { type: "code", code: "Servers → PostgreSQL 18 → Databases → bibliotheque_demo → Schemas → public → Tables → auteurs → Columns", file: "Navigation pgAdmin" },
      { type: "text", content: "Chaque triangle à gauche développe un niveau. Si une base ou une table nouvellement créée n’apparaît pas, clic droit sur Databases ou Tables → Refresh. Le panneau ne se met pas toujours à jour automatiquement." },
      { type: "heading", content: "Afficher une table et ses lignes" },
      { type: "text", content: "Pour voir la structure : Tables → auteurs → Columns. Pour voir les données : clic droit sur auteurs → View/Edit Data → All Rows. Pour ouvrir l’éditeur SQL : clic droit sur la base souhaitée → Query Tool." },
      { type: "heading", content: "Vérifier la base active" },
      { type: "code", code: "SELECT current_database();\nSELECT current_schema();", file: "Query Tool" },
      { type: "warning", content: "Regarde la barre de connexion au-dessus de l’éditeur : postgres/postgres@PostgreSQL 18 signifie que tu travailles dans la base postgres, pas dans bibliotheque_demo. Une requête CREATE TABLE réussie crée la table dans la base actuellement connectée." },
      { type: "tip", content: "Le dossier Tables se trouve dans Schemas → public, pas directement sous Databases. Tu peux élargir la colonne de gauche en faisant glisser sa bordure." },
    ],
  },
  {
    label: "Créer et retrouver une table",
    title: "Créer une table et vérifier son emplacement",
    intro: "Suivre le parcours complet de la requête SQL jusqu’à l’interface pgAdmin.",
    blocks: [
      { type: "heading", content: "Créer une base depuis pgAdmin" },
      { type: "text", content: "Clic droit sur Databases → Create → Database… → renseigne bibliotheque_demo → Save. Autre méthode : ouvrir Query Tool depuis la base postgres, puis exécuter CREATE DATABASE bibliotheque_demo; et actualiser Databases." },
      { type: "code", code: "CREATE DATABASE bibliotheque_demo;", file: "SQL — sur la base postgres" },
      { type: "heading", content: "Se connecter à la bonne base" },
      { type: "text", content: "Clic droit sur bibliotheque_demo → Query Tool. Vérifie avec SELECT current_database();. PostgreSQL ne reconnaît pas la commande USE bibliotheque_demo; de MySQL." },
      { type: "heading", content: "Créer une table auteurs" },
      { type: "code", code: "CREATE TABLE auteurs (\n  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  nom VARCHAR(100) NOT NULL,\n  prenom VARCHAR(100),\n  email VARCHAR(255) UNIQUE\n);", file: "SQL — sur bibliotheque_demo" },
      { type: "heading", content: "Retrouver la table" },
      { type: "text", content: "Dans l’arborescence : bibliotheque_demo → Schemas → public → Tables. Clic droit sur Tables → Refresh. Développe auteurs → Columns pour vérifier id, nom, prenom et email." },
      { type: "heading", content: "Vérifier aussi par SQL" },
      { type: "code", code: "SELECT table_schema, table_name\nFROM information_schema.tables\nWHERE table_schema = 'public'\nORDER BY table_name;\n\nSELECT * FROM auteurs;", file: "SQL" },
      { type: "tip", content: "CREATE TABLE crée la structure. SELECT * FROM auteurs; renvoie zéro ligne tant que tu n’as pas ajouté d’auteurs avec INSERT INTO." },
    ],
  },
  {
    label: "Utiliser les données dans pgAdmin",
    title: "Afficher, ajouter et modifier les lignes",
    intro: "Apprendre les manipulations graphiques et leur équivalent SQL.",
    blocks: [
      { type: "heading", content: "Insérer une ligne" },
      { type: "code", code: "INSERT INTO auteurs (nom, prenom, email)\nVALUES ('Hugo', 'Victor', 'victor@example.com')\nRETURNING *;", file: "SQL" },
      { type: "text", content: "Dans pgAdmin : clic droit sur auteurs → View/Edit Data → All Rows. Le tableau affiche les données. Tu peux modifier certaines cellules dans cette grille puis enregistrer avec l’icône Save Data Changes, sous réserve que la table soit modifiable." },
      { type: "heading", content: "Rechercher et trier" },
      { type: "code", code: "SELECT id, nom, prenom\nFROM auteurs\nWHERE nom ILIKE 'h%'\nORDER BY nom ASC\nLIMIT 10;", file: "SQL" },
      { type: "text", content: "ILIKE permet une recherche insensible à la casse dans PostgreSQL. ORDER BY trie les résultats ; LIMIT limite le nombre de lignes." },
      { type: "heading", content: "Modifier et supprimer prudemment" },
      { type: "code", code: "UPDATE auteurs SET prenom = 'Victor-Marie' WHERE id = 1 RETURNING *;\nDELETE FROM auteurs WHERE id = 1 RETURNING *;", file: "SQL" },
      { type: "warning", content: "Sans WHERE, UPDATE modifie toutes les lignes et DELETE les supprime toutes. Vérifie d’abord la sélection avec SELECT ... WHERE ... ." },
      { type: "heading", content: "Voir le SQL généré par pgAdmin" },
      { type: "text", content: "Dans l’arborescence, sélectionne un objet puis cherche l’onglet SQL dans ses propriétés : pgAdmin peut afficher la définition SQL de l’objet. Selon la version et la vue, l’emplacement de l’onglet varie." },
      { type: "tip", content: "Pour ne pas perdre tes requêtes, enregistre un fichier .sql avec l’icône disquette du Query Tool. Le Query History permet aussi de retrouver les requêtes exécutées." },
    ],
  },
  {
    label: "Dépanner PostgreSQL",
    title: "Comprendre les erreurs les plus fréquentes",
    intro: "Savoir diagnostiquer un problème sans capture d’écran.",
    blocks: [
      { type: "heading", content: "La table est introuvable" },
      { type: "code", code: "SELECT current_database();\nSELECT current_schema();\nSELECT table_schema, table_name\nFROM information_schema.tables\nWHERE table_name = 'users';", file: "Diagnostic SQL" },
      { type: "text", content: "Si la requête de création a réussi mais que la table n’apparaît pas, vérifie la base connectée, le schéma et l’actualisation de Tables. Une table créée dans postgres n’apparaît pas dans intravarsa." },
      { type: "heading", content: "Messages d’erreur courants" },
      { type: "text", content: "relation \"auteurs\" already exists : la table existe déjà. relation \"auteurs\" does not exist : mauvaise base, mauvais schéma ou nom. permission denied : rôle sans droits suffisants. duplicate key value violates unique constraint : valeur déjà présente dans une colonne UNIQUE ou une clé primaire." },
      { type: "heading", content: "Vérifier avant de modifier" },
      { type: "code", code: "SELECT current_database();\nSELECT * FROM auteurs LIMIT 5;", file: "SQL" },
      { type: "warning", content: "Évite DROP DATABASE, DROP TABLE et TRUNCATE pendant les exercices tant que tu ne sais pas exactement quelles données seront effacées." },
      { type: "tip", content: "Le panneau Messages indique si la requête a réussi. Data Output affiche les lignes renvoyées par SELECT ou RETURNING." },
    ],
  },
  {
    label: "Rappels SQL",
    title: "Réviser les fondamentaux SQL",
    intro: "Revoir DDL, DML, requêtes et clauses.",
    blocks: [
      {
        type: "heading",
        content: "Les familles de commandes",
      },
      {
        type: "text",
        content: "DDL : CREATE, ALTER, DROP définissent les objets. DML : INSERT, UPDATE, DELETE modifient les lignes. SELECT interroge les données. Les droits se gèrent notamment avec GRANT et REVOKE.",
      },
      {
        type: "heading",
        content: "Structure d’une requête",
      },
      {
        type: "code",
        code: "SELECT titre, annee_publication\nFROM livres\nWHERE annee_publication >= 2020\nORDER BY titre ASC\nLIMIT 10;",
        file: "SQL — après création des tables",
      },
      {
        type: "text",
        content: "SELECT choisit les colonnes, FROM la table, WHERE filtre, ORDER BY trie et LIMIT limite le nombre de résultats.",
      },
      {
        type: "heading",
        content: "Conditions",
      },
      {
        type: "code",
        code: "SELECT * FROM livres\nWHERE annee_publication BETWEEN 2015 AND 2025\n  AND titre ILIKE '%sql%';",
        file: "SQL",
      },
      {
        type: "tip",
        content: "ILIKE effectue une comparaison insensible à la casse, contrairement à LIKE dans de nombreux cas.",
      },
    ],
  },
  {
    label: "Types et contraintes",
    title: "Choisir les types et les contraintes",
    intro: "Passer d’un modèle logique à des colonnes SQL.",
    blocks: [
      {
        type: "heading",
        content: "Types fréquents",
      },
      {
        type: "text",
        content: "INTEGER / BIGINT : entiers ; VARCHAR(n) / TEXT : texte ; DATE : date ; TIMESTAMP / TIMESTAMPTZ : date-heure ; NUMERIC(10,2) : décimal précis ; BOOLEAN : vrai/faux ; UUID : identifiant.",
      },
      {
        type: "heading",
        content: "Créer les tables du fil rouge",
      },
      {
        type: "code",
        code: "CREATE TABLE auteurs (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  nom VARCHAR(120) NOT NULL\n);\n\nCREATE TABLE livres (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  auteur_id BIGINT NOT NULL REFERENCES auteurs(id),\n  titre VARCHAR(200) NOT NULL,\n  annee_publication INTEGER CHECK (annee_publication >= 1450),\n  isbn VARCHAR(20) UNIQUE\n);\n\nCREATE TABLE emprunts (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  livre_id BIGINT NOT NULL REFERENCES livres(id),\n  emprunteur VARCHAR(120) NOT NULL,\n  date_emprunt DATE NOT NULL DEFAULT CURRENT_DATE,\n  date_retour DATE,\n  CONSTRAINT retour_valide CHECK (date_retour IS NULL OR date_retour >= date_emprunt)\n);",
        file: "pgAdmin — Query Tool",
      },
      {
        type: "tip",
        content: "GENERATED ALWAYS AS IDENTITY est une solution moderne pour les identifiants auto-incrémentés.",
      },
    ],
  },
  {
    label: "Manipuler les données",
    title: "Pratiquer INSERT, SELECT, UPDATE et DELETE",
    intro: "Voir immédiatement le résultat dans pgAdmin.",
    blocks: [
      {
        type: "heading",
        content: "Insérer des exemples",
      },
      {
        type: "code",
        code: "INSERT INTO auteurs (nom) VALUES ('Camille Martin'), ('Alex Bernard') RETURNING *;\n\nINSERT INTO livres (auteur_id, titre, annee_publication, isbn)\nSELECT id, 'Découvrir SQL', 2023, 'DEMO-001'\nFROM auteurs WHERE nom = 'Camille Martin'\nRETURNING *;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Lire et modifier",
      },
      {
        type: "code",
        code: "SELECT * FROM livres ORDER BY id;\n\nUPDATE livres SET annee_publication = 2024\nWHERE isbn = 'DEMO-001' RETURNING *;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Supprimer en sécurité",
      },
      {
        type: "code",
        code: "DELETE FROM livres WHERE isbn = 'DEMO-001' RETURNING *;",
        file: "SQL — exemple à exécuter seulement si souhaité",
      },
      {
        type: "warning",
        content: "Toujours vérifier WHERE avant UPDATE ou DELETE. RETURNING affiche les lignes concernées.",
      },
    ],
  },
  {
    label: "Relations et jointures",
    title: "Comprendre les clés étrangères et JOIN",
    intro: "Relier auteurs, livres et emprunts.",
    blocks: [
      {
        type: "heading",
        content: "Une relation un-à-plusieurs",
      },
      {
        type: "text",
        content: "Un auteur peut avoir plusieurs livres. Chaque livre référence un auteur grâce à auteur_id. La clé étrangère évite de référencer un auteur inexistant.",
      },
      {
        type: "heading",
        content: "INNER JOIN",
      },
      {
        type: "code",
        code: "SELECT l.titre, a.nom AS auteur\nFROM livres AS l\nINNER JOIN auteurs AS a ON a.id = l.auteur_id\nORDER BY l.titre;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "LEFT JOIN",
      },
      {
        type: "code",
        code: "SELECT a.nom, COUNT(l.id) AS nombre_livres\nFROM auteurs AS a\nLEFT JOIN livres AS l ON l.auteur_id = a.id\nGROUP BY a.id, a.nom\nORDER BY nombre_livres DESC;",
        file: "SQL",
      },
      {
        type: "tip",
        content: "LEFT JOIN conserve les auteurs même sans livre. COUNT(l.id) retourne alors 0.",
      },
    ],
  },
  {
    label: "Requêtes avancées",
    title: "GROUP BY, HAVING, agrégats et sous-requêtes",
    intro: "Produire des statistiques simples.",
    blocks: [
      {
        type: "heading",
        content: "Regrouper",
      },
      {
        type: "code",
        code: "SELECT auteur_id, COUNT(*) AS total\nFROM livres\nGROUP BY auteur_id\nHAVING COUNT(*) >= 1;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Sous-requête",
      },
      {
        type: "code",
        code: "SELECT titre FROM livres\nWHERE auteur_id IN (\n  SELECT id FROM auteurs WHERE nom ILIKE '%martin%'\n);",
        file: "SQL",
      },
      {
        type: "text",
        content: "WHERE filtre les lignes avant regroupement ; HAVING filtre les groupes après GROUP BY.",
      },
    ],
  },
  {
    label: "Modifier une table",
    title: "ALTER TABLE et migrations simples",
    intro: "Faire évoluer le schéma sans tout effacer.",
    blocks: [
      {
        type: "heading",
        content: "Ajouter une colonne",
      },
      {
        type: "code",
        code: "ALTER TABLE livres\nADD COLUMN disponible BOOLEAN NOT NULL DEFAULT TRUE;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Créer un index",
      },
      {
        type: "code",
        code: "CREATE INDEX idx_livres_auteur_id ON livres(auteur_id);",
        file: "SQL",
      },
      {
        type: "text",
        content: "Un index peut accélérer certaines recherches mais occupe de l’espace et ajoute du travail aux écritures.",
      },
      {
        type: "warning",
        content: "Évite de modifier à l’aveugle une base qui contient des données importantes. Sauvegarde et teste les migrations.",
      },
    ],
  },
  {
    label: "Transactions",
    title: "Comprendre BEGIN, COMMIT et ROLLBACK",
    intro: "Annuler un ensemble de modifications si nécessaire.",
    blocks: [
      {
        type: "heading",
        content: "Tester une transaction",
      },
      {
        type: "code",
        code: "BEGIN;\nINSERT INTO auteurs (nom) VALUES ('Auteur temporaire');\nSELECT * FROM auteurs WHERE nom = 'Auteur temporaire';\nROLLBACK;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Enregistrer définitivement",
      },
      {
        type: "code",
        code: "BEGIN;\nINSERT INTO auteurs (nom) VALUES ('Auteur conservé');\nCOMMIT;",
        file: "SQL",
      },
      {
        type: "tip",
        content: "Dans pgAdmin, exécute le bloc complet dans la même session du Query Tool.",
      },
    ],
  },
  {
    label: "Gérer avec pgAdmin",
    title: "Créer, inspecter et exporter avec pgAdmin",
    intro: "Savoir administrer une base en interface graphique.",
    blocks: [
      {
        type: "heading",
        content: "Voir les lignes",
      },
      {
        type: "text",
        content: "Dans Browser, déplie Databases > bibliotheque_demo > Schemas > public > Tables. Clic droit sur livres > View/Edit Data > All Rows.",
      },
      {
        type: "heading",
        content: "Voir les propriétés",
      },
      {
        type: "text",
        content: "Clic droit sur une table > Properties pour examiner ses colonnes, contraintes et autres propriétés. Pour inspecter le SQL généré, utilise l’onglet SQL lorsque disponible.",
      },
      {
        type: "heading",
        content: "Sauvegarder",
      },
      {
        type: "text",
        content: "Clic droit sur bibliotheque_demo > Backup. Choisis un fichier et le format Custom. Pour restaurer, crée une base de destination puis utilise Restore sur celle-ci.",
      },
      {
        type: "heading",
        content: "Alternative terminal",
      },
      {
        type: "code",
        code: "pg_dump -h localhost -U postgres -Fc -f bibliotheque_demo.dump bibliotheque_demo",
        file: "Terminal",
      },
      {
        type: "warning",
        content: "Ne mets jamais de mots de passe ou de sauvegardes contenant des données personnelles dans Git.",
      },
    ],
  },
  {
    label: "Connexion backend",
    title: "Comprendre la connexion depuis une application",
    intro: "Voir le rôle du pilote sans dépendre d’un framework.",
    blocks: [
      {
        type: "heading",
        content: "Chaîne de connexion",
      },
      {
        type: "code",
        code: "postgresql://utilisateur:mot_de_passe@localhost:5432/bibliotheque_demo",
        file: "Format conceptuel — ne pas publier",
      },
      {
        type: "heading",
        content: "Node.js",
      },
      {
        type: "code",
        code: "import pg from 'pg';\nconst pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });\nconst result = await pool.query('SELECT id, titre FROM livres');\nconsole.log(result.rows);\nawait pool.end();",
        file: "Node.js — après npm install pg",
      },
      {
        type: "heading",
        content: "Spring Boot",
      },
      {
        type: "code",
        code: "spring.datasource.url=jdbc:postgresql://localhost:5432/bibliotheque_demo\nspring.datasource.username=${DB_USER}\nspring.datasource.password=${DB_PASSWORD}",
        file: "application.properties",
      },
      {
        type: "warning",
        content: "Les exemples backend supposent un projet configuré et un compte autorisé. Préfère un rôle applicatif dédié plutôt que postgres.",
      },
    ],
  },
  {
    label: "Exercices corrigés",
    title: "Valider les acquis sur la bibliothèque",
    intro: "Refaire les requêtes sans recopier puis comparer.",
    blocks: [
      {
        type: "heading",
        content: "Défi 1",
      },
      {
        type: "text",
        content: "Ajoute un auteur et deux livres. Affiche les livres triés par titre.",
      },
      {
        type: "heading",
        content: "Correction 1",
      },
      {
        type: "code",
        code: "INSERT INTO auteurs (nom) VALUES ('Nora Petit');\nINSERT INTO livres (auteur_id, titre, annee_publication)\nSELECT id, 'Apprendre PostgreSQL', 2024 FROM auteurs WHERE nom = 'Nora Petit';\nINSERT INTO livres (auteur_id, titre, annee_publication)\nSELECT id, 'SQL pratique', 2025 FROM auteurs WHERE nom = 'Nora Petit';\nSELECT titre FROM livres ORDER BY titre;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Défi 2",
      },
      {
        type: "text",
        content: "Compte les livres de chaque auteur, y compris ceux qui n’en ont pas.",
      },
      {
        type: "heading",
        content: "Correction 2",
      },
      {
        type: "code",
        code: "SELECT a.nom, COUNT(l.id) AS total\nFROM auteurs a LEFT JOIN livres l ON l.auteur_id = a.id\nGROUP BY a.id, a.nom ORDER BY a.nom;",
        file: "SQL",
      },
      {
        type: "heading",
        content: "Bilan",
      },
      {
        type: "text",
        content: "Tu sais installer PostgreSQL, te connecter via pgAdmin et psql, créer une base, construire des tables, pratiquer le CRUD, les jointures et les transactions. Tu peux maintenant appliquer ces notions à ton propre MLD.",
      },
    ],
  },
];
