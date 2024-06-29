const dead = document.getElementById("dead");
const lost = document.getElementById("lost")
const hole = Array.from(document.getElementsByClassName("hole"))

let counterDead = 0;
let counterLost = 0;

hole.forEach((item) => {
item.onclick = function(){
    if(item.className.includes('hole_has-mole')){
        counterDead++;
        dead.textContent = counterDead
    }
    else{
        counterLost++;
        lost.textContent = counterLost
    }
    if(counterDead === 10){
        alert ("Победа!");
        document.location.reload();
    } else if(counterLost === 5){
        alert ("Вы проиграли!");
        document.location.reload();
    }
    
}
}
)
    

