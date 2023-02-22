
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7, 8]

let arrayMerging = (...arg) => {
    let result = []
    arg.map((element) => {
        for (a of element) {
            result.push(a)
        }
    })
    return result
}

let result = arrayMerging(array1, array2, array3)
console.log(result);