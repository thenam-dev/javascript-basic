console.log("LẶP OBJECT VỚI FOR...IN VÀ FOR...OF");

//for...in : duyet qua thuoc tinh
// for (let key in object) {
//   console.log(key, object[key]);
// }

//for...of : duyet qua gia tri
// for (let value of iterable) {
//   console.log(value);
// }

const sv1 = {
  username: "thenam",
  score: 9.6,
};

const sv2 = {
  username: "theduy",
  score: 10,
};

const sv3 = {
  username: "thehuy",
  score: 8,
};

const sinhvien = [sv1, sv2, sv3];
console.log(">>> check sinhvien:", sinhvien);

// sinhvien.forEach((item, index) => {
//   console.log(">>> index =", index, " name =", item.username);
// });

const person = {
  email: "ngthenam@gmail.com",
  age: 21,
  address: "vienam",
};

// for (let key in person) {
//   console.log(key, person[key]);
// }

// for (let value of Object.values(person)) {
//   console.log(value);
// }

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
