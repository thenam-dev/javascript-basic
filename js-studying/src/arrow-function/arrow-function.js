console.log("ARROW FUNCTION");

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 5));

// (a,b) => { //anonymous function
//     return a-b;
// }

(function () {
  console.log("say hi chay ngay di");
})();

(function () {
  console.log(sum(a, b));
})();

//
