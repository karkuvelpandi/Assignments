let arr=[1,11,45,6,4,8,99,75]


let sorting=(arr)=>{
     let len=arr.length
     for(j=0;j<len-1;j++){
        for(i=0;i<len-1;i++){
            if(arr[i]>arr[i+1]){
                var temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
            }
     }
     }
     return arr
     
}
console.log(sorting(arr)); 


