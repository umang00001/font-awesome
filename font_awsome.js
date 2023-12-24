
// ============================================       navbar =======================================================






let log_out =document.getElementById('log_out')

let log_out_icon=document.getElementById('log_out_icon')

log_out.addEventListener('mouseenter',()=>{
    log_out.innerHTML='<i class="fa-solid fa-person-chalkboard"></i>'
    log_out.classList.add('blue_color')
    
})

log_out.addEventListener('mouseout',()=>{
    log_out.innerHTML='<i  class="fa-solid fa-arrow-right-from-bracket"></i>';
    log_out.classList.remove('blue_color')

})



// ============================================   anime box =======================================================





let icon = document.getElementById('icon');
let style = document.getElementById('style');
let color = document.getElementById('color');
let size = document.getElementById('size');
let animate = document.getElementById('animate');




let icon_form = document.getElementById('icon_form');
let size_form = document.querySelector('.size_form');
let anime_form = document.querySelector('.anime_form');
let color_form = document.querySelector('.color_form');
let style_form = document.querySelector('.style_form');

let anime_icon = document.querySelector('.anime_icon')
let icon_class = document.getElementsByName('icon_class')

let size_class = document.getElementsByName('size')
let array_size = ["fa-2xs","fa-xs","fa-sm" ]



console.log(size_class)
size_class.forEach(size_class=>{
    size_class.addEventListener('change',()=>{
        let selected = document.querySelector("input[name='size']:checked").value
        if(selected=="1"){
            anime_icon.classList.add('fa-2xs') 
        }
    })
    
})


icon_class.forEach(icon_class=>{
    icon_class.addEventListener('change',()=>{
        let selected = document.querySelector("input[name='icon_class']:checked").value;
        if(selected=="fa-house"){
            anime_icon.classList.add('fa-house') 
            
        }
        else if(selected!=="fa-house"){
            anime_icon.classList.remove('fa-house')
        }
        if(selected=="fa-star"){
            anime_icon.classList.add('fa-star') 

        }
        else if(selected!=="fa-star"){
            anime_icon.classList.remove('fa-star')
        }
        
        if(selected=="fa-magnifying-glass"){
            anime_icon.classList.add('fa-magnifying-glass') 
            
        }
        else if(selected!=="fa-magnifying-glass"){
            anime_icon.classList.remove('fa-magnifying-glass') 
            
        }
        if(selected=="fa-image"){
            anime_icon.classList.add('fa-image') 
            
        }
        else if(selected!=="fa-image"){
            anime_icon.classList.remove('fa-image') 
            
        }
        if(selected=="fa-phone"){
            anime_icon.classList.add('fa-phone') 
            
        }
        else if(selected!=="fa-phone"){
            anime_icon.classList.remove('fa-phone') 
            
        }
        if(selected=="fa-check"){
            anime_icon.classList.add('fa-check') 
            
        }
        else if(selected!=="fa-check"){
            anime_icon.classList.remove('fa-check') 
            
        }
        
        
        
    })
})







icon.addEventListener('click',()=>{
   

    icon_form.classList.remove('display_none')
    color_form.classList.remove('active')
    anime_form.classList.remove('active')
    size_form.classList.remove('active')
    style_form.classList.remove('active')
})
style.addEventListener('click',()=>{
    style_form.classList.add('active')
    color_form.classList.remove('active')
    anime_form.classList.remove('active')
    size_form.classList.remove('active')
    icon_form.classList.add('display_none')


})
color.addEventListener('click',()=>{
    color_form.classList.add('active')
    style_form.classList.remove('active')
    anime_form.classList.remove('active')
    size_form.classList.remove('active')
    icon_form.classList.add('display_none')
})
size.addEventListener('click',()=>{
    size_form.classList.add('active')
    style_form.classList.remove('active')
    anime_form.classList.remove('active')
    color_form.classList.remove('active')
    icon_form.classList.add('display_none')
})
animate.addEventListener('click',()=>{
    anime_form.classList.add('active')
    style_form.classList.remove('active')
    color_form.classList.remove('active')
    size_form.classList.remove('active')
    icon_form.classList.add('display_none')
})









// ============================================ page five =======================================================

let right_img =document.querySelector('.right_img');
console.log(right_img);
let page_give_grey =document.getElementById('page_give_grey');
let page_give_yellow =document.getElementById('page_give_yellow');



page_give_yellow.addEventListener('mouseenter',()=>{
    page_give_grey.style.display ='block';
    page_give_yellow.style.display ='none';

})

page_give_grey.addEventListener('mouseout',()=>{
    page_give_grey.style.display ='none';
    page_give_yellow.style.display ='block';

})


// ============================================ page eight =======================================================


let page_eight_in = document.getElementById('page_eight_in');
 
let page_eight_out = document.getElementById('page_eight_out');

page_eight_in.addEventListener('mouseenter',()=>{
    page_eight_in.style.display = 'none'
    page_eight_out.style.display = 'block'

})
page_eight_out.addEventListener('mouseout',()=>{
    page_eight_in.style.display = 'block'
    page_eight_out.style.display = 'none'

})