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