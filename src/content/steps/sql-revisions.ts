import type { CourseStep } from '../../types/course';

export const sqlRevisionSteps: CourseStep[] = [
  {
    label: 'Repères SQL',
    title: 'Comprendre SQL et les bases de données',
    intro: 'Revoir les mots essentiels avant d’écrire une requête.',
    blocks: [
      {
        type: 'heading',
        content: 'Serveur, base, schéma, table',
      },
      {
        type: 'text',
        content: 'PostgreSQL est le serveur de bases de données. pgAdmin est une interface graphique, comme phpMyAdmin pour MySQL. SQL est le langage utilisé pour créer, lire et modifier les données.',
      },
      {
        type: 'code',
        code: 'PostgreSQL 18\n└── bibliotheque\n    └── public (schéma)\n        ├── auteurs (table)\n        └── livres (table)',
        file: 'Organisation',
      },
      {
        type: 'heading',
        content: 'Une table, des lignes, des colonnes',
      },
      {
        type: 'code',
        code: 'auteurs\n id | nom  | prenom\n----+------+--------\n  1 | Hugo | Victor\n  2 | Zola | Émile',
        file: 'Exemple de données',
      },
      {
        type: 'tip',
        content: 'Un schéma PostgreSQL est un espace de noms à l’intérieur d’une base. Le schéma public suffit pour commencer.',
      },
    ],
  },
  {
    label: 'Mots-clés',
    title: 'Retrouver la structure des requêtes',
    intro: 'Associer chaque action à son début de requête.',
    blocks: [
      {
        type: 'heading',
        content: 'Créer et modifier la structure',
      },
      {
        type: 'code',
        code: 'CREATE DATABASE ...;\nCREATE TABLE ... (...);\nALTER TABLE ...;\nDROP TABLE ...;',
        file: 'Mémo SQL',
      },
      {
        type: 'heading',
        content: 'Manipuler les lignes',
      },
      {
        type: 'code',
        code: 'INSERT INTO ... (...) VALUES (...);\nSELECT ... FROM ... WHERE ...;\nUPDATE ... SET ... WHERE ...;\nDELETE FROM ... WHERE ...;',
        file: 'Mémo CRUD',
      },
      {
        type: 'text',
        content: 'DDL : CREATE, ALTER, DROP définissent la structure. DML : INSERT, UPDATE, DELETE manipulent les données. SELECT interroge les données.',
      },
      {
        type: 'tip',
        content: 'Le point-virgule termine une instruction. Les mots-clés SQL peuvent s’écrire en minuscules, mais les majuscules les rendent plus faciles à repérer.',
      },
    ],
  },
  {
    label: 'Créer la base',
    title: 'Créer une DATABASE dans pgAdmin',
    intro: 'Passer du serveur à une base de travail.',
    blocks: [
      {
        type: 'heading',
        content: 'Méthode graphique',
      },
      {
        type: 'text',
        content: 'Dans pgAdmin : clic droit sur Databases → Create → Database… → nomme-la bibliotheque → Save. Actualise Databases si elle n’apparaît pas.',
      },
      {
        type: 'heading',
        content: 'Méthode SQL',
      },
      {
        type: 'code',
        code: 'CREATE DATABASE bibliotheque;',
        file: 'Query Tool connecté à postgres',
      },
      {
        type: 'text',
        content: 'Après création, sélectionne bibliotheque dans l’arborescence et ouvre son Query Tool. La commande MySQL USE bibliotheque; ne fonctionne pas dans PostgreSQL.',
      },
      {
        type: 'code',
        code: 'SELECT current_database(), current_user;',
        file: 'Vérifier la connexion',
      },
      {
        type: 'warning',
        content: 'Ne relance pas CREATE DATABASE si la base existe déjà : PostgreSQL renverra une erreur. Pour t’entraîner à nouveau, choisis un autre nom.',
      },
    ],
  },
  {
    label: 'Types SQL',
    title: 'Choisir les types des colonnes',
    intro: 'Comprendre les principaux types utilisés dans les tables.',
    blocks: [
      {
        type: 'heading',
        content: 'Les types les plus utiles',
      },
      {
        type: 'code',
        code: 'id INTEGER\nnom VARCHAR(100)\ndescription TEXT\nprix NUMERIC(10,2)\ndate_creation DATE\ncree_le TIMESTAMP\nactif BOOLEAN',
        file: 'Exemples de colonnes',
      },
      {
        type: 'text',
        content: 'INTEGER : entier ; VARCHAR(n) : texte limité ; TEXT : texte libre ; NUMERIC(10,2) : nombre décimal exact ; DATE : date ; TIMESTAMP : date et heure ; BOOLEAN : vrai/faux.',
      },
      {
        type: 'tip',
        content: 'Pour une date et heure avec fuseau horaire, PostgreSQL propose TIMESTAMPTZ. Pour les identifiants, on peut aussi utiliser UUID.',
      },
    ],
  },
  {
    label: 'CREATE TABLE',
    title: 'Créer sa première table auteurs',
    intro: 'Définir des colonnes et des contraintes.',
    blocks: [
      {
        type: 'heading',
        content: 'Structure à mémoriser',
      },
      {
        type: 'code',
        code: 'CREATE TABLE nom_table (\n    colonne type contraintes,\n    colonne type contraintes\n);',
        file: 'Syntaxe',
      },
      {
        type: 'heading',
        content: 'Exemple complet',
      },
      {
        type: 'code',
        code: 'CREATE TABLE auteurs (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    nom VARCHAR(100) NOT NULL,\n    prenom VARCHAR(100),\n    email VARCHAR(255) UNIQUE\n);',
        file: 'Dans la base bibliotheque',
      },
      {
        type: 'text',
        content: 'PRIMARY KEY identifie chaque ligne ; NOT NULL rend une valeur obligatoire ; UNIQUE interdit les doublons non nuls. GENERATED ALWAYS AS IDENTITY génère automatiquement un identifiant.',
      },
      {
        type: 'tip',
        content: 'Dans pgAdmin : bibliotheque → Schemas → public → Tables, puis Refresh pour voir auteurs.',
      },
    ],
  },
  {
    label: 'INSERT',
    title: 'Ajouter des lignes avec INSERT INTO',
    intro: 'Comprendre les colonnes et VALUES.',
    blocks: [
      {
        type: 'heading',
        content: 'Insérer des auteurs',
      },
      {
        type: 'code',
        code: "INSERT INTO auteurs (nom, prenom, email)\nVALUES ('Hugo', 'Victor', 'victor@example.com');\n\nINSERT INTO auteurs (nom, prenom, email)\nVALUES ('Zola', 'Émile', 'emile@example.com');",
        file: 'Query Tool',
      },
      {
        type: 'heading',
        content: 'Afficher immédiatement les lignes insérées',
      },
      {
        type: 'code',
        code: "INSERT INTO auteurs (nom, prenom)\nVALUES ('Sand', 'George')\nRETURNING id, nom, prenom;",
        file: 'PostgreSQL : RETURNING',
      },
      {
        type: 'text',
        content: 'Les chaînes de caractères utilisent des apostrophes simples. On ne renseigne pas id : PostgreSQL le génère.',
      },
      {
        type: 'warning',
        content: 'Chaque exécution de INSERT ajoute de nouvelles lignes. Avec une colonne UNIQUE, une seconde insertion du même email provoquera une erreur.',
      },
    ],
  },
  {
    label: 'SELECT',
    title: 'Lire les données avec SELECT',
    intro: 'Afficher les colonnes utiles et filtrer les résultats.',
    blocks: [
      {
        type: 'heading',
        content: 'Lire toutes les colonnes',
      },
      {
        type: 'code',
        code: 'SELECT * FROM auteurs;',
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Choisir les colonnes',
      },
      {
        type: 'code',
        code: 'SELECT nom, prenom FROM auteurs;',
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Filtrer avec WHERE',
      },
      {
        type: 'code',
        code: "SELECT * FROM auteurs\nWHERE nom = 'Hugo';",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Trier et limiter',
      },
      {
        type: 'code',
        code: 'SELECT nom, prenom\nFROM auteurs\nORDER BY nom ASC\nLIMIT 5;',
        file: 'SQL',
      },
      {
        type: 'tip',
        content: 'SELECT ne modifie pas les données. C’est la meilleure commande pour explorer une table.',
      },
    ],
  },
  {
    label: 'Filtres',
    title: 'Maîtriser WHERE, LIKE, IN et NULL',
    intro: 'Construire des conditions sans les apprendre par cœur.',
    blocks: [
      {
        type: 'heading',
        content: 'Comparaisons',
      },
      {
        type: 'code',
        code: "SELECT * FROM auteurs WHERE id > 1;\nSELECT * FROM auteurs WHERE id BETWEEN 1 AND 5;\nSELECT * FROM auteurs WHERE nom IN ('Hugo', 'Zola');",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Combiner des conditions',
      },
      {
        type: 'code',
        code: "SELECT * FROM auteurs\nWHERE nom = 'Hugo' AND prenom = 'Victor';",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Chercher du texte',
      },
      {
        type: 'code',
        code: "SELECT * FROM auteurs WHERE nom ILIKE '%zo%';",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Tester les valeurs absentes',
      },
      {
        type: 'code',
        code: 'SELECT * FROM auteurs WHERE email IS NULL;',
        file: 'SQL',
      },
      {
        type: 'text',
        content: 'ILIKE effectue une recherche insensible à la casse dans PostgreSQL. NULL se teste avec IS NULL, jamais avec = NULL.',
      },
    ],
  },
  {
    label: 'UPDATE DELETE',
    title: 'Modifier et supprimer des lignes',
    intro: 'Comprendre SET, WHERE et les précautions.',
    blocks: [
      {
        type: 'heading',
        content: 'Modifier une valeur',
      },
      {
        type: 'code',
        code: "UPDATE auteurs\nSET prenom = 'Victor-Marie'\nWHERE nom = 'Hugo'\nRETURNING *;",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Supprimer une ligne',
      },
      {
        type: 'code',
        code: "DELETE FROM auteurs\nWHERE nom = 'Sand'\nRETURNING *;",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Vérifier avant de modifier',
      },
      {
        type: 'code',
        code: "SELECT * FROM auteurs WHERE nom = 'Sand';",
        file: 'SQL',
      },
      {
        type: 'warning',
        content: 'Sans WHERE, UPDATE touche toutes les lignes et DELETE supprime toutes les lignes. Vérifie toujours le filtre avant exécution.',
      },
    ],
  },
  {
    label: 'Relations',
    title: 'Créer la table livres et sa clé étrangère',
    intro: 'Relier un livre à un auteur existant.',
    blocks: [
      {
        type: 'heading',
        content: 'Une relation un-à-plusieurs',
      },
      {
        type: 'text',
        content: 'Un auteur peut écrire plusieurs livres. Chaque livre de notre exemple appartient à un seul auteur. La clé étrangère est donc dans livres.',
      },
      {
        type: 'code',
        code: 'CREATE TABLE livres (\n    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n    titre VARCHAR(200) NOT NULL,\n    annee_publication INTEGER,\n    auteur_id INTEGER NOT NULL,\n    CONSTRAINT fk_livres_auteur\n        FOREIGN KEY (auteur_id) REFERENCES auteurs(id)\n);',
        file: 'Créer livres',
      },
      {
        type: 'heading',
        content: 'Insérer un livre lié à un auteur',
      },
      {
        type: 'code',
        code: "INSERT INTO livres (titre, annee_publication, auteur_id)\nSELECT 'Les Misérables', 1862, id\nFROM auteurs WHERE nom = 'Hugo'\nRETURNING *;",
        file: 'SQL',
      },
      {
        type: 'tip',
        content: 'La clé étrangère empêche d’enregistrer un auteur_id qui n’existe pas dans auteurs.',
      },
    ],
  },
  {
    label: 'JOIN',
    title: 'Lire les relations avec JOIN',
    intro: 'Afficher des données provenant de plusieurs tables.',
    blocks: [
      {
        type: 'heading',
        content: 'INNER JOIN',
      },
      {
        type: 'code',
        code: 'SELECT livres.titre, auteurs.nom\nFROM livres\nINNER JOIN auteurs\n    ON livres.auteur_id = auteurs.id;',
        file: 'SQL',
      },
      {
        type: 'text',
        content: 'FROM indique la table de départ ; JOIN indique la table liée ; ON précise la condition de liaison.',
      },
      {
        type: 'heading',
        content: 'LEFT JOIN',
      },
      {
        type: 'code',
        code: 'SELECT auteurs.nom, livres.titre\nFROM auteurs\nLEFT JOIN livres\n    ON livres.auteur_id = auteurs.id;',
        file: 'SQL',
      },
      {
        type: 'text',
        content: 'LEFT JOIN conserve aussi les auteurs sans livre : le titre vaut alors NULL.',
      },
      {
        type: 'tip',
        content: 'Utilise des alias quand les requêtes deviennent longues : FROM livres AS l JOIN auteurs AS a ON l.auteur_id = a.id.',
      },
    ],
  },
  {
    label: 'Agrégations',
    title: 'Compter et regrouper avec GROUP BY',
    intro: 'Construire des statistiques simples.',
    blocks: [
      {
        type: 'heading',
        content: 'Compter les lignes',
      },
      {
        type: 'code',
        code: 'SELECT COUNT(*) AS nombre_auteurs FROM auteurs;',
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Compter les livres par auteur',
      },
      {
        type: 'code',
        code: 'SELECT a.nom, COUNT(l.id) AS nombre_livres\nFROM auteurs AS a\nLEFT JOIN livres AS l ON l.auteur_id = a.id\nGROUP BY a.id, a.nom\nORDER BY nombre_livres DESC;',
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Filtrer les groupes',
      },
      {
        type: 'code',
        code: 'SELECT auteur_id, COUNT(*) AS total\nFROM livres\nGROUP BY auteur_id\nHAVING COUNT(*) >= 1;',
        file: 'SQL',
      },
      {
        type: 'text',
        content: 'WHERE filtre les lignes avant le regroupement ; HAVING filtre les groupes après GROUP BY.',
      },
    ],
  },
  {
    label: 'ALTER TABLE',
    title: 'Faire évoluer la structure',
    intro: 'Ajouter, renommer et retirer une colonne.',
    blocks: [
      {
        type: 'heading',
        content: 'Ajouter une colonne',
      },
      {
        type: 'code',
        code: 'ALTER TABLE livres\nADD COLUMN isbn VARCHAR(20);',
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Renommer une colonne',
      },
      {
        type: 'code',
        code: 'ALTER TABLE livres\nRENAME COLUMN isbn TO code_isbn;',
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Supprimer une colonne',
      },
      {
        type: 'code',
        code: 'ALTER TABLE livres\nDROP COLUMN code_isbn;',
        file: 'SQL',
      },
      {
        type: 'warning',
        content: 'DROP COLUMN supprime les données de cette colonne. N’exécute pas ces commandes à répétition sans vérifier l’état de la table.',
      },
    ],
  },
  {
    label: 'Transactions',
    title: 'Tester des modifications sans risque',
    intro: 'Comprendre BEGIN, COMMIT et ROLLBACK.',
    blocks: [
      {
        type: 'heading',
        content: 'Essayer puis annuler',
      },
      {
        type: 'code',
        code: "BEGIN;\n\nUPDATE auteurs SET prenom = 'Test'\nWHERE nom = 'Hugo';\n\nSELECT * FROM auteurs WHERE nom = 'Hugo';\n\nROLLBACK;",
        file: 'SQL',
      },
      {
        type: 'heading',
        content: 'Valider au lieu d’annuler',
      },
      {
        type: 'code',
        code: 'BEGIN;\n-- Tes modifications ici\nCOMMIT;',
        file: 'Syntaxe',
      },
      {
        type: 'text',
        content: 'BEGIN démarre une transaction ; ROLLBACK annule les modifications non validées ; COMMIT les confirme.',
      },
      {
        type: 'tip',
        content: 'Dans pgAdmin, exécute le bloc complet pour expérimenter. Évite de mélanger des transactions manuelles avec d’autres essais non terminés.',
      },
    ],
  },
  {
    label: 'Exercices',
    title: 'S’entraîner avec corrections',
    intro: 'Vérifier que tu sais reconstruire les requêtes.',
    blocks: [
      {
        type: 'heading',
        content: 'Exercice 1 — lire les auteurs',
      },
      {
        type: 'text',
        content: 'Affiche uniquement le nom et le prénom des auteurs, classés par nom.',
      },
      {
        type: 'code',
        code: 'SELECT nom, prenom\nFROM auteurs\nORDER BY nom ASC;',
        file: 'Correction 1',
      },
      {
        type: 'heading',
        content: 'Exercice 2 — chercher un auteur',
      },
      {
        type: 'text',
        content: 'Retrouve les auteurs dont le nom contient la lettre o, sans tenir compte de la casse.',
      },
      {
        type: 'code',
        code: "SELECT * FROM auteurs\nWHERE nom ILIKE '%o%';",
        file: 'Correction 2',
      },
      {
        type: 'heading',
        content: 'Exercice 3 — afficher les livres et auteurs',
      },
      {
        type: 'text',
        content: 'Affiche le titre de chaque livre avec le nom de son auteur.',
      },
      {
        type: 'code',
        code: 'SELECT l.titre, a.nom\nFROM livres AS l\nJOIN auteurs AS a ON l.auteur_id = a.id;',
        file: 'Correction 3',
      },
      {
        type: 'heading',
        content: 'Exercice 4 — ajouter un auteur',
      },
      {
        type: 'text',
        content: 'Ajoute un auteur de ton choix sans renseigner son identifiant.',
      },
      {
        type: 'code',
        code: "INSERT INTO auteurs (nom, prenom)\nVALUES ('Dumas', 'Alexandre')\nRETURNING *;",
        file: 'Correction 4',
      },
      {
        type: 'tip',
        content: 'Essaie de rédiger chaque requête avant d’afficher sa correction dans le cours.',
      },
    ],
  },
  {
    label: 'Fiche mémo',
    title: 'Retenir les commandes essentielles',
    intro: 'Une fiche courte à retrouver quand tu hésites.',
    blocks: [
      {
        type: 'heading',
        content: 'La syntaxe en un coup d’œil',
      },
      {
        type: 'code',
        code: "CREATE DATABASE bibliotheque;\n\nCREATE TABLE exemple (\n  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  nom VARCHAR(100) NOT NULL\n);\n\nINSERT INTO exemple (nom) VALUES ('Test');\nSELECT * FROM exemple WHERE id = 1;\nUPDATE exemple SET nom = 'Nouveau' WHERE id = 1;\nDELETE FROM exemple WHERE id = 1;",
        file: 'Mémo SQL',
      },
      {
        type: 'heading',
        content: 'À retenir',
      },
      {
        type: 'text',
        content: 'CREATE crée ; INSERT ajoute ; SELECT lit ; UPDATE modifie ; DELETE supprime ; ALTER change la structure ; JOIN relie les tables. Vérifie WHERE avant UPDATE et DELETE.',
      },
      {
        type: 'warning',
        content: 'DROP DATABASE et DROP TABLE suppriment la structure et ses données : réserve-les aux bases d’entraînement.',
      },
    ],
  },
];
