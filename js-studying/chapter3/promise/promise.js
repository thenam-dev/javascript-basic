console.log("PROMISE");

console.log("1. Bat dau");

//async
// setTimeout(() => {
//   console.log("2");
// }, 5000);
// console.log("3");

// Tao 1 Promise de gia lap mot tac vu mat thoi gian (vd: tai du lieu tu server)
const myPromise = new Promise((resolve, reject) => {
  console.log("2. Tac vu trong Promise bat dau (chay ngay lap tuc)");

  // setTimeout la 1 ham bat dong bo, no se ko "stop" chuong trinh o day
  setTimeout(() => {
    resolve("4. Tac vu hoan thanh!"); // Dong nay se dc thuc thi sau cung
  }, 3000); // wait 3s -> A
});

// const test = myPromise();
// console.log("test", test);

// console.log("=============== with promise below:");
// console.log("1");

// .then() dang ky mot hanh dong se lam KHI promise hoan thanh
myPromise.then((message) => {
  console.log(message);
});

console.log("3. ket thuc kich ban chinh"); // -> B

/**
 1. Bat dau
 2. Tac vu trong Promise bat dau (chay ngay lap tuc)
 3. Ket thuc kich ban chinh
 ...cho 3 giay...
 4.Tac vu hoan thanh!
 */
