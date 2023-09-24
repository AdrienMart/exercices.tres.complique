let santeMentale = 10;
let nbrDeFeux = 30; // Initialisation du compteur d'essais.

function feuxMusique() {
  nbrDeFeux++; // Incrémentation du compteur d'essais.
  
  // Générer un nombre aléatoire entre 1 et 5 pour choisir une musique.
  const musique = Math.random() * 5;

  // Simuler les effets de chaque musique.
  if (musique === 1) {
    santeMentale += 0; // La musique 1 améliore la santé mentale de 0
  } else if (musique === 2) {
   santeMentale -= 1; 
   console.log("je suis passé") // La musique 2 détériore la santé mentale.
  } 
  else if (musique === 3) {
    santeMentale -= 0;
  }
  else if (musique === 4) {
    santeMentale -= 0;
  }
  else if (musique === 5) {
    santeMentale -= 0; 
  }
  return musique; // Retourne le numéro de la porte choisie.

}

while (santeMentale > 0 && nbrDeFeux > 0) {
  const musique = feuxMusique();
}

if (santeMentale <= 0) {
  console.log("John a épuisé sa santé mentale.Il explose");
} else {
  console.log("John est arrivé en changeant de : " + (10-santeMentale) + "taxi");
}