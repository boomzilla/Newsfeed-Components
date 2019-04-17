
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if (menu.display == "block"){
    menu.display = "none";
  } else {
    menu.display = "block";
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName("menu").item(0);
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName("menu-button").item(0);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);