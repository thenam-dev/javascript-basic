console.log("EVENT LISTENER");

//Là phương thức tiêu chuẩn để gắn sự kiện vào phần tử HTML

const element = document.getElementById("thenamBtn");

const handleClickBtn = () => {
  console.log("You click a button");
};
element.addEventListener("click", handleClickBtn);

console.log(element);
