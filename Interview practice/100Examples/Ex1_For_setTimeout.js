
//print1234Using

//working programe but 
 /*  let i=1
while(i<=5){
    setTimeout(()=>{
        console.log(i)
        i++
    },2000)
 
}   */



for (let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },i*2000)
}   
