var arrayNumeros = [];
var count = 0;

for(var i = 0; i < 3; i++) {
    arrayNumeros.push(parseInt(prompt("Ingrese un numero:")));
}

var numeroRepetido = arrayNumeros.filter((elemento,index) => {
    return arrayNumeros.indexOf(elemento) !== index;
});

arrayNumeros.forEach(function(value) {
    if(value == numeroRepetido[0]) {
        count += 1;
    }
});

if (numeroRepetido.length > 0) {
    alert("el numero mayor es " + Math.max(...arrayNumeros) + " el numero " + numeroRepetido[0] + " se repite " + count + " veces");
} else {
    alert("el numero mayor es " + Math.max(...arrayNumeros));
}