function getUrl(archivo) {
    const origin = window.location.origin;

    if (window.location.hostname.includes("github.io")) {
        return origin + "/SiiNugetDocumentacion/" + archivo;
    }

    return origin + "/" + archivo;
}


