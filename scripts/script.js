const tl = gsap.timeline({
  defaults: { duration: 1, ease: 'Power3.easeOut' },
});

gsap.set('.splash', { position: 'absolute', top: '0%', right: '0%' });

tl.fromTo(
  '.intro-images',
  { x: '100%', opacity: 0.5 },
  { x: '10.5%', opacity: 1 },
  '<20%'
);

tl.fromTo(
  '.intro-text h2',
  { x: '-140%', opacity: 0.5 },
  { x: 0, opacity: 1 },
  '<20%'
);
tl.fromTo(
  '.intro-text h3',
  { x: '-100%', opacity: 0.5 },
  { x: 0, opacity: 1 },
  '<20%'
);

tl.fromTo(
  '.intro-text p',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1 },
  '<30%'
);

tl.fromTo(
  '.intro-social',
  { x: '-100%', opacity: 0 },
  { x: '10.5%', opacity: 1 },
  '<30%'
);

let dataCollectorButtons = document.querySelectorAll('.intro-social a');

for (let i = 0; i < dataCollectorButtons.length; i++) {
  console.log(dataCollectorButtons[i].id);
  dataCollectorButtons[i].addEventListener(
    'mouseover',
    hoverIconAnimation.bind(this, dataCollectorButtons[i].id)
  );
}

function hoverIconAnimation(id) {
  tl.fromTo(
    `.intro-social #${id} img`,
    { x: 0, y: 0 },
    { rotation: 40, transformOrigin: 'center 50%', yoyo: true, repeat: 1 }
  );
}
