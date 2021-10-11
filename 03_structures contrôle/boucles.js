// JS pour la page boucles

//  barre bolique opposée \
// == veut dire : equivaut à, égal à
// = veut dire : contient
// typeof : c'est NUMBER, des chiffres
// string : c'est une chaîne de caractères, entre des quotes simples ' '
// != veut dire : différent de

// alert('Bom dia!');

// EXO boucle while

let w1 = 0;
console.log(typeof w1, w1);/*  */

while (w1 < 10) {
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + '<br>';
    w1++;
    console.log(typeof w1, w1);
}

// Lecture : 

// Tant que c'est vrai,

// rajoute avec += la chaine de caractere tant que la boucle n'est pas terminée  (fait apparaitre les lignes successives),

// incrémente la valeur de la variable de départ !


// ("incrémenter" c'est "rajouter")
// = fait apparaitre une seule ligne