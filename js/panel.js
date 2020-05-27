$(function(){

    $('.options a').click(function(){
        var href = $(this).attr('href')
            if(href == 'index.html'){
                return href    
            }
        $.ajax({
            'url': href,
            'error': function(){
                console.log('Ocorreu um erro')
            },
            'success':function(data){
                    
                $('.content').html(data)
                
            }
            
        })
        return false

    })
    const dash = document.querySelector('.dashboard')
    const menuMobile = document.querySelector('.menuMobile')
    const menuToggle = menuMobile.querySelector('.menuToggle')
    const content = document.querySelector('.container .content')
    let show = true


    menuToggle.addEventListener('click', function(){
    menuMobile.classList.toggle('on', show)
    show = !show
    dash.style.display = show ? 'none' : 'flex'
    content.style.display = show ? 'flex' : 'none'
    })
})