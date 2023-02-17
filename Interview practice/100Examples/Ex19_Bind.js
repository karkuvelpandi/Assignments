// bind method for normal function
let wish={
    hi:"Hi...!"
}

function fun(wish,a){
    console.log(wish+" "+this.hi+" "+a);
}


let fun1=fun.bind(wish)

fun1("mani","how are u")



//bind method for faf
// let wish={
//     hi:"Hi...!"
// }

// let fun=(name,wish,a)=>{
//     console.log(wish+" "+name+" "+a);
// }


// let fun1=fun.bind(this,wish.hi)     //bind method for faf

// fun1("mani","how are u")


