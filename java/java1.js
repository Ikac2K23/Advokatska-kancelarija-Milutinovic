function pokreni() {
    x = setInterval(start, 2000)
}
i = 0;
function start() {
    velikaslika = document.getElementById("vslika");
    maleslike = document.getElementsByClassName("mslika");
    maleslike[i].style.opacity = 1;
    i++;
    if (i == 6)
        i = 0;
    velikaslika.src = maleslike[i].src;
    maleslike[i].style.opacity = 0.5;
}

function stop() {
    clearInterval(x);
}

var slideIndex = 0;
pokreni(); 

function showSlides() {
  var slides = document.getElementsByClassName("mslika");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

