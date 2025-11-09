console.log("EDIT HTML CONTENT");

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");

const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
  console.log("You click my button");
  //   myTextElement.innerText = "Just the content with thenam";
  myTextElement.innerHTML =
    "<strong>Hello bro</strong>, <em>Let study with me!";
});

backBtnElement.addEventListener("click", () => {
  myTextElement.innerText = "EDIT HTML CONTENT";
});
