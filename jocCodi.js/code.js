//OBJECTES ==> Definim tots els objectes. obj = const
const inpuObj = document.getElementById("paraulaSecreta");
const inpuButton = document.getElementById("comencarPartida");
const imgObj = document.getElementById("imatge");
const paraulaActualObj = document.getElementById("paraula-actual");
const colorBotoObj = document.getElementById("")

//variables globals
let paraulaIntroduida;
let paraulaSecreta;
let contLletraFallada = 0;      
let paraulaActual= [];          //Array buit per fer de manera dinamica, per obtenir tantes lletres com la paraula introduida sigui


function comencaPartida(){ // falta la validació per que ens introdueixi una cadena, no podem fer que l'usuari introdueixi un número
    paraulaSecreta = inpuObj.value;
    
    if(paraulaSecreta){
        if(isNaN(paraulaSecreta)){
            if(paraulaSecreta.length>3){
                console.log(paraulaSecreta);
                console.log(paraulaSecreta.split('')); 
                
                //Deshabilitem l'input i el botó de "començar partida"
                inpuObj.disabled = true;
                inpuButton.disabled = true;
                console.log(paraulaSecreta);

                habilitarBoto() // Habilitem tots els botons
                paraulaActualInicial() //Executem la funció paraulaActualInicial que ens transforma les lletres per '-'

                //Habilit

            } else{
                alert("La paraula ha de contenir més de 3 caràcters");
            }
        }else{
            alert("ERROR. introdueix una paraula, no aceptem números.")
        }    
    }else{
        alert("Has d’afegir una paraula per poder començar a jugar");
    }
}

//Transforma la paraula introduïda per '-'
function paraulaActualInicial(){
    paraulaActual = []; 
    for (let i = 0; i < paraulaSecreta.length; i++) {
        paraulaActual[i] = "-"; 
    }
    
    paraulaActualObj.textContent = paraulaActual.join("");
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

function jugarLletra(obj) {
    let lletraJugada = obj.textContent;         // Obtener la letra del botón jugado
    let lletraEncertada = false;                // Flag para verificar si la letra fue acertada

    // Cada botó que presionarà el deshabilitarem
    obj.disabled = true;
    
    // Recorrrem la paraulaSecreta si conté la lletra jugada
    for (let i = 0; i < paraulaSecreta.length; i++) {
        if (paraulaSecreta[i].toLowerCase() === lletraJugada.toLowerCase()) {
            // Si la lletra jugada coincide con alguna en la paraula secreta
            paraulaActual[i] = lletraJugada;            
            lletraEncertada = true;
            
            // Modificar les propietats del botó
            obj.style.color = "green";           // Canviar el color del text a verd
            obj.style.borderColor = "green";     // Canviar el el contorn a verd

        }
    }

    // Si acertem alguna letra, actualiza la paraula per pantalla
    if (lletraEncertada) {
        paraulaActualObj.textContent = paraulaActual.join(' '); // Mostrar la palabra actual con las letras acertadas
        
        // Sistema de puntuatge sumar, sumar+2...


    }
    else {
        // Si no acerta, incremento el número de fallos i actualitzo la foto
        contLletraFallada++;
        imgObj.src = "img/penjat_" + contLletraFallada + ".jpg";
        
        // Cambiaré les propietats del botó presionat a color a vermell
        obj.style.color = "red"; 
        obj.style.borderColor = "red"; 
        // Si el contador arriba al seu tope (total d'imatges del penjat) s'acaba la partida
        if (contLletraFallada == 10) {
            document.getElementById("main-titol").style.backgroundColor="red";

            setTimeout(() => {
                alert("Has perdut, torna a introduïr una paraula nova");

                habilitarBoto();
                //Reiniciar tots els botons
                obj.style.color="red";
                obj.style.borderColor="red";

                inpuObj.disabled = true;
                inpuButton.disabled = true;

            }, 1000);


        }
    }
}

function deshabilitarBoto(){
    for (let i = 1; i < 26; i ++){
        let literal = "boto_" + i; // Manera dinàmica de fer-ho
        const botoA = document.getElementById(literal)
        botoA.disabled= true;   
    }
}
deshabilitarBoto() //Al començament d'una partida sempre els botons els deshabilitarem

function habilitarBoto(){
    for (let i = 1; i < 26; i ++){
        let literal = "boto_" + i;
        const botoA = document.getElementById(literal)
        botoA.disabled= false;
        //Un cop tots estàn habilitats canvio l'estil a negre  
        botoA.style.color = "black" 
        botoA.style.borderColor = "black" 
    }
}