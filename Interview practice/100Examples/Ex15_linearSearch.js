    let a = [1,2,3,4,5,6]
    let b = 2

    function linearSearch(a,b){
    for(ele of a){
        if(ele == b){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
}

linearSearch(a,b)

