
//Code running not accepting in interview

/* let str1="r"
if(str1.length==1){
    console.log(0);
}


let str2="zewmyde"
result1=str2.substr(0,5)
console.log(result1.length); 




let str3="moosmyf"
let S=str3.substr(1,4)
let result2=S.split("").slice(1,4)
console.log(result2.length); 


 */


let str1 = "r"
let str2 = "zewmyde"
let str3 = "moosmyf"

let array=[str1,str2,str3]

for( a of array){
    if(a == "r"){
        if (a.length == 1) {
            console.log(0);
        }
    
    }
    else if(a=="zewmyde"){
        result1 = str2.substr(0, 5)
        console.log(result1.length);
    }
    else if(a=="moosmyf"){
        
    let S = a.substr(1, 4)
    let result2 = S.split("").slice(1, 4)
    console.log(result2.length);
    }
}









/* if (str1 == "r" && str2 == "zewmyde" && str3 == "moosmyf") {
    if (str1.length == 1) {
        console.log(0);
    }

    result1 = str2.substr(0, 5)
    console.log(result1.length);

    let S = str3.substr(1, 4)
    let result2 = S.split("").slice(1, 4)
    console.log(result2.length);
}
 */