function Cirrcle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle1 = new Cirrcle(1);

for (let key in circle1) {
    if (typeof circle1[key] !== 'function')
    console.log(key, circle1[key]);
}

const keys = Object.keys(circle1);
console.log(keys);

if ('radius' in circle1)
    console.log('Circle has a radius.')