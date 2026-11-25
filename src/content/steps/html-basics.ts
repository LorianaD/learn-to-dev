import type { CourseStep } from '../../types/course';

export const htmlBasicsSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Comprendre le Web",
    "intro": "HTML décrit la structure, CSS la présentation et JavaScript le comportement. Le navigateur interprète le HTML reçu du serveur.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "HTML décrit la structure, CSS la présentation et JavaScript le comportement. Le navigateur interprète le HTML reçu du serveur."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<h1>Bonjour</h1>\n<p>Ma première page.</p>"
      },
      {
        "type": "warning",
        "content": "HTML est un langage de balisage, pas un langage de programmation."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Change le titre et observe le résultat."
      }
    ]
  },
  {
    "label": "Premier projet",
    "title": "Créer son premier site",
    "intro": "Dans VS Code, ouvre un dossier portfolio. Crée index.html, style.css et un dossier images. Ouvre index.html dans ton navigateur puis actualise après chaque modification.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Dans VS Code, ouvre un dossier portfolio. Crée index.html, style.css et un dossier images. Ouvre index.html dans ton navigateur puis actualise après chaque modification."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "mkdir portfolio\ncd portfolio\ncode ."
      },
      {
        "type": "warning",
        "content": "La commande code nécessite que VS Code soit accessible dans le PATH."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée index.html et ouvre-le par double-clic."
      }
    ]
  },
  {
    "label": "Anatomie HTML",
    "title": "Lire et écrire un élément HTML",
    "intro": "Découvrir chaque symbole avant de construire une page.",
    "blocks": [
      {
        "type": "heading",
        "content": "Balise et élément"
      },
      {
        "type": "text",
        "content": "Les chevrons < et > délimitent une balise. `p` est le nom de la balise (paragraph). La balise ouvrante commence l’élément ; la balise fermante contient un `/`. Le texte entre les deux est le contenu. L’ensemble constitue un élément HTML."
      },
      {
        "type": "code",
        "code": "<p>Bonjour</p>"
      },
      {
        "type": "heading",
        "content": "Éléments vides"
      },
      {
        "type": "text",
        "content": "Certains éléments ne peuvent pas contenir de texte ou d’enfants : img, br, hr, input, meta et link. Ils n’ont pas de balise fermante en HTML."
      },
      {
        "type": "code",
        "code": "<br>\n<hr>\n<img src=\"photo.jpg\" alt=\"Un paysage\">"
      },
      {
        "type": "heading",
        "content": "Commentaires"
      },
      {
        "type": "text",
        "content": "Un commentaire sert à expliquer le code. Il ne s’affiche pas dans la page mais reste visible dans le code source."
      },
      {
        "type": "code",
        "code": "<!-- Ceci est un commentaire -->\n<p>Texte visible</p>"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Écris un paragraphe, un saut de ligne et un deuxième paragraphe. Identifie les balises et le contenu."
      }
    ]
  },
  {
    "label": "Attributs",
    "title": "Comprendre les attributs HTML",
    "intro": "Configurer un élément et comprendre les valeurs.",
    "blocks": [
      {
        "type": "heading",
        "content": "Nom et valeur"
      },
      {
        "type": "text",
        "content": "Un attribut se place dans la balise ouvrante. Il possède généralement un nom, un signe égal et une valeur entre guillemets. Ici href indique la destination et title une information complémentaire."
      },
      {
        "type": "code",
        "code": "<a href=\"contact.html\" title=\"Nous contacter\">Contact</a>"
      },
      {
        "type": "heading",
        "content": "Attributs globaux"
      },
      {
        "type": "text",
        "content": "`id` identifie un élément de façon unique dans la page. `class` peut être partagé par plusieurs éléments et contenir plusieurs noms séparés par des espaces. `lang` indique la langue. `data-*` permet de stocker des données personnalisées."
      },
      {
        "type": "code",
        "code": "<p id=\"intro\" class=\"texte important\" lang=\"fr\" data-theme=\"accueil\">Bonjour</p>"
      },
      {
        "type": "heading",
        "content": "Attributs spécifiques"
      },
      {
        "type": "text",
        "content": "`src` indique une ressource, `alt` son alternative textuelle pour une image, `href` la destination d’un lien, `type` le type d’un champ, `name` son nom lors de l’envoi, `value` sa valeur et `placeholder` une indication de saisie."
      },
      {
        "type": "code",
        "code": "<img src=\"chat.jpg\" alt=\"Chat gris\">\n<input type=\"text\" name=\"prenom\" placeholder=\"Alice\">"
      },
      {
        "type": "heading",
        "content": "Attributs booléens"
      },
      {
        "type": "text",
        "content": "La présence de required, disabled ou checked active la propriété correspondante sur les éléments compatibles. Même required=\"false\" active required : pour le désactiver, retire l’attribut."
      },
      {
        "type": "code",
        "code": "<input type=\"email\" required>\n<button disabled>Envoyer</button>"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée deux paragraphes de même classe mais avec des identifiants différents. Crée un champ obligatoire."
      }
    ]
  },
  {
    "label": "Imbrication",
    "title": "Comprendre parents, enfants et frères",
    "intro": "Organiser les éléments en arbre.",
    "blocks": [
      {
        "type": "heading",
        "content": "Relations"
      },
      {
        "type": "text",
        "content": "section est le parent de h2 et p. Ces deux éléments sont enfants de section et frères entre eux. L’indentation facilite la lecture mais ne crée pas la relation."
      },
      {
        "type": "code",
        "code": "<section>\n    <h2>Présentation</h2>\n    <p>Bonjour !</p>\n</section>"
      },
      {
        "type": "heading",
        "content": "Ordre de fermeture"
      },
      {
        "type": "text",
        "content": "Ferme d’abord le dernier élément ouvert. Certaines imbrications sont interdites, par exemple un div dans un p. Le navigateur peut corriger le code de manière inattendue."
      },
      {
        "type": "code",
        "code": "<!-- Correct -->\n<p>Un texte <strong>important</strong>.</p>\n<!-- Incorrect -->\n<p><strong>Texte</p></strong>"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute une liste dans une section et identifie les parents et enfants."
      }
    ]
  },
  {
    "label": "Structure HTML",
    "title": "Construire un document complet",
    "intro": "DOCTYPE active le mode standard. head contient les métadonnées et body le contenu visible.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "DOCTYPE active le mode standard. head contient les métadonnées et body le contenu visible."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Mon portfolio</title>\n</head>\n<body>\n  <h1>Bienvenue</h1>\n</body>\n</html>"
      },
      {
        "type": "warning",
        "content": "Ne place pas le contenu visible dans head."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée ce document et change le titre de l’onglet."
      }
    ]
  },
  {
    "label": "Pratique des balises",
    "title": "Réviser les balises et les attributs",
    "intro": "Une balise peut contenir du texte ou d’autres éléments. Les attributs précisent son comportement. Certaines balises sont vides, comme img et br.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Une balise peut contenir du texte ou d’autres éléments. Les attributs précisent son comportement. Certaines balises sont vides, comme img et br."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<!-- Commentaire -->\n<p class=\"intro\">Bonjour <strong>tout le monde</strong>.</p>\n<hr>"
      },
      {
        "type": "warning",
        "content": "Ferme les éléments dans l’ordre inverse de leur ouverture."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute une classe à un paragraphe."
      }
    ]
  },
  {
    "label": "Textes",
    "title": "Structurer le contenu textuel",
    "intro": "Les titres h1 à h6 représentent une hiérarchie. strong marque une importance et em une emphase.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Les titres h1 à h6 représentent une hiérarchie. strong marque une importance et em une emphase."
      },
      {
        "type": "heading",
        "content": "Choisir la bonne balise"
      },
      {
        "type": "text",
        "content": "h1 à h6 indiquent des niveaux de titres, pas des tailles de police. p représente un paragraphe, strong une importance forte, em une emphase, br un saut de ligne et hr une séparation thématique. span est un conteneur générique dans le texte ; div un conteneur générique de contenu."
      },
      {
        "type": "code",
        "code": "<h1>Mon site</h1>\n<h2>Présentation</h2>\n<p>Un mot <strong>important</strong> et un mot <em>accentué</em>.</p>"
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<h1>Portfolio</h1>\n<h2>Présentation</h2>\n<p>Je découvre le <strong>Web</strong>.</p>\n<p>Un projet <em>personnel</em>.</p>\n<blockquote>Apprendre en pratiquant.</blockquote>"
      },
      {
        "type": "warning",
        "content": "Ne choisis pas un niveau de titre uniquement pour sa taille."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée deux sections avec des titres h2."
      }
    ]
  },
  {
    "label": "Liens",
    "title": "Créer une navigation",
    "intro": "href contient une URL, un chemin relatif ou une ancre. Un lien sert à naviguer ; un bouton déclenche une action.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "href contient une URL, un chemin relatif ou une ancre. Un lien sert à naviguer ; un bouton déclenche une action."
      },
      {
        "type": "heading",
        "content": "Comprendre les chemins"
      },
      {
        "type": "text",
        "content": "href indique où aller. Un chemin relatif part du dossier du document : contact.html est voisin, pages/contact.html est dans un sous-dossier, ../index.html remonte d’un dossier. Une URL absolue commence par exemple par https://. Une ancre #contact cible un id."
      },
      {
        "type": "code",
        "code": "<a href=\"pages/contact.html\">Contact</a>\n<a href=\"#contact\">Aller au contact</a>\n<section id=\"contact\">Contact</section>"
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<a href=\"contact.html\">Contact</a>\n<a href=\"#projets\">Mes projets</a>\n<a href=\"https://developer.mozilla.org/\" target=\"_blank\" rel=\"noopener\">MDN</a>\n<section id=\"projets\"><h2>Projets</h2></section>"
      },
      {
        "type": "warning",
        "content": "Les identifiants doivent être uniques dans la page."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée contact.html et un lien de retour."
      }
    ]
  },
  {
    "label": "Images",
    "title": "Insérer des images accessibles",
    "intro": "src indique le chemin et alt décrit l’information utile. figure et figcaption associent une légende.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "src indique le chemin et alt décrit l’information utile. figure et figcaption associent une légende."
      },
      {
        "type": "heading",
        "content": "Comprendre src et alt"
      },
      {
        "type": "text",
        "content": "src est le chemin du fichier image. alt décrit son information utile ; pour une image purement décorative, utilise alt=\"\". width et height peuvent indiquer les dimensions intrinsèques pour réserver de la place."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<figure>\n  <img src=\"images/projet.jpg\" alt=\"Capture du tableau de bord\" width=\"640\" height=\"360\">\n  <figcaption>Mon premier projet</figcaption>\n</figure>"
      },
      {
        "type": "warning",
        "content": "Utilise alt=\"\" pour une image purement décorative ; ne laisse pas un chemin fictif en production."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute une image réelle dans images et adapte son chemin."
      }
    ]
  },
  {
    "label": "Listes",
    "title": "Présenter des collections",
    "intro": "ul crée une liste non ordonnée, ol une liste ordonnée et dl une liste de définitions.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "ul crée une liste non ordonnée, ol une liste ordonnée et dl une liste de définitions."
      },
      {
        "type": "heading",
        "content": "Choisir le type de liste"
      },
      {
        "type": "text",
        "content": "ul est une liste sans ordre particulier, ol une liste ordonnée et li un élément de liste. dl contient des termes dt et leurs descriptions dd."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<ol><li>Créer le fichier</li><li>Ouvrir la page</li></ol>\n<dl><dt>HTML</dt><dd>Langage de balisage</dd></dl>"
      },
      {
        "type": "warning",
        "content": "Les éléments li doivent appartenir à une liste appropriée."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Liste trois compétences et trois étapes d’un projet."
      }
    ]
  },
  {
    "label": "Tableaux",
    "title": "Présenter des données tabulaires",
    "intro": "caption décrit le tableau, th identifie les en-têtes et td contient les données.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "caption décrit le tableau, th identifie les en-têtes et td contient les données."
      },
      {
        "type": "heading",
        "content": "Lire la structure"
      },
      {
        "type": "text",
        "content": "table contient le tableau ; caption donne son titre ; tr représente une ligne ; th une cellule d’en-tête ; td une cellule de données. thead et tbody regroupent les lignes. scope=\"col\" associe un en-tête à sa colonne."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<table>\n  <caption>Compétences</caption>\n  <thead><tr><th scope=\"col\">Langage</th><th scope=\"col\">Niveau</th></tr></thead>\n  <tbody><tr><td>HTML</td><td>Débutant</td></tr></tbody>\n</table>"
      },
      {
        "type": "warning",
        "content": "N’utilise pas table pour la mise en page."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute une ligne CSS."
      }
    ]
  },
  {
    "label": "HTML sémantique",
    "title": "Organiser une page",
    "intro": "Les éléments sémantiques décrivent leur rôle. main contient le contenu principal, article un contenu autonome et section une partie thématique.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Les éléments sémantiques décrivent leur rôle. main contient le contenu principal, article un contenu autonome et section une partie thématique."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<header><nav><a href=\"#projets\">Projets</a></nav></header>\n<main>\n  <h1>Portfolio</h1>\n  <section id=\"projets\"><h2>Projets</h2><article><h3>Site web</h3></article></section>\n</main>\n<footer>Contact</footer>"
      },
      {
        "type": "warning",
        "content": "Une div reste utile lorsqu’aucun rôle sémantique ne convient."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Transforme une page composée de div en structure sémantique."
      }
    ]
  },
  {
    "label": "Formulaires",
    "title": "Collecter des informations",
    "intro": "label est associé à un champ par for et id. name identifie la donnée envoyée au serveur.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "label est associé à un champ par for et id. name identifie la donnée envoyée au serveur."
      },
      {
        "type": "heading",
        "content": "Rôle de chaque élément"
      },
      {
        "type": "text",
        "content": "form regroupe les champs. action indique la destination de l’envoi et method la méthode HTTP. label donne un nom accessible au champ : for correspond à son id. input saisit une valeur, textarea un texte long, select propose des option, button déclenche une action. name est la clé envoyée au serveur. Sans serveur, le formulaire ne transmet pas réellement un message à un destinataire."
      },
      {
        "type": "code",
        "code": "<form action=\"/contact\" method=\"post\">\n  <label for=\"email\">Adresse e-mail</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n  <button type=\"submit\">Envoyer</button>\n</form>"
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<form action=\"/contact\" method=\"post\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n  <label for=\"subject\">Sujet</label>\n  <select id=\"subject\" name=\"subject\"><option value=\"projet\">Projet</option></select>\n  <label for=\"message\">Message</label>\n  <textarea id=\"message\" name=\"message\" required></textarea>\n  <button type=\"submit\">Envoyer</button>\n</form>"
      },
      {
        "type": "warning",
        "content": "La route /contact nécessite un serveur ; HTML seul ne transmet pas de courriel."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute un champ nom et une case à cocher avec label."
      }
    ]
  },
  {
    "label": "Validation",
    "title": "Vérifier les champs",
    "intro": "Le navigateur vérifie les contraintes natives avant une soumission normale.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Le navigateur vérifie les contraintes natives avant une soumission normale."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<label for=\"pseudo\">Pseudo</label>\n<input id=\"pseudo\" name=\"pseudo\" required minlength=\"3\" maxlength=\"20\" pattern=\"[A-Za-z0-9]+\">\n<label for=\"age\">Âge</label>\n<input id=\"age\" name=\"age\" type=\"number\" min=\"18\" max=\"120\">"
      },
      {
        "type": "warning",
        "content": "La validation côté serveur reste indispensable."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Insère ces champs dans un formulaire et teste des valeurs invalides."
      }
    ]
  },
  {
    "label": "Multimédia",
    "title": "Intégrer audio et vidéo",
    "intro": "controls affiche les commandes. Les sous-titres utilisent track et un fichier WebVTT.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "controls affiche les commandes. Les sous-titres utilisent track et un fichier WebVTT."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<video controls width=\"640\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"demo-fr.vtt\" srclang=\"fr\" label=\"Français\">\n</video>\n<audio controls src=\"audio.mp3\"></audio>\n<iframe src=\"contact.html\" title=\"Page de contact\" loading=\"lazy\"></iframe>"
      },
      {
        "type": "warning",
        "content": "Évite la lecture automatique sonore et les iframes de sources non fiables."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste une vidéo locale avec un fichier existant."
      }
    ]
  },
  {
    "label": "Métadonnées et SEO",
    "title": "Renseigner les informations de page",
    "intro": "Le titre et la description renseignent les moteurs de recherche. Le favicon identifie l’onglet.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Le titre et la description renseignent les moteurs de recherche. Le favicon identifie l’onglet."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<title>Portfolio — Développement web</title>\n<meta name=\"description\" content=\"Découvrez mes projets web.\">\n<link rel=\"icon\" href=\"favicon.svg\" type=\"image/svg+xml\">"
      },
      {
        "type": "warning",
        "content": "Les métadonnées ne garantissent pas un classement dans les résultats."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute ces éléments dans head."
      }
    ]
  },
  {
    "label": "Accessibilité",
    "title": "Rendre la page utilisable",
    "intro": "Utilise les éléments natifs, des labels, des titres cohérents et des textes de liens explicites. Teste Tab, Entrée et Espace.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Utilise les éléments natifs, des labels, des titres cohérents et des textes de liens explicites. Teste Tab, Entrée et Espace."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "<a href=\"#contenu\">Aller au contenu</a>\n<main id=\"contenu\"><h1>Portfolio</h1><button type=\"button\">Afficher les détails</button></main>"
      },
      {
        "type": "warning",
        "content": "Ne remplace pas un bouton par une div cliquable."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Parcours la page sans souris et vérifie le focus."
      }
    ]
  },
  {
    "label": "Projet pratique",
    "title": "Construire un portfolio",
    "intro": "Réutiliser les notions du cours dans un projet complet.",
    "blocks": [
      {
        "type": "heading",
        "content": "Consignes"
      },
      {
        "type": "text",
        "content": "Crée index.html, puis une navigation, trois cartes de projets et un formulaire. Le lien style.css prépare le cours CSS suivant ; tu peux créer un fichier vide pour le moment."
      },
      {
        "type": "heading",
        "content": "Correction complète"
      },
      {
        "type": "code",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <meta name=\"description\" content=\"Portfolio de développement web\">\n  <title>Mon portfolio</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <header class=\"site-header\">\n    <nav class=\"container\" aria-label=\"Navigation principale\">\n      <a href=\"#accueil\">Accueil</a>\n      <a href=\"#projets\">Projets</a>\n      <a href=\"#contact\">Contact</a>\n    </nav>\n  </header>\n  <main class=\"container\" id=\"accueil\">\n    <section class=\"hero\">\n      <h1>Mon portfolio</h1>\n      <p>Je découvre le développement web.</p>\n    </section>\n    <section id=\"projets\">\n      <h2>Mes projets</h2>\n      <div class=\"projects\">\n        <article class=\"card\"><h3>Site vitrine</h3><p>Une page HTML.</p></article>\n        <article class=\"card\"><h3>Portfolio</h3><p>Une interface responsive.</p></article>\n        <article class=\"card\"><h3>Application</h3><p>Un futur projet JavaScript.</p></article>\n      </div>\n    </section>\n    <section id=\"contact\">\n      <h2>Contact</h2>\n      <form action=\"/contact\" method=\"post\">\n        <label for=\"name\">Nom</label>\n        <input id=\"name\" name=\"name\" required>\n        <label for=\"email\">Email</label>\n        <input id=\"email\" name=\"email\" type=\"email\" required>\n        <label for=\"message\">Message</label>\n        <textarea id=\"message\" name=\"message\" required></textarea>\n        <button type=\"submit\">Envoyer</button>\n      </form>\n    </section>\n  </main>\n  <footer class=\"container\"><p>Mon portfolio — 2026</p></footer>\n</body>\n</html>"
      },
      {
        "type": "tip",
        "content": "Teste la navigation, le clavier et les différentes tailles d’écran."
      },
      {
        "type": "warning",
        "content": "Le formulaire est une démonstration : la route /contact doit être implémentée côté serveur."
      }
    ]
  },
  {
    "label": "Fiche mémo",
    "title": "Retrouver les syntaxes essentielles",
    "intro": "Réviser rapidement les notions du cours.",
    "blocks": [
      {
        "type": "heading",
        "content": "Récapitulatif"
      },
      {
        "type": "code",
        "code": "h1–h6 : titres\np : paragraphe\na[href] : lien\nimg[src][alt] : image\nul / ol / li : listes\ntable / tr / th / td : tableau\nheader / nav / main / section / article / footer : structure\nform / label / input / select / textarea / button : formulaire"
      },
      {
        "type": "text",
        "content": "Documentation : [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/HTML)"
      },
      {
        "type": "tip",
        "content": "Reproduis le portfolio sans regarder la correction."
      }
    ]
  }
];
