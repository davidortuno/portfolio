document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
    // Circular progress drawing
    const path = document.querySelector('.progress-wrap path');
    const length = path.getTotalLength();
  
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  
    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: true
      }
    });
  
    // Show/hide
    gsap.fromTo(".progress-wrap", {
      yPercent: 100,
      autoAlpha: 0
    }, {
      yPercent: 0,
      autoAlpha: 1,
      scrollTrigger: {
        start: 5,
        toggleActions: "play none none reverse"
      }
    });
  
    // On click, scroll back to top
    document.querySelector('.progress-wrap').addEventListener("click", (e) => {
      gsap.to(window, {
        scrollTo: 0,
        duration: 0.55
      });
    });
  });