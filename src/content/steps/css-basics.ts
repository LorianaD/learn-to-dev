import type { CourseStep } from '../../types/course';

export const cssBasicsSteps: CourseStep[] = [
  {
    "label": "Découverte",
    "title": "Relier CSS au HTML",
    "intro": "Crée style.css et ajoute le lien dans head. Une règle contient un sélecteur et des déclarations propriété: valeur.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Crée style.css et ajoute le lien dans head. Une règle contient un sélecteur et des déclarations propriété: valeur."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "/* style.css */\nbody { color: #222; background: #fff; }\nh1 { color: #2456a6; }"
      },
      {
        "type": "warning",
        "content": "Vérifie le chemin du fichier si aucun style ne s’applique."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute <link rel=\"stylesheet\" href=\"style.css\"> dans head puis change la couleur du titre."
      }
    ]
  },
  {
    "label": "Syntaxe CSS",
    "title": "Lire une règle CSS caractère par caractère",
    "intro": "Comprendre le vocabulaire avant de mémoriser les propriétés.",
    "blocks": [
      {
        "type": "heading",
        "content": "Sélecteur, propriété, valeur"
      },
      {
        "type": "text",
        "content": "Le sélecteur h1 choisit les éléments à modifier. Les accolades délimitent le bloc. color est une propriété, blue sa valeur. Le deux-points sépare propriété et valeur, le point-virgule termine une déclaration."
      },
      {
        "type": "code",
        "code": "h1 {\n    color: blue;\n    font-size: 24px;\n}"
      },
      {
        "type": "heading",
        "content": "Classes et identifiants"
      },
      {
        "type": "text",
        "content": "Un point devant un nom sélectionne une classe HTML. Un dièse sélectionne un identifiant. Le nom de balise seul sélectionne tous les éléments de ce type."
      },
      {
        "type": "code",
        "code": "/* HTML : <p class=\"intro\" id=\"accueil\">Bonjour</p> */\np { color: black; }\n.intro { color: blue; }\n#accueil { font-weight: bold; }"
      },
      {
        "type": "heading",
        "content": "Commentaires et erreurs"
      },
      {
        "type": "text",
        "content": "Les commentaires CSS commencent par /* et finissent par */. Une déclaration invalide est généralement ignorée. Vérifie les accolades, les noms et les unités."
      },
      {
        "type": "code",
        "code": "/* Couleur du titre */\nh1 { color: red; }"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Change la couleur et la taille d’un titre. Ajoute une classe à un paragraphe et cible-la."
      }
    ]
  },
  {
    "label": "Associer HTML et CSS",
    "title": "Créer et relier les deux fichiers",
    "intro": "Tester les styles dans le navigateur sans installation supplémentaire.",
    "blocks": [
      {
        "type": "heading",
        "content": "Créer les fichiers"
      },
      {
        "type": "text",
        "content": "Dans VS Code, ouvre un dossier. Crée index.html et style.css au même niveau. Le lien dans head charge la feuille de style : rel indique la relation stylesheet et href le chemin."
      },
      {
        "type": "code",
        "code": "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mon site</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Bonjour</h1>\n</body>\n</html>"
      },
      {
        "type": "heading",
        "content": "Écrire et tester"
      },
      {
        "type": "text",
        "content": "Écris la règle suivante dans style.css, enregistre les deux fichiers et ouvre index.html dans le navigateur. Actualise après modification."
      },
      {
        "type": "code",
        "code": "h1 { color: blue; }"
      },
      {
        "type": "heading",
        "content": "Trois façons de styliser"
      },
      {
        "type": "text",
        "content": "Une feuille externe est préférable pour un site. Une balise style dans head contient du CSS interne. L’attribut style applique des déclarations directement à un élément, mais rend la maintenance plus difficile."
      },
      {
        "type": "code",
        "code": "<style>p { color: green; }</style>\n<p style=\"color: red;\">Exemple</p>"
      },
      {
        "type": "tip",
        "content": "**Exercice :** Modifie blue en purple, enregistre et actualise. Si rien ne change, vérifie le chemin et le nom du fichier."
      }
    ]
  },
  {
    "label": "Sélecteurs",
    "title": "Cibler les éléments",
    "intro": "Un sélecteur de classe est réutilisable ; un identifiant doit être unique. Les combinateurs ciblent les relations entre éléments.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Un sélecteur de classe est réutilisable ; un identifiant doit être unique. Les combinateurs ciblent les relations entre éléments."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "p { line-height: 1.6; }\n.card { padding: 1rem; }\n#projets { margin: 2rem; }\nnav a { color: navy; }\n.card > h3 { margin-top: 0; }\ninput[type=\"email\"] { border: 1px solid gray; }"
      },
      {
        "type": "warning",
        "content": "Évite les identifiants pour les styles réutilisables."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Applique une classe card à deux articles."
      }
    ]
  },
  {
    "label": "Cascade",
    "title": "Comprendre les priorités",
    "intro": "À origine et importance identiques, la spécificité puis l’ordre départagent les règles concurrentes. Certaines propriétés comme color sont héritées.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "À origine et importance identiques, la spécificité puis l’ordre départagent les règles concurrentes. Certaines propriétés comme color sont héritées."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "p { color: black; }\n.intro { color: blue; }\n.intro { color: green; }\n/* Un paragraphe .intro sera vert. */"
      },
      {
        "type": "warning",
        "content": "Évite !important comme solution systématique ; les couches et origines influencent aussi la cascade."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Inverse les deux règles .intro et observe."
      }
    ]
  },
  {
    "label": "Couleurs",
    "title": "Définir une palette",
    "intro": "HEX, rgb et hsl représentent des couleurs. Le canal alpha règle leur transparence.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "HEX, rgb et hsl représentent des couleurs. Le canal alpha règle leur transparence."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".card {\n  color: #172033;\n  background: rgb(240 245 255);\n  border-color: hsl(220 50% 60%);\n  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);\n}"
      },
      {
        "type": "warning",
        "content": "Vérifie le contraste du texte sur son fond."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Crée une palette avec une couleur principale et une couleur neutre."
      }
    ]
  },
  {
    "label": "Unités",
    "title": "Choisir des dimensions adaptées",
    "intro": "rem dépend de la taille de police racine, em de la taille de police pertinente, % du contexte, vw et vh du viewport.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "rem dépend de la taille de police racine, em de la taille de police pertinente, % du contexte, vw et vh du viewport."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "html { font-size: 100%; }\nmain { width: 90%; max-width: 70rem; }\nh1 { font-size: 2rem; }\n.hero { min-height: 50vh; }"
      },
      {
        "type": "warning",
        "content": "Les pourcentages ne se calculent pas tous sur la même référence."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Compare 16px, 1rem et 2rem en changeant la taille racine."
      }
    ]
  },
  {
    "label": "Typographie",
    "title": "Mettre en forme les textes",
    "intro": "Définis une pile de polices, une hauteur de ligne et une hiérarchie lisible.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Définis une pile de polices, une hauteur de ligne et une hiérarchie lisible."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "body { font-family: system-ui, sans-serif; line-height: 1.6; }\nh1 { font-size: 2rem; font-weight: 700; }\np { max-width: 70ch; }\nnav a { text-decoration: underline; }"
      },
      {
        "type": "warning",
        "content": "Ne supprime pas les indices visuels des liens sans alternative."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste une hauteur de ligne de 1 puis 1.6."
      }
    ]
  },
  {
    "label": "Box Model",
    "title": "Comprendre les espacements",
    "intro": "Le contenu est entouré du padding, de la bordure puis de la marge. border-box inclut padding et bordure dans la largeur définie.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Le contenu est entouré du padding, de la bordure puis de la marge. border-box inclut padding et bordure dans la largeur définie."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "*, *::before, *::after { box-sizing: border-box; }\n.card { width: 300px; padding: 20px; border: 2px solid #aaa; margin: 16px; }"
      },
      {
        "type": "warning",
        "content": "Avec content-box, cet exemple mesure 344px hors marge."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Compare la largeur rendue avec content-box et border-box."
      }
    ]
  },
  {
    "label": "Dimensions",
    "title": "Limiter la taille des éléments",
    "intro": "max-width empêche un élément de devenir trop large. min-height impose un minimum sans bloquer la croissance.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "max-width empêche un élément de devenir trop large. min-height impose un minimum sans bloquer la croissance."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "main { width: 100%; max-width: 70rem; margin-inline: auto; }\nimg { max-width: 100%; height: auto; }\n.card { min-height: 8rem; overflow-wrap: anywhere; }"
      },
      {
        "type": "warning",
        "content": "Évite les hauteurs fixes sur du contenu textuel variable."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Réduis la fenêtre et observe les images."
      }
    ]
  },
  {
    "label": "Arrière-plans",
    "title": "Créer des fonds et dégradés",
    "intro": "background-color définit un fond ; background-image peut contenir une image ou un dégradé.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "background-color définit un fond ; background-image peut contenir une image ou un dégradé."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".hero { background: linear-gradient(135deg, #e0edff, #fff); }\n.banner { background: #eee url(\"images/projet.jpg\") center / cover no-repeat; }"
      },
      {
        "type": "warning",
        "content": "Une image informative doit plutôt être un élément img avec alt."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste cover puis contain avec une image existante."
      }
    ]
  },
  {
    "label": "Display",
    "title": "Comprendre le flux",
    "intro": "block occupe normalement la largeur disponible, inline suit le texte et inline-block accepte des dimensions. none retire du rendu.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "block occupe normalement la largeur disponible, inline suit le texte et inline-block accepte des dimensions. none retire du rendu."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".badge { display: inline-block; padding: .25rem .5rem; }\nsection { display: block; }\n.hidden { display: none; }"
      },
      {
        "type": "warning",
        "content": "display:none retire généralement aussi le contenu de l’arbre d’accessibilité."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Compare span et div puis change leur display."
      }
    ]
  },
  {
    "label": "Positionnement",
    "title": "Placer des éléments",
    "intro": "relative conserve sa place ; absolute sort du flux et se positionne selon son bloc contenant. fixed et sticky ont des comportements liés au défilement.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "relative conserve sa place ; absolute sort du flux et se positionne selon son bloc contenant. fixed et sticky ont des comportements liés au défilement."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".card { position: relative; }\n.badge { position: absolute; top: .5rem; right: .5rem; }\nheader { position: sticky; top: 0; z-index: 10; }"
      },
      {
        "type": "warning",
        "content": "z-index dépend des contextes d’empilement ; sticky dépend notamment des ancêtres de défilement."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Place un badge dans une carte puis teste sticky en défilant."
      }
    ]
  },
  {
    "label": "Flexbox",
    "title": "Aligner sur un axe",
    "intro": "Flexbox organise les enfants directs. justify-content agit sur l’axe principal et align-items sur l’axe transversal.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Flexbox organise les enfants directs. justify-content agit sur l’axe principal et align-items sur l’axe transversal."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "nav { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between; align-items: center; }\n.card { flex: 1 1 15rem; }"
      },
      {
        "type": "warning",
        "content": "flex ne s’applique comme propriété d’item que si le parent est flex."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste flex-direction: column sur nav."
      }
    ]
  },
  {
    "label": "Grid",
    "title": "Construire une grille",
    "intro": "Grid organise les lignes et colonnes. fr répartit l’espace disponible.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Grid organise les lignes et colonnes. fr répartit l’espace disponible."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); gap: 1rem; }"
      },
      {
        "type": "warning",
        "content": "Évite de réordonner visuellement les éléments au détriment de l’ordre clavier."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Place trois articles dans .projects et redimensionne la fenêtre."
      }
    ]
  },
  {
    "label": "Pseudo-classes",
    "title": "Styliser les états",
    "intro": "Les pseudo-classes ciblent un état ou une position dans la structure.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Les pseudo-classes ciblent un état ou une position dans la structure."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "a:hover { color: #2456a6; }\na:focus-visible, button:focus-visible { outline: 3px solid #2456a6; outline-offset: 3px; }\nbutton:active { transform: scale(.98); }\nli:nth-child(even) { background: #eee; }"
      },
      {
        "type": "warning",
        "content": "Ne réserve pas une information indispensable au seul hover."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste le focus avec Tab."
      }
    ]
  },
  {
    "label": "Pseudo-éléments",
    "title": "Styliser une partie d’un élément",
    "intro": "before et after génèrent des boîtes décoratives ; placeholder cible le texte indicatif.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "before et after génèrent des boîtes décoratives ; placeholder cible le texte indicatif."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".card::before { content: \"\"; display: block; height: 4px; background: #2456a6; }\ninput::placeholder { color: #555; }\np::first-letter { font-weight: bold; }"
      },
      {
        "type": "warning",
        "content": "Un placeholder ne remplace jamais un label."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Ajoute une décoration à un article."
      }
    ]
  },
  {
    "label": "Responsive",
    "title": "Adapter la page aux écrans",
    "intro": "Commence par les styles mobiles puis ajoute des media queries selon les besoins du contenu.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Commence par les styles mobiles puis ajoute des media queries selon les besoins du contenu."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ".layout { display: grid; gap: 1rem; }\n@media (min-width: 48rem) {\n  .layout { grid-template-columns: 1fr 2fr; }\n}"
      },
      {
        "type": "warning",
        "content": "Les points de rupture ne sont pas universels ; vérifie aussi le zoom."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste à 390px, 768px et 1440px dans les outils développeur."
      }
    ]
  },
  {
    "label": "Variables CSS",
    "title": "Centraliser les valeurs",
    "intro": "Les propriétés personnalisées héritent par défaut et sont lues avec var().",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Les propriétés personnalisées héritent par défaut et sont lues avec var()."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": ":root { --primary: #2456a6; --space: 1rem; --radius: .5rem; }\n.card { padding: var(--space); border-radius: var(--radius); }\na { color: var(--primary, navy); }"
      },
      {
        "type": "warning",
        "content": "Les variables CSS ne remplacent pas les variables JavaScript."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Change --primary et observe tous les liens."
      }
    ]
  },
  {
    "label": "Transitions",
    "title": "Animer les changements",
    "intro": "transition interpole les propriétés animables ; transform déplace ou redimensionne visuellement.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "transition interpole les propriétés animables ; transform déplace ou redimensionne visuellement."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "button { transition: transform .2s ease; }\nbutton:hover { transform: translateY(-2px); }\n@keyframes appear { from { opacity: 0; } to { opacity: 1; } }\n.card { animation: appear .3s ease; }\n@media (prefers-reduced-motion: reduce) { .card { animation: none; } button { transition: none; } }"
      },
      {
        "type": "warning",
        "content": "Évite les animations gênantes ou indispensables à la compréhension."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Teste une transition de couleur et le mode mouvement réduit."
      }
    ]
  },
  {
    "label": "Organisation",
    "title": "Structurer les feuilles de style",
    "intro": "Sépare les fondations, les layouts et les composants. Utilise des noms explicites et des classes réutilisables.",
    "blocks": [
      {
        "type": "heading",
        "content": "Comprendre"
      },
      {
        "type": "text",
        "content": "Sépare les fondations, les layouts et les composants. Utilise des noms explicites et des classes réutilisables."
      },
      {
        "type": "heading",
        "content": "Exemple à tester"
      },
      {
        "type": "code",
        "code": "/* base */\nbody { margin: 0; }\n/* layout */\n.container { max-width: 70rem; margin-inline: auto; }\n/* composant */\n.card { padding: 1rem; }\n.card__title { font-weight: 700; }"
      },
      {
        "type": "warning",
        "content": "Ne multiplie pas les fichiers pour un projet minuscule."
      },
      {
        "type": "tip",
        "content": "**Exercice :** Range tes règles par responsabilité."
      }
    ]
  },
  {
    "label": "Projet pratique",
    "title": "Mettre en forme le portfolio",
    "intro": "Réutiliser les notions du cours dans un projet complet.",
    "blocks": [
      {
        "type": "heading",
        "content": "Consignes"
      },
      {
        "type": "text",
        "content": "Reprends index.html du cours HTML. Crée style.css au même niveau. Définis une palette, une grille de cartes, une navigation flexible et un formulaire lisible."
      },
      {
        "type": "heading",
        "content": "Correction complète"
      },
      {
        "type": "code",
        "code": "* { box-sizing: border-box; }\n:root { --primary: #2456a6; --surface: #fff; --text: #172033; --radius: .75rem; }\nbody { margin: 0; font-family: system-ui, sans-serif; line-height: 1.6; color: var(--text); background: #f3f6fb; }\n.container { width: min(100% - 2rem, 70rem); margin-inline: auto; }\n.site-header { background: var(--surface); }\nnav { display: flex; flex-wrap: wrap; gap: 1rem; padding-block: 1rem; }\na { color: var(--primary); }\n.hero { padding-block: 3rem; }\nsection { margin-bottom: 2rem; }\n.projects { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); }\n.card { background: var(--surface); border-radius: var(--radius); padding: 1.5rem; border: 1px solid #d8e0ec; }\nform { display: grid; gap: .75rem; max-width: 36rem; }\ninput, textarea, button { font: inherit; padding: .75rem; border-radius: .5rem; }\ninput, textarea { border: 1px solid #68778a; width: 100%; }\ntextarea { min-height: 8rem; resize: vertical; }\nbutton { background: var(--primary); color: white; border: 0; cursor: pointer; }\nbutton:hover { background: #173e80; }\n:focus-visible { outline: 3px solid #2456a6; outline-offset: 3px; }\nfooter { padding-block: 1rem; }\n@media (min-width: 48rem) { .hero h1 { font-size: 3rem; } }\n"
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
        "code": "color / background : couleurs\nmargin / padding / border : espacements\nbox-sizing: border-box\ndisplay: flex; gap: 1rem; align-items: center;\ndisplay: grid; grid-template-columns: repeat(2, 1fr);\nposition: relative;\n@media (min-width: 48rem) { /* styles */ }\n:root { --primary: blue; }\ncolor: var(--primary);"
      },
      {
        "type": "text",
        "content": "Documentation : [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS)"
      },
      {
        "type": "tip",
        "content": "Reproduis le portfolio sans regarder la correction."
      }
    ]
  }
];
