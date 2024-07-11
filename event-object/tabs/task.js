const tab = document.querySelectorAll('tab')
const tabContent = document.querySelectorAll('tab__content');

tab.onclick = function() {
if(!tab.classList.contains('tab_active')){
    tab.classList.add('tab_active');
   
} else {
    tab.classList.remove('tab_active');
}
}
