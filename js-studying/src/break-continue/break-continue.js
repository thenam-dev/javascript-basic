console.log("BREAK CONTINUE");

for (let i = 1; i < 10; i++) {
  console.log("i = ", i);
  if (i === 5) {
    break; // stop
  }
}

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue; //skip
    console.log("i = ", i);
  }
}
