const navBar = document.getElementById('navbar')
const copy = document.querySelector('.copy')
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 180) {
        navBar.style.padding = '0.7em 5em'
    } else {
        navBar.style.padding = '2em 5em'
    }
})

let y = new Date().getFullYear()
copy.textContent = 'My personal portfolio © ' + y

