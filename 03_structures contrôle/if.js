//fichier introduction.html des structures de contrôle

//alert('coucou');

let x = 4;
let y = 0;
//1er if
if(x > 1){ // if (TEST) si test est évolué à true
    alert('x contient ' + x + ' et cette valeur est supérieur à 1');
    //on éxecute ce bloc de code
}
//2e if
if(y < 1){
    alert('y contient ' + y + ' et cette valeur est inférieur à 1');
}
//3e if
if(x == y){
    alert('x contient ' + x + ' ,et y contient ' + y + ' les deux variables contiennent la même valeur');
}
//4e if
//l'alert ne s'affiche pas car la valeur de y qui contient 0, 0 est une des valeurs qui renvoie false
if(y){
    alert('la valeur de y est évaluée à "true"');
}
//5e if
let chaine = '';
if(NaN){
    alert('5/ true /// vrai');
}
//6e 
if((x > 1) == false){
    //si c'est bien faux le code s'exécute
    alert('6/ x qui contient ' + x + ' est supérieur à 1');
}