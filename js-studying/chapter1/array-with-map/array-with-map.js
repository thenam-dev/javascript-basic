console.log("BIẾN ĐỔI MẢNG VỚI MAP()");

const scores = [10, 8, 3, 7, 5];

//read data
scores.forEach((element, index) => {
  console.log("index =", index, "value =", element);
});

console.log("=======================");

//modify data
const score_x2 = scores.map((value, index) => {
  return value * 2;
}); // basic

const otherScore_x3 = scores.map((element, index) => element * 3); //advanced

console.log("score_x2 =", score_x2);
console.log("score_x3 =", otherScore_x3);

// const names = ["mot", "hai", "ba"];
// names.pop();
// names.unshift("alo");
// names.push("bye");

// console.log(names);
