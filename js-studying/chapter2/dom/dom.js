console.log("DOC");
//DOM (Document Object Model): mô hình dạng cây đại diện cho cấu trúc một trang web

const element = document.getElementById("username"); //lay phan tu qua id cu the

const myDiv = document.querySelector(".hello-world"); //tim phan tu dau tien khop voi CSS selector(id,class,tag,...)

const allMyDiv = document.querySelectorAll(".hello-world");

console.log(allMyDiv);
