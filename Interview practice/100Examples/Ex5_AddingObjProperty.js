// Adding new value inside object's arr
/* let obj = {
    id : 1,
    name : "abc",
    skills : ["HTML", "CSS", "JS"]
}
console.log(obj)
let obj2 = obj.skills
let new_obj = {...obj, ...obj2.push("React") }
console.log(new_obj) */


// Adding new property to object
let obj = {
    id : 1,
    name : "abc",
    skills1 : ["HTML", "CSS", "JS"]
}
console.log(obj)
let obj2 = obj.skills1
let new_obj = {...obj, skills2 : ["React", "Node"] }

console.log(new_obj)