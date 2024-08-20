const book = document.querySelector('.book');
const size = Array.from(document.querySelectorAll('.font-size'));

size.forEach(el =>{
            el.onclick = function(){
                size.forEach(el =>{

                el.classList.remove('font-size_active')
                this.classList.add('font-size_active')
                book.classList.remove('book_fs-small')
                book.classList.remove('book_fs-big')

        if(this.classList.contains('font-size_small')){
             book.classList.add('book_fs-small')
        }
               else if(this.classList.contains('font-size_big')){
             book.classList.add('book_fs-big')
                 }
         else {
             book.classList.remove('book_fs-small') 
             book.classList.remove('book_fs-big')
         }
         }
                )
                return false
            }
        
           
        }
    )
    
     
    

   
 