console.log("CALL API WITH FETCH");

//fetch => raw data (Response) => object

const temp = fetch("http://localhost:8000/users");

temp.then((res) => res.json()).then((data) => console.log(data));
//res.json la 1 ham Promise nen phai .then de lay data (dung fetch ket hop promise)
