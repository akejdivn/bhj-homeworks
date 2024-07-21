const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'))

dropdownValue.onclick = function(){
  dropdownList.classList.toggle('dropdown__list_active')
  };
 
  dropdownItems.forEach(i => {
    i.onclick = function(){
    dropdownValue.innerHTML = i.textContent
    console.log('smvmv')
    dropdownList.classList.toggle('dropdown__list_active')
    return false
    }
  }
)



