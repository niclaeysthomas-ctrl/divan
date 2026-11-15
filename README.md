# LE DIVAN

Entretiens successifs d'exploration psychologique. Chaque tour part du dossier du précédent
et creuse là où ça résiste.

- En ligne : https://niclaeysthomas-ctrl.github.io/divan/
- HTML/CSS/JS à la main, sans build. Aucun serveur, aucune API, aucun compte.
- Ce n'est pas un diagnostic et aucune échelle n'y mesure une maladie.

## La boucle

1. La personne fait un entretien sur le site. Ses réponses restent dans son navigateur.
2. À la fin, elle produit un **dossier** Markdown : questions + réponses + écarts calculés
   + une consigne de construction du tour suivant + les données brutes en JSON.
3. Elle envoie ce dossier à Claude, qui le lit et renvoie **un bloc JSON** : le tour suivant,
   écrit sur ses réponses à elle.
4. Elle colle ce bloc dans « charger un entretien sur mesure » sur la page d'accueil.
   Il s'ajoute à la liste. Pas de modification de code, pas de redéploiement.

## Contenu livré

| Entretien | Titre | Sections | Items |
|---|---|---|---|
| 1 | Faire connaissance | 9 + le seuil | 69 |
| 2 | Les reliures | 9 | 49 |

## Format d'un entretien sur mesure

```json
{ "divan": 2, "n": "3", "titre": "<titre court>", "pour": "<prénom>",
  "duree": "20 à 30 min", "pitch": "<une phrase>",
  "meta": { "honnetete": "<id de l'item note d'honnêteté>", "interdit": "<id>" },
  "sections": [ { "n": "1", "axe": "<deux mots>", "titre": "<titre>", "lede": "<pourquoi>",
                  "items": [ { "id": "1.1", "type": "long", "q": "<question>", "why": "<ce que ça cherche>" } ] } ] }
```

Types d'items : `long` `text` (rows, ph) · `likert` (poles) · `scale` (min, max) ·
`choice` `multi` (options, other) · `rank` (options) · `pairs` (pairs:[{a,b}]) ·
`stems` (stems) · `rows` (cols, rows) · `fields` (fields) · `grid3` (cols, rows) ·
`alloc` (domains, compare) · `consent`. Tout item accepte `sensitive:true`
(bouton « je préfère ne pas répondre ») et `optional:true`.

Le JSON collé est validé item par item avant chargement : type inconnu, champ de liste
manquant ou section sans items sont refusés avec un message qui nomme l'item fautif.

## Stockage

Clé `divan_v1`, origine partagée avec les autres apps. `load()` distingue trois cas —
vide (on démarre), illisible (on refuse d'écrire et on le dit à l'écran), inaccessible
(navigation privée). Les réponses sont rangées par entretien : `{v:2, e:{"1":{started,a},…},
custom:…}`. Un état v1 à plat est migré sans perte au chargement.

## Mise en ligne

`git push origin main`, jamais de branche. Penser à monter `CACHE = "divan-vNN"` dans `sw.js`,
sinon l'ancienne version est servie indéfiniment.
