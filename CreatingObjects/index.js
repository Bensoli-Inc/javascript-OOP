//NORMAL OBJECT

const circle = { //object literal syntax
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();

//FACTORY FUNCTION
function createCirrcle (radius) {
    return { 
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const cirrcle = createCirrcle(2);


//CONSTRUCTOR FUNCTION
function Cirrcle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle1 = new Cirrcle(1);
circle1.location = {x:1};
delete circle1.location;

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