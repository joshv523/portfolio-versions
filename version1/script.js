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