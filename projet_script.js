function lien(url) {
    window.open(url, '_blank');
}

function afficherBienvenue() {
    alert("Bienvenue sur notre site !");
}

console.log("Chemin actuel :", window.location.pathname);

if (window.location.pathname.endsWith("index.html")) {
    window.onload = afficherBienvenue;
}



