function puntuaCarta (carta){
    let puntuacion = carta.valor;  //De cada carta, tomará su valor y lo asignará a la función puntuación
    if(carta["valor"]==1){
         puntuacion=20;    //Si la carta es un as, su puntuación no es de 1 sino de 20
    } 
    if (carta["palo"]=="c"||carta["palo"]=="d"){
        puntuacion*=2;  //Si la carta es roja, su valor será el doble
    }
    return puntuacion;
}

function puntuaMano(mano) {
    let total= 0;
    for(let i=0; i<mano.length; i=i+1){ //Recorrerá todas las cartas de la mano
        total = total+puntuaCarta(mano[i]) //Todas las cartas de la mano, las colocará en la función anterior y las irá sumando
    }
    return total
}
function imprimePuntuacion(puntuacion) { //Imprimirá la puntuación total
    console.log("Puntaje: "+ puntuacion)
}
function programa() {
    let mano=[{valor:1 , palo:"d"} ,{valor:7 , palo:"p"}, {valor:10 , palo:"c"}
    ];

    let puntuacion=puntuaMano (mano); //Llamando a la función
    imprimePuntuacion(puntuacion) //Llamando a la función
}

programa() //Llamando al programa