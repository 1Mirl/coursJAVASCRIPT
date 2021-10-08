//cf. https://www.pierre-giraud.com/javascript-apprendre-coder-cours/operateur-logique-precedence-associativite/
//fichier introduction.html des structures de contrôle

//alert('coucou');
// les 3 opérateurs ET, OU, ou NON.
let x = 5, y = -20;
console.log(x, y);

//ET noté &&
if(x >= 0 && x <= 10){ //ET noté && dans cet exemple chaque condition doit être vrai
    document.getElementById('p1').innerHTML =
    'x contient ' + x +' une valeur comprise entre 0 et 10';
}

//OU noté ||
if(y < -10 || y > 10){ //OU, noté // ici une seule comparaison suffit pour  que cela soit true
    document.getElementById('p2').innerHTML =
    'y contient '+ y +' une valeur plus petite que -10 ou plus grande que 10';
}

//NON noté !
//opérateur inversé ; ce n'est pas vrai, 5 n'est pas inférieur ou égal à 2, autrement dit, si le test est false l'opérateur inversé (la négation !) renvoie true donc on éxécute
if(!(x <= 2)){ // opérateur inversé = ce n'est pas vrai
    //!(x <= 2)) l'opération est fausse donc renvoie à = vraie
    document.getElementById('p3').innerHTML =
    'x contient ' + x +' une valeur strictement supérieure à 2';
}


