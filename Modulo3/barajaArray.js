let palos =["d","p","c","t"];
let baraja = [];
var filtroRojas = [];
var filtroNegras=[];
for (var i = 0; i<palos.length;i+=1){
    for(var j=1;j<=12;j+=1){
        baraja[baraja.length] = {valor:j, palo:palos[i]};   
    } 
}
 console.log(baraja);
 //Filtrando por color
for (var i=0;i < baraja.length;i+=1){
    if (baraja[i]["palo"]==="d"|| baraja[i]["palo"]==="c"){
        filtroRojas[filtroRojas.length] = baraja[i]
    }
    else{
        filtroNegras[filtroNegras.length]= baraja[i]
    }
}

console.log(filtroRojas);
console.log(filtroNegras);
