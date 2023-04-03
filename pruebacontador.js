/*------- fuente :https://www.w3schools.com/jsref/met_win_setinterval.asp
window.onload = function() {
    setInterval(mostrarfecha, 1000);
}
//-------------------//
/*const finA= new Date("11 31, 2023 23:59:59").getTime();
 var intervalo =setInterval(function(){
    const fAct =new Date();
    var diaAct =fAct.getTime();
   

    var diaFin= finA.getTime();

    var dif = diaFin- diaAct;
    
    var dia= Math.floor(dif/(1000* 60* 60*24));
    var horas= Math.floor((dif%(1000* 60* 60*24))/(1000* 60* 60));
    var minutos= Math.floor((dif%(1000* 60* 60))/(1000* 60));
    var segundos= Math.floor((dif%(1000* 60))/(1000));

    document.getElementById("dias").innerHTML=dia;
    document.getElementById("horas").innerHTML=horas;
    document.getElementById("minutos").innerHTML=minutos;
    document.getElementById("segundos").innerHTML=segundos;

    if(dif <0){
        clearInterval(intervalo);
    }
 } ,1000);*/



