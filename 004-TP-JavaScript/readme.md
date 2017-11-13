## Javascript - Exercice 4
### Arrow functions, Template literals et mot-clé Class

Objectif: mettre à jour le code actuel en utilisant la nouvelle syntaxe class, les arrow functions et les template literals.

1) Pourquoi est-ce que la méthode `enoncerLesVillesVisitees()` plante ?
2) Utilisez les template literals au lieu de la concatenation de strinc actuelle.
3) Utilisez la nouvelle syntaxe `class` pour définir `Personne` et `Survivant`.

```javascript
"use strict";

// Class Personne
function Personne(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;
}

Personne.prototype.nomComplet = function nomComplet() {
  return this.prenom + ' ' + this.nom;
}

Personne.prototype.nomCompletInverse = function nomCompletInverse() {
  return this.nom + ' ' + this.prenom;
}

Personne.prototype.sePresenter = function sePresenter() {
  console.log('Bonjour, je suis ' + this.nomComplet());
}

// Class Survivant
function Survivant(prenom, nom, arme, villesVisitees) {
  Personne.call(this, prenom, nom);
  this.arme = arme;
  this.villesVisitees = villesVisitees;
}

Survivant.prototype = Object.create(Personne.prototype);
Survivant.prototype.constructor = Survivant;

Survivant.prototype.enoncerLesVillesVisitees = function enoncerLesVillesVisitees() {
  this.villesVisitees.forEach(function (ville) {
    // La ligne ci-dessous ne fonctionne pas. Pourquoi ?
    console.log(this.nomComplet() + ': j\'ai visité ' + ville);
  });
}

let rickLeSurvivant = new Survivant('Rick', 'Grimes', 'Revolver', ['Atlanta', 'Washington']);
rickLeSurvivant.sePresenter();
rickLeSurvivant.enoncerLesVillesVisitees();
```

Ressources complémentaires :
  * [Function.prototype.call() (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/call)
  * [Object.create() (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/create)