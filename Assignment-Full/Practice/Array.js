
let a=[1,7,"007","software",{},[]]

console.log(a.length)
a[2]="007_motivations"
console.log(a[2]);


let employees=[
    {id:101, name:'mani',mark:40},
    {id:102, name:'Raj',mark:30},
    {id:103, name:'kamal',mark:20},
    {id:104, name:'kannan',mark:60},
    {id:105, name:'bala',mark:30},
    {id:106, name:'venki',mark:40},
    {id:107, name:'hari',mark:60}
]
console.log(Array.length);
for(emp of employees){
    console.log(emp.id)
}