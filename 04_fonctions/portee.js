//fichier 04_02_Portée.html

//alert('coucou');
//ATTENTION évitons de déclarer plusieurs variables dans différents espaces un utilisant un même nom : ici on le fait pour la démo !!!
function porteNew () {
    let xLet = 1;
    var yVar = 2;

    if(true){
        let xLet = 500;//let n'aura pas de portée au-déla de ce bloc
        var yVar = 200;//var aura une portée au déla de ce bloc

        document.getElementById('p1').innerHTML = 'la variable let "xLet" dans le if = '+ xLet;
        document.getElementById('p2').innerHTML = 'la variable let "yVar" dans le if = '+ yVar;
    }//fin if

    document.getElementById('p3').innerHTML = 'la variable let "xLet" hors du if = '+ xLet;
    document.getElementById('p4').innerHTML = 'la variable let "yVar" hors du if = '+ yVar;//yVar affichera la derniére déclarée car var a une portée élargie.
}//fin fonction
porteNew ()

// x et y, ils ont une portée globale et non locale parce qu'ils sont en dé-hors des fonctions
let x = 5;
var y = 10;

function portee1() {//dans cette fonction j'appelle des variables qui ont une portée globale
    document.getElementById('p5').innerHTML =  'Depuis la fonction <code>portée1()</code> : x = '+ x +' et y = '+ y;
}
portee1();

function portee2() {
    let a = 123;
    var b = 456;
    document.getElementById('p6').innerHTML =  'Depuis la fonction <code>portée2()</code> : a = '+ a +' et b = '+ b;
}
portee2();

function portee3() {
    let x = 222;
    var y = 444;
    document.getElementById('p7').innerHTML =  'Depuis la fonction <code>portée3()</code> : x = '+ x +' et y = '+ y;
}
portee3();

//On affiche les globales x et y
document.getElementById('p8').innerHTML =  '=Ce code n\'est pas dans une fonction ! Je suis dans l\'espace global et je cherche les contenus de x et y : x ='+ x +' et y ='+y;

//on va tenter d'afficher les locales cf. message dans la console message normale
document.getElementById('p9').innerHTML = 'Depuis l\'espace local : a = '+ a +' et b = '+ b;
//Uncaught ReferenceError: a is not defined: cela s'affiche dans le console parce que a a une porté locale et non globale






