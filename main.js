const age=prompt("ingresa tu edad");
const residence=prompt("reside en algun municipio del pais");
const isAdult=age>=18;
const isLocatedNorthFrontier=residence.toUpperCase()==="SI";

if(isAdult && isLocatedNorthFrontier){
    document.write("Tranquilo te puedes vacunar");
    console.log("Tranquilo te puedes vacunar");
}

else {
    document.write("No te puedes vacunar");
    console.log("No te puedes vacunar");
}
   


