var x=document.querySelector("#name");
function nameChange(){
    x.innerText="Kelsey Halley";
}

//clicking accept or reject will cause row to dissapper. 
var y=[
    document.querySelector("#connectionrow2"),
    document.querySelector("#connectionrow3")
];
var counter=2;
var z=document.querySelector("#countdown");

function dissappear(id){
    y[id].style.display="none";
    counter --;
    z.innerHTML=counter;
}

//clicking function disseaper(id) decreases the connection requests number. 