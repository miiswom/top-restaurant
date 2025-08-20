/*
<!--Home-->
    <h1>Welcome to Fratelli</h1>
    <button id="about-us">About us</button>
*/
// ********* HomePage ********* 
const homeBtn = document.querySelector("#home-btn");
const homeTitle = document.createElement("h1");
const aboutUsTitle = document.createElement("h1");
const aboutUsPara = document.createElement("p");
import { aboutUsText } from "./asset/aboutUsText.js";

function loadAboutUsPage() {
  aboutUsTitle.textContent = "About Us"
  aboutUsPara.textContent = aboutUsText

  mainDiv.innerHTML = ""
  mainDiv.appendChild(aboutUsTitle)
  mainDiv.appendChild(aboutUsPara)

};

export {homeBtn, homeTitle, loadAboutUsPage}