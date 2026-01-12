// Homepage file for Section 1
// This single function handles ALL your menus (Personal, Business, Corporate)

function toggleDropdown(menuId) {  
    // 1. Close any currently open menus first
    // (This prevents having two huge menus open at the same time)
    var allMenus = document.querySelectorAll('.megamenu');
    allMenus.forEach(function(menu) {
        if (menu.id !== menuId) {
            menu.classList.remove('active');
        }
    });

    // 2. Toggle the specific menu you clicked
    var selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.classList.toggle("active");
    } else {
        console.error("Could not find a menu with ID: " + menuId);
    }
}




// FAQs file for Section 31
// This single function handles ALL your FAQs dropdowns

function openTab(evt, tabName) {
  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  var tablinks = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}