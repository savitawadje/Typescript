
/*
5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
Input : “Pune Kothrud Marvellous Infosystems”
Output : String contains Marvellous in it.

*/



function chkstring(str:string):void
{
 var sentence:string = "Pune Kothrud Marvellous Infosystems";
 if (sentence.indexOf(str) != -1) {
 console.log("String contains Marvellous ");
 } else {
 console.log("String does not contains Marvellous");
 }
}

chkstring("Marvellous");