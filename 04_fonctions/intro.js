//JS pour la page 04 01 intro.html

alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();//ici on exécute le code "caché" derriére la fonction, on appelle ou on l'invoque

//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;