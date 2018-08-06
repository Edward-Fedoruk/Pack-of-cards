const cardListener = listener(".card");

cardListener("click")(
  e => {
    toggle("back", e.target)
  }
);

cardListener("mousedown")(e => {
  const handler = posForElem(`[data-number='${e.target.dataset.number}']`);
  docListener("mousemove")(handler);
  e.target.classList.remove("animate")
  cardListener("mouseup")(() => {
    removeListener(takeElem("html"), "mousemove", handler) 
    e.target.classList.add("animate")
  });
}); 

// addListener([takeElem(".card")[CARDS_AMOUNT]], "webkitTransitionEnd",
//   // () => animate(0)
// )

const flipDeck = () => map(toggle("back"), [...takeElem(".card")]);
addListener(takeElem(".flip"), "click", flipDeck);

addListener(takeElem(".shuffle"), "click", () => {
  shuffleDeck();
});

addListener(takeElem(".sort"), "click", () => {
  animateShuffle(0)
  initZIndex([...takeElem(".card")]);
  animate(0);
});

// setting initial z-index for cards
initZIndex([...takeElem(".card")]);

// initial animation
toggleClass("animate");
animate(0);
