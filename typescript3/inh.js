var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle2 = /** @class */ (function () {
    function Circle2(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    Circle2.prototype.Area = function () {
        this.result = this.PI * this.radius * this.radius;
        console.log("Area of circle : " + this.result);
    };
    return Circle2;
}());
var CircleX1 = /** @class */ (function (_super) {
    __extends(CircleX1, _super);
    function CircleX1(radius) {
        var _this = _super.call(this, radius) || this;
        _this.PI = 3.14;
        _this.radius = radius;
        return _this;
    }
    CircleX1.prototype.Circum = function () {
        this.result = 2 * this.PI * this.radius;
        console.log("Circum of circle : " + this.result);
    };
    return CircleX1;
}(Circle2));
// Create object of above class
var ob = new CircleX1(5);
ob.Circum();
ob.Area();
