/* ═══════════════════════════════════════════════════════════════
   LE COURS · BLOC C — Comment la machine tourne (première moitié)
   Module 6 : Juger et décider (6 leçons)
   Module 7 : La mémoire (5 leçons)
   ═══════════════════════════════════════════════════════════════ */

window.CONTENU_C = {

/* ───────────────────────── MODULE 6 ───────────────────────── */

"6.1": [
{t:"ex", titre:"L'exemple d'abord", x:"Une batte et une balle coûtent 1,10 € à elles deux. La batte coûte 1,00 € de plus que la balle. Combien coûte la balle ? Réponds avant de lire la suite."},
{t:"p", x:"La réponse qui vient est 10 centimes. Elle est fausse, et il suffit de la vérifier pour le voir."},
{t:"calc", lignes:[
  "Si la balle vaut 0,10 € :",
  "  batte = 0,10 + 1,00 = 1,10 €",
  "  total = 0,10 + 1,10 = 1,20 €   ✗  (on voulait 1,10)",
  "",
  "Posons balle = x :",
  "  x + (x + 1,00) = 1,10",
  "  2x = 0,10",
  "  x = 0,05 €",
  "",
  "  balle = 0,05 · batte = 1,05 · écart = 1,00 · total = 1,10  ✓"
]},
{t:"p", x:"Ce problème fait partie d'un test de trois questions construit par Frederick en 2005. Ce qu'il mesure n'est pas l'intelligence : une majorité d'étudiants de grandes universités scientifiques se trompe sur au moins un des trois items. Il mesure la disposition à vérifier une réponse qui s'est présentée toute seule."},
{t:"h", x:"La distinction, et ce qu'elle décrit"},
{t:"p", x:"On appelle couramment Système 1 le processus rapide, automatique, qui produit « 10 centimes » sans effort ; et Système 2 le processus lent et contrôlé qui pose l'équation. La formulation vient des travaux de Stanovich et West, et Kahneman l'a rendue célèbre."},
{t:"p", x:"Elle décrit quelque chose de réel : une réponse par défaut arrive, et il faut un acte supplémentaire pour la contrôler. Tout le monde a fait l'expérience des deux régimes."},
{t:"h", x:"Ce qu'il en reste"},
{t:"p", x:"Trois réserves, dont la première vient de l'auteur lui-même."},
{t:"num", items:[
  "Kahneman écrit explicitement dans son livre que Système 1 et Système 2 sont des personnages de fiction, des façons de parler, et non deux dispositifs logés quelque part dans le cerveau. La métaphore a été prise bien plus au sérieux par ses lecteurs que par lui.",
  "Les propriétés censées définir chaque système ne vont pas ensemble. Rapide, automatique, inconscient, émotionnel, parallèle — si ces attributs formaient vraiment deux paquets, ils devraient corréler. Ils ne corrèlent pas proprement : il existe des processus rapides et contrôlés, lents et automatiques. La dichotomie range mal la réalité.",
  "Une partie des démonstrations qui illustraient le Système 1 dans le livre venait de la littérature d'amorçage social, qui s'est effondrée. Kahneman a publié en 2017 une note reconnaissant qu'il avait accordé trop de confiance à des études sous-dimensionnées. C'est la leçon 1.4 appliquée à son propre travail, et par lui-même."
]},
{t:"h", x:"Ce qu'on garde pour la suite"},
{t:"p", x:"Une distinction fonctionnelle, utile et modeste : il y a la réponse par défaut, et il y a la réponse vérifiée. Les biais des leçons suivantes sont des cas où la réponse par défaut est systématiquement déviée dans une direction prévisible — c'est le « systématiquement » et le « prévisible » qui en font un objet d'étude, pas le fait de se tromper."},
{t:"p", x:"Et une conséquence pratique immédiate : dans ton métier, les erreurs qui coûtent ne sont pas celles où tu ne sais pas. Ce sont celles où une réponse t'est venue si naturellement que tu n'as pas pensé à la vérifier. La parade n'est pas d'être plus intelligent, c'est d'avoir une liste d'endroits où l'on vérifie systématiquement."},
{t:"verdict", s:"conteste", x:"Le cerveau a deux systèmes de pensée", d:"métaphore pédagogique utile, mais les propriétés attribuées à chaque système ne se regroupent pas empiriquement, et son auteur la présente lui-même comme une fiction."},
{t:"verdict", s:"etabli", x:"Une réponse intuitive fausse peut survivre à la relecture", d:"le test de réflexion cognitive le montre de façon reproductible, y compris chez des populations très sélectionnées."},
{t:"key", x:"Le danger n'est pas l'ignorance, c'est la fluidité. Quand une réponse arrive sans effort, c'est exactement le moment où elle n'est pas vérifiée. Les leçons suivantes listent les endroits où cette réponse facile dévie de façon prévisible."}
],

"6.2": [
{t:"ex", titre:"L'exemple d'abord", x:"On fait tourner devant des participants une roue de loterie, truquée pour s'arrêter sur 10 ou sur 65. Puis on leur demande d'estimer le pourcentage de pays africains membres de l'ONU. Ceux qui ont vu 10 répondent autour de 25 %. Ceux qui ont vu 65 répondent autour de 45 %. Tout le monde a vu la roue tourner, donc tout le monde sait que le nombre est aléatoire."},
{t:"p", x:"C'est l'expérience fondatrice de l'ancrage, publiée par Tversky et Kahneman en 1974. Elle a plus de cinquante ans, elle a été répliquée y compris dans les grands projets de réplication multi-laboratoires, et elle tient avec des effets larges. Voici les quatre biais de ce genre."},
{t:"h", x:"1. L'ancrage"},
{t:"def", mot:"Ancrage", x:"L'influence d'une valeur de référence, même arbitraire et même explicitement sans rapport, sur une estimation numérique ultérieure. On ajuste à partir de l'ancre, et l'ajustement est systématiquement insuffisant."},
{t:"p", x:"Dans ton métier, l'ancrage n'est pas une curiosité de laboratoire, c'est la structure de la plupart des négociations. La première offre déplace l'issue. Le prix d'introduction déplace les évaluations ultérieures. Le consensus des analystes déplace les cours cibles publiés après lui, ce qui produit une convergence qui ressemble à de l'accord et qui est en partie de l'imitation."},
{t:"p", x:"Nuance honnête : l'effet s'atténue avec des ancres franchement absurdes, et il dépend de l'expertise sur la quantité estimée. Il ne disparaît pas chez les experts, il se réduit."},
{t:"h", x:"2. La disponibilité"},
{t:"def", mot:"Heuristique de disponibilité", x:"Juger la fréquence ou la probabilité d'un événement par la facilité avec laquelle des exemples viennent à l'esprit."},
{t:"p", x:"Les causes de mort spectaculaires et racontées — accident d'avion, homicide, attaque de requin — sont massivement surestimées ; les causes banales et lentes — diabète, maladies cardiaques — sont sous-estimées. La mémoire fournit des exemples selon leur saillance, pas selon leur fréquence."},
{t:"p", x:"L'effet est solide, mais son mécanisme est discuté : est-ce le nombre d'exemples qui viennent, ou la facilité ressentie à les faire venir ? Les deux interprétations prédisent des choses différentes, et l'expérience qui les départage consiste à demander beaucoup d'exemples — demander douze exemples de ta propre assurance te fait te juger moins sûr de toi que d'en demander six, parce que les six derniers viennent difficilement."},
{t:"h", x:"3. Le cadrage"},
{t:"p", x:"Même information, deux habillages. Une intervention « qui sauve 200 personnes sur 600 » est choisie bien plus souvent que la même « où 400 personnes sur 600 meurent ». Un aliment « 90 % sans matière grasse » est jugé plus sain que « 10 % de matière grasse »."},
{t:"p", x:"C'est un des effets les mieux répliqués du domaine, y compris dans les réplications multi-laboratoires préenregistrées. Et c'est le plus directement exploitable : quand on te présente un chiffre, retourne-le. Si la présentation retournée te fait changer d'avis, c'est la présentation qui décidait."},
{t:"h", x:"4. Le coût irrécupérable"},
{t:"p", x:"Tu connais le principe, donc je passe la définition : ce qui est dépensé est dépensé, seul l'avenir compte dans la décision. Ce qui est intéressant est ailleurs — c'est que savoir tout ça ne protège pas. Les financiers formés continuent de refinancer des positions perdantes, les directions continuent de prolonger des projets condamnés, et elles le font avec des arguments sophistiqués."},
{t:"p", x:"La raison est double : abandonner, c'est reconnaître publiquement l'erreur initiale, et l'engagement déjà pris crée une obligation de cohérence. Le biais n'est pas cognitif seulement, il est social."},
{t:"verdict", s:"etabli", x:"L'ancrage", d:"cinquante ans de réplications, y compris dans des projets multi-laboratoires préenregistrés, avec des effets larges."},
{t:"verdict", s:"etabli", x:"L'effet de cadrage", d:"répliqué en laboratoire et sur le terrain, en santé comme en finance."},
{t:"verdict", s:"etabli", x:"Le coût irrécupérable", d:"observé en laboratoire et dans les décisions réelles d'organisations ; la connaissance du biais ne suffit pas à l'annuler."},
{t:"key", x:"Ces quatre-là ont passé la crise de réplication. Retiens-en surtout deux gestes : retourner le cadrage avant de décider, et se demander quelle valeur a été vue en premier dans la discussion — c'est souvent elle qui a décidé du résultat."}
],

"6.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Des étudiants recomposent des phrases à partir de listes de mots. Pour la moitié d'entre eux, les listes contiennent discrètement des mots associés à la vieillesse : Floride, ridé, bingo, gris. Ensuite, on chronomètre, à leur insu, le temps qu'ils mettent à parcourir le couloir en sortant. Ceux qui ont vu les mots de vieillesse marchent plus lentement."},
{t:"p", x:"Ce résultat, publié par Bargh en 1996, est l'un des plus cités de la psychologie sociale. Il figurait dans tous les manuels, dans toutes les conférences grand public, et il a fondé une industrie entière d'interventions par « amorçage »."},
{t:"h", x:"Ce que la réplication a trouvé"},
{t:"p", x:"En 2012, Doyen et ses collègues refont l'expérience avec un dispositif plus propre : chronométrage automatique par capteurs au lieu d'un expérimentateur au chronomètre. Aucun effet."},
{t:"p", x:"Puis ils ajoutent une seconde étude, et c'est elle qui est décisive. Ils refont l'expérience en manipulant non pas les participants mais les expérimentateurs : à certains, on dit que les participants vont marcher plus lentement ; à d'autres, l'inverse. L'effet réapparaît — et il suit la croyance de l'expérimentateur, pas la condition du participant."},
{t:"p", x:"Autrement dit : l'effet mesuré était dans le chronomètre tenu par quelqu'un qui savait ce qu'il devait trouver. C'est une leçon de méthode plus utile que n'importe quel cours sur l'aveugle."},
{t:"h", x:"Les autres pertes"},
{t:"tab", head:["L'affirmation", "Ce qu'elle promettait", "Statut"], rows:[
  ["Amorçage de professeur", "penser à un professeur améliore les réponses de culture générale", "non répliqué en multi-laboratoires"],
  ["Effet Macbeth", "penser à une faute morale donne envie de se laver les mains", "réplications infructueuses"],
  ["Postures de pouvoir", "deux minutes en posture dominante modifient hormones et prise de risque", "désavoué par la première autrice de l'étude d'origine"],
  ["Rétroaction faciale", "un stylo tenu entre les dents fait trouver les dessins plus drôles", "nul dans une réplication à 17 laboratoires ; un travail ultérieur retrouve un effet beaucoup plus petit — dossier rouvert"]
]},
{t:"h", x:"Pourquoi ceux-là et pas l'ancrage"},
{t:"p", x:"Trois traits communs, et ils forment une grille de suspicion réutilisable."},
{t:"li", items:[
  "De très petits échantillons pour des effets annoncés comme spectaculaires. Reprends la leçon 1.4 : avec trente participants par groupe, seuls les résultats surestimés franchissent le seuil.",
  "Des mesures souples. Marcher dans un couloir, juger la drôlerie d'un dessin, choisir un produit de nettoyage : autant de variables où l'expérimentateur a des décisions à prendre après avoir vu les données.",
  "Une théorie assez vague pour prédire n'importe quoi. « L'activation d'un concept influence le comportement en lien avec ce concept » n'interdit aucun résultat, donc aucun résultat ne la réfute. C'est la cinquième question de la leçon 1.7, et elle suffisait à alerter dès le départ."
]},
{t:"h", x:"Ce que cet effondrement ne dit pas"},
{t:"p", x:"Il ne dit pas que le contexte n'influence pas le comportement : évidemment qu'il l'influence. Il ne dit pas non plus que tout amorçage est mort — il faut distinguer deux choses que le même mot recouvre."},
{t:"p", x:"L'amorçage sémantique, étudié en psycholinguistique, est solide : voir le mot « infirmière » accélère la reconnaissance du mot « docteur » de quelques dizaines de millisecondes. C'est un effet de laboratoire précis, mesuré en temps de réaction, répliqué des milliers de fois."},
{t:"p", x:"L'amorçage social comportemental prétendait tout autre chose : qu'un stimulus subtil modifie un comportement complexe plusieurs minutes plus tard. C'est ce saut-là qui n'a pas tenu."},
{t:"verdict", s:"effondre", x:"L'amorçage social comportemental", d:"non répliqué, et l'effet d'origine est reproductible en manipulant la croyance de l'expérimentateur plutôt que la condition du participant."},
{t:"verdict", s:"etabli", x:"L'amorçage sémantique", d:"effet de temps de réaction mesuré depuis les années 1970, largement répliqué — à ne pas confondre avec le précédent."},
{t:"key", x:"Quand un effet psychologique est à la fois spectaculaire, subtil dans sa cause et lointain dans son effet, c'est le profil exact de ce qui n'a pas survécu. Demande l'effectif et la date avant de t'enthousiasmer."}
],

"6.4": [
{t:"ex", titre:"L'exemple d'abord", x:"Je te propose un pile ou face équitable. Face, tu gagnes 100 €. Pile, tu perds 100 €. La plupart des gens refusent. Je monte le gain : à combien faut-il que je monte pour que tu acceptes ? La réponse typique tourne autour de 200 €, ce qui revient à dire qu'une perte pèse environ deux fois un gain de même taille."},
{t:"p", x:"Ce coefficient d'environ 2 est l'un des chiffres les plus cités des sciences du comportement. Il vient de la théorie des perspectives de Kahneman et Tversky, publiée en 1979, et il a servi de fondement à des pans entiers de marketing, de management et de politique publique."},
{t:"def", mot:"Aversion à la perte", x:"L'idée qu'une perte produit un effet psychologique plus fort qu'un gain de même ampleur, et que les décisions sont donc asymétriques autour d'un point de référence."},
{t:"h", x:"La contestation"},
{t:"p", x:"À partir de 2018, plusieurs chercheurs — Gal et Rucker notamment — ont repris le dossier et soutenu que l'asymétrie avait été surgénéralisée, et qu'une grande partie des démonstrations classiques s'expliquait autrement."},
{t:"p", x:"Leur argument central : beaucoup de résultats attribués à l'aversion à la perte s'expliquent aussi bien par l'inertie — la tendance à ne rien changer — sans qu'il soit besoin de postuler que les pertes pèsent plus lourd."},
{t:"h", x:"Le cas de l'effet de dotation"},
{t:"p", x:"L'expérience emblématique : on donne une tasse à la moitié d'une salle, puis on ouvre un marché. Les détenteurs demandent pour vendre bien plus que ce que les autres acceptent de payer. Interprétation standard : perdre la tasse fait plus mal que l'acquérir ne fait plaisir."},
{t:"p", x:"Plott et Zeiler ont montré que l'écart se réduit fortement, voire disparaît, quand on soigne les instructions, qu'on entraîne les participants au mécanisme d'enchère et qu'on supprime les signaux implicites sur ce qu'on attend d'eux. Ce qui ne prouve pas que l'effet n'existe pas, mais prouve qu'une part de la démonstration tenait au protocole."},
{t:"h", x:"Où en est le débat"},
{t:"p", x:"Les défenseurs ont répondu, avec des méta-analyses et des travaux récents soutenant l'asymétrie dans des conditions bien définies : des choix risqués, des enjeux non négligeables, des pertes réelles plutôt qu'hypothétiques."},
{t:"p", x:"La position raisonnable aujourd'hui tient en trois lignes."},
{t:"num", items:[
  "Pour des paris risqués avec des sommes qui comptent, l'asymétrie existe et se mesure.",
  "Le coefficient de 2 n'est pas une constante de la nature : il varie selon les gens, les montants et les domaines, et il est souvent plus proche de 1,5.",
  "Hors de ce cadre — préférences pour le statu quo, attachement aux objets possédés, réactions aux formulations en pertes — l'explication par l'aversion à la perte est devenue une explication par défaut, qu'on invoque sans la tester contre les alternatives."
]},
{t:"h", x:"Ce que ça change pour toi"},
{t:"p", x:"Tu rencontreras ce coefficient dans des présentations, et parfois appliqué au centime près à des modèles de comportement client. La question à poser est simple : sur quelles données ce 2 a-t-il été estimé, et dans quel type de décision ? S'il vient de loteries de laboratoire et qu'on l'applique à un arbitrage d'épargne, le transfert n'est pas justifié."},
{t:"verdict", s:"conteste", x:"Une perte pèse deux fois plus qu'un gain", d:"asymétrie réelle pour les choix risqués à enjeux réels, coefficient variable, et surgénéralisation massive hors de ce cadre."},
{t:"verdict", s:"conteste", x:"L'effet de dotation", d:"l'écart se réduit fortement quand le protocole élimine l'inexpérience et les signaux implicites ; le phénomène n'est pas nul mais il est plus fragile que l'image qu'on en a."},
{t:"key", x:"L'aversion à la perte est le meilleur exemple du cours d'un effet réel transformé en loi générale. Quand on te la sert comme explication, demande si l'inertie seule expliquerait la même observation — très souvent, oui."}
],

"6.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux pays voisins, cultures proches. Dans l'un, on est donneur d'organes sauf refus explicite ; dans l'autre, il faut cocher une case pour le devenir. Les taux de consentement enregistrés diffèrent énormément : de l'ordre de quelques pour cent d'un côté, plus de 90 % de l'autre. Personne n'a changé d'avis sur la mort : seule la case par défaut a changé."},
{t:"p", x:"C'est l'exemple fondateur du nudge, et il mérite immédiatement sa nuance, qui est rarement donnée : ce qui diffère massivement, c'est le consentement enregistré. Le nombre de greffes effectivement réalisées dépend aussi de l'organisation hospitalière, du nombre de donneurs compatibles et du dialogue avec les familles, et les écarts y sont bien plus faibles. L'effet est réel, il porte sur un indicateur en amont de celui qui compte."},
{t:"def", mot:"Nudge", x:"Une modification de l'architecture des choix qui oriente le comportement sans interdire d'option ni modifier les incitations économiques. Changer l'option par défaut, simplifier un formulaire, envoyer un rappel, afficher une norme sociale."},
{t:"h", x:"L'épisode méta-analytique, qui est un cas d'école du bloc A"},
{t:"p", x:"En 2022, une méta-analyse rassemble des centaines d'essais et conclut à un effet moyen d'environ 0,43 en d de Cohen — de quoi justifier des unités de sciences comportementales dans la plupart des gouvernements."},
{t:"p", x:"La même année, une équipe reprend ces données et leur applique les corrections de biais de publication vues à la leçon 1.5. Après correction, l'estimation globale n'est plus distinguable de zéro. L'entonnoir de cette littérature est amputé exactement comme le schéma de la leçon 1.5 le prédit."},
{t:"p", x:"Les deux camps ont échangé publiquement, et le débat n'est pas clos. Mais une seconde source de données, indépendante, tranche en grande partie."},
{t:"h", x:"Les essais à grande échelle"},
{t:"p", x:"Des chercheurs ont obtenu les résultats complets des unités comportementales publiques américaines — c'est-à-dire tous leurs essais, publiés ou non, portant sur des millions de personnes. L'avantage est décisif : il n'y a pas de tiroir, puisqu'on a l'intégralité du registre."},
{t:"calc", lignes:[
  "Effet moyen sur le taux d'adoption d'un comportement",
  "",
  "Littérature académique publiée   :  de l'ordre de  8 à 9 points",
  "Essais des unités publiques      :  de l'ordre de  1,4 point",
  "",
  "→ environ un sixième de ce que la littérature annonçait."
]},
{t:"p", x:"L'écart ne vient pas de nudges moins bons : il vient du filtre de publication. Les essais du registre complet incluent tous les ratés, que la littérature académique n'a jamais vus passer."},
{t:"h", x:"Ce qui marche quand même"},
{t:"li", items:[
  "Les options par défaut. C'est de loin le levier le plus puissant, et il reste solide : l'épargne retraite à adhésion automatique en est la démonstration la plus massive.",
  "La simplification administrative : réduire le nombre d'étapes, préremplir un formulaire, raccourcir un courrier. Ennuyeux, peu publiable, efficace.",
  "Les rappels bien ciblés, au bon moment, pour un comportement que la personne voulait déjà adopter.",
  "À l'inverse, l'information pure et les messages de norme sociale produisent peu d'effet sur des comportements coûteux. Dire aux gens que leurs voisins consomment moins d'électricité produit un effet réel et petit ; ça ne remplace pas un prix."
]},
{t:"p", x:"Et la limite de fond, qui est la plus importante pour un futur consultant : 1,4 point d'adoption en plus ne remplace pas une réforme. Quand un nudge est présenté comme l'alternative à une mesure structurelle, ce n'est plus de la science du comportement, c'est un argument politique."},
{t:"verdict", s:"etabli", x:"Les options par défaut modifient fortement les comportements", d:"démontré à grande échelle, en épargne retraite comme en don d'organes, avec des effets bien plus grands que les autres nudges."},
{t:"verdict", s:"conteste", x:"Les nudges ont un effet moyen important", d:"la méta-analyse de référence perd son effet après correction du biais de publication, et les registres complets d'essais publics trouvent environ un sixième de l'effet publié."},
{t:"key", x:"Le nudge est le champ qui montre le mieux ce que le bloc A permet de faire : même conclusion, trois sources — la méta-analyse brute, la méta-analyse corrigée, et le registre complet — et seule la troisième est fiable. Cherche toujours s'il existe un registre complet."}
],

"6.6": [
{t:"ex", titre:"L'exemple d'abord", x:"Dix questions, et pour chacune tu donnes non pas une réponse mais un intervalle dans lequel tu es sûr à 90 % que la vraie valeur se trouve. Longueur du Nil. Année de naissance de Mozart. Nombre d'employés d'Airbus. Si tes intervalles sont honnêtes, tu devrais en rater un sur dix environ. Le résultat typique, mesuré sur des cadres comme sur des étudiants : entre quatre et six intervalles sur dix contiennent la bonne valeur."},
{t:"p", x:"C'est le résultat le plus reproductible et le plus utilisable de ce module. Non pas que les gens se trompent — mais qu'ils se trompent sur leur propre marge d'erreur, et toujours dans le même sens."},
{t:"def", mot:"Calibration", x:"L'accord entre la confiance déclarée et la justesse observée. Quelqu'un est bien calibré si, parmi toutes les fois où il se dit sûr à 70 %, il a raison environ 70 % du temps."},
{t:"h", x:"Trois surconfiances distinctes"},
{t:"p", x:"Moore et Healy ont montré qu'on confondait trois choses sous un seul mot, et que les trois ne se comportent pas pareil."},
{t:"tab", head:["Forme", "Ce que c'est", "Quand elle apparaît"], rows:[
  ["Surestimation", "croire qu'on a mieux réussi qu'en réalité", "surtout sur les tâches difficiles"],
  ["Surclassement", "se croire meilleur que les autres", "sur les tâches faciles ; sur les tâches difficiles, les gens se croient au contraire moins bons que les autres"],
  ["Surprécision", "des intervalles trop serrés", "partout, et c'est la plus robuste des trois"]
]},
{t:"p", x:"La deuxième ligne mérite un arrêt. Le fameux « tout le monde se croit au-dessus de la moyenne » est vrai pour conduire une voiture ou s'entendre avec les gens — des tâches où chacun se juge compétent. Sur une compétence difficile et rare, l'effet s'inverse : les gens se jugent en dessous de la moyenne. Le slogan est donc faux comme généralité."},
{t:"h", x:"Ce qui améliore réellement la calibration"},
{t:"p", x:"Un seul facteur domine tous les autres : un retour d'information rapide, répété et non ambigu."},
{t:"p", x:"Les météorologues sont remarquablement bien calibrés — quand ils annoncent 70 % de pluie, il pleut environ 70 % du temps. Ils font des centaines de prédictions par an et le ciel leur répond le lendemain. Les parieurs professionnels et les joueurs de bridge expérimentés le sont aussi. Les analystes financiers et les experts politiques, dont les prédictions portent sur des horizons longs et sont rarement notées, ne le sont pas."},
{t:"p", x:"La différence ne tient pas à l'intelligence ni à l'expertise du domaine. Elle tient à la boucle de retour. C'est aussi, au passage, pourquoi ton évaluation d'une position aux échecs est probablement bien mieux calibrée que ton estimation d'un multiple de valorisation : l'une a reçu des milliers de corrections immédiates, l'autre presque aucune."},
{t:"h", x:"L'exercice, à faire pour de vrai"},
{t:"num", items:[
  "Prends dix questions à réponse numérique dans ton domaine — un chiffre d'affaires, une marge, une capitalisation, un effectif.",
  "Pour chacune, écris un intervalle dans lequel tu es sûr à 90 %, avant de vérifier. Pas une estimation ponctuelle : une borne basse et une borne haute.",
  "Vérifie, et compte combien d'intervalles contiennent la vraie valeur. Neuf ou dix : tu es calibré. Cinq : tes intervalles doivent être deux fois plus larges que ce que ton intuition propose.",
  "Recommence une semaine plus tard. C'est la répétition avec correction qui produit le gain, pas la connaissance du biais."
]},
{t:"p", x:"Ajoute une habitude qui marche en une phrase : avant de conclure, cherche activement deux raisons pour lesquelles tu aurais tort. Demander explicitement de considérer le contraire est l'une des rares interventions anti-biais dont l'effet est reproductible."},
{t:"verdict", s:"etabli", x:"La surprécision", d:"des intervalles à 90 % contiennent typiquement la bonne valeur dans la moitié des cas ; observé sur des experts comme sur des novices, et résistant à l'avertissement."},
{t:"verdict", s:"effondre", x:"Tout le monde se croit au-dessus de la moyenne", d:"vrai pour les tâches faciles, inversé pour les tâches difficiles — où les gens se sous-estiment par rapport aux autres."},
{t:"verdict", s:"conteste", x:"L'intuition des experts", d:"fiable dans les environnements réguliers à retour rapide — échecs, anesthésie, pompiers — et mauvaise dans les environnements irréguliers à retour lent, où l'expérience produit de la confiance sans produire de justesse."},
{t:"key", x:"C'est le seul biais de ce module qu'on sait entraîner, et la méthode tient en une ligne : écrire des intervalles, vérifier, compter, recommencer. Élargis tes intervalles jusqu'à ce que neuf sur dix tiennent — tu trouveras la largeur ridicule, et elle sera juste."}
],

/* ───────────────────────── MODULE 7 ───────────────────────── */

"7.1": [
{t:"ex", titre:"L'exemple d'abord", x:"Lis cette liste une fois, lentement : lit, repos, éveillé, fatigué, rêve, réveil, sieste, couverture, somnoler, ronfler, oreiller, paisible, bâiller, somnolent. Maintenant, sans revenir en arrière : le mot « sommeil » était-il dans la liste ?"},
{t:"p", x:"Il n'y était pas. Une nette majorité de gens affirment pourtant l'avoir lu, souvent avec autant de confiance que pour les mots réellement présents. Cette procédure porte un nom en laboratoire, elle fonctionne sur presque tout le monde, et elle fonctionne encore quand on prévient les participants à l'avance de ce qui va se passer."},
{t:"h", x:"Pourquoi ça marche"},
{t:"p", x:"Parce que se souvenir n'est pas relire un enregistrement. Le cerveau ne stocke pas une copie de l'épisode : il garde des fragments — du sens, quelques détails saillants, un contexte — et reconstruit une scène plausible au moment du rappel, en comblant les trous avec ce qui va bien ensemble."},
{t:"p", x:"Dans la liste ci-dessus, tous les mots convergent vers un thème. Le thème est activé, et il est ensuite impossible de distinguer un mot activé par convergence d'un mot activé parce qu'il a été lu. Le souvenir produit n'est pas une erreur de lecture : c'est le fonctionnement normal du système."},
{t:"p", x:"Bartlett l'avait montré dès 1932 en faisant raconter puis reraconter à des Anglais un conte amérindien étrange. Au fil des rappels, l'histoire se régularisait : les éléments incompréhensibles disparaissaient, les détails culturellement familiers s'ajoutaient, et les sujets ne percevaient aucune déformation."},
{t:"h", x:"Un souvenir rappelé est un souvenir modifié"},
{t:"p", x:"Il y a plus gênant. Rappeler une trace semble la rendre temporairement malléable, et ce qui est réenregistré ensuite inclut le contexte du rappel."},
{t:"p", x:"Ce mécanisme, appelé reconsolidation, est solidement établi chez l'animal, où l'on peut bloquer le réenregistrement pharmacologiquement et faire disparaître une peur apprise. Chez l'humain, les démonstrations existent mais sont plus discutées et plus difficiles à obtenir. Je te le donne donc comme un mécanisme sérieux et encore en débat, pas comme un acquis."},
{t:"p", x:"Dans sa version ordinaire, ça donne : le souvenir que tu as le plus souvent raconté n'est pas le mieux conservé, c'est le plus retravaillé. Chaque récit l'a réécrit un peu, dans le sens de l'histoire que tu racontais."},
{t:"h", x:"Le cas des souvenirs très vifs"},
{t:"p", x:"On appelle souvenirs-flash ces souvenirs extraordinairement nets qu'on garde des grands événements : où on était, avec qui, ce qu'on faisait. Leur netteté donne une impression d'enregistrement vidéo."},
{t:"p", x:"Des chercheurs ont recueilli ces souvenirs au lendemain d'événements marquants, puis les ont redemandés aux mêmes personnes des années plus tard. Le résultat est le plus important de cette leçon : l'exactitude baisse comme pour n'importe quel souvenir, et la confiance, elle, reste très élevée. Des participants contredits par leur propre récit écrit la veille de l'événement préfèrent croire leur souvenir actuel."},
{t:"p", x:"Ça vaut pour toi comme pour tout le monde : la vivacité d'un souvenir n'est pas un indice de son exactitude. C'est pourquoi la section Origines de l'entretien 1 demande un premier souvenir — non pas comme un fait vérifiable, mais comme la trace de ce que tu as réécrit, ce qui est une information d'un autre ordre."},
{t:"verdict", s:"etabli", x:"La mémoire reconstruit au lieu de relire", d:"démontrable sur soi-même en une minute, répliqué depuis 1932 et formalisé en laboratoire depuis les années 1950."},
{t:"verdict", s:"effondre", x:"Un souvenir net et détaillé est un souvenir fiable", d:"la confiance et l'exactitude se décorrèlent avec le temps, et les souvenirs les plus vifs ne font pas exception."},
{t:"verdict", s:"effondre", x:"La mémoire photographique", d:"l'eidétisme véritable chez l'adulte n'a quasiment jamais été documenté en conditions contrôlées ; les performances spectaculaires reposent sur des techniques, pas sur un enregistrement."},
{t:"key", x:"Tu ne consultes pas tes souvenirs, tu les refabriques — et tu les refabriques un peu différemment chaque fois, dans le sens de ce que tu crois aujourd'hui. Ça ne les rend pas inutiles : ça interdit de les traiter comme des preuves."}
],

"7.2": [
{t:"ex", titre:"L'exemple d'abord", x:"On contacte la famille d'un participant et on recueille trois souvenirs d'enfance véridiques. On y ajoute un quatrième, fabriqué : à cinq ans, il s'est perdu dans un centre commercial, a pleuré, et a été ramené par une personne âgée. La famille confirme que ça n'est jamais arrivé. On présente les quatre récits au participant et on lui demande de les développer, sur plusieurs entretiens espacés."},
{t:"p", x:"Environ un quart des participants finissent par se souvenir de l'épisode inventé. Et ils ne le récitent pas : ils l'enrichissent de détails que personne ne leur a fournis — la couleur de la chemise de la dame, ce que disait sa mère en le retrouvant, ce qu'il ressentait."},
{t:"p", x:"Cette étude d'Elizabeth Loftus, publiée en 1995, a été reprise avec d'autres contenus. Avec une photographie truquée montrant le participant enfant dans une montgolfière — voyage qui n'a jamais eu lieu —, la proportion de personnes qui finissent par s'en souvenir monte à près d'une sur deux."},
{t:"h", x:"Les ingrédients"},
{t:"li", items:[
  "Une source crédible. Le récit vient de la famille ou d'un chercheur : il n'y a aucune raison d'en douter.",
  "La répétition. L'épisode est redemandé plusieurs fois, à des semaines d'intervalle. La familiarité du récit augmente, et la familiarité se confond avec le souvenir.",
  "L'imagination guidée. Demander d'imaginer la scène en détail suffit à augmenter la conviction qu'elle a eu lieu — un effet documenté sous le nom d'inflation par imagination.",
  "La plausibilité. L'épisode doit être du genre de ce qui arrive. On n'implante pas facilement un souvenir absurde."
]},
{t:"h", x:"Jusqu'où ça va, et la prudence qui s'impose"},
{t:"p", x:"Une étude de 2015 a rapporté avoir amené une large majorité de participants à se souvenir d'avoir commis, adolescents, un délit ayant impliqué la police. Le chiffre a circulé partout."},
{t:"p", x:"Une réanalyse indépendante a ensuite recodé les entretiens avec des critères plus stricts, en distinguant un vrai faux souvenir d'une simple acceptation complaisante du récit, et a obtenu une proportion nettement plus basse — de l'ordre de trois sur dix. Le phénomène existe, son ampleur publiée était surestimée. Applique ici ta propre grille : le résultat vient d'un codage, et le codage était jugé par ceux qui testaient l'hypothèse."},
{t:"h", x:"Ce que ce domaine n'autorise pas"},
{t:"p", x:"Il faut être très explicite, parce que ces travaux sont régulièrement détournés. Montrer qu'on peut fabriquer un souvenir en laboratoire, avec un protocole insistant et une source crédible, ne démontre pas que les souvenirs rapportés spontanément sont faux. Ce sont deux situations sans rapport."},
{t:"p", x:"La conclusion utile est procédurale, pas générale : elle porte sur les conditions dans lesquelles on recueille un récit. Un souvenir obtenu après des questions suggestives répétées, dans un cadre où l'on attend qu'il émerge, n'a pas la même valeur probante qu'un récit spontané et constant. Ça concerne les enquêtes, les entretiens cliniques et les interrogatoires — pas la parole de quelqu'un qui raconte sa vie."},
{t:"verdict", s:"etabli", x:"On peut implanter des souvenirs d'événements qui n'ont pas eu lieu", d:"répliqué avec des contenus variés et des taux de l'ordre de 20 à 50 % selon le protocole."},
{t:"verdict", s:"conteste", x:"On peut faire avouer un crime imaginaire à 70 % des gens", d:"le chiffre d'origine tombe à environ 30 % après recodage indépendant avec des critères plus stricts."},
{t:"key", x:"Ce qui fabrique un faux souvenir est une procédure : source crédible, répétition, imagination guidée, plausibilité. Donc la question à poser devant un souvenir contesté n'est jamais « est-il sincère ? » — il l'est presque toujours — mais « dans quelles conditions a-t-il été recueilli ? »."}
],

"7.3": [
{t:"ex", titre:"L'exemple d'abord", x:"On montre à des participants un film d'accident de voiture. On demande ensuite à une moitié : à quelle vitesse allaient les voitures quand elles se sont heurtées ? Et à l'autre : quand elles se sont percutées ? L'estimation de vitesse est plus élevée dans le second groupe. Une semaine plus tard, on demande à tout le monde s'il y avait du verre brisé sur la chaussée. Il n'y en avait pas. Ceux qui avaient lu « percutées » sont nettement plus nombreux à s'en souvenir."},
{t:"p", x:"Un verbe, posé après coup, a modifié non seulement un jugement mais le contenu du souvenir visuel. L'expérience date de 1974 et elle a lancé tout un champ."},
{t:"h", x:"La conséquence judiciaire"},
{t:"p", x:"Aux États-Unis, des centaines de condamnations ont été annulées grâce à des analyses ADN pratiquées des années après les faits. En reprenant ces dossiers, on peut regarder ce qui avait produit l'erreur judiciaire initiale."},
{t:"p", x:"L'identification erronée par un témoin oculaire est le facteur le plus fréquent : elle est présente dans environ 70 % de ces cas. Pas des témoins malhonnêtes — des gens sincères, qui ont reconnu quelqu'un, et qui se trompaient."},
{t:"h", x:"La révision importante sur la confiance"},
{t:"p", x:"Le message diffusé pendant des décennies était que la confiance d'un témoin ne dit rien de son exactitude. Ce message est trop simple, et des travaux plus récents l'ont corrigé d'une façon que je trouve exemplaire."},
{t:"p", x:"Lors d'une toute première identification, menée proprement, la confiance est en réalité très informative : un témoin qui se dit immédiatement certain se trompe beaucoup moins qu'un témoin hésitant. Ce qui détruit cette relation, c'est ce qui se passe ensuite."},
{t:"num", items:[
  "Le policier confirme — « c'est bien lui, on le soupçonnait » — et la confiance du témoin grimpe sans que son souvenir ait changé. C'est documenté sous le nom d'effet de la confirmation post-identification.",
  "Le témoin est amené à identifier plusieurs fois, dans plusieurs dispositifs. À la troisième fois, il reconnaît en partie le visage des séances précédentes, pas celui de la scène.",
  "Le temps passe, le récit est raconté, l'audience arrive. Au procès, des mois plus tard, un témoin est presque toujours certain — et cette certitude-là ne vaut plus rien."
]},
{t:"p", x:"La conclusion utile est donc : la confiance est un bon indicateur une seule fois, au tout premier contact, et à condition que rien ne l'ait contaminée. C'est aussi la pire des nouvelles pour les tribunaux, puisque c'est précisément l'information que personne n'enregistrait."},
{t:"h", x:"Ce que les réformes ont retenu"},
{t:"li", items:[
  "La parade d'identification en double aveugle : celui qui la conduit ne sait pas qui est le suspect, pour ne pas pouvoir orienter involontairement — exactement le problème des expérimentateurs de la leçon 6.3.",
  "L'instruction préalable que l'auteur peut ne pas figurer parmi les personnes présentées. Sans elle, le témoin choisit le plus ressemblant des six.",
  "L'enregistrement immédiat du degré de confiance, dans les mots du témoin, avant tout retour.",
  "Des comparses plausibles : si cinq des six personnes ne correspondent pas du tout à la description, la parade ne teste rien."
]},
{t:"verdict", s:"etabli", x:"L'information fournie après un événement modifie le souvenir de l'événement", d:"reproduit depuis 1974 avec des matériels variés, y compris pour des détails visuels jamais présents."},
{t:"verdict", s:"conteste", x:"Un témoin sûr de lui est fiable", d:"vrai lors d'une première identification non contaminée, faux ensuite — et c'est presque toujours « ensuite » qu'on l'interroge au procès."},
{t:"key", x:"La question n'est pas de savoir si le témoin est honnête, mais à quel moment de la chaîne sa confiance a été mesurée. C'est le même raisonnement que pour une étude : ce qui compte n'est pas la sincérité de celui qui rapporte, c'est le protocole qui a produit le rapport."}
],

"7.4": [
{t:"ex", titre:"L'exemple d'abord", x:"Années 1990, États-Unis puis Europe. Des adultes entreprennent une thérapie pour des symptômes variés. Au fil des séances, avec des techniques d'imagerie guidée, d'hypnose ou d'interprétation de rêves, émergent des souvenirs d'abus subis dans l'enfance, jusque-là totalement absents. Des familles se brisent, des procès ont lieu. En parallèle, et dans les mêmes années, des victimes réelles d'abus sont systématiquement mises en doute."},
{t:"p", x:"Ces deux phénomènes sont vrais en même temps, et c'est ce qui rend ce sujet si difficile. Le domaine a d'ailleurs un nom pour la période : la guerre des mémoires. Elle n'est pas terminée."},
{t:"h", x:"Les deux positions, dans leur meilleure version"},
{t:"p", x:"Position 1 : il existe un mécanisme particulier par lequel un souvenir traumatique devient inaccessible pendant des années, puis revient. Les cliniciens qui la soutiennent s'appuient sur des cas documentés de patients rapportant une période d'amnésie complète, suivie d'une récupération parfois corroborée par des éléments extérieurs."},
{t:"p", x:"Position 2 : aucun mécanisme spécial n'est nécessaire. Ce qu'on observe s'explique par l'oubli ordinaire, par l'évitement délibéré d'y penser pendant des années, par le fait de n'en avoir jamais parlé, et par la réinterprétation tardive d'un souvenir qu'on avait sans en comprendre la portée. Et une partie des cas est produite par les techniques thérapeutiques elles-mêmes, dont la leçon précédente a montré l'efficacité redoutable."},
{t:"h", x:"Ce qui est tranché à l'intérieur du débat"},
{t:"p", x:"Il serait faux de dire qu'on ne sait rien. Plusieurs points font consensus, y compris entre chercheurs opposés sur le reste."},
{t:"li", items:[
  "Les traumatismes sont en général trop bien rappelés, pas trop peu. Le tableau clinique dominant après un événement traumatique est l'intrusion — images involontaires, reviviscences, cauchemars — pas l'effacement.",
  "Les techniques dites de récupération — hypnose, imagerie guidée, interprétation de rêves, entretien insistant — augmentent fortement la confiance du patient sans augmenter l'exactitude. Sur ce point, les données sont claires et la pratique devrait suivre.",
  "Ne pas avoir parlé pendant vingt ans n'est pas la même chose qu'avoir oublié. La confusion entre non-divulgation et amnésie a brouillé une grande partie de la littérature.",
  "Un souvenir récupéré spontanément, hors de tout contexte thérapeutique suggestif, a un meilleur taux de corroboration externe qu'un souvenir émergé au fil d'une thérapie de récupération."
]},
{t:"p", x:"Ce qui reste contesté est plus étroit qu'il n'y paraît : l'existence d'un mécanisme d'amnésie dissociative distinct de l'oubli et de l'évitement ordinaires."},
{t:"h", x:"Pourquoi ça compte au-delà du débat académique"},
{t:"p", x:"Des enquêtes régulières montrent que la croyance en un refoulement au sens fort reste majoritaire dans le public, et très répandue chez les cliniciens — bien plus que chez les chercheurs en mémoire. Cet écart entre les deux professions a des conséquences concrètes, puisque ce sont des cliniciens qui interrogent."},
{t:"p", x:"Et il y a deux erreurs possibles, pas une. Croire un faux souvenir détruit la vie d'un innocent. Ne pas croire un vrai récit abandonne une victime. Un domaine qui ne tiendrait compte que de la première erreur ne serait pas plus scientifique — il aurait simplement choisi son camp."},
{t:"verdict", s:"conteste", x:"L'amnésie dissociative", d:"des cliniciens rapportent des cas, des chercheurs en mémoire contestent la nécessité d'un mécanisme spécifique. Le débat est réel et porte sur le mécanisme, pas sur la réalité des abus."},
{t:"verdict", s:"etabli", x:"Les techniques de récupération de souvenirs sont dangereuses", d:"elles augmentent la conviction sans augmenter l'exactitude ; c'est l'un des rares points sur lesquels les deux camps s'accordent."},
{t:"verdict", s:"effondre", x:"Le traumatisme s'efface de la mémoire", d:"le tableau dominant est le rappel intrusif et répété, pas l'effacement."},
{t:"key", x:"Deux erreurs symétriques et deux victimes possibles : ne jamais raisonner comme si une seule existait. Et la ligne pratique qui fait consensus : ce qui compte n'est pas le contenu du souvenir mais la manière dont il a émergé."}
],

"7.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux groupes d'étudiants, même texte, même temps total. Le premier relit le texte quatre fois. Le second le lit une fois, puis essaie trois fois de le restituer de mémoire sans le relire. Juste après, les relecteurs se sentent plus sûrs d'eux et prédisent qu'ils retiendront mieux. Une semaine plus tard, on les interroge : ceux qui se sont testés rappellent nettement plus, et l'écart est large."},
{t:"p", x:"Deux résultats dans une seule expérience, et c'est le second qui est le plus important. Le premier : se tester bat relire. Le second : les étudiants prédisent l'inverse, et c'est pour ça que presque personne ne le fait."},
{t:"h", x:"L'effet de test"},
{t:"def", mot:"Effet de test", x:"Le fait que tenter de récupérer une information en mémoire renforce davantage sa rétention que la réétudier pendant le même temps. Récupérer n'est pas lire la trace : c'est la reconstruire, et la reconstruction la consolide."},
{t:"p", x:"C'est l'une des interventions pédagogiques les mieux établies qui existent — large, répliquée, valable de l'école primaire à la formation médicale, sur du vocabulaire comme sur du raisonnement."},
{t:"p", x:"Un détail compte : le test doit être difficile et sans l'information sous les yeux. Relire en se disant « oui, je savais » ne compte pas. Fermer le document et écrire ce dont on se souvient, si."},
{t:"h", x:"L'illusion de fluence, qui explique tout le reste"},
{t:"def", mot:"Illusion de fluence", x:"Prendre la facilité de traitement d'une information pour une preuve qu'on la maîtrise. Un texte relu devient facile à lire, et cette aisance est confondue avec de la compétence."},
{t:"p", x:"C'est la raison pour laquelle le surlignage et la relecture restent les méthodes les plus utilisées alors qu'elles sont classées, dans les revues systématiques des techniques d'étude, parmi les moins efficaces. Elles ne produisent pas de l'apprentissage, elles produisent le sentiment d'apprendre — et ce sentiment est immédiat, agréable et trompeur."},
{t:"p", x:"Corollaire désagréable : les méthodes efficaces donnent sur le moment l'impression d'être inefficaces. Elles sont lentes, pénibles, pleines d'échecs de rappel. Bjork a baptisé ça les difficultés désirables, et c'est l'un des rares cas où l'inconfort est le signe que ça marche."},
{t:"h", x:"L'espacement, avec des chiffres"},
{t:"p", x:"Répartir le même temps d'étude dans le temps bat le bloc unique, et l'écart grandit avec le délai avant l'épreuve. La question pratique est : espacer de combien ?"},
{t:"calc", lignes:[
  "Règle issue des travaux sur l'espacement optimal :",
  "intervalle de révision ≈ 10 à 20 % du délai visé",
  "",
  "Épreuve dans 1 semaine   → réviser tous les 1 jour environ",
  "Épreuve dans 1 mois      → tous les 3 à 5 jours",
  "Épreuve dans 6 mois      → tous les 3 à 4 semaines",
  "",
  "→ pour retenir à six mois, réviser chaque jour est",
  "   un mauvais emploi du même temps total."
]},
{t:"p", x:"Ce sont des ordres de grandeur, pas une loi fine. Mais ils suffisent à corriger l'erreur la plus courante : réviser trop serré, trop près de l'échéance, ce qui optimise la performance du lendemain et pas la rétention à six mois."},
{t:"h", x:"Les deux autres leviers"},
{t:"li", items:[
  "Le sommeil. La consolidation se fait en grande partie pendant la nuit qui suit l'apprentissage. Une nuit écourtée après une session ne coûte pas seulement de la fatigue, elle coûte une partie de la trace. On y revient au module 9.",
  "L'élaboration. Expliquer, relier à ce qu'on sait déjà, se demander pourquoi c'est vrai. Un élément isolé se perd ; un élément accroché à un réseau se retrouve par plusieurs chemins."
]},
{t:"h", x:"Ce que ça change pour tes fondamentaux"},
{t:"p", x:"Tu dis vouloir savoir dérouler un raisonnement financier de tête plutôt que le reconnaître. Tu viens de décrire exactement la différence entre récupération et relecture — et donc la méthode est déjà écrite : fermer le document, dérouler à voix haute ou sur papier, vérifier après, espacer de quelques jours, recommencer."},
{t:"p", x:"Et une question à te poser sur tes propres applications : est-ce qu'elles te font récupérer, ou est-ce qu'elles te font reconnaître ? Un quiz à choix multiples où la bonne réponse est présente parmi quatre est beaucoup plus proche de la relecture que du test. Si tu veux du rappel, il faut une case vide."},
{t:"verdict", s:"etabli", x:"L'effet de test", d:"se tester fait mieux retenir que réétudier à temps égal ; effet large, répliqué sur des décennies et dans tous les niveaux d'enseignement."},
{t:"verdict", s:"etabli", x:"L'espacement", d:"à temps total constant, répartir dans le temps bat le bloc unique, et l'avantage grandit avec le délai avant l'épreuve."},
{t:"verdict", s:"effondre", x:"Relire et surligner", d:"classés parmi les techniques les moins efficaces dans les revues systématiques, alors qu'ils restent les plus utilisés — parce qu'ils produisent le sentiment de maîtrise."},
{t:"key", x:"Ce qui donne l'impression de marcher ne marche pas, et ce qui donne l'impression d'échouer marche. Ferme le document, écris ce dont tu te souviens, vérifie, et reviens dans trois jours plutôt que demain."}
]

};
