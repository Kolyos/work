function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting){
         change.target.classList.add('element_show');
      } else{
         change.target.classList.remove('element_show');
      }
   });
}
let options = {
   threshold:[0.5]};
let observer = new IntersectionObserver(onEntry,options);
let elements = document.querySelectorAll('.biga__body');

for (let elm of elements){
   observer.observe(elm);
}


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
.setClassToggle(".circle__animation", "scale")

.addTo(controller);
/////////////
var control = new ScrollMagic.Controller();

var sc = new ScrollMagic.Scene({triggerElement: "#trigger2"})
.setClassToggle(".circle__animation", "second")

.addTo(control);
//////////////
var contro = new ScrollMagic.Controller();

var sce = new ScrollMagic.Scene({triggerElement: "#trigger3"})
.setClassToggle(".back", "th")

.addTo(contro);
//////////
var contr = new ScrollMagic.Controller();

var scen = new ScrollMagic.Scene({triggerElement: "#trigger4"})
.setClassToggle(".back", "fi")

.addTo(contr);
///////////
var cont = new ScrollMagic.Controller();

var scen = new ScrollMagic.Scene({triggerElement: "#trigger5"})
.setClassToggle(".back", "juv")

.addTo(cont);