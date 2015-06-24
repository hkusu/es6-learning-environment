// Polyfill が必要な拡張機能を利用する場合
//require("babelify/polyfill");

var add = (a, b) => {
  return a + b;
};

console.log(add(4, 5));
