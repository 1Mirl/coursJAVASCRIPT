//JS pour la page 04 01 intro.html
https://www.pierre-giraud.com/javascript-apprendre-coder-cours/presentation-fonction/

//alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();//ici on exécute le code "caché" derriére la fonction, on appelle ou on l'invoque

//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

//création de fonctions

//1- multiplier le résultat de random() par 100
function randomFois100() {
    return Math.random() * 100;
}
//console.log(randomFois100);
document.getElementById('p3').innerHTML = randomFois100();

//2nd exemple une multiplication 
//mot clef + nom de la fonction()
function multiplier(nbr1, nbr2) {//les paramètres de la fonction
    //return (nbr1 * nbr2);//la fonction simplement
    return ('Multiplication : '+ nbr1 + ' x '+ nbr2 +' = ' + (nbr1 * nbr2));//bloc de code qui renvoie une string avec le calcul
}
//ici on "appelle" la fonction
//un appel de fonction
console.log(multiplier(2,56));// la fonction avec les arguments
document.getElementById('p4').innerHTML = multiplier(56,9);//idem

//EXO faites une fonction pour soustraire un nombre d'un autre
//soustraction
function soustraire(nbr1, nbr2) {
    //return (nbr1 * nbr2);
    return ('Soustraction : '+ nbr1 + ' - '+ nbr2 +' = ' + (nbr1 - nbr2));
}
console.log(soustraire(10,54));
document.getElementById('p5').innerHTML = soustraire(56,9);

//Division
function division(nbr1, nbr2) {
    //return (nbr1 * nbr2);
    return ('Division : '+ nbr1 + ' / '+ nbr2 +' = ' + (nbr1 / nbr2));
}
console.log(division(5,50));
document.getElementById('p6').innerHTML = division(56,9);

//Addition
function addittion(nbr1, nbr2) {
    //return (nbr1 * nbr2);
    return ('addition : '+ nbr1 + ' + '+ nbr2 +' = ' + (nbr1 + nbr2));
}
console.log(addittion(5,40));
document.getElementById('p7').innerHTML = addittion(56,9);

//Le modulo%
function lemodulo(nbr1, nbr2) {
    //return (nbr1 % nbr2);
    return ('Le modulo (le reste de la division) : '+ nbr1 + ' / '+ nbr2 +' = ' + (nbr1 / nbr2) + 'le modulo est ' + (nbr1 % nbr2));
}
console.log(lemodulo(10,54));
document.getElementById('p8').innerHTML = lemodulo(10,54);
