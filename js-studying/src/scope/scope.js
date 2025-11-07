console.log("SCOPE - PHẠM VI BIẾN");

let globalVar = "Tôi là biến toàn cục";

function show() {
  console.log(globalVar); // Truy cập được
}

show();
console.log(globalVar); // Truy cập được

function sayHi() {
  let name1 = "thenam";
  console.log("Hi", name1);

  if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y); // truy cap dc
  }

  console.log(x); // Loi: x is not defined
}

sayHi();
console.log(name1); // Loi name1 is not defined
