// RESERVAR MESA
function reservar(){
    alert("Mesa reservada ☕\nTe esperamos en Cafetería Aroma");
}

// OCULTAR TODAS LAS SECCIONES
function ocultarTodo(){
    const secciones = ["inicio","galeria","evento","contacto"];
    secciones.forEach(id => {
        document.getElementById(id).style.display = "none"; // ocultamos todo
    });
}

// CONTROLAR BOTÓN FLOTANTE
function controlarBoton(seccion){
    const boton = document.querySelector(".whatsapp-float");
    boton.style.display = (seccion === "inicio" || seccion === "contacto") ? "none" : "flex";
}

// MOSTRAR SECCIÓN
function mostrarSeccion(seccion){
    ocultarTodo();

    const elem = document.getElementById(seccion);
    if(seccion === "inicio"){
        elem.style.display = "flex"; // mantiene centrado sin tocar height
    } else {
        elem.style.display = "block";
    }

    controlarBoton(seccion);
    aplicarModoOscuro(); // aplica modo oscuro automáticamente
}

// BOTÓN VER EVENTO
function mostrarEvento(){
    mostrarSeccion("evento");
    history.pushState(null,null,"#evento"); // compatibilidad navegador
}

// CAMBIO DE HASH (botón atrás del navegador)
window.addEventListener("hashchange", function(){
    let seccion = location.hash.replace("#","");
    if(seccion === "") seccion = "inicio";
    mostrarSeccion(seccion);
});

// CARGAR PÁGINA
window.addEventListener("load", function(){
    let seccion = location.hash.replace("#","");
    if(seccion === "") seccion = "inicio";
    mostrarSeccion(seccion);
});

// === MODO OSCURO AUTOMÁTICO ===
function aplicarModoOscuro(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        document.body.classList.add('modo-oscuro');
    } else {
        document.body.classList.remove('modo-oscuro');
    }
}

// DETECTAR CAMBIO DE MODO DEL DISPOSITIVO
if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', aplicarModoOscuro);
}

// MEJORA DE RENDIMIENTO: Lazy load para imágenes de galería
document.querySelectorAll('.galeria-container img').forEach(img => {
    img.loading = "lazy";
});

// --- FUNCIONES PARA COOKIES ---
// Guardar una cookie
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + encodeURIComponent(valor) + ";expires=" + fecha.toUTCString() + ";path=/";
}

// Leer una cookie
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const partes = cookies[i].split("=");
        if (partes[0] === nombre) return decodeURIComponent(partes[1]);
    }
    return null;
}

// Borrar una cookie
function deleteCookie(nombre) {
    document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

// EJEMPLO: Guardar cookie "modoOscuro" por 7 días
setCookie("modoOscuro", "si", 7);

// Leer cookie
let modo = getCookie("modoOscuro");
console.log("Modo oscuro guardado:", modo);
