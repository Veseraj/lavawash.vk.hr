let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Scroll dolje → sakrij header
        header.style.top = "-120px";  // prilagodi visinu headera
    } else {
        // Scroll gore → pokaži header
        header.style.top = "0";
    }
    lastScrollTop = st <= 0 ? 0 : st; // za mobile
}, false);