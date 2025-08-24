// ********* HomePage ********* 
import { homeParaText } from "./asset/homeParaText.js";
import { mainDiv } from ".";
import {loadAboutUsPage} from "./about.js"
export const aboutUsBtn = document.createElement("button")
export const homeBtn = document.querySelector("#home-btn");
const homeTitle = document.createElement("h1");
const homeDiv = document.createElement("div")
const homePara = document.createElement("p")

aboutUsBtn.classList.add("btn")
aboutUsBtn.addEventListener("click", () => {

  loadAboutUsPage()
});

export function loadHomePage() {
  homeTitle.textContent = "Welcome to Fratelli!";
  homeDiv.classList.add("home-div");
  homePara.textContent = homeParaText
  aboutUsBtn.textContent = "About ➜";

  mainDiv.innerHTML = ""
  mainDiv.appendChild(homeTitle)
  mainDiv.appendChild(homeDiv)
  homeDiv.appendChild(homePara)
  homeDiv.appendChild(aboutUsBtn)
};