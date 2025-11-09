console.log("KEYWORD RETURN");

const sum = (a, b, c) => {
  console.log("run before");
  if (typeof a !== "number") {
    //check input
    console.log("run empty return");
    return;
  }
  return a + b + c;
  console.log("run after");
};

console.log(sum("a", 2, 3));
