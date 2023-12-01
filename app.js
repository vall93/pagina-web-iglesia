//funcion para acambiar las frases//
function cambiarFrase(){
    var frase1 = document.getElementById("frase1");
    var frase2 = document.getElementById("frase2");
    var frase3 = document.getElementById("frase3");

    if(frase1.style.display !== "none"){
        frase1.style.display = "none";
        frase2.style.display = "block";
    } else if(frase2.style.display !== "none"){
        frase2.style.display ="none";
        frase3.style.display = "block";
    } else{
        frase3.style.display = "none";
        frase1.style.display = "block";
    }
}
setInterval(cambiarFrase, 2000); //esto hace que cambie la frase en segundos//


//funciones para mi boton volver arriba
function volverArriba() {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}

// Mostrar o ocultar el botón 
window.onscroll = function() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
        document.getElementById('volverArriba').style.display = 'block';
    } else {
        document.getElementById('volverArriba').style.display = 'none';
    }
};


// Lista de palabras para cambiar
const palabras = ['AMAR', 'RESPETAR', 'APRENDER', 'CRECER', 'VIVIR'];

// Función para cambiar la palabra
function cambiarPalabra() {
  const palabraCambiante = document.getElementById('palabraCambiante');
  const palabraActual = palabraCambiante.textContent;
  const nuevaPalabra = obtenerNuevaPalabra(palabraActual);
  palabraCambiante.textContent = nuevaPalabra;
}

// Función para obtener una palabra diferente a la actual
function obtenerNuevaPalabra(palabraActual) {
  let nuevaPalabra;
  do {
    nuevaPalabra = palabras[Math.floor(Math.random() * palabras.length)];
  } while (nuevaPalabra === palabraActual);

  return nuevaPalabra;
}

// Cambiar la palabra cada 3 segundos (3000 milisegundos)
setInterval(cambiarPalabra, 1000);


