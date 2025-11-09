console.log("LAB 04");

// Tạo form login đơn giản bằng js

const usernameElement = document.getElementById("user");
const passwordElement = document.getElementById("pass");

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
  //   alert("click me");
  const username = usernameElement.value;
  const password = passwordElement.value;

  //check user and pass
  if (username === "namnt180997" && password === "123456") {
    alert("Login successfully!"); // login thanh cong
    window.location.href = "success.html";
  } else {
    // nhap sai thi thong bao va bao do
    alert("Login failed!");
    usernameElement.style.borderColor = "red";
    passwordElement.style.borderColor = "red";
  }
  console.log(usernameElement.value, passwordElement.value); // lay du lieu trong o input
});
