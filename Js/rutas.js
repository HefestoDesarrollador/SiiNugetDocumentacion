document.querySelectorAll('a[href^="/@/"]').forEach(link => {
    link.href = getBaseUrl() + link.getAttribute("href").substring(3);
});