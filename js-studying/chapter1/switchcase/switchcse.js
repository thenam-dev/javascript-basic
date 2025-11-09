console.log("SWITCHCASE");

const score = 8;

switch (true) {
  case score >= 8 && score <= 10: //true
    console.log("Gioi");
    break;

  case score >= 6 && score <= 8:
    console.log("Kha");
    break;

  case score >= 4 && score <= 6:
    console.log("TB");
    break;

  default: // cac truong hop con lai
    console.log("Yeu");
}
