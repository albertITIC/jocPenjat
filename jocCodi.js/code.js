//OBJECTES ==> Definim tots els objectes. obj = const
const inpuObj = document.getElementById("paraulaSecreta");
const inpuButton = document.getElementById("comencarPartida");

function comencaPartida(){ // falta la validació per que ens introdueixi una cadena, no podem fer que l'usuari introdueixi un número
    paraulaSecreta = inpuObj.value;
    
    //Validem que introdueixi una paraula
    if(paraulaSecreta){
        //Validar que la paraula introduïda sigui major a 3
        if(paraulaSecreta.length>3){
            console.log(paraulaSecreta);
            console.log(paraulaSecreta.split('')); // La cadena introduïda ens ho converteix a un array
            //Si les variables són les mateixes deshabilitem que puguin tornar-les a escriure
            inpuObj.disabled = true;
            inpuButton.disabled = true;

        } else{
            alert("Has d'introduïr almenys una paraula de 4 lletres");
        }
        
    }else{
        alert("Introdueix una paraula!");
    }

}

function mostrarParaula(){
    //Canviar el valor de tipus "password" per "text"
    if(inpuObj.type === "password"){
        inpuObj.type="text";
    }
    // Si ja esta en mode "text" passar-ho a "password"
    else{
        inpuObj.type="password";
    }

}