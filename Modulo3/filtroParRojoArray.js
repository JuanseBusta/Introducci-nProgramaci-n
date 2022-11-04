let palos =["d","p","c","t"];
let baraja = [];
var filtroRojasPar = [];
for (var i = 0; i<palos.length;i+=1){
    for(var j=1;j<=12;j+=1){
        baraja[baraja.length] = {valor:j, palo:palos[i]};
    } 
}
 //Filtrando
for (var i=0;i < baraja.length;i+=1){
    if ((baraja[i]["palo"]==="d"|| baraja[i]["palo"]==="c")&&baraja[i]["valor"]%2===0){
        filtroRojasPar[filtroRojasPar.length] = baraja[i]
    }
}
console.log(filtroRojasPar); //Imprime un array que contiene únicamente las cartas rojas pares
console.log(filtroRojasPar[filtroRojasPar.length-1]); //Imprime la última carta de la baraja filtrada
