function Cirrcle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0, y:0};

    let computeOptimumLocation = function() {
        //
    }
    this.draw = function () {
        computeOptimumLocation();
        console.log('draww');
    }
}
const circle1 = new Cirrcle(10);
circle1.draw();
