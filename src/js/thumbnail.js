export function thumbnail (){
    const thumbnails = document.querySelectorAll('.featured__small-img-1')
    const big_pic = document.querySelector('.featured__big-img-1')
    console.log(big_pic)

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', ()=>{
            let thumb_src = thumbnail.getAttribute('src')
            big_pic.src = thumb_src
        })
    })

    const thumbnails2 = document.querySelectorAll('.featured__small-img-2')
    const big_pic2 = document.querySelector('.featured__big-img-2')
    thumbnails2.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', ()=>{
            let thumb_src = thumbnail.getAttribute('src')
            big_pic2.src = thumb_src
        })
    })

    const thumbnails3 = document.querySelectorAll('.featured__small-img-3')
    const big_pic3 = document.querySelector('.featured__big-img-3')
    thumbnails3.forEach(thumbnail => {
        thumbnail.addEventListener('mouseover', ()=>{
            let thumb_src = thumbnail.getAttribute('src')
            big_pic3.src = thumb_src
        })
    })
}

thumbnail()