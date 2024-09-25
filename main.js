

let slideIndexs = 1;
showSlides(slideIndexs);

function plusSlides(n) {
  showSlides(slideIndexs += n);
}

function currentSlide(n) {
  showSlides(slideIndexs = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexs = 1}
  if (n < 1) {slideIndexs = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexs-1].style.display = "block";
  dots[slideIndexs-1].className += " active";
  captionText.innerHTML = dots[slideIndexs-1].alt;
}



function validateForm(){
    let firstName = document.getElementsByClassName('fname').value;
    let lastName = document.getElementsByClassName('lname').value;
    let phone = document.getElementsByClassName('phone').value;
  let email = document.getElementsByClassName('email').value;
  
  
  

}


