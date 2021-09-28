//mon second fichier externe en js
//création de 3 variables qui ne stockent pas de valeurs

let prenom;
console.log(prenom);
let monAge;

var ville;

// le signe égal = est opérateur d'affectation, cela signifie que prenom contient un élément. Et ici, prenom est le nom de la variable
//let prenom = 'jean'; //cette variable contient une chaîne de caractères

console.log(prenom);

//let monAge;
monAge = 40; //cette variable contient un nombre

//ceci fonctionne avec var on initialise la variable aprés affectation
nom = 'Yourcenar';
var nom;
console.log(nom);

//ceci ne fonctionne pas avec let il faut initialiser la variable avant affectation
//vehicule = 'autobus';
//let vehicule;
//console.log(vehicule)

var chien = 'Médor';
console.log(chien);
var chien = 'kiki';
console.log(chien);

//ceci ne fonctionne pas
//let chat ='minet';
//console.log(chat);
//let chat = 'minouchette';

if(true){
    let animal = 'Tigre';
    console.log(animal);
}

//console.log(animal); ça fonctionne pas parce que let à une portée local et non externe.

if(true){
    var objet = 'lampe';
    console.log(objet);
}
console.log(objet); //mais avec la var cela fonctionne car celle-ci à une portée global donc même à l'externe.