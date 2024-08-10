//primitive types: number, string boolean sympol undefined null
let number = 10
function increase(number) {
    number++
}
increase(number);
console.log(number) //get 10


//reference type: objects functions arrays
let numberObject = {value: 10}
function increase(numberObject){
    numberObject.value++
}
increase(numberObject);
console.log(numberObject); //get11