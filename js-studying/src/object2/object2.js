console.log("OBJECT - UPDATE THUỘC TÍNH TRONG OBJECT");

const person = {
  name: "thenam",
  age: 21,
};

console.log("person:", person);

//get data
console.log("age:", person.age); // khuyen dung
console.log("name:", person["name"]); // tuy truowng hop

//set data
person.address = "hanoi";
person["language"] = "vietnamese";
console.log("person after:", person);

//delete data
delete person.name;
console.log("person:", person);
