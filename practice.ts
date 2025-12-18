function addtwonumbers(a: number, b: number): number{
    return a+b
}

console.log(addtwonumbers(5,10))
function subtracttwonumbers(a: number, b: number): number{
    return a-b
}
console.log(subtracttwonumbers(10,5))
function multiplytwonumbers(a: number, b: number): number{
    return a*b
}
console.log(multiplytwonumbers(5,10))


function dividetwonumbers(a: number, b: number): number{
    return a/b
}
console.log(dividetwonumbers(10,5))
function moduletwonumbers(a: number, b: number): number{
    return a%b
}
console.log(moduletwonumbers(10,3))


let obj1: {key: number; value: number} = {
    key: 1,
    value: 10
}



function throwerror(message: string): never {
    throw new Error(message);
}
