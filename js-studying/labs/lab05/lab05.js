console.log("LAB 05");

const fetchUsers = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log("check data:", data);

  //   insert data to html
  const tbody = document.querySelector("#users tbody");

  tbody.innerHTML = `
        <tr>
          <td>nam</td>
          <td>nam</td>
          <td>nam</td>
        </tr>`;
};

fetchUsers();
