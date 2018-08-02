const flip = curry((fn, a, b) => fn(b, a));
map(toggle("animate"), [...takeElem(".card")])

const posX = takeElem("html")[0].offsetWidth / 2 - 38;
const posY = takeElem("html")[0].offsetHeight / 2.5;
const animate = (i, callbeck) => {
  setStyle("transform", 
  `translate(${posX - i / 3}px, ${posY - i / 3}px)`,
  takeElem(".card")[i]
  )
  if(i < CARDS_AMOUNT) setTimeout(() => animate(++i), 10);
}
animate(0);