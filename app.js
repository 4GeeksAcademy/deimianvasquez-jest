function sum(...arg) {
    let total = 0
    arg.forEach((item)=>{
        if(typeof item != "number") return
        total+=item
    })
    
    return total
}

function multi(num1 = 0, num2 = 0) {
    let result = num1 * num2
    return result
}

function isUpperCase(sentence) {
    if(typeof sentence != "string") return false

    return (sentence == sentence.toUpperCase());

}

console.log(sum())

// module.exports = {
//     sum,
//     multi,
//     isUpperCase
// }
