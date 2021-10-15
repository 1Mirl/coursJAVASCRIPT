//fichier 04_04_conclusion.html 

//alert('coucou');

//On crée une fonction anonyme
//function (){
    //alert('Alerte exécutée dans une fonction anonyme');
//}

let monAlert = function() {
    alert('Alerte exécutée dans une fonction anonyme ')
}
monAlert();

//auto-invocation d'une fonction anonyme
//function (){
    //alert('Alerte exécutée dans une fonction anonyme');
//}

(function (){
    alert('Alerte dans une seconde fonction');
})();

let para1 = document.getElementById('p1');//En variable je passe le p id p1
console.log(typeof para1, para1);

para1.addEventListener('click', function (){//Sur cette variable j'ajoute un écouteur d'événement avec, au clique, une fonction anonyme qui s'éxécute à la demande
    alert('Eh ! Tu as bien cliqué sur le paragraphe 1 !')
});

let para2 = document.getElementById('p2');
para2.addEventListener('dblclick', function (){
    alert('Et là un double clique sur le paragraphe')
});

//fonction récursive
function decompte(t){
    if (t > 10){
        document.getElementById('p3').innerHTML += t + ' - ';
        return decompte(t - 10);
    }else {
        return t ;
    }
}//fin fonction

decompte(1000);