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



// var over = document.getElementById("over");
// function position(event){
// 	var x = event.clientX - 25;
// 	var y = event.clientY - 25;
//     over.style =`top: ${y}px; left: ${x}px`;
// }