const mas = document.getElementById('mas')
const menos = document.getElementById('menos')
const back = document.querySelector('.back')
back.style.left = '10px'

mas.addEventListener('click', () => {
    const px = parseInt(back.style.left.replace('px',''),10)+1
    back.style.left = `${px}px`
})


menos.addEventListener('click', () => {
    const px = parseInt(back.style.left.replace('px',''),10)-1
    back.style.left = `${px}px`
})