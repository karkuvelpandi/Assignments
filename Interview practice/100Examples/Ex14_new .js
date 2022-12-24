if(5>4){
    var a=4
}
console.log(a);
if(5>4){
    let b=4
}
console.log(b);

/**********************************************************************/
function currying(b){                            //  Q2   Closure 2
    return function (b){
           return function (c){

           }
     } 
 }


 /********************************************************************/
 const nested=[1,2,3,[4,5,[6,7,[8]]]]              //Q4  Convert nested array to single array without flat method
const single =[]
for(arr1 of nested){
      if(typeof(arr1)==="number"){                 //Can use " if(isNaN(arr1)===false){ " Also
        single.push(arr1)
      }
      else {
        for(arr2 of arr1){
          if(typeof(arr2)==="number"){            //Can use " if(isNaN(arr2)===false){ " Also
              single.push(arr2)
          }
          else{
            for (arr3 of arr2){
                if(typeof(arr3)==="number" ){
                    single.push(arr3)
                 }
                 else{
                    for (arr4 of arr3){
                        if(typeof(arr4)==="number"){
                            single.push(arr4)
                        }
                    }
                 }   
            }
          }
        }
      }
}
console.log(single);