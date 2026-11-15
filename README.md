# LE DIVAN

Entretiens successifs d'exploration psychologique. Chaque tour creuse plus loin que le précédent.

- En ligne : https://niclaeysthomas-ctrl.github.io/divan/
- HTML/CSS/JS à la main, sans build. Aucun serveur, aucune API, aucun compte.
- Les réponses restent dans le `localStorage` du navigateur (clé `divan_v1`, origine partagée
  avec les autres apps : `load()` distingue « vide », « illisible » et « inaccessible »,
  et refuse d'écrire plutôt que d'écraser).
- Fin de parcours : un **dossier** en Markdown — questions + réponses + consigne de
  construction de l'entretien suivant — à copier dans une conversation avec Claude.

## Ajouter un entretien

Tout le contenu est le tableau `SECTIONS` dans `index.html`. Types d'items disponibles :
`long`, `text`, `likert`, `scale`, `choice`, `multi`, `rank`, `pairs`, `stems`, `rows`,
`fields`, `grid3`, `alloc` (avec `compare` pour l'écart déclaré/vécu), `consent`.

Penser à monter `CACHE = "divan-vNN"` dans `sw.js` à chaque mise en ligne.
