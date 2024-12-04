let smoothScroll = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
smoothScroll;

let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main");

main.addEventListener("mousemove", (e) => {

    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration:1,
        ease: "back.out(1.7)",

      });
    

});


let img = document.querySelector('.page1 .img_div');

img.addEventListener('mouseenter',()=>{
    cursor.innerHTML="click here"
    console.log('hello')

    gsap.to(cursor,{
        scale:3,
        duration:1,
        ease: "back.out(1.7)",

    })

})
img.addEventListener('mouseleave',()=>{
    cursor.innerHTML=""
    console.log('hello')

    gsap.to(cursor,{
        scale:1,
        duration:1,
        ease: "back.out(1.7)",

    })

})
