function reservar(){
alert("Mesa reservada ☕\nTe esperamos en Cafetería Aroma");
}

/* ocultar secciones */

function ocultarTodo(){

document.getElementById("inicio").style.display="none";
document.getElementById("galeria").style.display="none";
document.getElementById("evento").style.display="none";
document.getElementById("contacto").style.display="none";

}

/* controlar boton flotante */

function controlarBoton(seccion){

let boton = document.querySelector(".whatsapp-float");

if(seccion === "inicio" || seccion === "contacto"){
boton.style.display = "none";
}else{
boton.style.display = "flex";
}

}

/* mostrar seccion */

function mostrarSeccion(seccion){

ocultarTodo();

document.getElementById(seccion).style.display="block";

controlarBoton(seccion);

}

/* cambio de URL */

window.addEventListener("hashchange", function(){

let seccion = location.hash.replace("#","");

if(seccion === "") seccion = "inicio";

mostrarSeccion(seccion);

});

/* cargar pagina */

window.onload = function(){

let seccion = location.hash.replace("#","");

if(seccion === "") seccion = "inicio";

mostrarSeccion(seccion);

};