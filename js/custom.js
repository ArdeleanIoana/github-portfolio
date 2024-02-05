// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});


function filterImages(category) {
    const images = document.querySelectorAll('.gallery__image');
    const hideNudity = document.getElementById('hideNudity').checked;
    images.forEach((image) => {
        const hasCategory = category === 'all' || image.classList.contains(category);
        const hasNudity = image.classList.contains('nudity');
        if (hasCategory && (!hasNudity || !hideNudity)) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
          console.log("hiding?");
        }
      });
    }


  function toggleNudity() {
    console.log("hello there");
    filterImages('all'); // Refresh the gallery when toggling nudity
  }
