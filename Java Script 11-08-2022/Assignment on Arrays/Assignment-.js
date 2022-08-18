//Assignment No 1,2,3,4

let array=[10,20,"Raj",{},[],true,];

//Update
array[2]="Raj kumar"
console.log(array);

console.log(array);   //Print the full array

console.log(array.length);  //print array length

console.log(array[0]);  //Print the first element from array using index number


console.log(array[array.length-1]); //print last element using array.length

for(let elements of array){
    console.log(elements);      //print all array values only
}

console.log(array[(array.length/2)-1]); //print middle element using array length


//Assignment -Array of Objects

var students=[
    {id:101,name:"Raj", locallity: 'Banglore'},
    {id:102,name:"Kumar", locallity: 'Chennai'},
    {id:103,name:"Kamal", locallity: 'Madurai'},
    {id:104,name:"John", locallity: 'Delhi'},
    {id:105,name:"Mani", locallity: 'Mumbai'},
    {id:106,name:"Hari", locallity: 'Pantnagar'},
    {id:107,name:"Mari", locallity: 'Nepal'},
    {id:108,name:"Vijay", locallity: 'Mysur'}
]

//Update
students[2]={id:103,name:"Kamal kannan", locallity: 'Aruppukottai'},
console.log(students); 

console.log(students);   //Print the full array with objects inside

console.log(students.length);     //print array length

console.log(students[0]);   //Print the first object from array using index number

for(key of students){               //print all array objects only
    console.log(key);
}

for(key of students){               //print all array object Names only
    console.log(key.name);
}

let employee={
    id      : 101 ,
   name     : 'Raj',
   salary   : 30000
}

//Update
employee.salary=46000;
employee.locality="Hydrabad";
console.log(employee);

console.log(employee);              //Print the full objects

console.log(employee.id);           //Print the first value of key of object

console.log(employee.name);         //Print the value of key of object

for(key in employee){
    console.log(key);               //print keys of object
}

for(key in employee){
    console.log(employee[key]);    //print values of keys alone
}

let keys=Object.keys(employee)
console.log(keys.length);          // print the Object length

console.log(Object.keys(employee).length);       // print the Object length

