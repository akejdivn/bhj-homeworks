const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'))

dropdownValue.onclick = function(){
if(dropdownList.classList.contains('dropdown__list_active')){ 
    dropdownList.classList.remove('dropdown__list_active')
} else  {
    dropdownList.classList.add('dropdown__list_active')
}
  };


    dropdownItems.forEach((index) => {
        index.onclick = function(){
          dropdownValue.classList.remove('dropdown__value')
          index.classList.add('dropdown__value')
       
      }
    })
