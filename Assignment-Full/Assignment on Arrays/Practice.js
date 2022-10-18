let employee={
    id      : 101 ,
   name     : 'Raj',
   salary   : 30000
}

for(key in employee){
    console.log(key.length);        //print total keys + value length
    }

//print the objects    
console.log(employee);

//print the keys and values of the object

console.log(Object(employee)); 

//print keys alone
for(keys in employee){
    console.log(keys);
}
//print values keys alone
for(keys in employee){
    console.log(employee[keys]);
}
//print particular value of keys 
console.log(employee.id);

//print particular values of key
console.log(employee.name);

//length

console.log(Object.keys(employee).length);

//print all keys and values outof object

for(keys in employee){
    console.log(keys,":", employee[keys]);
}



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

//print array 
console.log(students);

//print elements of array
 for(Details of students)
{
    console.log(Details);
}

//print first object inside an array

console.log(students[0]);


//update object values insde array
students[0]={id:101,name:"Rajkumar", locallity:"chennai"}
console.log(students[0]);


//print length

console.log(students.length);


let array =[12,14,90,null,true,{},[1,2,3,4]]


//length of array
console.log(array.length);

//update array value
array[array.length-1]=[1,2,3,4,5,6,"Yah its working",7];

//print array length of array
console.log(array[6].length);

//print array
console.log(array);

//print array values
for(elements of array){
    console.log(elements);
}

//print first values or last values or any values
array[0]=80;
console.log(array[0]);
console.log(array[array.length-1]);
