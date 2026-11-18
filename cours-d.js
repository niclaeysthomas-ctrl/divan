/* ═══════════════════════════════════════════════════════════════
   LE COURS · BLOC D — Les autres
   Module 10 : L'influence (5 leçons)
   Module 11 : Les liens (4 leçons)
   Module 12 : Groupes, morale, idéologie (5 leçons)
   ═══════════════════════════════════════════════════════════════ */

window.CONTENU_D = {

/* ───────────────────────── MODULE 10 ──────────────────────── */

"10.1": [
{t:"ex", titre:"L'exemple d'abord", x:"On te montre une ligne de référence, puis trois lignes numérotées. Il faut dire laquelle a la même longueur que la référence. La réponse est évidente : l'écart entre les propositions est franc, et une personne seule se trompe à peine une fois sur trente. Sauf que tu es assis en huitième position, et que les sept personnes avant toi — toutes complices — ont donné la même réponse fausse, calmement, sans hésiter."},
{t:"p", x:"Ce dispositif est celui d'Asch, au début des années 1950. Voyons ce qu'il a réellement trouvé, parce que le résultat est cité de travers à peu près partout."},
{t:"h", x:"Les chiffres, dans le bon sens"},
{t:"tab", head:["Mesure", "Valeur", "Comment on la cite d'habitude"], rows:[
  ["Participants qui se conforment au moins une fois", "environ 75 %", "« trois personnes sur quatre suivent le groupe »"],
  ["Réponses conformes sur l'ensemble des essais critiques", "environ 37 %", "presque jamais cité"],
  ["Participants qui ne cèdent jamais", "environ 25 %", "jamais cité"],
  ["Taux d'erreur sans complices", "moins de 1 %", "la tâche est vraiment triviale"]
]},
{t:"p", x:"La deuxième ligne est la plus importante : dans près des deux tiers des occasions, les participants ont dit la vérité contre l'unanimité du groupe. Le résultat d'Asch n'est donc pas que les humains suivent le troupeau. C'est qu'une minorité substantielle de réponses — un tiers environ — cède devant une majorité unanime sur une question où il n'y a aucun doute perceptif. C'est déjà énorme, et ce n'est pas la même chose."},
{t:"h", x:"Le résultat utile, celui qu'on n'enseigne pas"},
{t:"p", x:"Asch a fait varier son protocole. La variante décisive : il suffit qu'un seul des complices donne la bonne réponse avant le participant pour que la conformité s'effondre — elle tombe à quelques pour cent."},
{t:"p", x:"Ce qui est brisé, ce n'est pas le nombre : c'est l'unanimité. Et plus remarquable encore, l'allié n'a même pas besoin d'avoir raison. Un complice qui donne une troisième réponse, fausse elle aussi mais différente de celle du groupe, réduit presque autant la conformité."},
{t:"p", x:"La conséquence pratique est directe, et elle vaut pour une réunion comme pour un comité d'investissement : la première voix discordante fait tout le travail. Si tu es le seul à douter, tu as statistiquement raison de parler — non parce que tu as raison sur le fond, mais parce que tu libères les autres doutes silencieux qui attendent dans la salle."},
{t:"h", x:"Pourquoi les gens cèdent"},
{t:"p", x:"Deux mécanismes, qu'il faut distinguer parce qu'ils appellent des remèdes opposés."},
{t:"num", items:[
  "L'influence informationnelle : je pense que les autres en savent plus que moi, donc je révise mon jugement. C'est rationnel, et c'est même souvent la bonne stratégie.",
  "L'influence normative : je vois bien que c'est faux, mais je ne veux pas être celui qui dépare. C'est ce que mesure Asch — on le sait parce que lorsqu'on fait répondre les participants par écrit, en privé, la conformité s'effondre. Ils voyaient la bonne réponse, ils ne voulaient pas la dire."
]},
{t:"h", x:"Est-ce que ça réplique ?"},
{t:"p", x:"Oui, et c'est l'un des rares classiques de la psychologie sociale à avoir bien vieilli. Une méta-analyse portant sur des études menées dans dix-sept pays retrouve l'effet partout, plus marqué dans les sociétés collectivistes que dans les sociétés individualistes. Elle trouve aussi, aux États-Unis, une décroissance régulière du taux de conformité depuis les années 1950 — ce qui est une information en soi : un résultat de psychologie sociale peut dépendre de l'époque."},
{t:"verdict", s:"etabli", x:"La conformité à une majorité unanime", d:"répliqué dans de nombreux pays et sur sept décennies, avec une ampleur qui varie selon la culture et l'époque."},
{t:"verdict", s:"conteste", x:"Les gens suivent le groupe", d:"la majorité des réponses restent correctes ; l'effet porte sur environ un tiers des occasions, pas sur les trois quarts des gens tout le temps."},
{t:"verdict", s:"etabli", x:"Un seul allié casse la conformité", d:"effet spectaculaire et répliqué, y compris quand l'allié donne lui aussi une réponse fausse mais différente."},
{t:"key", x:"Ce qui écrase n'est pas la taille du groupe, c'est son unanimité. Et comme la briser suffit, la question en réunion n'est jamais « ai-je raison ? » mais « suis-je le premier à parler ? »."}
],

"10.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu es volontaire pour une étude sur la mémoire. On te présente un autre volontaire — en réalité un comédien — qui sera l'élève. Tu es l'enseignant. À chaque erreur, tu dois administrer un choc électrique, et augmenter l'intensité d'un cran. Les crans vont jusqu'à 450 volts, étiquetés « danger : choc grave » puis « XXX ». L'élève proteste, crie, supplie, puis se tait. Un homme en blouse te dit calmement de continuer."},
{t:"p", x:"Dans la condition la plus citée, 65 % des participants vont jusqu'au bout. C'est le chiffre qui a fait le tour du monde, et il est à peu près toujours mal employé."},
{t:"h", x:"Il n'y a pas un chiffre, il y en a vingt-trois"},
{t:"p", x:"Milgram n'a pas fait une expérience, il en a fait une série — une vingtaine de variantes, dont les taux d'obéissance totale vont de 0 % à plus de 90 %."},
{t:"tab", head:["Variante", "Obéissance totale"], rows:[
  ["L'élève est dans une autre pièce, on entend des coups au mur", "très élevée"],
  ["L'élève est dans la même pièce", "nettement réduite"],
  ["Il faut poser physiquement la main de l'élève sur la plaque", "encore plus réduite"],
  ["L'expérimentateur donne ses ordres par téléphone", "effondrée"],
  ["Deux pairs refusent de continuer devant le participant", "environ une sur dix"],
  ["Hors de Yale, dans un bureau anonyme en ville", "réduite"]
]},
{t:"p", x:"La leçon est donc exactement l'inverse de ce qu'on en tire. Ce n'est pas que 65 % des humains torturent sur ordre : c'est que la proportion dépend massivement de la situation — de la distance à la victime, de la présence physique de l'autorité, de sa légitimité institutionnelle, et surtout de l'existence d'un précédent de désobéissance. Tu retrouves le résultat d'Asch : un seul allié change tout."},
{t:"h", x:"Ce que les archives ont montré"},
{t:"p", x:"Milgram a laissé ses enregistrements et ses notes à Yale, et leur dépouillement, des décennies plus tard, a sérieusement abîmé le tableau."},
{t:"li", items:[
  "Le protocole prévoyait quatre relances standardisées, après lesquelles l'expérience devait s'arrêter. Les enregistrements montrent un expérimentateur qui sort du script, improvise, insiste bien au-delà, et argumente avec des participants qui veulent partir.",
  "Une proportion importante de participants a exprimé des doutes sur la réalité des chocs. L'ampleur exacte est discutée, mais le fait que ce ne soit pas marginal ne l'est pas — or quelqu'un qui soupçonne une mise en scène ne fait pas la même chose que quelqu'un qui croit électrocuter un homme.",
  "Une partie des participants n'a pas été détrompée immédiatement après l'expérience, certains pendant des mois. C'est un problème éthique en soi, et c'est aussi ce qui rend les réplications intégrales impossibles aujourd'hui."
]},
{t:"h", x:"Ce qui reste debout"},
{t:"p", x:"Le phénomène n'est pas nul. Une réplication partielle, conçue pour rester éthique en s'arrêtant au palier de 150 volts — celui où l'élève demande pour la première fois à sortir —, a retrouvé des taux comparables à ceux de Milgram au même palier. Des gens ordinaires continuent d'infliger ce qu'ils croient être une souffrance, parce qu'on le leur demande dans un cadre qui le légitime."},
{t:"p", x:"Mais l'interprétation a changé. Haslam et Reicher ont analysé quelles relances marchaient. Celle qui produit le plus de poursuite est « l'expérience exige que vous continuiez ». Celle qui produit le plus d'arrêts, quasi systématiquement, est « vous n'avez pas le choix, vous devez continuer »."},
{t:"p", x:"C'est l'inverse de la soumission aveugle. Quand on invoque la science et le projet commun, les gens suivent ; quand on invoque l'ordre pur et qu'on supprime leur liberté, ils se cabrent. Ce que l'expérience mesurerait, dans cette lecture, c'est l'adhésion à une entreprise jugée légitime — ce qui est historiquement plus inquiétant, pas moins."},
{t:"verdict", s:"etabli", x:"Des gens ordinaires infligent une souffrance dans un cadre qui la légitime", d:"retrouvé dans une réplication partielle moderne et dans plusieurs variantes."},
{t:"verdict", s:"conteste", x:"65 % des gens torturent sur ordre", d:"chiffre d'une seule variante parmi plus de vingt, dont les taux vont de 0 à plus de 90 % ; et les archives montrent un protocole moins propre que publié."},
{t:"verdict", s:"conteste", x:"L'obéissance est une soumission aveugle à l'autorité", d:"la relance qui invoque l'absence de choix est celle qui fait le plus arrêter ; celle qui invoque le projet scientifique est la plus efficace."},
{t:"key", x:"Ne cite jamais « les 65 % de Milgram » sans dire laquelle des vingt-trois conditions. Et retiens la variante qui compte vraiment : voir deux personnes refuser fait tomber l'obéissance à une sur dix."}
],

"10.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Le récit est connu de tout le monde. En 1971, à Stanford, des étudiants sont tirés au sort pour être gardiens ou prisonniers dans une fausse prison. En quelques jours, les gardiens deviennent cruels, les prisonniers s'effondrent, et l'expérience prévue pour deux semaines est arrêtée au bout de six jours. Conclusion enseignée depuis cinquante ans : le rôle transforme la personne, et n'importe qui peut devenir bourreau."},
{t:"p", x:"Ce récit est faux, et il l'est à un niveau plus profond que des détails de méthode : ce n'était pas une expérience."},
{t:"h", x:"Ce que les archives et les enregistrements ont montré"},
{t:"num", items:[
  "Les gardiens ont été instruits. Les enregistrements des réunions préparatoires montrent qu'on leur a expliqué le comportement attendu : créer un sentiment d'arbitraire, d'ennui, de peur, retirer l'individualité. Un gardien hésitant était rappelé à l'ordre par l'assistant qui jouait le directeur de prison. On ne peut donc pas conclure que le rôle a produit spontanément la cruauté : la cruauté faisait partie de la consigne.",
  "Un « prisonnier » a reconnu publiquement, bien plus tard, avoir simulé sa crise de nerfs pour pouvoir sortir et réviser ses examens. L'épisode le plus cité de l'étude.",
  "Il n'y avait aucune hypothèse formulée à l'avance, aucune condition de comparaison, aucune mesure systématique. On ne peut rien tester quand il n'y a ni prédiction ni témoin.",
  "Les participants savaient ce qu'on attendait d'eux : le recrutement annonçait une étude sur « la vie en prison », ce qui sélectionne des volontaires et leur indique le scénario."
]},
{t:"p", x:"Mis bout à bout, le résultat se reformule ainsi : des jeunes gens à qui l'on demande de jouer des gardiens durs, dans un décor de prison, devant des caméras, jouent des gardiens durs. C'est une démonstration théâtrale, pas une découverte."},
{t:"h", x:"La seule chose qui ressemble à un test"},
{t:"p", x:"En 2002, une équipe britannique a recommencé avec un protocole encadré, une vraie équipe d'éthique et surtout aucune instruction donnée aux gardiens. Le résultat ne ressemble en rien au récit de Stanford : les gardiens ne se sont pas spontanément montrés tyranniques, et ils se sont même montrés mal à l'aise avec leur pouvoir. Ce qui a déterminé les dynamiques, c'est l'identification de chaque groupe à son groupe, et la légitimité perçue du système."},
{t:"h", x:"Pourquoi ça a tenu cinquante ans"},
{t:"p", x:"Parce que le récit est bon : il est simple, visuel, moralement confortable — il explique le mal par la situation plutôt que par les personnes — et il a été raconté par son auteur avec un talent médiatique considérable, films à l'appui."},
{t:"p", x:"Et pour une raison plus perverse : l'éthique interdisait de le répliquer. Une démonstration impossible à refaire est une démonstration impossible à réfuter. Elle est entrée dans les manuels comme un fait, et elle y est restée jusqu'à ce que quelqu'un aille écouter les bandes."},
{t:"p", x:"C'est pour ça que cette leçon existe dans ce cours. Reprends la cinquième question de la leçon 1.7 : qu'est-ce qui réfuterait cette affirmation ? À Stanford, rien — par construction."},
{t:"verdict", s:"effondre", x:"L'expérience de la prison de Stanford", d:"pas d'hypothèse, pas de groupe témoin, gardiens instruits sur le comportement attendu, détresse au moins partiellement simulée. Ce n'est pas une expérience ratée, c'est une mise en scène."},
{t:"verdict", s:"conteste", x:"N'importe qui peut devenir bourreau", d:"l'affirmation n'est pas absurde et d'autres travaux l'abordent sérieusement, mais Stanford n'en est pas une preuve."},
{t:"key", x:"À enseigner, mais comme cas d'école de ce qu'il ne faut pas faire — et comme rappel qu'une démonstration qu'on ne peut pas refaire est une démonstration qu'on ne peut pas corriger."}
],

"10.4": [
{t:"ex", titre:"L'exemple d'abord", x:"L'histoire fondatrice : en 1964, à New York, Kitty Genovese est assassinée dans la rue. Le New York Times rapporte que trente-huit voisins ont vu ou entendu, et que personne n'a rien fait. Le récit a lancé tout un champ de recherche et il est entré dans la culture générale comme la preuve de l'indifférence urbaine."},
{t:"p", x:"Le récit journalistique est largement faux. Des réexamens du dossier ont montré que le nombre de témoins ayant réellement vu la scène et compris ce qui se passait était bien plus faible, qu'au moins une personne a appelé la police, et qu'une voisine est descendue et l'a tenue dans ses bras pendant qu'elle mourait. Le chiffre de trente-huit n'a jamais correspondu à des témoins oculaires."},
{t:"p", x:"Le champ de recherche né de ce fait divers, lui, a produit de vrais résultats. C'est une situation inconfortable et instructive : une histoire fausse a lancé une science qui marche."},
{t:"h", x:"L'effet, en laboratoire"},
{t:"def", mot:"Effet spectateur", x:"La probabilité qu'un individu donné intervienne dans une situation d'urgence diminue quand d'autres témoins sont présents. Les mécanismes identifiés sont la diffusion de responsabilité, la peur du jugement si l'on se trompe, et l'ignorance pluraliste — chacun lit l'inaction des autres comme la preuve qu'il n'y a pas d'urgence."},
{t:"p", x:"L'effet est réel, répliqué, et c'est un des classiques de psychologie sociale qui a survécu. L'ignorance pluraliste est particulièrement démontrable : dans un protocole où de la fumée envahit une pièce, un participant seul va chercher de l'aide dans la grande majorité des cas ; accompagné de complices impassibles, il reste assis — et explique ensuite qu'il avait pensé à une panne de climatisation."},
{t:"h", x:"La nuance de la méta-analyse"},
{t:"p", x:"Une synthèse de plusieurs décennies d'études a trouvé que l'effet se réduit fortement, et peut s'inverser, quand la situation est sans ambiguïté et le danger réel. Trois raisons : il n'y a plus d'ambiguïté à interpréter, intervenir devient coûteux donc le nombre aide, et la présence d'autres personnes rassure sur le soutien qu'on recevra."},
{t:"h", x:"Le renversement par la vidéo"},
{t:"p", x:"Le résultat le plus important de cette leçon est récent, et il a été rendu possible par quelque chose dont Darley et Latané ne disposaient pas : les caméras de surveillance urbaine."},
{t:"p", x:"Une équipe a analysé des centaines de conflits réels filmés dans les rues de trois pays. Dans environ neuf cas sur dix, au moins une personne intervient. Et contrairement à ce que le message populaire laisse attendre, la probabilité qu'au moins quelqu'un intervienne **augmente** avec le nombre de témoins présents."},
{t:"p", x:"Il n'y a pas de contradiction avec le laboratoire, à condition de distinguer deux questions. Au niveau de l'individu, la probabilité que ce soit toi qui agisses baisse quand il y a du monde — la diffusion de responsabilité est réelle. Au niveau du groupe, plus il y a de monde, plus il y a de chances que quelqu'un agisse. Les deux sont vrais, et c'est la seconde qui décrit ce qui t'arrivera si tu as besoin d'aide dans la rue."},
{t:"verdict", s:"etabli", x:"La diffusion de responsabilité", d:"répliquée, avec des mécanismes identifiés dont l'ignorance pluraliste."},
{t:"verdict", s:"effondre", x:"Personne n'aide dans une foule", d:"l'analyse de conflits réels filmés trouve une intervention dans environ 90 % des cas, et la probabilité d'aide croît avec le nombre de témoins."},
{t:"verdict", s:"effondre", x:"Les trente-huit témoins de Kitty Genovese", d:"récit journalistique démenti par le réexamen du dossier."},
{t:"key", x:"Deux niveaux, deux réponses opposées, et il faut tenir les deux : toi personnellement interviendras moins s'il y a du monde, et quelqu'un interviendra plus. Si tu as besoin d'aide, la consigne qui marche découle du mécanisme : désigne une personne précise, pour supprimer la diffusion."}
],

"10.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Un serveur apporte l'addition avec un bonbon. Le pourboire augmente. Il en apporte deux : il augmente davantage. Il en apporte un, s'éloigne, se retourne, et en ajoute un second comme s'il venait d'y penser : l'augmentation est nettement plus forte que pour les deux donnés d'un coup."},
{t:"p", x:"Ce n'est pas la quantité de bonbon qui agit, c'est le geste personnel. On est au cœur de la réciprocité, le plus solide des principes de persuasion répertoriés par Cialdini."},
{t:"h", x:"Le tri, principe par principe"},
{t:"tab", head:["Principe", "Statut", "Ce qu'on peut en dire"], rows:[
  ["Réciprocité", "solide", "un don même minuscule, surtout s'il paraît personnel, crée une obligation"],
  ["Preuve sociale", "solide", "les normes descriptives — ce que font réellement les autres — changent les comportements, à condition de dire la vérité"],
  ["Autorité", "réel, modeste", "le signe extérieur d'expertise pèse ; c'est le mécanisme que Milgram exploitait"],
  ["Sympathie", "réel, modeste", "on dit plus facilement oui à quelqu'un qu'on apprécie"],
  ["Rareté", "réel, modeste", "effets contextuels, largement surestimés par le marketing"],
  ["Engagement et cohérence", "faible", "le pied-dans-la-porte existe, mais sa taille d'effet méta-analysée est petite"]
]},
{t:"p", x:"Le piège de la preuve sociale mérite un détour, parce qu'il illustre quelque chose d'utile. Dans les campagnes de réduction de consommation d'énergie, annoncer à un foyer qu'il consomme moins que la moyenne de son quartier fait remonter sa consommation : il apprend qu'il a de la marge. La correction consiste à ajouter un signe d'approbation — un simple smiley sur la facture — pour transformer une information descriptive en norme approuvée. Une norme qu'on diffuse sans y penser peut donc produire exactement l'inverse de ce qu'on voulait."},
{t:"h", x:"Les tailles d'effet, et ce qu'elles impliquent"},
{t:"p", x:"La vraie leçon du champ n'est pas la liste des principes, c'est leur ampleur. Les effets de persuasion mesurés proprement sont petits : ils déplacent quelques points de pourcentage de comportement, pas des opinions. C'est exactement ce qu'on a vu au nudge à la leçon 6.5, et pour les mêmes raisons méthodologiques."},
{t:"p", x:"Ce qui marche beaucoup mieux que de convaincre, c'est de rendre l'action facile : supprimer une étape, préremplir, rapprocher. Entre persuader quelqu'un de s'inscrire et le pré-inscrire avec possibilité de refuser, le second l'emporte sans comparaison possible."},
{t:"h", x:"Une histoire qui vaut la leçon entière"},
{t:"p", x:"En 2014, une étude spectaculaire paraît : une conversation de vingt minutes avec un militant homosexuel changerait durablement l'opinion des gens sur le mariage de même sexe. Reprise partout."},
{t:"p", x:"Des étudiants qui voulaient la répliquer demandent les données brutes, trouvent des anomalies statistiques, et finissent par établir que l'enquête n'avait jamais eu lieu. L'article est rétracté. La fraude a été découverte par la tentative de réplication, pas par la relecture par les pairs."},
{t:"p", x:"Et la suite est la meilleure partie. Les deux chercheurs qui avaient démasqué la fraude ont fait eux-mêmes l'étude, proprement, préenregistrée, sur un autre sujet — les préjugés envers les personnes transgenres. Ils ont trouvé un effet réel et durable. La méthode compte, on y revient à la leçon 12.5."},
{t:"verdict", s:"etabli", x:"La réciprocité", d:"répliquée dans de nombreux contextes ; l'effet augmente quand le don paraît personnalisé plutôt que systématique."},
{t:"verdict", s:"conteste", x:"Le pied-dans-la-porte", d:"effet réel mais de petite taille en méta-analyse, loin de ce que la littérature de vente en fait."},
{t:"verdict", s:"etabli", x:"Les normes descriptives peuvent se retourner", d:"informer quelqu'un qu'il fait mieux que la moyenne dégrade son comportement, sauf si l'on y ajoute une approbation explicite."},
{t:"key", x:"Les effets de persuasion sont petits et les effets de facilitation sont grands. Avant de chercher le bon argument, supprime une étape — c'est presque toujours plus rentable."}
],

/* ───────────────────────── MODULE 11 ──────────────────────── */

"11.1": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu envoies un message important à quelqu'un qui compte. Six heures passent sans réponse. Première réaction possible : une boule au ventre, tu relis ce que tu as écrit, tu cherches ce qui a pu blesser, tu envisages de renvoyer quelque chose. Deuxième réaction possible : tu passes à autre chose, et si ça dure tu te détaches — ça te confirme ce que tu pensais, il ne faut compter que sur soi."},
{t:"p", x:"Ces deux réactions ne sont pas deux personnalités opposées. Ce sont les deux extrémités de deux dimensions distinctes, qu'on mesure séparément."},
{t:"def", mot:"Anxiété d'attachement", x:"La crainte d'être abandonné ou de ne pas compter assez, l'hypervigilance aux signes de distance, le besoin de réassurance. Haute : la première réaction ci-dessus."},
{t:"def", mot:"Évitement de l'attachement", x:"L'inconfort avec la dépendance et l'intimité, la tendance à se replier sur l'autonomie quand le lien devient exigeant. Haut : la deuxième réaction."},
{t:"h", x:"Deux dimensions, pas quatre cases"},
{t:"p", x:"Tu croiseras partout une typologie en quatre catégories : sécure, préoccupé, détaché, craintif. Elle est pratique à expliquer et elle est fausse au sens strict, pour la même raison qu'au module 2 : les analyses de la distribution montrent du continu, pas des groupes séparés par un creux."},
{t:"p", x:"Les quatre noms sont donc des régions d'un plan, pas des espèces. Quelqu'un à 55 sur 100 en anxiété et 48 en évitement n'est rien du tout : il est au milieu, comme la majorité des gens. Le dire autrement, c'est fabriquer une identité à partir d'un score médian."},
{t:"h", x:"Ce que ces deux dimensions prédisent"},
{t:"li", items:[
  "La satisfaction conjugale, pour soi et pour le partenaire : les liens sont réels, de taille modeste à modérée — reprends la conversion de la leçon 2.2 avant de t'enthousiasmer.",
  "Le comportement en conflit : l'anxiété prédit l'escalade et la demande de réassurance ; l'évitement prédit le retrait. Et la combinaison des deux dans un couple — l'un poursuit, l'autre fuit — est le schéma le mieux décrit de la littérature sur les disputes.",
  "La façon de demander et de recevoir du soutien, dont on parle à la leçon 11.4."
]},
{t:"h", x:"Le lien avec l'enfance : beaucoup plus faible qu'annoncé"},
{t:"p", x:"C'est le point sur lequel la vulgarisation s'écarte le plus des données. Le récit courant veut que la relation avec les parents dans les premières années fixe le style relationnel adulte."},
{t:"p", x:"Les études qui mesurent l'attachement en bas âge puis les mêmes personnes devenues adultes trouvent un lien faible — de l'ordre de 0,1 à 0,2 selon les synthèses. Avec les outils de la leçon 2.2 : savoir comment quelqu'un était attaché à un an te fait gagner quelques points sur cinquante quand tu paries sur son style adulte. C'est largement en dessous de ce que le discours commun suppose."},
{t:"p", x:"L'attachement adulte est en outre modérément stable, et il bouge avec les relations vécues. Une relation durable et fiable réduit l'anxiété ; une rupture ou une trahison l'augmente. Ce n'est pas un trait gravé mais un équilibre entretenu par ce qui t'arrive — ce qui est une meilleure nouvelle que ce qu'on t'a probablement raconté."},
{t:"verdict", s:"etabli", x:"Les deux dimensions anxiété et évitement", d:"structure retrouvée dans de nombreux échantillons et dans plusieurs langues ; c'est le modèle de référence actuel."},
{t:"verdict", s:"effondre", x:"Les quatre types d'attachement", d:"les analyses de distribution ne trouvent pas de catégories séparées ; ce sont des régions continues d'un plan à deux axes."},
{t:"verdict", s:"effondre", x:"Ton attachement d'enfance détermine tes relations d'adulte", d:"la continuité mesurée entre attachement précoce et attachement adulte est faible, de l'ordre de 0,1 à 0,2."},
{t:"key", x:"Tu n'es pas d'un type, tu es quelque part sur deux axes — et ta position bouge avec ce que tu vis. Ce qui veut dire que la question utile n'est pas « quel est mon style » mais « qu'est-ce qui, dans cette relation précise, fait monter mon anxiété ou mon évitement »."}
],

"11.2": [
{t:"ex", titre:"L'exemple d'abord", x:"La promesse est célèbre : en observant quinze minutes de conversation entre deux conjoints, et en codant leurs expressions, on prédirait le divorce avec plus de 90 % de précision. Le chiffre a fait la fortune d'une méthode et circule encore dans tous les livres de couple."},
{t:"p", x:"Le problème est méthodologique, et c'est exactement celui de la leçon 1.3, en version modélisation."},
{t:"h", x:"Prédire après coup n'est pas prédire"},
{t:"p", x:"Les modèles ont été construits sur un échantillon de couples dont on connaissait déjà l'issue. On cherche la combinaison de variables qui sépare le mieux ceux qui ont divorcé de ceux qui sont restés — et on trouve toujours une combinaison qui sépare très bien, parce qu'on a beaucoup de variables et peu de couples."},
{t:"p", x:"Le test honnête consiste à appliquer ensuite ce modèle, sans le retoucher, à de nouveaux couples dont on ignore l'issue. Quand on le fait, la précision s'effondre. Le 90 % n'était pas une prédiction, c'était une description de l'échantillon sur lequel le modèle avait été taillé."},
{t:"p", x:"Retiens ce mécanisme sous son nom général : le surajustement. Il concerne autant la psychologie du couple que les modèles de scoring financier, et le remède est le même — valider sur des données qui n'ont pas servi à construire le modèle."},
{t:"h", x:"Ce qu'on sait vraiment, depuis 2020"},
{t:"p", x:"Une équipe internationale a rassemblé quarante-trois études longitudinales, soit plus de onze mille couples, et appliqué des méthodes d'apprentissage automatique pour chercher ce qui prédit la satisfaction relationnelle. L'intérêt du dispositif est qu'il ne privilégie aucune théorie : on laisse les données classer les prédicteurs."},
{t:"tab", head:["Ce qu'on mesure", "Pouvoir prédictif"], rows:[
  ["Ce que la personne ressent de sa relation — engagement perçu, appréciation, satisfaction sexuelle, conflit", "de loin le plus fort"],
  ["Les traits individuels de la personne — personnalité, attachement, histoire", "nettement plus faible"],
  ["Les caractéristiques du partenaire", "quasi nul une fois connu le ressenti de la personne"],
  ["Prédiction de la satisfaction actuelle", "environ 45 % de la variance expliquée"],
  ["Prédiction de son évolution future", "environ 18 %"]
]},
{t:"p", x:"Deux conclusions, et la seconde est désagréable. D'abord, ce qui compte est la qualité de la dynamique vécue, pas le profil de qui tu choisis — ce qui relativise toute l'industrie de l'appariement par caractéristiques. Ensuite, même avec onze mille couples et les meilleures méthodes, on explique moins d'un cinquième de l'évolution future. La prédiction individuelle reste très mauvaise, et toute personne qui t'annonce savoir si ton couple durera dépasse l'état de l'art."},
{t:"h", x:"Et les quatre cavaliers ?"},
{t:"p", x:"La critique, le mépris, la défensive et la dérobade sont présentés comme les signes annonciateurs de la rupture, le mépris en tête. L'idée est cliniquement plausible et largement enseignée, mais elle vient de la même littérature que le 90 %, avec les mêmes faiblesses de validation. À ranger en contesté : probablement utile comme grille d'observation, pas comme instrument de prédiction."},
{t:"verdict", s:"conteste", x:"On prédit le divorce à 90 %", d:"précision obtenue sur l'échantillon qui a servi à construire le modèle ; elle chute fortement en validation sur de nouveaux couples."},
{t:"verdict", s:"etabli", x:"Ce qui prédit le mieux est la dynamique vécue, pas le profil du partenaire", d:"onze mille couples, quarante-trois études longitudinales, méthodes agnostiques."},
{t:"verdict", s:"conteste", x:"Les quatre cavaliers", d:"grille d'observation plausible, mais sa valeur prédictive n'a pas été établie sur données indépendantes."},
{t:"key", x:"Un modèle qui n'a pas été testé sur des données qu'il n'a jamais vues ne prédit rien. C'est vrai pour les couples, c'est vrai pour les défauts de crédit, et c'est la question à poser systématiquement devant un taux de précision spectaculaire."}
],

"11.3": [
{t:"ex", titre:"L'exemple d'abord", x:"Tu as sûrement entendu que la solitude serait aussi nocive que fumer quinze cigarettes par jour. La formule vient d'une méta-analyse réelle, qui a comparé la force du lien entre relations sociales et survie à celle d'autres facteurs de risque connus. La traduction en cigarettes, elle, est une commodité de communication — pas un résultat."},
{t:"p", x:"Commençons par distinguer deux choses que le mot recouvre et qui ne corrèlent que faiblement."},
{t:"def", mot:"Isolement objectif", x:"Le nombre et la fréquence réels de contacts sociaux. Se mesure en comptant."},
{t:"def", mot:"Solitude ressentie", x:"L'écart douloureux entre les relations qu'on a et celles qu'on voudrait. Se mesure en demandant. On peut être très entouré et très seul, et l'inverse."},
{t:"h", x:"Ce qui est établi"},
{t:"p", x:"Le lien entre faiblesse des relations sociales et mortalité est robuste, retrouvé dans de nombreuses cohortes, et de taille comparable à plusieurs facteurs de risque classiques. Le lien avec la dépression et l'anxiété est également net, dans les deux sens."},
{t:"p", x:"Les mécanismes proposés sont pluriels, et ils ne s'excluent pas : moins de surveillance et d'incitation à se soigner, plus de comportements à risque, stress chronique avec ses effets physiologiques, et moins de ressources en cas de problème."},
{t:"h", x:"Ce qui est contesté"},
{t:"p", x:"La taille réelle de l'effet causal, pour la raison habituelle : la mauvaise santé isole. Quelqu'un qui perd en mobilité, en revenus ou en énergie voit ses relations se réduire — la flèche va aussi dans ce sens, et les études observationnelles ne peuvent pas les séparer."},
{t:"p", x:"Les travaux qui mesurent la solitude des années avant l'issue de santé réduisent ce problème sans l'éliminer, et ils trouvent des effets plus petits que les estimations brutes. C'est le schéma qu'on retrouve partout dans ce cours : plus le protocole est serré, plus l'effet rétrécit — sans disparaître."},
{t:"h", x:"Ce qui marche pour y remédier, et c'est contre-intuitif"},
{t:"p", x:"La réponse qui vient spontanément est d'augmenter le contact : clubs, activités, mises en relation. Une synthèse des interventions a comparé quatre familles d'approches, et le classement surprend."},
{t:"num", items:[
  "Travailler sur les pensées sociales inadaptées — l'anticipation du rejet, l'interprétation hostile d'un silence, la certitude d'ennuyer — donne les meilleurs résultats.",
  "Améliorer les compétences sociales vient ensuite.",
  "Augmenter le soutien social disponible vient après.",
  "Multiplier les occasions de contact arrive en dernier, avec les effets les plus faibles."
]},
{t:"p", x:"Le mécanisme proposé est cohérent avec tout ce qu'on a vu : quelqu'un de très seul interprète les signaux sociaux ambigus de façon plus menaçante, ce qui le fait se retirer, ce qui confirme sa lecture. C'est une boucle, et on la casse plus efficacement sur l'interprétation que sur le volume de contacts."},
{t:"verdict", s:"etabli", x:"L'isolement social est un facteur de risque pour la santé", d:"retrouvé dans de nombreuses cohortes, avec des effets comparables à plusieurs facteurs de risque reconnus."},
{t:"verdict", s:"conteste", x:"La solitude équivaut à quinze cigarettes par jour", d:"traduction journalistique d'une comparaison de tailles d'effet entre littératures différentes ; la part causale est surestimée par la causalité inverse."},
{t:"verdict", s:"etabli", x:"Les interventions sur les pensées sociales font mieux que l'augmentation des contacts", d:"classement retrouvé en méta-analyse des interventions."},
{t:"key", x:"Mettre quelqu'un de très seul dans un groupe n'est pas la meilleure intervention, et c'est pourtant toujours la première proposée. Ce qui bloque n'est pas le nombre d'occasions, c'est ce que la personne anticipe avant d'y aller."}
],

"11.4": [
{t:"ex", titre:"L'exemple d'abord", x:"Deux personnes traversent la même période difficile. La première reçoit beaucoup d'aide concrète de son entourage. La seconde en reçoit peu, mais est convaincue qu'elle pourrait en obtenir si elle demandait. Six mois plus tard, c'est la seconde qui va le mieux."},
{t:"p", x:"Ce résultat est l'un des plus répliqués de la littérature sur le soutien social, et il est systématiquement contre-intuitif pour ceux qui le découvrent."},
{t:"def", mot:"Soutien perçu", x:"La conviction qu'on pourrait compter sur quelqu'un en cas de besoin. Elle prédit la santé et le bien-être mieux que le soutien effectivement reçu."},
{t:"def", mot:"Soutien reçu", x:"L'aide concrètement apportée, mesurée en actes. Son lien avec le bien-être est faible, et parfois négatif."},
{t:"h", x:"Pourquoi recevoir peut coûter"},
{t:"p", x:"L'explication tient en trois coûts, qui s'additionnent."},
{t:"li", items:[
  "Le coût pour l'estime de soi : être aidé signale qu'on n'y arrivait pas seul.",
  "La dette : une aide crée une obligation, et donc un déséquilibre dans la relation. Tu reconnais la réciprocité de la leçon 10.5, vue depuis l'autre bout.",
  "La confirmation de la gravité : si les autres se mobilisent, c'est que la situation est bien aussi grave que je le craignais."
]},
{t:"p", x:"D'où un résultat pratique qui a un nom : le soutien invisible. Dans des études sur des couples dont l'un passait un examen difficile, l'aide la plus efficace était celle que le bénéficiaire ne percevait pas comme de l'aide — le partenaire s'occupait des courses sans en parler, allégeait une contrainte sans la nommer. Quand le soutien était explicite et visible, la détresse du bénéficiaire augmentait."},
{t:"p", x:"Ça ne veut pas dire qu'il faut aider en cachette. Ça veut dire qu'un soutien qui souligne l'incapacité de l'autre produit un effet inverse de celui qu'on cherche, et que la formulation compte autant que l'acte."},
{t:"h", x:"Le résultat le plus utile du module"},
{t:"p", x:"Il ne porte pas sur les mauvaises nouvelles mais sur les bonnes. Une série de travaux a montré que la façon dont un partenaire réagit à vos réussites prédit mieux la qualité et la durée de la relation que sa façon de réagir à vos difficultés."},
{t:"tab", head:["Réaction à une bonne nouvelle", "Exemple", "Effet sur la relation"], rows:[
  ["Active et constructive", "pose des questions, fait raconter, se réjouit visiblement", "nettement positif"],
  ["Passive et constructive", "« c'est super » puis passe à autre chose", "neutre à négatif"],
  ["Active et destructive", "souligne aussitôt les risques et les inconvénients", "négatif"],
  ["Passive et destructive", "change de sujet, ne relève pas", "le plus négatif"]
]},
{t:"p", x:"Le troisième cas mérite une alerte, parce qu'il se déguise en bienveillance. Répondre à une bonne nouvelle par la liste des difficultés à venir se présente comme du réalisme et de la protection. Mesuré, c'est l'une des réactions les plus coûteuses pour le lien."},
{t:"verdict", s:"etabli", x:"Le soutien perçu prédit mieux que le soutien reçu", d:"résultat ancien et très répliqué, qui a longtemps désorienté le champ."},
{t:"verdict", s:"etabli", x:"La réaction aux bonnes nouvelles prédit la qualité de la relation", d:"démontré en laboratoire et en suivi longitudinal de couples."},
{t:"key", x:"Ce qui tient un lien n'est pas la quantité d'aide fournie dans les mauvais moments, c'est la certitude qu'elle serait là — et la façon dont tu accueilles ce qui va bien. Le réalisme protecteur devant une bonne nouvelle est, mesuré, l'une des réponses les plus coûteuses."}
],

/* ───────────────────────── MODULE 12 ──────────────────────── */

"12.1": [
{t:"ex", titre:"L'exemple d'abord", x:"On donne à des participants un tableau de chiffres et une question de comparaison qui demande un petit calcul — un classique où la bonne réponse contredit l'impression immédiate. Dans une version, le tableau porte sur l'efficacité d'une crème pour la peau. Dans l'autre, exactement les mêmes chiffres portent sur l'effet d'une loi sur le port d'armes."},
{t:"p", x:"Sur la crème, le résultat est ce qu'on attend : les participants les plus à l'aise avec les chiffres réussissent mieux. Sur les armes, quelque chose se casse. Quand le résultat du calcul contredit la position politique du participant, les plus compétents ne font pas mieux — et dans certaines analyses ils font pire que les moins compétents."},
{t:"def", mot:"Raisonnement motivé", x:"Le fait de mobiliser ses capacités de raisonnement au service d'une conclusion déjà choisie, plutôt que pour trouver la conclusion juste. Ce n'est pas de la malhonnêteté consciente : la personne a le sentiment de raisonner normalement."},
{t:"h", x:"Pourquoi c'est la leçon la plus désagréable du cours"},
{t:"p", x:"Parce qu'elle dit que la compétence n'est pas une protection. Dans ce modèle, être bon en argumentation, en statistiques ou en débat ne te rapproche pas de la vérité quand ton identité est en jeu : ça te donne de meilleurs outils pour démolir ce qui te dérange et pour sauver ce qui t'arrange."},
{t:"p", x:"Et le mécanisme proposé est rationnel à sa façon. Sur un sujet identitaire, se tromper avec son camp coûte beaucoup moins cher que d'avoir raison contre lui. L'incitation individuelle pousse donc à la loyauté plutôt qu'à l'exactitude, même chez quelqu'un de parfaitement capable de faire le calcul."},
{t:"h", x:"La contestation, qu'il faut donner"},
{t:"p", x:"Ce serait trahir le cours que de présenter ça comme réglé. Une autre ligne de recherche soutient que la réflexion améliore généralement l'exactitude, y compris sur les sujets politisés, et que l'effet d'aggravation par la compétence est moins robuste qu'annoncé."},
{t:"p", x:"Dans cette lecture, ce qui fait croire des choses fausses n'est pas un excès de motivation partisane mais un défaut de réflexion — les gens qui adhèrent le plus aux fausses informations sont aussi ceux qui répondent le plus vite et vérifient le moins. Les deux camps disposent de données, et le débat porte sur le poids relatif des deux mécanismes, pas sur l'existence de l'un ou de l'autre."},
{t:"h", x:"Ce qui est solide dans les deux lectures"},
{t:"li", items:[
  "L'asymétrie d'examen : on soumet à un contrôle sévère ce qui nous dérange, et on laisse passer ce qui nous arrange. C'est le mécanisme le plus documenté, et le plus facile à repérer sur soi.",
  "La recherche sélective : on cherche davantage d'informations du côté qui confirme.",
  "La confusion entre cohérence et vérité : une position bien argumentée paraît vraie, et on a vu à la leçon 8.3 que la fabrication d'arguments cohérents après coup est le mode de fonctionnement par défaut."
]},
{t:"h", x:"Ce que ça implique pour toi"},
{t:"p", x:"Tu aimes le débat argumenté et tu es bon à ça. Dans ce domaine précis, c'est un facteur de risque, pas une garantie — et la parade n'est pas de mieux argumenter."},
{t:"p", x:"Les deux gestes qui ont une efficacité documentée sont modestes et pénibles. Le premier : chercher activement les raisons pour lesquelles tu aurais tort, avant de conclure, comme à la leçon 6.6. Le second : vérifier que tu appliques le même niveau d'exigence à l'étude qui te plaît qu'à celle qui te contrarie. Ce cours t'a donné une grille en cinq questions ; le test est de savoir si tu la sors aussi vite dans les deux cas."},
{t:"verdict", s:"etabli", x:"L'asymétrie d'examen critique", d:"on évalue plus sévèrement les arguments contraires à sa position ; très répliqué, y compris chez des experts."},
{t:"verdict", s:"conteste", x:"Plus on est compétent, plus on se trompe sur les sujets identitaires", d:"résultat réel et frappant, mais d'autres travaux trouvent que la réflexion améliore l'exactitude. Le débat porte sur le poids des deux mécanismes."},
{t:"key", x:"Ta compétence ne te protège pas, elle t'arme — et les deux camps s'arment. Le seul contrôle praticable est de vérifier que tu exiges autant d'une étude qui te plaît que d'une étude qui te dérange."}
],

"12.2": [
{t:"ex", titre:"L'exemple d'abord", x:"Une famille mange son chien, mort accidentellement, après l'avoir cuisiné proprement. Personne n'est blessé, personne ne le saura, aucun préjudice n'est causé. La quasi-totalité des gens jugent ça mal. Puis, quand on leur demande pourquoi, ils cherchent — et beaucoup finissent par dire qu'ils ne savent pas l'expliquer, mais que c'est mal quand même."},
{t:"def", mot:"Stupéfaction morale", x:"L'état d'un sujet qui maintient fermement un jugement moral après avoir épuisé tous ses arguments. Il ne change pas d'avis : il constate qu'il n'a plus d'arguments."},
{t:"p", x:"C'est le point de départ de la thèse de Haidt, et c'est la partie la plus solide de son travail. Le jugement moral arriverait d'abord, par intuition rapide, et le raisonnement viendrait ensuite, pour le justifier. Sa métaphore est celle du cavalier et de l'éléphant : le raisonnement est le cavalier, qui croit diriger, et qui passe le plus clair de son temps à expliquer après coup là où l'éléphant a décidé d'aller."},
{t:"p", x:"Tu reconnais la confabulation de la leçon 8.3, appliquée à la morale. Les deux littératures se renforcent, et c'est ce qui rend cette partie-là difficile à contester."},
{t:"h", x:"La taxonomie, qui est la partie fragile"},
{t:"p", x:"La suite est plus connue et moins solide : la théorie des fondements moraux, qui propose que les intuitions se rangent en cinq ou six familles — soin, équité, loyauté, autorité, pureté, et plus tard liberté. Le résultat descriptif qui a fait sa célébrité : les progressistes s'appuieraient surtout sur soin et équité, les conservateurs mobiliseraient les cinq de façon plus équilibrée."},
{t:"p", x:"Trois critiques sérieuses, à connaître si tu veux en discuter sans te faire désarçonner."},
{t:"num", items:[
  "La structure en cinq facteurs se réplique mal hors des États-Unis. Dans plusieurs pays, les analyses retrouvent deux grandes dimensions plutôt que cinq : les fondements individualisants — soin et équité — et les fondements liants — loyauté, autorité, pureté.",
  "Certains items contiennent déjà la position politique qu'ils sont censés prédire. Si une question demande l'accord avec une formulation connotée, le questionnaire mesure en partie l'idéologie qu'il prétend expliquer.",
  "La validité prédictive au-delà de l'idéologie est faible. Une fois qu'on sait où quelqu'un se situe politiquement, connaître son profil de fondements n'ajoute pas grand-chose."
]},
{t:"h", x:"Ce qu'il faut garder"},
{t:"p", x:"Le constat central est robuste, et la taxonomie qui l'habille l'est beaucoup moins. C'est une situation fréquente en psychologie, et elle demande de dissocier deux affirmations qu'on reçoit toujours ensemble."},
{t:"p", x:"Pour toi, qui lis de la philosophie morale, la conséquence est précise et elle n'est pas celle qu'on en tire d'habitude. Que le jugement précède le raisonnement est une thèse descriptive sur le fonctionnement psychologique. Elle ne dit rien sur la validité des jugements moraux — c'est le passage de l'être au devoir-être, et le confondre est une faute de raisonnement, pas un résultat."},
{t:"p", x:"Ce qu'elle dit, en revanche, c'est que l'argumentation frontale déplace rarement un jugement moral, parce qu'elle s'adresse au cavalier. Ça prépare la leçon 12.5, où l'on verra ce qui s'adresse à l'éléphant."},
{t:"verdict", s:"etabli", x:"Le jugement moral précède souvent le raisonnement", d:"démontré par la stupéfaction morale et convergent avec les travaux sur la confabulation."},
{t:"verdict", s:"conteste", x:"Les cinq fondements moraux", d:"structure factorielle qui se réplique mal hors des États-Unis, items partiellement contaminés par l'idéologie, et faible apport prédictif au-delà du positionnement politique."},
{t:"key", x:"Sépare les deux affirmations : que l'intuition vienne d'abord est solide, que les intuitions se rangent en cinq familles l'est beaucoup moins. Et aucune des deux ne dit quoi que ce soit sur ce qui est moralement vrai."}
],

"12.3": [
{t:"ex", titre:"L'exemple d'abord", x:"L'idée est devenue une évidence : les algorithmes nous enfermeraient chacun dans une bulle d'informations conformes à nos opinions, et cet enfermement expliquerait la polarisation politique. C'est l'un des rares diagnostics sur lequel tous les camps s'accordent, ce qui devrait déjà éveiller la méfiance."},
{t:"h", x:"Ce que mesurent les données d'exposition"},
{t:"p", x:"Les travaux qui suivent la consommation réelle d'information — en observant les historiques de navigation plutôt qu'en interrogeant les gens — trouvent quelque chose d'inattendu. En moyenne, les régimes d'information en ligne sont **plus** variés que les régimes hors ligne, et les gros consommateurs d'actualité en ligne sont ceux dont la diète est la plus diversifiée."},
{t:"p", x:"L'explication est simple une fois énoncée : hors ligne, on lit un journal et on regarde une chaîne. En ligne, on tombe sur des liens partagés, des citations critiques, des reprises par des gens qui ne sont pas d'accord. L'exposition croisée augmente, même quand elle est hostile."},
{t:"p", x:"Ce qui est en revanche bien documenté, c'est que la consommation la plus extrême et la plus homogène se concentre sur une petite minorité d'utilisateurs très actifs, qui produisent une part considérable du contenu visible. La bulle existe, elle est intense, et elle est minoritaire."},
{t:"h", x:"Les expériences à grande échelle"},
{t:"p", x:"En 2023, une série d'études conduites avec l'accès aux systèmes d'une grande plateforme a fait ce que personne ne pouvait faire avant : modifier réellement l'algorithme pour des dizaines de milliers d'utilisateurs volontaires, pendant trois mois, puis mesurer."},
{t:"p", x:"Trois interventions ont été testées : revenir à un fil strictement chronologique, réduire fortement le contenu venant de sources politiquement proches, et supprimer les repartages. Les trois ont nettement changé ce que les gens voyaient. Aucune n'a modifié de façon détectable leur polarisation affective, leurs attitudes politiques ou leurs connaissances politiques."},
{t:"p", x:"Ces résultats ont leurs limites — trois mois, des volontaires, une période électorale particulière — et elles ont été discutées. Mais c'est le dispositif le plus proche d'une expérience qu'on ait obtenu sur cette question, et il ne soutient pas le récit standard."},
{t:"h", x:"Ce qui monte vraiment"},
{t:"def", mot:"Polarisation affective", x:"L'hostilité envers les partisans du camp adverse, indépendamment de l'écart entre les positions défendues. On peut être d'accord sur presque tout et se détester, et c'est ce qui augmente."},
{t:"p", x:"Aux États-Unis, cette polarisation-là augmente nettement depuis quarante ans. Mais une comparaison internationale sur une douzaine de démocraties montre qu'elle ne monte pas partout : elle a reculé dans plusieurs pays sur la même période. Un phénomène qui monte dans un pays et baisse dans un autre ne peut pas être expliqué par une technologie présente dans les deux."},
{t:"h", x:"Et exposer les gens à l'autre camp ?"},
{t:"p", x:"Une expérience a payé des utilisateurs pour suivre pendant un mois un compte automatique qui relayait des messages du camp opposé. Résultat : les participants sont devenus **plus** extrêmes dans leurs positions initiales, l'effet étant plus marqué chez les conservateurs."},
{t:"p", x:"Ce qui condamne la solution évidente. Exposer n'est pas convaincre : l'exposition à des messages adverses, sans relation ni contexte, fonctionne surtout comme un rappel de qui est l'ennemi."},
{t:"verdict", s:"conteste", x:"Les bulles de filtres expliquent la polarisation", d:"l'exposition croisée mesurée est souvent plus forte en ligne qu'hors ligne, et modifier l'algorithme pendant trois mois n'a pas modifié les attitudes."},
{t:"verdict", s:"etabli", x:"La polarisation affective augmente aux États-Unis", d:"mesurée sur quarante ans — mais elle recule dans plusieurs autres démocraties sur la même période."},
{t:"verdict", s:"effondre", x:"Il suffit d'exposer les gens aux arguments d'en face", d:"une exposition d'un mois a renforcé les positions initiales au lieu de les modérer."},
{t:"key", x:"Un phénomène qui monte aux États-Unis et baisse en Allemagne sur la même période ne s'explique pas par une plateforme mondiale. Quand une explication technologique séduit tous les camps, demande d'abord si le phénomène varie là où la technologie ne varie pas."}
],

"12.4": [
{t:"ex", titre:"L'exemple d'abord", x:"L'affirmation est l'une des plus déprimantes de la décennie 2010 : corriger une information fausse auprès de quelqu'un dont elle sert le camp ne le fait pas changer d'avis, et peut même renforcer sa croyance. Si c'est vrai, le travail de vérification est non seulement inutile, il est nuisible."},
{t:"p", x:"L'idée vient d'une étude de 2010 qui avait trouvé ce renforcement sur quelques sujets politiques. Elle a été reprise partout, elle a découragé des rédactions entières, et elle est devenue un lieu commun."},
{t:"def", mot:"Effet de retour de flamme", x:"Le renforcement d'une croyance fausse par sa correction. À ne pas confondre avec le simple fait de ne pas changer d'avis, qui est banal."},
{t:"h", x:"Ce qui s'est passé ensuite"},
{t:"p", x:"Des chercheurs ont entrepris de le chercher systématiquement. Dans l'étude la plus ambitieuse, cinquante-deux sujets controversés ont été testés auprès de plus de dix mille participants, en mesurant l'effet de corrections factuelles."},
{t:"p", x:"Résultat : pas un seul cas de retour de flamme. Les corrections ont déplacé les croyances dans la bonne direction, y compris chez les partisans du camp que la correction dérangeait, y compris sur les sujets les plus clivants."},
{t:"p", x:"Et il faut saluer la suite, parce qu'elle est rare : les auteurs de l'étude d'origine ont révisé publiquement leur position, et travaillent depuis sur les conditions, beaucoup plus étroites, dans lesquelles un renforcement pourrait apparaître. C'est ce que fait une science qui marche — exactement comme Kahneman à la leçon 6.1."},
{t:"h", x:"Ce qui est vrai à la place"},
{t:"p", x:"On ne passe pas de « les corrections se retournent » à « les corrections suffisent ». Trois limites réelles ont été établies."},
{t:"num", items:[
  "L'effet est plus fort sur les croyances factuelles que sur les attitudes. Corriger quelqu'un sur un chiffre marche ; changer son vote, non. Il peut parfaitement accepter la correction et maintenir sa position, ce qui est d'ailleurs logique : une position politique repose sur des valeurs autant que sur des faits.",
  "L'effet s'estompe. Quelques semaines plus tard, une partie du terrain est reperdue, surtout si la fausse information continue de circuler.",
  "L'information corrigée continue d'influencer le raisonnement, même quand la personne sait et admet qu'elle est fausse. C'est un phénomène distinct et bien établi, qu'on appelle l'influence continue : l'information a servi à construire une explication, et retirer l'information ne retire pas l'explication, qui laisserait un trou."
]},
{t:"p", x:"Le remède pratique découle directement de ce troisième point : ne pas se contenter de démentir, mais fournir un récit de remplacement. Dire « ce n'était pas un court-circuit » laisse l'esprit sans cause ; dire « ce n'était pas un court-circuit, c'était un chauffage défectueux » fonctionne nettement mieux."},
{t:"h", x:"Le coût d'un faux résultat"},
{t:"p", x:"Cette leçon est aussi un cas d'école sur les dégâts d'une science fragile. Pendant une décennie, un résultat obtenu sur un petit échantillon a servi d'argument pour ne pas corriger les fausses informations, au motif que ce serait contre-productif. Il ne tenait pas. Les erreurs de la littérature ne restent pas dans la littérature."},
{t:"verdict", s:"effondre", x:"L'effet de retour de flamme", d:"non retrouvé sur cinquante-deux sujets auprès de plus de dix mille participants ; les corrections fonctionnent, y compris chez les partisans."},
{t:"verdict", s:"etabli", x:"L'effet d'influence continue", d:"une information démentie continue d'orienter le raisonnement ; fournir une explication de remplacement réduit nettement le phénomène."},
{t:"key", x:"Corriger marche — c'est la bonne nouvelle que personne n'a relayée. Mais ne démens jamais sans remplacer : un trou dans une explication se rebouche tout seul, avec ce qu'il y avait avant."}
],

"12.5": [
{t:"ex", titre:"L'exemple d'abord", x:"Un militant frappe à une porte et engage la conversation sur un sujet clivant. Il ne cite aucune statistique et ne cherche pas à convaincre. Il pose des questions, écoute vraiment, et demande à la personne si elle a déjà vécu une situation où elle a été jugée pour ce qu'elle était. Puis il relie, doucement, cette expérience au sujet. La conversation dure une dizaine de minutes."},
{t:"p", x:"Mesuré en essai randomisé, préenregistré, avec un suivi sur plusieurs mois : cet échange réduit durablement les préjugés, d'une ampleur comparable à plusieurs années d'évolution des opinions moyennes dans la population. C'est l'un des rares effets de persuasion importants et solides qu'on connaisse."},
{t:"p", x:"Les ingrédients identifiés sont précis : poser des questions ouvertes, écouter sans contredire, demander un souvenir personnel analogue, ne porter aucun jugement, et laisser la personne faire elle-même le rapprochement. Autrement dit, tout l'inverse d'un débat."},
{t:"h", x:"L'illusion de profondeur explicative"},
{t:"p", x:"Deuxième technique, plus rapide et utilisable en conversation ordinaire. Elle part d'un constat amusant : demande à quelqu'un s'il sait comment fonctionne une fermeture éclair. Il dit oui. Demande-lui de l'expliquer en détail, étape par étape. Il découvre qu'il ne sait pas, et sa confiance chute immédiatement."},
{t:"def", mot:"Illusion de profondeur explicative", x:"Le fait de croire comprendre un mécanisme beaucoup mieux qu'on ne le comprend réellement. Elle s'effondre dès qu'on tente l'explication détaillée, et elle est spécifique aux mécanismes — on ne l'observe pas pour les faits ou les récits."},
{t:"p", x:"Appliquée à la politique, elle donne un résultat remarquable. Demander à quelqu'un de **justifier** sa position — pourquoi es-tu pour ou contre — ne modère rien du tout : il récite ses raisons et se renforce. Demander d'**expliquer mécaniquement** comment la mesure produirait ses effets, étape par étape, réduit l'extrémisme de la position et la confiance qui l'accompagne."},
{t:"p", x:"La différence entre les deux questions est tout. « Pourquoi ? » appelle les valeurs et la loyauté. « Comment ça marcherait, concrètement, de A à Z ? » appelle un modèle causal qu'on n'a presque jamais."},
{t:"h", x:"Les deux autres approches qui ont des données"},
{t:"li", items:[
  "L'inoculation : exposer les gens aux techniques de manipulation — le faux expert, la fausse symétrie, le catastrophisme — avant qu'ils ne les rencontrent. Ça les rend plus résistants ensuite, y compris face à des messages qu'ils n'avaient jamais vus. L'effet est réel et s'estompe avec le temps, comme un vaccin qui demanderait des rappels.",
  "Le dialogue prolongé et personnalisé. Des travaux très récents ont montré que des conversations avec un système d'intelligence artificielle, capable de répondre aux arguments précis de chaque personne plutôt qu'à une version générique, réduisaient durablement l'adhésion à des croyances conspirationnistes. Le résultat est récent et demande confirmation, mais il va dans le même sens que tout le reste : ce qui marche est l'échange ajusté, pas le message diffusé."
]},
{t:"h", x:"Ce que ça change pour toi"},
{t:"p", x:"Tu aimes le débat argumenté, et ce module t'a dit deux choses désagréables : ta compétence t'arme sans te protéger (12.1), et l'argumentation s'adresse au cavalier pendant que l'éléphant décide (12.2)."},
{t:"p", x:"La conclusion n'est pas d'arrêter d'argumenter — un échange d'arguments a de la valeur en soi, et c'est un choix légitime de le préférer à l'efficacité. C'est de ne pas confondre les deux objectifs. Si tu veux gagner un débat, argumente. Si tu veux que quelqu'un change d'avis, pose des questions, demande une expérience personnelle, et fais expliquer le mécanisme plutôt que les raisons."},
{t:"verdict", s:"etabli", x:"L'illusion de profondeur explicative", d:"très répliquée ; demander d'expliquer un mécanisme réduit la confiance et l'extrémisme, alors que demander de justifier ne les réduit pas."},
{t:"verdict", s:"etabli", x:"La conversation approfondie réduit durablement les préjugés", d:"essai randomisé préenregistré avec effet maintenu à plusieurs mois — l'un des rares effets de persuasion importants et bien établis."},
{t:"verdict", s:"conteste", x:"Le dialogue avec une IA réduit les croyances conspirationnistes", d:"résultat récent et frappant, dans la bonne direction, mais qui demande des réplications indépendantes."},
{t:"key", x:"« Pourquoi es-tu pour ? » renforce. « Comment ça marcherait exactement, étape par étape ? » modère. La différence entre ces deux questions est le résultat le plus utilisable de tout le bloc D."}
]

};
