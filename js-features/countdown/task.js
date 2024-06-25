const timer = document.getElementById('timer');
let time = 59;




let interval = setInterval(countdown, 1000)


function countdown() {
    
    if(time === 0){
        alert('Вы победили в конкурсе! Теперь Вы котенок!');
        clearInterval(interval)
    } else {
        timer.innerHTML = `${time}`;
        time--;
    }
    
}
