// Aspetta che la pagina sia caricata
document.addEventListener("DOMContentLoaded", function() {

    let main_header_navbar = document.getElementById("main-header-navbar");
    let sticky_navbar = document.getElementById("sticky-navbar");
    let podcastbanner = document.getElementById("podcastbanner");
    let trending_bar = document.getElementById("trending-bar");
    let body = document.body;

    // Calcola il punto esatto in cui la navbar deve bloccarsi
    let puntoDiAttivazione = main_header_navbar.offsetTop;

    window.onscroll = function() {
        if (window.pageYOffset >= puntoDiAttivazione) {
            // Se abbiamo superato l'header:
            sticky_navbar.classList.add("navbar-fixed");
            podcastbanner.hidden = true;
            trending_bar.hidden = true;
            body.classList.add("is-scrolled");
        } else {
            // Se siamo tornati in cima:
            sticky_navbar.classList.remove("navbar-fixed");
            podcastbanner.hidden = false;
            trending_bar.hidden = false;
            body.classList.remove("is-scrolled");
        }
    };
});