//fichier introduction.html des structures de contrôle

//alert('coucou');
//test 1
let x = '4';
console.log(x);
console.log(typeof x);
console.log(typeof x, x); //il donne le type d'x et la valeur d'x

let testEgalValeur = x == 4;
console.log(testEgalValeur);

//test 2
let testEgalValeurType = x === 4;
//le contenu égal en type de données ET valeur
console.log(testEgalValeurType);//le résultat est faux car il n'est pas un number mais un STRING(ligne 5 parce qu'il y a des quotes).

let testDifferenceValeur = x != 4;
console.log(testDifferenceValeur);

let testDifferenceValeurType = x !== 4; //différent en valeur OU en types
console.log(testDifferenceValeurType);

let testInferieur = x < 4;
console.log(testInferieur);

let testSuperieur = x > 4;
console.log(testSuperieur);

let testInferieurEgal = x <= 4;
console.log(testInferieurEgal);

let testSuperieurEgal = x <= 4;
console.log(testSuperieurEgal);