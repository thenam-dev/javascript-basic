console.log("CRUD ARRAY");

const names = ["hoidanit", "thenam", "nam", "nguyen"];

//index = 0 (start) ; arr[index]
console.log("0 = ", names[0]);
console.log("2 = ", names[2]);

console.log("10 = ", names[10]); // undefined

names[2] = "update name"; //edit phan tu
console.log("before: ", names);

names.push(true, 123); // them phan tu vao cuoi mang
names.unshift(1); // them phan tu vao dau mang
names.pop(); // xoa phan tu cuoi trong mang
console.log("after: ", names);
