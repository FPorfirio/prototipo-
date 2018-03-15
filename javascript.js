var total = 0;
var meses = [12, 15, 17, 23, 25]

function promedios(x){
    x.forEach(function(element){
       total += element;       
    });

    total = total/meses.length;
    console.log(total);
    totalSumaCuadrada = 0;

    x.forEach(function(element){
       totalSumaCuadrada +=  (element - total) * (element - total); 
       console.log(totalSumaCuadrada);
    });

    console.log(totalSumaCuadrada)

   var totalVarianza = totalSumaCuadrada / meses.length;
    console.log(totalVarianza);
}


promedios(meses);