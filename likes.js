var text=document.querySelector("#counter");
var count=13;
function like(){
    count++;
    text.innerText= count+" like(s)";
    console.log(count);
}