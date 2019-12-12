//adding classes to menu items

// select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set initial state of menu
let showMenu = false;
//event listner listening for click
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //adding close clase
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}

//Modal event handlers
//getting the modal
let modal = document.getElementById("myModal");
//get button that opens the modal
let btn = document.getElementById("myBtn");
//get <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
//When user clicks the button, open the modal
btn.onclick = () => {
  modal.style.display = "block";
};
//When the user clicks on the <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
};
//When user clicks anywehre outside of the modal, the modal closes.
window.onclick = event => {
  if (event.target !== modal) {
    modal.style.display = "none";
  }
};

//head-game Modal
let modalHead = document.getElementById("myModal-hg");
//get button that opens the modal
let btnHead = document.getElementById("myBtn-hg");
//get <span> element that closes the modal
let spanHead = document.getElementsByClassName("close-hg")[0];
//When user clicks the button, open the modal
btnHead.onclick = () => {
  modalHead.style.display = "block";
};
//When the user clicks on the <span> (x), close the modal
spanHead.onclick = () => {
  modalHead.style.display = "none";
};
//When user clicks anywehre outside of the modal, the modal closes.
window.onclick = event => {
  if (event.target == modalHead) {
    modalHead.style.display = "none";
  }
};

//Utah Expungements Modal
let modalExpung = document.getElementById("myModal-ex");
//get button that opens the modal
let btnExpung = document.getElementById("myBtn-ex");
//get <span> element that closes the modal
let spanExpung = document.getElementsByClassName("close-ex")[0];
//When user clicks the button, open the modal
btnExpung.onclick = () => {
  modalExpung.style.display = "block";
};
//When the user clicks on the <span> (x), close the modal
spanExpung.onclick = () => {
  modalExpung.style.display = "none";
};
//When user clicks anywehre outside of the modal, the modal closes.
window.onclick = event => {
  if (event.target == modalExpung) {
    modalExpung.style.display = "none";
  }
};
