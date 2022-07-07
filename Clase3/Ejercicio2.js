var jugador1 = parseInt(prompt("Eliga [1]Piedra, [2]papel o [3]tijeras"));
var jugador2 = parseInt(prompt("Eliga [1]Piedra, [2]papel o [3]tijeras"));
var ganador;
switch (jugador1) {
    case 1:
        switch(jugador2) {
            case 1:
                ganador = "empate";
                break;
            case 2:
                ganador = "jugador2";
                break;
            case 3:
                ganador = "jugador1";
                break;
        }
        break;
    case 2:
        switch(jugador2) {
            case 1:
                ganador = "jugador1";
                break;
            case 2:
                ganador = "empate";
                break;
            case 3:
                ganador = "jugador2";
                break;
        }
        break;
    case 3:
        switch(jugador2) {
            case 1:
                ganador = "jugador2";
                break;
            case 2:
                ganador = "jugador1";
                break;
            case 3:
                ganador = "empate";
                break;
        }
        break;
}

if (ganador == "empate") {
    alert("El resultado es " + ganador);
} else {
    alert("El ganador es: " + ganador);
}