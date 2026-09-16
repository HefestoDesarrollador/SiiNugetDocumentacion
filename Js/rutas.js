function raizSitio() {
    if (window.location.hostname.includes("github.io")) {
        return "/SiiNugetDocumentacion/";
    }
    return "/";
}
function ir(ruta) {
    window.location.href = raizSitio() + ruta;
}
