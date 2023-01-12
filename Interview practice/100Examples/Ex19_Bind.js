
let wish={
    hi:"Hi...!"
}

function fun(name,wish,a){
    console.log(wish+" "+name+" "+a);
}


let fun1=fun.bind(this,wish.hi)

fun1("mani","how are u")