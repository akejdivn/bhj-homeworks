const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
const tabNavigation = document.getElementsByClassName('tab__navigation')

for(let i = 0; i< tab.length; i++){
    for(let i = 0; i< tabContent.length; i++){
    tab[i].addEventListener('click', function(){

        let tabActive = tab.findIndex(tab =>{
            if(tab.classList.contains('tab_active')){
                return true
            }
        })
        let tabContentActive = tabContent.findIndex(tabContent =>{
            if(tabContent.classList.contains('tab__content_active')){
                return true
            }
        })
        
        tab[tabActive].classList.remove('tab_active');
        tab[i].classList.add('tab_active')
       
        tabContent[tabContentActive].classList.remove('tab__content_active');
        tabContent[i].classList.add('tab__content_active')
        
    })
}
}


 
