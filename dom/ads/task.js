const text = document.querySelectorAll('.rotator__case')

const timeInterval = setInterval(function(){
if(text.classList.contains('rotator__case_active')){
    text.classList.remove('rotator__case_active')
    text.nextElementSibling.classList.add('rotator__case_active')
} 
    }
 , 1000)