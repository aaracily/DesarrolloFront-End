function mostrarfecha(){
    const fecha = new Date();
    var dia = fecha.getDay();
    //puede aplicarse un array https://www.w3schools.com/jsref/jsref_getday.asp
    //const semana =[ "Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"]
    //var dia = semana.[fecha.getDay()];
    switch (dia){
        case 0: dia = "Domingo";
        alert("¡a de playa!")
        break;
        case 1 : dia = "Lunes";
        break;
        case 2 : dia = "Martes";
        break;
        case 3 : dia = "Miercoles";
        break;
        case 4 : dia = "Jueves";
        break;
        case 5 : dia = "Viernes";
        break;
        case 6 : dia = "Sábado";
        
    }
    var numDia = fecha.getDate();
    const m = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",]
    var mes =m[fecha.getMonth()];

    var ano = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    alert("Hoy es   "+  dia +"  "+ numDia +"  de  "+ mes +"  de  "+ano+ "   Son las "+ hora + "con "+ minutos +" minutos "+ segundos +"  segundos");
   //comentado ya que envie los datos por el alert
    // document.getElementById("verFecha").innerHTML= "Hoy es   "+  dia +"  "+ numDia +"  de  "+ mes +"  de  "+ano+ "   Son las "+ hora + "con "+ minutos +" minutos "+ segundos +"  segundos";
   
   
}
//mostrarfecha();
//------------------------
/*comentado ya que incorporaré un alert, sin comentar se actualiza la funcion cada segundo
//------- fuente :https://www.w3schools.com/jsref/met_win_setinterval.asp
window.onload = function() {
    setInterval(mostrarfecha, 1000);
}*/

//----------------fuente->https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_now2
var fecha1 = new Date('2023/12/31 23:59:59');
var fecha2 = new Date();
var resta = fecha1 - fecha2;
var dias= Math.round(resta/ (1000*60*60*24));
document.getElementById("dias").innerText= dias +"  dias" ;
var horas=Math.round(resta/ (1000*60*60));
document.getElementById("horas").innerText=horas +"  horas";
var minutos = Math.round(resta/ (1000*60));
document.getElementById("minutos").innerText= minutos +"  minutos";
var segundos= Math.round(resta/ (1000));
document.getElementById("segundos").innerText= segundos +"  segundos";
/*console.log("dias"+Math.round(resta/ (1000*60*60*24)))
console.log("horas"+ Math.round(resta/ (1000*60*60)));
console.log("minutos"+ Math.round(resta/ (1000*60)));
console.log("segundos"+ Math.round(resta/ (1000)));*/


 


    

