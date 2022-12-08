"use strict";

// city menu

let selectMenu = document.querySelector(".selected-city");

selectMenu.addEventListener("click", function(e){
    this.parentElement.classList.toggle("open-sub_menu");
    // console.log(this.parentElement)
})


// search activate

let searchTrigger = document.querySelector('#search-trigger');
let openSearch =   document.querySelector('.menu-info--list');
let  closeSearch = document.querySelector('.close-search');


searchTrigger.addEventListener("click", function(){
    openSearch.classList.add("search-form--active")
});

closeSearch.addEventListener("click", function(){
    openSearch.classList.remove("search-form--active")
});

// mobile menu activate

let burgerMenu = document.querySelector('.burger-menu');
let mobileHeader = document.querySelector('.header-mobile')

burgerMenu.addEventListener("click", function(){
    mobileHeader.classList.toggle("mobile-open")
});

// catalog submenu

let catalogTrigger = document.querySelectorAll('.catalog-content_mainCategory');

catalogTrigger.forEach(function(item){
    item.addEventListener("click", (e) => {
        let openSubMenu = document.querySelector('.catalog-content_mainCategory.open-submenu');
        if (openSubMenu && !e.target.isEqualNode(openSubMenu))
            openSubMenu.classList.remove('open-submenu');

        item.classList.toggle('open-submenu');
    });  

})

window.addEventListener('click', (e) => {
    let btnSubMenuName = "open-submenu";
    let subMenuName = "catalog-submenu";

    let btnSubMenu = document.body.querySelector(`.${btnSubMenuName}`);
    let subMenu = e.target.closest(`.${subMenuName}`);

    if (btnSubMenu != null && subMenu == null && !e.target.isEqualNode(btnSubMenu))
        btnSubMenu.classList.remove(`${btnSubMenuName}`);
});


let catalogMobile  = document.querySelector('.catalog-trigger');
let catalogBtn = document.querySelector('.catalog-btn');

function myFunction(x) {
    if (x.matches) { // If media query matches
      // document.body.style.backgroundColor = "yellow";
      catalogBtn.addEventListener("click", function(){
          this.parentElement.classList.toggle('open-main-catalog');
      });
    
    } else {
      // document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 960px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


