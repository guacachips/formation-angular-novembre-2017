"use strict";

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

// Constructor de la classe Survivant
function Survivant(prenom, nom, arme, villesVisitees) {
  Personne.call(this, prenom, nom);
  this.arme = arme;
  this.villesVisitees = villesVisitees;
}

Survivant.prototype = Object.create(Personne.prototype);
Survivant.prototype.constructor = Survivant;

Survivant.prototype.enoncerLesVillesVisitees = function enoncerLesVillesVisitees() {
  this.villesVisitees.forEach(function (ville) {
    console.log(this.nomComplet() + ': j\'ai visité ' + ville);
  });
}

// let rickLeSurvivant = new Survivant('Rick', 'Grimes', 'Revolver', ['Atlanta', 'Washington']);
// rickLeSurvivant.sePresenter();
// rickLeSurvivant.enoncerLesVillesVisitees();