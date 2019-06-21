const headerToggle = document.querySelector(".toggle");
const headerMenu = document.querySelector(".menu ul");
const headerLinks = document.querySelectorAll(".menu a");

headerToggle.addEventListener("click", headerToggleClick);

function headerToggleClick() {
  headerToggle.classList.toggle("open-toggle");
  headerMenu.classList.toggle("open");
}

headerLinks.forEach(elem => elem.addEventListener("click", headerLinkClick));

function navbarLinkClick() {
  if(headerMenu.classList.contains("open")) {
    headerToggle.click();
  }
}