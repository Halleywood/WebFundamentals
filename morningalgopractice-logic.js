var a=100;
function abc(){
     var a=25;
}
console.log(a)
//function never called....so a=100. 
var a=100;
function abc(){
    a=25;
}
abc();
console.log(a)
//a now run through function. a=25. 
var x=10;
function abc(){
    console.log(x);
    return x*10;
}
var z=abc(x);
console.log(z);-->10,100;
//console logging z calls the function stored in z. so console would print 10 
//and then print 100 from the return function being console logged. 

var x=10;
function abc(x){
    console.log(x);
    return x*10;
}
var z=abc(x)+abc(x)
console.log(z);
//console logs 10,returns 100. console logs 10 again. returns 100. console logs 200. 
var x=10, y=20;
function abc (x,y){
    x=x+10;
    y=y+10;
    console.log(x);
    console.log(y);
}
abc(x,y);
console.log(x);
console.log(y);
//function is called. x becomes 20. y becomes 30. console prints x=20
//console prints y=30. exits function.console logs 10 and 20 variables 
//values outside of the function. 

var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for(var i=0;i<x.length;i++){
        x[i]=x[i]+2;
    }
}
abc();
console.log(x);
//function is called. runs. exits function. prints outside x value. 