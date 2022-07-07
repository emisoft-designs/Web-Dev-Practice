let slides = document.getElementsByClassName("carousel-inner");
let dash = document.getElementsByClassName("dash"); 

let counter = 1;
carousel(counter);

let timer = setInterval(autoslide, 8000);

function autoslide(){
    counter += 1;
    carousel(counter);
}

function plusSlides(n) {
carousel(counter += n);
resetTimer();
}

function currentSlide(n) {
carousel(counter = n);
resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide,8000);
}


function carousel(n) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dash.length; i++) {
        dash[i].className = dash[i].className.replace(" active", "");
    } 
    if (n > slides.length) {counter = 1}    
    if (n < 1) {counter = slides.length}

    slides[counter-1].style.display = "block";  
    dash[counter-1].className += " active";  
} 


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function collapse() {
    document.getElementById("myDropdown").classList.toggle("dropdown-show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var dropdown = document.getElementById("dropdown");
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }