window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrolling: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother) 

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
})