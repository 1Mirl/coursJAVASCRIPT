// page js pour exo16.html
// alert('coucou');

let onJoue;
onJoue = prompt('On joue au "oui ou non"??. Allez tappez quelque chose !');
console.log(onJoue);

while ((onJoue !== 'oui') && (onJoue!== 'non')) {
    onJoue = prompt('On joue au "oui ou non". Allez tappez quelque chose !');
    console.log(onJoue);
}
console.log('--- It over ---');
console.log(onJoue);
document.getElementById('p1').innerHTML = 'Vous avez perdu !';



