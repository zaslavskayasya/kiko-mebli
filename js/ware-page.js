$(document).ready(function() {
 
    $("#owl-ware").owlCarousel({
      navigation : true,
      nav: true,
      dots: true,
      pagination : true,
      items: 1,
      responsiveClass: true,
      itemsDesktop : [1199,1],
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsMobile : [479,1],
      items : 1,
      adaptiveHeight: true,
      responsive: true,      
      navigationText : ["<img src='../assets/icons/gray-arrow-left.svg'>","<img src='../assets/icons/gray-arrow-right.svg'>"],
      
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
});


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});


// Order modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("ask_score");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Sizes modal
let sizesModal = document.getElementById("sizesModal");
let btnSizes = document.querySelector(".sizes-btn");
let spanr = document.getElementsByClassName("closer")[0];


btnSizes.onclick = function() {
  sizesModal.style.display = "block";
}

spanr.onclick = function() {
  sizesModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == sizesModal) {
    sizesModal.style.display = "none";
  }
}




// cities modal
let cityModal = document.getElementById("cityModal");
let btnCities = document.querySelector(".callCityModal");
let closeMod = document.getElementsByClassName("closeModal")[0];

btnCities.onclick = function() {
  cityModal.style.display = "block";
}

closeMod.onclick = function() {
  cityModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == cityModal) {
    cityModal.style.display = "none";
  }
}






