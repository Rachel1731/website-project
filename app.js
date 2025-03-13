function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  menu.classList.toggle('active'); 
}

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'My Website';
header.appendChild(h1);
document.body.prepend(header);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const footer = document.querySelector('footer');
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<p>Copyright © ${2021} Ability Beyond Disabilities</p>`;
}

const imageElement = document.createElement("img");


const Element = document.createElement("img");
imageElement.src = images[currentIndex];
imageElement.alt = "Juilliard image";
imageElement.width = 200;
rotationFeature.appendChild(imageElement);
//functions
function updateImage(){
    imageElement.src = images[currentIndex];
}
      
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
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  window.onload = function() {
      setInterval(function() {
          moveSlide(1);
      }, 3000); 
  };
  
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeBtn');

openModalBtn.onclick = function() {
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}



