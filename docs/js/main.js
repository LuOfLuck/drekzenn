window.sr = ScrollReveal();
tiempoDeEspera = 500;
tiempoDeDistancia = 1000;
sr.reveal('header', {
    duration: 1500,
    origin: 'bottom',
    distance: '-70px'
});
sr.reveal('.cont__block', {
    duration: 1500,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.image', {
    duration: 1500,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.block__titulo', {
    duration: 1500,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.block__parrafo', {
    duration: 1500,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.block__parrafo > ul > li', {
    duration: 1500,
    origin: 'top',
    distance: '-200px'
});



const scrollPosition = idElement => {
    let element = document.getElementById(idElement);
    let elementTop = element.getBoundingClientRect().top + window.scrollY;
    let scrollPositionY= ((idElement == "footer")?elementTop += 100 : (idElement == "home")?elementTop:( screen.width > 500)?elementTop-100:elementTop-50)
    window.scroll({
        top:  scrollPositionY,
        left: 0,
        behavior: 'smooth'
    });

}