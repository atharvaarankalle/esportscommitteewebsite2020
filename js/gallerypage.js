let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imageSlides");
    let dots = document.getElementsByClassName("selectDot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.onkeyup = function (event) {
    if (event.keyCode === 39) {
        document.getElementById("nextButton").click();
    } else if (event.keyCode === 37) {
        document.getElementById("previousButton").click();
    }
}