console.log("CALLBACK");

// Su dung callback tong quat
const greeting = (name, callback) => {
  console.log("Xin chao:", name);
  callback();
};

const hello = () => {
  console.log("learn callback...");
};

const hi = () => {
  console.log("say hi...");
};

greeting("TheNam", hello);
greeting("namnam", hi);

//================================
//VD ve callback hell !!!
// callback hell (dia nguc callback) la thuat ngu
// mo ta viec long qua nhieu callback ben trong nhau,
// khien code tro nen kho doc, kho bao tri
