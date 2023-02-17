
// *********************************************************/
//  CALLBACK
// **********************************************************/
// let datas=["mari","kannan"]

// let createData=(person,callback)=>{
//    setTimeout(()=>{
//        datas.push(person)
//        callback();
//    },[4000])
// }

// let getData=()=>{
//     setTimeout(()=>{
//         console.log(datas);
//     },[1000])
// }

// createData("kamal",getData)

// ***********************************************************************/
// PROMISE
// ***********************************************************************/

// let datas=["kannan","mari"]

// let create=(person)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(person)
//             let flag=true
//             if(flag){
//                 resolve("successfull...")
//             }else{
//                 reject("failure...")
//             }
//          },[4000])
//     })
// }

// let get=()=>{
//     setTimeout(()=>{
//        console.log(datas);
//     },[])
// }
// create("prem").then((msg)=>{
//     get()
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })

// **************************************************************/
    // ASYNC AWAIT
// **************************************************************/
let datas=["kannan","mari"]

let create=(person)=>{
    return  new Promise((resolve,reject)=>{
       let flag=true
       setTimeout(()=>{
        datas.push(person)
        flag?resolve():reject()
    },[4000])
    })
     
 
}
let get=()=>{
    setTimeout(() => {
        console.log(datas);
    }, [1000]);
}

async function start(){
    let person="tamil";
    await create(person)
    get()
}
start()