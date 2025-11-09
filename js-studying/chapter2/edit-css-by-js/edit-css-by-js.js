console.log("EDIT CSS BY JS");

const myTextElement = document.getElementById("myText");
const myButtonElement = document.getElementById("myBtn");
const backButtonElement = document.getElementById("backBtn");

myButtonElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "red"; //doi mau text
  myTextElement.style.backgroundColor = "green"; // doi mau nen text
  myTextElement.classList.add("ntn", "dep", "trai"); // them class
  //{key: value}
});

backButtonElement.addEventListener("click", () => {
  console.log("click me back");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "unset";
  myTextElement.classList.remove("ntn", "dep", "trai"); // xoa class

  //{key: value}
});
