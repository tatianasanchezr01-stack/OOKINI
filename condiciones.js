//datos de la condicion
const cupoCata = 8;
const inscritos = 5;


//condicions de cata abierta o llena 
// si el numero de cupos es mayor que el numero de inscritos devuelve a "hay cupos, abrir reserva"
// si no devuelve "cata llena, ofrecer lista de espera"
if (cupoCata> inscritos){
    console.log("hay cupos, abrir reserva");
} else {
    console.log("cata llena, ofrecer lista de espera");
}