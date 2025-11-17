console.log("Create todo");

const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");

// ham tao so int random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const myTodo = {
      id: getRandomInt(1, 100000000000),
      name: inputTodo.value,
    };

    // alert(inputTodo.value); -> check lay du lieu tu input
    const currentTodoStr = localStorage.getItem("todo");

    // da ton tai todo trc day
    if (currentTodoStr) {
      const currentTodo = JSON.parse(currentTodoStr); // convert from string to object
      // console.log(">>> check todoStr: ", currentTodoStr);

      currentTodo.push(myTodo); // push them todo vao memory may tinh
      localStorage.setItem("todo", JSON.stringify(currentTodo)); // luu vao local storage
    } else {
      localStorage.setItem("todo", JSON.stringify([myTodo]));
    }

    //success
    window.location.href = "ass01.html";
  });
}

const generateTodoTable = () => {
  const todoListStr = localStorage.getItem("todo");
  if (todoListStr) {
    const todoList = JSON.parse(todoListStr);
    console.log(todoList);
  }
};

generateTodoTable();
