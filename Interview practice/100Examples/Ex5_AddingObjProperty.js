
// Adding new property to object
let obj = {
    id : 1,
    name : "abc",
    skills1 : ["HTML", "CSS", "JS"]
}
console.log(obj)
let obj2 = obj.skills1
let new_obj = {...obj, skills1 : ["React", "Node"] }

console.log(new_obj)