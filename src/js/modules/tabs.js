let programmsItem = document.querySelectorAll('.price_programms__item'); // TABS HEADER
let programmsTab = document.querySelectorAll('.price_programms__tab'); // TABS ITEM

// TABS
export function activeTabs(){
  programmsItem.forEach(function(elem){
    elem.addEventListener('click', activeTab);
  })
  
  function activeTab( ){
    programmsItem.forEach(function(elem){
      elem.classList.remove('active_programms');
    })
    this.classList.add('active_programms');
    let tabName = this.getAttribute('data-tab');
    activeTabContent(tabName);
  }
  
  function activeTabContent(tabName){
    programmsTab.forEach(function(item){
      if (item.classList.contains(tabName)){
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    })
  }
}

