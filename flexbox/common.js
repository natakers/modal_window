$(document).ready(function(){
  $('.owl-carousel1').owlCarousel({
    loop:true,
    margin:82,
    nav:false,
    loop:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },

        // 768:{
            // items:1
        // },
        /*1000:{
            items:5
        }*/
    }
})
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:81,
    nav:false,
    loop:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },

        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
});



function classToggle() {
  const navs = document.querySelectorAll('.nav')
  
  navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
}
document.querySelector('.navbar__link-toggle')
  .addEventListener('click', classToggle);
