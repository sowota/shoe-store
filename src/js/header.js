export function scrolled () {
    // function scroll_header () {
    //     const header = document.querySelector('.header')
    //     this.scrollY >= 100? header.classList.add('scroll'): header.classList.remove('scroll')
    // }
    // window.addEventListener('scroll', scroll_header)

    const header = document.querySelector('.header')
    let last_scroll = window.scrollY
    
    window.addEventListener('scroll', ()=>{
        last_scroll < window.scrollY ? header.classList.add('scroll') : header.classList.remove('scroll')
        last_scroll = window.scrollY
    })
}

scrolled()