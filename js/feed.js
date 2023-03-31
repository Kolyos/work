const feedMenu = document.querySelector('.fedd__body');
const procMenu = document.querySelector('.proc__body');
if(feedMenu){
   feedMenu.addEventListener("click", function(e){
      feedMenu.classList.toggle('_active');
      procMenu.classList.toggle('_active');
});
}