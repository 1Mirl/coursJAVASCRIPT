// page js pour exo17.html
// alert('coucou');

var nombre;
nombre = prompt('Ecrivez un nombre entre 1 et 100');
console.log(nombre);

for (let i = 1; i < 101; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        document.getElementById('p1').innerHTML += '<p style="background: skyblue; color: #fff;text-align: center;"> GralaBu <br> </p>';
        console.log('i' + "Gralabu");
    }else if(i % 5 == 0){
        document.getElementById('p1').innerHTML += '<p style="background: yellow; color: #fff;text-align: center;"> Bu <br> </p>';
    }else if(i % 3 == 0){
        document.getElementById('p1').innerHTML += '<p style="background: red; color: #fff;text-align: center;"> Grala <br> </p>';
    }else{
        document.getElementById('p1').innerHTML += i + '<br>';
    }
  }






