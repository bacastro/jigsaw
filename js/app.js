//Selección de la dificultad
const dificultad = document.querySelector('#dificultad');
let dificultadSeleccionada; 

document.addEventListener('DOMContentLoaded',()=>{
    dificultad.addEventListener('click', seleccionarDificultad);
})


function seleccionarDificultad(e){
    e.preventDefault();
    if(e.target.classList.contains('btn-select')){
        dificultadSeleccionada = e.target.getAttribute('data-id');
    }

    if(dificultadSeleccionada === "1"){
        window.open(`http://127.0.0.1:5500/facil.html`, "_self");
    };
    if(dificultadSeleccionada==="2"){
        window.open(`http://127.0.0.1:5500/medio.html`, "_self");
    };
    if(dificultadSeleccionada==="3"){
        window.open(`http://127.0.0.1:5500/dificil.html`, "_self");
    };

}
