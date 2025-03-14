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

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeBtn');

openModalBtn.onclick = function() {
  modal.style.display = 'block';
  modal.button = 'active';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
  modal.style.display = 'active';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    modal.style.display = 'active';
  }
}



