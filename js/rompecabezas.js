const dificultad = document.querySelector('.contenedor').getAttribute('data-dificultad');
const btnConfirmar = document.querySelector('#btn-confirmar');
let piezas = document.querySelectorAll('.pieza');
let aleatorio;
let infFichaSeleccionada=null;
let infFichaCambiar=null;
let numFichaCambiar;
let numFichaSeleccionada;
let fichaCambiar;
let fichaSeleccionada;
let idFichaSeleccionada;
let idFichaCambiar;

document.addEventListener('DOMContentLoaded', () =>{
    desordenarRompecabezas(dificultad);
    btnConfirmar.addEventListener('click', verificarRompecabezas);
})

function desordenarRompecabezas(dificultad){
    let valor=arrayTamano(dificultad);
    let imagenMuestra= document.querySelector('.imagen-muestra img');  

    if(dificultad==='facil'){
        aleatorio = Math.ceil(Math.random()*3);
        valor.sort(function() { return Math.random() - 0.5 });
    }else if(dificultad === 'medio'){
        aleatorio = 4;
        valor.sort(function() { return Math.random() - 0.5 });
    }else if(dificultad === 'dificil'){
        aleatorio = 5;
        valor.sort(function() { return Math.random() - 0.5 });
    }

    for (let i = 0; i < piezas.length; i++) {
        piezas[i].src=`./img/rompecabezas${aleatorio}/${valor[i]}.png`;
        piezas[i].setAttribute('dataid',`pieza${valor[i]}`);
        piezas[i].addEventListener('click',seleccionarFicha);
    }

    imagenMuestra.setAttribute('src',`./img/rompecabezas${aleatorio}/10.png`)
}

function seleccionarFicha(e){
    e.preventDefault();

    if(infFichaSeleccionada!=null && infFichaCambiar==null){
        infFichaCambiar=e.target.src;
        idFichaCambiar=e.target.attributes.dataid.value;
        numFichaCambiar=e.target.id;
        fichaCambiar = document.querySelector(`#${numFichaCambiar}`);
    }

    if(infFichaSeleccionada==null){
        infFichaSeleccionada=e.target.src;
        idFichaSeleccionada=e.target.attributes.dataid.value;
        numFichaSeleccionada=e.target.id;
        fichaSeleccionada = document.querySelector(`#${numFichaSeleccionada}`);
    }

    if(infFichaSeleccionada!=null && infFichaCambiar!=null){
        fichaSeleccionada.src=infFichaCambiar;
        fichaCambiar.src=infFichaSeleccionada;
        fichaSeleccionada.attributes.dataid.value=idFichaCambiar;
        fichaCambiar.attributes.dataid.value=idFichaSeleccionada;
        infFichaSeleccionada=null;
        infFichaCambiar=null;
    }    
}

function verificarRompecabezas(){
    /* e.preventDefault(); */
    let valorId;
    let valorDataid;
    let resultado;

    for (let i = 0; i < piezas.length; i++) {
        valorId= piezas[i].id;
        valorDataid=piezas[i].attributes.dataid.value;
        if(valorId === valorDataid){
            resultado=true;
        }else{
            resultado=false
            break;
        }
    }

    if(resultado){
        console.log("Has Ganado");
    }else{
        console.log("Revisa que no esta completo");
    }
}

function arrayTamano(dif){
    const arr1 = [];
    let tamano;
    if(dif === "facil"){
        tamano = 9;
    }else if(dif === "medio"){
        tamano = 16;
    } else if(dif === "dificil"){
        tamano = 25
    }

    for (let z = 0; z < tamano; z++) {
        arr1.push(z+1);
    }

    return arr1;
}




