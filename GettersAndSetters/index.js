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
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    });
}
const circle1 = new Cirrcle(10);
circle1.defaultLocation = 1; //will throw error
console.log(circle1);
circle1.draw();
