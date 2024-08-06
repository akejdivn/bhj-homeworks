const book = document.querySelector('.book');
const size = Array.from(document.querySelectorAll('.font-size'));

size.forEach(el =>{
    el.onclick = function(){

        if(el.classList.contains('font-size_small')){
           el.classList.add('font-size-active')
            book.classList.add('book_fs-small')
            book.classList.remove('book_fs-big')
            if(el.classList.contains('font-size_big')){
                el.classList.remove('font-size-active')
            }
           
        }  else if(el.classList.contains('font-size_big')){
            el.classList.add('font-size-active')
            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small')
            if(el.classList.contains('font-size_small')){
                el.classList.remove('font-size-active')
            }
           
        } 
        else{
            book.classList.remove('book_fs-small') 
            book.classList.remove('book_fs-big')
             
        }
        return false
        
    }
}
)
    

   
 