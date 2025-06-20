document.addEventListener("DOMContentLoaded", () => {
    console.log("Hoja de vida lista.");

    // Mostrar/Ocultar Cursos
    const btnCursos = document.getElementById("btn-cursos");
    const seccionCursos = document.querySelector(".estudios-varios");

    btnCursos.addEventListener("click", () => {
        if (seccionCursos.style.display === "none") {
            seccionCursos.style.display = "block";
            btnCursos.textContent = "Ocultar Cursos";
        } else {
            seccionCursos.style.display = "none";
            btnCursos.textContent = "Mostrar Cursos";
        }
    });

    // Mostrar/Ocultar Experiencia
    const btnExperiencia = document.getElementById("btn-experiencia");
    const seccionExperiencia = document.querySelector(".experiencia");

    btnExperiencia.addEventListener("click", () => {
        if (seccionExperiencia.style.display === "none") {
            seccionExperiencia.style.display = "block";
            btnExperiencia.textContent = "Ocultar Experiencia";
        } else {
            seccionExperiencia.style.display = "none";
            btnExperiencia.textContent = "Mostrar Experiencia";
        }
    });

       // Inicializa las secciones visibles
    seccionCursos.style.display = "block";
    seccionExperiencia.style.display = "block";
    btnCursos.textContent = "Ocultar Cursos";
    btnExperiencia.textContent = "Ocultar Experiencia";
});
