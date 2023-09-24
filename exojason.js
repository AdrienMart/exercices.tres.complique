"use strict"

let tableauCharacteristique=["nerd","sportif","stupide","peureux","courageux","maladroit","adroit"];
let tableauprenom=["Michel","Jacky","Patrick","Kevin","Robert","Dylan","Dédé"];

// maintenant créer 5 personnages au hasard avec nom hasard et charactéristiques
class hero{ //class parce que c'est pratique
    constructor(prenom,characteristique){
        this.prenom=prenom
        this.characteristique=characteristique
    }
}
let tableauvide=[]; //tableau pour les héros
for(let i=0;i<6;i++){
  let choixaleatoire=Math.round(Math.random()*(7-i));//
    let hero1=new hero(tableauprenom[choixaleatoire],tableauCharacteristique[choixaleatoire]);
    tableauvide.push(hero1);
    tableauprenom.splice(choixaleatoire,choixaleatoire);//splice pour supprimer le prenom qui a deja été utilisé
    tableauCharacteristique.splice(choixaleatoire,choixaleatoire);//supprimer characteristique qui a deja été utiliser pour ne pas avoir de doublon(mais ça marche pas)
}


class tueur{ //utiliser class parce que deja fait pour les heros
    constructor(){
    this.prenom="jason";
    this.hp=100;
    this.tableau=[];
    }
    attaque (tableauvide){
       let victime=Math.round(Math.random())*(tableauvide.length-1);
       //tableau commence à 0 donc il faut -1 à length
       let jsp=Math.random();//jsp = chance
       if (jsp < 0.3) {
        console.log(tableauvide[victime].prenom +" "+ tableauvide[victime].characteristique + " a été tué par Jason");
        this.tableau.push(tableauvide[victime].prenom+" ");
        tableauvide.splice(victime,victime)//tué
    }else if(0.3<=jsp && jsp<=0.7) {
        console.log(tableauvide[victime].prenom+ " a esquivé et fait 10 de dmg");
        this.hp=this.hp-10; //-10 à jason        
    }else if(0.7<jsp) {
        console.log(tableauvide[victime].prenom+" "+ tableauvide[victime].characteristique + " s'est sacrifié et a fait 15 dmg");
        this.hp=this.hp-15;
        this.tableau.push(tableauvide[victime].prenom+" ");
        tableauvide.splice(victime,victime);//tué
    }
   }
}

let killer = new tueur();

while(killer.hp>0 && tableauvide.lenght!=0){//si le tueur a plus de hp que 0 et que le tableau ou il y a les hero n'est pas égal à 0 ( ce qui veut dire qu'il reste des héro en vie) alors jason va continuer d'attaquer
    killer.attaque(tableauvide);

}
if(killer.hp=0){//si le tueur a 0 hp alors console log jason mort
    console.log("jason est mort");
    
}
else if(tableauvide.length=1){//si tableau héro fini alors jason a tué tout le monde
    console.log("jason a tué"+killer.tableau+"  RIP");
}