let pk={
    fname:"karkuvel",
    lname:"pandi",
}

let person={    //proto
   fname:"Default",
   lname:"Default",
   getName:function(){
       return this.fname
   }
}

pk.__proto__=person

console.log(pk.getName());
