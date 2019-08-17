var Arithmatic = /** @class */ (function () {
    function Arithmatic(number1, number2) {
        this.number1 = number1; // 
        this.number2 = number2;
    }
    Arithmatic.prototype.Addition = function () {
        this.result = this.number1 + this.number2;
        console.log("Addition : " + this.result);
    };
    Arithmatic.prototype.Sub = function () {
        this.result = this.number1 - this.number2;
        console.log("Substraction : " + this.result);
    };
    Arithmatic.prototype.Mul = function () {
        this.result = this.number1 * this.number2;
        console.log("Multiplication : " + this.result);
    };
    Arithmatic.prototype.Div = function () {
        this.result = this.number1 / this.number2;
        console.log("Division : " + this.result);
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(10, 5);
obj1.Addition();
obj1.Sub();
obj1.Mul();
obj1.Div();
var obj2 = new Arithmatic(20, 5);
obj2.Addition();
obj2.Sub();
obj2.Mul();
obj2.Div();
