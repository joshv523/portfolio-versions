// For hiding navbar on scroll down
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById('navbar').style.top = "0";
  } else {
    document.getElementById('navbar').style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
}

// For the menu icon on mobile
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})