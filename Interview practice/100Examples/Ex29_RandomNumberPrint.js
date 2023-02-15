
let array=[]
function randomPusher(){
    // for (const a of array) {
        let x = Math.floor((Math.random() * 100))
        
        if(!array.join("").includes(x) && array.length<101){
            array.push(x)
            
        }
        else if(array.includes(x)){
            // array.push("x")
        }
        else if(array.length>101){
            return console.log('Mission Accomplished');
        }
       
        randomPusher()
    // }
}
randomPusher()
console.log(array.join("").split());


