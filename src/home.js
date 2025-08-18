/*
<!--Home-->
    <h1>Welcome to Fratelli</h1>
    <button id="about-us">About us</button>
*/

import "./about"

const homeBtn = document.querySelector("#home-btn");
const mainDiv = document.querySelector("#content");
const homeTitle = document.createElement("h1")
const aboutUsBtn = document.createElement("button")


homeBtn.addEventListener("click", () => {
  homeTitle.textContent = "Welcome to Fratelli!";
  aboutUsBtn.textContent = "About"
  mainDiv.appendChild(homeTitle)
  mainDiv.appendChild(aboutUsBtn)
})

