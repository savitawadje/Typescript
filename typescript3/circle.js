var Circle1 = /** @class */ (function () {
    function Circle1(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    Circle1.prototype.Area = function () {
        this.result = this.PI * this.radius * this.radius;
        console.log("Area of circle : " + this.result);
    };
    return Circle1;
}());
var obj = new Circle1(5);
obj.Area();
