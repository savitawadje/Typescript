


function summation( no : number[]): number  
 {
    var sum = 0;
    for (var i = 0; i < no.length; i++) {
        sum = sum + no[i];
    }
    console.log(sum);
    return sum;
}
summation([23, 6, 7, 4, 5, 7]);
