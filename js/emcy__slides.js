TweenLite.defaultEase = Power2.easeInOut;
var activeSlide = 0;
var oldSlide = 0;
var slides = document.querySelectorAll(".box");
var tl;

function slideAnim(e) {
  // if the container is animating the wheel won't work
  if (tl && tl.isActive()) {
    return;
  }
  // temp variable to see if we're at the beginning or end
  oldSlide = activeSlide;
  // which way did we scroll the mousewheel
  activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
  // are we at the beginning of the slides?
  activeSlide = activeSlide < 0 ? 0 : activeSlide;
  // are we at the end of the slides?
  activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
  // if at the beginning or end there is nothing to animate
  if (oldSlide === activeSlide) {
    return;
  }
  // if not at the beginning or end, we can animate the container 
  // and the targets to the new position
  tl = new TimelineMax();
  tl.to("#targets", 0.4, { xPercent: -100/slides.length * activeSlide });
  
}

// listen for mousewheel scroll
window.addEventListener("wheel", slideAnim);