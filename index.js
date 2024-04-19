const menubtn = document.querySelector('#open-menu-btn')
const closeMenu = document.querySelector('#close-menu-btn')
const menu = document.querySelector('.nav_menu')

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY>0);
  })


// open nav menu
menubtn.addEventListener('click',()=>{
  menu.style.display ='block';
  closeMenu.style.display = 'inline-block';
  menubtn.style.display = 'none'
})

// close nav menu

closeMenu.addEventListener('click',()=>{
  menu.style.display ='none';
  closeMenu.style.display = 'none';
  menubtn.style.display = 'inline-block'
})

// amination

ScrollReveal({
  /*reset:true,*/
  distance:'60px',
  duration:2500,
  delay:400
});
/*
// header
ScrollReveal().reveal('.container_header',{delay:500,origin:'button'});

//section 1
ScrollReveal().reveal('.text_desc_MA',{delay:500,origin:'left'});
ScrollReveal().reveal('.image_MA',{delay:500,origin:'button'});

//section 2
ScrollReveal().reveal('.image_ange',{delay:500,origin:'left'});
ScrollReveal().reveal('.message_africa',{delay:500,origin:'button'});

//section 3 graphe
ScrollReveal().reveal('.text_graphe',{delay:500,origin:'top'});
ScrollReveal().reveal('.image_graphe',{delay:500,origin:'top'});
ScrollReveal().reveal('.stat_graphe',{delay:500,origin:'top'});

//section 4 groupe
ScrollReveal().reveal('.container_groupe',{delay:500,origin:'top'});

//section 5 stat
ScrollReveal().reveal('.stat_desc',{delay:500,origin:'left'});
ScrollReveal().reveal('.stat_image',{delay:500,origin:'button'});

//section 6 services
ScrollReveal().reveal('.title_service',{delay:500,origin:'top'});
ScrollReveal().reveal('.service_webdesign',{delay:500,origin:'top'});

//section 7 objectif
ScrollReveal().reveal('.obje_photo',{delay:500,origin:'left'});
ScrollReveal().reveal('.obje_desc',{delay:500,origin:'button'});

//section 8 blogs
ScrollReveal().reveal('.title_blogs',{delay:500,origin:'top'});
ScrollReveal().reveal('.blog_pre',{delay:500,origin:'top'});
ScrollReveal().reveal('.blog_buton',{delay:500,origin:'top'});

//section 9 accueil
ScrollReveal().reveal('.acceil_image',{delay:500,origin:'top'});*/