const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function (){
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());    
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   
} else {
   document.body.classList.add('_pc');
}

//burger
const iconMenu = document.querySelector('.icon__menu');
const menuBody = document.querySelector('.header_body');
if(iconMenu){
   
   iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
});
}

/////burger__sub
const subMenu = document.querySelector(' .tt');
const butSub = document.querySelector('.buttom__submenu');
if(subMenu){
   subMenu.addEventListener("click", function(e){
      subMenu.classList.toggle('_active');
      butSub.classList.toggle('_active');
});
}
//////////////
const subsubMenu = document.querySelector(' .su');
if(subsubMenu){
   
   subsubMenu.addEventListener("click", function(e){
      subsubMenu.classList.toggle('_active');
});
}

//////////////////////////////////////////////

const firstMenu = document.querySelector(' .first_main-link');
const firstSub = document.querySelector('.submenu__second');
if(firstMenu){
   firstMenu.addEventListener("click", function(e){
      firstMenu.classList.toggle('_active');
      firstSub.classList.toggle('_active');
});
}

const firstSubSubMenu = document.querySelector(' .capa');
if(firstSubSubMenu){
   
   firstSubSubMenu.addEventListener("click", function(e){
      firstSubSubMenu.classList.toggle('_active');
});
}
const secondSubSubMenu = document.querySelector(' .liter');
if(secondSubSubMenu){
   
   secondSubSubMenu.addEventListener("click", function(e){
      secondSubSubMenu.classList.toggle('_active');
});
}
const thSubSubMenu = document.querySelector(' .learn');
if(thSubSubMenu){
   
   thSubSubMenu.addEventListener("click", function(e){
      thSubSubMenu.classList.toggle('_active');
});
}
///////////////////////////////////

const thSubMenu = document.querySelector(' .second_main-link');
const thSub = document.querySelector('.th__submenu');
if(thSubMenu){
   thSubMenu.addEventListener("click", function(e){
      thSubMenu.classList.toggle('_active');
      thSub.classList.toggle('_active');
});
}
////////////////////
const frSubMenu = document.querySelector(' .th_main-link');
const frSub = document.querySelector('.submenu__four');
if(frSubMenu){
   frSubMenu.addEventListener("click", function(e){
      frSubMenu.classList.toggle('_active');
      frSub.classList.toggle('_active');
});
}
const frSubSubMenu = document.querySelector(' .our');
if(frSubSubMenu){
   
   frSubSubMenu.addEventListener("click", function(e){
      frSubSubMenu.classList.toggle('_active');
});
}
const fwSubSubMenu = document.querySelector(' .media');
if(fwSubSubMenu){
   
   fwSubSubMenu.addEventListener("click", function(e){
      fwSubSubMenu.classList.toggle('_active');
});
}
///////////search
const lupMenu = document.querySelector(' .icon-lup');
const searchSub = document.querySelector('.bottom_search_body');
if(lupMenu){
   lupMenu.addEventListener("click", function(e){
      lupMenu.classList.toggle('_active');
      searchSub.classList.toggle('_active');
});
}
const closeMenu = document.querySelector(' .close');
const searchBlock = document.querySelector('.bottom_search_body');
if(closeMenu){
   closeMenu.addEventListener("click", function(e){
      closeMenu.classList.toggle('_active');
      searchBlock.classList.remove('_active');
});
}
///////////
const footMenu = document.querySelector(' .uk__lang');
if(footMenu){
   footMenu.addEventListener("click", function(e){
      footMenu.classList.toggle('_active');
});
}
const rowMenu = document.querySelector(' .row_two-ind');
if(rowMenu){
   rowMenu.addEventListener("click", function(e){
      rowMenu.classList.toggle('_active');
});
}
/////////////nav
const menuLink = document.querySelectorAll('.stik__item[data-goto]');
if (menuLink.length > 0) {
   menuLink.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.top__link').offsetHeight;
   
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}



