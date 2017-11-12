function Personne(prenom, nom) {
  this.prenom = prenom;
  this.nom = nom;

  this.nomComplet = function () {
    debugger;
    return this.prenom + ' ' + this.nom;
  }
}

let rick = new Personne('Rick', 'Grimes');
console.log(rick.nomComplet());

let nomCompletDeRick = rick.nomComplet;
console.log(nomCompletDeRick());
