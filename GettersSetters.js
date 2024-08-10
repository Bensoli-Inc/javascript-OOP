function Cirrcle(radius) {
    this.radius = radius;

    let defaultLocation = {x:0, y:0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    this.draw = function () {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        }
    });
}
const circle1 = new Cirrcle(10);
console.log(circle1);
circle1.draw();
