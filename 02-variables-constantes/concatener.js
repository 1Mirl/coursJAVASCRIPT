//scripts pour la page concaténation
//alert('coucou !');
// une variable dans laquelle on met notre age avec un calcul

let monAge = 18 + 2;
console.log(monAge);

//utilisation du caractére d'échappement
let phrase = 'Bonjour j\'ai';

//let phrase2 = "Bonjour j'ai faim";

let test = '4+5';

console.log(phrase);

console.log(monAge, phrase);

//MINI EXO faire une alerte et mettre dans l'alerte "Bonjour j'ai 20 ans";

let phrase3 = 'Bonjour j\'ai 20 ans';

villeNaissance = prompt('Bonjour j\'ai 20 ans');

console.log(phrase3);

alert(phrase3);

alert('Bonjour j\'ai 20 ans ');

//correction:
alert(phrase + '' + monAge + 'ans');

let x = 501;
let y = 99;

//MINI EXO écrire, dans une alerte "x contient 501, y contient 99 : leur somme est égale à 600"

alert ('x + y');
alert ('somme=600');

//correction:

//let somme = x + y;
//console.log(a);

//console.log(x,y);
//console.log(x + y);

//let a = x + y;
//console.log(a);

console.log(x,y); //pour afficher la valeur de x et y
console.log('x contient' + x); //pour afficher la phrase ci-dessus.

console.log('x contient ' + x + 'y contient' + y + 'leur somme est égal à ' + (x+y));

//alert('x contient ' + x + ' y contient ' + y + ' leur somme est ègale à ' + somme);

//en littéraux de gabarits avec l'accent grave
alert(`x contient ${x}`);

alert(`y contient ${y}`);

alert(`x contient ${x} 
y contient ${y} 
leur somme est égale à {x+y}`);


