/* ═══════════════════════════════════════════════════════════════
   LA TROUSSE — seconde série
   Dents · Yeux · Peau · Règles · Dépistages
   ═══════════════════════════════════════════════════════════════ */

window.FICHES2 = [

/* ─────────────────────── DENTS ─────────────────────── */
{
id:"carie", cat:"Dents", titre:"La carie et la rage de dent",
resume:"Une douleur provoquée qui s'arrête, ou une douleur spontanée qui ne s'arrête pas : ce n'est pas le même rendez-vous.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Les bactéries du biofilm dentaire transforment les sucres en acides, qui dissolvent les minéraux de l'émail. Tant que la lésion reste dans l'émail, elle est indolore et parfois réversible. Quand elle atteint la dentine, le froid, le chaud et le sucré deviennent douloureux. Quand elle atteint la pulpe — le nerf —, la douleur devient spontanée."},
{t:"h", x:"La distinction qui change tout"},
{t:"tab", head:["", "Atteinte de la dentine", "Atteinte de la pulpe (rage de dent)"], rows:[
  ["Déclenchement", "provoqué par le froid, le chaud, le sucré", "spontané, sans rien faire"],
  ["Durée", "quelques secondes après le stimulus", "des minutes à des heures, continu"],
  ["La nuit", "ne réveille pas", "réveille, et s'aggrave en position allongée"],
  ["Antalgique", "efficace", "souvent insuffisant"],
  ["Délai", "rendez-vous dans les semaines", "rendez-vous en urgence"]
]},
{t:"p", x:"Pourquoi la douleur augmente allongé : la pulpe est enfermée dans une cavité rigide, et l'afflux de sang quand la tête est basse augmente la pression à l'intérieur. C'est aussi pourquoi une rage de dent est pire la nuit."},
{t:"h", x:"En attendant le rendez-vous"},
{t:"li", items:[
  "Paracétamol, à dose correcte et régulière plutôt qu'au coup par coup.",
  "**Éviter les anti-inflammatoires** : en contexte d'infection dentaire, ils peuvent favoriser l'extension vers les tissus du cou. C'est la même alerte que dans la fiche sur les antalgiques, et elle est particulièrement documentée ici.",
  "Dormir la tête surélevée.",
  "Ne jamais poser un comprimé d'aspirine contre la gencive : il provoque une brûlure chimique de la muqueuse, sans soulager la dent.",
  "L'huile essentielle de clou de girofle, appliquée localement sur un coton, a un effet antalgique local réel mais bref. Elle ne remplace rien.",
  "Un antibiotique seul ne règle pas une carie : il n'atteint pas l'intérieur d'une dent dont le nerf est mort. Seul le geste du dentiste traite la cause."
]},
{t:"h", x:"Ce qui prévient"},
{t:"p", x:"Le fluor reste la mesure dont le bénéfice est le mieux établi en santé publique dentaire. Deux brossages par jour de deux minutes avec un dentifrice fluoré, et — détail qui compte — **cracher sans rincer** : rincer à l'eau emporte le fluor qui devait rester au contact de l'émail. La fréquence des prises de sucre compte plus que la quantité totale : grignoter sucré toute la journée est pire qu'un dessert."},
{t:"alerte", titre:"Urgence dentaire", items:[
  "Douleur spontanée, pulsatile, qui réveille la nuit et résiste aux antalgiques.",
  "Gonflement de la joue ou de la gencive, fièvre : voir la fiche abcès.",
  "Dent devenue grise ou noire après un choc, même ancienne et indolore.",
  "Douleur après un soin qui s'aggrave au lieu de diminuer après quarante-huit heures."
]},
{t:"key", x:"Douleur qui s'arrête quand le stimulus s'arrête : rendez-vous normal. Douleur qui vient toute seule et réveille la nuit : urgence. Et paracétamol, pas anti-inflammatoire."}
]},

{
id:"abces-dentaire", cat:"Dents", titre:"L'abcès dentaire",
resume:"La seule fiche dentaire qui peut finir aux urgences hospitalières.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Une infection qui part de la pulpe nécrosée d'une dent, franchit l'extrémité de la racine et forme une collection de pus dans l'os puis sous la gencive. Elle donne une douleur intense, une dent qui paraît plus haute que les autres et douloureuse au moindre contact, puis un gonflement."},
{t:"h", x:"Pourquoi c'est sérieux"},
{t:"p", x:"Parce que l'infection ne reste pas forcément là. Si elle diffuse dans les tissus du cou et du plancher de la bouche, elle devient une cellulite cervico-faciale, qui peut comprimer les voies aériennes. C'est rare, c'est connu, et ça se joue en heures. C'est aussi la raison de l'interdiction des anti-inflammatoires dans ce contexte."},
{t:"h", x:"Ce qu'il faut faire"},
{t:"num", items:[
  "Appeler un dentiste le jour même. Le week-end, il existe des gardes dentaires — le 15 ou le conseil de l'ordre départemental donnent le contact.",
  "Paracétamol en attendant, jamais d'anti-inflammatoire ni de corticoïde.",
  "Ne pas appliquer de chaleur sur la joue : elle accélère la diffusion. Le froid est préférable.",
  "Ne pas percer ni presser le gonflement.",
  "Si un antibiotique est prescrit, il accompagne le geste — drainage, traitement de la racine ou extraction — il ne le remplace pas. Un abcès qui se calme sous antibiotique seul reviendra."
]},
{t:"alerte", niveau:"15", titre:"Urgence hospitalière", items:[
  "Gonflement qui ferme l'œil, ou qui descend sous la mâchoire et dans le cou.",
  "Difficulté à avaler sa salive, bave, voix modifiée.",
  "Impossibilité d'ouvrir la bouche normalement.",
  "Difficulté à respirer.",
  "Fièvre élevée avec frissons, malaise général.",
  "Ces signes imposent les urgences, pas le cabinet dentaire."
]},
{t:"key", x:"Un abcès dentaire se traite le jour même. Et si le gonflement s'étend au cou ou gêne la déglutition, ce n'est plus une urgence dentaire mais une urgence hospitalière."}
]},

{
id:"gencives", cat:"Dents", titre:"Les gencives qui saignent",
resume:"Saigner au brossage n'est pas une raison d'arrêter de brosser — c'est l'inverse.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Une gencive saine ne saigne pas. Le saignement signale une gingivite : une inflammation provoquée par la plaque dentaire laissée au contact du bord gingival. La gencive devient rouge, gonflée, friable."},
{t:"h", x:"Le réflexe qui aggrave"},
{t:"p", x:"Voyant du sang, la plupart des gens brossent plus doucement à cet endroit, ou l'évitent. La plaque s'y accumule davantage, l'inflammation augmente, le saignement aussi. C'est une boucle, et elle se casse en faisant exactement l'inverse de ce que l'instinct suggère : nettoyer **mieux** cette zone, en douceur mais complètement. Le saignement disparaît en général en une à deux semaines."},
{t:"h", x:"Ce qui marche"},
{t:"li", items:[
  "Deux brossages par jour, deux minutes, brosse souple, mouvements de la gencive vers la dent — pas de va-et-vient horizontal agressif, qui use le collet sans nettoyer l'espace entre les dents.",
  "Le nettoyage entre les dents, tous les jours. La brosse ne passe pas là où les dents se touchent, et c'est là que tout commence. Les brossettes interdentaires, quand l'espace le permet, ont de meilleures données que le fil dentaire.",
  "Un détartrage chez le dentiste quand le tartre est installé : une fois minéralisé, il ne part pas au brossage.",
  "Arrêter le tabac. Attention à un piège : le tabac resserre les vaisseaux, donc un fumeur saigne moins — sa gencive paraît saine alors que la maladie progresse plus vite."
]},
{t:"h", x:"Pourquoi il ne faut pas laisser traîner"},
{t:"def", mot:"Parodontite", x:"Le stade suivant, où l'inflammation atteint l'os qui soutient la dent. La gencive se rétracte, des poches se forment, l'os se résorbe. À la différence de la gingivite, **la perte osseuse est irréversible** : on peut arrêter la progression, pas reconstituer l'os perdu."},
{t:"p", x:"C'est la première cause de perte de dents chez l'adulte, et elle est longtemps indolore — raison pour laquelle on la découvre tard."},
{t:"alerte", titre:"Consulter", items:[
  "Saignement qui persiste au-delà de deux semaines malgré un brossage irréprochable.",
  "Gencives qui se rétractent, dents qui paraissent plus longues, espaces qui s'ouvrent entre les dents.",
  "Dent mobile, ou qui se déplace.",
  "Mauvaise haleine persistante malgré l'hygiène.",
  "Saignements spontanés, sans brossage, ou associés à des saignements ailleurs — un bilan général s'impose.",
  "Grossesse : la gingivite est fréquente et plus marquée, et elle justifie un suivi."
]},
{t:"key", x:"Une gencive qui saigne est une gencive mal nettoyée, pas une gencive fragile. Brossez mieux cet endroit, pas moins — et nettoyez entre les dents tous les jours."}
]},

{
id:"dent-cassee", cat:"Dents", titre:"Dent cassée ou arrachée",
resume:"Une dent définitive expulsée se réimplante — et chaque minute compte. Le lait est le bon liquide.",
blocs:[
{t:"h", x:"Dent définitive expulsée : les trente premières minutes"},
{t:"p", x:"C'est l'une des rares vraies urgences où le geste d'un témoin change le pronostic. La dent peut être remise en place et tenir des années, à condition que les cellules du ligament restées sur la racine survivent. Elles meurent en se desséchant, en quelques dizaines de minutes."},
{t:"num", items:[
  "Retrouver la dent et la saisir **par la couronne** — la partie qui se voit. Ne jamais toucher ni frotter la racine : c'est elle qui porte les cellules à sauver.",
  "Si elle est sale, la rincer deux à trois secondes, pas plus, au sérum physiologique ou au lait. **Jamais à l'eau du robinet** : l'eau pure fait éclater les cellules par différence de concentration.",
  "Si possible, la remettre immédiatement dans son alvéole, dans le bon sens, et mordre doucement sur un mouchoir pour la maintenir. C'est de loin la meilleure option.",
  "Si ce n'est pas possible, la conserver dans du **lait**, ou à défaut dans du sérum physiologique, ou dans la salive de la personne — entre la joue et les dents chez un adulte conscient. Jamais dans l'eau, jamais à sec dans un mouchoir.",
  "Rejoindre un dentiste ou un service d'urgence dentaire immédiatement. Le pronostic se dégrade très vite après une heure."
]},
{t:"p", x:"Pourquoi le lait : sa concentration en sels et son pH sont proches de ceux des cellules, et il les maintient en vie plusieurs heures. C'est le liquide de transport le plus disponible partout."},
{t:"p", x:"Exception importante : une **dent de lait** expulsée ne se réimplante pas — le geste risquerait d'abîmer le germe de la dent définitive dessous. Consulter quand même."},
{t:"h", x:"Dent cassée"},
{t:"li", items:[
  "Retrouver le fragment et le conserver dans du lait : il peut souvent être recollé.",
  "Consulter dans la journée, même sans douleur. Une fracture qui expose la dentine ou la pulpe évolue vers la nécrose si elle n'est pas protégée.",
  "Une dent qui devient grise des semaines ou des mois après un choc signale une nécrose du nerf, et elle doit être traitée même si elle ne fait pas mal."
]},
{t:"alerte", titre:"Consulter en urgence", items:[
  "Toute dent définitive expulsée ou déplacée : minutes.",
  "Dent cassée avec un point rouge ou saignant au centre de la cassure : la pulpe est exposée.",
  "Traumatisme avec perte de connaissance, vomissements, ou plaie de la lèvre contenant peut-être un fragment : avis médical en plus de l'avis dentaire.",
  "Mâchoire qui ne ferme plus normalement, ou dents qui ne s'emboîtent plus comme avant : suspicion de fracture."
]},
{t:"key", x:"Par la couronne, jamais la racine. Pas d'eau : du lait. Et remise en place le plus vite possible — c'est la demi-heure qui décide."}
]},

/* ─────────────────────── YEUX ─────────────────────── */
{
id:"oeil-rouge", cat:"Yeux", titre:"L'œil rouge",
resume:"Le plus souvent bénin. Les trois signes qui font sortir de la banalité.",
blocs:[
{t:"h", x:"Trier d'abord"},
{t:"p", x:"La grande majorité des yeux rouges sont des conjonctivites, qui guérissent seules. Mais trois signes font changer de catégorie, et il faut les vérifier avant tout le reste."},
{t:"alerte", titre:"Les trois signes qui imposent un avis le jour même", items:[
  "**Une baisse de la vision**, même modérée. Une conjonctivite ne fait pas baisser la vue — tout au plus une vision brouillée qui se corrige en clignant.",
  "**Une vraie douleur** profonde, et non une gêne ou une impression de sable.",
  "**Une gêne intense à la lumière**, qui oblige à fermer l'œil.",
  "S'y ajoutent : une pupille déformée ou qui ne réagit plus, une rougeur formant un cercle autour de l'iris, le port de lentilles de contact, un traumatisme, une projection de produit."
]},
{t:"h", x:"Les trois conjonctivites"},
{t:"tab", head:["", "Virale", "Bactérienne", "Allergique"], rows:[
  ["Fréquence", "la plus fréquente", "moins fréquente", "fréquente, saisonnière"],
  ["Sécrétions", "claires, larmoiement", "épaisses, jaunes, paupières collées au réveil", "claires"],
  ["Démangeaison", "modérée", "faible", "intense, c'est le signe clé"],
  ["Atteinte", "un œil puis l'autre", "souvent un œil", "les deux en même temps"],
  ["Contexte", "rhume associé, contagieux +++", "—", "pollen, acariens, animal"]
]},
{t:"h", x:"Ce qu'on fait"},
{t:"li", items:[
  "Laver abondamment au sérum physiologique, plusieurs fois par jour, en allant du coin interne vers l'extérieur, une compresse par œil et par passage.",
  "Se laver les mains, ne pas partager serviette ni oreiller : une conjonctivite virale est très contagieuse pendant une à deux semaines.",
  "Retirer les lentilles et ne pas les remettre avant guérison complète et avis.",
  "Un antihistaminique en collyre pour la forme allergique.",
  "Un collyre antibiotique n'est pas systématique : la plupart des conjonctivites bactériennes guérissent seules, et la majorité des yeux rouges ne sont pas bactériens."
]},
{t:"h", x:"Ce qu'il ne faut jamais faire"},
{t:"p", x:"Ne jamais utiliser un collyre contenant de la cortisone sans prescription, ni réutiliser celui d'une ordonnance passée. Sur une atteinte herpétique de la cornée, les corticoïdes font flamber l'infection et peuvent conduire à une perte de vision. C'est l'une des erreurs d'automédication les plus coûteuses qui existent."},
{t:"p", x:"Et un collyre entamé se jette après quinze jours, même s'il en reste."},
{t:"key", x:"Pas de douleur vraie, pas de baisse de vue, pas de photophobie majeure : on peut attendre et laver. L'un des trois : avis le jour même."}
]},

{
id:"vision", cat:"Yeux", titre:"Quand la vue change brutalement",
resume:"Quatre tableaux qui se comptent en heures. À lire une fois, pour les reconnaître le jour où.",
blocs:[
{t:"p", x:"Cette fiche ne contient aucun conseil de traitement : seulement des tableaux à reconnaître. Dans chacun, le délai décide du résultat, et l'erreur habituelle est d'attendre le lendemain parce que ça ne fait pas mal."},
{t:"h", x:"1. Baisse de vision brutale et indolore"},
{t:"p", x:"Un œil qui se voile, un rideau noir qui descend ou monte, une partie du champ qui disparaît, d'un coup. L'absence de douleur est précisément ce qui rassure à tort."},
{t:"p", x:"En cause : une occlusion d'une artère ou d'une veine de la rétine, une atteinte du nerf optique, une hémorragie. Une occlusion de l'artère centrale de la rétine est l'équivalent d'un AVC de l'œil — et elle doit d'ailleurs faire chercher un AVC."},
{t:"p", x:"Un épisode bref, de quelques minutes, totalement résolutif, n'est pas rassurant non plus : c'est l'équivalent d'un accident ischémique transitoire, et il annonce parfois un AVC dans les jours qui suivent."},
{t:"h", x:"2. Éclairs et pluie de mouches volantes"},
{t:"p", x:"Des points noirs ou des filaments flottants, quelques-uns, stables depuis des années : banal. Ce qui doit alerter est le changement brutal — une **averse** soudaine de nouvelles mouches, des **éclairs lumineux** dans le champ périphérique, surtout dans l'obscurité, puis un voile ou une ombre fixe sur un côté."},
{t:"p", x:"C'est le tableau du décollement de rétine. Pris à temps, il se traite ; une fois que la zone centrale est décollée, la récupération visuelle est très incomplète. Le délai se compte en heures à quelques jours."},
{t:"h", x:"3. Œil rouge très douloureux avec vision trouble"},
{t:"p", x:"Douleur intense de l'œil et autour, vision brouillée, halos colorés autour des lumières, nausées et vomissements, œil dur à la palpation à travers la paupière. Le tableau est souvent pris pour une migraine ou une gastro-entérite, et c'est ce qui fait perdre du temps."},
{t:"p", x:"C'est une crise de glaucome par fermeture de l'angle : la pression intraoculaire monte brutalement et détruit le nerf optique en quelques heures. Urgence absolue."},
{t:"h", x:"4. Vision double brutale"},
{t:"p", x:"Voir deux images, surtout si la double vision disparaît en fermant un œil, et d'apparition brutale : il s'agit d'une atteinte des nerfs qui commandent les muscles de l'œil, et les causes possibles sont neurologiques ou vasculaires. Associée à un mal de tête, une paupière qui tombe ou une pupille dilatée d'un côté, c'est une urgence neurologique."},
{t:"alerte", niveau:"15", titre:"Que faire", items:[
  "Dans tous ces cas : ne pas attendre, ne pas conduire soi-même.",
  "Appeler le 15, qui orientera vers les urgences ophtalmologiques ou neurologiques.",
  "Signaler tout traitement anticoagulant, un diabète, une hypertension, une forte myopie, une chirurgie oculaire récente.",
  "Chez une personne de plus de 50 ans avec baisse de vision, mal de tête temporal, douleur de la mâchoire en mastiquant : évoquer une artérite à cellules géantes, qui peut rendre aveugle l'autre œil en quelques jours et se traite en urgence."
]},
{t:"key", x:"Une baisse de vue brutale ne fait pas forcément mal, et c'est ce qui la rend dangereuse. Éclairs plus averse de mouches volantes, ou rideau sur le champ visuel : le jour même, pas le lendemain."}
]},

{
id:"orgelet", cat:"Yeux", titre:"Orgelet et chalazion",
resume:"Deux boules sur la paupière, deux mécanismes, un seul traitement de base : la chaleur.",
blocs:[
{t:"h", x:"Les distinguer"},
{t:"tab", head:["", "Orgelet", "Chalazion"], rows:[
  ["Mécanisme", "infection d'un follicule de cil", "obstruction d'une glande sébacée de la paupière, sans infection"],
  ["Siège", "au bord de la paupière, sur la ligne des cils", "dans l'épaisseur de la paupière, plus en retrait"],
  ["Aspect", "rouge, pointe blanche, comme un petit furoncle", "nodule ferme, peau de couleur normale"],
  ["Douleur", "franchement douloureux", "peu ou pas douloureux"],
  ["Évolution", "perce et guérit en quelques jours", "peut persister des semaines à des mois"]
]},
{t:"h", x:"Ce qui marche pour les deux"},
{t:"p", x:"La chaleur humide. Un gant ou une compresse bien chaude — pas brûlante — appliquée dix minutes, trois à quatre fois par jour, en rechauffant quand elle refroidit. L'objectif est de liquéfier le sébum épaissi qui bouche la glande."},
{t:"p", x:"Puis, immédiatement après, un massage doux de la paupière dans le sens des cils, pour évacuer ce qui a été ramolli. C'est le massage qui agit ; la chaleur seule le prépare."},
{t:"li", items:[
  "Hygiène des paupières au quotidien si ça récidive : nettoyer le bord des cils avec un produit adapté ou du sérum physiologique.",
  "Ne pas percer, ne pas presser : le risque est de diffuser l'infection dans la paupière.",
  "Ne pas maquiller la zone, ne pas porter de lentilles pendant l'épisode.",
  "La patience : un chalazion met souvent plusieurs semaines à disparaître, et il arrive qu'une petite injection ou une incision soit proposée s'il persiste."
]},
{t:"h", x:"Pourquoi ça revient"},
{t:"p", x:"Les récidives fréquentes évoquent un dysfonctionnement des glandes des paupières, souvent associé à une rosacée ou à une blépharite chronique. Dans ce cas, l'hygiène quotidienne des paupières devient un entretien permanent, pas un traitement ponctuel — et c'est ce qui espace réellement les épisodes."},
{t:"alerte", titre:"Consulter", items:[
  "Rougeur et gonflement qui s'étendent à toute la paupière, à la joue ou autour de l'œil, avec fièvre : évoquer une cellulite orbitaire, qui est une urgence.",
  "Baisse de vision, douleur à bouger l'œil, œil qui semble pousser vers l'avant : urgence.",
  "Chalazion qui persiste au-delà de quelques semaines, ou qui déforme la paupière.",
  "Lésion du bord de la paupière qui saigne, qui fait tomber les cils ou qui revient toujours au même endroit chez une personne âgée : il faut éliminer autre chose qu'un chalazion.",
  "Récidives multiples et rapprochées."
]},
{t:"key", x:"Dix minutes de chaleur, trois fois par jour, suivies d'un massage — et on ne perce pas. Si la rougeur déborde sur la joue ou si la vue baisse, ce n'est plus un orgelet."}
]},

{
id:"ecrans-yeux", cat:"Yeux", titre:"Fatigue visuelle et écrans",
resume:"Le vrai mécanisme est le clignement, pas la lumière bleue — et les lunettes anti-lumière bleue n'ont rien démontré.",
blocs:[
{t:"h", x:"Ce qui se passe réellement"},
{t:"p", x:"Devant un écran, on cligne beaucoup moins — les mesures trouvent une réduction d'environ la moitié à deux tiers de la fréquence normale. Or le clignement étale le film lacrymal sur la cornée. Moins de clignements, c'est un film qui s'évapore, une surface qui s'assèche, et la sensation de brûlure, de sable, de picotement en fin de journée."},
{t:"p", x:"S'y ajoute l'effort d'accommodation soutenu : regarder de près pendant des heures demande une contraction continue du muscle ciliaire, d'où la gêne et parfois les maux de tête."},
{t:"p", x:"Rien de tout cela n'abîme l'œil de façon durable. La fatigue visuelle sur écran est inconfortable et réversible — ce n'est pas une maladie, et il n'y a pas de lésion à craindre."},
{t:"h", x:"La lumière bleue"},
{t:"p", x:"C'est l'un des rares cas de ce site où une revue systématique tranche nettement : les lunettes filtrant la lumière bleue n'ont **pas** démontré de bénéfice sur la fatigue visuelle, ni sur le confort devant écran. Une synthèse Cochrane publiée en 2023 conclut à l'absence d'effet démontré à court terme."},
{t:"p", x:"Sur le sommeil, la question est distincte et plus ouverte : la lumière du soir, bleue ou non, décale l'horloge interne — c'est la leçon 9.2 du cours. Mais ce qui agit là est l'intensité et l'heure de l'exposition, pas spécifiquement le filtre d'une paire de lunettes."},
{t:"h", x:"Ce qui soulage vraiment"},
{t:"num", items:[
  "Cligner volontairement, et faire des pauses de regard au loin. La règle dite des 20-20-20 — toutes les vingt minutes, regarder à six mètres pendant vingt secondes — n'a pas de preuve solide derrière elle, mais elle est gratuite, sans risque, et elle force les deux gestes utiles.",
  "Baisser l'écran : le haut de l'écran au niveau des yeux ou en dessous. Regarder vers le bas réduit la surface d'œil exposée à l'air, donc l'évaporation.",
  "Éviter le flux d'air direct — climatisation, ventilateur, chauffage de voiture — dans les yeux.",
  "Des larmes artificielles sans conservateur si la sécheresse est marquée.",
  "Ajuster la luminosité de l'écran à celle de la pièce, et éviter de travailler dans le noir avec un écran très lumineux.",
  "Et surtout : faire contrôler sa vue. Une bonne partie des fatigues visuelles attribuées aux écrans sont un défaut de correction non diagnostiqué."
]},
{t:"alerte", titre:"Consulter", items:[
  "Maux de tête réguliers en fin de journée de travail : d'abord un contrôle de la vue.",
  "Vision qui se brouille par moments et se corrige en clignant, de façon persistante.",
  "Yeux rouges, collés, ou sensation de corps étranger permanente : évoquer une sécheresse oculaire installée ou une blépharite.",
  "Douleur oculaire vraie, baisse de vision, halos : voir les fiches œil rouge et vision.",
  "Chez l'enfant : difficulté à lire au tableau, plissement des yeux, tête penchée."
]},
{t:"key", x:"Ce n'est pas la lumière bleue, c'est le clignement qui manque. Baisse ton écran, cligne, regarde au loin — et fais vérifier ta correction avant d'acheter des lunettes de filtre."}
]},

/* ─────────────────────── PEAU ─────────────────────── */
{
id:"eczema", cat:"Peau et plaies", titre:"L'eczéma atopique",
resume:"Une barrière de peau qui fuit. Et la peur des crèmes à la cortisone fait plus de dégâts que les crèmes.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Une maladie inflammatoire chronique de la peau, liée à une barrière cutanée défaillante. La peau retient mal l'eau et laisse passer ce qui devrait rester dehors — allergènes, irritants, microbes —, ce qui entretient l'inflammation. Une partie des cas est liée à des variants d'un gène codant une protéine de structure de l'épiderme."},
{t:"p", x:"Conséquence directe de ce mécanisme : la sécheresse n'est pas un symptôme secondaire, c'est le problème. Et la réparer est le socle du traitement, pas un soin de confort."},
{t:"h", x:"Les deux piliers"},
{t:"num", items:[
  "**Les émollients, tous les jours, même sans poussée.** Appliqués généreusement, sur peau encore humide après la douche. C'est la mesure qui réduit la fréquence des poussées et la quantité de traitement nécessaire ensuite. Elle est ennuyeuse, et c'est elle qui est abandonnée en premier.",
  "**Les dermocorticoïdes pendant les poussées**, appliqués en quantité suffisante et sur la durée indiquée, puis arrêtés. Ils éteignent l'inflammation ; les émollients évitent qu'elle reparte."
]},
{t:"h", x:"Le problème de la corticophobie"},
{t:"p", x:"La crainte des crèmes à la cortisone est très répandue, y compris chez des soignants, et elle conduit à en mettre trop peu, trop tard, et à arrêter trop tôt. Résultat : la poussée dure, on en remet, on arrête, elle revient — et on conclut que « la cortisone ne marche pas » ou qu'elle « rend dépendant »."},
{t:"p", x:"Les effets indésirables cutanés existent, mais ils sont liés à un usage prolongé, continu, sur peau fine et sur de grandes surfaces, sans suivi. Utilisés comme prescrits, en cures courtes sur les zones atteintes, ces traitements sont sûrs et c'est leur sous-utilisation qui pose problème. Une unité de mesure existe pour la quantité — la dose du bout du doigt — et il faut la demander à son médecin ou à son pharmacien plutôt que d'en mettre « un peu »."},
{t:"h", x:"Le reste"},
{t:"li", items:[
  "Douches courtes et tièdes, savon surgras ou syndet, pas de gant de toilette rugueux.",
  "Couper les ongles court. Le grattage entretient l'inflammation et ouvre la porte aux surinfections.",
  "Coton plutôt que laine ou synthétique à même la peau.",
  "Pas de régime d'éviction alimentaire sans avis : les éviction inutiles sont fréquentes, inefficaces et parfois dangereuses chez l'enfant.",
  "Les poussées suivent souvent le stress, le froid sec, la transpiration. Repérer ses propres déclencheurs vaut mieux que suivre une liste générale."
]},
{t:"alerte", titre:"Consulter", items:[
  "Lésions suintantes, croûtes jaunâtres couleur miel, douleur et fièvre : surinfection bactérienne.",
  "Apparition brutale de petites vésicules en bouquet, ombiliquées, douloureuses, avec fièvre et altération de l'état général : il s'agit peut-être d'une surinfection herpétique, qui est une urgence.",
  "Eczéma qui résiste au traitement bien conduit, ou qui empêche de dormir.",
  "Retentissement sur la scolarité, le travail, la vie sociale : il existe des traitements de fond, y compris récents, pour les formes sévères.",
  "Eczéma qui apparaît à l'âge adulte sans antécédent : il faut éliminer un eczéma de contact, professionnel ou non."
]},
{t:"key", x:"Hydrater tous les jours, traiter fort et court pendant les poussées. La peur des dermocorticoïdes coûte plus cher que les dermocorticoïdes."}
]},

{
id:"acne", cat:"Peau et plaies", titre:"L'acné",
resume:"Ce n'est pas une question de propreté, et se laver plus aggrave. Traiter tôt évite les cicatrices.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Quatre mécanismes qui s'enchaînent dans le follicule pilo-sébacé : une production de sébum augmentée sous l'effet des hormones, un épaississement de la paroi du canal qui le bouche, la prolifération d'une bactérie présente chez tout le monde — Cutibacterium acnes —, et l'inflammation qui en résulte."},
{t:"p", x:"Le point de bascule est le bouchon, pas la saleté. Les points noirs ne sont pas noirs parce qu'ils sont sales : ils sont noirs parce que le sébum s'oxyde au contact de l'air."},
{t:"h", x:"Ce qui aggrave sans qu'on le sache"},
{t:"li", items:[
  "Se laver souvent et avec des produits décapants. La peau agressée produit davantage de sébum, et la barrière abîmée supporte moins bien les traitements. Deux nettoyages doux par jour suffisent.",
  "Presser les lésions. Chaque pression pousse le contenu plus profond, aggrave l'inflammation, et c'est le mécanisme principal des cicatrices.",
  "Changer de traitement toutes les deux semaines. Un traitement d'acné demande six à huit semaines pour montrer son effet, et il y a souvent une aggravation transitoire au début.",
  "Les produits « purifiants » alcoolisés, les gommages agressifs, les masques desséchants."
]},
{t:"h", x:"Ce qui marche"},
{t:"p", x:"Les traitements locaux efficaces agissent sur les mécanismes ci-dessus : le peroxyde de benzoyle, qui réduit la bactérie et l'inflammation sans induire de résistance ; les rétinoïdes locaux, qui agissent sur le bouchon. Ils sont irritants au début, et c'est la raison la plus fréquente d'abandon — on commence un jour sur deux, le soir, en petite quantité, et on augmente."},
{t:"p", x:"Pour les formes inflammatoires, un traitement général peut être prescrit. Pour les formes sévères ou cicatricielles, il existe un traitement de référence très efficace, soumis à une surveillance stricte, notamment parce qu'il est gravement tératogène."},
{t:"h", x:"Et l'alimentation ?"},
{t:"p", x:"Longtemps niée en bloc, la question est revenue avec des données réelles mais modestes. Deux associations ressortent de façon répétée : les aliments à index glycémique élevé, et les produits laitiers — surtout le lait écrémé. Les effets observés sont faibles, et les études sont majoritairement observationnelles, donc exposées au troisième larron de la leçon 1.1."},
{t:"p", x:"Formulation honnête : ce n'est ni un mythe ni une cause. Le chocolat et les frites, en particulier, n'ont jamais été établis comme déclencheurs. Modifier son alimentation peut aider à la marge ; ça ne remplace pas un traitement."},
{t:"alerte", titre:"Consulter", items:[
  "Acné qui laisse des marques creusées ou en relief : les cicatrices ne régressent pas, et c'est l'argument principal pour traiter tôt plutôt qu'attendre que « ça passe avec l'âge ».",
  "Nodules profonds, douloureux, kystes.",
  "Retentissement psychologique — et il est à prendre au sérieux : le lien entre acné et symptômes dépressifs est documenté.",
  "Acné apparue brutalement chez une femme adulte, avec règles irrégulières, pilosité inhabituelle, chute de cheveux : bilan hormonal.",
  "Acné après l'introduction d'un médicament, d'un complément de musculation ou de corticoïdes.",
  "Échec d'un traitement bien suivi pendant trois mois."
]},
{t:"key", x:"On ne nettoie pas une acné, on la traite — et on ne presse pas. Six à huit semaines avant de juger un traitement, et consulter dès qu'apparaissent des cicatrices."}
]},

{
id:"urticaire", cat:"Peau et plaies", titre:"L'urticaire",
resume:"Des plaques qui bougent et disparaissent en moins d'un jour. Et le signe qui fait appeler le 15.",
blocs:[
{t:"h", x:"Comment la reconnaître"},
{t:"p", x:"Des plaques en relief, roses ou blanchâtres, qui démangent fortement, et qui ont deux caractéristiques très particulières : elles sont **fugaces** — une plaque donnée disparaît en moins de vingt-quatre heures sans laisser de trace — et **mobiles** : pendant que les unes s'effacent, d'autres apparaissent ailleurs."},
{t:"p", x:"Si une plaque reste au même endroit plus d'un jour, ou si elle laisse une marque en partant, ce n'est pas une urticaire ordinaire et cela justifie un avis."},
{t:"p", x:"Le mécanisme est la libération d'histamine par les mastocytes du derme, qui dilate les vaisseaux et laisse fuir du liquide. Cette libération peut être déclenchée par une allergie — mais, chez l'adulte, elle ne l'est le plus souvent pas."},
{t:"alerte", niveau:"15", titre:"Appeler le 15", items:[
  "Gonflement des lèvres, de la langue, de la gorge ou du visage.",
  "Voix modifiée, difficulté à avaler, gêne respiratoire, sifflement.",
  "Malaise, chute de tension, pâleur, sueurs, vomissements avec l'éruption.",
  "Il s'agit alors d'une réaction anaphylactique. Si la personne dispose d'un stylo d'adrénaline prescrit, il doit être utilisé immédiatement, dans la cuisse, avant même d'appeler — et on appelle ensuite.",
  "Allonger la personne, jambes surélevées ; la laisser assise si elle respire mal. Ne pas la faire se lever."
]},
{t:"h", x:"L'urticaire aiguë ordinaire"},
{t:"li", items:[
  "Antihistaminique de deuxième génération, en vente libre, qui est le traitement de référence. Il peut être nécessaire de poursuivre plusieurs jours après la disparition.",
  "Pas de corticoïdes en automédication.",
  "Eau fraîche, vêtements amples, éviter la chaleur, l'alcool et les frottements, qui amplifient la libération d'histamine.",
  "Ne pas gratter — le frottement crée de nouvelles plaques, phénomène qu'on peut d'ailleurs reproduire en traçant une ligne sur la peau."
]},
{t:"h", x:"La chercher ou pas"},
{t:"p", x:"Voilà le point le plus contre-intuitif. Devant une urticaire isolée, sans signe de réaction générale, le bilan allergologique est le plus souvent inutile : les causes les plus fréquentes sont une infection virale banale, un médicament, ou rien d'identifiable."},
{t:"p", x:"Pour l'urticaire **chronique** — plus de six semaines —, les recommandations sont encore plus claires : chez la grande majorité des patients, aucune cause externe n'est retrouvée, et la multiplication des tests n'améliore rien. Il s'agit alors d'une maladie de la peau à traiter comme telle, souvent au long cours, et non d'une allergie à démasquer."},
{t:"alerte", titre:"Consulter", items:[
  "Urticaire qui dure plus de six semaines.",
  "Plaques fixes de plus de vingt-quatre heures, douloureuses, ou laissant une marque.",
  "Fièvre, douleurs articulaires, altération de l'état général associés.",
  "Apparition après une piqûre d'insecte, un médicament, ou un aliment identifié : un bilan allergologique est justifié dans ce cas précis.",
  "Gonflement isolé et récidivant du visage ou des extrémités sans démangeaison : tableau différent, à explorer."
]},
{t:"key", x:"Plaques mobiles qui disparaissent en moins de vingt-quatre heures : urticaire, antihistaminique. Gonflement de la langue, de la gorge ou gêne respiratoire : 15, sans hésiter."}
]},

{
id:"grain-de-beaute", cat:"Peau et plaies", titre:"Surveiller un grain de beauté",
resume:"ABCDE, le vilain petit canard, et le seul critère qui compte vraiment : le changement.",
blocs:[
{t:"h", x:"La règle ABCDE"},
{t:"tab", head:["Lettre", "Ce qu'on regarde", "Ce qui inquiète"], rows:[
  ["A — Asymétrie", "plier mentalement la lésion en deux", "les deux moitiés ne se superposent pas"],
  ["B — Bords", "le contour", "irrégulier, déchiqueté, mal limité"],
  ["C — Couleur", "l'homogénéité", "plusieurs teintes : brun, noir, rouge, blanc, bleuté"],
  ["D — Diamètre", "la taille", "au-delà de six millimètres, mais un mélanome peut être plus petit"],
  ["E — Évolution", "le changement dans le temps", "**le critère le plus important de la liste**"]
]},
{t:"p", x:"Les quatre premières lettres décrivent un aspect à un instant donné ; la cinquième décrit un mouvement. Une lésion parfaitement régulière qui change de taille, de couleur ou d'épaisseur en quelques mois est plus inquiétante qu'une lésion irrégulière stable depuis vingt ans."},
{t:"h", x:"Le vilain petit canard"},
{t:"p", x:"Un second repère, au moins aussi performant et plus simple à utiliser. Les grains de beauté d'une même personne se ressemblent entre eux, comme une fratrie. La lésion à montrer est celle qui **ne ressemble pas aux autres** : plus foncée, plus grande, de forme différente, qui dépareille."},
{t:"p", x:"Ce critère a l'avantage de ne demander aucune mesure : il suffit de regarder l'ensemble du dos ou de la jambe et de voir si quelque chose saute aux yeux."},
{t:"h", x:"Qui doit se faire suivre"},
{t:"li", items:[
  "Peau claire, cheveux roux ou blonds, yeux clairs, taches de rousseur, peau qui brûle sans bronzer.",
  "Grand nombre de grains de beauté — au-delà d'une cinquantaine.",
  "Antécédent personnel ou familial de mélanome.",
  "Coups de soleil sévères, surtout dans l'enfance : ce sont les brûlures de l'enfance qui pèsent le plus sur le risque d'adulte.",
  "Usage de cabines de bronzage, dont le lien avec le mélanome est établi et dose-dépendant.",
  "Immunodépression, traitement immunosuppresseur."
]},
{t:"p", x:"Pour ces profils, un examen annuel de la peau est raisonnable ; pour les autres, un auto-examen tous les trois mois environ, avec l'aide de quelqu'un pour le dos, suffit. Photographier les lésions douteuses avec une règle à côté est le moyen le plus simple de juger l'évolution six mois plus tard."},
{t:"alerte", titre:"Montrer sans attendre", items:[
  "Une lésion qui saigne spontanément, qui démange de façon persistante, ou qui ne cicatrise pas.",
  "Un grain de beauté qui s'épaissit, devient en relief, ou change de couleur.",
  "Une tache noire sous un ongle, surtout si elle s'élargit ou déborde sur la peau autour de l'ongle.",
  "Une lésion qui dépareille nettement de toutes les autres.",
  "Une plaie qui ne guérit pas après un mois, en particulier sur le visage, le nez ou l'oreille.",
  "En cas de doute : c'est un motif de consultation légitime, et un dermatologue préfère voir dix lésions bénignes qu'en manquer une."
]},
{t:"key", x:"Le critère décisif n'est pas l'aspect, c'est le changement — et la lésion à montrer est celle qui ne ressemble pas aux autres. Prends une photo avec une règle : dans six mois, tu sauras."}
]},

{
id:"piqures", cat:"Peau et plaies", titre:"Piqûres, morsures et tiques",
resume:"Le retrait d'une tique, la surveillance pendant un mois, et la plaque en cocarde à connaître.",
blocs:[
{t:"h", x:"Moustiques et autres piqûres banales"},
{t:"p", x:"Rougeur, gonflement local, démangeaison. Froid local, antihistaminique si la gêne est importante, crème apaisante. Ne pas gratter : le grattage surinfecte, et une surinfection se reconnaît à une rougeur qui s'étend avec chaleur et douleur après quarante-huit heures."},
{t:"h", x:"Guêpes, abeilles, frelons"},
{t:"li", items:[
  "Retirer le dard d'abeille en le raclant latéralement avec un ongle ou une carte, sans le pincer — le pincer injecte le venin restant.",
  "Froid local, désinfection.",
  "Une réaction locale étendue — plusieurs centimètres, pendant quelques jours — est désagréable mais banale, et ce n'est pas une allergie.",
  "Une piqûre dans la bouche ou la gorge impose un avis immédiat, à cause du risque d'œdème des voies aériennes.",
  "Les signes généraux — urticaire généralisée, gonflement du visage, gêne respiratoire, malaise — sont une anaphylaxie : 15, voir la fiche urticaire."
]},
{t:"h", x:"Les tiques"},
{t:"p", x:"C'est la partie la plus utile de la fiche, parce que la technique de retrait fait une différence réelle et que les mauvaises méthodes sont encore largement enseignées."},
{t:"num", items:[
  "**Retirer immédiatement**, mécaniquement, avec un tire-tique ou à défaut une pince fine. Le risque de transmission augmente avec la durée de fixation.",
  "Glisser le crochet de côté contre la peau, puis **tourner lentement** en soulevant, jusqu'à ce que la tique lâche. Ne pas tirer d'un coup.",
  "**Ne rien appliquer avant le retrait** : ni éther, ni alcool, ni vernis, ni huile. Une tique agressée régurgite, et la régurgitation est précisément ce qui transmet.",
  "Désinfecter **après** le retrait, pas avant.",
  "Si la tête reste plantée, désinfecter et laisser la peau l'éliminer ; ce n'est pas une urgence.",
  "Noter la date et surveiller la zone pendant un mois."
]},
{t:"h", x:"Ce qu'on surveille"},
{t:"def", mot:"Érythème migrant", x:"Une plaque rouge qui apparaît au point de piqûre entre trois jours et un mois après, et qui s'étend lentement en cercle, souvent plus claire au centre — un aspect de cocarde. Elle n'est généralement ni douloureuse ni prurigineuse, ce qui explique qu'on la néglige. C'est le signe le plus fréquent de la maladie de Lyme à son début, et elle justifie une consultation et un traitement antibiotique, qui est à ce stade très efficace."},
{t:"p", x:"Il n'y a pas lieu de faire une sérologie devant un érythème migrant typique : le diagnostic est clinique, et la sérologie est souvent encore négative à ce stade."},
{t:"alerte", titre:"Consulter", items:[
  "Plaque rouge qui s'étend autour d'une piqûre de tique, même sans douleur, même des semaines après.",
  "Fièvre, fatigue inhabituelle, douleurs articulaires, paralysie faciale dans les semaines ou mois suivant une piqûre.",
  "Toute morsure animale ou humaine : voir la fiche plaies.",
  "Rougeur chaude et douloureuse qui s'étend à partir d'une piqûre, traînée rouge, fièvre : surinfection.",
  "Piqûres multiples, ou piqûre chez une personne allergique connue.",
  "Retour de voyage avec piqûre et fièvre."
]},
{t:"key", x:"Pour une tique : rien dessus, on tourne, on désinfecte après, et on surveille la peau pendant un mois. La plaque en cocarde indolore est le signe à connaître."}
]},

/* ─────────────────────── RÈGLES ─────────────────────── */
{
id:"cycle", cat:"Règles et cycle", titre:"Le cycle, les repères normaux",
resume:"Ce qui est normal, ce qui ne l'est pas — et pourquoi l'ovulation ne tombe pas au quatorzième jour.",
blocs:[
{t:"h", x:"Les repères"},
{t:"tab", head:["", "Normal", "À faire évaluer"], rows:[
  ["Durée du cycle", "21 à 35 jours chez l'adulte", "moins de 21, plus de 35, ou très irrégulier après 2-3 ans de règles"],
  ["Durée des règles", "2 à 7 jours", "plus de 8 jours"],
  ["Volume", "en moyenne 30 à 50 mL sur l'ensemble", "au-delà de 80 mL : voir la fiche règles abondantes"],
  ["Douleur", "gêne modérée les 1 à 2 premiers jours", "douleur qui empêche les activités habituelles"],
  ["Variabilité", "quelques jours d'écart d'un cycle à l'autre", "écarts de plus d'une semaine de façon répétée"]
]},
{t:"h", x:"Les deux phases, et ce que personne n'explique"},
{t:"p", x:"La première phase, dite folliculaire, va du premier jour des règles à l'ovulation. Sa durée est **variable** d'une femme à l'autre et d'un cycle à l'autre."},
{t:"p", x:"La seconde, dite lutéale, va de l'ovulation aux règles suivantes. Sa durée est **à peu près fixe**, autour de douze à quatorze jours, parce qu'elle correspond à la durée de vie du corps jaune."},
{t:"p", x:"D'où le point que la formule du « quatorzième jour » fait manquer : l'ovulation se situe environ quatorze jours **avant** les règles suivantes, et non quatorze jours après les précédentes. Sur un cycle de 35 jours, elle tombe vers le vingt et unième jour. Sur un cycle irrégulier, elle n'est pas prévisible à l'avance — seulement reconstituable après coup."},
{t:"p", x:"C'est pourquoi les méthodes fondées uniquement sur le calendrier sont peu fiables comme contraception, et pourquoi un cycle court peut rendre une grossesse possible à des moments inattendus."},
{t:"h", x:"Ce qui bouge sans être anormal"},
{t:"li", items:[
  "Les deux premières années suivant les premières règles : cycles souvent irréguliers et sans ovulation.",
  "La période précédant la ménopause : cycles qui se raccourcissent puis s'espacent.",
  "Après un accouchement, un arrêt de contraception, un voyage lointain, un épisode de stress intense, une perte de poids rapide ou un entraînement sportif très intensif.",
  "Les saignements légers en milieu de cycle, au moment de l'ovulation, sont fréquents et bénins."
]},
{t:"alerte", titre:"Consulter", items:[
  "Absence de règles pendant plus de trois mois en dehors d'une grossesse, d'une contraception qui les supprime ou de la ménopause.",
  "Absence de premières règles à seize ans.",
  "Saignements entre les règles, après les rapports, ou après la ménopause — ce dernier point justifie toujours un avis.",
  "Cycles devenus très irréguliers après avoir été réguliers.",
  "Règles très douloureuses ou très abondantes : fiches dédiées.",
  "Difficulté à concevoir après douze mois de rapports sans contraception — six mois après 35 ans."
]},
{t:"key", x:"L'ovulation est à quatorze jours avant les règles suivantes, pas après les précédentes. Et la seule norme qui vaille est la vôtre : c'est un changement durable de votre propre rythme qui justifie un avis."}
]},

{
id:"regles-douloureuses", cat:"Règles et cycle", titre:"Les règles douloureuses",
resume:"Un cas où l'ibuprofène est supérieur au paracétamol, avec un mécanisme qui l'explique — et où le moment de la prise change tout.",
blocs:[
{t:"h", x:"Ce qui fait mal"},
{t:"p", x:"Au moment des règles, la muqueuse utérine libère des prostaglandines. Elles provoquent des contractions du muscle utérin et une constriction des petits vaisseaux, ce qui réduit l'apport en oxygène du muscle — exactement le mécanisme qui rend une crampe douloureuse. Les prostaglandines expliquent aussi les symptômes associés : nausées, diarrhée, maux de tête."},
{t:"p", x:"Les femmes qui souffrent le plus ont, en moyenne, des taux de prostaglandines plus élevés. Ce n'est donc ni psychologique, ni une question de seuil de tolérance."},
{t:"h", x:"Pourquoi les anti-inflammatoires sont ici le bon choix"},
{t:"p", x:"Les anti-inflammatoires non stéroïdiens bloquent l'enzyme qui fabrique les prostaglandines. Ils n'agissent donc pas seulement sur la perception de la douleur : ils coupent la production de la molécule qui la cause. Le paracétamol, lui, n'a pas cette action, et il est moins efficace dans cette indication précise."},
{t:"p", x:"**Le moment de la prise est décisif.** Une fois les prostaglandines libérées, les bloquer ne les fait pas disparaître. Il faut donc commencer dès les premiers signes, voire la veille du jour habituellement le plus douloureux quand le cycle est régulier, et poursuivre régulièrement pendant un à deux jours plutôt que d'attendre que la douleur soit installée."},
{t:"p", x:"Les contre-indications des anti-inflammatoires restent valables — voir la fiche antalgiques. Et comme ils sont pris à dose efficace pendant deux jours, mieux vaut les prendre pendant un repas."},
{t:"h", x:"Ce qui aide aussi"},
{t:"li", items:[
  "La chaleur locale sur le bas-ventre. Plusieurs essais la trouvent comparable à un antalgique simple, ce qui est inattendu et bienvenu : c'est sans effet indésirable et cumulable.",
  "L'activité physique régulière, dont l'effet sur l'intensité des douleurs est soutenu par des essais.",
  "La contraception hormonale, qui réduit l'épaisseur de l'endomètre donc la production de prostaglandines. En continu, elle peut supprimer les règles, ce qui est une option médicalement acceptable et sous-proposée.",
  "Le magnésium et plusieurs compléments ont des données faibles ; les essais sont petits et hétérogènes."
]},
{t:"h", x:"La phrase qui compte"},
{t:"p", x:"Une douleur de règles qui oblige à manquer les cours, le travail, ou à rester couchée n'est pas normale, et ce n'est pas une question de courage. C'est le motif de consultation le plus souvent retardé de toute cette rubrique — voir la fiche sur l'endométriose."},
{t:"alerte", titre:"Consulter", items:[
  "Douleur qui résiste aux anti-inflammatoires pris correctement et au bon moment.",
  "Douleur qui s'aggrave au fil des années, ou qui apparaît après des années de règles indolores.",
  "Douleur en dehors des règles, douleur pendant les rapports, douleur en allant à la selle ou en urinant pendant les règles.",
  "Règles également très abondantes.",
  "Fièvre avec douleurs pelviennes et pertes inhabituelles : évoquer une infection génitale haute, qui est une urgence relative.",
  "Douleur pelvienne brutale et intense, malaise : urgence — torsion d'ovaire, grossesse extra-utérine, kyste compliqué."
]},
{t:"key", x:"Anti-inflammatoire dès les premiers signes, pas quand la douleur est installée — il empêche la fabrication, il ne défait pas ce qui est fait. Et une douleur qui empêche de vivre normalement se consulte."}
]},

{
id:"regles-abondantes", cat:"Règles et cycle", titre:"Les règles abondantes",
resume:"La plupart des femmes concernées l'ignorent, faute de point de comparaison. Voici les repères concrets.",
blocs:[
{t:"h", x:"Comment savoir"},
{t:"p", x:"On ne mesure pas ses pertes, et on ne compare pas avec ses amies. D'où un problème très répandu : beaucoup de femmes considèrent comme normales des règles qui les anémient depuis des années. Les repères pratiques suivants valent mieux qu'un volume en millilitres."},
{t:"li", items:[
  "Devoir changer de protection toutes les une à deux heures, plusieurs heures d'affilée.",
  "Devoir doubler les protections, ou se lever la nuit pour changer.",
  "Des caillots de plus de deux centimètres et demi — la taille d'une pièce de deux euros.",
  "Des « inondations » qui traversent les vêtements.",
  "Des règles qui durent plus de huit jours.",
  "Et surtout : organiser sa vie autour de ses règles — ne pas sortir, choisir ses vêtements, annuler."
]},
{t:"h", x:"Le vrai danger : l'anémie"},
{t:"p", x:"Des pertes abondantes mois après mois épuisent les réserves en fer. L'installation est lente, donc l'adaptation est insidieuse : la fatigue est attribuée au travail, l'essoufflement au manque de sport, la pâleur au teint naturel."},
{t:"p", x:"Les signes à relier entre eux : fatigue inhabituelle, essoufflement à l'effort, palpitations, maux de tête, difficulté de concentration, chute de cheveux, ongles cassants, syndrome des jambes sans repos, et parfois une envie compulsive de croquer de la glace."},
{t:"p", x:"La vérification est simple et devrait être systématique dans ce contexte : une numération sanguine **et** un dosage de la ferritine, qui reflète les réserves. Un hémogramme normal n'exclut pas une carence en fer déjà installée — c'est la ferritine qui le dit en premier."},
{t:"h", x:"Les causes à chercher"},
{t:"li", items:[
  "Fibromes et polypes de l'utérus.",
  "Adénomyose — de l'endomètre infiltré dans le muscle utérin.",
  "Dispositif intra-utérin au cuivre, qui augmente normalement le volume des règles.",
  "Troubles de la coagulation, dont la maladie de Willebrand, souvent découverte tardivement chez des femmes qui saignent abondamment depuis leurs premières règles.",
  "Troubles hormonaux, dysfonctionnement thyroïdien.",
  "Et, en période de périménopause, des cycles sans ovulation."
]},
{t:"p", x:"Les traitements existent et sont nombreux : médicaments qui réduisent le volume, dispositif intra-utérin hormonal, traitement de la cause. Il n'y a aucune raison de supporter."},
{t:"alerte", titre:"Consulter", items:[
  "Les repères ci-dessus, même si « ça a toujours été comme ça ».",
  "Fatigue, essoufflement, pâleur, palpitations.",
  "Saignements entre les règles, après les rapports, ou après la ménopause.",
  "Aggravation progressive du volume au fil des années.",
  "Saignements abondants depuis les toutes premières règles : penser à un trouble de la coagulation.",
  "Saignement très abondant avec malaise, vertiges, pâleur extrême : urgence."
]},
{t:"key", x:"Changer de protection toutes les heures ou organiser sa vie autour de ses règles n'est pas une norme à endurer. Demandez une ferritine, pas seulement une prise de sang « normale »."}
]},

{
id:"endometriose", cat:"Règles et cycle", titre:"L'endométriose",
resume:"Une femme sur dix, sept ans de délai diagnostique en moyenne, et une imagerie normale qui n'élimine rien.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Du tissu ressemblant à celui de la muqueuse utérine se développe en dehors de l'utérus — sur les ovaires, le péritoine, les ligaments, parfois l'intestin ou la vessie. Ce tissu réagit aux hormones du cycle : il s'épaissit et saigne, mais sans voie d'évacuation. D'où l'inflammation chronique, les adhérences et les douleurs."},
{t:"p", x:"La maladie concerne environ une femme sur dix en âge de procréer. Ce n'est donc pas une maladie rare."},
{t:"h", x:"Les sept ans"},
{t:"p", x:"Le délai moyen entre les premiers symptômes et le diagnostic est de l'ordre de sept ans, en France comme dans la plupart des pays. Les raisons sont identifiées et elles se renforcent les unes les autres."},
{t:"num", items:[
  "La banalisation : « les règles, ça fait mal ». La douleur est attribuée à la normalité par l'entourage, puis par la patiente elle-même.",
  "L'absence de point de comparaison : personne ne sait à quoi ressemblent les règles des autres.",
  "La contraception hormonale prise tôt, qui masque les symptômes pendant des années sans traiter la maladie — puis tout réapparaît à l'arrêt.",
  "Et le piège technique : l'examen clinique et l'échographie peuvent être **parfaitement normaux** dans les formes superficielles. Beaucoup de femmes sont renvoyées avec « tout va bien » alors que l'examen ne pouvait pas voir la maladie."
]},
{t:"p", x:"Retenez ce dernier point, parce qu'il est la cause la plus fréquente de découragement : une échographie normale n'élimine pas une endométriose. Le diagnostic repose d'abord sur les symptômes, et l'imagerie de référence est l'IRM pelvienne ou l'échographie faite par un opérateur formé à cette recherche."},
{t:"h", x:"Les symptômes qui doivent y faire penser"},
{t:"li", items:[
  "Des douleurs de règles intenses, qui résistent aux anti-inflammatoires bien pris, et qui empêchent les activités.",
  "Des douleurs pelviennes en dehors des règles.",
  "Des douleurs profondes pendant les rapports sexuels.",
  "Des douleurs à la défécation ou à la miction, **rythmées par les règles** — c'est ce caractère cyclique qui est évocateur.",
  "Une fatigue chronique importante.",
  "Des difficultés à concevoir : l'endométriose est retrouvée chez une part importante des femmes consultant pour infertilité.",
  "Et un signe souvent décisif : des douleurs qui ont commencé dès les premières règles de l'adolescence, et qu'on a crues normales."
]},
{t:"h", x:"Ce qu'on peut faire"},
{t:"p", x:"Il n'existe pas de guérison, mais des traitements qui contrôlent la maladie : traitements hormonaux qui mettent l'endomètre au repos, prise en charge de la douleur chronique, chirurgie dans certaines formes, accompagnement de la fertilité. Les centres et filières spécialisés se sont structurés ces dernières années et il est légitime de demander à y être adressée."},
{t:"alerte", titre:"Consulter, et insister", items:[
  "Douleurs de règles qui empêchent d'aller en cours ou au travail.",
  "Douleur pendant les rapports.",
  "Symptômes digestifs ou urinaires rythmés par le cycle.",
  "Difficulté à concevoir après douze mois.",
  "Et si l'on vous dit que tout est normal alors que les symptômes persistent : demander un second avis est légitime. Le délai de sept ans est fait de consultations où quelqu'un a conclu trop vite."
]},
{t:"key", x:"Une échographie normale n'élimine pas une endométriose. Si les douleurs empêchent de vivre normalement, le dossier n'est pas clos — c'est exactement là que les sept ans se perdent."}
]},

{
id:"spm", cat:"Règles et cycle", titre:"Le syndrome prémenstruel",
resume:"Ce qui le distingue d'autre chose, et la forme sévère qui porte un nom et un traitement.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Un ensemble de symptômes physiques et émotionnels survenant dans la seconde moitié du cycle, après l'ovulation, et disparaissant avec l'arrivée des règles ou dans les jours qui suivent. Physiques : tension des seins, ballonnement, maux de tête, fatigue. Émotionnels : irritabilité, tristesse, anxiété, hypersensibilité."},
{t:"p", x:"Le mécanisme n'est pas un excès ou un manque d'hormones — les dosages sont normaux. L'hypothèse dominante est une sensibilité particulière du cerveau aux variations des métabolites de la progestérone, qui agissent sur les mêmes récepteurs que certains calmants."},
{t:"h", x:"Le critère qui tranche"},
{t:"p", x:"Ce n'est pas l'intensité des symptômes, c'est leur **chronologie**. Un syndrome prémenstruel suppose un intervalle libre : une période du cycle, après les règles, où les symptômes disparaissent vraiment."},
{t:"p", x:"Si l'irritabilité, la tristesse ou l'anxiété sont présentes toute l'année et seulement aggravées avant les règles, il s'agit d'autre chose — le plus souvent d'un trouble anxieux ou dépressif que le cycle amplifie. La distinction est importante parce que les traitements diffèrent."},
{t:"p", x:"D'où le seul outil diagnostique qui vaille : noter ses symptômes chaque jour pendant deux cycles complets, avec la date des règles. Les reconstitutions de mémoire sont trompeuses — la leçon 7.1 du cours explique pourquoi."},
{t:"h", x:"La forme sévère"},
{t:"def", mot:"Trouble dysphorique prémenstruel", x:"Une forme sévère, reconnue comme diagnostic à part entière, où les symptômes émotionnels — irritabilité majeure, labilité de l'humeur, sentiment de perte de contrôle, parfois idées noires — altèrent nettement la vie professionnelle, scolaire ou relationnelle. Il concerne une petite minorité de femmes, et il se traite."},
{t:"p", x:"Les traitements qui ont des données dans cette indication incluent certains antidépresseurs de la famille des ISRS, parfois pris uniquement en seconde moitié de cycle — ce qui est inhabituel et spécifique à ce trouble —, et certaines contraceptions hormonales. Ce n'est pas de l'automédication."},
{t:"h", x:"Ce qui a des données, et ce qui n'en a pas"},
{t:"tab", head:["Mesure", "État des preuves"], rows:[
  ["Activité physique régulière", "bénéfice modeste mais répliqué"],
  ["Sommeil régulier, réduction de l'alcool", "cohérent, peu testé directement"],
  ["Calcium", "quelques essais positifs, qualité moyenne"],
  ["ISRS en phase lutéale (forme sévère)", "efficacité démontrée"],
  ["Contraception hormonale adaptée", "efficace chez une partie des femmes"],
  ["Huile d'onagre, gattilier, vitamine B6", "données faibles ou contradictoires"],
  ["Régimes d'éviction", "aucune donnée convaincante"]
]},
{t:"alerte", titre:"Consulter", items:[
  "Symptômes qui altèrent le travail, les études ou les relations.",
  "Idées noires, désespoir, même limités à quelques jours par mois : c'est un motif de consultation à part entière, et le 3114 existe.",
  "Symptômes présents toute l'année et simplement aggravés avant les règles : le diagnostic est probablement ailleurs.",
  "Aggravation nette après un changement de contraception.",
  "Symptômes physiques marqués : douleurs mammaires importantes, migraines cataméniales invalidantes."
]},
{t:"key", x:"Le critère n'est pas la sévérité mais l'intervalle libre. Notez vos symptômes sur deux cycles avec les dates : c'est ce qui permet de distinguer un syndrome prémenstruel d'un trouble que le cycle ne fait qu'amplifier."}
]},

/* ─────────────────── DÉPISTAGES ─────────────────── */
{
id:"depistages", cat:"À lire en premier", titre:"Les examens à faire, et quand",
resume:"Ce qu'un adulte en bonne santé a intérêt à contrôler, et à quelle fréquence.",
blocs:[
{t:"p", x:"Cette fiche liste les contrôles périodiques recommandés en France pour un adulte sans symptôme et sans facteur de risque particulier. Des antécédents personnels ou familiaux modifient complètement ces rythmes : ce tableau est une base de discussion avec un médecin, pas un protocole à appliquer seul."},
{t:"h", x:"Tout au long de la vie adulte"},
{t:"tab", head:["Quoi", "Rythme", "Pourquoi"], rows:[
  ["Contrôle dentaire", "une fois par an", "carie et parodontite sont longtemps indolores ; la perte osseuse est irréversible"],
  ["Tension artérielle", "tous les 3 à 5 ans, puis plus souvent après 40 ans", "l'hypertension ne donne aucun symptôme pendant des années"],
  ["Rappel tétanos-diphtérie-poliomyélite", "à 25, 45, 65 ans puis tous les 10 ans", "voir la fiche plaies"],
  ["Contrôle de la vue", "tous les 2 à 5 ans selon l'âge et la correction", "et le dépistage du glaucome après 40 ans"],
  ["Examen de la peau", "auto-examen tous les 3 mois ; annuel chez le dermatologue si facteurs de risque", "voir la fiche grain de beauté"],
  ["Dépistage des IST", "à chaque changement de partenaire, et au moins une fois dans sa vie pour le VIH", "beaucoup d'infections sont asymptomatiques"]
]},
{t:"h", x:"Les dépistages organisés en France"},
{t:"tab", head:["Dépistage", "Public", "Rythme"], rows:[
  ["Cancer du col de l'utérus", "25 à 29 ans : frottis ; 30 à 65 ans : test HPV", "2 frottis à 1 an d'intervalle puis tous les 3 ans ; puis test HPV tous les 5 ans"],
  ["Cancer du sein", "femmes de 50 à 74 ans", "mammographie tous les 2 ans"],
  ["Cancer colorectal", "hommes et femmes de 50 à 74 ans", "test immunologique à faire chez soi, tous les 2 ans"]
]},
{t:"p", x:"Ces trois dépistages sont organisés, invités par courrier et pris en charge. Le test colorectal est celui dont la participation est la plus faible alors qu'il est le plus simple — il se fait à domicile et il détecte des lésions précancéreuses qu'on peut retirer avant qu'elles n'évoluent."},
{t:"h", x:"Ce qu'il ne faut pas faire"},
{t:"li", items:[
  "Demander un « bilan sanguin complet » annuel par principe. En l'absence de symptôme et de facteur de risque, il n'améliore pas la santé, et il produit des résultats légèrement hors normes qui déclenchent des examens en cascade. C'est le problème du surdiagnostic, et il est documenté.",
  "Faire une imagerie « pour vérifier » sans indication : voir la fiche mal de dos, où la démonstration est faite.",
  "À l'inverse, négliger les deux examens les plus rentables et les moins faits : le contrôle dentaire annuel et la prise de tension."
]},
{t:"h", x:"Les contextes qui changent tout"},
{t:"p", x:"Les rythmes ci-dessus sont ceux d'une personne sans particularité. Un antécédent familial de cancer du sein, du côlon ou de mélanome, un diabète, une hypertension, un tabagisme, une obésité, une maladie chronique ou un traitement au long cours modifient à la fois la nature et la fréquence des contrôles — souvent en les avançant de plusieurs années. C'est précisément le genre de chose qu'une fiche générale ne peut pas trancher."},
{t:"alerte", titre:"À ne jamais attendre", items:[
  "Un saignement digestif, une modification durable du transit après 50 ans, ou du sang dans les selles : on n'attend pas le prochain dépistage organisé.",
  "Une boule dans le sein, une modification de la peau ou du mamelon, un écoulement : consultation, quel que soit l'âge et la date de la dernière mammographie.",
  "Un saignement après la ménopause ou après les rapports.",
  "Une lésion cutanée qui change : voir la fiche dédiée.",
  "Un amaigrissement inexpliqué, une fatigue persistante, une fièvre prolongée."
]},
{t:"key", x:"Les deux examens les plus rentables sont aussi les plus négligés : le dentiste une fois par an, et la tension. Et un symptôme n'attend pas le dépistage — le dépistage, par définition, s'adresse aux gens qui n'ont rien."}
]}

];
