const tl = gsap.timeline({
    defaults: { duration: 1, ease: "Power3.easeOut" },
  });

  gsap.set('.form-section', {opacity:0} )
  tl.fromTo(
    ".form-section",
    { x: "-100%", opacity: 0 },
    { x: 0, opacity: 1 },
    "<30%"
  );