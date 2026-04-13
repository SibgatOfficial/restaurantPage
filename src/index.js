import loadContact from "./contact.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

document.querySelector("nav").addEventListener("click", loadPage);
function loadPage(e) {
  if (e.target.id == "home") {
    loadHome();
  } else if (e.target.id == "menu") {
    loadMenu();
  } else if (e.target.id == "contact") {
    loadContact();
  }
}
