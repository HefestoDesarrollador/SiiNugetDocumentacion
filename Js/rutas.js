const BASE_URL = window.location.hostname.includes('github.io')
    ? '/SiiNugetDocumentacion/'
    : '/';

document.querySelector("base").href = base;	
	
// Genera una ruta desde la raíz del sitio 
function ruta(path) { return BASE_URL + path.replace(/^\/+/, ""); }