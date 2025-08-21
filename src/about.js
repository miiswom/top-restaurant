import {aboutUsBtn} from "./index.js"
const mainDiv = document.querySelector("#content");
const aboutUsDiv = document.createElement("div");
const aboutUsTitle = document.createElement("h1");
const aboutUsPara = document.createElement("p");
import {aboutUsText} from "./asset/aboutUsText";

export function loadAboutUsPage() {
  aboutUsTitle.textContent = "About Us";
  aboutUsPara.textContent = aboutUsText;
  aboutUsDiv.classList.add("aboutus-div")

  mainDiv.innerHTML = ""
  mainDiv.appendChild(aboutUsTitle)
  mainDiv.appendChild(aboutUsDiv)
  aboutUsDiv.appendChild(aboutUsPara)
};