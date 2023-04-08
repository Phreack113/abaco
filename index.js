const mas = document.getElementById('mas')
const menos = document.getElementById('menos')
const back = document.querySelector('.back')
back.style.left = '10px'

mas.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

menos.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

const move = (n, el) => {
    const stopMove = () => {
        clearInterval(intervalId)
    }

    el.addEventListener('mouseup', stopMove)
    el.addEventListener('touchend', stopMove)
    
    const intervalId = setInterval(() => {
        const px = parseInt(back.style.left.replace('px', ''), 10) + (1*n)
        back.style.left = `${px}px`
    }, 50)
}

mas.addEventListener('mousedown', ()=>{move(1, mas)})
mas.addEventListener('touchstart', ()=>{move(1, mas)})

menos.addEventListener('mousedown', ()=>{move(-1, menos)})
menos.addEventListener('touchstart', ()=>{move(-1, menos)})
