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

const another = new Cirrcle(1);