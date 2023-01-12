
// Adding new property to object
let obj = {
    id : 1,
    name : "abc",
    skills1 : ["HTML", "CSS", "JS"]
}

console.log(obj)
//  let obj2 = obj.skills
 let new_obj = {...obj, ...obj.skills1.push("React","NodeJs") }
 console.log(new_obj)

