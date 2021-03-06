const header = document.querySelector('header')
const moreButtons = document.querySelectorAll('.more-button')
const copy = document.querySelector('.copy')
const email = document.querySelector('.email')

const moreText = {
    drumMachineReact: " nents made both with keyboard events and click events. Different modes can be used.",
    twitchApp: " this app makes several API calls using fetch to display what's needed. If you don't have Twitch username you can just copy-paste any username from the list to test it.",
    markdown: " plain text with all styles applied. Built with the help of Marked.js library.",
}

function showMoreText() {
    const contextEl = this.parentNode
    const text = contextEl.textContent.split("more")[0] + moreText[contextEl.dataset.expand]
    contextEl.textContent = text
    this.hidden = true

}

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 60) {
        header.style.paddingTop = '0.5em'
        header.style.paddingBottom = '0.5em'
    } else {
        header.style.paddingTop = '1.5em'
        header.style.paddingBottom = '1.5em'
    }
})

Array.from(moreButtons).map(button => button.addEventListener('click' , showMoreText))

let y = new Date().getFullYear()
copy.textContent = ` |${y}`

