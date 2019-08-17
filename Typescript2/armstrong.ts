  /* 4. Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.
Input : 153
Output : It is Armstrong number
*/

var chkArmstrong = (no:number)=>
  {
      var no1: number =no;
      var rem:number =0;
      var res:number =0;

      while (no1 >0) 
      {
        rem = Math.floor(no1) % 10;
        res += rem*rem * rem;
        no1= Math.floor(no1)/10;
      }

      if (no==res){
          console.log("no is armstrong");
      }
      else {
          console.log(" no is nt armstrong")
      }
  }

  chkArmstrong(153);