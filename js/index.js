const header = document.querySelector('header')
const moreButton = document.querySelector('.more-button')
const copy = document.querySelector('.copy')

const moreText = {
    paragr: 'twest 123 asd asd asd'
}

console.dir(moreButton)

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 60) {
        header.style.paddingTop = '0.5em'
        header.style.paddingBottom = '0.5em'
    } else {
        header.style.paddingTop = '1.5em'
        header.style.paddingBottom = '1.5em'
    }
})

function showMoreText(e) {
    e.preventDefault()
    const paragr = this.previousElementSibling
    paragr.classList.add('visible')

    console.dir(paragr)
     
    // let text = this.previousElementSibling.textContent + " " + moreText.paragr
    paragr.textContent = this.previousElementSibling.textContent + " " + moreText.paragr
    // console.log(paragr.textContent)
    // console.log(paragr.textContent)
    
    // this.previousElementSibling.childNodes[0].data = text
    // console.log(this.parentNode.offsetWidth)
    // this.hidden = true
    // console.log(this.parentNode.offsetWidth)
    // this.parentNode.textContent
    // console.log(this.parentNode.textContent)
}

moreButton.addEventListener('click' , showMoreText)

let y = new Date().getFullYear()
copy.textContent = 'My personal portfolio | ' + y

