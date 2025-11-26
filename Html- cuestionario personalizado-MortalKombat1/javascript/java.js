
function calcularResultado() {

    // Respuestas correctas
    const respuestasCorrectas = {
        pregunta1: "respuesta3",
        pregunta2: "respuesta5",
        pregunta3: "respuesta9",
        pregunta4: "respuesta15",
        pregunta5: "respuesta17"
    };

    let puntos = 0;

    // Recorremos cada pregunta
    for (let pregunta in respuestasCorrectas) {
        const correcta = respuestasCorrectas[pregunta];
        const seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        
        if (seleccionada && seleccionada.id === correcta) {
            puntos++;
        }
    }

    // Guarda el puntaje para el siguiente HTML
    localStorage.setItem("puntajeMK", puntos);

    // Ir a la página de resultados
    window.location.href = "/entregado/resultado.html";
}


   const puntos = localStorage.getItem("puntajeMK") || 0;

    // Mostrar el puntaje /10 (en este caso 5 preguntas → /5)
    document.getElementById("resultado").textContent = puntos + "/5";