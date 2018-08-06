const incStyleProp = start => { 
  let cashValue = start;
  return curry((i, p, el) => setStyle( p, 
    (parseInt(el.style[p]) <= cashValue)
      ? `${cashValue = cashValue + i}` : `${cashValue}`, el));
};

// drag'n drop for card
const incCardZIndex = incStyleProp(CARDS_AMOUNT)(1, "zIndex");
const setPos = curry((card, e) => {
  setStyle("transform", 
    `translate(${e.pageX - card[0].offsetWidth / 2}px, 
             ${e.pageY - card[0].offsetHeight / 2}px)`, 
    card[0]);
  incCardZIndex(card[0]);
});

const posForElem = compose(setPos, takeElem);