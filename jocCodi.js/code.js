//OBJECTES ==> Definim tots els objectes. obj = const
const inpuObj = document.getElementById("paraulaSecreta");
const inpuButton = document.getElementById("comencarPartida");
const imgObj = document.getElementById("imatge");

//variables globals
let paraulaIntroduida;
let paraulaSecreta;
let contador = 0; //contador per saber quantes vegades clico una lletra


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
            //Mostro per pantalla l'array
            console.log(paraulaSecreta)
            //Habilito tots els botons un cop hagi introduït una cadena
            habilitarBoto() 

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

//mateixa funció per tots els botons
//this ==> això ==> objecte
function jugarLletra(obj){ 
    //Lógica del joc
    let lletraJugada = obj.textContent;
    //console.log(lletraJugada)
    
    //Augmentem cada cop que li donguem a una lletra (botó)
    contador = contador + 1;
    // console.log(contador);

    //Objecte imatge (declarat adalt amb l'id)
    imgObj.src= "img/penjat_"+contador+".jpg";
}

function deshabilitarBoto(){
    for (let i = 1; i < 26; i ++){
        let literal = "boto_" + i; // Manera dinàmica de fer-ho
        const botoA = document.getElementById(literal)
        botoA.disabled= true;   
    }
}
deshabilitarBoto()

function habilitarBoto(){
    for (let i = 1; i < 26; i ++){
        let literal = "boto_" + i;
        const botoA = document.getElementById(literal)
        botoA.disabled= false;   
    }
}

