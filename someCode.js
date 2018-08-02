const compose = (a, b) => (x) => a(b(x));
// const map = (a, f) => f.map(a);
class IO {
  static of(x) {
    return new IO(() => x);
  }

  constructor(fn) {
    this.$value = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.$value));
  }

  inspect() {
    return `IO(${inspect(this.$value)})`;
  }
}

const ioWindow = new IO(() => window);

ioWindow.map(win => win.innerWidth);

ioWindow
  .map(prop('location'))
  .map(prop('href'));


  const either = curry((f, g, e) => {
    if (e.isLeft) {
      return f(e.$value);
    }
  
    return g(e.$value);
  });
  
  // validateName :: User -> Either String ()
  const validateName = user => user.name.length > 3 
      ? Either.of(user)
      : left("not");
  
  // register :: User -> IO String
  const register = compose(save, either((s) => "eror", showWelcome ), validateUser(validateName));