export function hamburger(){

    const hamburger = document.querySelector('.header__hamburger')
    const ham_icon = document.querySelector('.fa-bars')
    const nav = document.querySelector('.nav__menu')

    
    hamburger.addEventListener('click', () =>{
        ham_icon.classList.toggle('fa-times')
        nav.classList.toggle('open')
    })

    window.addEventListener('scroll',  () =>{
        ham_icon.classList.remove('fa-times')
        nav.classList.remove('open')
    })
}

hamburger()