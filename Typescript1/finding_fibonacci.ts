/* Q5.
  Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/




function Fibonacci(no:number):void {
     var num:number ; 
    var no1 = 0;
    var no2 = 1;

    for (var i = 0; i < no; i++) {
      console.log(no1);
        var num = no1 + no2;
        no1 = no2;
        no2 = num;
        if(no1 > no){
          break;
        }
    }
    
}


Fibonacci(21);