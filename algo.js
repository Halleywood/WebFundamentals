/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

function reverseString(string){
    let newString=""
    for(var x=string.length-1;x>=0;x--){
        newString+=string[x];
    }
    console.log(newString);
    return newString;
}
reverseString(str1);
reverseString(str2);

/*****************************************************************************/

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

//const str1 = " there's no free lunch - gotta pay yer way. ";
//const expected1 = "TNFL-GPYW";

//const str2 = "Live from New York, it's Saturday Night!";
//const expected2 = "LFNYISN";

//function acronymize(){
//    let acronym=""
//        for(var i=0; i<str1.length-1; i++){
//            if(str1[i]="_"){
//                console.log("here");
//            }
//        }
//}
//acronymize(str1);

/*****************************************************************************/