console.log("OBJECT");

const scores = [10, 4, 8, 6];

//key: value
const sv1 = {
  score: 10,
  name: "thenam",
  address: {
    city: "hanoi",
    country: "Vietnam",
  },
};

const sv2 = {
  score: 9,
  name: "theduy",
  address: {
    city: "hanoi",
    country: "Vietnam",
  },
};

const sinhvien = [sv1, sv2];

console.log(">>> scores:", scores);
console.log(">>> sinhvien:", sinhvien);
