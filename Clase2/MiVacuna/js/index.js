function ocultarEmbarazo() {
    document.getElementById("tagEmbarazada").style.display = "none";
    document.getElementById("tagSemEmbarazo").style.display = "none";
};

function mostrarEmbarazo() {
    document.getElementById("tagEmbarazada").style.display = "flex";
    document.getElementById("tagSemEmbarazo").style.display = "flex";
};

function ocultarSemEmbarazo() {
    document.getElementById("tagSemEmbarazo").style.display = "none";
};

function mostrarSemEmbarazo() {
    document.getElementById("tagSemEmbarazo").style.display = "flex";
};

function validarVacuna(){
    var sexo;
    var embarazo;
    var semanasEmbarazo;
    var currentDate = new Date();
    var anionacimiento = 0;
    var edad = 0;
    var estado;
    var valorEstado = false;

    anionacimiento = new Date(document.getElementById("fechaNacimiento").value).getFullYear();
    edad = parseInt(currentDate.getFullYear()) - parseInt(anionacimiento);
    sexo = document.querySelector('input[name="sexo"]:checked').value;
    if (sexo == "F") {
        embarazo = document.querySelector('input[name="embarazada"]:checked').value;
        if(embarazo == "embsi") {
            semanasEmbarazo = document.getElementById("semEmbarazo").value;
        }
    }
    estado = document.getElementById("estados");
    valorEstado = estado.options[estado.selectedIndex].value;
    console.log(semanasEmbarazo);
    if(sexo == "F" && embarazo == "embsi" && semanasEmbarazo != undefined && semanasEmbarazo > 9 && edad >= 18) {
        //Grupo embarazadas con mas de 9 semanas de embarazo
        alert("Se permite vacuna - Grupo Embarazadas");
    } else if (edad >= 30) {
        alert("Se permite vacuna - Grupo Mayores de 30");
    } else if (edad >= 18 && edad < 30 && embarazo == "embno" && valorEstado == "si"){
        alert("Se permite vacuna - Grupo jovenes");
    } else {
        alert("No se permite vacuna");
    }
};