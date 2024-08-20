

const text = Array.from(document.getElementsByClassName('rotator__case'))
for(let i = 0; i < text.length; i++){
    let textActive = text.findIndex(text => text.classList.contains('rotator__case_active'))
    setInterval(()=>{
        if(textActive === text.length){
            textActive = 0
            text[textActive].classList.add('rotator__case_active')
        }
       else{
       textActive++
        text[textActive - 1].classList.remove('rotator__case_active')
        text[textActive].classList.add('rotator__case_active')
       }
    }, 1000)
}


    




    
 
