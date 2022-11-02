
//Incomplete


// let a=[10,20,[30,[40,50,[60,70,80]]]]

// let b=[]
// for (ele of a){
//     b.push(ele)
// }

// console.log(a)
// console.log(b);
// Array

// function map(array, method){
//     let resultArray = []
//     array.foreach(element=>{
//         const value = method(element)
//     })
//     return value
// }

// function firstIndexOfElementInArray(element, array){
//     let result =-1

//     for(let i=0; i < array.length;i++){

//     }
//     return result
// }

// function _(func,items){
//     let i = 0;
//     for(let item of items){
//         if(func(item)){
//             items[i] =item
//             i += 1
//         }
//     }
//     items.splice(i)
// }

const myArray = new Array(2)

myArray[1] = 1
myArray[3] = 3

console.log('length :', myArray.length);

console.log('Elements:');
for (const element of myArray){
    console.log('\t', element);
}