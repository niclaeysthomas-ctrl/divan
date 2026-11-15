/* ═══════════════════════════════════════════════════════════════
   LE COURS · BLOC A — L'outillage
   Module 1 : Lire une étude sans être dupe. Sept leçons.

   Blocs de contenu : h p ex def calc num li tab verdict svg key
   ═══════════════════════════════════════════════════════════════ */

window.CONTENU_A = {

"1.1": [
{t:"ex", titre:"L'exemple d'abord", x:"On interroge cinq mille personnes. On leur demande si elles courent au moins deux fois par semaine, et on leur fait remplir une échelle de bien-être. Résultat : les coureurs sont nettement plus heureux que les non-coureurs. Le titre du lendemain s'écrit tout seul — « courir rend heureux »."},
{t:"p", x:"Ce titre est peut-être vrai. Mais les données qu'on vient de décrire ne permettent pas de le dire, et elles ne le permettront jamais, même avec cinquante mille personnes au lieu de cinq mille. La taille de l'échantillon ne corrige pas ce défaut-là."},
{t:"p", x:"Il y a exactement trois façons d'expliquer le même résultat, et elles sont toutes compatibles avec les chiffres observés."},
{t:"num", items:[
  "Courir rend heureux. C'est la lecture qu'on fait spontanément : la course agit sur l'humeur.",
  "Être heureux fait courir. C'est la lecture inverse, et elle est tout aussi plausible : quelqu'un qui va bien se lève, s'habille et sort ; quelqu'un qui va mal reste couché. On appelle ça la causalité inversée.",
  "Une troisième chose produit les deux. La santé, le revenu, le temps libre, l'âge, le fait d'avoir un travail qui laisse souffler. Chacune de ces variables pousse à la fois à courir et à aller bien. On appelle ça une variable confondante — le troisième larron."
]},
{t:"def", mot:"Variable confondante", x:"Une caractéristique qui influence à la fois la cause supposée et l'effet supposé, et qui crée donc une corrélation entre les deux sans qu'aucune n'agisse sur l'autre. C'est le piège central de toute la recherche non expérimentale."},
{t:"h", x:"Un exemple que tu rencontreras en entretien"},
{t:"ex", titre:"La version finance", x:"Les entreprises dotées d'un comité RSE affichent une rentabilité supérieure à celles qui n'en ont pas. Conclusion de la brochure : la RSE crée de la valeur."},
{t:"p", x:"Les trois lectures sont là aussi. Le comité améliore peut-être la performance. Ou bien une entreprise déjà rentable a les moyens de se payer un comité, ce qui est la causalité inversée. Ou bien la taille et la maturité de l'entreprise produisent les deux à la fois : les grands groupes installés ont plus de marges et plus de comités. Le troisième larron s'appelle ici la taille du bilan, et il explique probablement l'essentiel de l'écart."},
{t:"p", x:"Note au passage que l'erreur ne vient pas d'un chiffre faux. Les chiffres sont bons. C'est la flèche qu'on dessine entre eux qui est inventée."},
{t:"h", x:"Ce qu'est une corrélation, en une phrase"},
{t:"def", mot:"Corrélation (r)", x:"Un nombre entre −1 et +1 qui dit à quel point deux mesures varient ensemble. 0 = aucun lien linéaire. +1 = quand l'une monte, l'autre monte exactement dans la même proportion, sans exception. Le signe donne le sens, la valeur absolue donne la force."},
{t:"p", x:"Pour te donner une échelle concrète : la corrélation entre la taille d'un parent et celle de son enfant adulte est d'environ 0,5. C'est un lien que personne ne conteste, qu'on observe depuis Galton à la fin du XIXᵉ siècle — et pourtant, avec r = 0,5, on voit régulièrement des parents petits avec des enfants grands. Retiens cet ordre de grandeur : en psychologie, un r de 0,3 est déjà considéré comme substantiel, et il laisse énormément de place aux exceptions."},
{t:"h", x:"Ce qui règle le problème : tirer au sort"},
{t:"p", x:"Reprends la course à pied. Au lieu d'observer des gens qui ont choisi leur mode de vie, on recrute deux cents volontaires sédentaires. On tire au sort : cent font un programme de course pendant douze semaines, cent ne font rien de particulier. On mesure le bien-être au début et à la fin."},
{t:"p", x:"Le tirage au sort fait une chose et une seule, mais elle est décisive : il casse le lien entre le groupe d'affectation et tout le reste. Le revenu, l'âge, la santé de départ, la motivation, le fait d'avoir une mère dépressive, et surtout les variables auxquelles personne n'a pensé — tout cela se répartit en moyenne également entre les deux groupes, parce que c'est le hasard qui a distribué, pas les gens eux-mêmes."},
{t:"p", x:"C'est là tout le génie de la randomisation : elle neutralise aussi les variables confondantes inconnues. Aucune technique statistique appliquée après coup ne sait faire ça. On peut « contrôler » le revenu et l'âge dans un modèle, on ne peut pas contrôler ce qu'on n'a pas mesuré."},
{t:"def", mot:"Essai randomisé contrôlé", x:"Une expérience où l'affectation au traitement est décidée par tirage au sort. C'est la seule méthode qui autorise, à elle seule, une conclusion causale."},
{t:"h", x:"Et quand on ne peut pas tirer au sort"},
{t:"p", x:"On ne peut pas randomiser une enfance, un deuil, un licenciement ou une orientation politique. La recherche dispose alors de méthodes plus faibles mais honnêtes, qu'il faut savoir reconnaître dans un résumé d'étude."},
{t:"li", items:[
  "Le suivi longitudinal : mesurer les mêmes personnes à plusieurs années d'intervalle, pour voir au moins qui vient avant quoi. Ça élimine la causalité inversée, pas le troisième larron.",
  "La comparaison intra-individuelle : comparer la même personne à elle-même, les semaines où elle court et celles où elle ne court pas. Toutes les caractéristiques stables de cette personne — son revenu, son enfance, son tempérament — sont automatiquement neutralisées.",
  "Les études de jumeaux : comparer des jumeaux identiques dont l'un fait du sport et l'autre non. Les gènes et le milieu familial sont tenus constants par construction.",
  "L'expérience naturelle : un événement extérieur qui a réparti les gens presque au hasard — une réforme, une loterie, un seuil administratif. C'est ce que les économistes exploitent le plus souvent."
]},
{t:"p", x:"Aucune de ces méthodes n'égale le tirage au sort. Mais quand plusieurs d'entre elles, qui ont des faiblesses différentes, pointent dans la même direction, la conclusion devient raisonnable. C'est la convergence de méthodes imparfaites qui fait la preuve en sciences humaines, pas l'étude unique et parfaite."},
{t:"verdict", s:"effondre", x:"C'est prouvé scientifiquement", d:"une étude isolée ne prouve rien du tout, et une étude observationnelle ne prouve jamais une causalité, quelle que soit sa taille. L'unité de preuve est la réplication indépendante par des méthodes différentes."},
{t:"key", x:"Devant n'importe quelle affirmation de la forme « A cause B », pose-toi une seule question : qui a décidé qui était dans quel groupe ? Si c'est le hasard, tu peux lire la flèche. Si ce sont les gens eux-mêmes, cherche le troisième larron — il est presque toujours là, et il s'appelle souvent l'argent, la santé ou l'âge."}
],

"1.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Une nouvelle méthode de révision est testée sur huit mille lycéens, quatre mille dans chaque groupe, tirés au sort. Les témoins obtiennent 12,0 de moyenne, l'écart-type est de 2,4 points. Le groupe qui utilise la méthode obtient 12,6. L'article annonce : effet hautement significatif, p < 0,000001."},
{t:"p", x:"Tout est vrai dans cette phrase. Et l'effet est, en pratique, presque nul : six dixièmes de point sur vingt. Voyons exactement pourquoi les deux affirmations ne se contredisent pas."},
{t:"h", x:"Ce que « significatif » veut dire, et ce que ça ne veut pas dire"},
{t:"def", mot:"Valeur p", x:"La probabilité d'observer un écart au moins aussi grand que celui mesuré, en supposant qu'il n'existe aucun effet réel. C'est tout. Ce n'est pas la probabilité que l'hypothèse soit vraie, ni la probabilité que le résultat se reproduise."},
{t:"p", x:"Le seuil de 0,05 est une convention, pas une loi de la nature. Fisher l'a proposé comme un repère commode dans les années 1920 et a passé les décennies suivantes à dire qu'il ne fallait pas le prendre pour un verdict."},
{t:"p", x:"Surtout, la valeur p dépend de deux choses : la force de l'effet, et le nombre de personnes mesurées. Faisons tourner le calcul sur nos chiffres."},
{t:"calc", lignes:[
  "Écart observé            = 12,6 − 12,0 = 0,6 point",
  "Erreur type de l'écart   = 2,4 × √(1/4000 + 1/4000) = 2,4 × 0,0224 = 0,054",
  "t                        = 0,6 / 0,054 ≈ 11,2     →  p < 0,000000001",
  "",
  "Même étude, mais avec 50 élèves par groupe :",
  "Erreur type              = 2,4 × √(1/50 + 1/50) = 2,4 × 0,200 = 0,48",
  "t                        = 0,6 / 0,48 ≈ 1,25     →  p ≈ 0,21, « non significatif »"
]},
{t:"p", x:"Même méthode, même effet réel, même écart de 0,6 point. D'un côté un résultat « hautement significatif », de l'autre un résultat « non significatif ». La seule chose qui a changé, c'est le nombre de participants. Ce que mesure p, c'est donc en grande partie le budget de l'étude."},
{t:"h", x:"La question utile : la taille d'effet"},
{t:"def", mot:"Taille d'effet", x:"La mesure de l'ampleur d'un écart, indépendamment du nombre de participants. La plus courante pour comparer deux groupes est le d de Cohen : l'écart entre les deux moyennes, divisé par l'écart-type."},
{t:"calc", lignes:[
  "d = (moyenne A − moyenne B) / écart-type",
  "d = (12,6 − 12,0) / 2,4 = 0,25"
]},
{t:"p", x:"Un d de 0,25 ne dit encore rien à personne. Traduisons-le en gens, ce qui est la seule façon honnête de le présenter."},
{t:"tab", head:["Traduction de d = 0,25", "Valeur"], rows:[
  ["L'élève moyen du groupe « méthode » dépasse…", "60 % des élèves témoins (au lieu de 50 %)"],
  ["Si on tire un élève au hasard dans chaque groupe, celui de la méthode est meilleur…", "57 fois sur 100 (au lieu de 50)"],
  ["Part de la variation des notes expliquée par la méthode", "environ 1,5 %"]
]},
{t:"p", x:"Voilà la vraie nouvelle : la méthode fait passer un tirage de 50-50 à 57-43. Ce n'est pas rien — à l'échelle d'un pays, déplacer toute une distribution de 0,6 point est un résultat de politique publique réel. Mais ça n'a plus aucun rapport avec ce que le mot « hautement significatif » évoque dans la tête du lecteur."},
{t:"h", x:"Les ordres de grandeur à avoir en tête"},
{t:"tab", head:["d de Cohen", "Étiquette conventionnelle", "Ce que ça donne en gens"], rows:[
  ["0,2", "petit", "56 fois sur 100"],
  ["0,5", "moyen", "64 fois sur 100"],
  ["0,8", "grand", "71 fois sur 100"],
  ["1,5", "très grand, rare en psychologie", "86 fois sur 100"]
]},
{t:"p", x:"Cohen lui-même a écrit que ces étiquettes étaient arbitraires et à n'utiliser qu'en dernier recours. Garde surtout l'ordre de grandeur : la plupart des effets réellement établis en psychologie se situent entre 0,2 et 0,5. Quand un contenu te promet un effet « énorme », demande le d. S'il n'est pas donné, c'est rarement un oubli."},
{t:"p", x:"Pour les corrélations, le réflexe équivalent est de mettre le r au carré : c'est la part de variation partagée. Un r de 0,3, qui est un lien respectable en psychologie, correspond à 9 % de la variation. Les 91 % restants sont ailleurs."},
{t:"verdict", s:"etabli", x:"Un résultat peut être parfaitement réel et complètement négligeable", d:"significativité et importance sont deux questions distinctes ; la première dépend du nombre de sujets, la seconde non."},
{t:"key", x:"Devant un résultat, ne demande jamais « est-ce significatif ? » — avec assez de monde, tout l'est. Demande « combien, sur cent ? ». Si personne ne peut répondre, l'effet n'a probablement pas été regardé en face."}
],

"1.3": [
{t:"ex", titre:"L'exemple d'abord", x:"En 2011, trois chercheurs publient un article dans une grande revue de psychologie. Ils y démontrent, données réelles et analyses standard à l'appui, qu'écouter la chanson des Beatles « When I'm Sixty-Four » rajeunit : les participants qui l'ont écoutée sont significativement plus jeunes que les autres. Pas plus jeunes d'apparence — plus jeunes en date de naissance."},
{t:"p", x:"C'était évidemment une démonstration par l'absurde. Simmons, Nelson et Simonsohn voulaient montrer qu'avec les pratiques d'analyse courantes de l'époque, parfaitement légales et publiables, on pouvait établir n'importe quoi. Leur article s'appelle « False-Positive Psychology » et il a déclenché une bonne partie de ce qui a suivi."},
{t:"p", x:"Le point essentiel, et il est contre-intuitif : personne n'a triché. Aucune donnée inventée, aucun chiffre modifié. La fraude existe en recherche, mais elle est rare et elle n'est pas le problème. Le problème est beaucoup plus banal, et il a trois noms."},
{t:"h", x:"1. Le jardin aux sentiers qui bifurquent"},
{t:"p", x:"Une étude ordinaire mesure six variables de résultat, sur trois sous-groupes, à deux moments. Cela fait beaucoup de comparaisons possibles. Le chercheur ne les teste pas toutes consciemment : il regarde, il voit que « chez les femmes, à six mois », ça marche, et il écrit l'article là-dessus. Chaque bifurcation était innocente, prise isolément."},
{t:"p", x:"Or le seuil de 5 % signifie exactement ceci : si aucun effet n'existe, on obtient quand même un résultat « significatif » une fois sur vingt. Faisons tourner l'arithmétique."},
{t:"calc", lignes:[
  "Probabilité de n'avoir AUCUN faux positif sur 1 test  = 0,95",
  "sur 20 tests indépendants                             = 0,95^20 = 0,358",
  "Donc au moins un faux positif                         = 1 − 0,358 = 64 %"
]},
{t:"p", x:"Vingt comparaisons, aucun effet réel, et deux chances sur trois de ressortir avec un résultat publiable. Vingt comparaisons, dans une étude qui mesure six variables sur trois sous-groupes, ce n'est pas une étude bâclée : c'est une étude normale."},
{t:"def", mot:"p-hacking", x:"L'ensemble des décisions d'analyse prises après avoir vu les données, et qui augmentent la probabilité d'obtenir un résultat significatif : ajouter des participants jusqu'à ce que ça passe, retirer des valeurs extrêmes, tester plusieurs variables et ne rapporter que la bonne, changer de méthode statistique."},
{t:"h", x:"2. L'hypothèse écrite après coup"},
{t:"def", mot:"HARKing", x:"Présenter dans l'article, comme hypothèse posée au départ, une explication trouvée après avoir vu les résultats. L'acronyme anglais signifie « formuler son hypothèse une fois les résultats connus »."},
{t:"p", x:"C'est redoutable parce que ça supprime toute trace du problème précédent. Un lecteur qui voit « nous avions prédit que l'effet apparaîtrait chez les femmes » n'a aucun moyen de savoir que onze autres sous-groupes ont été regardés avant. L'article raconte une ligne droite là où le travail réel a été une exploration en éventail."},
{t:"p", x:"Il n'y a aucun mal à explorer. L'exploration est même indispensable. La faute consiste à présenter une exploration comme une confirmation, parce que les deux n'ont pas du tout la même valeur de preuve : l'exploration produit des hypothèses, la confirmation produit des résultats."},
{t:"h", x:"3. Le tiroir des résultats nuls"},
{t:"p", x:"Imagine vingt équipes qui testent, chacune de son côté, le même traitement parfaitement inefficace. Une d'entre elles obtiendra un résultat significatif, par pur hasard — c'est le calcul précédent. Les dix-neuf autres obtiennent un résultat nul."},
{t:"p", x:"Les dix-neuf résultats nuls ne sont pas publiés : les revues n'en veulent pas, et les chercheurs savent qu'ils n'en veulent pas, donc ils ne les soumettent même plus. Le vingtième est publié. La littérature scientifique contient donc un article, et un seul, qui montre que le traitement marche."},
{t:"def", mot:"Biais de publication", x:"La distorsion de la littérature produite par le fait que les résultats positifs ont beaucoup plus de chances d'être publiés que les résultats nuls. Ce n'est pas une faute individuelle, c'est une propriété du système d'édition."},
{t:"p", x:"Ce mécanisme est le plus grave des trois, parce qu'il est invisible à l'échelle de l'article : l'étude publiée est impeccable. C'est la bibliothèque entière qui est fausse."},
{t:"h", x:"Ce qui a été mis en place contre ça"},
{t:"li", items:[
  "Le préenregistrement : on dépose publiquement, avant de collecter, son hypothèse, son nombre de participants et son plan d'analyse. Toute décision prise ensuite se voit.",
  "Le rapport enregistré : la revue accepte ou refuse l'article sur la base du protocole seul, avant de connaître les résultats. C'est la réponse directe au biais de publication, et c'est la réforme la plus efficace.",
  "L'analyse multivers : montrer le résultat sous toutes les combinaisons raisonnables de choix d'analyse, au lieu d'en choisir une et de taire les autres."
]},
{t:"verdict", s:"conteste", x:"Les chercheurs trichent", d:"la fraude délibérée existe mais reste marginale. La littérature fausse est produite en masse par des chercheurs honnêtes soumis à des incitations qui récompensent le résultat positif et nouveau."},
{t:"key", x:"Quand tu lis un résultat surprenant, cherche une seule information : l'étude était-elle préenregistrée ? Si oui, les chiffres valent ce qu'ils disent. Sinon, traite le résultat comme une hypothèse intéressante, pas comme un fait — y compris quand le p est minuscule."}
],

"1.4": [
{t:"ex", titre:"L'exemple d'abord", x:"En 2015, deux cent soixante-dix chercheurs publient le résultat d'un travail collectif : ils ont repris cent études de psychologie parues dans trois revues prestigieuses, et ont refait chaque expérience, avec des échantillons en général plus grands que les originaux, et le plus souvent avec l'aide des auteurs d'origine. Environ un tiers des résultats seulement sont ressortis significatifs. Les tailles d'effet obtenues valaient en moyenne à peu près la moitié des tailles d'effet publiées."},
{t:"p", x:"Ce travail, l'Open Science Collaboration, a mis des chiffres sur un soupçon qui circulait depuis des années. Dans la décennie qui a suivi, plusieurs résultats parmi les plus enseignés de la discipline sont tombés."},
{t:"li", items:[
  "L'amorçage social : lire des mots évoquant la vieillesse ferait ensuite marcher plus lentement. Résultat spectaculaire, cité des milliers de fois, non répliqué.",
  "L'épuisement de la volonté : résister à une tentation épuiserait une ressource et rendrait moins capable de résister à la suivante. Une réplication coordonnée dans plus de vingt laboratoires a trouvé un effet voisin de zéro.",
  "Les postures de pouvoir : deux minutes en posture dominante modifieraient les hormones et la prise de risque. La première autrice de l'étude originale a publiquement déclaré ne plus croire à l'effet et ne plus l'enseigner."
]},
{t:"h", x:"Pourquoi c'est arrivé : la puissance statistique"},
{t:"def", mot:"Puissance statistique", x:"La probabilité qu'une étude détecte un effet qui existe réellement. Elle dépend du nombre de participants et de la taille de l'effet cherché. Une puissance de 80 % est la norme recommandée."},
{t:"p", x:"Pendant des décennies, la puissance réelle des études publiées en psychologie et en neurosciences a plutôt tourné autour de 30 à 50 %. Autrement dit : une étude typique avait environ une chance sur deux de rater l'effet qu'elle cherchait, alors même que cet effet existait."},
{t:"p", x:"On croit généralement que le manque de puissance produit seulement des résultats manqués. C'est faux, et c'est le point le plus important de cette leçon : le manque de puissance produit aussi des résultats faux, et il les gonfle."},
{t:"h", x:"La malédiction du vainqueur"},
{t:"p", x:"Prenons une étude avec cinquante participants par groupe, ce qui était courant. Calculons quelle taille d'effet il faut observer pour franchir le seuil de significativité."},
{t:"calc", lignes:[
  "Erreur type de d, avec 50 par groupe  = √(2/50) = 0,20",
  "Seuil de significativité à 5 %        = 1,96 × 0,20 = 0,39",
  "",
  "Donc : AUCUN résultat publiable depuis cette étude",
  "ne peut afficher un d inférieur à 0,39."
]},
{t:"p", x:"Supposons maintenant que l'effet réel soit de 0,20, ce qui est une valeur typique en psychologie sociale. L'étude ne le détectera qu'au prix d'un hasard favorable — et quand elle le détectera, elle affichera nécessairement au moins 0,39, soit le double de la vérité. Le filtre de la significativité ne laisse passer que les surestimations."},
{t:"def", mot:"Malédiction du vainqueur", x:"Le fait que les résultats qui franchissent le seuil de publication surestiment systématiquement l'effet réel, d'autant plus que l'étude était petite. Le terme vient des enchères, où celui qui remporte le lot est souvent celui qui l'a le plus surévalué."},
{t:"p", x:"Tu reconnais le mécanisme : c'est le même que celui des fonds qui affichent leurs meilleurs millésimes. Le problème n'est pas que les chiffres soient faux, c'est que la sélection de ce qu'on voit est faite sur le critère qui biaise."},
{t:"h", x:"Ce qui a changé depuis"},
{t:"li", items:[
  "Les échantillons ont grossi d'un ordre de grandeur dans les travaux sérieux : on ne publie plus un effet social sur quarante étudiants.",
  "Le préenregistrement et les rapports enregistrés se sont installés dans les meilleures revues.",
  "Les réplications multi-laboratoires sont devenues un genre à part entière : vingt à soixante équipes testent le même protocole, dans plusieurs pays.",
  "Les données et les scripts d'analyse sont de plus en plus souvent publics, donc vérifiables par n'importe qui."
]},
{t:"p", x:"Deux nuances pour finir, et elles comptent autant que le reste. D'abord, la crise n'est pas propre à la psychologie : la biologie du cancer, l'économie expérimentale et la médecine ont connu des audits comparables, avec des résultats du même ordre. Ensuite, si on parle autant de la psychologie, c'est précisément parce qu'elle s'est auditée elle-même, publiquement, la première. C'est à mettre à son crédit, pas à son passif."},
{t:"verdict", s:"etabli", x:"Une partie substantielle de la psychologie d'avant 2012 ne tient pas", d:"mesuré directement par réplication systématique ; le taux de réplication varie selon les sous-domaines, la psychologie sociale étant la plus touchée et la psychologie cognitive la moins."},
{t:"key", x:"Ajoute deux informations à ton évaluation de n'importe quel résultat : sa date et son effectif. Un effet social spectaculaire, trouvé avant 2012 sur quelques dizaines d'étudiants, mérite d'être traité comme une rumeur jusqu'à preuve du contraire — même s'il est dans tous les manuels."}
],

"1.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Une méta-analyse rassemble cinquante études sur un traitement et conclut à un effet moyen de d = 0,60, soit un effet considéré comme moyen-fort. Cinquante études, des milliers de participants : c'est le sommet de la hiérarchie des preuves. Quelques années plus tard, une réplication coordonnée dans vingt laboratoires, préenregistrée, trouve un effet voisin de zéro."},
{t:"p", x:"Ce n'est pas un cas d'école théorique : c'est à peu près ce qui est arrivé à l'épuisement de la volonté. Il faut donc comprendre comment cinquante études peuvent se tromper ensemble, dans le même sens."},
{t:"h", x:"Ce qu'est une méta-analyse"},
{t:"def", mot:"Méta-analyse", x:"Une étude dont les sujets sont d'autres études. On récupère la taille d'effet de chacune, on les moyenne en donnant plus de poids aux plus précises — c'est-à-dire aux plus grandes — et on obtient une estimation globale assortie d'un intervalle."},
{t:"p", x:"C'est un outil remarquable et c'est le bon réflexe : devant une question, chercher la méta-analyse plutôt que l'étude. Mais elle hérite intégralement d'un défaut : elle ne peut moyenner que ce qui a été publié. Si la littérature est biaisée, la méta-analyse est biaisée, et elle l'est avec l'autorité que lui donnent ses cinquante études."},
{t:"h", x:"L'entonnoir : voir le biais à l'œil nu"},
{t:"p", x:"Il existe une façon visuelle de détecter le problème, et elle est assez belle pour qu'on la montre plutôt qu'on la décrive. On place chaque étude sur un graphique : en abscisse sa taille d'effet, en ordonnée sa précision — les grandes études en haut, les petites en bas."},
{t:"p", x:"Si tout va bien, le nuage forme un entonnoir symétrique. Les grandes études, en haut, se serrent autour de la vraie valeur. Les petites, en bas, se dispersent de part et d'autre, mais autant à gauche qu'à droite."},
{t:"svg", src:"<svg viewBox='0 0 620 230' role='img' aria-label='Deux graphiques en entonnoir : symétrique à gauche, amputé en bas à gauche à droite'><g font-family='var(--mono)' font-size='9' fill='var(--faint)'><text x='8' y='14'>PRÉCISION</text><text x='318' y='14'>PRÉCISION</text><text x='120' y='222'>TAILLE D'EFFET</text><text x='430' y='222'>TAILLE D'EFFET</text></g><g stroke='var(--rule)' stroke-width='1'><line x1='30' y1='20' x2='30' y2='200'/><line x1='30' y1='200' x2='280' y2='200'/><line x1='340' y1='20' x2='340' y2='200'/><line x1='340' y1='200' x2='590' y2='200'/></g><g stroke='var(--bleu-line)' stroke-width='1' stroke-dasharray='3 3' fill='none'><path d='M155 28 L 60 190'/><path d='M155 28 L 250 190'/><path d='M465 28 L 370 190'/><path d='M465 28 L 560 190'/></g><g stroke='var(--bleu)' stroke-width='1' stroke-dasharray='2 4'><line x1='155' y1='22' x2='155' y2='200'/></g><g fill='var(--ink)'><circle cx='152' cy='40' r='3.2'/><circle cx='160' cy='52' r='3.2'/><circle cx='143' cy='58' r='3.2'/><circle cx='168' cy='75' r='3.2'/><circle cx='133' cy='82' r='3.2'/><circle cx='176' cy='98' r='3.2'/><circle cx='124' cy='105' r='3.2'/><circle cx='188' cy='125' r='3.2'/><circle cx='112' cy='132' r='3.2'/><circle cx='199' cy='152' r='3.2'/><circle cx='98' cy='158' r='3.2'/><circle cx='214' cy='178' r='3.2'/><circle cx='84' cy='182' r='3.2'/></g><g stroke='var(--bleu)' stroke-width='1' stroke-dasharray='2 4'><line x1='465' y1='22' x2='465' y2='200'/></g><g fill='var(--ink)'><circle cx='462' cy='40' r='3.2'/><circle cx='470' cy='52' r='3.2'/><circle cx='478' cy='75' r='3.2'/><circle cx='486' cy='98' r='3.2'/><circle cx='498' cy='125' r='3.2'/><circle cx='509' cy='152' r='3.2'/><circle cx='524' cy='178' r='3.2'/><circle cx='453' cy='58' r='3.2'/></g><g fill='none' stroke='var(--rose)' stroke-width='1.4' stroke-dasharray='4 3'><circle cx='434' cy='105' r='4'/><circle cx='422' cy='132' r='4'/><circle cx='408' cy='158' r='4'/><circle cx='394' cy='182' r='4'/></g><g font-family='var(--mono)' font-size='9'><text x='200' y='50' fill='var(--faint)'>entonnoir complet</text><text x='462' y='192' fill='var(--rose)'>les études manquantes</text></g></svg>"},
{t:"p", x:"À droite, le bas-gauche de l'entonnoir est vide. Traduction : les petites études qui ont trouvé peu ou pas d'effet n'existent pas dans la littérature. Elles ont pourtant forcément été faites — le hasard seul les impose. Elles sont dans des tiroirs. Les cercles rouges sont les études qui manquent, et une méta-analyse qui moyenne ce qui reste surestime mécaniquement l'effet."},
{t:"p", x:"Il existe des méthodes pour corriger cette asymétrie et estimer l'effet qu'on aurait trouvé si tout avait été publié. Elles sont imparfaites et donnent parfois des résultats divergents entre elles, mais appliquées à plusieurs grands effets célèbres, elles ramènent l'estimation près de zéro. C'est exactement ce qui s'est passé pour la volonté-carburant."},
{t:"h", x:"La courbe des p : une seconde arme"},
{t:"p", x:"Un effet réel produit beaucoup de très petits p — 0,001, 0,004 — et peu de p juste sous le seuil. Une littérature p-hackée produit l'inverse : une accumulation suspecte de p entre 0,04 et 0,05, parce que les chercheurs ont poussé jusqu'à franchir la barre, puis se sont arrêtés."},
{t:"p", x:"Regarder la forme de cette distribution permet de dire si un ensemble d'études contient un effet réel, même sans accéder aux données brutes. Quand tu croises l'expression « courbe des p » ou « p-curve » dans un résumé, c'est de ça qu'il s'agit."},
{t:"h", x:"Les deux autres pièges"},
{t:"li", items:[
  "Entrées pourries, sortie pourrie. Moyenner cinquante études mal faites donne une estimation précise d'une erreur. La qualité des études incluses prime sur leur nombre, et les bonnes méta-analyses la notent explicitement.",
  "L'hétérogénéité. Si les cinquante études mesurent des choses trop différentes, la moyenne ne désigne rien. L'indicateur à chercher s'appelle I² : il dit quelle part de la dispersion des résultats dépasse ce que le hasard d'échantillonnage explique. Au-delà de 75 %, la moyenne globale est à peu près ininterprétable."
]},
{t:"verdict", s:"etabli", x:"Une méta-analyse vaut mieux qu'une étude isolée", d:"à condition de regarder son entonnoir, son hétérogénéité et la qualité des études incluses. Sans ces trois contrôles, c'est une moyenne de la littérature publiée, pas une estimation de la réalité."},
{t:"key", x:"Devant une méta-analyse, pose la question qui tue : qui manque ? Les études absentes sont celles qui n'ont rien trouvé, et elles sont systématiquement du même côté. C'est la seule erreur de ce cours qu'on peut repérer sur un dessin."}
],

"1.6": [
{t:"ex", titre:"L'exemple d'abord", x:"Le jeu de l'ultimatum : on donne cent euros à un joueur, à charge pour lui d'en proposer une part à un second. Si le second accepte, chacun garde sa part. S'il refuse, les deux repartent les mains vides. La théorie économique classique prédit qu'on propose un euro et que l'autre accepte, un euro valant mieux que rien."},
{t:"p", x:"Sur des étudiants occidentaux, ce n'est pas du tout ce qui se passe : les offres tournent autour de 40 à 50 %, et les offres très basses sont refusées, alors même que refuser coûte de l'argent. On en a tiré pendant des années une conclusion sur la nature humaine : l'être humain a un sens de l'équité qui prime sur son intérêt immédiat."},
{t:"p", x:"Puis des anthropologues ont emporté le protocole hors des campus, dans une quinzaine de sociétés à petite échelle. Les résultats se sont dispersés dans tous les sens. Chez les Machiguenga d'Amazonie péruvienne, les offres sont bien plus basses et presque jamais refusées — ce qui ressemble beaucoup à la prédiction économique que les étudiants occidentaux avaient semblé démentir. Dans d'autres sociétés, des offres supérieures à la moitié sont proposées, et parfois refusées, parce qu'accepter un cadeau trop généreux y engage celui qui le reçoit."},
{t:"p", x:"Autrement dit : ce qu'on avait pris pour un trait humain universel était en partie un trait occidental."},
{t:"h", x:"L'acronyme"},
{t:"def", mot:"WEIRD", x:"Western, Educated, Industrialized, Rich, Democratic — occidentaux, éduqués, industrialisés, riches, démocratiques. L'acronyme, proposé par Henrich, Heine et Norenzayan en 2010, désigne la population sur laquelle la psychologie a été très majoritairement construite. Le mot signifie aussi « bizarre » en anglais, et c'est volontaire."},
{t:"p", x:"Les relevés faits sur les grandes revues de psychologie au tournant des années 2000 donnent un ordre de grandeur saisissant : environ 95 % des sujets venaient de pays occidentaux, et autour des deux tiers des seuls États-Unis. À l'intérieur de ces pays, l'essentiel des participants étaient des étudiants de premier cycle, souvent inscrits au cours d'introduction à la psychologie, qui participaient pour valider des crédits."},
{t:"p", x:"Ces sociétés représentent une fraction minuscule de l'humanité, et elles ne sont pas un échantillon neutre : sur beaucoup de dimensions mesurées — individualisme, rapport à l'autorité, raisonnement analytique plutôt que contextuel, perception même — elles se situent régulièrement à un bout de la distribution mondiale, pas au milieu."},
{t:"h", x:"Jusqu'où ça va : même la perception"},
{t:"p", x:"On pourrait croire que la culture affecte les opinions et les valeurs, mais pas les mécanismes de base. L'illusion de Müller-Lyer dit le contraire : deux segments de même longueur, terminés par des flèches orientées vers l'intérieur ou vers l'extérieur, paraissent de tailles différentes. C'est l'illusion d'optique la plus classique des manuels."},
{t:"p", x:"Les comparaisons interculturelles menées dès les années 1960 ont trouvé que des populations de chasseurs-cueilleurs y étaient très peu sensibles, là où les Occidentaux s'y laissent largement prendre. L'explication proposée tient à l'environnement visuel : grandir dans un monde d'angles droits, de pièces rectangulaires et de bâtiments entraîne le système visuel à interpréter certaines configurations comme de la profondeur. Une illusion d'optique peut donc être, en partie, un apprentissage."},
{t:"h", x:"Ce que ça invalide, et ce que ça n'invalide pas"},
{t:"tab", head:["Domaine", "Généralise plutôt bien", "Se généralise mal"], rows:[
  ["Perception et attention", "mécanismes de base, limites de la mémoire de travail", "illusions dépendant de l'environnement bâti"],
  ["Mémoire", "courbe d'oubli, effet de test, espacement", "contenus et stratégies valorisées"],
  ["Émotions", "existence d'états affectifs et de leur régulation", "règles d'expression, découpage des catégories"],
  ["Social, moral, économique", "très peu de choses", "équité, conformité, punition, rapport à l'autorité"]
]},
{t:"p", x:"La règle utile : plus le phénomène est proche de la biologie, mieux il voyage ; plus il est proche des règles de vie commune, moins il voyage. La critique WEIRD ne dit pas que la psychologie est fausse. Elle dit qu'elle a souvent appelé « l'être humain » ce qui était un étudiant américain de dix-neuf ans."},
{t:"p", x:"Et la correction en cours a ses propres angles morts. Les grandes plateformes de recrutement en ligne, qui ont remplacé les étudiants dans beaucoup d'études, apportent des participants plus variés en âge et en revenu — mais sur-représentent les gens qui répondent à des questionnaires pour quelques euros, et qui en ont souvent rempli des centaines."},
{t:"verdict", s:"etabli", x:"La psychologie a généralisé à l'humanité des résultats obtenus sur une population très particulière", d:"documenté par comparaison directe entre sociétés sur les mêmes protocoles."},
{t:"key", x:"Avant de demander « combien ? », demande « sur qui ? ». Si l'affirmation porte sur l'équité, la morale, le rapport à l'autorité ou la façon de se sentir soi-même, et que l'étude a été faite sur des étudiants d'un seul pays, l'affirmation porte sur ces étudiants-là."}
],

"1.7": [
{t:"p", x:"Les six leçons précédentes se ramènent à cinq questions. Posées dans cet ordre, elles trient en deux minutes la quasi-totalité de ce qui circule. Elles ne demandent aucune compétence statistique : seulement de refuser d'avancer tant qu'on n'a pas la réponse."},
{t:"num", items:[
  "Quelqu'un d'autre a-t-il retrouvé le résultat ? Pas « combien d'articles citent l'étude » — combien d'équipes indépendantes ont refait l'expérience et obtenu la même chose. Une étude isolée, même excellente, est une hypothèse.",
  "Combien de participants, et l'étude était-elle préenregistrée ? Ces deux informations se trouvent en général dans le résumé. Trente participants et pas de préenregistrement : traite le résultat comme une piste. Deux mille participants et un protocole déposé : traite-le comme une donnée.",
  "Quelle est la taille d'effet, traduite en gens ? « Significatif » ne répond pas. Tu veux un d, un r, ou mieux : combien de personnes sur cent ça change. Si le chiffre est introuvable, l'absence est elle-même l'information.",
  "Qui a décidé qui était dans quel groupe ? Le hasard, ou les gens eux-mêmes ? C'est toute la leçon 1.1, et c'est la question qui tue le plus d'affirmations à elle seule.",
  "Qu'est-ce qui réfuterait l'affirmation, et que vend celui qui l'affirme ? Une théorie qui explique tout n'explique rien. Et si la réponse à la seconde moitié est « une formation, un livre, un test sous licence », applique les quatre questions précédentes deux fois plus sévèrement."
]},
{t:"h", x:"La grille à l'épreuve, trois fois"},
{t:"ex", titre:"Affirmation 1 — « Chacun a son style d'apprentissage : visuel, auditif, kinesthésique. Enseigner dans le bon style améliore les résultats. »", x:"Question 1 : oui, c'est testé, et beaucoup. Question 4 : le protocole décisif est simple — on tire au sort les élèves entre un enseignement conforme à leur style déclaré et un enseignement contraire. Question 3 : ce test, le seul qui compte, ne trouve pas d'avantage à l'appariement. Question 5 : un marché considérable de formations repose dessus."},
{t:"verdict", s:"effondre", x:"Les styles d'apprentissage", d:"l'affirmation est testable, elle a été testée directement, elle échoue. Les gens ont bien des préférences — mais enseigner selon ces préférences n'améliore pas l'apprentissage."},
{t:"ex", titre:"Affirmation 2 — « La méditation de pleine conscience réduit l'anxiété. »", x:"Question 1 : répliqué par de nombreuses équipes, y compris en essais randomisés avec groupe actif de comparaison. Question 2 : des essais de plusieurs centaines de participants existent, certains préenregistrés. Question 3 : effet réel, d'ampleur modeste, comparable à d'autres interventions actives et plus faible quand le groupe témoin fait lui aussi quelque chose. Question 5 : un marché existe aussi, et il promet beaucoup plus que ce que les essais montrent."},
{t:"verdict", s:"etabli", x:"La méditation réduit l'anxiété", d:"effet réel et répliqué, mais modeste et pas supérieur aux autres interventions actives. L'affirmation tient ; la version commerciale qui en fait une solution générale, non."},
{t:"ex", titre:"Affirmation 3 — « La triade noire prédit la réussite en entreprise. »", x:"Question 4 : qui a décidé du groupe ? Personne — ce sont des études observationnelles sur des dirigeants en poste. Question 1 : les résultats varient énormément selon les études et les mesures. Question 3 : les tailles d'effet rapportées sont faibles, et souvent nulles une fois la personnalité générale prise en compte. Et une variable confondante évidente attend : l'ambition, qui pousse à la fois à postuler et à obtenir le poste."},
{t:"verdict", s:"conteste", x:"La triade noire mène au sommet", d:"des liens faibles et instables, mesurés sur des survivants — on n'étudie pas les narcissiques qui ont échoué. On y reviendra en détail à la leçon 2.4."},
{t:"h", x:"Ce que cette grille ne fait pas"},
{t:"p", x:"Elle ne te rend pas capable de juger la qualité technique d'une analyse, et ce n'est pas l'objectif. Elle te rend capable de trois choses, qui suffisent dans la quasi-totalité des cas : repérer qu'une affirmation causale repose sur des données qui ne peuvent pas la porter, repérer qu'un effet réel est minuscule, et repérer qu'une affirmation n'a jamais été testée du tout."},
{t:"p", x:"Elle a aussi un coût, et il faut l'accepter : appliquée honnêtement, elle oblige à dire « je ne sais pas » beaucoup plus souvent qu'avant. C'est le prix d'entrée, et c'est ce qui sépare le scepticisme du cynisme. Le cynique rejette tout avec la même désinvolture qu'il acceptait tout. Le sceptique garde une échelle : il y a des choses établies, des débats ouverts, des ruines, et des produits."},
{t:"key", x:"Les cinq questions, dans l'ordre : qui d'autre l'a retrouvé — combien de gens et préenregistré ou non — quelle taille d'effet en personnes — qui a décidé des groupes — qu'est-ce qui la réfuterait et qui la vend. Tu peux maintenant passer au bloc B, et contredire tout ce qui y sera écrit."}
]

};
