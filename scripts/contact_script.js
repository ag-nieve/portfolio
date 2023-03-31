const tl = gsap.timeline({
    defaults: { duration: 1, ease: "Power3.easeOut" },
  });

  tl.fromTo(
    ".form-section",
    { x: "-100%", opacity: 0 },
    { x: 0, opacity: 1 },
    "<30%"
  );