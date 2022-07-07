var arrayNumeros = [];

for(var i = 0; i < 2; i++) {
    arrayNumeros.push(parseInt(prompt("Ingrese un numero:")));
}

if(arrayNumeros[0] != arrayNumeros[1]) {
    alert("el numero menor es " + Math.min(...arrayNumeros));
}