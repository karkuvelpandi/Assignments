//what is currying
//Pre defining the arguments by using bind or closure is known as currying

let multi=(x,y)=>{
   console.log(x,y);
}
                                 // Presetting the argument using bind method
let multiBind=multi.bind(this,"HI") // if we bind 2 arguments it will ignore the argument 
multiBind("Karkuvel")                     //  which will passing during calling
multiBind()

//second way of currying this is also a closure

let add=function(a){           //predefining outer side and using inside like closure
    return function(b){
      console.log(a+b);
    }
}

let innerAdd=add(7)
innerAdd(5)