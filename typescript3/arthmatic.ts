

class Arithmatic {

    number1: number;
    number2: number;
    result: number;

    constructor(number1: number, number2: number) // 1 min Q bhg
    //  cz tithe 1 ch paramenter use kryla lvla ahe
    
    { 
       this.number1= number1;// 
       this.number2= number2
    }  


    Addition():void 
    { 
        this.result = this.number1 + this.number2;
       console.log("Addition : "+this.result ) 
    } 

    Sub():void 
    { 
        this.result = this.number1 - this.number2;
       console.log("Substraction : "+this.result ) 
    } 

    Mul():void 
    { 
        this.result = this.number1 * this.number2;
       console.log("Multiplication : "+this.result ) 
    } 

    Div():void 
    { 
        this.result = this.number1 / this.number2;
       console.log("Division : "+this.result ) 
    } 

}

var obj1 = new Arithmatic(10,5);
 obj1.Addition();
 obj1.Sub();
 obj1.Mul();
 obj1.Div();


 var obj2 = new Arithmatic(20,5);
 obj2.Addition();
 obj2.Sub();
 obj2.Mul();
 obj2.Div();