const bars = document.getElementById('bars');
const options = document.getElementById('options');
const mainTextBlocks = document.getElementById('mainTextBlocks')
const quienesSomos = document.getElementById('quienesSomos');
const acercaDe = document.getElementById('acercaDe');
const procesoNav = document.getElementById('procesoNav');
const proceso = document.getElementById('proceso');
const serviciosNav = document.getElementById('serviciosNav');
const servicios = document.getElementById('servicios');
const testimoniosNav = document.getElementById('testimoniosNav');
const testimonios = document.getElementById('testimonios');

bars.addEventListener('click', () => {
    if (options.style.display == 'none') {
        options.style.display = 'block'
    } else {
        options.style.display = 'none'
    }
})

quienesSomos.addEventListener('click', () => {
    acercaDe.scrollIntoView({ behavior: "smooth" })
})

procesoNav.addEventListener('click', () => {
    proceso.scrollIntoView({ behavior: "smooth" })
})

serviciosNav.addEventListener('click', () => {
    servicios.scrollIntoView({ behavior: "smooth" })
})

testimoniosNav.addEventListener('click', () => {
    testimonios.scrollIntoView({ behavior: "smooth" });
})