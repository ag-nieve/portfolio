gsap.registerPlugin(ScrollTrigger);

const myDivs = document.querySelectorAll('.travelly');

// Loop through each div and create a timeline for the animation
myDivs.forEach((div, index) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: div,
      start: 'top 80%', // Adjust this value to change when the animation starts
    }
  });

  // Define the animation for each div
  timeline.fromTo(div, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, `+=${index * 0.1}`);
});