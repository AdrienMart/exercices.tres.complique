let santeMentale = 10;
let feu = 30; // Initialisation du compteur de feu.
let taxi=0;
function taxiMusique() {
  feu--; // Incrémentation du compteur de feu -1 à chaque tour.
  
  // Générer un nombre aléatoire entre 1 et 5 pour la musique dans le taxi.
  let musiqueliste = Math.floor(Math.random() * 5) + 1;
    let titreMusique;
  // switch pour chaque cas de musique
  switch (musiqueliste) {
        case 1:
           titreMusique="wejdene";
           santeMentale -=1;
           taxi +=1;
        break;
        case 2:
            titreMusique="jsp";
        break;
        case 3:
            titreMusique="jsp2";
        break;
        case 4:
            titreMusique="jsp3"
        break;
        case 5:
            titreMusique="jsp4"
        break;

  }


  return titreMusique; // Retourne le numéro de la musique chosie.
}

while (santeMentale > 0 && feu >0) {
  let listeMusique = taxiMusique();
  console.log(`john a écouté ${listeMusique}. Santé mentale actuelle : ${santeMentale} feu rouge restant ${feu}`);
  if (listeMusique=="wejdene"){
    console.log(`john change de taxi et perd 1 de santé mentale`);//si il y a wejdene il y aura écrit ça dans le console log

  }
}

if (santeMentale <= 0) {
  console.log("john explose");//si la santé mentale de john est égale ou inférieur à 0 john explose et il faut console log pour écrire
} else {
  console.log("john est rentré en utilsant : " + (taxi)+" taxi");//sinon écrire john est rentré et utilisant la fonction taxi qui donne le nombre de taxi mais il faut quand même écrire le mot taxi
}