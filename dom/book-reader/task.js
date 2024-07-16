const book = document.querySelector('.book');
const size = Array.from(document.querySelectorAll('.font-size'));

size.forEach(el =>{
    el.addEventListener('click', function(){
            this.classList.toggle('font-size_active')

      

        if(this.classList.contains('font-size_small')){
            book.classList.add('book_fs-small')
        }  else if(this.classList.contains('font-size_big')){
            book.classList.add('book_fs-big')
        } 
        
    })
}
)
    


   
 