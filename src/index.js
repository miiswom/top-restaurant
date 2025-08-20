// the importer (where you IN/import the modules, there is only 1)

import "./styles.css";
export const aboutUsBtn = document.createElement("button")
export const mainDiv = document.querySelector("#content");
import { homeBtn, homeTitle, loadAboutUsPage } from "./home.js";
import {menuBtn, loadMenuPage} from "./menu.js";
import { contactBtn, loadContactPage } from "./contact.js";


homeBtn.addEventListener("click", () => {
  loadHomePage()
});

aboutUsBtn.addEventListener("click", () => {
  loadAboutUsPage()
});

menuBtn.addEventListener("click", () => {
  loadMenuPage()
});

contactBtn.addEventListener("click", () => {
  loadContactPage()
})

loadHomePage();

export function loadHomePage() {
  homeTitle.textContent = "Welcome to Fratelli!";
  aboutUsBtn.textContent = "About";

  mainDiv.innerHTML = ""
  mainDiv.appendChild(homeTitle)
  mainDiv.appendChild(aboutUsBtn)
};

