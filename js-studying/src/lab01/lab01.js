console.log("lab01");

const fullName = "ng the nam";
const birthYear = 2004;
const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
const calculatedAge = currentYear - birthYear;

console.log(`
    Ten: ${fullName}
    Tuoi: ${calculatedAge}
    Sinh vien: ${isStudent}`);
