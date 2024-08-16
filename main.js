const topMenu = document.getElementById('custom-top-menu');
const toggleTopMenuIcon = document.getElementById('custom-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    //Click to Toggle top menu icon
    topMenu.classList.toggle('hidden');
  }else{
    //Click outside from 
    // if (topMenu.classList.contains('custom-toggle-top-menu-icon')) {
    //   topMenu.classList.remove('custom-top-menu');
    // }
  }
    
}
);