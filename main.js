const age=prompt("ingresa tu edad");
const residence=prompt("reside en algun municipio del pais");
const isAdult=age>=18;
const isLocatedNorthFrontier=residence.toUpperCase()==="SI";
const pregnat=prompt("S e encuentra en estado de embarazo");
const isstatePregnat=pregnat.toUpperCase==="SI";
const time= prompt("cuantas semanas tiene de embarazo");
const timePregnat=time>=9;
const bornAge=prompt("cual es su año de nacimiento");
const actualAge=2023;
const sumAge=actualAge-bornAge;

if(isAdult && isLocatedNorthFrontier){
    document.write("Tranquilo te puedes vacunar <br> ");
    console.log("Tranquilo te puedes vacunar");
}else{
    document.write("No te puedes vacunar<br>");
    console.log("No te puedes vacunar");
} 

if(isstatePregnat && timePregnat){
    document.write("Tranquilo te puedes vacunar <br> ");
    console.log("Tranquilo te puedes vacunar");
}else{
    document.write("No te puedes vacunar <br>");
    console.log("No te puedes vacunar");
}

if(sumAge>=30){
    document.write("Tranquilo te puedes vacunar <br> ");
    console.log("Tranquilo te puedes vacunar");
}else{
    document.write("No te puedes vacunar<br>");
    console.log("No te puedes vacunar");
} 















document.write(`EL EJERCICIO TERMINO`);
    
    
   



//const pregnat=prompt("Se encuentra embrazada en estos momentos")