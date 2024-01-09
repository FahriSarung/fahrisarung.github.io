//Hamburger Click
const hamburgerbtn = document.querySelector(".hamburger");
const navbarList = document.querySelector(".list");

hamburgerbtn.addEventListener("click", () => {
  navbarList.classList.toggle("hidden");
});

//scrol bar navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}