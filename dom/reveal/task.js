const reveal = document.querySelectorAll('.reveal');
console.log(reveal)


document.addEventListener('scroll', function() {
    Array.from(reveal).forEach((reveal) => {
    let top = reveal.getBoundingClientRect().top
     let  bottom = reveal.getBoundingClientRect().bottom
      
    if((top > 0) &&(  bottom < window.innerHeight )){
        reveal.classList.add('reveal_active') 
        
    } else {
        reveal.classList.remove('reveal_active') 
    }
    });
})