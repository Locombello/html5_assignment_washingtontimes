// Aspetta che la pagina sia caricata
document.addEventListener("DOMContentLoaded", function() {

    // --- ELEMENTI DESKTOP ---
    let main_header_navbar = document.getElementById("main-header-navbar");
    let sticky_navbar = document.getElementById("sticky-navbar");
    let podcastbanner = document.getElementById("podcastbanner");
    let trending_bar = document.getElementById("trending-bar");
    let body = document.body;

    // --- ELEMENTI MOBILE ---
    let mobileStandardLogo = document.getElementById('mobileStandardLogo');
    let mobileScrolledContent = document.getElementById('mobileScrolledContent');

    // Calcola il punto di attivazione per il desktop (se la navbar esiste)
    let puntoDiAttivazione = main_header_navbar ? main_header_navbar.offsetTop : 0;

    // UN UNICO EVENTO DI SCROLL PER TUTTO IL SITO
    window.addEventListener("scroll", function() {

        // Calcoliamo a che punto dello scorrimento siamo (compatibile con tutti i browser)
        let scrollCorrente = window.pageYOffset || window.scrollY;

        // --- 1. LOGICA DESKTOP ---
        // Eseguiamo questo solo se gli elementi desktop esistono nella pagina
        if (main_header_navbar && sticky_navbar) {
            if (scrollCorrente >= puntoDiAttivazione) {
                sticky_navbar.classList.add("navbar-fixed", "d-md-block");
                sticky_navbar.classList.remove("d-none");
                if (podcastbanner) podcastbanner.hidden = true;
                if (trending_bar) trending_bar.hidden = true;
                body.classList.add("is-scrolled");
            } else {
                sticky_navbar.classList.remove("navbar-fixed", "d-md-block");
                sticky_navbar.classList.add("d-none");
                if (podcastbanner) podcastbanner.hidden = false;
                if (trending_bar) trending_bar.hidden = false;
                body.classList.remove("is-scrolled");
            }
        }

        // --- 2. LOGICA MOBILE ---
        // Eseguiamo questo solo se gli elementi mobile esistono
        if (mobileStandardLogo && mobileScrolledContent) {

            // Consiglio: usa un valore fisso (es. 120px). Usare offsetTop su un elemento
            // a cui poi metti 'd-none' può far "impazzire" il calcolo e creare sfarfallii.
            if (scrollCorrente > puntoDiAttivazione) {
                // Nascondiamo il logo esteso
                mobileStandardLogo.classList.remove('d-flex');
                mobileStandardLogo.classList.add('d-none');

                // Mostriamo la "W" e il "Subscribe"
                mobileScrolledContent.classList.remove('d-none');
                mobileScrolledContent.classList.add('d-flex');
            } else {
                // Se torniamo in cima, facciamo l'esatto contrario
                mobileScrolledContent.classList.remove('d-flex');
                mobileScrolledContent.classList.add('d-none');

                mobileStandardLogo.classList.remove('d-none');
                mobileStandardLogo.classList.add('d-flex');
            }
        }
    });
});