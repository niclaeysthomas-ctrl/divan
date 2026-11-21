/* ═══════════════════════════════════════════════════════════════
   LE COURS · les examens
   Cinq questions par module. Trois types, délibérément :
     rappel  — question ouverte, on écrit, on révèle, on s'auto-évalue
     verdict — une affirmation, on classe : établi/contesté/effondré/marketing
     qcm     — reconnaissance ; le moins exigeant, donc le moins fréquent
   m = module · l = leçon d'où vient la réponse
   ═══════════════════════════════════════════════════════════════ */

window.EXAMENS = [

/* ── Module 1 ── */
{m:"1", l:"1.1", t:"rappel", q:"« Les gens qui courent sont plus heureux. » Donne les trois lectures possibles de ce résultat.",
 r:"1) Courir rend heureux. 2) Être heureux fait courir — causalité inversée. 3) Une troisième variable produit les deux : santé, revenu, temps libre, âge. C'est la variable confondante, le troisième larron."},
{m:"1", l:"1.2", t:"rappel", q:"Une étude annonce p < 0,001 sur huit mille participants. Que sais-tu de l'importance de l'effet ?",
 r:"Rien. La valeur p dépend à la fois de la taille de l'effet et du nombre de participants : avec assez de monde, un effet minuscule devient significatif. Il faut demander la taille d'effet, traduite en personnes."},
{m:"1", l:"1.3", t:"qcm", q:"Vingt tests indépendants au seuil de 5 %, sur des données où aucun effet n'existe. Probabilité d'obtenir au moins un résultat significatif ?",
 o:["5 %", "20 %", "64 %", "95 %"], c:2, r:"1 − 0,95²⁰ = 1 − 0,358 = 64 %. Deux chances sur trois de ressortir avec un résultat publiable à partir de rien."},
{m:"1", l:"1.4", t:"rappel", q:"Avec cinquante participants par groupe, quel est le plus petit d observable qui franchisse le seuil de significativité — et qu'est-ce que ça implique ?",
 r:"Erreur type de d = √(2/50) = 0,20 ; seuil = 1,96 × 0,20 ≈ 0,39. Donc si l'effet réel vaut 0,20, aucune publication issue de cette étude ne peut l'afficher en dessous de 0,39 : le filtre ne laisse passer que les surestimations. C'est la malédiction du vainqueur."},
{m:"1", l:"1.5", t:"verdict", q:"Une méta-analyse vaut mieux qu'une étude isolée.", s:"etabli",
 r:"Établi — à condition de regarder l'entonnoir, l'hétérogénéité et la qualité des études incluses. Sans ces trois contrôles, c'est une moyenne de la littérature publiée, pas une estimation de la réalité."},

/* ── Module 2 ── */
{m:"2", l:"2.1", t:"verdict", q:"Il existe des types de personnalité.", s:"effondre",
 r:"Effondré. Les distributions sont unimodales et continues : il n'y a pas de creux entre deux populations. Dire « je suis introverti » à 40 sur 100, c'est dire « je suis petit » à 1,74 m."},
{m:"2", l:"2.2", t:"rappel", q:"La conscienciosité prédit la performance au travail à r ≈ 0,2. Traduis ce chiffre en personnes.",
 r:"0,5 + arcsin(0,2)/π = 0,564, soit 56 fois sur 100. Prendre le plus consciencieux de deux candidats te donne raison 56 fois sur 100 au lieu de 50. Utile sur mille recrutements, muet sur un seul."},
{m:"2", l:"2.3", t:"rappel", q:"Quelle dimension HEXACO manque au Big Five, et que prédit-elle mieux que lui ?",
 r:"L'honnêteté-humilité : sincérité, équité, modestie, refus d'exploiter autrui même sans risque. Elle prédit mieux que n'importe lequel des cinq facteurs les comportements contre-productifs au travail, la tricherie et l'exploitation."},
{m:"2", l:"2.4", t:"verdict", q:"Le pervers narcissique.", s:"marketing",
 r:"Marketing. Expression issue d'un essai clinique français de la fin des années 1990, absente des classifications internationales et sans instrument validé. Elle décrit une expérience de victime — souvent réelle et grave — pas une catégorie de personnalité établie."},
{m:"2", l:"2.5", t:"qcm", q:"Baisser d'un demi-écart-type en névrosisme fait passer du 50ᵉ centile au…",
 o:["55ᵉ", "69ᵉ", "84ᵉ", "95ᵉ"], c:1, r:"Φ(0,5) = 0,691, donc le 69ᵉ centile. Pas une métamorphose — la différence entre ruminer deux heures après une réunion tendue et ruminer vingt minutes."},

/* ── Module 3 ── */
{m:"3", l:"3.1", t:"rappel", q:"Qu'est-ce que le manifold positif, et quelles sont les deux interprétations rivales ?",
 r:"Toutes les épreuves cognitives corrèlent positivement entre elles, quelles qu'elles soient. Interprétation 1 : il existe une capacité générale, g. Interprétation 2 : des processus distincts s'entraident au cours du développement, et tout finit par corréler sans qu'aucun facteur général n'ait jamais existé. Les deux prédisent les mêmes données."},
{m:"3", l:"3.2", t:"rappel", q:"L'aptitude cognitive prédit la performance au travail à r ≈ 0,3. Combien de fois sur cent, et quelle part de variance ?",
 r:"Environ 60 fois sur 100 (0,5 + arcsin(0,3)/π = 0,597), et 9 % de la variance. Les 91 % restants sont ailleurs : conscienciosité, réseau, santé, hasard des rencontres, conjoncture."},
{m:"3", l:"3.3", t:"qcm", q:"Au cours du XXᵉ siècle, les gains de l'effet Flynn ont été les plus forts sur…",
 o:["le vocabulaire", "l'arithmétique", "les matrices abstraites", "les connaissances générales"], c:2,
 r:"Les matrices abstraites et les analogies. Ce qui a augmenté n'est pas la puissance de calcul mais l'habitude de manier l'abstraction — le vocabulaire et l'arithmétique ont peu bougé."},
{m:"3", l:"3.4", t:"verdict", q:"L'héritabilité des capacités cognitives augmente avec l'âge.", s:"etabli",
 r:"Établi, et contre-intuitif. L'explication : plus on choisit son environnement, plus on choisit un environnement qui ressemble à ses propres penchants. Ce n'est pas la biologie qui se referme, c'est la liberté qui amplifie."},
{m:"3", l:"3.5", t:"verdict", q:"La théorie des intelligences multiples.", s:"effondre",
 r:"Effondré. Sa prédiction centrale — l'indépendance des intelligences — est démentie par les corrélations observées, et son auteur a refusé de produire les mesures qui permettraient de la tester."},

/* ── Module 4 ── */
{m:"4", l:"4.1", t:"rappel", q:"Quelle prédiction du camp des émotions de base n'est pas vérifiée par les données ?",
 r:"Qu'une signature propre — physiologique ou cérébrale — corresponde à chaque émotion. Les méta-analyses ne trouvent pas de correspondance un pour un : les profils se recouvrent, et aucune région ne s'active spécifiquement pour une émotion donnée."},
{m:"4", l:"4.2", t:"rappel", q:"Pourquoi le choix forcé gonfle-t-il les taux de reconnaissance des expressions faciales ?",
 r:"Proposer six mots transforme la lecture en élimination : il suffit que le mot soit le moins mauvais des six. En réponse libre, les taux d'accord s'effondrent et les gens décrivent une situation plutôt qu'une émotion."},
{m:"4", l:"4.3", t:"qcm", q:"La suppression expressive — ne rien montrer d'une émotion déjà là —…",
 o:["réduit le ressenti intérieur", "n'a aucun effet mesurable", "augmente l'activation physiologique et dégrade la mémoire de l'épisode", "améliore la qualité des échanges"], c:2,
 r:"Elle ne réduit pas le ressenti, augmente l'activation sympathique, dégrade la mémoire de ce qui s'est dit, et fait monter la pression artérielle de l'interlocuteur."},
{m:"4", l:"4.4", t:"verdict", q:"Tenir un journal change la vie.", s:"conteste",
 r:"Contesté. L'écriture expressive produit des effets réels mais petits, nettement plus petits que dans les premières études — biais de publication, leçon 1.5."},
{m:"4", l:"4.5", t:"rappel", q:"Parmi les trois dimensions de l'intéroception, laquelle corrèle le moins avec l'exactitude réelle ?",
 r:"La sensibilité déclarée — la confiance qu'on a dans sa propre lecture du corps. Les gens qui se croient très à l'écoute d'eux-mêmes ne sont en général pas meilleurs au test de détection des battements cardiaques."},

/* ── Module 5 ── */
{m:"5", l:"5.1", t:"rappel", q:"Quelle est la phrase intérieure de la régulation introjectée, et pourquoi pose-t-elle problème ?",
 r:"« Je devrais, sinon je m'en voudrai. » L'obligation vient de l'extérieur mais a été avalée : c'est soi qui se surveille. Elle produit du travail réel, d'où la confusion avec la discipline — et elle s'accompagne de plus d'anxiété et de plus d'abandons que la régulation identifiée (« ça me sert à »)."},
{m:"5", l:"5.2", t:"rappel", q:"Dans quelles conditions précises une récompense détruit-elle la motivation spontanée ?",
 r:"Récompense matérielle, annoncée à l'avance, conditionnée à la simple exécution, sur une activité déjà intéressante. Un compliment précis, une récompense inattendue, ou une récompense sur une tâche sans intérêt intrinsèque ne produisent pas cet effet."},
{m:"5", l:"5.3", t:"verdict", q:"La volonté est un muscle qui s'épuise.", s:"effondre",
 r:"Effondré. Réplications multi-laboratoires préenregistrées à effet nul, et corrections de biais de publication ramenant la méta-analyse près de zéro. La version glucose était par ailleurs incompatible avec la consommation cérébrale réelle."},
{m:"5", l:"5.4", t:"qcm", q:"Temps médian mesuré pour qu'un nouveau comportement atteigne son plateau d'automaticité :",
 o:["21 jours", "40 jours", "66 jours", "120 jours"], c:2,
 r:"66 jours, avec une étendue de 18 à 254 selon le comportement. Les 21 jours viennent d'un livre de 1960 d'un chirurgien esthétique, qui parlait du temps d'adaptation à un nouveau visage."},
{m:"5", l:"5.5", t:"rappel", q:"Pourquoi se traiter de paresseux après une journée perdue aggrave-t-il la procrastination ?",
 r:"La procrastination est une régulation d'émotion : l'évitement soulage, donc se renforce. S'en vouloir ajoute une émotion négative au dossier « cette tâche », donc l'évitement soulagera davantage demain. Les étudiants qui se sont pardonné leur retard ont procrastiné moins au tour suivant."},

/* ── Module 6 ── */
{m:"6", l:"6.1", t:"rappel", q:"Une batte et une balle coûtent 1,10 € ensemble. La batte coûte 1,00 € de plus que la balle. Combien coûte la balle ?",
 r:"0,05 €. Si x est le prix de la balle : x + (x + 1,00) = 1,10, donc 2x = 0,10, donc x = 0,05. Batte à 1,05, écart de 1,00, total 1,10. La réponse intuitive — 10 centimes — donne un total de 1,20."},
{m:"6", l:"6.2", t:"verdict", q:"L'ancrage.", s:"etabli",
 r:"Établi. Cinquante ans de réplications, y compris dans des projets multi-laboratoires préenregistrés, avec des effets larges. C'est la structure de la plupart des négociations : la première offre déplace l'issue."},
{m:"6", l:"6.3", t:"rappel", q:"Qu'a montré la seconde étude de Doyen sur l'amorçage social, et pourquoi est-ce décisif ?",
 r:"Elle a manipulé non les participants mais les expérimentateurs : à certains on annonçait que les sujets marcheraient lentement, aux autres l'inverse. L'effet est réapparu — et il suivait la croyance de l'expérimentateur. L'effet était dans le chronomètre."},
{m:"6", l:"6.4", t:"verdict", q:"Une perte pèse deux fois plus lourd qu'un gain de même taille.", s:"conteste",
 r:"Contesté. L'asymétrie existe pour des choix risqués à enjeux réels, mais le coefficient varie et l'explication a été surgénéralisée : beaucoup de résultats attribués à l'aversion à la perte s'expliquent aussi bien par l'inertie."},
{m:"6", l:"6.5", t:"qcm", q:"Comparés à la littérature académique publiée, les effets mesurés dans le registre complet des essais des unités comportementales publiques sont de l'ordre de…",
 o:["le même", "le double", "un sixième", "exactement zéro"], c:2,
 r:"Environ un sixième — de l'ordre de 1,4 point contre 8 à 9 points. L'écart ne vient pas de nudges moins bons : il vient du tiroir des résultats nuls."},

/* ── Module 7 ── */
{m:"7", l:"7.1", t:"rappel", q:"Pourquoi la vivacité d'un souvenir ne garantit-elle pas son exactitude ?",
 r:"Les souvenirs-flash, recueillis au lendemain d'un événement puis redemandés des années plus tard, perdent en exactitude comme n'importe quel souvenir — tandis que la confiance reste très élevée. Confrontés à leur propre récit écrit, les gens préfèrent croire leur souvenir actuel."},
{m:"7", l:"7.2", t:"qcm", q:"Dans l'étude « perdu dans le centre commercial », quelle proportion de participants finit par se souvenir de l'épisode inventé ?",
 o:["environ 2 %", "environ 25 %", "environ 70 %", "plus de 90 %"], c:1,
 r:"Environ un quart — et ils l'enrichissent de détails que personne ne leur a fournis. Avec une photographie truquée, la proportion monte à près d'une personne sur deux."},
{m:"7", l:"7.3", t:"rappel", q:"Quand la confiance d'un témoin oculaire est-elle informative, et quand cesse-t-elle de l'être ?",
 r:"Lors d'une toute première identification menée proprement, elle est très informative. Elle cesse de l'être dès qu'elle est contaminée : policier qui confirme, identifications répétées, mois écoulés jusqu'au procès. Au procès, un témoin est presque toujours certain, et cette certitude ne vaut plus rien."},
{m:"7", l:"7.4", t:"verdict", q:"Les techniques de récupération de souvenirs — hypnose, imagerie guidée, entretien insistant — augmentent la confiance sans augmenter l'exactitude.", s:"etabli",
 r:"Établi, et c'est l'un des rares points sur lesquels les deux camps de la « guerre des mémoires » s'accordent."},
{m:"7", l:"7.5", t:"rappel", q:"Pourquoi relire donne-t-il l'impression de marcher alors que ça ne marche pas ?",
 r:"L'illusion de fluence : un texte relu devient facile à traiter, et cette aisance est confondue avec de la maîtrise. Les méthodes efficaces — se tester, espacer — donnent l'impression inverse, parce qu'elles sont pleines d'échecs de rappel."},

/* ── Module 8 ── */
{m:"8", l:"8.1", t:"rappel", q:"Pourquoi un saumon mort peut-il présenter des voxels « significatifs » en IRM fonctionnelle ?",
 r:"Un cerveau analysé est découpé en environ 130 000 voxels, et on fait un test statistique par voxel. Au seuil p < 0,001 sans correction, on attend 130 faux positifs — assez pour former une tache colorée, sur un objet sans aucune activité."},
{m:"8", l:"8.2", t:"rappel", q:"Quelle étude sur les chauffeurs de taxi londoniens établit le sens de la flèche, et pourquoi pas l'autre ?",
 r:"Le suivi longitudinal de candidats avant, pendant et après la préparation : seuls ceux qui réussissent montrent l'augmentation. L'étude transversale de 2000 ne pouvait pas distinguer « conduire modifie l'hippocampe » de « les gros hippocampes réussissent l'examen » — et c'est pourtant celle qu'on cite."},
{m:"8", l:"8.3", t:"qcm", q:"Dans l'expérience de la pelle et du poulet chez un patient au cerveau divisé, l'hémisphère gauche…",
 o:["reconnaît qu'il ignore la raison du geste", "fabrique immédiatement une explication plausible et y croit", "reste muet", "désigne la main gauche comme responsable"], c:1,
 r:"Il répond sans hésiter qu'il faut une pelle pour nettoyer le poulailler. C'est la confabulation : la partie qui explique n'a pas accès aux raisons de la partie qui agit, et comble le trou sans le savoir."},
{m:"8", l:"8.4", t:"verdict", q:"Les styles d'apprentissage.", s:"effondre",
 r:"Effondré. L'hypothèse d'appariement — enseigner dans le style déclaré améliore l'apprentissage — est la seule prédiction testable de la théorie, et les études qui la testent correctement ne la retrouvent pas."},
{m:"8", l:"8.5", t:"rappel", q:"Qu'est-ce qu'un groupe contrôle actif, et pourquoi change-t-il les conclusions ?",
 r:"Un groupe témoin occupé de façon comparable — même durée, même engagement, même attention — mais sans l'ingrédient supposé actif. Il sépare l'effet du traitement de l'effet d'être pris en charge et de s'attendre à progresser. Face à lui, le transfert lointain des jeux cérébraux disparaît."},

/* ── Module 9 ── */
{m:"9", l:"9.1", t:"verdict", q:"La privation de sommeil dégrade la régulation émotionnelle.", s:"etabli",
 r:"Établi, avec un mécanisme identifié : amygdale hyperréactive aux stimuli désagréables et couplage réduit avec le cortex préfrontal. L'accélérateur appuie plus fort, le frein répond moins bien."},
{m:"9", l:"9.2", t:"rappel", q:"Quel est le levier principal pour avancer son horloge interne, et lequel n'en est pas un ?",
 r:"L'heure de lever, fixe, et la lumière forte dans l'heure qui suit. Ce n'est pas l'heure du coucher : décider de se coucher plus tôt ne décale pas l'horloge. Et vise une à deux heures de décalage, pas un changement de chronotype."},
{m:"9", l:"9.3", t:"rappel", q:"Pourquoi l'effet de l'exercice sur la dépression chute-t-il quand on ne garde que les essais solides ?",
 r:"De l'ordre de −0,6 toutes études confondues à −0,2 pour les essais à faible risque de biais. Trois raisons : l'aveugle est impossible, les témoins sont souvent passifs, et les critères sont auto-rapportés par des gens qui savent ce qu'on attend d'eux."},
{m:"9", l:"9.4", t:"qcm", q:"Une tasse de 100 mg de caféine prise à 16 h, demi-vie de 5 h. Combien en reste-t-il à 2 h du matin ?",
 o:["rien", "12,5 mg", "25 mg", "50 mg"], c:2,
 r:"25 mg. 100 à 16 h, 50 à 21 h, 25 à 2 h. Et même chez quelqu'un qui s'endort sans difficulté, la caféine réduit la proportion de sommeil lent profond — la phase de consolidation."},
{m:"9", l:"9.4", t:"verdict", q:"Un verre par jour protège le cœur.", s:"effondre",
 r:"Effondré. La courbe en J s'explique largement par l'inclusion d'anciens buveurs malades parmi les abstinents, et les analyses fondées sur des variants génétiques ne retrouvent pas l'effet protecteur."},

/* ── Module 10 ── */
{m:"10", l:"10.1", t:"qcm", q:"Chez Asch, quelle proportion des réponses données sur l'ensemble des essais critiques est conforme à la majorité fausse ?",
 o:["environ 5 %", "environ 37 %", "environ 65 %", "environ 75 %"], c:1,
 r:"Environ 37 %. Les 75 % qu'on cite partout sont la proportion de participants qui cèdent au moins une fois. Dans près des deux tiers des occasions, les gens ont dit la vérité contre l'unanimité."},
{m:"10", l:"10.2", t:"rappel", q:"Quelle relance de Milgram produit le plus d'arrêts, et qu'est-ce que ça change à l'interprétation ?",
 r:"« Vous n'avez pas le choix, vous devez continuer » — elle fait arrêter presque systématiquement. La plus efficace est « l'expérience exige que vous continuiez ». Ce n'est donc pas de la soumission aveugle : les gens suivent quand on invoque un projet légitime, et se cabrent devant l'ordre pur."},
{m:"10", l:"10.3", t:"verdict", q:"L'expérience de la prison de Stanford.", s:"effondre",
 r:"Effondré. Pas d'hypothèse, pas de groupe témoin, gardiens instruits sur le comportement attendu, détresse au moins partiellement simulée. Ce n'est pas une expérience ratée, c'est une mise en scène — et l'éthique interdisait de la répliquer, donc de la réfuter."},
{m:"10", l:"10.4", t:"rappel", q:"Comment concilier l'effet spectateur du laboratoire et les vidéos de conflits de rue ?",
 r:"Deux niveaux. Individuel : la probabilité que ce soit toi qui agisses baisse quand il y a du monde — la diffusion de responsabilité est réelle. Groupe : la probabilité que quelqu'un agisse monte, et l'analyse de conflits filmés trouve une intervention dans environ neuf cas sur dix."},
{m:"10", l:"10.5", t:"rappel", q:"Pourquoi annoncer à un foyer qu'il consomme moins d'énergie que la moyenne de son quartier peut-il faire monter sa consommation ?",
 r:"C'est une norme descriptive : il apprend qu'il a de la marge et se réaligne vers le haut. La correction consiste à ajouter un signe d'approbation — un simple smiley — pour transformer l'information en norme approuvée."},

/* ── Module 11 ── */
{m:"11", l:"11.1", t:"verdict", q:"Les quatre types d'attachement : sécure, préoccupé, détaché, craintif.", s:"effondre",
 r:"Effondré comme catégories. Les analyses de distribution ne trouvent pas de groupes séparés : ce sont des régions continues d'un plan à deux axes, anxiété et évitement. Même erreur qu'avec les types de personnalité."},
{m:"11", l:"11.2", t:"rappel", q:"Pourquoi le « 90 % de prédiction du divorce » ne prédit-il rien ?",
 r:"Surajustement : le modèle a été ajusté sur l'échantillon dont on connaissait déjà l'issue. Appliqué sans retouche à de nouveaux couples, sa précision s'effondre. C'était une description, pas une prédiction — même défaut qu'un modèle de scoring jamais testé hors échantillon."},
{m:"11", l:"11.3", t:"qcm", q:"Les interventions les plus efficaces contre la solitude ciblent en priorité…",
 o:["le nombre d'occasions de contact", "les compétences sociales", "les pensées sociales inadaptées", "le soutien disponible"], c:2,
 r:"Les pensées sociales inadaptées — anticipation du rejet, lecture hostile d'un silence. Augmenter les occasions de contact arrive en dernier, alors que c'est toujours la première chose proposée."},
{m:"11", l:"11.4", t:"rappel", q:"Quelle réaction à une bonne nouvelle est la plus coûteuse pour un lien, et pourquoi trompe-t-elle ?",
 r:"La réaction active et destructive : souligner aussitôt les risques et les inconvénients. Elle se présente comme du réalisme protecteur et de la bienveillance ; mesurée, c'est l'une des réponses les plus coûteuses."},
{m:"11", l:"11.4", t:"verdict", q:"Le soutien perçu prédit mieux la santé que le soutien effectivement reçu.", s:"etabli",
 r:"Établi, et très répliqué. Recevoir de l'aide visible coûte en estime de soi, crée une dette et confirme la gravité — d'où l'efficacité du soutien dit invisible."},

/* ── Module 12 ── */
{m:"12", l:"12.1", t:"rappel", q:"Pourquoi la compétence ne protège-t-elle pas du raisonnement motivé ?",
 r:"Parce qu'elle fournit de meilleurs outils pour démolir ce qui dérange et sauver ce qui arrange. Le mécanisme le mieux établi est l'asymétrie d'examen : on soumet à un contrôle sévère ce qui nous contrarie, et on laisse passer ce qui nous conforte."},
{m:"12", l:"12.2", t:"rappel", q:"Dans le travail de Haidt, quelle partie est solide et laquelle l'est beaucoup moins ?",
 r:"Solide : l'intuitionnisme social — le jugement moral précède le raisonnement, qui le justifie après coup. Démontré par la stupéfaction morale. Fragile : la taxonomie en cinq ou six fondements, dont la structure se réplique mal hors des États-Unis et qui ajoute peu au-delà du positionnement politique."},
{m:"12", l:"12.3", t:"verdict", q:"Les bulles de filtres expliquent la polarisation politique.", s:"conteste",
 r:"Contesté. L'exposition croisée mesurée est souvent plus forte en ligne qu'hors ligne, et modifier réellement l'algorithme pendant trois mois n'a pas modifié la polarisation affective ni les attitudes."},
{m:"12", l:"12.4", t:"verdict", q:"L'effet de retour de flamme : corriger une fausse croyance la renforce.", s:"effondre",
 r:"Effondré. Cherché sur 52 sujets auprès de plus de dix mille participants : aucun cas. Les corrections fonctionnent, y compris chez les partisans du camp dérangé — et les auteurs de l'étude d'origine ont révisé leur position."},
{m:"12", l:"12.5", t:"qcm", q:"Quelle question réduit l'extrémisme d'une position politique ?",
 o:["« Pourquoi es-tu pour ? »", "« Comment cette mesure produirait-elle ses effets, étape par étape ? »", "« Qui t'a convaincu ? »", "« Quelles sont tes valeurs ? »"], c:1,
 r:"La seconde. Demander de justifier ne modère rien — on récite ses raisons et on se renforce. Demander d'expliquer le mécanisme fait apparaître l'illusion de profondeur explicative, et la confiance baisse."},

/* ── Module 13 ── */
{m:"13", l:"13.1", t:"verdict", q:"Tout se joue avant trois ans.", s:"effondre",
 r:"Effondré. Slogan de vulgarisation sans support : la plasticité et les effets de l'environnement se poursuivent largement au-delà, et la continuité entre attachement précoce et attachement adulte est faible, de l'ordre de 0,1 à 0,2."},
{m:"13", l:"13.2", t:"rappel", q:"Énonce la troisième loi de Turkheimer, et dis ce qu'elle a d'honnête.",
 r:"Une part importante de la variation comportementale n'est expliquée ni par les gènes ni par la famille. C'est honnête parce que « environnement non partagé » est un nom donné à une ignorance : on ne sait pas bien ce qui distingue deux frères."},
{m:"13", l:"13.3", t:"rappel", q:"Pourquoi le score ACE ne doit-il pas servir au dépistage individuel ?",
 r:"Sa capacité à discriminer qui développera un trouble est trop faible au niveau individuel. Il décrit correctement des populations et prédit mal des personnes — et la majorité des gens à score élevé ne développent pas de trouble, résultat aussi solide que la relation dose-réponse et infiniment moins cité."},
{m:"13", l:"13.4", t:"qcm", q:"Dans une tâche de prise de risque simulée, la présence de deux pairs qui regardent…",
 o:["double la prise de risque chez l'adolescent, sans effet chez l'adulte", "la double chez les deux", "la réduit chez l'adolescent", "n'a aucun effet"], c:0,
 r:"Elle double la prise de risque adolescente et ne change rien chez l'adulte. Ce n'est donc pas l'imprudence qui caractérise cet âge, c'est la sensibilité au regard des pairs."},
{m:"13", l:"13.4", t:"verdict", q:"Les écrans détruisent la santé mentale des adolescents.", s:"conteste",
 r:"Contesté. Effets moyens très petits dans les grandes enquêtes — moins d'un pour cent de variance —, données majoritairement corrélationnelles, mais un débat sérieux rouvert sur les sous-groupes et la qualité des mesures. L'incertitude est la seule position tenable."},

/* ── Module 14 ── */
{m:"14", l:"14.1", t:"rappel", q:"Pourquoi deux personnes portant le même diagnostic de dépression peuvent-elles n'avoir presque rien en commun ?",
 r:"Le diagnostic demande au moins cinq symptômes sur neuf : il existe plus de deux cents combinaisons possibles. L'un ne dort plus, ne mange plus et s'agite ; l'autre dort quinze heures, mange trop et ne bouge plus."},
{m:"14", l:"14.2", t:"rappel", q:"Comment « la théorie sérotoninergique est fausse » et « les antidépresseurs marchent » peuvent-ils être vrais ensemble ?",
 r:"Parce que l'efficacité se mesure par essais randomisés, pas par la vérité de l'explication qu'on en donne. L'aspirine a soulagé pendant près d'un siècle avant qu'on comprenne son mécanisme. Présenter la première affirmation comme réfutant la seconde est une erreur de logique."},
{m:"14", l:"14.3", t:"rappel", q:"Pourquoi une exposition pratiquée avec un comportement de sécurité ne fonctionne-t-elle pas ?",
 r:"Tenir une barre, garder un comprimé, s'asseoir près de la sortie permet de traverser la situation sans jamais tester la prédiction catastrophique. La personne attribue sa survie au geste, pas à l'absence de danger — donc l'apprentissage n'a pas lieu."},
{m:"14", l:"14.4", t:"verdict", q:"Tout le monde est un peu autiste, ou un peu hyperactif.", s:"effondre",
 r:"Effondré. Les traits sont bien continus, mais le trouble suppose un retentissement sur le fonctionnement. La phrase supprime exactement la distinction qui fonde le diagnostic — entre un trait et un handicap."},
{m:"14", l:"14.5", t:"qcm", q:"Le facteur p est, en psychopathologie, l'analogue de…",
 o:["l'effet placebo", "le facteur g", "l'héritabilité", "l'alliance thérapeutique"], c:1,
 r:"Du facteur g. Même structure statistique — tout corrèle positivement, on en extrait un facteur général — et même incertitude durable sur l'interprétation : vulnérabilité réelle, artefact de chevauchement des critères, ou biais de réponse."},

/* ── Module 15 ── */
{m:"15", l:"15.1", t:"verdict", q:"Seules les thérapies cognitives et comportementales ont fait leurs preuves.", s:"conteste",
 r:"Contesté. Faux pour plusieurs autres approches sur les troubles courants ; vrai que leur avantage de littérature est considérable, en partie parce que les protocoles manualisés se testent plus facilement en essai randomisé."},
{m:"15", l:"15.2", t:"rappel", q:"Cite deux exceptions nettes au verdict du dodo.",
 r:"Au choix : exposition avec prévention de la réponse pour le trouble obsessionnel ; exposition pour les phobies spécifiques et le stress post-traumatique ; thérapie dédiée pour l'insomnie chronique ; thérapie dialectique pour les conduites suicidaires répétées ; approche familiale pour l'anorexie de l'adolescent."},
{m:"15", l:"15.3", t:"rappel", q:"Pourquoi les années d'expérience d'un thérapeute ne prédisent-elles pas ses résultats ?",
 r:"Parce qu'il n'y a pas de boucle de retour : les patients qui vont mal partent sans le dire, ceux qui vont bien remercient, et personne ne mesure. Même mécanisme que la calibration de la leçon 6.6 — l'expérience ne produit de l'amélioration que s'il y a correction."},
{m:"15", l:"15.4", t:"rappel", q:"Donne les trois phrases simultanément vraies sur les antidépresseurs.",
 r:"1) L'effet existe, hors de doute : plus de cinq cents essais. 2) Il est faible en moyenne — environ 0,30, soit deux points sur l'échelle usuelle, sous le seuil de pertinence souvent retenu. 3) Un patient sur sept à neuf obtient une réponse qu'il n'aurait pas eue sous placebo."},
{m:"15", l:"15.5", t:"qcm", q:"Pourquoi l'aveugle est-il le problème majeur des essais sur les psychédéliques ?",
 o:["les doses sont trop faibles", "le participant sait en quelques minutes dans quel groupe il est", "les échelles de mesure sont mauvaises", "il n'existe pas de placebo utilisable"], c:1,
 r:"Rupture fonctionnelle de l'aveugle : le traitement se signale lui-même, et l'évaluateur le voit aussi. L'attente s'ajoute à l'effet du produit sans qu'on puisse les séparer — d'autant que les participants recrutés sont très favorables aux psychédéliques."},

/* ── Module 16 ── */
{m:"16", l:"16.1", t:"qcm", q:"Part de la variance de performance expliquée par la pratique, dans les professions :",
 o:["environ 26 %", "environ 18 %", "environ 4 %", "moins de 1 %"], c:3,
 r:"Moins de 1 %. Contre environ 26 % dans les jeux et 21 % en musique. La pratique compte là où les règles sont fixes et le retour immédiat — et presque pas là où l'environnement est irrégulier."},
{m:"16", l:"16.2", t:"rappel", q:"Après la révision de 2022, quelle méthode de sélection arrive en tête, et laquelle descend ?",
 r:"L'entretien structuré passe en tête, autour de 0,42. L'aptitude cognitive descend de la première place à environ 0,31, les corrections statistiques historiques ayant été jugées trop généreuses."},
{m:"16", l:"16.3", t:"rappel", q:"Que se passe-t-il quand on ajoute un entretien libre à un bon prédicteur ?",
 r:"La prédiction se dégrade. Et dans la condition où le candidat répondait au hasard, les intervieweurs ne l'ont pas détecté tout en se déclarant confiants : l'entretien libre mesure surtout la cohérence du récit que l'intervieweur se fabrique."},
{m:"16", l:"16.4", t:"verdict", q:"« X % des salariés sont en burnout. »", s:"effondre",
 r:"Effondré comme affirmation chiffrée. Il n'existe aucun seuil validé, donc aucun taux : les définitions varient par dizaines, et les prévalences publiées vont de presque zéro à plus de 80 % dans la même profession."},
{m:"16", l:"16.5", t:"rappel", q:"Pourquoi un groupe produit-il moins d'idées que les mêmes personnes réfléchissant séparément ?",
 r:"Deux mécanismes. Le blocage de production : une seule personne parle à la fois, les autres attendent et oublient. Et l'appréhension de l'évaluation : on filtre ce qui pourrait paraître bête, c'est-à-dire exactement ce qu'il fallait ne pas filtrer."},

/* ── Module 17 ── */
{m:"17", l:"17.1", t:"rappel", q:"Quelles sont les quatre catégories de verdict du cours, et laquelle est la plus fournie ?",
 r:"Établi, contesté, effondré, marketing. La plus fournie est « établi », suivie de « contesté » — alors que le plan, qui listait des idées reçues, laissait attendre l'inverse. C'est la sélection des sujets dont on parle qui donne l'impression que la psychologie est surtout faite de ruines."},
{m:"17", l:"17.2", t:"rappel", q:"Cite trois marqueurs de pseudo-science psychologique.",
 r:"Au choix : irréfutabilité ; vocabulaire scientifique décoratif ; témoignages à la place des données ; auteur et livre uniques ; absence de controverse interne ; ancienneté ou exotisme présentés comme preuve ; théorie du complot de la science officielle ; formation certifiante payante."},
{m:"17", l:"17.3", t:"rappel", q:"Cite trois choses que la psychologie ne sait toujours pas.",
 r:"Au choix : la conscience ; la causalité des troubles psychiques, sans aucun examen biologique diagnostique ; la prédiction individuelle ; pourquoi les psychothérapies fonctionnent ; jusqu'où les résultats se généralisent hors des populations occidentales ; par quels mécanismes concrets l'héritabilité s'exerce."},
{m:"17", l:"17.2", t:"verdict", q:"Les cinq questions suffisent dans la majorité des cas.", s:"etabli",
 r:"Établi, avec sa limite : elles ne remplacent pas une évaluation technique, mais elles repèrent les trois erreurs les plus fréquentes — causalité abusive, effet minuscule, affirmation jamais testée."},
{m:"17", l:"17.2", t:"qcm", q:"Quel signe indique qu'un démontage est aussi paresseux que ce qu'il démonte ?",
 o:["il cite une seule étude", "il ne distingue jamais « effondré » de « contesté »", "il est trop court", "il est partial"], c:1,
 r:"L'absence de distinction entre effondré et contesté — parce que la nuance ne se partage pas. Le scepticisme a une échelle, le cynisme n'en a pas."}

];
