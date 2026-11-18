/* ═══════════════════════════════════════════════════════════════
   LE COURS · BLOC C — Comment la machine tourne (seconde moitié)
   Module 8 : Le cerveau et les neuromythes (5 leçons)
   Module 9 : Sommeil, corps, substances (4 leçons)
   ═══════════════════════════════════════════════════════════════ */

window.CONTENU_C2 = {

/* ───────────────────────── MODULE 8 ───────────────────────── */

"8.1": [
{t:"ex", titre:"L'exemple d'abord", x:"En 2009, une équipe américaine passe un saumon de l'Atlantique dans un appareil d'IRM fonctionnelle. On lui présente des photographies de personnes en situation sociale et on lui demande de deviner l'émotion ressentie. On analyse les données avec les méthodes standard de l'époque. Un petit groupe de voxels s'allume significativement dans la cavité crânienne. Le saumon était mort, acheté chez le poissonnier."},
{t:"p", x:"Ce n'était évidemment pas une découverte sur les poissons. C'était une démonstration, du même genre que la chanson des Beatles de la leçon 1.3 : montrer qu'avec les pratiques d'analyse courantes, on obtenait des résultats à partir de rien."},
{t:"h", x:"Pourquoi un saumon mort peut penser"},
{t:"p", x:"Un cerveau analysé en IRM fonctionnelle est découpé en petits cubes appelés voxels. Il y en a de l'ordre de cent trente mille. Pour chacun, on fait un test statistique."},
{t:"calc", lignes:[
  "130 000 tests statistiques, un par voxel.",
  "",
  "Seuil p < 0,01 sans correction :  130 000 × 0,01 = 1 300 voxels",
  "Seuil p < 0,001 sans correction : 130 000 × 0,001 =  130 voxels",
  "",
  "→ significatifs par pur hasard, sur un objet sans activité.",
  "   Et 130 voxels voisins forment une belle tache colorée."
]},
{t:"p", x:"C'est exactement le problème des comparaisons multiples de la leçon 1.3, à l'échelle de cent trente mille au lieu de vingt. Les corrections existent depuis longtemps et sont aujourd'hui obligatoires dans les revues sérieuses. Le saumon a servi à ce qu'elles le deviennent."},
{t:"h", x:"Ce que l'appareil mesure réellement"},
{t:"def", mot:"Signal BOLD", x:"L'IRM fonctionnelle ne mesure pas l'activité des neurones. Elle mesure une variation du rapport entre hémoglobine oxygénée et désoxygénée, c'est-à-dire un afflux de sang. C'est une conséquence indirecte de l'activité, décalée de plusieurs secondes, et moyennée sur un volume qui contient plusieurs millions de neurones."},
{t:"p", x:"Trois limites découlent directement de cette définition. La résolution temporelle est mauvaise : la pensée dure des dizaines de millisecondes, le signal met des secondes. La résolution spatiale est grossière : dans un seul voxel, des populations de neurones qui font des choses opposées sont additionnées. Et l'image colorée n'est jamais une photographie : c'est une carte de différences statistiques entre deux conditions, pas une carte d'activité."},
{t:"h", x:"L'erreur de raisonnement la plus fréquente"},
{t:"def", mot:"Inférence inverse", x:"Conclure de l'activation d'une région à l'état mental du sujet. « L'insula s'est allumée, donc il ressentait du dégoût. » Le raisonnement est invalide parce que l'insula s'active aussi pour la douleur, la soif, l'empathie, l'effort et des dizaines d'autres choses."},
{t:"p", x:"L'inférence valide va dans l'autre sens : si je provoque un état mental, je peux observer quelles régions varient. L'inverse — observer une région et en déduire l'état — demande de savoir que cette région ne s'active que pour ça, ce qui n'est à peu près jamais le cas. C'est pourtant la structure de la quasi-totalité des articles de presse sur le cerveau, et de toutes les offres de « neuromarketing »."},
{t:"h", x:"Le problème actuel, qui n'est pas réglé"},
{t:"p", x:"Deux travaux récents ont secoué le domaine. Le premier montre que la fiabilité test-retest des tâches classiques est médiocre : le même individu repassé quelques semaines plus tard donne des mesures peu cohérentes. Le second montre que relier une mesure cérébrale à un trait de comportement demande des milliers de participants pour obtenir une estimation stable — alors que les études typiques en comptaient quelques dizaines."},
{t:"p", x:"Tu reconnais la malédiction du vainqueur de la leçon 1.4. Avec vingt-cinq participants, seules les corrélations énormes franchissent le seuil, donc toute la littérature sur « la région X est liée au trait Y » est faite de surestimations."},
{t:"verdict", s:"etabli", x:"L'IRM fonctionnelle est un outil valide", d:"pour des questions de groupe bien posées, avec correction des comparaisons multiples et des effectifs suffisants."},
{t:"verdict", s:"effondre", x:"On voit la pensée sur l'image", d:"le signal est indirect, lent, moyenné sur des millions de neurones, et l'image représente une différence statistique entre conditions."},
{t:"verdict", s:"effondre", x:"Cette zone s'allume, donc le sujet ressent X", d:"l'inférence inverse est invalide : les régions cérébrales ne sont pas spécialisées au point de permettre ce raisonnement."},
{t:"key", x:"Une image de cerveau coloré n'est pas une preuve, c'est un résultat statistique habillé. Devant un article qui en montre une, pose les trois questions : combien de participants, la correction des comparaisons multiples a-t-elle été faite, et est-ce qu'on conclut d'une région vers un état mental."}
],

"8.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Pour conduire un taxi noir à Londres, il faut réussir une épreuve qui demande de mémoriser des milliers de rues et des dizaines de milliers de points de repère. La préparation dure trois à quatre ans. En 2000, une équipe compare le cerveau de chauffeurs en exercice à celui de témoins : leur hippocampe postérieur, région impliquée dans la navigation spatiale, est plus volumineux."},
{t:"p", x:"Arrête-toi ici et applique la leçon 1.1. Ce résultat ne dit rien sur ce qui cause quoi. Peut-être que conduire un taxi modifie l'hippocampe. Peut-être que les gens à gros hippocampe postérieur réussissent plus souvent l'examen et deviennent chauffeurs. La deuxième lecture est parfaitement plausible."},
{t:"p", x:"La même équipe a donc fait ce qu'il fallait : suivre des candidats avant, pendant et après la préparation. Ceux qui réussissent montrent l'augmentation ; ceux qui échouent et ceux qui n'ont jamais tenté, non. Le sens de la flèche est établi par le suivi longitudinal, pas par la première étude — qui est pourtant celle que tout le monde cite."},
{t:"def", mot:"Plasticité", x:"La capacité du système nerveux à modifier sa structure et ses connexions en fonction de l'expérience. Elle est permanente et banale : elle est le mécanisme même de l'apprentissage."},
{t:"h", x:"Ce qui est solidement établi"},
{t:"li", items:[
  "Les cartes sensorielles se réorganisent avec l'usage. Chez un violoniste, la zone corticale qui représente les doigts de la main gauche est plus étendue, et l'étendue augmente avec le nombre d'années de pratique.",
  "L'apprentissage moteur modifie la matière grise de façon mesurable : apprendre à jongler en trois mois produit des changements visibles en imagerie structurelle.",
  "Après une lésion, des fonctions peuvent être partiellement reprises par des régions voisines, d'autant mieux que le sujet est jeune et que la rééducation est intensive.",
  "Et le point que personne ne cite : ces changements sont réversibles. Chez les jongleurs, l'augmentation régresse quand la pratique cesse. Le cerveau ne capitalise pas, il suit l'usage."
]},
{t:"h", x:"Ce que le mot sert à vendre"},
{t:"p", x:"« Votre cerveau peut se recâbler à tout âge » est devenu l'argument d'autorité universel du développement personnel. Il est vrai au sens trivial — oui, le cerveau change — et il ne soutient à peu près rien de ce qu'on lui fait dire."},
{t:"p", x:"Trois limites qui annulent l'usage commercial du mot."},
{t:"num", items:[
  "La spécificité. Ce qui change est ce qui est entraîné. Trois mois de jonglage changent des régions liées au mouvement et à la vision du mouvement — pas la mémoire, pas l'attention, pas l'humeur. C'est tout le sujet de la leçon 8.5.",
  "L'ampleur. Les variations observées sont de quelques pour cent de volume, détectées en moyennant sur des groupes. Elles n'autorisent aucune promesse de transformation.",
  "Les fenêtres. Certains systèmes ont des périodes critiques réelles. La vision binoculaire, si elle n'est pas établie dans les premières années, ne s'installe plus de la même façon ensuite. L'accent natif d'une langue apprise à trente ans ne s'obtient quasiment jamais. La plasticité est continue, elle n'est pas uniforme."
]},
{t:"h", x:"Une réserve de méthode"},
{t:"p", x:"Il faut ajouter une prudence sur les mesures elles-mêmes. Les changements de matière grise détectés sur quelques semaines sont des variations de quelques pour cent d'un signal d'imagerie, et plusieurs travaux ont montré que ce signal est sensible à des facteurs sans rapport — l'hydratation du sujet, l'heure de la journée, les micromouvements dans l'appareil. Le phénomène de plasticité ne fait aucun doute ; la précision des mesures structurelles rapides, elle, est discutée."},
{t:"verdict", s:"etabli", x:"Le cerveau se modifie avec l'expérience", d:"démontré chez l'animal et chez l'humain, en suivi longitudinal, avec des mécanismes identifiés."},
{t:"verdict", s:"conteste", x:"On peut tout changer à tout âge", d:"les changements sont spécifiques à ce qui est entraîné, modestes, réversibles, et certaines fonctions ont des fenêtres développementales réelles."},
{t:"key", x:"La plasticité explique pourquoi l'entraînement fonctionne, pas pourquoi un produit fonctionnerait. Quand le mot apparaît dans un argumentaire, la question à poser est : plastique pour quoi, de combien, et pendant combien de temps après l'arrêt."}
],

"8.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Dans les années 1960, pour traiter des épilepsies gravissimes, on a sectionné chez quelques patients le corps calleux, le faisceau de fibres qui relie les deux hémisphères. Les patients allaient bien. Puis Sperry et Gazzaniga ont conçu des protocoles pour interroger chaque hémisphère séparément, et ont découvert quelque chose de stupéfiant."},
{t:"p", x:"Le dispositif : le patient fixe un point central. Une image projetée à gauche de ce point n'atteint que l'hémisphère droit ; à droite, que l'hémisphère gauche. Comme le langage est produit par l'hémisphère gauche chez la grande majorité des gens, une image envoyée à droite peut être nommée, et une image envoyée à gauche ne peut pas."},
{t:"p", x:"Le patient à qui l'on présente un objet à gauche affirme n'avoir rien vu. Et pourtant, sa main gauche — commandée par l'hémisphère droit — désigne correctement l'objet parmi d'autres. Une partie de lui sait, et la partie qui parle l'ignore."},
{t:"h", x:"Le résultat qui compte pour tout le cours"},
{t:"p", x:"Gazzaniga a poussé plus loin, et ce qu'il a trouvé devrait figurer dans tous les cours de méthode. On présente à l'hémisphère droit une scène hivernale et à l'hémisphère gauche une patte de poulet. On demande au patient de désigner, des deux mains, une image associée. La main gauche choisit une pelle, la droite choisit un poulet. Puis on demande au patient d'expliquer ses choix."},
{t:"p", x:"Il ne dit pas « je ne sais pas pourquoi j'ai pris la pelle ». Il répond, immédiatement et sans hésitation, qu'il faut une pelle pour nettoyer le poulailler. L'hémisphère gauche, qui parle, n'a pas accès à la vraie raison du geste de la main gauche — alors il en fabrique une, cohérente et convaincante, et il n'a aucune conscience de l'avoir fabriquée."},
{t:"def", mot:"Confabulation", x:"La production d'une explication plausible et sincère pour un comportement dont on ignore la cause réelle. Ce n'est pas un mensonge : celui qui confabule croit à son explication."},
{t:"p", x:"Retiens ce mécanisme, parce qu'il ne concerne pas que des patients opérés. Il suggère que l'explication qu'on donne de ses propres choix est, au moins en partie, une reconstruction après coup. C'est la raison pour laquelle les entretiens du DIVAN demandent des faits et des scènes plutôt que des explications : une personne qui explique pourquoi elle a agi produit souvent une histoire cohérente, et la cohérence n'est pas une garantie de vérité."},
{t:"h", x:"Le saut illégitime"},
{t:"p", x:"De ces travaux sur quelques dizaines de patients au cerveau divisé, la culture populaire a tiré une théorie de la personnalité : il y aurait des gens « cerveau gauche », rationnels, analytiques, mauvais en art ; et des gens « cerveau droit », créatifs, intuitifs, mauvais en maths."},
{t:"p", x:"Ce saut n'a aucune base. Chez un cerveau intact, les deux hémisphères échangent en permanence par le corps calleux — qui compte des centaines de millions de fibres et dont l'intégralité du trafic est précisément ce que l'opération supprimait."},
{t:"p", x:"Et la prédiction a été testée directement : on a cherché, sur plus d'un millier de cerveaux, si certains individus présentaient une dominance globale d'un hémisphère sur l'autre. Des réseaux latéralisés existent bien — le langage à gauche, certains aspects de l'attention spatiale à droite — mais aucun profil individuel de dominance générale n'apparaît. Personne n'est « à droite » ou « à gauche »."},
{t:"verdict", s:"etabli", x:"Certaines fonctions sont latéralisées", d:"le langage est produit par l'hémisphère gauche chez environ 95 % des droitiers ; démontré en clinique et en imagerie."},
{t:"verdict", s:"effondre", x:"Les profils cerveau gauche et cerveau droit", d:"aucune dominance hémisphérique globale individuelle n'apparaît dans les données ; le mythe vient d'une extrapolation à partir de patients au cerveau sectionné."},
{t:"verdict", s:"etabli", x:"La confabulation", d:"démontrée chez les patients au cerveau divisé, et retrouvée sous d'autres formes chez les sujets sains."},
{t:"key", x:"La vraie leçon des cerveaux divisés n'est pas qu'il y a deux personnalités dans ta tête. C'est que la partie de toi qui explique n'a pas toujours accès aux raisons de la partie qui agit — et qu'elle comble le trou sans prévenir."}
],

"8.4": [
{t:"ex", titre:"L'exemple d'abord", x:"L'affirmation est précise, et c'est ce qui la rend intéressante : chacun aurait un style d'apprentissage — visuel, auditif, kinesthésique — et apprendrait mieux si l'enseignement est délivré dans son style. Cette croyance est partagée par environ neuf enseignants sur dix dans les pays où on l'a mesurée."},
{t:"p", x:"Elle a l'immense mérite d'être testable, et le test décisif est simple à décrire. Il porte un nom : l'hypothèse d'appariement."},
{t:"h", x:"Le protocole qui tranche"},
{t:"num", items:[
  "Mesurer le style déclaré de chaque élève avec l'un des questionnaires du commerce.",
  "Tirer au sort — c'est indispensable, voir la leçon 1.1 — qui recevra un enseignement visuel et qui recevra un enseignement auditif, indépendamment de son style déclaré.",
  "Donner à tous le même contenu et le même test final.",
  "Regarder non pas qui a le mieux réussi, mais si l'écart dépend de la correspondance entre style déclaré et format reçu."
]},
{t:"p", x:"C'est le dernier point qui est décisif, et il faut bien le comprendre. Que les visuels réussissent mieux en moyenne ne prouverait rien : peut-être que les visuels sont simplement meilleurs élèves. Ce que la théorie prédit, c'est une interaction — les visuels doivent faire mieux en format visuel qu'en format auditif, et les auditifs l'inverse. Un croisement, pas un décalage."},
{t:"h", x:"Ce qu'on trouve"},
{t:"p", x:"Une revue de référence publiée en 2008 a cherché toutes les études faisant ce test. Le résultat le plus frappant n'était pas leurs conclusions, c'était leur rareté : la quasi-totalité de la littérature sur les styles d'apprentissage ne faisait pas le test décisif. Elle mesurait des préférences, décrivait des typologies, proposait des outils — sans jamais vérifier la seule prédiction qui comptait."},
{t:"p", x:"Et les rares études qui le faisaient correctement ne trouvaient pas l'interaction. Les travaux ultérieurs, y compris sur des étudiants suivis dans leurs révisions réelles, n'ont pas trouvé davantage : étudier conformément à son style déclaré ne prédit pas de meilleurs résultats."},
{t:"h", x:"Ce qui est vrai là-dedans, et qu'il ne faut pas jeter"},
{t:"p", x:"Deux choses résistent, et les confondre avec la théorie est ce qui lui permet de survivre."},
{t:"li", items:[
  "Les préférences sont réelles. Les gens préfèrent sincèrement certains formats, et cette préférence est stable. Elle est simplement sans effet sur ce qu'ils retiennent.",
  "Le format doit correspondre au contenu, pas à la personne. On apprend la géographie avec des cartes, la musique avec du son, l'anatomie avec des images — pour tout le monde. C'est une propriété de la matière, pas de l'élève, et c'est le vrai noyau de bon sens que la théorie s'est approprié."
]},
{t:"h", x:"Pourquoi ça ne meurt pas"},
{t:"p", x:"Parce que la croyance est agréable à tous les étages. Elle valorise l'élève — tu n'es pas mauvais, tu es différent. Elle déculpabilise l'enseignant — l'échec vient d'un format inadapté. Elle flatte l'intuition — on a tous l'impression d'être plutôt visuel ou plutôt auditif. Et elle alimente un marché considérable de questionnaires et de formations."},
{t:"p", x:"Ajoute le coût réel : le temps passé à produire quatre versions d'un même cours est du temps retiré aux méthodes dont l'effet est établi — se tester, espacer, élaborer, vues à la leçon 7.5."},
{t:"verdict", s:"effondre", x:"Les styles d'apprentissage", d:"l'hypothèse d'appariement, seule prédiction testable de la théorie, n'est pas confirmée par les études qui la testent correctement."},
{t:"verdict", s:"etabli", x:"Les préférences de format existent", d:"stables et sincères, mais sans effet mesurable sur ce qui est retenu."},
{t:"key", x:"C'est l'exemple le plus propre du cours d'une théorie réfutable, réfutée, et toujours enseignée. Quand quelqu'un t'affirme être visuel, il dit quelque chose de vrai sur ce qu'il aime, et rien sur la façon dont il apprend."}
],

"8.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu t'entraînes vingt minutes par jour, six semaines, sur un jeu de mémoire de travail. Au bout de six semaines, tu es nettement meilleur à ce jeu. La seule question qui compte est celle-ci : es-tu devenu meilleur à autre chose ?"},
{t:"def", mot:"Transfert proche", x:"L'amélioration s'étend à des tâches très semblables à celle qui a été entraînée. Il est réel, banal, et c'est simplement de l'apprentissage."},
{t:"def", mot:"Transfert lointain", x:"L'amélioration s'étend à des capacités générales — mémoire au quotidien, raisonnement, concentration au travail. C'est ce que vend le marché de l'entraînement cérébral, et c'est ce qui n'a pas été démontré."},
{t:"h", x:"La grande expérience"},
{t:"p", x:"En 2010, une étude menée avec la BBC a recruté plus de onze mille participants, les a répartis au hasard en groupes d'entraînement et a suivi six semaines de pratique. Les participants ont progressé sur les tâches entraînées — nettement. Sur les tâches non entraînées, y compris celles qui mobilisaient des capacités apparentées, aucun transfert."},
{t:"p", x:"Les méta-analyses ultérieures sur l'entraînement de la mémoire de travail arrivent à la même conclusion, avec un détail méthodologique central."},
{t:"h", x:"Le détail qui explique tous les résultats positifs"},
{t:"p", x:"Les études qui trouvent un transfert lointain comparent le plus souvent le groupe entraîné à un groupe qui n'a rien fait. Celles qui le comparent à un groupe actif — qui a fait autre chose d'aussi engageant, d'aussi long, avec autant d'attention de la part des expérimentateurs — ne trouvent plus rien."},
{t:"def", mot:"Groupe contrôle actif", x:"Un groupe témoin qui reçoit une activité comparable en durée, en engagement et en attention, mais sans l'ingrédient supposé actif. Il sert à séparer l'effet du traitement de l'effet d'être pris en charge et de s'attendre à progresser."},
{t:"p", x:"C'est une des grilles les plus réutilisables du cours entier, bien au-delà du jeu cérébral. Devant n'importe quelle intervention — pédagogique, thérapeutique, managériale — demande à quoi le groupe témoin a été occupé. S'il n'a rien fait, l'essai mesure en partie le fait de faire quelque chose."},
{t:"p", x:"Le marché a d'ailleurs fini par être sanctionné : en 2016, le principal éditeur américain de jeux d'entraînement cérébral a accepté de payer une amende pour publicité trompeuse, l'autorité de la concurrence ayant jugé que les promesses faites — retarder le déclin cognitif, améliorer la performance au travail — n'étaient pas soutenues par les données."},
{t:"h", x:"Ce qui a des effets, modestes"},
{t:"li", items:[
  "L'activité physique régulière chez les personnes âgées : effets positifs réels sur la cognition, d'ampleur modeste, et avec les bénéfices collatéraux habituels.",
  "Apprendre quelque chose de réellement nouveau et difficile. Une étude a réparti au hasard des retraités entre apprendre la photographie numérique ou la couture matelassée, participer à des activités sociales, ou rien. Seuls les groupes qui apprenaient une compétence exigeante ont amélioré leur mémoire. Ce n'est pas l'occupation qui compte, c'est la difficulté soutenue.",
  "Un entraînement très ciblé à la vitesse de traitement et au raisonnement, chez les personnes âgées, a montré des effets durables sur des mesures d'autonomie quotidienne — résultat réel et contesté dans son ampleur, que je te donne avec cette réserve."
]},
{t:"p", x:"La conclusion n'est donc pas « rien ne marche ». C'est que ce qui marche ressemble à apprendre une langue, un instrument, un répertoire d'ouvertures — pas à un jeu optimisé pour produire une courbe de progression agréable."},
{t:"verdict", s:"etabli", x:"Le transfert proche", d:"s'entraîner à une tâche améliore cette tâche et ses variantes immédiates. C'est de l'apprentissage ordinaire."},
{t:"verdict", s:"effondre", x:"Le transfert lointain des jeux cérébraux", d:"non démontré sur plus de dix mille participants, et les effets positifs disparaissent face à un groupe contrôle actif."},
{t:"verdict", s:"marketing", x:"Les applications d'entraînement cérébral", d:"promesses de gains généraux non soutenues, et sanctionnées comme publicité trompeuse aux États-Unis en 2016."},
{t:"key", x:"Tu deviens bon à ce que tu fais, et à rien d'autre. Si tu veux une meilleure mémoire de travail pour les échecs, entraîne des positions ; pour la finance, entraîne des calculs. Le détour par un jeu générique ne transfère pas."}
],

/* ───────────────────────── MODULE 9 ───────────────────────── */

"9.1": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux groupes apprennent la même liste. Le premier l'apprend le soir et on l'interroge après une nuit de sommeil. Le second l'apprend le matin et on l'interroge le soir, après le même nombre d'heures passées éveillé. Le groupe qui a dormi rappelle davantage. L'expérience date de 1924, et elle a été refaite sous toutes les formes depuis."},
{t:"p", x:"Le sommeil ne se contente pas de ne pas effacer : il consolide activement. Pendant le sommeil lent profond, les traces acquises dans la journée sont rejouées et stabilisées. On a même pu le manipuler directement — associer un son à un apprentissage, puis rediffuser ce son pendant le sommeil lent, améliore le rappel de ce qui lui était associé."},
{t:"h", x:"Ce que ça implique pour la façon de travailler"},
{t:"p", x:"La nuit qui suit une session d'apprentissage fait partie de la session. Écourter cette nuit pour travailler davantage revient à ajouter du matériel au prix de la consolidation de ce qu'on vient de voir — ce qui est très souvent un mauvais échange. Et la leçon 7.5 donne l'articulation complète : se tester, espacer, dormir."},
{t:"h", x:"L'humeur"},
{t:"p", x:"La privation de sommeil ne rend pas seulement fatigué. En imagerie, après une nuit blanche, l'amygdale réagit beaucoup plus fortement aux images désagréables, et son couplage fonctionnel avec le cortex préfrontal — qui module cette réaction — est réduit. Autrement dit : l'accélérateur émotionnel appuie plus fort et le frein répond moins bien."},
{t:"p", x:"Tu peux l'observer sur toi sans appareil. Après une nuit courte, ce n'est pas seulement que tu te sens mal : les mêmes événements te paraissent plus graves, plus personnels et plus urgents. Le seuil a bougé, pas le monde."},
{t:"p", x:"Le lien avec la dépression va dans les deux sens, et c'est important. L'insomnie n'est pas seulement un symptôme : les études longitudinales montrent qu'elle précède et prédit l'apparition d'épisodes dépressifs, avec un risque de l'ordre du double. C'est l'une des raisons pour lesquelles traiter l'insomnie en tant que telle est devenu une priorité clinique, et pour lesquelles la thérapie cognitive et comportementale de l'insomnie est aujourd'hui le traitement de première intention recommandé plutôt que les somnifères, dont le bénéfice s'épuise et la dépendance non."},
{t:"h", x:"Les huit heures"},
{t:"p", x:"La recommandation standard pour un adulte est de sept à neuf heures. C'est une fourchette de population, pas une prescription individuelle : les besoins varient réellement."},
{t:"p", x:"Deux précisions pour éviter les deux erreurs opposées. D'abord, les vrais petits dormeurs existent : des variants génétiques rares permettent de fonctionner sur cinq ou six heures sans dette. Ils sont rares au point que la probabilité que ce soit ton cas est négligeable, et la plupart des gens qui s'en réclament montrent les déficits habituels quand on les teste. Ensuite, dans l'autre sens, une partie du discours public sur le sommeil a été portée par un ouvrage grand public à très grand succès dont plusieurs affirmations ont fait l'objet d'une recension critique détaillée montrant qu'elles dépassaient les données. Le sommeil compte beaucoup ; il n'est pas nécessaire d'en faire la cause de tout."},
{t:"verdict", s:"etabli", x:"Le sommeil consolide la mémoire", d:"démontré depuis 1924, précisé par les travaux sur le sommeil lent profond, et manipulable expérimentalement."},
{t:"verdict", s:"etabli", x:"La privation de sommeil dégrade la régulation émotionnelle", d:"résultat expérimental avec un mécanisme identifié : hyperréactivité de l'amygdale et découplage préfrontal."},
{t:"verdict", s:"conteste", x:"Il faut huit heures", d:"sept à neuf est une fourchette de population ; la variabilité individuelle est réelle, mais les vrais petits dormeurs sont rarissimes."},
{t:"key", x:"La nuit qui suit l'apprentissage en fait partie, et une nuit courte ne te rend pas seulement fatigué : elle déplace ton seuil de réaction à tout ce qui arrive le lendemain."}
],

"9.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux personnes dorment huit heures chacune. La première s'endort à 23 h et se réveille à 7 h sans réveil. La seconde ne trouve pas le sommeil avant 2 ou 3 h du matin, quoi qu'elle fasse, et se réveillerait naturellement vers 10 ou 11 h. Elles n'ont pas des disciplines différentes : elles ont des horloges internes différentes."},
{t:"def", mot:"Chronotype", x:"La position naturelle de l'horloge circadienne d'une personne : l'heure à laquelle son organisme déclenche le sommeil et l'éveil quand rien ne l'y contraint. Il se distribue continûment, du très matinal au très tardif, avec une majorité au milieu."},
{t:"h", x:"Ce n'est pas un trait de caractère"},
{t:"p", x:"Le chronotype a une composante héritable substantielle, de l'ordre de la moitié de la variance, et les grandes études génétiques ont identifié des centaines de régions du génome associées à cette préférence. Il varie aussi avec l'âge selon une trajectoire régulière : les enfants sont matinaux, le chronotype recule fortement à l'adolescence pour atteindre son point le plus tardif vers vingt ans, puis avance à nouveau avec les décennies."},
{t:"p", x:"Ce recul adolescent est physiologique, et il a une conséquence que plusieurs systèmes scolaires ont fini par traiter : demander à des lycéens d'être attentifs à huit heures du matin revient à leur demander ce qu'on demanderait à un adulte à cinq heures. Les expériences de report de l'heure d'entrée au lycée mesurent un gain réel de durée de sommeil et une amélioration des résultats."},
{t:"def", mot:"Décalage social", x:"L'écart entre l'horaire de sommeil imposé par les obligations et celui que l'organisme choisirait seul. Il se mesure par la différence entre le milieu de la nuit en semaine et le milieu de la nuit les jours libres. Un décalage de deux heures équivaut à vivre en permanence deux fuseaux horaires plus à l'ouest."},
{t:"h", x:"Les corrélats du soir, et le troisième larron"},
{t:"p", x:"Les personnes de chronotype tardif présentent en moyenne plus de symptômes dépressifs, plus de consommation de substances, de moins bons résultats scolaires. Ces associations sont robustes, et elles sont systématiquement présentées comme une tare du couche-tard."},
{t:"p", x:"Applique la leçon 1.1 : le monde est organisé par et pour les matinaux. Les horaires de cours, de bureau et de transports sont fixés sur un chronotype moyen, donc le tardif vit en permanence en dette de sommeil pendant la semaine et en décalage le week-end. Une bonne partie de l'association passe par le décalage social, c'est-à-dire par l'organisation sociale, et pas par le chronotype lui-même."},
{t:"p", x:"Reste la question causale, qui a reçu une réponse sérieuse. Une méthode génétique qui exploite le tirage au sort des variants à la conception — ce qui en fait l'approximation d'un essai randomisé la plus proche disponible — suggère qu'être de chronotype plus matinal réduit effectivement le risque dépressif. Ce n'est pas une démonstration définitive, et les hypothèses de cette méthode sont discutables, mais c'est un argument causal, pas une simple corrélation de plus."},
{t:"h", x:"Ce qui décale réellement l'horloge"},
{t:"p", x:"Le signal dominant est la lumière, et son effet dépend du moment."},
{t:"li", items:[
  "Lumière forte dans l'heure qui suit le réveil : avance l'horloge, donc facilite l'endormissement le soir. C'est le levier principal, et il demande de la constance sur des semaines.",
  "Lumière le soir, et surtout la lumière vive : retarde l'horloge. Pour un tardif qui veut avancer, c'est l'ennemi principal.",
  "Heure de lever constante, y compris le week-end. C'est elle qui tient l'horloge, bien plus que l'heure de coucher.",
  "Les décalages obtenus sont réels et modestes — de l'ordre d'une heure ou deux, pas d'un basculement de chronotype. Un tardif discipliné devient un tardif modéré, pas un matinal."
]},
{t:"p", x:"Pour toi, ça fait deux phrases, et elles ne se contredisent pas. Se lever tard n'est pas un vice moral, et t'en vouloir là-dessus est aussi inutile que la culpabilité de la leçon 5.5. Et en même temps, l'argument causal existe, donc décaler vaut le coup — par la lumière du matin et une heure de lever fixe, pas par la volonté du soir au moment de se coucher."},
{t:"verdict", s:"effondre", x:"Être du soir est un manque de discipline", d:"le chronotype est substantiellement héritable et varie avec l'âge selon une trajectoire régulière."},
{t:"verdict", s:"conteste", x:"Les couche-tard vont plus mal", d:"association robuste, mais une partie passe par le décalage social imposé ; un argument causal existe néanmoins par méthode génétique."},
{t:"key", x:"Le levier n'est pas l'heure du coucher, c'est l'heure du lever et la lumière du matin. Et vise une heure ou deux de décalage, pas une transformation : au-delà, tu mesures ton échec contre un objectif qui n'existe pas."}
],

"9.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu as sûrement croisé l'affirmation : l'exercice physique serait aussi efficace que les antidépresseurs contre la dépression. Elle circule dans les journaux, dans les conférences de bien-être, et parfois dans la bouche de médecins. Regardons d'où elle vient."},
{t:"h", x:"Ce que trouvent les méta-analyses"},
{t:"p", x:"Les revues systématiques trouvent un effet favorable de l'exercice sur les symptômes dépressifs. Mais une revue de référence a fait quelque chose d'exemplaire : elle a calculé l'effet deux fois, une fois sur toutes les études, et une fois en ne gardant que les essais méthodologiquement solides."},
{t:"calc", lignes:[
  "Effet standardisé de l'exercice sur les symptômes dépressifs",
  "",
  "Toutes les études incluses          :  autour de −0,6  (effet modéré)",
  "Essais à faible risque de biais seuls :  autour de −0,2  (effet petit)",
  "",
  "→ l'effet est divisé par trois quand on ne garde",
  "   que les études bien conduites."
]},
{t:"p", x:"Ce seul tableau est une leçon de méthode complète, et il est la raison pour laquelle je te donne ce module après le bloc A plutôt qu'avant. Des travaux plus récents, sur davantage d'essais, retrouvent des effets modérés pour la marche, le jogging, le yoga et la musculation — en signalant eux-mêmes que la majorité des essais inclus présente un risque de biais élevé."},
{t:"h", x:"Pourquoi ce champ est structurellement difficile"},
{t:"num", items:[
  "On ne peut pas aveugler l'exercice. Un participant sait parfaitement s'il court trois fois par semaine. L'attente d'aller mieux fait donc partie du traitement, et on ne peut pas l'en séparer.",
  "Les groupes témoins sont souvent passifs — liste d'attente, rien. Reprends la leçon 8.5 : comparer « faire quelque chose avec un encadrant » à « ne rien faire » mesure en partie le fait d'être pris en charge.",
  "Les critères sont auto-rapportés, par des participants qui savent ce qu'on attend d'eux.",
  "Et en observationnel, la causalité est inversée par construction : le ralentissement et le retrait sont des symptômes de la dépression. Les gens déprimés bougent moins parce qu'ils sont déprimés, au moins autant que l'inverse."
]},
{t:"h", x:"La conclusion raisonnable"},
{t:"p", x:"L'effet est réel. Il est probablement plus petit que les chiffres qui circulent. Et l'exercice garde un avantage que les comparaisons de tailles d'effet ne captent pas : ses effets secondaires vont tous dans le bon sens — sommeil, condition physique, santé cardiovasculaire, mortalité toutes causes. Peu d'interventions peuvent en dire autant, même avec un effet modeste sur le critère visé."},
{t:"p", x:"Dit autrement : la bonne raison de s'y mettre n'est pas qu'il s'agirait d'un antidépresseur gratuit. C'est que le rapport entre ce que ça rapporte et ce que ça coûte est excellent, même en prenant l'estimation basse."},
{t:"p", x:"Et pour toi, précisément : tu sautes tes séances. La leçon 5.6 a donné le levier qui a la plus grosse taille d'effet de tout ce cours, et il ne demande pas de motivation — il demande une phrase écrite à l'avance avec un déclencheur. « Si c'est mardi 18 h, alors je pars courir, sac préparé la veille. » C'est tout, et c'est 68 fois sur 100 contre 50."},
{t:"verdict", s:"etabli", x:"L'exercice réduit les symptômes dépressifs", d:"effet retrouvé dans les essais randomisés, mais dont l'ampleur chute nettement quand on ne retient que les études à faible risque de biais."},
{t:"verdict", s:"conteste", x:"L'exercice vaut un antidépresseur", d:"comparaison fondée sur des tailles d'effet issues de littératures aux biais différents ; l'aveugle impossible gonfle structurellement le premier terme."},
{t:"key", x:"Un effet réel, plus petit qu'annoncé, et avec des effets secondaires tous favorables. C'est suffisant pour le faire, et insuffisant pour en faire un traitement — et la différence entre ces deux phrases est tout ce que ce cours essaie de t'apprendre."}
],

"9.4": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu bois un café et tu te sens plus alerte. Question : la caféine t'a-t-elle rendu plus performant que ton niveau normal, ou t'a-t-elle simplement ramené au niveau d'où le manque t'avait fait descendre ?"},
{t:"h", x:"La caféine, et l'hypothèse du sevrage"},
{t:"p", x:"La réponse n'est pas tranchée, mais elle penche nettement. Chez un consommateur régulier, une bonne partie du gain apparent correspond à la correction d'un sevrage installé pendant la nuit. Les expériences qui comparent des consommateurs réguliers privés de caféine, des consommateurs réguliers servis, et des non-consommateurs, trouvent chez les non-consommateurs un bénéfice plus petit que celui dont les habitués font l'expérience."},
{t:"p", x:"Ce qui ne veut pas dire que la caféine ne fait rien : elle améliore la vigilance en situation de privation de sommeil, et c'est son usage le mieux établi. Ça veut dire que le coup de fouet du matin n'est pas un gain net."},
{t:"p", x:"Le point le plus concret est pharmacocinétique. La demi-vie de la caféine chez l'adulte est d'environ cinq heures, avec une variabilité considérable selon les personnes."},
{t:"calc", lignes:[
  "Une tasse de 100 mg prise à 16 h, demi-vie 5 h :",
  "",
  "  16 h  : 100 mg",
  "  21 h  :  50 mg",
  "   2 h  :  25 mg",
  "   7 h  :  12,5 mg",
  "",
  "→ au moment de t'endormir, la moitié de la dose",
  "   est encore en circulation."
]},
{t:"p", x:"Et son effet sur le sommeil ne se limite pas au délai d'endormissement. Même chez quelqu'un qui s'endort sans difficulté, la caféine du soir réduit la proportion de sommeil lent profond — c'est-à-dire précisément la phase que la leçon 9.1 a identifiée comme celle de la consolidation."},
{t:"h", x:"L'alcool"},
{t:"p", x:"Il accélère l'endormissement, et c'est tout ce qu'il a pour lui. Ensuite, il supprime le sommeil paradoxal en première partie de nuit, provoque un rebond et des réveils en seconde partie, et dégrade l'architecture globale. Dormir après avoir bu n'est pas dormir moins longtemps : c'est dormir moins bien pour la même durée."},
{t:"p", x:"Sur la santé, un renversement récent mérite d'être connu, parce qu'il est méthodologiquement exemplaire. Pendant trente ans, les études observationnelles ont montré une courbe en J : les buveurs modérés semblaient en meilleure santé que les abstinents. Deux problèmes ont été identifiés. D'abord, le groupe des abstinents contient des gens qui ont arrêté parce qu'ils étaient malades — un biais connu sous le nom de l'ancien buveur malade. Ensuite, les analyses fondées sur des variants génétiques influençant la tolérance à l'alcool, qui approchent une répartition aléatoire, ne retrouvent pas l'effet protecteur. Plusieurs autorités sanitaires ont révisé leurs recommandations à la baisse en conséquence."},
{t:"h", x:"Le cannabis"},
{t:"p", x:"Trois choses à distinguer, et les confondre rend toute discussion impossible."},
{t:"li", items:[
  "Les effets aigus sont nets et peu contestés : dégradation de la mémoire de travail, de l'encodage de nouveaux souvenirs, de l'attention soutenue et du temps de réaction, pendant plusieurs heures.",
  "Les effets résiduels chez l'adulte sont beaucoup plus faibles qu'on ne le croit. Une méta-analyse a montré que les différences de performance cognitive deviennent négligeables après environ un mois d'abstinence. Le déficit mesuré chez les consommateurs actifs est donc largement un effet d'intoxication résiduelle et de sevrage, pas une lésion.",
  "Le risque psychotique est l'enjeu sérieux. L'association est forte, dose-dépendante, et nettement plus marquée pour les produits à haute teneur en THC. La part causale reste débattue — la vulnérabilité préexistante joue aussi — mais les arguments convergent, et le risque porte surtout sur les usages précoces et réguliers à l'adolescence, pendant une période de maturation cérébrale."
]},
{t:"p", x:"Je m'arrête à la description : ce cours ne donne pas de conseil médical, et les arbitrages personnels ne relèvent pas de lui."},
{t:"verdict", s:"conteste", x:"Le café rend plus performant", d:"chez le consommateur régulier, une part importante du gain apparent corrige un sevrage ; l'effet net est plus petit que l'effet ressenti."},
{t:"verdict", s:"effondre", x:"L'alcool aide à dormir", d:"endormissement plus rapide, architecture du sommeil nettement dégradée sur la nuit entière."},
{t:"verdict", s:"effondre", x:"Un verre par jour protège le cœur", d:"la courbe en J s'explique largement par l'inclusion d'anciens buveurs malades parmi les abstinents, et les analyses génétiques ne retrouvent pas l'effet protecteur."},
{t:"verdict", s:"conteste", x:"Le cannabis abîme durablement la mémoire", d:"les différences deviennent négligeables après environ un mois d'abstinence chez l'adulte ; l'enjeu documenté est ailleurs, du côté du risque psychotique et de l'usage adolescent."},
{t:"key", x:"Pour les trois substances, la même question tranche : compares-tu à un vrai niveau de base, ou à un état de manque ? Le café répare un sevrage, l'alcool troque l'endormissement contre la nuit, et le cannabis mesuré chez des consommateurs actifs mesure de l'intoxication, pas une séquelle."}
]

};
