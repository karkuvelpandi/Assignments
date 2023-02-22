let array = ["good", "i", "ylou", "sac11111111111hin", "karkuvel", "akishore", "143"]
let newarr = []

let sorting = (array) => {
    let len= array.length
    let count=0
    for (let i = 1; count < len; i++) {
        array.map((element) => {
            if (element.length === i) {
                newarr.push(element)
                count++
            }
           
        })
    }
// Alternate by using the while loop

// count=0
//     i=0
//     while(count<array.length){
//         array.map((element)=>{
//              if(element.length===i){
//                 newarr.push(element)
//                 count++
//              }
//         })
//         i++
       
//     }

}
sorting(array)
console.log(newarr);
