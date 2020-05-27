$(function(){
    
//     var indiceAtual = 0
//     var indeceMaximo = $('#mainSlider img').length
//     var delay = 3000


//     initSlider()
//     function initSlider(){
//         $('#mainSlider img').eq(0).fadeIn()
//         setInterval(function(){
//             alternarSlider()
//         }, delay)
        
//     }

//     function alternarSlider(){
//         $('#mainSlider img').eq(indiceAtual).fadeOut()
//         indiceAtual+=1
//         if(indiceAtual == indeceMaximo)
//             indiceAtual = 0
//         $('#mainSlider img').eq(indiceAtual).fadeIn()
//     }
})

const menuMobile = document.querySelector('.menuMobile')
const menuToggle = menuMobile.querySelector('.menuToggle')
const menuList = document.querySelector('.menuList')
let show = true

menuToggle.addEventListener('click', function(){
    
    document.body.style.overflow = show ? 'hidden' : 'initial'
    menuMobile.classList.toggle('on', show)
    show = !show
    
    
})