// CORRECTION

var disMoi = '';
var i = 1;

while((disMoi !== 'oui') && (disMoi !== 'non')){
    disMoi = prompt('On joue au ni oui ni non!');
    i++;
}
document.getElementById('p1').classList.add('stabilo');
document.getElementById('p1').innerHTML = 'Vous avez perdu';