const bars = document.getElementById('bars');
const options = document.getElementById('options');

bars.addEventListener('click', () => {
    if (options.style.display == 'none') {
        options.style.display = 'block'
    } else {
        options.style.display = 'none'
    }
})