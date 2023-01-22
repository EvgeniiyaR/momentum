let burgerMenu = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let navbar = document.querySelector('.header__navbar');
let body = document.querySelector('.body');
let main = document.querySelector('.main')

burgerMenu.addEventListener('click', function() {
  navbar.after(menu);

  if (!menu.classList.contains('header__nav_active')) {
    window.setTimeout(function(){
      menu.classList.add('header__nav_open');
      menu.classList.add('header__nav_active');
      main.classList.add('main_blur');
    },0);
  } else {
    menu.classList.remove('header__nav_open');
    menu.classList.add('header__nav_close');
    main.classList.remove('main_blur');
    window.setTimeout(function(){
      menu.classList.remove('header__nav_active');
      menu.classList.remove('header__nav_close');
    },700);
  }

  document.querySelector('.header__burger span:nth-child(1)').classList.toggle('header__burger_first');
  document.querySelector('.header__burger span:nth-child(2)').classList.toggle('header__burger_middle');
  document.querySelector('.header__burger span:nth-child(3)').classList.toggle('header__burger_middle');
  document.querySelector('.header__burger span:nth-child(4)').classList.toggle('header__burger_last');

  document.addEventListener('click', function(e) {
    if (menu.classList.contains('header__nav_active') && (e.target != burgerMenu || burgerMenu.classList.contains(e.target))) {
      document.querySelector('.header__burger span:nth-child(1)').classList.remove('header__burger_first');
      document.querySelector('.header__burger span:nth-child(2)').classList.remove('header__burger_middle');
      document.querySelector('.header__burger span:nth-child(3)').classList.remove('header__burger_middle');
      document.querySelector('.header__burger span:nth-child(4)').classList.remove('header__burger_last');
      menu.classList.remove('header__nav_open');
      menu.classList.add('header__nav_close');
      main.classList.remove('main_blur');
      window.setTimeout(function(){
        menu.classList.remove('header__nav_active');
        menu.classList.remove('header__nav_close');
      },700);
    }
});

});


