console.log("TRY CATCH");

const doSomething = () => {
  const a = 10,
    b = 0;
  if (b === 0) {
    throw new Error("Thuc hien chia cho 0");
  }
  return a / b;
};

try {
  doSomething();
} catch (error) {
  console.log("Có lỗi xảy ra:", error);
} finally {
  //kieu j code cung chay o day
  console.log("run finally");
}
