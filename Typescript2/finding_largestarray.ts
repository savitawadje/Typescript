
/*
1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89

*/
 
function maximum(no:number[]): void
{
    var max:number=0;
    for(var i = 0; i < no.length; i++) 
  { 
   if (no[i] > max) 
   max = no[i];
    
    }
    console.log( max);
    
}

maximum([23, 89 ,6 ,29, 56, 45, 77, 32]);