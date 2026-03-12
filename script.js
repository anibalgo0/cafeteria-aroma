function reservar(){
alert("Mesa reservada ☕\nTe esperamos en Cafetería Aroma");
}

function ocultarTodo(){
document.getElementById("inicio").style.display="none";
document.getElementById("galeria").style.display="none";
document.getElementById("evento").style.display="none";
document.getElementById("contacto").style.display="none";
}

/* controlar boton */
function controlarBoton(seccion){

let boton = document.querySelector(".whatsapp-float");

if(seccion === "inicio" || seccion === "contacto"){
boton.style.display = "none";
}else{
boton.style.display = "flex";
}

}

/* cuando carga la pagina */
window.onload = function(){
controlarBoton("inicio");
}

/* inicio */
document.querySelector('a[href="#inicio"]').addEventListener("click", function(){

ocultarTodo();
document.getElementById("inicio").style.display="block";
controlarBoton("inicio");

});

function mostrarEvento(){

ocultarTodo();
document.getElementById("evento").style.display="block";
controlarBoton("evento");

}

/* galeria */
document.querySelector('a[href="#galeria"]').addEventListener("click", function(){

ocultarTodo();
document.getElementById("galeria").style.display="block";
controlarBoton("galeria");

});

/* evento */
document.querySelector('a[href="#evento"]').addEventListener("click", function(){

ocultarTodo();
document.getElementById("evento").style.display="block";
controlarBoton("evento");

});

/* contacto */
document.querySelector('a[href="#contacto"]').addEventListener("click", function(){

ocultarTodo();
document.getElementById("contacto").style.display="block";
controlarBoton("contacto");

});