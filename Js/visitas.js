document.addEventListener("DOMContentLoaded", () => {

    const contador = document.getElementById("contador-visitas");

    const url = "https://abacus.jasoncameron.dev/hit/hefesto-sii-docs/visitas";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            return response.json();
        })
        .then(data => {
            contador.textContent = `Visitas: ${data.value}`;
        })
        .catch(error => {
            console.error("Error al obtener el contador:", error);
            contador.textContent = "Visitas: no disponible";
        });

});