/* ═══════════════════════════════════════════════════════════════
   LE COURS · BLOC B — Qui tu es
   Module 2 : La personnalité (6 leçons)
   Module 3 : L'intelligence (5 leçons)
   ═══════════════════════════════════════════════════════════════ */

window.CONTENU_B = {

/* ───────────────────────── MODULE 2 ───────────────────────── */

"2.1": [
{t:"ex", titre:"L'exemple d'abord", x:"On donne à dix mille personnes une liste de trois cents adjectifs — bavard, ordonné, inquiet, créatif, rancunier, ponctuel — et on leur demande de se noter sur chacun. Puis on regarde lesquels bougent ensemble. Celui qui se dit bavard se dit aussi, presque toujours, sociable et énergique. Celui qui se dit ordonné se dit aussi ponctuel et consciencieux. Mais bavard et ordonné, eux, n'ont rien à voir."},
{t:"p", x:"Quand on fait tourner cette analyse, les trois cents adjectifs se rangent d'eux-mêmes en cinq paquets. Pas six, pas douze. Et on obtient à peu près les mêmes cinq paquets en recommençant dans une autre langue, sur une autre population, trente ans plus tard."},
{t:"def", mot:"Analyse factorielle", x:"Une technique qui cherche combien de dimensions cachées suffisent à expliquer un grand nombre de mesures corrélées. Si « bavard », « sociable » et « énergique » montent et descendent ensemble, l'analyse conclut qu'une seule dimension sous-jacente les porte, et qu'il est inutile d'en compter trois."},
{t:"h", x:"D'où vient l'idée de fouiller le dictionnaire"},
{t:"p", x:"Le point de départ s'appelle l'hypothèse lexicale, et il est astucieux : si une différence entre les humains compte vraiment dans la vie sociale, les langues ont fini par lui donner un mot. On n'a donc pas besoin d'inventer une théorie de la personnalité — il suffit de ramasser le vocabulaire existant et de regarder sa structure."},
{t:"p", x:"Allport et Odbert ont extrait du dictionnaire anglais, en 1936, près de dix-huit mille termes décrivant des personnes. Cattell a réduit la liste. Tupes et Christal, en 1961, puis Norman, ont trouvé les cinq facteurs. Goldberg leur a donné leur nom dans les années 1980, Costa et McCrae ont construit les questionnaires qui ont diffusé le modèle. Ce n'est donc pas une théorie qu'on a imposée aux données : c'est une structure qu'on a trouvée dedans, plusieurs fois, par des équipes qui ne cherchaient pas la même chose."},
{t:"h", x:"Les cinq, et ce qu'ils veulent dire exactement"},
{t:"tab", head:["Facteur", "Pôle haut", "Pôle bas", "Le malentendu courant"], rows:[
  ["Ouverture", "curieux, attiré par l'abstrait et l'inhabituel", "concret, attaché à l'éprouvé", "ce n'est pas l'intelligence, même si les deux corrèlent un peu"],
  ["Conscienciosité", "organisé, tenace, fiable", "spontané, désordonné", "ce n'est pas la morale : on peut être rigoureux et malhonnête"],
  ["Extraversion", "énergique au contact, recherche la stimulation", "réservé, se recharge seul", "ce n'est pas la timidité, qui relève plutôt de l'anxiété sociale"],
  ["Agréabilité", "coopératif, confiant, conciliant", "direct, compétitif, méfiant", "le pôle bas n'est pas la méchanceté — c'est souvent la franchise brutale"],
  ["Névrosisme", "réactif, encaisse mal, rumine", "stable, revient vite à l'équilibre", "ce n'est pas « être névrosé » : c'est la sensibilité aux émotions négatives"]
]},
{t:"p", x:"Retiens l'acronyme anglais si ça t'aide : OCEAN. Retiens surtout que ce sont des dimensions, pas des cases. Chacun se trouve quelque part sur les cinq, et les distributions ressemblent à des cloches : il y a beaucoup de gens au milieu et peu aux extrêmes."},
{t:"h", x:"Le piège : il n'y a pas de types"},
{t:"p", x:"L'erreur la plus fréquente consiste à transformer ces dimensions en catégories — « je suis introverti », « c'est un consciencieux ». Pour qu'une catégorie soit légitime, il faudrait que la distribution soit à deux bosses, avec un creux au milieu séparant deux populations. On ne l'observe pas. La distribution de l'extraversion a une seule bosse, et son sommet est au centre."},
{t:"p", x:"Dire « je suis introverti » quand on est à 40 sur 100 revient à dire « je suis petit » quand on mesure 1,74 m. Ce n'est pas faux, mais ça transforme une position sur une échelle continue en identité, et c'est exactement ce que vendent les tests à types."},
{t:"h", x:"Ce que le modèle ne fait pas"},
{t:"li", items:[
  "Il décrit, il n'explique pas. Savoir que quelqu'un est haut en névrosisme ne dit pas pourquoi. Le facteur résume un paquet de comportements, il n'en est pas la cause — dire « il rumine parce qu'il est névrotique » est une tautologie déguisée en explication.",
  "Il ne capte pas tout. Les valeurs, les croyances, les intérêts, les compétences, l'histoire personnelle ne sont pas dedans. Deux personnes avec le même profil peuvent mener des vies sans aucun rapport.",
  "Sa cinquième dimension voyage moins bien que les autres. L'ouverture est celle qui se retrouve le moins nettement dans les études lexicales menées hors de l'anglais, et plusieurs langues font ressortir six facteurs plutôt que cinq — on y vient à la leçon 2.3."
]},
{t:"verdict", s:"etabli", x:"La structure en cinq facteurs", d:"retrouvée dans des dizaines de langues et par des équipes indépendantes depuis les années 1960 ; c'est l'un des résultats les plus solides de toute la psychologie."},
{t:"verdict", s:"effondre", x:"Il existe des types de personnalité", d:"les distributions sont unimodales et continues. Tout découpage en catégories — introverti ou extraverti, INTJ ou ENFP — crée une frontière là où il n'y en a pas."},
{t:"key", x:"Cinq dimensions continues, trouvées dans le dictionnaire plutôt que dans une théorie, répliquées depuis soixante ans. Chaque fois qu'on te propose un portrait en cases, demande où est le creux dans la distribution. Il n'y en a pas."}
],

"2.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu as deux candidats pour un poste. Tu fais passer un inventaire de personnalité. L'un sort nettement plus haut en conscienciosité que l'autre. Les méta-analyses te disent que la conscienciosité est le facteur du Big Five qui prédit le mieux la performance au travail, avec une corrélation autour de 0,2. Tu prends lequel ?"},
{t:"p", x:"Avant de répondre, traduisons ce 0,2 en quelque chose de lisible. Pour deux personnes tirées au hasard, la probabilité que celle qui a le score le plus élevé soit aussi la plus performante se calcule directement à partir de la corrélation."},
{t:"calc", lignes:[
  "Probabilité de concordance = 0,5 + arcsin(r)/π",
  "",
  "r = 0,2  →  0,5 + 0,201/3,1416 = 0,564   →  56 fois sur 100",
  "r = 0,3  →  0,5 + 0,305/3,1416 = 0,597   →  60 fois sur 100",
  "r = 0,5  →  0,5 + 0,524/3,1416 = 0,667   →  67 fois sur 100",
  "",
  "Part de variance expliquée : r = 0,2  →  4 %",
  "                             r = 0,3  →  9 %"
]},
{t:"p", x:"Donc : prendre le plus consciencieux te donne raison 56 fois sur 100, au lieu de 50 si tu tires à pile ou face. C'est un gain réel. Sur mille recrutements, ça fait soixante erreurs de moins, et aucun directeur des ressources humaines ne cracherait dessus. Sur un recrutement, ça ne te dit à peu près rien."},
{t:"p", x:"Voilà la double nature de la psychologie des différences individuelles, et il faut la tenir des deux mains : ces mesures sont très utiles sur des populations et très faibles sur des personnes. Celui qui s'en sert pour piloter une politique d'embauche a raison. Celui qui s'en sert pour juger le candidat assis en face de lui se trompe presque une fois sur deux."},
{t:"h", x:"Ce que chaque facteur prédit"},
{t:"tab", head:["Facteur", "Prédit surtout", "Ordre de grandeur"], rows:[
  ["Conscienciosité", "performance au travail, réussite scolaire, longévité, observance d'un traitement", "le meilleur prédicteur des cinq, autour de 0,2 pour la performance"],
  ["Névrosisme", "insatisfaction conjugale, divorce, troubles anxieux et dépressifs", "le plus fort lien des cinq avec la santé mentale"],
  ["Extraversion", "émergence comme leader, nombre de relations, affect positif", "modeste, et plus fort pour l'émergence que pour l'efficacité"],
  ["Agréabilité", "qualité des relations, moindre conflit", "modeste ; légèrement négatif sur le salaire, surtout chez les hommes"],
  ["Ouverture", "réussite en formation, créativité, choix de métiers artistiques", "faible, sauf sur les métiers de création"]
]},
{t:"p", x:"Deux de ces liens méritent qu'on s'y arrête, parce qu'ils sont contre-intuitifs. La conscienciosité prédit la longévité : le suivi longitudinal démarré par Terman dans les années 1920, repris des décennies plus tard, montre que les enfants les plus consciencieux vivaient plus longtemps. Non par magie, mais par accumulation : ils fument moins, conduisent moins vite, prennent leurs rendez-vous médicaux, respectent leurs traitements."},
{t:"p", x:"Et l'agréabilité est légèrement associée à un salaire plus bas. Être conciliant coûte en négociation salariale — ce qui ne dit rien sur ce qu'il faut faire, mais explique peut-être ce que tu constateras en entreprise."},
{t:"h", x:"Pourquoi ces liens sont si faibles, et pourquoi ce n'est pas un défaut"},
{t:"p", x:"Un trait ne prédit pas bien un acte isolé. Quelqu'un de très consciencieux arrive parfois en retard. C'est le reproche classique fait aux tests de personnalité : regardez, il est haut en conscienciosité et il a rendu ce dossier en retard, donc le test ne vaut rien."},
{t:"p", x:"L'erreur est de comparer un trait à un acte. Un trait est une tendance moyenne, et il faut l'évaluer contre une moyenne. Pris sur une seule occasion, le comportement est dominé par la situation, l'humeur, la fatigue, le hasard. Agrégé sur cinquante occasions, tout ce bruit s'annule et la tendance apparaît nettement."},
{t:"p", x:"C'est exactement le raisonnement qu'on applique à un fonds : on ne juge pas une stratégie sur une journée de marché. Le bruit quotidien dépasse le signal. La personnalité se comporte de la même façon — elle prédit mal demain et bien la décennie."},
{t:"verdict", s:"conteste", x:"Les tests de personnalité en recrutement", d:"validité réelle mais faible, et aggravée par deux problèmes : le candidat peut falsifier ses réponses à son avantage, et l'entretien qui suit annule souvent le gain en ramenant du jugement intuitif."},
{t:"verdict", s:"effondre", x:"Ce test m'a parfaitement décrit", d:"l'impression de justesse d'un portrait de personnalité est une mauvaise mesure de sa validité : des descriptions assez vagues pour convenir à tout le monde emportent la même adhésion. On y revient au module 17."},
{t:"key", x:"Pose toujours la question en deux temps. Est-ce que ça prédit quelque chose sur une population ? Souvent oui, modestement. Est-ce que ça permet de juger la personne en face de moi ? Presque jamais. Confondre les deux est l'erreur centrale de l'usage grand public de la psychologie."}
],

"2.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux personnes obtiennent exactement le même score bas en agréabilité. La première est brusque, contredit tout le monde en réunion, et rend les dossiers qu'elle a promis. La seconde est charmante, et facture des prestations qu'elle n'a pas faites. Le modèle en cinq facteurs les range au même endroit."},
{t:"p", x:"Ce n'est pas un détail. Ce que la seconde personne a et que la première n'a pas — la disposition à exploiter autrui quand c'est rentable et discret — est précisément ce qui intéresse un employeur, un associé ou un conjoint. Et ce n'est pas dans les cinq facteurs."},
{t:"h", x:"La sixième dimension"},
{t:"p", x:"Dans les années 1990 et 2000, Ashton et Lee refont le travail lexical — fouiller le vocabulaire d'une langue et le factoriser — mais sur des langues qui n'avaient pas servi à construire le Big Five : le coréen, le hongrois, l'italien, le polonais, le néerlandais, le français. Six facteurs ressortent, pas cinq. Le facteur supplémentaire regroupe des mots comme sincère, loyal, modeste, cupide, prétentieux, hypocrite."},
{t:"def", mot:"Honnêteté-Humilité (H)", x:"La sixième dimension du modèle HEXACO. Pôle haut : sincérité, équité, refus d'exploiter autrui même quand c'est sans risque, modestie, indifférence au luxe et au statut. Pôle bas : manipulation, sentiment d'avoir droit à plus, goût du prestige, disposition à tricher quand ça paie."},
{t:"p", x:"HEXACO désigne les six : Honnêteté-Humilité, Émotivité, eXtraversion, Agréabilité, Conscienciosité, Ouverture. Les quatre dernières ressemblent à leurs homologues du Big Five, mais deux ont été redécoupées. La colère, par exemple, bascule du névrosisme vers l'agréabilité : dans HEXACO, s'emporter facilement relève du rapport aux autres, pas de la fragilité émotionnelle."},
{t:"h", x:"Pourquoi cette dimension-là mérite une leçon"},
{t:"p", x:"Parce qu'elle prédit ce que les cinq autres prédisent mal : les comportements contre-productifs au travail, la délinquance, la tricherie en conditions expérimentales, l'exploitation des proches, le harcèlement. Sur ces conduites, H fait mieux que n'importe lequel des cinq facteurs classiques."},
{t:"p", x:"Et parce qu'elle change la lecture de la leçon suivante. Les trois traits dits sombres — narcissisme, machiavélisme, psychopathie — corrèlent tous très négativement avec H. Au point qu'une partie de la recherche soutient que la triade noire n'est rien d'autre que le bas de cette dimension, affublé de trois noms cliniques."},
{t:"h", x:"Le débat, honnêtement"},
{t:"p", x:"Tout le monde n'a pas adopté HEXACO. L'argument des défenseurs du Big Five est que la variance de H est déjà présente, dispersée entre agréabilité et conscienciosité, et qu'un sixième facteur ajoute de la complexité sans ajouter d'information. L'argument des partisans de HEXACO est empirique : sur les conduites éthiques, H prédit au-delà de ce que les cinq facteurs captent — ce qu'on appelle une validité incrémentale."},
{t:"p", x:"L'état actuel du débat penche du côté de HEXACO pour tout ce qui touche à l'éthique et à l'exploitation, et laisse le Big Five dominant partout ailleurs, par simple inertie : soixante ans de littérature sont écrits dans sa langue."},
{t:"verdict", s:"etabli", x:"Une sixième dimension lexicale existe", d:"retrouvée indépendamment dans une dizaine de langues ; la question ouverte est son utilité, pas son existence."},
{t:"verdict", s:"conteste", x:"Le Big Five suffit", d:"vrai pour la plupart des usages, faux pour tout ce qui concerne l'honnêteté, la tricherie et l'exploitation."},
{t:"key", x:"Quand une affirmation porte sur l'éthique de quelqu'un — il est fiable, il est manipulateur, il trichera —, les cinq facteurs classiques ne sont pas l'outil. La dimension qui répond à cette question est l'honnêteté-humilité, et elle est absente de la plupart des tests que tu croiseras."}
],

"2.4": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu passes trois questionnaires courts. Le premier mesure le narcissisme : « Je mérite plus que les autres », « J'aime être le centre de l'attention ». Le deuxième le machiavélisme : « Il est sage de cacher ses vraies intentions », « La plupart des gens peuvent être manipulés ». Le troisième la psychopathie : « J'ai tendance à ne pas culpabiliser », « J'agis sans réfléchir aux conséquences ». Paulhus et Williams ont réuni les trois en 2002 sous le nom de triade noire."},
{t:"p", x:"Vingt ans plus tard, c'est devenu un genre de contenu à part entière. Avant de juger ce qui en est dit, il faut savoir ce que ces échelles mesurent réellement, et ce qu'elles confondent."},
{t:"h", x:"Problème numéro un : les trois ne se séparent pas"},
{t:"p", x:"Si la triade décrivait trois dispositions distinctes, les trois scores devraient être faiblement corrélés entre eux. Ils le sont fortement, et d'autant plus que l'échelle utilisée est courte. Avec les questionnaires de douze items très répandus en ligne, machiavélisme et psychopathie deviennent presque impossibles à distinguer statistiquement."},
{t:"p", x:"Pire : le machiavélisme, tel qu'il est théorisé, suppose un calcul froid, de la patience, une stratégie à long terme. Or les personnes qui obtiennent des scores élevés sur ces échelles sortent aussi élevées en impulsivité, ce qui contredit directement la définition du construit. Une échelle qui mesure l'inverse de ce qu'elle prétend mesurer est un problème sérieux, et il n'est pas réglé."},
{t:"h", x:"Problème numéro deux : il y a peut-être un seul facteur"},
{t:"p", x:"En 2018, Moshagen, Hilbig et Zettler proposent de prendre le problème par l'autre bout. Ils rassemblent neuf dispositions sombres — égoïsme, machiavélisme, désengagement moral, narcissisme, sentiment d'avoir droit à tout, psychopathie, sadisme, intérêt personnel, malveillance gratuite — et testent si elles partagent un noyau commun."},
{t:"def", mot:"Le facteur D", x:"La tendance générale à maximiser son propre intérêt au détriment d'autrui, assortie de croyances qui justifient ce comportement. Chaque trait sombre en serait une manifestation particulière, comme chaque épreuve cognitive est une manifestation du facteur g qu'on verra au module 3."},
{t:"p", x:"Et une troisième lecture, encore plus économe, est sur la table : ce noyau commun serait simplement le pôle bas de l'honnêteté-humilité, la dimension vue à la leçon précédente. Les corrélations vont dans ce sens — H corrèle fortement et négativement avec les trois traits de la triade."},
{t:"p", x:"On a donc trois descriptions concurrentes du même matériel : trois traits distincts, un facteur sombre général, ou une dimension de personnalité normale lue par son bas. Le débat n'est pas tranché. Ce qui est tranché, c'est qu'on ne peut plus parler des trois comme de choses séparées et bien délimitées."},
{t:"h", x:"Problème numéro trois : ce ne sont pas des diagnostics"},
{t:"p", x:"Ces échelles sont des auto-questionnaires passés en population générale. Elles mesurent des variations ordinaires, pas des troubles. La psychopathie évaluée en milieu carcéral par un clinicien formé, avec entretien et dossier judiciaire, est un autre objet, construit autrement et pour un autre usage."},
{t:"p", x:"Il y a d'ailleurs une bizarrerie amusante dans l'auto-questionnaire : on demande à des gens caractérisés par la manipulation et le mensonge s'ils sont manipulateurs et menteurs. Ils répondent, et plutôt honnêtement — ce qui s'explique, mais devrait rendre prudent sur ce qu'on mesure vraiment."},
{t:"h", x:"Le cas du narcissisme, qu'il faut couper en deux"},
{t:"tab", head:["", "Narcissisme grandiose", "Narcissisme vulnérable"], rows:[
  ["Apparence", "assurance, charisme, domination", "susceptibilité, retrait, rancune"],
  ["Rapport à soi", "estime de soi élevée, exhibée", "estime de soi basse et instable"],
  ["Lien avec le névrosisme", "faible ou négatif", "fortement positif"],
  ["Ce que ça produit", "émergence comme leader, prise de risque", "souffrance, conflits, évitement"]
]},
{t:"p", x:"Ces deux formes se comportent de façon opposée sur presque tout, et les additionner dans un score unique produit du bruit. Quand tu lis un résultat sur « le narcissisme », la première question à poser est : lequel des deux ?"},
{t:"h", x:"Et la question qui t'intéresse : ça mène au sommet ?"},
{t:"p", x:"Les méta-analyses sur narcissisme et leadership trouvent une relation en cloche : un niveau modéré est associé à une plus forte probabilité d'émerger comme leader, un niveau élevé ne l'est plus. Et il faut distinguer deux choses que tout le monde confond — émerger comme leader, c'est-à-dire être choisi, et être efficace une fois en poste. Le narcissisme aide à la première et pas à la seconde."},
{t:"p", x:"S'ajoute un biais que tu reconnaîtras immédiatement : on étudie des dirigeants en poste. Les narcissiques qui ont fait exploser leur carrière avant d'arriver là ne sont pas dans l'échantillon. C'est un biais du survivant, exactement comme les palmarès de fonds qui ne contiennent que les fonds encore ouverts."},
{t:"verdict", s:"conteste", x:"La triade noire mène au sommet", d:"liens faibles, en cloche pour le narcissisme, mesurés sur des survivants, et portant sur l'émergence plutôt que sur l'efficacité."},
{t:"verdict", s:"conteste", x:"Narcissisme, machiavélisme et psychopathie sont trois traits distincts", d:"fortement corrélés, et peut-être réductibles à un noyau unique ou au bas de l'honnêteté-humilité."},
{t:"verdict", s:"marketing", x:"Le pervers narcissique", d:"expression issue d'un essai clinique français de la fin des années 1990, popularisée par les médias, absente des classifications internationales et sans instrument de mesure validé. Elle décrit une expérience de victime — réelle, souvent grave — pas une catégorie de personnalité établie."},
{t:"key", x:"La triade noire mesure quelque chose de réel : la disposition à se servir des autres. Mais elle le mesure en trois morceaux qui ne se séparent pas, sur des questionnaires courts qui les confondent encore plus, en population générale, et sur des gens qui ont survécu. Avant d'en tirer une conclusion sur quelqu'un, relis les cinq questions de la leçon 1.7."}
],

"2.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Une classe de vingt lycéens passe un inventaire de personnalité. Quarante ans plus tard, on retrouve les mêmes personnes et on refait le test. Deux questions complètement différentes se posent, et presque tout le monde les mélange. Un : est-ce que ceux qui étaient les plus consciencieux de la classe le sont encore ? Deux : est-ce que la classe entière est devenue plus consciencieuse ?"},
{t:"p", x:"On peut répondre oui aux deux, non aux deux, ou oui à l'une et non à l'autre. Ce sont deux formes de stabilité indépendantes, et il faut les nommer séparément pour sortir du débat de comptoir sur « est-ce que les gens changent »."},
{t:"def", mot:"Stabilité de rang", x:"La corrélation entre les scores des mêmes personnes à deux dates. Elle dit si le classement se conserve, indépendamment du fait que tout le monde ait monté ou baissé."},
{t:"def", mot:"Changement de niveau moyen", x:"Le déplacement de la moyenne du groupe entre deux dates. Il dit si tout le monde a bougé dans la même direction, indépendamment du classement."},
{t:"h", x:"Réponse à la première question : le classement tient, et de plus en plus"},
{t:"p", x:"Les méta-analyses de suivis longitudinaux donnent une progression très régulière. La stabilité de rang est faible dans l'enfance — autour de 0,3 — puis monte continûment : elle approche 0,5 au début de l'âge adulte, et se situe autour de 0,7 après cinquante ans."},
{t:"p", x:"Traduit en clair : à sept ans, savoir où tu es dans le classement ne prédit pas grand-chose du classement à quatorze ans. À cinquante ans, c'est beaucoup plus figé — mais 0,7 n'est pas 1, et il reste de la place pour des changements de position réels."},
{t:"h", x:"Réponse à la deuxième : tout le monde bouge, dans la même direction"},
{t:"p", x:"C'est le résultat le plus net de ce domaine, et on l'appelle le principe de maturation. De la fin de l'adolescence au milieu de la vie, en moyenne et dans tous les pays étudiés : la conscienciosité monte, l'agréabilité monte, le névrosisme baisse."},
{t:"p", x:"Autrement dit, les gens deviennent en moyenne plus fiables, plus conciliants et plus stables émotionnellement avec l'âge. L'adolescent désorganisé et à vif n'est pas condamné à le rester : la pente par défaut va dans le bon sens. Ce qui relativise la plainte habituelle sur l'immaturité des jeunes — ils ne sont pas d'une autre espèce, ils sont à un autre point de la même courbe."},
{t:"h", x:"Est-ce qu'on peut changer exprès ?"},
{t:"p", x:"C'est la question que tout le monde veut poser, et elle n'a commencé à recevoir des réponses sérieuses que récemment. Les protocoles consistent à demander à des volontaires quel trait ils veulent modifier, puis à leur faire formuler des engagements comportementaux concrets, semaine après semaine — pas « être plus extraverti » mais « dire bonjour à trois inconnus mercredi »."},
{t:"p", x:"Les résultats : des changements réels, mesurables en quelques semaines à quelques mois, et de petite ampleur — quelques dixièmes d'écart-type. Deux conditions ressortent nettement. D'abord, vouloir changer ne suffit pas : ceux qui formulent seulement une intention ne bougent pas. Ensuite, ce sont les actes planifiés à l'avance et rattachés à une situation précise qui produisent le déplacement."},
{t:"p", x:"Les psychothérapies produisent, elles aussi, des changements de personnalité, et le mieux documenté porte sur le névrosisme. L'essentiel du mouvement se produit dans les premières semaines, ce qui est intéressant en soi : ce n'est pas un lent polissage sur des années."},
{t:"h", x:"Ce que vaut un déplacement d'un demi-écart-type"},
{t:"calc", lignes:[
  "Tu es au 50ᵉ centile en névrosisme (exactement la moyenne).",
  "Tu baisses de 0,5 écart-type.",
  "",
  "Φ(0,5) = 0,691",
  "→ tu es maintenant plus stable que 69 % des gens,",
  "   là où tu en dépassais 50 %."
]},
{t:"p", x:"Ce n'est pas une transformation en une autre personne. C'est le genre d'écart qui sépare quelqu'un qui rumine deux heures après une réunion tendue de quelqu'un qui rumine vingt minutes. Vécu de l'intérieur, sur une année, c'est considérable."},
{t:"verdict", s:"effondre", x:"Les gens ne changent pas", d:"faux dans les deux sens de la stabilité : le niveau moyen se déplace avec l'âge, et le classement n'est jamais parfaitement conservé."},
{t:"verdict", s:"effondre", x:"Tu peux devenir qui tu veux", d:"les changements volontaires documentés sont de l'ordre de quelques dixièmes d'écart-type sur quelques mois, et ils demandent des actes planifiés, pas une décision."},
{t:"key", x:"Devant « est-ce que les gens changent ? », demande toujours : le classement ou le niveau ? Le niveau bouge tout seul avec l'âge, dans le sens de la maturité. Le classement bouge peu, mais il bouge — et un demi-écart-type de névrosisme en moins, c'est le passage du 50ᵉ au 69ᵉ centile."}
],

"2.6": [
{t:"ex", titre:"L'exemple d'abord", x:"On mesure l'extraversion chez des paires de jumeaux. Chez les vrais jumeaux, qui partagent la totalité de leurs gènes, la corrélation entre les deux membres d'une paire est d'environ 0,45. Chez les faux jumeaux, qui en partagent la moitié comme des frères et sœurs ordinaires, elle est d'environ 0,22. Les deux types de paires ont grandi dans la même maison, avec les mêmes parents."},
{t:"p", x:"De cet écart on tire une estimation de l'héritabilité, par une formule simple : si les vrais jumeaux se ressemblent davantage que les faux, et que la seule différence systématique entre les deux situations est la proportion de gènes partagés, alors l'écart mesure l'effet des gènes."},
{t:"calc", lignes:[
  "h² = 2 × (corrélation vrais jumeaux − corrélation faux jumeaux)",
  "h² = 2 × (0,45 − 0,22) = 0,46",
  "",
  "→ environ 46 % de la variance d'extraversion,",
  "   dans cette population, est associée à la variance génétique."
]},
{t:"p", x:"Les estimations pour les cinq facteurs tournent dans la même zone : quarante à soixante pour cent. C'est le chiffre que tout le monde cite, et c'est aussi la phrase la plus systématiquement mal comprise de la psychologie. Lis bien la ligne de traduction ci-dessus : elle parle de variance, dans une population. Pas de toi."},
{t:"h", x:"Ce que l'héritabilité ne veut pas dire"},
{t:"def", mot:"Héritabilité", x:"La part des différences observées entre les individus d'une population donnée, dans un environnement donné, qui s'explique par les différences génétiques entre eux. C'est une statistique sur un groupe, mesurée à un moment et dans un contexte. Ce n'est pas une propriété d'une personne."},
{t:"p", x:"Dire « mon extraversion est à 46 % génétique » n'a aucun sens, exactement comme dire que la surface d'un rectangle est à 46 % due à sa longueur. Les deux facteurs sont nécessaires à 100 % pour que tu existes. Ce qui se décompose, ce ne sont pas les individus, ce sont les écarts entre individus."},
{t:"p", x:"Et il en découle trois conséquences que presque personne n'anticipe."},
{t:"num", items:[
  "Si on égalisait parfaitement les environnements, l'héritabilité monterait. Elle augmente quand la variance environnementale diminue, puisqu'il ne reste que le génétique pour expliquer les différences restantes. Une héritabilité élevée peut donc être le signe d'une société plus équitable, pas d'une société plus fataliste.",
  "L'héritabilité ne dit rien sur ce qu'on peut changer. La myopie est fortement héritable ; une paire de lunettes la corrige en cinq minutes. La taille l'est encore plus, et la taille moyenne a gagné une dizaine de centimètres en un siècle dans plusieurs pays, sans que les gènes aient bougé. Héritable ne veut pas dire figé.",
  "Elle est locale. Une héritabilité mesurée dans un pays, à une époque, sur une classe sociale, ne se transporte pas ailleurs. Plusieurs travaux américains trouvent une héritabilité de l'intelligence plus faible dans les milieux très défavorisés — comme si la pauvreté empêchait le potentiel de s'exprimer. Ce résultat se réplique mal en Europe de l'Ouest, et l'explication proposée est justement la différence de filet social. Le débat reste ouvert, et sa structure est elle-même instructive."
]},
{t:"h", x:"Le résultat qui dérange le plus"},
{t:"p", x:"Les études de jumeaux et d'adoption convergent sur un point que personne n'avait prévu : l'effet d'avoir grandi dans la même famille, une fois adulte, est faible sur les traits de personnalité. Deux enfants adoptés élevés dans le même foyer ne se ressemblent pas beaucoup plus, à quarante ans, que deux inconnus."},
{t:"p", x:"Turkheimer a résumé l'état du domaine en trois lois : tous les traits comportementaux sont héritables ; l'effet d'être élevé dans la même famille est plus petit que l'effet des gènes ; et une part importante de la variation ne s'explique ni par les gènes ni par la famille."},
{t:"p", x:"Il faut immédiatement dire ce que ce résultat n'autorise pas, parce qu'il est régulièrement détourné. Il porte sur la variation à l'intérieur d'une gamme ordinaire d'environnements familiaux, dans des pays développés. Il ne dit rien sur la maltraitance, la négligence grave ou la privation, qui sortent de cette gamme et dont les effets sont massifs et documentés. Il ne dit pas non plus que les parents n'influencent rien : ils transmettent une langue, une religion, des valeurs politiques, un réseau, un capital, et surtout la qualité de la relation elle-même. Ce qu'ils transmettent peu, ce sont les traits de personnalité."},
{t:"h", x:"Et la génétique moléculaire, alors ?"},
{t:"p", x:"On pourrait espérer que le séquençage règle la question en identifiant les gènes concernés. Il ne l'a pas fait. Les scores calculés à partir de centaines de milliers de variants expliquent, pour la personnalité, quelques pour cent de la variance — très en dessous des quarante à soixante pour cent estimés par les jumeaux. Cet écart a un nom, l'héritabilité manquante, et il n'est pas résolu."},
{t:"p", x:"Tiens-en compte quand on te vendra un test génétique de personnalité, ou de potentiel. Sur ce qu'ils mesurent effectivement aujourd'hui, ces produits sont à peu près vides."},
{t:"verdict", s:"effondre", x:"50 % de ma personnalité vient de mes parents", d:"confusion entre la variance d'une population et la composition d'un individu. L'héritabilité ne se découpe pas en parts à l'intérieur d'une personne."},
{t:"verdict", s:"effondre", x:"C'est héritable, donc on ne peut rien y faire", d:"la myopie, la taille et la phénylcétonurie sont fortement héritables et toutes trois modifiables."},
{t:"verdict", s:"etabli", x:"L'effet du foyer d'origine sur les traits de personnalité adultes est faible", d:"convergence des études de jumeaux et d'adoption, dans la gamme ordinaire des environnements familiaux."},
{t:"key", x:"L'héritabilité est une statistique sur des écarts dans une population donnée, à une époque donnée. Elle ne dit rien sur ce qui est modifiable, rien sur une personne en particulier, et elle monte quand les environnements s'égalisent. Trois phrases à ressortir chaque fois qu'on t'oppose « c'est génétique »."}
],

/* ───────────────────────── MODULE 3 ───────────────────────── */

"3.1": [
{t:"ex", titre:"L'exemple d'abord", x:"Londres, 1904. Spearman relève les notes d'écoliers dans des matières qui n'ont apparemment rien à voir : le latin, le français, les mathématiques, et une épreuve de discrimination de hauteurs sonores. Il s'attend à des liens faibles et dispersés. Il trouve que toutes les corrélations sont positives — les bons en latin sont en moyenne bons en discrimination de sons."},
{t:"p", x:"Ce résultat a plus de cent vingt ans, il a été attaqué sans relâche, et personne n'a jamais réussi à le faire disparaître. C'est le point de départ obligé de toute discussion sérieuse sur l'intelligence, qu'on aime ou non ce qu'il implique."},
{t:"def", mot:"Manifold positif", x:"Le fait que toutes les épreuves cognitives, quelles qu'elles soient, corrèlent positivement entre elles dans une population donnée. Aucune batterie de tests cognitifs n'a jamais produit de corrélation systématiquement nulle ou négative entre ses sous-épreuves."},
{t:"p", x:"C'est un fait, et il demande une explication. Le facteur g est le nom donné à cette régularité quand on l'extrait statistiquement : la première dimension d'une analyse factorielle appliquée à une batterie cognitive, celle qui capte ce que toutes les épreuves ont en commun."},
{t:"h", x:"Ce qu'on a essayé pour le faire disparaître"},
{t:"li", items:[
  "Construire des épreuves volontairement exotiques, loin de l'école et de la culture écrite : temps de réaction, mémoire de travail visuelle, vitesse d'inspection. Elles rentrent dans le manifold positif.",
  "Changer de population, de langue, de pays, de niveau scolaire. Le manifold reste.",
  "Mesurer des capacités supposées indépendantes, comme la musique ou l'orientation spatiale. Elles corrèlent aussi — c'est le problème central de la théorie des intelligences multiples, qu'on verra en 3.5."
]},
{t:"h", x:"La structure au-dessus et en dessous"},
{t:"p", x:"Le modèle qui fait aujourd'hui le plus consensus est hiérarchique. Tout en haut, g. En dessous, des aptitudes larges : le raisonnement fluide — résoudre un problème nouveau sans connaissances préalables —, l'intelligence cristallisée — le stock de savoirs et de vocabulaire accumulés —, la vitesse de traitement, la mémoire de travail, la capacité spatiale. Tout en bas, les épreuves particulières."},
{t:"p", x:"Cette architecture permet de dire deux choses à la fois, et c'est exactement ce qu'il faut : les gens diffèrent sur une capacité générale, et ils diffèrent aussi sur des profils d'aptitudes. Quelqu'un peut avoir un g moyen et une capacité spatiale remarquable. Les deux affirmations sont compatibles, et les données exigent les deux."},
{t:"h", x:"Ce que g n'est pas"},
{t:"p", x:"g est une régularité statistique, pas une substance. Rien ne garantit qu'il corresponde à une quantité unique dans le cerveau — un débit, une efficacité, une matière. C'est une tentation permanente, et c'est un saut injustifié."},
{t:"p", x:"Il existe d'ailleurs une explication alternative sérieuse, dite du réseau ou de la mutualisation : il n'y aurait aucune capacité générale sous-jacente, mais des processus cognitifs distincts qui s'entraident au cours du développement. Qui lit mieux apprend plus de vocabulaire, ce qui aide à raisonner sur des textes, ce qui aide à apprendre encore. Au bout de quinze ans, tout corrèle avec tout — sans qu'aucun facteur général n'ait jamais existé au départ."},
{t:"p", x:"Les deux modèles prédisent le même manifold positif. On ne sait pas trancher entre eux avec les données actuelles, et c'est une incertitude qu'il faut garder : le fait est solide, son interprétation ne l'est pas."},
{t:"verdict", s:"etabli", x:"Toutes les épreuves cognitives corrèlent positivement", d:"observé depuis 1904, dans toutes les populations testées, avec toutes les batteries construites, y compris par des chercheurs qui cherchaient à le réfuter."},
{t:"verdict", s:"conteste", x:"g est une capacité générale située dans le cerveau", d:"c'est une interprétation parmi d'autres du manifold positif ; les modèles de réseau prédisent les mêmes données sans postuler de facteur général."},
{t:"key", x:"Distingue le fait de son explication. Le fait — tout corrèle avec tout — est l'un des plus solides de la psychologie. L'explication — il existe une capacité générale — est une hypothèse qui a des concurrentes vivantes. Celui qui nie le fait est mal informé ; celui qui présente l'explication comme acquise va trop vite."}
],

"3.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux candidats pour un poste de contrôle de gestion. L'un obtient un score cognitif nettement supérieur à l'autre. Les méta-analyses situent la corrélation entre aptitude cognitive et performance au travail autour de 0,3 — une valeur révisée à la baisse en 2022, après qu'une relecture méthodique a montré que les estimations historiques, souvent citées autour de 0,5, corrigeaient trop généreusement certains biais."},
{t:"p", x:"Reprends la table de conversion de la leçon 2.2. Une corrélation de 0,3 signifie que le candidat le mieux noté sera le plus performant environ 60 fois sur 100. Mieux que pile ou face, loin d'une certitude."},
{t:"h", x:"Le classement des domaines"},
{t:"tab", head:["Ce que le score cognitif prédit", "Force du lien", "En clair"], rows:[
  ["Résultats scolaires", "le plus fort de tous, de 0,5 à 0,7 selon la mesure", "c'est l'usage pour lequel les tests ont été inventés"],
  ["Performance au travail", "autour de 0,3, et plus fort dans les métiers complexes", "60 fois sur 100"],
  ["Revenu", "modeste, autour de 0,2", "56 fois sur 100 ; l'origine sociale pèse davantage"],
  ["Santé et longévité", "réel et robuste", "documenté sur des cohortes nationales entières suivies des décennies"]
]},
{t:"p", x:"Le dernier mérite une mention, parce qu'il surprend toujours. Des travaux écossais ont pu relier les scores obtenus par des enfants lors d'un test passé en 1932 par toute une classe d'âge à leur mortalité soixante ans plus tard. Le lien existe. Les explications candidates sont nombreuses — meilleures décisions de santé, métiers moins dangereux, milieu plus favorable, ou vigueur générale de l'organisme — et aucune n'est tranchée."},
{t:"h", x:"L'objection sociale, et ce qu'on peut y répondre"},
{t:"p", x:"L'objection la plus courante est que ces tests mesurent surtout l'origine sociale, et que la prédiction n'est qu'un recyclage du privilège. Elle est sérieuse, et partiellement vraie : le milieu influence à la fois les scores et les résultats de vie — c'est le troisième larron de la leçon 1.1."},
{t:"p", x:"Un type d'étude permet pourtant de l'écarter partiellement : la comparaison entre frères et sœurs d'une même famille. Ils partagent le milieu, l'école, le quartier, le capital des parents. Quand l'un obtient un score plus élevé que l'autre, il obtient aussi en moyenne de meilleurs résultats scolaires et professionnels. Le lien ne peut donc pas être entièrement du milieu — même si la comparaison intrafamiliale a ses propres limites."},
{t:"h", x:"La limite qu'il faut tenir fermement"},
{t:"p", x:"Reprenons la distinction de la leçon 2.2, parce qu'elle est encore plus importante ici. Sur des populations, ces mesures sont parmi les plus prédictives dont dispose la psychologie appliquée. Sur une personne, elles sont faibles."},
{t:"p", x:"Avec une corrélation de 0,3, la part de variance expliquée est de 9 %. Quatre-vingt-onze pour cent de ce qui fait la différence entre deux carrières est ailleurs : la conscienciosité, le réseau, la santé, le hasard des rencontres, la conjoncture du secteur, le fait d'avoir eu un bon patron à vingt-cinq ans. Tu connais des gens très brillants qui n'ont rien fait de leur avantage, et tu connais l'inverse. Ces cas ne sont pas des exceptions à la règle : ils sont ce que la règle prédit."},
{t:"verdict", s:"effondre", x:"Le QI ne mesure que la capacité à passer des tests de QI", d:"il prédit des résultats mesurés des années plus tard, dans des domaines sans rapport avec la situation de test. C'est précisément ce qu'un test qui ne mesurerait rien ne ferait pas."},
{t:"verdict", s:"effondre", x:"Le QI détermine la réussite", d:"9 % de la variance ; l'essentiel est ailleurs."},
{t:"key", x:"Les deux affirmations extrêmes sont fausses, et elles le sont pour la même raison : elles confondent un lien statistique sur une population avec un destin individuel. Garde la traduction en tête — 0,3, c'est 60 fois sur 100."}
],

"3.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Prends quelqu'un qui a passé un test d'intelligence en 1950 et qui a obtenu exactement le score moyen de son époque. Corrige sa copie avec les normes d'aujourd'hui : il se retrouve nettement en dessous de la moyenne actuelle. Fais l'inverse, et un adulte moyen d'aujourd'hui noté selon les normes de 1950 passerait pour remarquablement doué."},
{t:"p", x:"Ce glissement est réel et il a été documenté dans une trentaine de pays : environ trois points de gain par décennie sur l'essentiel du vingtième siècle. James Flynn l'a mis au jour en comparant les étalonnages successifs des tests, qu'il faut renormer régulièrement précisément parce que les scores bruts montent."},
{t:"h", x:"Le détail qui change tout : les gains ne sont pas uniformes"},
{t:"p", x:"Si l'intelligence elle-même avait augmenté, on s'attendrait à des gains comparables sur toutes les sous-épreuves. Ce n'est pas du tout ce qu'on observe."},
{t:"tab", head:["Type d'épreuve", "Gain au XXᵉ siècle"], rows:[
  ["Matrices abstraites, classification, analogies", "très fort"],
  ["Compréhension de similitudes (« en quoi un chien et un lapin se ressemblent-ils ? »)", "fort"],
  ["Vocabulaire", "faible"],
  ["Arithmétique et connaissances générales", "faible, parfois nul"]
]},
{t:"p", x:"L'interprétation de Flynn découle directement de ce tableau : ce qui a augmenté, ce n'est pas la puissance de calcul, c'est l'habitude de manier l'abstraction. Un paysan de 1900 à qui l'on demandait ce qu'un chien et un lapin ont en commun répondait qu'on se sert du chien pour attraper le lapin — une réponse pratique, pertinente, et notée zéro par le test, qui attend « ce sont des mammifères ». Un siècle de scolarisation, de travail sur symboles et de catégories abstraites a rendu la seconde réponse naturelle."},
{t:"p", x:"Autrement dit : la population n'est pas devenue plus intelligente, elle a adopté les lunettes que le test réclame."},
{t:"h", x:"Le retournement"},
{t:"p", x:"Depuis les années 1990, plusieurs pays nordiques, le Royaume-Uni et d'autres montrent une stagnation, voire une baisse. Un travail norvégien particulièrement élégant exploite les tests passés par tous les conscrits, sur des dizaines d'années — ce qui donne une population quasi exhaustive, sans biais de sélection."},
{t:"p", x:"Son résultat décisif tient à une comparaison à l'intérieur des familles : la baisse s'observe entre frères d'une même fratrie, les plus jeunes obtenant des scores inférieurs à leurs aînés. Or les frères partagent leurs parents. Toutes les explications fondées sur un changement de composition de la population — immigration, natalité différentielle entre groupes — sont donc écartées d'un seul coup. Ce qui baisse, baisse à l'intérieur des familles, donc pour des raisons d'environnement."},
{t:"p", x:"Quelles raisons ? On ne sait pas. Les candidats proposés vont des changements de pédagogie à la transformation des habitudes de lecture, en passant par le temps d'écran. Aucun n'est établi, et ceux qui te l'affirment avec certitude vendent une thèse."},
{t:"h", x:"Ce que cet épisode démontre vraiment"},
{t:"p", x:"Un gain de trois points par décennie signifie une trentaine de points en un siècle. C'est plus que l'écart entre bien des groupes sociaux. Et les fréquences génétiques d'une population ne changent pas en trois générations."},
{t:"p", x:"Conclusion que l'on peut tirer sans risque : quelle que soit l'héritabilité mesurée à un instant donné, l'environnement est capable de déplacer les scores d'une population de façon considérable. C'est exactement le point de la leçon 2.6 — héritable ne veut pas dire figé — et l'effet Flynn en est la démonstration grandeur nature."},
{t:"verdict", s:"etabli", x:"L'effet Flynn", d:"documenté dans des dizaines de pays par comparaison des étalonnages successifs ; sa réalité n'est pas discutée."},
{t:"verdict", s:"conteste", x:"Nos grands-parents étaient moins intelligents que nous", d:"les gains portent massivement sur les épreuves abstraites et peu sur les connaissances ; il s'agit plus vraisemblablement d'un changement d'habitudes mentales que de capacité."},
{t:"verdict", s:"conteste", x:"On devient plus bêtes", d:"la baisse est réelle dans plusieurs pays et établie à l'intérieur des familles, mais ses causes sont inconnues et les explications circulant dans les médias sont des hypothèses, pas des résultats."},
{t:"key", x:"Trente points en un siècle, sans changement génétique possible, et des gains concentrés sur l'abstraction. Retiens ça comme l'argument le plus court contre les deux camps : ni destin génétique, ni mesure vide."}
],

"3.4": [
{t:"ex", titre:"L'exemple d'abord", x:"On mesure l'héritabilité de l'intelligence chez des enfants de cinq ans : elle tourne autour de 0,2 à 0,4. On la mesure chez les mêmes individus devenus adultes : elle monte vers 0,6 à 0,8. Le résultat est stable et répliqué, et il est exactement l'inverse de ce que l'intuition prédit."},
{t:"p", x:"L'intuition dit : à la naissance on est au plus près de ses gènes, puis la vie, l'école et les rencontres éloignent progressivement chacun de son point de départ. Les données disent le contraire. Plus on avance en âge, plus les différences entre individus s'alignent sur les différences génétiques."},
{t:"h", x:"L'explication : on choisit son environnement"},
{t:"def", mot:"Corrélation gène-environnement", x:"Le fait que les dispositions d'une personne influencent les environnements qu'elle rencontre et sélectionne. Ce n'est pas que les gènes agissent directement : c'est qu'ils orientent les choix, qui à leur tour amplifient la disposition de départ."},
{t:"p", x:"Un enfant de cinq ans subit son environnement : ses parents choisissent les livres, l'école, les activités. À vingt-cinq ans, il choisit tout — ses lectures, ses études, ses amis, son métier. Celui qui a une légère facilité pour l'abstraction s'oriente vers des filières abstraites, fréquente des gens qui parlent de ces choses, exerce un métier qui l'entraîne encore. L'écart initial, minuscule, se transforme en écart d'expérience accumulée."},
{t:"p", x:"L'héritabilité croissante ne mesure donc pas une emprise biologique croissante. Elle mesure l'effet boule de neige d'une liberté croissante : plus on peut choisir son milieu, plus son milieu ressemble à ses propres penchants."},
{t:"h", x:"L'effet du foyer s'évapore, l'effet de l'adoption non"},
{t:"p", x:"Deuxième résultat déroutant, parallèle à celui de la leçon 2.6 : l'effet d'avoir grandi dans la même famille sur les scores cognitifs est net dans l'enfance et devient faible à l'âge adulte. Deux enfants adoptés dans le même foyer se ressemblent cognitivement à dix ans, beaucoup moins à trente."},
{t:"p", x:"Mais — et c'est là que la lecture fataliste se casse — les études d'adoption montrent aussi que les enfants adoptés depuis un milieu défavorisé vers un milieu favorisé gagnent plusieurs points par rapport à ce qu'ils auraient obtenu autrement. Les deux choses sont vraies simultanément, et ce n'est qu'apparemment contradictoire : l'adoption déplace le niveau de tout le monde vers le haut, sans beaucoup modifier le classement entre les adoptés. Tu reconnais la distinction de la leçon 2.5, niveau moyen contre rang."},
{t:"h", x:"L'héritabilité varie selon le milieu"},
{t:"p", x:"Plusieurs travaux américains trouvent que l'héritabilité de l'intelligence est plus faible dans les familles très pauvres, comme si une partie du potentiel génétique ne pouvait pas s'exprimer faute de conditions. Le raisonnement sous-jacent est le même que celui de la leçon 2.6 : ce qui varie dans un milieu très contraint, ce sont les contraintes, pas les gènes."},
{t:"p", x:"Il faut dire tout de suite que ce résultat se réplique mal en Europe de l'Ouest et dans les pays nordiques. L'explication avancée est que les systèmes sociaux y réduisent l'étendue de la privation, donc la variance environnementale, donc l'effet qu'on cherche à mesurer. Cette explication est plausible et elle n'est pas démontrée. À ranger en contesté, et à citer avec cette réserve si on te la sert comme un fait acquis."},
{t:"h", x:"La seule phrase à retenir sur gènes et milieu"},
{t:"p", x:"Les deux lectures militantes — tout est génétique, tout est social — commettent la même erreur de raisonnement. Elles traitent une statistique de population comme une description du mécanisme individuel. L'héritabilité ne dit pas ce qui fabrique une intelligence ; elle dit d'où viennent les écarts entre les gens, dans ce groupe-là, à ce moment-là, avec ces environnements-là. Change l'un des trois, le chiffre change."},
{t:"verdict", s:"etabli", x:"L'héritabilité des capacités cognitives augmente avec l'âge", d:"répliqué sur de nombreuses cohortes ; l'explication par la sélection active de l'environnement fait consensus."},
{t:"verdict", s:"conteste", x:"L'héritabilité est plus faible chez les pauvres", d:"solide dans les échantillons américains, mal répliqué en Europe de l'Ouest ; l'explication par la différence de protection sociale est plausible mais non démontrée."},
{t:"verdict", s:"effondre", x:"Tout est génétique / tout est social", d:"les deux camps traitent une décomposition de variance comme une description de la fabrication d'un individu."},
{t:"key", x:"L'héritabilité monte avec l'âge parce qu'on choisit de plus en plus son milieu, et qu'on choisit un milieu qui nous ressemble. Ce n'est pas la biologie qui se referme, c'est la liberté qui amplifie."}
],

"3.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Howard Gardner propose en 1983 qu'il n'existe pas une intelligence mais plusieurs — linguistique, logico-mathématique, spatiale, musicale, corporelle, interpersonnelle, intrapersonnelle, et plus tard naturaliste. L'idée est généreuse, elle valorise des talents que l'école ignore, et elle s'est imposée en une décennie dans la formation des enseignants du monde entier."},
{t:"p", x:"Elle a aussi une prédiction testable, et une seule, mais elle est décisive : si ces intelligences sont réellement distinctes, les mesures qui les captent doivent être indépendantes les unes des autres. Quelqu'un de fort en musique ne devrait pas être, en moyenne, plus fort en raisonnement verbal."},
{t:"p", x:"C'est exactement ce qu'on mesure, et c'est exactement ce qui est faux. Les épreuves musicales, spatiales, verbales et logiques corrèlent toutes positivement. On retombe sur le manifold positif de la leçon 3.1, qui n'a jamais épargné aucun domaine cognitif testé."},
{t:"h", x:"Le problème plus profond"},
{t:"p", x:"Gardner a refusé de construire des tests psychométriques de ses intelligences, en expliquant que cela trahirait sa théorie. C'est cohérent de sa part, et c'est rédhibitoire pour nous : une théorie qui ne produit aucune mesure ne peut être ni confirmée ni réfutée. Reprends la cinquième question de la leçon 1.7 — qu'est-ce qui réfuterait cette affirmation ? Ici : rien de prévu par l'auteur."},
{t:"p", x:"Et il faut noter ce que la théorie fait vraiment, qui explique son succès : elle rebaptise « intelligences » ce qu'on appelait des talents, des aptitudes et des goûts. Le changement de mot a eu un effet social réel et plutôt heureux dans les salles de classe. Mais renommer n'est pas découvrir."},
{t:"h", x:"Ce qui est juste dans l'intuition pluraliste"},
{t:"p", x:"Il serait malhonnête de s'arrêter là, parce que l'intuition de départ n'est pas absurde. Il existe bel et bien des aptitudes spécifiques qui prédisent des choses au-delà de g — c'est la structure hiérarchique de la leçon 3.1."},
{t:"p", x:"L'exemple le mieux documenté est la capacité spatiale. Des suivis longitudinaux d'adolescents très doués, poursuivis sur plusieurs décennies, montrent qu'à niveau de g et d'aptitude verbale identiques, les meilleurs en spatial s'orientent davantage vers les sciences et l'ingénierie, y déposent plus de brevets et y publient davantage. C'est une aptitude spécifique, réelle, et systématiquement absente des tests d'admission."},
{t:"p", x:"La bonne formulation est donc : il n'y a pas huit intelligences indépendantes, mais il y a une capacité générale et des profils d'aptitudes qui comptent par-dessus. La première moitié de la phrase tue Gardner, la seconde sauve son intuition."},
{t:"h", x:"L'intelligence émotionnelle : deux objets sous un seul nom"},
{t:"p", x:"Même exigence de découpage, sinon la discussion est impossible."},
{t:"tab", head:["", "Version aptitude", "Version trait"], rows:[
  ["Comment on la mesure", "épreuves de performance avec bonnes et mauvaises réponses", "auto-questionnaire : « je comprends les émotions des autres »"],
  ["Ce qu'elle capte", "une capacité à traiter l'information émotionnelle", "essentiellement de la personnalité : stabilité émotionnelle, extraversion, agréabilité"],
  ["Apport au-delà du reste", "modeste, surtout dans les métiers émotionnellement exigeants", "quasi nul une fois la personnalité prise en compte"],
  ["Ce qui en est vendu", "peu de choses", "la quasi-totalité du marché"]
]},
{t:"p", x:"L'affirmation célèbre selon laquelle l'intelligence émotionnelle compterait pour l'essentiel de la réussite, et le quotient intellectuel pour une petite part, vient d'un livre grand public de 1995 et n'a jamais correspondu à un résultat de recherche. Ce qui existe, c'est un petit apport de la version aptitude, dans certains métiers. Ce qui se vend, c'est la version auto-questionnaire, qui mesure surtout l'idée que les gens se font d'eux-mêmes."},
{t:"verdict", s:"effondre", x:"Les intelligences multiples", d:"la prédiction centrale de la théorie — l'indépendance des intelligences — est démentie par les corrélations observées, et l'auteur a refusé de produire les mesures qui permettraient de la tester."},
{t:"verdict", s:"effondre", x:"L'intelligence émotionnelle compte plus que le QI", d:"affirmation d'un essai de vulgarisation, jamais soutenue par les données ; la version mesurée par auto-questionnaire est largement de la personnalité rebaptisée."},
{t:"verdict", s:"etabli", x:"Des aptitudes spécifiques prédisent au-delà de la capacité générale", d:"la capacité spatiale, en particulier, prédit l'orientation et la réussite scientifique à niveau cognitif général égal."},
{t:"key", x:"Face à « il y a plusieurs formes d'intelligence », sépare les deux affirmations qui s'y cachent. Des aptitudes distinctes existent et comptent : vrai. Elles sont indépendantes les unes des autres : faux, et c'est tout le sujet. La théorie populaire ne tient que sur la seconde."}
]

};
