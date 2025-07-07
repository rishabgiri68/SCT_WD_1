// Smooth scroll using GSAP
 document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 80
      },
      ease: "power2.out"
    });
  });
});
//  Animation 
var tl = gsap.timeline()
tl.from("#logoA" ,{
  y: -30,
  opacity:0,
  duartion:1,
  delay:0.5
} )
//  NAVBAR ANIMATION
tl.from("#navA" ,{
  y: -30,
  opacity:0,
  duartion:1,
  delay:0.5,
  stagger:0.3
} )
//  TEXT ANIMATION
tl.from("#textA" ,{
  y: 30,
  opacity:0,
  duartion:1,
  delay:0.4
} )
tl.from("#text2" ,{
  x:50,
  opacity:0,
  duartion:4,
  delay:1,
  scrollTrigger:{
    trigger:"#text2",
    scroller:"body",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }
} )
// CAR SCROLLING ANIMATION
gsap.from("#car1",{
  scale:0,
  opacity:0,
  delay:2,
  duration:1,
  rotate:60,

} )
gsap.from("#car2",{
  scale:0,
  opacity:0,
  delay:1.2,
  duration:1,
  rotate:60,
  x:500,
  scrollTrigger:{
    trigger:"#car2",
    scroller:"body",
    start:"top 80%",
    end:"top 20%",
    scrub:2
  }

} )
tl.from("#meet" ,{
  y: -30,
  opacity:0,
  duartion:1,
  delay:0
} )
// CARD ANIMATION
gsap.from("#card1" ,{
  scale:0,
  delay:1.2,
  duration:1,
  x:500,
  scrollTrigger:{
    trigger:"#car2",
    scroller:"body",
    start:"top 60%",
    end : "top 20%",
    scrub:3
  }

} )

gsap.from("#card2" ,{
  scale:0,
  delay:1.2,
  duration:1,
  y:500,
  scrollTrigger:{
    trigger:"#car2",
    scroller:"body",
    start:"top 60%",
    end:"top 20%",
    scrub:3
  }

} )
gsap.from("#card3" ,{
  scale:0,
  delay:1.2,
  duration:1,
  x:-500,
  scrollTrigger:{
    trigger:"#car2",
    scroller:"body",
    start:"top 60%",
    end:"top 20%",
    scrub:3
  }

} )









// WATCH CARS NOW ANIMATION


function marqueAnimation (){
  window.addEventListener("wheel", function(dets){
  if (dets.deltaY> 0) {
    gsap.to(".marque", {
      transform:'translateX(-200%)',
      repeat: -1,
      duration: 3,
      ease: "none"
    })
    gsap.to(".marque img", {
      rotate: 180
    })
  } else {
    gsap.to(".marque", {
      transform: 'translateX(0%)',
      repeat: -1,
      duration: 4,
      ease: "none"
    })
    gsap.to(".marque img", {
      rotate: 0
    })
  }
})
}


marqueAnimation();  