console.log("ALERT");

const element = document.getElementById("login");

element.addEventListener("click", () => {
  console.log("click me");
  alert("Login failed!"); //thong bao tu web toi ng dung
});
