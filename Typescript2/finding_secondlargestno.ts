 /* 3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77
*/

function maximum(no:number[]) : void
{
    var temp;
    for (var i= 0; i<no.length ; i++){

        for(var j= i+1; j<no.length; j++){

            if (no[i] < no[j])
            {
                temp = no[i];
                no[i]= no[j];
                no[j]= temp;

            }
        }
        
    }

    console.log("second largest no is : " +no[1]);
}

maximum([23, 89, 6, 29, 56, 45, 77, 32]);

