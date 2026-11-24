//UNA FUNCION QUE DECIDE 
function puedereservar (cantidad){
    if (cantidad <= 2){
        return true;
    }else{
        return false;
    }
}

if(puedereservar(2)){
    console.log("reserva confirmada");
} else {
    console.log("lo siento, maximo 2 tazas por persona");
}

//UNA FUNCION PARECIDA GENERADA POR IA
function puedereservar(cantidad){
    return cantidad <= 2;
}