// Push 10 Number to an empty array using Map method.

let array = [];
let fun = () => {
  [...Array(10)].map((element, index) => {
    // console.log(element);
    let randomNum = Math.floor(Math.random() * 100 + 1);
    // console.log(randomNum);
    array.push(randomNum);
  });
  console.log("avlothen " + array);
};
fun();
