
/*
2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52

*/

function summation(no:number[]):void
{
    var sum:number=0;

    for(var i = 0; i < no.length; i++) 
  { 
   sum = sum + no[i];
    
    }
    console.log(sum);
    
}

summation([23, 6, 7, 4, 5, 7]);