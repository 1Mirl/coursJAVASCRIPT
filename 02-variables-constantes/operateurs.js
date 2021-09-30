//JS pour les opérateurs

//alert('coucou');

let X = 200;
let y = 4;
let z = 40;

console.log(X,y,z);

let a = X + 1;
let b = X + y;
let c = X - y;
let d = X + y;
let e = X / y;
//% le modulo
let f = 10 % 3;
//**: exponentielle ou 2 puissance 3 */
let g = 2 ** 3;

console.log(a, b, c, d, e,);

console.log(f);

console.log(g);

//une alert pour afficher les résultats
// \n pour aller à la ligne dans une alerte

alert('a contient: ' +a+
'\n b contient: ' +b+
'\n c contient: ' +c+
'\n d contient: ' +d+
'\n e contient: ' +e+
'\n f contient: ' +f+
'\n g contient: ' +g+ 'fin des résultats'
);

//priorités des calculs

var h = 1 - 2 - 3;
//le calcul se fait de gauche à droite
console.log(h);
let j = 1 + 4 - 5;
console.log(j);
//sauf pour l'élevation qui se fait de droite à gauche
//2**3 = 8 puis 8 ** 3
let k = 2 ** 3 ** 2;
console.log(k);

//avec des parenthèses
let l = 1 - (2*3)* 3;
console.log(l);

let m = 58;
//console.log(m);
alert(m);
m = 2;
console.log(m);

m = 58;
console.log(m);


