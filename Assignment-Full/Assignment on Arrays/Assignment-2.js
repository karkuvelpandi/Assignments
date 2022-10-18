
var students=[
    {id:101,name:"Raj", locallity: 'Banglore'},
    {id:102,name:"Kumar", locallity: 'Chennai'},
    {id:103,name:"Kamal", locallity: 'Madurai'},
    {id:104,name:"John", locallity: 'Delhi'},
]
//print array as it is
console.log(students);
// print elements 
for(elements of students){
    console.log(elements);
}

//pop
students.pop();
console.log(students);

//push
students.push( {id:108,name:"Vijay", locallity: 'Mysur'});
console.log(students);

//Unshift
students.unshift({id:107,name:"Mari", locallity: 'Nepal'},)
console.log(students);

//Shift
students.shift();
console.log(students);

//2D Array

const row=10
const column=12

const demoArray=[];

for(let i=0;i<row;i++ ){
    demoArray[i]=[1]
    
}
console.log(demoArray);

for(let i=0;i<column;i++ ){
    demoArray[i]={a:1}
    
}
console.log(demoArray);

