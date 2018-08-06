// helper functions
const curry = fn => {
  const arity = fn.length;
  return function $curry(...args) {
    if (args.length < arity) return $curry.bind(null, ...args);
    return fn.call(null, ...args);
  };
};

const map = curry((fn, f) => f.map(fn));
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
const takeDomElements = curry((parentE, serchE) => parentE.querySelectorAll(serchE));
const addListener = curry((el, ev, fn) => el.forEach(e => e.addEventListener(ev, fn)));
const removeListener = curry((el, ev, fn) => el.forEach(e => e.removeEventListener(ev, fn)));
const setStyle = curry((p, v, el) => el.style[p] = v); 
const creatElem = el => document.createElement(el);
const createAtr = at => document.createAttribute(at);
const setAtr = curry((el, v) => { el.value = `${v}`; return el; });
const setAtrToNode = curry((n, at) => { n.setAttributeNode(at); return n; } );
const addClass = (el, val) => el.classList.add(val);
const toggle = curry((val, el) => el.classList.toggle(val));
const concat = curry((a, b) => a.concat(b));

const CARDS_AMOUNT = 51; // all cards in a deck
const SUIT_AMOUNT = 13; // all cards in a suit
const SUITS = [ // all suits
  "spade",
  "hearts",
  "clubs",
  "diamonds"
];

// set listener for element
const takeElem = takeDomElements(document);
const listener = compose(addListener, takeElem);
const docListener = listener("html");