$(document).ready(function(){
    $('.carrossel').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    
    });
  });

  
  
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
      
        menuToggle.addEventListener('click', () => {
          menu.classList.toggle('ativo');
        });
      