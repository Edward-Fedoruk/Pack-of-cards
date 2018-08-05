const toggleClass = (className) => map(toggle(className), [...takeElem(".card")]);

const posX = takeElem("html")[0].offsetWidth / 2 - 38;
const posY = takeElem("html")[0].offsetHeight / 2.5;

// setting initial z-index for cards
map((el, i) => el.style.zIndex = `${i}`, [...takeElem(".card")]);

const animate = i => {
  setStyle(
    "transform", 
    `translate(${posX - parseInt(takeElem(".card")[i].style.zIndex) / 3}px, ${posY - parseInt(takeElem(".card")[i].style.zIndex) / 3}px)`, 
    takeElem(".card")[i]
  );
  if(i < CARDS_AMOUNT) setTimeout(() => animate(++i), 10);
  else return;
}


const animateShuffle = (i) => {
  if(i % 2 === 0) {
    setStyle(
      "transform", 
      `translate(${posX + 40 - takeElem(".card")[i].style.zIndex / 2}px, ${posY - takeElem(".card")[i].style.zIndex / 2}px)`,
      takeElem(".card")[i]
    );
  }
  else if(i % 2 !== 0) {
    setStyle(
      "transform", 
      `translate(${posX - 40 + takeElem(".card")[i].style.zIndex / 2}px, ${posY - takeElem(".card")[i].style.zIndex / 2}px)`,
      takeElem(".card")[i]
    );
  }
  if(i < CARDS_AMOUNT) setTimeout(() => animateShuffle(++i), 5);
  else return;
}

const memoizeRand = () => {
  let cash = [];
  return function $memoize(max) {
    const rnd = random(max);
    if(cash.includes(rnd))
      $memoize(max);
    else {
      cash.push(rnd);
    }
    
    if(cash.length === 1 + CARDS_AMOUNT) cash = [];

    return rnd
  } 
}  

const random = max => Math.floor(Math.random() * Math.floor(max));
const takeDataNumb = curry((val, arr) => arr[val].dataset.number);
const setRandZindex = compose(takeDataNumb, memoizeRand());

const shuffleDeck = () => {
  animateShuffle(0);
  map((el, i, arr) => 
    setStyle("zIndex", setRandZindex(1 + CARDS_AMOUNT)(arr), el), [...takeElem(".card")]);
  setTimeout(() => animate(0), 1000)
}