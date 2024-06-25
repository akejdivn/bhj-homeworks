const click = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter")
let clickerCounter = 0;

click.onclick = function(){
    clickerCounter++;
    const coockie = document.getElementById("cookie");
    coockie.width =200;
    if(clickerCounter % 2){
        const coockie = document.getElementById("cookie");
        coockie.width =150;
    }
    counter.innerHTML = `${clickerCounter}`
}