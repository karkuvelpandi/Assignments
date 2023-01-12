
let obj = {
    name: "imad",
    team: [
        {
            name: "kishore",
            team: "imad"
        },
        {
            name:"pradeep",
            team:"imad"
        }
    ]
}

let iterate=(obj)=>{
   
      for(let ob in obj)
     
        if(typeof(obj[ob])==="string"){
              console.log('yes');
        }
        else if (typeof(obj[ob])==="object"){
            // return ob.map((o)=>{
            //   return ( iterate(o))
            // })
            console.log('no');
        }
       
}
iterate(obj)


// const population = {
//     male: 4,
//     female: 93,
//     others: 10
//   };
  
//   // Iterate through the object
//   for (const key in population) {
//     if (population.hasOwnProperty(key)) {
//       console.log(`${key}: ${population[key]}`);
//     }
//   }