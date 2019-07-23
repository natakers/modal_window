$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:82,
    nav:false,
    loop:true,
    responsive:{
        0:{
            items:1
        },
 
        992:{
            items:3
        },
        /*1000:{
            items:5
        }*/
    }
})
});


(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();