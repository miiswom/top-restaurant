// the importer (where you IN/import the modules, there is only 1)

import "./styles.css";
import { menuGreeting } from "./menu.js"
//import "./about"
export const aboutUsBtn = document.createElement("button")
const mainDiv = document.querySelector("#content");


const homeBtn = document.querySelector("#home-btn");
const homeTitle = document.createElement("h1")

const aboutUsTitle = document.createElement("h1");
const aboutUsPara = document.createElement("p")
import { aboutUsText } from "./asset/aboutUsText.js"

const menuBtn = document.querySelector("#menu-btn")
const menuTitle = document.createElement("h1");
const menuDiv = document.createElement("div");


homeBtn.addEventListener("click", () => {
  displayHomePage()
});

aboutUsBtn.addEventListener("click", () => {
  displayAboutUsPage()
});

menuBtn.addEventListener("click", () => {
  displayMenuPage()
})

displayHomePage()

function displayHomePage() {
  homeTitle.textContent = "Welcome to Fratelli!";
  aboutUsBtn.textContent = "About";

  mainDiv.innerHTML = ""
  mainDiv.appendChild(homeTitle)
  mainDiv.appendChild(aboutUsBtn)
}

function displayAboutUsPage() {
  aboutUsTitle.textContent = "About Us"
  aboutUsPara.textContent = aboutUsText

  mainDiv.innerHTML = ""
  mainDiv.appendChild(aboutUsTitle)
  mainDiv.appendChild(aboutUsPara)

}

function displayMenuPage() { 
  menuTitle.textContent = "Our Menu";

  mainDiv.innerHTML = "";
  mainDiv.appendChild(menuDiv)
  mainDiv.appendChild(menuTitle);

  displayItems()


}

function displayItems() {


  for (let i = 0; i < 10; i++) {
    const menuItem = document.createElement("section");
    const menuItemTitle = document.createElement("h3")
    const menuItemPrice = document.createElement("span")
    
    menuItem.classList.add("menu-item-section")
    menuItem.style.background = "white";
    menuItemTitle.textContent = "Food Item"
    menuItemPrice.textContent = "10 GBP"
    
    menuDiv.appendChild(menuItem)
    menuItem.appendChild(menuItemTitle)
    menuItem.appendChild(menuItemPrice)
  }

}

console.log(menuGreeting)
