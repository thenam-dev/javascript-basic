console.log("LOCAL STORAGE");

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const prevElement = document.getElementById("prev");
const prevName = localStorage.getItem("thenam");
if (prevName) {
  prevElement.innerHTML = `<b>${prevName}<b/>`;
}

console.log(input);

btn.addEventListener("click", () => {
  //   alert("Are you sure?");
  //   console.log(input.value);
  localStorage.setItem("thenam", input.value); // luu tru key:value trong local storage

  document.getElementById("message").innerHTML = `<b>${input.value}<b/>`;
});

//NOTE:
// _ Cách lưu một object:
//  Convert object => json (using JSON.stringify/parse)
