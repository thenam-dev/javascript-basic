console.log("FILTER");

const ages = [10, 20, 30, 25, 12, 19];

const ages_x2 = ages.map((item, index) => item * 2);

const agesGreatThan18 = ages.filter((item, index) => {
  return item > 18; //true
});

console.log("original:", ages);
console.log("after:", ages_x2);
console.log("age more than 18: ", agesGreatThan18);
