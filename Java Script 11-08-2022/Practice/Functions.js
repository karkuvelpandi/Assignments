


function greet(message,name){
    if(name){
        return("hello"+name +message); 
    }
    
    else{
     console.log("Name not entered");
      return("hello"+ message); 
    }
}

var greeting=greet("hello")
console.log(greeting);