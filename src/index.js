// the entry point

import "./reset.css";
import "./styles.css";

export const mainDiv = document.querySelector("#content");
export const buttons = document.querySelectorAll("button");
import { homeBtn } from "./home.js";
import { loadHomePage } from "./home.js";
import { menuBtn, loadMenuPage } from "./menu.js";
import { contactBtn, loadContactPage } from "./contact.js";
import { styleActiveElement } from "./styleActiveElement.js";


homeBtn.addEventListener("click", () => {
  loadHomePage();
});

menuBtn.addEventListener("click", (e) => {
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  loadContactPage();
});

styleActiveElement(buttons);
loadHomePage();
