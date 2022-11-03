let baraja = "dpct";
for(var i=0;i<baraja.length;i+=1){
    for(var j=1;j<=12;j+=1){
        if ((baraja[i]==="d" || baraja[i]==="c") && j%3==0)
        console.log(j+baraja[i] + " es roja y múltiplo de 3")
    }
}