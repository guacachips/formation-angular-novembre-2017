## Javascript - Exercice 1
### Debugger, Strict mode et bind

Objectif: découvrir l'utilisation du debugger et du mot-clé `this`.

1) Que vaut `this` ?

```javascript
function Personne(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;

  this.nomComplet = function () {
    debugger; // Que vaut this ?
    return this.prenom + ' ' + this.nom;
  }
}

let rick = new Personne('Rick', 'Grimes');
console.log(rick.nomComplet());

let nomCompletDeRick = rick.nomComplet;
console.log(nomCompletDeRick());
```

Ressources complémentaires :
  * [Function.prototype.bind() (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/bind)
  * [Le mode strict (MDN)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)