/* ═══════════════════════════════════════════════════════════════
   LA TROUSSE — fiches de médecine générale
   Information générale. Ne remplace pas un avis médical.
   Blocs : h p li num def tab alerte key
   ═══════════════════════════════════════════════════════════════ */

window.FICHES = [

/* ─────────────────────── URGENCES ─────────────────────── */
{
id:"urgences", cat:"À lire en premier", titre:"Quand appeler, et qui",
resume:"Les numéros, et la liste des signes qui ne souffrent aucune attente.",
blocs:[
{t:"h", x:"Les numéros"},
{t:"tab", head:["Numéro", "Pour quoi"], rows:[
  ["15", "SAMU — urgence médicale, régulation par un médecin"],
  ["112", "numéro d'urgence européen, depuis n'importe quel pays de l'UE"],
  ["18", "pompiers — accident, incendie, secours"],
  ["114", "urgences par SMS ou visio, pour les personnes sourdes ou malentendantes"],
  ["116 117", "médecin de garde, pour ce qui ne peut pas attendre mais n'est pas vital"],
  ["3114", "prévention du suicide, gratuit, 24 h/24, par un professionnel"],
  ["01 45 42 59 59", "centre antipoison (Paris) — un centre existe dans chaque région"]
]},
{t:"p", x:"Appeler le 15 n'est jamais « déranger pour rien » : au bout du fil il y a un médecin régulateur dont le métier est précisément de trier. S'il juge que ça peut attendre, il le dit et oriente. Le vrai risque n'est pas d'appeler à tort, il est d'hésiter."},
{t:"alerte", niveau:"15", titre:"Appeler le 15 immédiatement", items:[
  "Douleur dans la poitrine, serrante, en étau, qui dure plus de quelques minutes — surtout si elle part dans le bras, la mâchoire ou le dos.",
  "Difficulté à respirer qui s'installe, impossibilité de parler en phrases complètes, lèvres ou extrémités bleutées.",
  "Signes d'AVC, même s'ils disparaissent : bouche ou visage qui tombe d'un côté, bras qui ne tient plus, parole déformée ou incompréhensible. L'acronyme français est VITE — Visage, Incapacité, Trouble de la parole, En urgence.",
  "Perte de connaissance, convulsion, confusion brutale.",
  "Taches rouges ou violacées qui ne s'effacent pas quand on appuie dessus avec un verre, surtout avec de la fièvre. C'est un purpura, et c'est une urgence vitale.",
  "Hémorragie qu'on n'arrive pas à arrêter par compression.",
  "Réaction allergique générale : gonflement du visage ou de la langue, urticaire sur tout le corps, gêne respiratoire, malaise.",
  "Idées suicidaires avec un plan ou des moyens à disposition — ou le 3114."
]},
{t:"h", x:"Ce qu'on vous demandera"},
{t:"num", items:[
  "Où vous êtes, précisément, avec l'étage et le code d'entrée.",
  "Ce qui se passe, en une phrase.",
  "L'âge de la personne, si elle est consciente, si elle respire.",
  "Les antécédents et les traitements en cours, si vous les connaissez."
]},
{t:"key", x:"Ne raccrochez jamais le premier : le régulateur donne des consignes pendant que les secours partent, et ces consignes font parfois la différence."}
]},

/* ─────────────────────── TÊTE ─────────────────────── */
{
id:"cephalee", cat:"Tête", titre:"Le mal de tête ordinaire",
resume:"Céphalée de tension : la plus fréquente de toutes, et le piège de l'abus d'antalgiques.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"La céphalée dite de tension est le mal de tête le plus répandu. Le mécanisme n'est pas entièrement élucidé : on retient une sensibilisation des voies de la douleur, associée à des tensions des muscles du crâne, du cou et des mâchoires."},
{t:"h", x:"Comment ça se reconnaît"},
{t:"tab", head:["", "Céphalée de tension", "Migraine"], rows:[
  ["Siège", "les deux côtés, en casque ou en étau", "souvent un seul côté"],
  ["Type", "pression, serrement, non pulsatile", "pulsatile, battante"],
  ["Intensité", "légère à modérée, on continue ses activités", "modérée à sévère, on cherche à s'arrêter"],
  ["À l'effort", "pas aggravée", "aggravée par l'effort, même monter un escalier"],
  ["Autour", "pas de nausée", "nausée, gêne à la lumière et au bruit"]
]},
{t:"h", x:"Ce qui aide"},
{t:"li", items:[
  "Un antalgique simple, ponctuellement — paracétamol en première intention. Voir la fiche sur les deux antalgiques.",
  "Régulariser le sommeil : l'heure de lever fixe est le levier principal.",
  "Bouger. L'activité physique régulière réduit la fréquence des céphalées de tension, avec un niveau de preuve correct.",
  "Boire. La déshydratation est un déclencheur banal et sous-estimé.",
  "Travailler la posture et les pauses d'écran si les épisodes suivent les journées de bureau."
]},
{t:"h", x:"Le piège à connaître absolument"},
{t:"def", mot:"Céphalée par abus médicamenteux", x:"Un mal de tête chronique entretenu par les antalgiques censés le soulager. Il s'installe quand on prend des antalgiques trop souvent, et il disparaît en les arrêtant — au prix de quelques semaines difficiles."},
{t:"p", x:"Les seuils retenus : plus de quinze jours par mois pour le paracétamol ou l'aspirine seuls, plus de dix jours par mois pour les anti-inflammatoires, les triptans, la codéine ou les associations contenant de la caféine."},
{t:"p", x:"C'est une cause très fréquente de mal de tête quotidien, et elle est presque toujours ignorée par la personne concernée : elle a l'impression d'avoir de plus en plus mal, donc de devoir prendre de plus en plus. Si vous prenez quelque chose plus de deux jours par semaine depuis des mois, parlez-en à un médecin — c'est la première hypothèse à écarter."},
{t:"alerte", titre:"Consulter sans attendre", items:[
  "Mal de tête d'apparition brutale, maximal en moins d'une minute, comme un coup — appeler le 15.",
  "Fièvre avec raideur de la nuque, gêne à la lumière, ou taches qui ne s'effacent pas à la pression — 15.",
  "Tout signe neurologique associé : faiblesse d'un côté, trouble de la parole, de la vue, confusion — 15.",
  "Après un traumatisme crânien, même différé de quelques jours.",
  "Un premier mal de tête de ce type après 50 ans, ou qui change de caractère.",
  "Une céphalée qui s'aggrave progressivement de semaine en semaine, qui réveille la nuit, ou qui est déclenchée par la toux, l'effort ou le changement de position.",
  "Chez une personne immunodéprimée, enceinte, ou avec un cancer connu."
]},
{t:"key", x:"Le mal de tête banal est bilatéral, en pression, non aggravé par l'effort, et il cède. Ce qui doit alerter n'est pas l'intensité seule : c'est la brutalité, la nouveauté, ou l'association à autre chose."}
]},

{
id:"migraine", cat:"Tête", titre:"La migraine",
resume:"Une maladie neurologique, pas un gros mal de tête. Traiter tôt change tout.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Une maladie neurologique fréquente — environ une personne sur dix, trois fois plus de femmes que d'hommes — et largement sous-diagnostiquée. Le mécanisme implique une hyperexcitabilité des neurones et l'activation du système trigémino-vasculaire, avec libération de médiateurs dont le CGRP, cible des traitements récents."},
{t:"p", x:"Ce n'est pas un mal de tête plus fort que les autres : c'est une crise, avec des phases, et la douleur n'en est qu'une."},
{t:"h", x:"Les quatre phases"},
{t:"num", items:[
  "Les prodromes, de quelques heures à deux jours avant : bâillements, fatigue, irritabilité, envie de sucre, nuque raide. Beaucoup de gens les prennent pour des déclencheurs — c'est l'inverse, la crise a déjà commencé. C'est pourquoi le chocolat est injustement accusé : l'envie de chocolat est souvent un prodrome.",
  "L'aura, chez environ un migraineux sur cinq à trois : le plus souvent visuelle — une tache scintillante qui grandit, un zigzag lumineux —, parfois des fourmillements qui remontent le long d'un bras. Elle dure moins d'une heure et précède la douleur.",
  "La céphalée : unilatérale, pulsatile, modérée à sévère, aggravée par l'effort, avec nausées et gêne à la lumière et au bruit. De quatre heures à trois jours sans traitement.",
  "La phase de récupération : épuisement, difficulté à se concentrer, pendant un à deux jours."
]},
{t:"h", x:"Ce qui aide pendant la crise"},
{t:"li", items:[
  "Traiter tôt. C'est le point le plus important : un traitement pris dès le début de la douleur est bien plus efficace que le même traitement pris deux heures plus tard, parce que la sensibilisation centrale s'installe entre-temps.",
  "En première intention, un anti-inflammatoire ou du paracétamol à dose correcte.",
  "Si insuffisant, les triptans, sur prescription — ils agissent sur le mécanisme de la crise, pas seulement sur la douleur.",
  "S'isoler dans le calme et l'obscurité, et dormir si possible : le sommeil interrompt beaucoup de crises."
]},
{t:"h", x:"Le traitement de fond"},
{t:"p", x:"À partir d'environ quatre crises par mois, ou de crises invalidantes, il existe des traitements préventifs quotidiens, et depuis quelques années des anticorps ciblant le CGRP pour les formes sévères. L'objectif n'est pas zéro crise : c'est réduire la fréquence de moitié. Si vous êtes à ce stade, c'est une consultation, pas de l'automédication."},
{t:"p", x:"Tenir un agenda des crises — date, durée, traitement pris, efficacité — est ce qui permet au médecin de décider. C'est banal et c'est ce qui manque presque toujours en consultation."},
{t:"alerte", titre:"Consulter sans attendre", items:[
  "Une aura qui dure plus d'une heure, ou qui touche la motricité (faiblesse d'un membre) — il faut éliminer un AVC, surtout s'il s'agit d'une première fois : 15.",
  "Une céphalée brutale en coup de tonnerre, même chez un migraineux connu — 15.",
  "Une crise qui dure plus de 72 heures sans répit.",
  "Un changement de votre schéma habituel de crises.",
  "Et le seuil d'abus de la fiche précédente : triptans ou anti-inflammatoires plus de dix jours par mois."
]},
{t:"key", x:"Deux choses changent le pronostic : traiter dès les premières minutes de douleur, et compter ses crises pour savoir si un traitement de fond est justifié."}
]},

/* ─────────────────── OS, MUSCLES, ARTICULATIONS ─────────────────── */
{
id:"entorse", cat:"Os et muscles", titre:"L'entorse de cheville",
resume:"Faut-il une radio ? Les critères d'Ottawa répondent en trente secondes. Et le repos complet est une erreur.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Un étirement ou une déchirure des ligaments, le plus souvent ceux de la face externe de la cheville, après un mouvement du pied vers l'intérieur. Le ligament le plus touché est le talo-fibulaire antérieur, juste en avant et en dessous de la malléole externe."},
{t:"h", x:"Faut-il une radio ?"},
{t:"p", x:"Il existe une règle de décision validée, utilisée dans le monde entier, qui évite une radio sur trois sans manquer de fracture. On l'appelle les critères d'Ottawa. Une radio est justifiée s'il y a une douleur de la région malléolaire **et** au moins un des deux éléments suivants."},
{t:"num", items:[
  "Une douleur à la palpation du bord postérieur ou de la pointe de l'une des deux malléoles, sur les six derniers centimètres de l'os.",
  "L'impossibilité de faire quatre pas en appui, immédiatement après le traumatisme et au moment de l'examen — même en boitant."
]},
{t:"p", x:"Si vous pouvez marcher quatre pas et que la douleur siège sur les parties molles plutôt que sur l'os, une fracture est très improbable. Ces critères ont été conçus pour être sensibles : ils ratent très peu de fractures, au prix de quelques radios inutiles."},
{t:"h", x:"Ce qui aide : le protocole a changé"},
{t:"p", x:"L'ancien acronyme recommandait le repos et la glace. Les recommandations actuelles insistent sur l'inverse : protéger quelques jours, puis **remettre en charge tôt**. Un repos prolongé affaiblit le muscle, désorganise la proprioception et allonge la récupération."},
{t:"li", items:[
  "Les deux ou trois premiers jours : protéger — éviter ce qui réveille la douleur —, surélever la cheville, comprimer par un bandage ou une attelle.",
  "Le froid soulage la douleur ; son effet sur la cicatrisation n'est pas démontré. Vingt minutes, jamais à même la peau.",
  "Dès que la douleur le permet, reprendre l'appui et la marche progressivement. C'est le point le plus important de la fiche.",
  "Puis la rééducation de l'équilibre — se tenir sur un pied, yeux ouverts puis fermés, sur surface instable. C'est ce qui réduit le risque de récidive, et la récidive est le vrai problème de l'entorse de cheville."
]},
{t:"h", x:"Pourquoi les anti-inflammatoires sont discutés"},
{t:"p", x:"L'inflammation n'est pas seulement un symptôme : c'est la première phase de la réparation du tissu. Les anti-inflammatoires soulagent réellement la douleur à court terme, et plusieurs recommandations récentes conseillent de ne pas en faire un usage systématique prolongé pour cette raison. Le paracétamol reste une option pour la douleur."},
{t:"alerte", titre:"Consulter", items:[
  "Impossibilité de poser le pied et de faire quatre pas.",
  "Douleur sur l'os de la malléole à la palpation, ou sur le bord externe du pied.",
  "Déformation visible, craquement au moment du traumatisme, ou gonflement très important et immédiat.",
  "Pied froid, pâle, insensible, ou fourmillements persistants.",
  "Aucune amélioration après une semaine, ou cheville qui continue de se dérober après plusieurs semaines."
]},
{t:"key", x:"Quatre pas possibles et pas de douleur sur l'os : la radio est rarement utile. Et ne restez pas au repos complet — la remise en charge précoce et le travail de l'équilibre sont ce qui évite la récidive."}
]},

{
id:"lombalgie", cat:"Os et muscles", titre:"Le mal de dos",
resume:"Rester actif, et pourquoi l'imagerie précoce fait plus de mal que de bien.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Plus de neuf lombalgies sur dix sont dites communes ou non spécifiques : aucune lésion précise n'en est responsable, et l'évolution est favorable dans la grande majorité des cas. Le terme de « lumbago » décrit la forme aiguë, avec blocage et contracture."},
{t:"h", x:"Ce qui aide"},
{t:"num", items:[
  "Rester actif. C'est la recommandation numéro un de toutes les sociétés savantes, et elle inverse ce qu'on disait il y a trente ans. Le repos au lit retarde la guérison et augmente le risque de passage à la chronicité.",
  "Continuer ou reprendre le travail dès que possible, en adaptant si besoin. L'arrêt prolongé est un facteur de mauvais pronostic, pas un traitement.",
  "Antalgiques simples si nécessaire, pour permettre de bouger — pas pour pouvoir rester immobile.",
  "La chaleur locale soulage, avec un niveau de preuve modeste mais réel.",
  "À distance de l'épisode aigu, l'activité physique régulière est ce qui prévient le mieux les récidives. Le type d'exercice compte moins que sa régularité."
]},
{t:"h", x:"Pourquoi l'imagerie précoce est déconseillée"},
{t:"p", x:"C'est le point le plus utile de cette fiche, et il est contre-intuitif. En l'absence de signe d'alerte, faire une IRM ou un scanner dans les premières semaines n'améliore pas l'évolution — et plusieurs essais montrent que les patients imagés précocement vont moins bien à distance."},
{t:"p", x:"La raison : le dos vieillit chez tout le monde, et l'image le montre. Dans des études d'imagerie chez des personnes **sans aucune douleur**, on trouve une dégénérescence discale chez une large majorité des quinquagénaires, et des protrusions discales chez une part importante des sujets asymptomatiques à tout âge. Ces anomalies sont donc des signes d'âge, pas des causes de douleur."},
{t:"p", x:"Mais un compte rendu qui parle de discopathie, de pincement et de hernie produit une image mentale de colonne abîmée, qui conduit à bouger moins, à se protéger, et à entretenir le problème. L'imagerie est précieuse quand elle est indiquée ; elle est délétère quand elle ne l'est pas."},
{t:"alerte", titre:"Consulter sans attendre", items:[
  "Perte de sensibilité de la région du périnée et de l'intérieur des cuisses, difficulté à uriner ou à retenir, associée au mal de dos : c'est un syndrome de la queue de cheval, une urgence chirurgicale — 15.",
  "Faiblesse d'un pied ou d'une jambe qui s'installe ou s'aggrave.",
  "Fièvre associée, ou douleur après une infection récente.",
  "Antécédent de cancer, amaigrissement inexpliqué, douleur nocturne qu'aucune position ne soulage.",
  "Traumatisme violent, ou chute même banale chez une personne âgée ou ostéoporotique, ou corticothérapie prolongée.",
  "Un premier épisode avant 20 ans ou après 50 ans.",
  "Une douleur qui descend sous le genou, de manière électrique : sciatique, à évaluer."
]},
{t:"key", x:"Bougez, même si ça tire. Et ne réclamez pas d'IRM en l'absence de signe d'alerte : vous y trouverez des anomalies que la moitié des gens sans douleur ont aussi, et elles vous feront moins bouger."}
]},

{
id:"tendinopathie", cat:"Os et muscles", titre:"La tendinopathie",
resume:"On dit « tendinite », mais il n'y a généralement pas d'inflammation — ce qui change tout le traitement.",
blocs:[
{t:"h", x:"Ce que c'est, et pourquoi le nom compte"},
{t:"p", x:"Le suffixe « -ite » désigne une inflammation. Or les prélèvements de tendons douloureux chroniques montrent le plus souvent une désorganisation des fibres de collagène, une néovascularisation et une dégénérescence — sans les cellules de l'inflammation aiguë. D'où le terme de tendinopathie, qui est désormais le terme exact."},
{t:"p", x:"Ce n'est pas une querelle de mots : les trois conséquences pratiques en découlent directement."},
{t:"h", x:"Les trois conséquences"},
{t:"num", items:[
  "Les anti-inflammatoires ne traitent pas la cause. Ils soulagent la douleur, ce qui est légitime à court terme, mais ils n'agissent pas sur le mécanisme.",
  "Le repos complet ne soigne pas. Un tendon se répare en étant sollicité de façon progressive et contrôlée. Immobiliser un tendon douloureux pendant six semaines donne un tendon moins douloureux et plus faible, qui se blessera à la reprise.",
  "Le traitement de référence est le renforcement progressif — travail excentrique, ou charges lourdes exécutées lentement, selon les protocoles. C'est l'un des traitements les mieux documentés en médecine du sport."
]},
{t:"h", x:"Comment ça se passe en pratique"},
{t:"li", items:[
  "La douleur apparaît à l'échauffement, diminue pendant l'effort, et revient à froid, souvent le lendemain matin.",
  "Elle est localisée précisément sur le tendon, reproductible à la palpation et à la mise en tension contre résistance.",
  "La règle de progression utilisée en rééducation : une douleur pendant l'exercice est acceptable si elle reste modérée et si elle est revenue à son niveau de base le lendemain matin. Si elle est plus forte le lendemain, la charge était trop élevée.",
  "C'est long. Plusieurs mois pour un tendon d'Achille ou une épicondylite, et l'abandon prématuré est la première cause d'échec."
]},
{t:"h", x:"Le cas des infiltrations"},
{t:"p", x:"Une infiltration de corticoïdes soulage nettement à court terme. Mais les essais qui ont suivi les patients plus longtemps trouvent, pour certaines localisations comme l'épicondylite, de **moins bons** résultats à un an chez les patients infiltrés que chez ceux qui ne l'ont pas été. C'est une décision médicale, à prendre en connaissant ce profil : soulagement rapide, bénéfice à long terme incertain voire négatif."},
{t:"alerte", titre:"Consulter", items:[
  "Douleur brutale avec craquement et impotence immédiate : évoquer une rupture tendineuse — avis urgent.",
  "Impossibilité de se mettre sur la pointe du pied après une douleur brutale au mollet ou au talon.",
  "Tendon rouge, chaud, gonflé avec fièvre : infection possible.",
  "Douleur qui ne cède pas après six à huit semaines de travail bien conduit.",
  "Si vous prenez certains antibiotiques de la famille des fluoroquinolones : ils exposent à un risque de tendinopathie et de rupture — tout signe tendineux impose d'arrêter et de consulter."
]},
{t:"key", x:"Ce n'est pas une inflammation, donc ni les anti-inflammatoires ni le repos ne sont le traitement. Ce qui répare un tendon, c'est de le charger progressivement — pendant des mois."}
]},

{
id:"courbatures", cat:"Os et muscles", titre:"Les courbatures",
resume:"Ce n'est pas l'acide lactique. Et les étirements n'y changent rien.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"La douleur musculaire d'apparition retardée survient douze à vingt-quatre heures après un effort inhabituel, culmine entre vingt-quatre et soixante-douze heures, et disparaît en quelques jours. Elle suit surtout les contractions excentriques — celles où le muscle freine en s'allongeant : descendre un escalier, reposer une charge, courir en descente."},
{t:"h", x:"Pourquoi ce n'est pas l'acide lactique"},
{t:"p", x:"C'est le mythe le plus tenace du sport amateur. Le lactate produit pendant l'effort est éliminé du muscle et du sang en moins d'une heure après l'arrêt — très longtemps avant que les courbatures n'apparaissent. Une substance déjà disparue ne peut pas causer une douleur qui commence le lendemain."},
{t:"p", x:"Le mécanisme réel associe des micro-lésions des fibres musculaires, une réaction inflammatoire locale et une sensibilisation des terminaisons nerveuses. La douleur est donc le signe d'une réparation en cours, pas d'un déchet à évacuer."},
{t:"h", x:"Ce qui marche, et ce qui ne marche pas"},
{t:"tab", head:["Méthode", "Ce que disent les données"], rows:[
  ["Bouger doucement le lendemain", "soulage pendant l'activité ; c'est l'option la plus simple"],
  ["Massage", "effet réel mais modeste sur la douleur"],
  ["Étirements avant ou après", "effet négligeable sur les courbatures — c'est un résultat de méta-analyse, et il est stable"],
  ["Froid, bains glacés", "soulagement subjectif ; et répétés après la musculation, ils semblent réduire les gains de force à long terme"],
  ["Anti-inflammatoires", "masquent la douleur sans accélérer la récupération"],
  ["Progressivité des charges", "la seule vraie prévention"]
]},
{t:"p", x:"L'effet le plus utile à connaître s'appelle l'effet de séance répétée : après une première séance qui provoque des courbatures, la même séance refaite une à deux semaines plus tard en provoque beaucoup moins. L'adaptation est rapide — ce qui veut dire que les courbatures ne sont pas un indicateur de la qualité d'un entraînement, seulement de sa nouveauté."},
{t:"alerte", titre:"Consulter sans attendre", items:[
  "Urines très foncées, couleur coca, après un effort intense et inhabituel, avec des douleurs musculaires majeures et un gonflement : évoquer une rhabdomyolyse, qui peut atteindre les reins — avis médical urgent.",
  "Douleur localisée en un point précis, apparue brutalement pendant l'effort, avec impotence : plutôt une lésion musculaire qu'une courbature.",
  "Mollet douloureux, chaud, gonflé d'un seul côté, surtout après une immobilisation ou un long voyage : évoquer une phlébite — avis le jour même."
]},
{t:"key", x:"Les courbatures ne mesurent pas la qualité d'une séance, seulement sa nouveauté. Le lendemain, bougez doucement ; n'attendez rien des étirements."}
]},

/* ─────────────────────── INFECTIONS ─────────────────────── */
{
id:"antibiotiques", cat:"Infections", titre:"Les antibiotiques",
resume:"Pourquoi ils ne marchent pas sur un rhume, pourquoi la résistance progresse, et l'allergie à la pénicilline qui n'en est presque jamais une.",
blocs:[
{t:"h", x:"Ce qu'ils font, et sur quoi"},
{t:"p", x:"Un antibiotique tue des bactéries ou les empêche de se multiplier, en s'attaquant à des structures qu'elles seules possèdent — leur paroi, leurs ribosomes, leur façon de copier leur ADN."},
{t:"p", x:"Un virus n'a rien de tout ça. Il n'a ni paroi ni métabolisme propre : il détourne les cellules de l'hôte pour se reproduire. Il n'y a donc tout simplement pas de cible. C'est pour cette raison qu'un antibiotique ne peut rien contre un rhume — ce n'est pas une question de dose ni de puissance."},
{t:"h", x:"Ce qui est viral, et donc sans antibiotique"},
{t:"li", items:[
  "Le rhume, toujours.",
  "La grippe, le Covid, la bronchiolite.",
  "La bronchite aiguë du sujet sain, dans l'immense majorité des cas — y compris quand la toux ramène des crachats colorés, qui ne signent pas une infection bactérienne.",
  "La plupart des angines, surtout après 15 ans. Voir la fiche angine.",
  "La plupart des rhinosinusites aiguës, qui guérissent seules en dix à quinze jours.",
  "Les gastro-entérites banales."
]},
{t:"h", x:"La résistance, en deux phrases"},
{t:"p", x:"Dans toute population de bactéries, quelques-unes portent par hasard une mutation qui les rend moins sensibles. Un antibiotique tue les autres : il ne crée pas la résistance, il sélectionne les résistantes, qui se multiplient alors sans concurrence. C'est de la sélection naturelle, à l'échelle de quelques jours."},
{t:"p", x:"Chaque traitement inutile accélère ce tri, pour soi — le microbiote intestinal garde la trace d'un traitement pendant des mois — et pour tout le monde. C'est l'un des rares domaines de santé où un choix individuel a un effet collectif direct et mesurable."},
{t:"h", x:"Les règles d'usage"},
{t:"num", items:[
  "Respecter la durée prescrite. Elle est choisie pour le germe et le site ; les recommandations récentes raccourcissent beaucoup de durées, ce qui est une bonne nouvelle — mais c'est au prescripteur de la fixer, pas au patient d'arrêter quand il se sent mieux.",
  "Ne jamais réutiliser un reste de boîte, ni prendre celui d'un proche. Mauvais germe, mauvaise dose, mauvaise durée.",
  "Ne pas réclamer un antibiotique « au cas où ». C'est le mécanisme principal des prescriptions inutiles, et la pression du patient est bien documentée.",
  "Signaler ses allergies — et les faire vérifier, voir ci-dessous."
]},
{t:"h", x:"L'allergie à la pénicilline"},
{t:"p", x:"Un fait peu connu et très utile : parmi les gens étiquetés allergiques à la pénicilline, l'écrasante majorité ne l'est pas. L'étiquette vient souvent d'une éruption cutanée dans l'enfance, due au virus en cours plutôt qu'au médicament, ou d'un effet indésirable banal confondu avec une allergie. Et l'allergie vraie peut disparaître avec les années."},
{t:"p", x:"Cette étiquette n'est pas anodine : elle conduit à prescrire des antibiotiques à spectre plus large, moins efficaces sur la cible, plus pourvoyeurs de résistance et d'effets indésirables. Si vous portez cette mention sans avoir jamais été testé, c'est une consultation d'allergologie qui vaut la peine d'être demandée."},
{t:"alerte", titre:"Pendant un traitement, consulter", items:[
  "Éruption qui s'étend, gonflement du visage ou de la langue, gêne respiratoire : arrêter et appeler le 15.",
  "Diarrhée abondante, aqueuse, avec fièvre ou douleurs, pendant ou après le traitement : évoquer une colite à Clostridioides difficile.",
  "Douleur tendineuse sous fluoroquinolone : arrêter et consulter.",
  "Aucune amélioration après 48 à 72 heures de traitement."
]},
{t:"key", x:"Pas de bactérie, pas de cible : un antibiotique sur un virus n'a aucun effet possible, seulement des inconvénients. Et si vous êtes étiqueté allergique à la pénicilline sans avoir été testé, faites-le vérifier."}
]},

{
id:"rhume", cat:"Infections", titre:"Le rhume et la grippe",
resume:"Ce qui a des preuves, ce qui n'en a pas, et les décongestionnants qu'il vaut mieux éviter.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Le rhume est une infection virale des voies aériennes supérieures, causée par plus de deux cents virus différents — dont les rhinovirus. C'est cette diversité qui explique qu'on l'attrape plusieurs fois par an et qu'aucun vaccin n'est possible."},
{t:"p", x:"La grippe est autre chose : début brutal en quelques heures, fièvre élevée, courbatures, épuisement marqué. Un rhume s'installe progressivement et laisse debout."},
{t:"h", x:"La durée normale, qu'il faut connaître"},
{t:"tab", head:["Symptôme", "Durée habituelle"], rows:[
  ["Nez qui coule, gorge irritée", "une semaine environ"],
  ["Écoulement qui devient épais et coloré", "normal vers le 3ᵉ-5ᵉ jour, ne signe pas une infection bactérienne"],
  ["Toux résiduelle", "jusqu'à trois semaines, parfois plus"],
  ["Grippe : fièvre et courbatures", "trois à cinq jours, fatigue une à deux semaines"]
]},
{t:"p", x:"La coloration des sécrétions est le malentendu le plus fréquent, et il est à l'origine d'une grande partie des antibiotiques inutiles : elle vient des enzymes des globules blancs qui combattent le virus, pas d'une surinfection."},
{t:"h", x:"Ce qui a des preuves"},
{t:"li", items:[
  "Le lavage de nez au sérum physiologique ou à l'eau salée : effet modeste mais réel sur la gêne, et sans risque.",
  "Le paracétamol pour la fièvre et les douleurs.",
  "Le miel pour la toux nocturne, chez l'enfant de plus d'un an et chez l'adulte — mieux évalué que la plupart des sirops. Jamais avant un an, à cause du risque de botulisme infantile.",
  "Boire, se reposer, humidifier l'air."
]},
{t:"h", x:"Ce qui n'en a pas, ou qui expose"},
{t:"li", items:[
  "La vitamine C prise au moment du rhume : aucun effet démontré sur la durée ni sur la sévérité. En prise quotidienne continue, l'effet sur la durée est marginal.",
  "Les sirops antitussifs : efficacité très faible chez l'adulte, et les antitussifs comme les mucolytiques sont déconseillés avant six ans.",
  "Les décongestionnants par voie orale, de type pseudoéphédrine : les autorités sanitaires françaises et européennes ont alerté sur des risques rares mais graves, notamment neurologiques et vasculaires, et déconseillent leur usage. Le bénéfice attendu — quelques heures de nez moins bouché — ne justifie pas ce profil.",
  "L'antibiotique, par définition : voir la fiche correspondante."
]},
{t:"alerte", titre:"Consulter", items:[
  "Difficulté à respirer, essoufflement au repos, douleur à la poitrine en respirant.",
  "Fièvre qui dure plus de cinq jours, ou qui retombe puis remonte : évoquer une surinfection.",
  "Aggravation nette après une phase d'amélioration.",
  "Confusion, somnolence inhabituelle, déshydratation.",
  "Nourrisson de moins de trois mois avec de la fièvre : consultation urgente dans tous les cas.",
  "Personne fragile — immunodéprimée, insuffisante respiratoire ou cardiaque, enceinte, très âgée."
]},
{t:"key", x:"Un rhume dure une semaine et la toux peut traîner trois semaines : ce n'est pas un échec. Les sécrétions colorées ne sont pas un argument pour un antibiotique."}
]},

{
id:"angine", cat:"Infections", titre:"L'angine",
resume:"Le test rapide en pharmacie décide, pas la couleur de la gorge.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Une inflammation des amygdales, d'origine virale dans la grande majorité des cas. La bactérie qui justifie un antibiotique est le streptocoque du groupe A : elle est en cause dans environ un quart à un tiers des angines de l'enfant entre 3 et 15 ans, et dans à peine une sur dix chez l'adulte."},
{t:"p", x:"Un point que tout le monde croit savoir et qui est faux : l'aspect de la gorge ne permet pas de trancher. Une angine blanche n'est pas plus bactérienne qu'une angine rouge, et aucun médecin ne peut faire la différence à l'œil."},
{t:"h", x:"Ce qui décide : le test"},
{t:"p", x:"Un test rapide par prélèvement de gorge donne le résultat en quelques minutes. En France, il est réalisable gratuitement en pharmacie, sans ordonnance, et le pharmacien peut délivrer l'antibiotique si le test est positif."},
{t:"num", items:[
  "Test positif : antibiotique, pour raccourcir les symptômes, limiter la contagion et prévenir des complications rares mais sérieuses.",
  "Test négatif : pas d'antibiotique. Antalgiques et patience — ça dure trois à cinq jours.",
  "Avant trois ans, le streptocoque est rare et les complications aussi : le test n'est pas recommandé en routine."
]},
{t:"p", x:"Pourquoi se donner cette peine plutôt que de traiter tout le monde : parce que neuf angines sur dix chez l'adulte sont virales, et que traiter à l'aveugle revient à exposer neuf personnes aux effets indésirables et à la sélection de résistances pour en aider une."},
{t:"h", x:"Ce qui soulage"},
{t:"li", items:[
  "Paracétamol à dose correcte, qui est l'antalgique de première intention.",
  "Boissons fraîches ou tièdes selon ce qui soulage, alimentation molle.",
  "Les pastilles et collutoires anesthésiants soulagent brièvement, sans effet sur la durée.",
  "Les anti-inflammatoires à dose élevée et les corticoïdes ne sont pas recommandés en automédication dans ce contexte : voir l'avertissement de la fiche sur les deux antalgiques."
]},
{t:"alerte", niveau:"15", titre:"Urgence", items:[
  "Difficulté à avaler sa propre salive, bave, impossibilité d'ouvrir la bouche.",
  "Voix étouffée, comme avec une patate chaude dans la bouche.",
  "Gonflement d'un seul côté du cou ou de la gorge qui s'aggrave.",
  "Difficulté à respirer, position assise penchée en avant pour respirer.",
  "Ces signes évoquent un phlegmon ou une épiglottite : appeler le 15."
]},
{t:"alerte", titre:"Consulter", items:[
  "Fièvre persistante au-delà de trois à quatre jours.",
  "Éruption cutanée associée, ou urines foncées quelques semaines après une angine.",
  "Angines répétées, plusieurs fois par an.",
  "Grande fatigue prolongée avec ganglions : évoquer une mononucléose, qui contre-indique certains antibiotiques."
]},
{t:"key", x:"La couleur de la gorge ne dit rien. Le test rapide en pharmacie est gratuit, prend cinq minutes, et c'est lui qui décide."}
]},

{
id:"gastro", cat:"Infections", titre:"La gastro-entérite",
resume:"Tout se joue sur l'hydratation. Et il y a des situations où arrêter la diarrhée est une mauvaise idée.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Une inflammation de l'estomac et de l'intestin, virale dans la grande majorité des cas en hiver. Diarrhée, vomissements, douleurs, parfois fièvre modérée. L'évolution est spontanément favorable en deux à trois jours."},
{t:"p", x:"Le danger n'est presque jamais l'infection elle-même : c'est la perte d'eau et de sels. C'est pourquoi toute la prise en charge tourne autour d'un seul objectif."},
{t:"h", x:"Boire, mais comment"},
{t:"li", items:[
  "Par petites quantités et très souvent. Une grande gorgée sur un estomac irrité ressort ; une cuillère toutes les deux ou trois minutes passe.",
  "Chez l'enfant et le nourrisson, les solutions de réhydratation orale vendues en pharmacie sont nettement supérieures à l'eau seule, parce qu'elles contiennent le rapport sucre-sel qui permet à l'intestin d'absorber l'eau. Ce n'est pas un confort, c'est le traitement.",
  "Chez l'adulte, eau, bouillon salé, boissons sucrées diluées. Les sodas non dilués et les jus de fruits sont trop sucrés et peuvent aggraver la diarrhée.",
  "Reprendre l'alimentation dès que possible, sans régime restrictif prolongé : riz, pâtes, carottes, banane, compote selon la tolérance."
]},
{t:"h", x:"Le médicament qui demande précaution"},
{t:"p", x:"Les ralentisseurs du transit comme le lopéramide soulagent réellement une diarrhée banale. Mais ils ne doivent pas être pris en cas de fièvre élevée ou de sang dans les selles : si une bactérie invasive est en cause, bloquer le transit prolonge son contact avec la paroi intestinale. Ils sont également déconseillés chez le jeune enfant."},
{t:"p", x:"Et la diarrhée a une fonction : c'est en partie la façon dont l'organisme évacue. L'arrêter à tout prix n'est pas l'objectif, maintenir l'hydratation l'est."},
{t:"h", x:"Les signes de déshydratation"},
{t:"tab", head:["Chez l'adulte", "Chez le jeune enfant"], rows:[
  ["Soif intense, bouche sèche", "couches sèches depuis plus de six heures"],
  ["Urines rares et très foncées", "pleurs sans larmes"],
  ["Vertiges en se levant", "yeux cernés, creusés"],
  ["Fatigue inhabituelle, confusion", "apathie, ou au contraire irritabilité inhabituelle"],
  ["Pli de peau qui reste marqué", "fontanelle creusée chez le nourrisson"]
]},
{t:"alerte", titre:"Consulter sans attendre", items:[
  "Signes de déshydratation, surtout chez un nourrisson, une personne âgée ou immunodéprimée.",
  "Impossibilité de garder le moindre liquide pendant plusieurs heures.",
  "Sang dans les selles, ou selles noires.",
  "Fièvre élevée persistante au-delà de 48 heures.",
  "Douleur abdominale intense, localisée, continue — en particulier en bas à droite : évoquer une appendicite.",
  "Retour récent d'un voyage en zone tropicale.",
  "Diarrhée qui dure plus de trois à cinq jours chez l'adulte."
]},
{t:"key", x:"Une cuillère toutes les deux minutes vaut mieux qu'un verre toutes les heures. Et en cas de fièvre ou de sang, on ne bloque pas le transit."}
]},

{
id:"fievre", cat:"Infections", titre:"La fièvre",
resume:"C'est une réponse, pas une maladie — et le chiffre compte moins que l'état général.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"La fièvre est une élévation volontaire du point de consigne thermique, commandée par le cerveau en réponse à une infection. Ce n'est pas un dérèglement : c'est une défense, qui gêne la multiplication de nombreux agents infectieux et stimule la réponse immunitaire."},
{t:"p", x:"Conséquence directe : l'objectif n'est pas de ramener le thermomètre à 37, c'est de soulager l'inconfort. Un enfant à 39 qui joue et boit va mieux qu'un enfant à 38,2 abattu qui refuse de boire. On traite la personne, pas le chiffre."},
{t:"h", x:"Ce qui aide"},
{t:"li", items:[
  "Faire boire régulièrement — la fièvre augmente les pertes en eau.",
  "Découvrir sans dénuder brutalement, aérer la pièce sans chercher à la refroidir.",
  "Du paracétamol si la personne est gênée. En monothérapie : l'alternance systématique avec un anti-inflammatoire n'est pas recommandée en France, elle multiplie les erreurs de dose sans bénéfice démontré.",
  "En cas d'infection, le paracétamol est préféré à l'ibuprofène en première intention — voir la fiche suivante."
]},
{t:"h", x:"Ce qu'on ne fait plus"},
{t:"p", x:"Le bain frais, la vessie de glace et le déshabillage complet ont été retirés des recommandations : ils sont inconfortables, provoquent des frissons — qui produisent de la chaleur — et n'améliorent rien."},
{t:"alerte", niveau:"15", titre:"Urgence absolue", items:[
  "Taches rouges ou violacées qui ne s'effacent pas quand on appuie dessus avec un verre transparent, surtout si elles s'étendent vite : c'est un purpura fébrile, et c'est une urgence vitale — 15 immédiatement.",
  "Raideur de la nuque empêchant de poser le menton sur la poitrine, avec mal de tête et gêne à la lumière.",
  "Confusion, somnolence anormale, difficulté à réveiller la personne.",
  "Difficulté respiratoire, teint gris ou marbré."
]},
{t:"alerte", titre:"Consulter rapidement", items:[
  "Nourrisson de moins de trois mois avec de la fièvre : toujours, et sans attendre.",
  "Fièvre qui dure plus de cinq jours sans cause évidente.",
  "Fièvre au retour d'un pays où sévit le paludisme : toute fièvre dans les mois qui suivent est un paludisme jusqu'à preuve du contraire.",
  "Personne immunodéprimée, sous chimiothérapie, ou avec une prothèse ou un cathéter.",
  "Douleur localisée intense associée : abdomen, urines, mollet, articulation.",
  "Convulsion chez l'enfant, même brève : avis médical."
]},
{t:"key", x:"Regardez l'enfant, pas le thermomètre. Un purpura fébrile — des taches qui ne blanchissent pas sous la pression d'un verre — est la seule chose de cette fiche qui se compte en minutes."}
]},

/* ─────────────────────── MÉDICAMENTS ─────────────────────── */
{
id:"antalgiques", cat:"Médicaments", titre:"Paracétamol ou ibuprofène ?",
resume:"Les doses à ne pas dépasser, et pourquoi l'ibuprofène est déconseillé pendant une infection.",
blocs:[
{t:"h", x:"Le paracétamol"},
{t:"p", x:"C'est l'antalgique de première intention dans la plupart des situations : douleur, fièvre, chez l'adulte comme chez l'enfant, pendant la grossesse. Il est très bien toléré **aux doses recommandées** — et c'est toute la question."},
{t:"calc", lignes:[
  "ADULTE DE PLUS DE 50 KG",
  "",
  "Dose par prise        : 1 g",
  "Intervalle minimum    : 6 h (4 h si douleur intense)",
  "Maximum par 24 h      : 3 g en automédication",
  "                        4 g seulement sur avis médical",
  "",
  "Soit, en pratique : 1 g matin, midi et soir — et c'est tout."
]},
{t:"p", x:"Le danger du paracétamol tient en deux faits. Le premier : la marge entre la dose efficace et la dose toxique pour le foie est étroite, plus étroite que pour presque tout autre médicament en vente libre. Le surdosage est l'une des premières causes d'insuffisance hépatique aiguë d'origine médicamenteuse."},
{t:"p", x:"Le second est plus insidieux : **il n'y a aucun symptôme pendant les premières vingt-quatre à quarante-huit heures**. Quelqu'un qui a pris trop de paracétamol se sent parfaitement bien pendant que son foie s'abîme. Il n'y a donc aucun signal d'alarme sur lequel compter."},
{t:"p", x:"L'erreur la plus fréquente n'est pas la prise volontaire d'une dose massive : c'est le cumul. Beaucoup de médicaments contre le rhume, la grippe ou les douleurs contiennent du paracétamol sans que le mot apparaisse en gros sur la boîte. Prendre un médicament « rhume » plus du paracétamol, c'est prendre deux fois du paracétamol. Lisez la composition, à chaque fois."},
{t:"h", x:"L'ibuprofène et les anti-inflammatoires"},
{t:"calc", lignes:[
  "ADULTE, EN AUTOMÉDICATION",
  "",
  "Dose par prise        : 200 à 400 mg",
  "Intervalle minimum    : 6 h",
  "Maximum par 24 h      : 1 200 mg",
  "Durée                 : 3 jours pour la fièvre",
  "                        5 jours pour la douleur",
  "",
  "À prendre pendant un repas."
]},
{t:"p", x:"Il est plus efficace que le paracétamol sur les douleurs d'origine inflammatoire — règles douloureuses, douleurs dentaires, certaines douleurs articulaires. Mais il a des contre-indications réelles, qu'il faut connaître."},
{t:"li", items:[
  "Antécédent d'ulcère ou de saignement digestif.",
  "Insuffisance rénale, cardiaque ou hépatique.",
  "Grossesse : formellement contre-indiqué à partir du sixième mois, et déconseillé avant.",
  "Varicelle, et plus généralement infection cutanée.",
  "Association à un anticoagulant, à l'aspirine, ou à certains antihypertenseurs."
]},
{t:"h", x:"Le point le plus important : infection en cours"},
{t:"p", x:"Les autorités sanitaires françaises ont alerté en 2019 sur un signal établi à partir des déclarations d'effets indésirables : les anti-inflammatoires pris pendant une infection, même banale, peuvent favoriser des complications infectieuses graves — infections de la peau et des tissus mous, infections pulmonaires, abcès — y compris chez des sujets jeunes et sans facteur de risque."},
{t:"p", x:"La conséquence pratique est simple et vaut la peine d'être retenue : **en cas de fièvre, d'angine, de toux, de plaie ou de toute infection, le paracétamol est le premier choix**, et l'anti-inflammatoire n'est pris que sur avis médical."},
{t:"alerte", titre:"Appeler un centre antipoison ou le 15", items:[
  "En cas de prise d'une dose de paracétamol supérieure à la dose maximale, même si la personne va parfaitement bien — c'est précisément le cas où elle ira bien. Il existe un antidote, d'autant plus efficace qu'il est donné tôt.",
  "Douleur abdominale haute intense, vomissements de sang ou selles noires sous anti-inflammatoire.",
  "Éruption cutanée étendue, gonflement du visage, gêne respiratoire après une prise."
]},
{t:"key", x:"Trois grammes de paracétamol par jour, pas plus, et vérifiez qu'aucun autre médicament de l'armoire n'en contient déjà. En cas d'infection, paracétamol plutôt qu'ibuprofène."}
]},

/* ─────────────────────── PEAU ET PLAIES ─────────────────────── */
{
id:"brulure", cat:"Peau et plaies", titre:"La brûlure",
resume:"La règle des 15, et les trois critères qui imposent un avis.",
blocs:[
{t:"h", x:"Les premières minutes"},
{t:"p", x:"Le geste qui change le plus les choses est le refroidissement précoce. Il limite l'extension de la brûlure en profondeur, qui continue pendant plusieurs minutes après le contact."},
{t:"calc", lignes:[
  "LA RÈGLE DES 15",
  "",
  "Eau à environ 15 °C   (eau du robinet tempérée, pas glacée)",
  "Pendant 15 minutes",
  "À 15 cm de la peau    (jet doux, sans pression)",
  "Dans les 15 minutes qui suivent la brûlure"
]},
{t:"p", x:"Pourquoi pas d'eau glacée : parce qu'elle provoque une vasoconstriction qui aggrave la lésion, et un risque d'hypothermie si la surface est étendue — surtout chez l'enfant."},
{t:"h", x:"Pendant et après"},
{t:"li", items:[
  "Retirer bagues, montre, bracelets et vêtements non collés avant que ça ne gonfle. Ce qui est collé à la peau, on ne l'arrache pas.",
  "Ne rien appliquer : ni beurre, ni huile, ni dentifrice, ni glaçon. Ces produits retiennent la chaleur, contaminent la plaie et gênent l'examen.",
  "Ne pas percer les cloques : la peau de la cloque est un pansement biologique stérile.",
  "Recouvrir d'un linge propre et non pelucheux, ou d'un pansement gras si la brûlure est superficielle.",
  "Paracétamol pour la douleur."
]},
{t:"h", x:"Évaluer la gravité"},
{t:"tab", head:["Degré", "Aspect", "Douleur"], rows:[
  ["Premier", "rouge, sec, comme un coup de soleil", "douloureux"],
  ["Deuxième superficiel", "cloques, rouge et suintant sous la cloque", "très douloureux"],
  ["Deuxième profond / troisième", "blanc, cartonné, ou noirâtre", "peu ou pas douloureux — mauvais signe"]
]},
{t:"p", x:"L'absence de douleur sur une brûlure n'est pas rassurante : elle signifie que les terminaisons nerveuses ont été détruites, donc que la brûlure est profonde."},
{t:"p", x:"Pour la surface, un repère utile : la paume de la main de la victime, doigts compris, représente environ un pour cent de sa surface corporelle."},
{t:"alerte", titre:"Avis médical nécessaire", items:[
  "Surface supérieure à la paume de la main de la victime.",
  "Localisation sur le visage, les mains, les pieds, une articulation, ou les organes génitaux — même pour une petite surface.",
  "Brûlure blanche, cartonnée ou indolore.",
  "Brûlure électrique ou chimique : toujours, même si la peau paraît intacte — les lésions profondes sont invisibles. Pour une brûlure chimique, rincer abondamment à l'eau pendant au moins vingt minutes avant tout.",
  "Brûlure circulaire faisant le tour d'un membre ou du thorax.",
  "Nourrisson, personne âgée, diabétique, immunodéprimée.",
  "Fumées inhalées, suies autour du nez ou de la bouche, voix rauque : 15.",
  "Et plus tard : rougeur qui s'étend, pus, fièvre — infection."
]},
{t:"key", x:"Quinze minutes d'eau tempérée, rien sur la plaie, et on ne perce pas les cloques. Une brûlure indolore est plus grave qu'une brûlure qui fait mal."}
]},

{
id:"plaie", cat:"Peau et plaies", titre:"La plaie, et le tétanos",
resume:"Nettoyer, évaluer, et la question que personne ne se pose : où en est votre rappel ?",
blocs:[
{t:"h", x:"Les gestes"},
{t:"num", items:[
  "Se laver les mains.",
  "Nettoyer la plaie à l'eau courante et au savon, pendant plusieurs minutes, en retirant les corps étrangers visibles et accessibles.",
  "Sécher en tamponnant, puis appliquer un antiseptique incolore — l'éosine et les colorants masquent l'évolution.",
  "Couvrir d'un pansement, changé quotidiennement et dès qu'il est souillé ou mouillé.",
  "Surveiller pendant quelques jours."
]},
{t:"p", x:"Pour arrêter un saignement : comprimer directement avec un linge propre, sans relâcher pour regarder, pendant au moins dix minutes, et surélever le membre."},
{t:"h", x:"Le tétanos, en deux phrases"},
{t:"p", x:"La bactérie responsable vit dans la terre et les poussières, et produit une toxine qui provoque des contractures généralisées. La maladie est rare en France grâce à la vaccination, mais elle reste grave, et elle touche presque exclusivement des personnes dont la vaccination n'était plus à jour."},
{t:"p", x:"Chez l'adulte, les rappels sont prévus à 25, 45 et 65 ans, puis tous les dix ans. La question à se poser devant toute plaie souillée est donc : à quand remonte le dernier ? Si vous ne savez pas, c'est un motif suffisant pour demander un avis — il existe une conduite à tenir précise selon le type de plaie et le statut vaccinal."},
{t:"h", x:"Les morsures"},
{t:"p", x:"Une morsure mérite un avis médical presque systématique, quelle que soit sa taille apparente. Les morsures de chat sont particulièrement traîtres : la dent est fine et longue, elle inocule des bactéries en profondeur par un orifice minuscule qui se referme aussitôt. Les morsures humaines s'infectent également beaucoup."},
{t:"p", x:"Une morsure par un animal inconnu ou en provenance de l'étranger pose en outre la question de la rage : avis médical sans délai."},
{t:"alerte", titre:"Consulter", items:[
  "Plaie profonde, béante, dont les bords ne se rapprochent pas spontanément : une suture est envisageable, et elle se fait dans les premières heures.",
  "Plaie du visage, de la main, d'une articulation, ou à proximité d'un œil.",
  "Saignement qui ne s'arrête pas après dix à quinze minutes de compression ferme : 15.",
  "Corps étranger resté dans la plaie, ou plaie par objet pénétrant.",
  "Plaie très souillée — terre, fumier, rouille — ou par écrasement.",
  "Toute morsure.",
  "Vaccination antitétanique incertaine ou datant de plus de dix ans.",
  "Après 24 à 48 heures : rougeur qui s'étend, chaleur, gonflement, pus, traînée rouge remontant vers la racine du membre, ganglion douloureux, fièvre."
]},
{t:"key", x:"Une traînée rouge qui remonte le long du membre à partir d'une plaie n'attend pas le lendemain. Et vérifiez votre rappel antitétanique : c'est la seule maladie de cette fiche qui tue encore."}
]},

/* ─────────────────────── DIVERS ─────────────────────── */
{
id:"epistaxis", cat:"Divers", titre:"Le saignement de nez",
resume:"Penché en avant, pas en arrière — et dix minutes sans relâcher.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"La grande majorité des saignements de nez viennent d'une zone très vascularisée située juste à l'entrée de la cloison nasale, facilement accessible et fragile. D'où leur fréquence, et d'où le fait qu'une compression bien faite suffit presque toujours."},
{t:"h", x:"La bonne technique"},
{t:"num", items:[
  "S'asseoir, **tête penchée en avant**. Pas en arrière : le sang coulerait dans la gorge, serait avalé, provoquerait des vomissements, et on perdrait toute idée de la quantité perdue.",
  "Se moucher une fois, fermement, pour évacuer les caillots. C'est contre-intuitif, mais un caillot empêche les parois de se rapprocher.",
  "Pincer fermement la partie molle du nez — pas l'os, les ailes — entre le pouce et l'index.",
  "Tenir dix à quinze minutes **sans relâcher pour vérifier**. C'est l'erreur la plus fréquente : regarder toutes les deux minutes réinitialise à chaque fois le processus de coagulation.",
  "Après l'arrêt : ne pas se moucher, ne pas forcer, éviter l'effort physique et les bains chauds pendant quelques heures."
]},
{t:"h", x:"Pourquoi ça revient"},
{t:"p", x:"Air sec, chauffage, mouchage répété pendant un rhume, grattage, et parfois une simple fragilité de cette zone. Humidifier l'air et appliquer une pommade grasse dans les narines réduit les récidives."},
{t:"alerte", titre:"Consulter", items:[
  "Saignement qui persiste après vingt minutes de compression correcte — ou abondant : 15.",
  "Saignement survenu après un traumatisme du nez ou du crâne.",
  "Chez une personne sous anticoagulant ou antiagrégant, ou avec une maladie de la coagulation connue.",
  "Saignements répétés, ou toujours de la même narine.",
  "Pâleur, malaise, sensation de tête vide : signes de perte importante.",
  "Hypertension artérielle connue et mal contrôlée."
]},
{t:"key", x:"En avant, pas en arrière. Et surtout : dix minutes de compression continue, sans relâcher pour voir si ça a marché."}
]},

{
id:"reflux", cat:"Divers", titre:"Les brûlures d'estomac",
resume:"Ce qui marche vraiment, et les signes qui imposent une endoscopie.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"Le reflux gastro-œsophagien : une remontée du contenu acide de l'estomac vers l'œsophage, dont la muqueuse n'est pas faite pour le supporter. Le muscle qui sépare les deux, le sphincter inférieur de l'œsophage, se relâche de façon inappropriée."},
{t:"p", x:"Typiquement : une brûlure qui part du creux de l'estomac et remonte derrière le sternum, favorisée par la position allongée et par les repas copieux, parfois accompagnée de remontées acides dans la bouche."},
{t:"h", x:"Ce qui aide, par ordre d'efficacité"},
{t:"li", items:[
  "Ne pas s'allonger dans les deux à trois heures qui suivent un repas. C'est la mesure la plus efficace et la plus négligée.",
  "Surélever la tête du lit de dix à quinze centimètres — en calant les pieds du lit, pas en empilant des oreillers, qui plient la nuque sans changer l'angle du tronc.",
  "Perdre du poids en cas de surpoids : c'est la mesure dont le bénéfice est le mieux établi sur le long terme.",
  "Réduire alcool et tabac, qui relâchent tous deux le sphincter.",
  "Repas plus petits et plus espacés.",
  "Identifier ses propres déclencheurs plutôt que de suivre une liste générale : les aliments en cause varient beaucoup d'une personne à l'autre, et les régimes d'exclusion systématiques ont peu de support."
]},
{t:"h", x:"Les médicaments"},
{t:"p", x:"Les antiacides soulagent immédiatement et brièvement. Les inhibiteurs de la pompe à protons réduisent la production d'acide et sont efficaces, mais ils sont destinés à des durées définies et à une réévaluation : leur prescription prolongée sans contrôle est un problème identifié de santé publique. Si vous en prenez depuis des mois sans que la question ait été reposée, c'est une consultation."},
{t:"alerte", titre:"Consulter", items:[
  "Difficulté à avaler qui s'installe, ou sensation d'aliment qui bloque.",
  "Amaigrissement non voulu.",
  "Vomissements de sang, ou selles noires et goudronneuses.",
  "Anémie, fatigue avec pâleur.",
  "Premiers symptômes après 50 ans.",
  "Douleur thoracique : attention, une douleur d'origine cardiaque peut se présenter comme une brûlure d'estomac. En cas de doute, surtout à l'effort, avec sueurs ou irradiation au bras ou à la mâchoire — 15.",
  "Symptômes quotidiens malgré les mesures, ou nécessité de se traiter en continu."
]},
{t:"key", x:"Ne pas s'allonger après manger et surélever la tête du lit font plus que n'importe quel aliment retiré de la liste. Et une « brûlure d'estomac » à l'effort doit faire penser au cœur."}
]},

{
id:"insomnie", cat:"Divers", titre:"L'insomnie",
resume:"Le traitement de première intention n'est pas un médicament, et la règle principale porte sur l'heure du lever.",
blocs:[
{t:"h", x:"Ce que c'est"},
{t:"p", x:"On parle d'insomnie chronique quand les difficultés d'endormissement ou de maintien du sommeil surviennent au moins trois nuits par semaine depuis plus de trois mois, avec un retentissement dans la journée. En dessous, il s'agit d'insomnie aiguë, souvent liée à un événement, et qui se résout avec lui."},
{t:"p", x:"Le mécanisme qui chronicise est connu et il est cruel : à force de mal dormir, on passe plus de temps au lit pour rattraper, on s'inquiète de ne pas dormir, et le lit devient le lieu où l'on est éveillé et anxieux. L'association apprise se retourne — le lit déclenche l'éveil."},
{t:"h", x:"Le traitement de première intention"},
{t:"p", x:"Ce n'est pas un somnifère : c'est la thérapie cognitive et comportementale de l'insomnie, recommandée en première intention par les sociétés savantes, avec une efficacité comparable aux médicaments à court terme et supérieure à distance. Elle existe en format court, y compris en ligne. Ses règles principales sont contre-intuitives."},
{t:"num", items:[
  "Heure de lever fixe, tous les jours, y compris le week-end et après une mauvaise nuit. C'est le point d'ancrage de l'horloge interne, et c'est la règle la plus importante.",
  "Réduire le temps passé au lit pour le rapprocher du temps réellement dormi. On ne reste pas au lit huit heures pour en dormir cinq : on restreint, puis on élargit à mesure que le sommeil se consolide. C'est efficace et difficile les premiers jours.",
  "Ne pas rester au lit éveillé plus de vingt minutes : se lever, aller dans une autre pièce, faire quelque chose de calme à faible lumière, revenir quand le sommeil vient.",
  "Le lit sert à dormir. Pas à travailler, pas à regarder des écrans, pas à ruminer.",
  "Pas de sieste longue ou tardive pendant la phase de reconstruction."
]},
{t:"h", x:"Les somnifères"},
{t:"p", x:"Les hypnotiques apparentés aux benzodiazépines sont efficaces à court terme. Leur bénéfice s'épuise, la tolérance s'installe, l'arrêt provoque un rebond d'insomnie qu'on prend pour la preuve qu'on en avait besoin, et le risque de chute et de troubles de la mémoire est réel, en particulier après 65 ans. Les recommandations les limitent à des durées courtes."},
{t:"p", x:"Pour le contexte scientifique — ce que le sommeil fait à la mémoire et à l'humeur, les chronotypes, la caféine — voir les leçons 9.1 et 9.2 du cours."},
{t:"alerte", titre:"Consulter", items:[
  "Ronflements importants avec pauses respiratoires constatées par l'entourage, somnolence diurne marquée, réveil avec maux de tête : évoquer un syndrome d'apnées du sommeil, qui ne se traite pas du tout de la même façon.",
  "Envies irrépressibles de bouger les jambes le soir, soulagées par le mouvement : syndrome des jambes sans repos.",
  "Insomnie avec tristesse, perte d'intérêt, idées noires : l'insomnie est à la fois un symptôme et un facteur de risque de la dépression.",
  "Somnolence au volant : danger immédiat.",
  "Insomnie installée depuis plus de trois mois malgré les mesures."
]},
{t:"key", x:"Une heure de lever fixe, et ne pas rester au lit éveillé. Les deux règles les plus efficaces sont aussi les deux plus désagréables, et elles ne demandent aucune ordonnance."}
]}

];
