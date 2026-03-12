function reservar(){
alert("Mesa reservada ☕\nTe esperamos en Cafetería Aroma");
}

/* ocultar todas */

function ocultarTodo(){

document.getElementById("inicio").style.display="none";
document.getElementById("galeria").style.display="none";
document.getElementById("evento").style.display="none";
document.getElementById("contacto").style.display="none";

}

/* mostrar seccion */

function mostrarSeccion(seccion){

ocultarTodo();

document.getElementById(seccion).style.display="block";

}

/* detectar cambio de URL */

window.addEventListener("hashchange", function(){

let seccion = location.hash.replace("#","");

if(seccion === "") seccion = "inicio";

mostrarSeccion(seccion);

});

/* cuando carga la página */

window.onload = function(){

let seccion = location.hash.replace("#","");

if(seccion === "") seccion = "inicio";

mostrarSeccion(seccion);

};