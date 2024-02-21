window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrolling: ${this.scrollY}px`;
});
