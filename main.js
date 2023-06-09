const age=prompt("ingresa tu edad");
const residence=prompt("reside en algun municipio del pais");
const isAdult=age>=18;
const isLocatedNorthFrontier=residence.toUpperCase()==="SI";
const pregnat=prompt("Se encuentra embrazada en estos momentos");
const isstatePregnat=pregnat.toUpperCase==="SI";
const time= prompt("cuantas semanas tiene de embarazo");
const bornAge=prompt("cual es su año de nacimiento");
const actualAge=2023;
const sumAge=actualAge-bornAge;



if((isAdult && isLocatedNorthFrontier)||(isstatePregnat && time>=9)||(sumAge>=30)){
    document.write("Tranquilo te puedes vacunar ");
    console.log("Tranquilo te puedes vacunar");
}else{
    document.write("No te puedes vacunar");
    console.log("No te puedes vacunar");
} 

    
    
   



