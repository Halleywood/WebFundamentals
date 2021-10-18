/*In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater 
than cycleLength. Otherwise, return false.*/

var last= new Date(2021, 10, 1);
var today= new Date();
var cycleLength= 31;

function cycle(){
    if (today-last > cycleLength){
        return true;
    }
    else{
        return false;
    }
}
console.log(cycle());