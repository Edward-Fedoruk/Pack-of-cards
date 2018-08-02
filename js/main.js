const cardListener = listener(".card");

cardListener("click")(
  e => toggle("back", e.target)
);

cardListener("mousedown")(e => {
  const handler = posForElem(`[data-number='${e.target.dataset.number}']`);
  docListener("mousemove")(handler);
  cardListener("mouseup")(() => removeListener(takeElem("html"), "mousemove", handler));
});

addListener([takeElem(".card")[CARDS_AMOUNT]], "webkitTransitionEnd",
  () => map(toggle("animate"), [...takeElem(".card")])
)

const flipDeck = () => map(toggle("back"), [...takeElem(".card")]);

addListener(takeElem(".flip"), "click", flipDeck)
