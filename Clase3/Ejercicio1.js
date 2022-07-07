var nombre = prompt("Ingrese su nombre:").toLowerCase();
var edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
    if (nombre == "carlos" || nombre == "mario") {
        alert("Puede pasar al VIP");
    } else {
        alert("Puede entrar a la discoteca");
    }
} else {
    alert("No puede entrar a la discoteca");
}