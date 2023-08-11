document.addEventListener("DOMContentLoaded", function () {
    const contenedorDiv = document.getElementById("contenedor");
    const miBoton = document.getElementById("saludarBtn");
  
    contenedorDiv.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    miBoton.addEventListener("click", function (event) {
        event.stopPropagation(); 
    });
  });
  