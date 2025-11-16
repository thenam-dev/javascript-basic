console.log("LAB 05");

// fetch("http://localhost:8000/users");

// const res = res.fetch();

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log("check data:", data);
};
