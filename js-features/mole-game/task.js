const dead = document.getElementById("dead");
const lost = document.getElementById("lost")
const hole = document.getElementsByClassName("hole")

let counterDead = 0;
let counterLost = 0;

hole.onclick = function(){
    if(hole.className.includes( 'hole_has-mole' )){
        counterDead++;
        dead.textContent = counterDead
    }
    else{
        counterLost++;
        lost.textContent = counterLost
    }
} 

if(dead === 10){
    alert ("Победа!");
   lost = 0;
   dead = 0;
} else if(lost === 5){
   lost = 0;
   dead = 0
}