//Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opción
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () { efectoHabilidades() };

//función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("java").classList.add("barra-progreso4");
    }

}

//FUNCIÓN PARA LAS FRASES CAMBIANTES
// Array con las frases para cambiar
var frases = [
    "La actitud siempre es importante!",
    "Nunca dejes de aprender!",
    "El éxito es el resultado del esfuerzo!",
    "La perseverancia lleva al triunfo!",
    "Sueña en grande y trabaja duro!",
];

// Obtener el elemento del encabezado
var fraseCambiante = document.getElementById("frase-cambiante");

// Función para cambiar la frase automáticamente
function cambiarFrase() {
    // Obtener una frase aleatoria del array
    var indice = Math.floor(Math.random() * frases.length);
    var nuevaFrase = frases[indice];

    // Asignar la nueva frase al encabezado
    fraseCambiante.textContent = nuevaFrase;
}

// Cambiar la frase inicial al cargar la página
cambiarFrase();

// Cambiar la frase cada 5 segundos (5000 milisegundos)
setInterval(cambiarFrase, 5000);


var opciones = document.querySelectorAll('#links a');
var secciones = document.querySelectorAll('section');

function actualizarOpciones() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight;

    secciones.forEach(function (seccion, indice) {
        var posicion = seccion.offsetTop - 100; // Ajusta el valor "100" según sea necesario para cambiar el punto de activación

        if (indice === secciones.length - 1) {
            var alturaTotal = seccion.offsetTop + seccion.offsetHeight;
            var finalScrollPos = scrollPos + windowHeight;

            if (finalScrollPos >= alturaTotal) {
                opciones.forEach(function (opcion) {
                    opcion.classList.remove('seleccionado');
                });

                opciones[indice].classList.add('seleccionado');
            }
        } else if (posicion <= scrollPos && (posicion + seccion.offsetHeight) > scrollPos) {
            opciones.forEach(function (opcion) {
                opcion.classList.remove('seleccionado');
            });

            opciones[indice].classList.add('seleccionado');
        }
    });
}

window.addEventListener('scroll', actualizarOpciones);




// Función para validar el formato de correo electrónico
function validarCorreoElectronico(correo) {
    var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
}


// Función para validar el formato de correo electrónico
function validarCorreoElectronico(correo) {
    var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
}


// Obtén el elemento del icono de idioma
var idiomaIcono = document.getElementById('idioma-icono');
// Obtén el elemento del menú de idiomas
var menuIdiomas = document.getElementById('menu-idiomas');

// Agrega un evento clic al icono de idioma
idiomaIcono.addEventListener('click', function () {
    if (menuIdiomas.style.display === 'none') {
        menuIdiomas.style.display = 'block';
    } else {
        menuIdiomas.style.display = 'none';
    }
}); 



// Agrega un evento scroll para mover el menú de idiomas junto con el icono
window.addEventListener('scroll', function () {
    var iconoPosicion = idiomaIcono.getBoundingClientRect();
    menuIdiomas.style.top = iconoPosicion.top - menuIdiomas.offsetHeight - 5 + 'px';
});


