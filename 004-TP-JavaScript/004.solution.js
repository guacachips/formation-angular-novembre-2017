"use strict";

class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
  }

  nomComplet() {
    return `${this.prenom} ${this.nom}`;
  }

  nomCompletInverse() {
    return `${this.nom} ${this.prenom}`;
  }

  sePresenter() {
    console.log(`Bonjour, je suis ${this.nomComplet()}`);
  }
}

class Survivant extends Personne {
  constructor(prenom, nom, arme, villesVisitees) {
    super(prenom, nom);
    this.arme = arme;
    this.villesVisitees = villesVisitees;
  }

  enoncerLesVillesVisitees() {
    this.villesVisitees.forEach(ville => console.log(`${this.nomComplet()}: j'ai visité ${ville}`));
  }
}

let rickLeSurvivant = new Survivant('Rick', 'Grimes', 'Revolver', ['Atlanta', 'Washington']);
rickLeSurvivant.sePresenter();
rickLeSurvivant.enoncerLesVillesVisitees();