const text = Array.from(document.querySelectorAll('.rotator__case'))
text.forEach(e=>{
    if(e.classList.contains('rotator__case_active')){ {
        setInterval(function(){
            if(e.classList.contains('rotator__case_active')){
                e.classList.remove('rotator__case_active')
                e.nextElementSibling.classList.add('rotator__case_active')}
                else if(e.nextElementSibling === null){
                    e.firstChild.classList.add('rotator__case_active')
                }
                },1000)
                }
            }
}
)
    




    
 
