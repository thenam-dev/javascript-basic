console.log("DUYỆT MẢNG VỚI FOR VÀ FOREACH");

const myClass = ["hoidanit", "nam", "duy", "toan", "hoa"];

console.log(myClass, myClass.length);

//duyet bang for
for (let i = 0; i < myClass.length; i++) {
  console.log("i =", i, "and value =", myClass[i]);
}

console.log("===================");

for (let i = 1; i <= myClass.length; i++) {
  console.log("i =", i, "and value =", myClass[i - 1]);
}

console.log("===================");

//duyet bang for-each
myClass.forEach(function (value, index) {
  console.log("value =", value, " index =", index);
});

console.log("===================");

//duyet bang array function (chuyen dung)
myClass.forEach((value, index) => {
  console.log("value =", value, " index =", index);
});
