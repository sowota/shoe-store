export function expanding (){
    const cards = document.querySelectorAll('.category__card')

    cards.forEach(card =>{
        card.addEventListener('mouseover', () =>{
            cards.forEach(card =>{
                card.classList.remove('expand')
            })
            card.classList.add('expand')
        })
    })
}

expanding()