// Reucing the function from other objects using call method
let userDetails = {
    name: "Ajay Suneja",
    Age: 28,
    Designation: "Software Engineer",
    printDetai1s: function () {
        console.log(this)
    
    }}
userDetails.printDetai1s();
 let userDetails2 = {
            name: "Anuj Suneja",
            Age: 29,
            Designation: "Software Engineer",}

 userDetails.printDetai1s.call(userDetails2);

//  Accessing and reusing the common function using call method

let commonFun=function(state,country){
console.log(this.name+" "+state+" "+country)
}

let object={
    name:'kishore'
}
let object2={
    name:"imad"
}

// calling
commonFun.call(object,"tn","india")
commonFun.call(object2,"kn",'india')


// APPLY METHOD  //similar to call method only difference we send arguments in array list format

commonFun.apply(object,["tamilnadu",'india'])


// BIND METHOD //binding the value and stored in new function we can invoke the created function whenever we need

let bindedFun=commonFun.bind(object2,"kn","india")
bindedFun()
