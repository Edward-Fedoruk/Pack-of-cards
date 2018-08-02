const newAtr = compose(setAtr, createAtr);
const setName = compose(map(setAtr), iterate(SUIT_AMOUNT, creatElem));

const addAtr =
  (atname, atval = "") => (el, i) => 
    setAtrToNode(el, newAtr(atname)(atval + `${i}`));

const addSuit = (suit, i) =>  map(addAtr("class", suit[i]), setName(["DIV"]))
const cards = iterate(SUITS.length, addSuit , [SUITS]);

const addRank = (el, i) => {
  addClass(el, "card"); 
  addClass(el, "rank" + i); 
  addClass(el, "back"); 
  setStyle(
    "transform", 
    `translate(${takeElem("html")[0].offsetWidth / 2.2}px, 70%)`, 
    el
  );
  return el;
};

const deck = cards.reduce((prev, curr) => 
  concat(prev, map(addRank, curr)), []);

map(addAtr("data-number"), deck)
map(el => takeElem("#deck")[0].append(el), deck);