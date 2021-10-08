//fichier L'opérateur ternaire
//cf. https://www.pierre-giraud.com/javascript-apprendre-coder-cours/operateur-ternaire/
//alert('coucou');

let x = 15;
let y = -20;
console.log(x, y);



//faire un if else pour vérifier si x est supérieur ou égal à 10
//Et on infecte le résultat dans p1

if(x >= 10){
    document.getElementById('p1').innerHTML = 'Pour x contient '+ x +' sa valeur est sup. à 10';//'x est supérieur ou égal à 10'; ('vrai');
}else{
    document.getElementById('p1').innerHTML = 'x est inférieur à 10';
}//('faux');

//La même condition en ternaire