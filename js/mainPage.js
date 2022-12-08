
  // CAROUSEL 
  $(document).ready(function() {
 
    $("#owl-banner").owlCarousel({   
      navigation : true,
      nav: true,
      dots: false,
      pagination : false,
        slideSpeed : 300,
        paginationSpeed : 400,   
        items : 1, 
        margin: 0,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        navigationText : ["<img src='../assets/icons/arrow-left.svg'>","<img src='../assets/icons/arrow-right.svg'>"],
        // navText: ["<img src='../assets/icons/arrow-right.svg'>","<img src='../assets/icons/arrow-right.svg'>"]
   
    });
   
  });



//   let select = document.querySelectorAll("select");

//   select.forEach(function(item){
//     item.addEventListener('click', function(){
//         this.classList.toggle("open-select");
//     });
//   })




var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [0, 90],
    connect: true,
    tooltips: [false, false],
    range: {
        'min': [0],
        '10%': [10, 10],
        '50%': [80, 50],
        '80%': 150,
        'max': 200
    }
});

stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});

// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

  input.addEventListener('change', function () {
      stepsSlider.noUiSlider.setHandle(handle, this.value);
  });

  input.addEventListener('keydown', function (e) {

      var values = stepsSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = stepsSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

          case 13:
              stepsSlider.noUiSlider.setHandle(handle, this.value);
              break;

          case 38:

              // Get step to go increase slider value (up)
              position = step[1];

              // false = no step is set
              if (position === false) {
                  position = 1;
              }

              // null = edge of slider
              if (position !== null) {
                  stepsSlider.noUiSlider.setHandle(handle, value + position);
              }

              break;

          case 40:

              position = step[0];

              if (position === false) {
                  position = 1;
              }

              if (position !== null) {
                  stepsSlider.noUiSlider.setHandle(handle, value - position);
              }

              break;
      }
  });
});


$(document).ready(function() {
 
  $("#owl-brands").owlCarousel({
    navigation : true,
    nav: true,
    dots: false,
    pagination : false,
    items: 1,
    responsiveClass: true,
    itemsDesktop : [1199,5],
    items : 5,
    responsive: true,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
    navigationText : ["<img src='../assets/icons/arrow-left.svg'>","<img src='../assets/icons/arrow-right.svg'>"],

  });

  $("#owl-news").owlCarousel({
    navigation : false,
    nav: false,
    dots: false,
    pagination : false,
    margin: 15,
    items: 3,
    responsiveClass: true,
    margin: 15,
    responsive: true,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [650,1],

    // navText: ["<img src='../assets/icons/arrow-right.svg'>","<img src='../assets/icons/arrow-right.svg'>"]
  });
 
});
