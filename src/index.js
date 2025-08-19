// the importer (where you IN/import the modules, there is only 1)

import "./styles.css";
import { menuGreeting } from "./menu.js";
//import "./about"
export const aboutUsBtn = document.createElement("button")
const mainDiv = document.querySelector("#content");


const homeBtn = document.querySelector("#home-btn");
const homeTitle = document.createElement("h1");

const aboutUsTitle = document.createElement("h1");
const aboutUsPara = document.createElement("p");
import { aboutUsText } from "./asset/aboutUsText.js";

const menuBtn = document.querySelector("#menu-btn");
const menuTitle = document.createElement("h1");
const menuDiv = document.createElement("div");
import smallImg from "./asset/300x300.png";

const contactBtn = document.querySelector("#contact-btn");
const contactTitle = document.createElement("h1");
const contactDiv = document.createElement("div");
const contactNumber = document.createElement("p");
const mapLocation = document.createElement("iframe");

homeBtn.addEventListener("click", () => {
  loadHomePage()
});

aboutUsBtn.addEventListener("click", () => {
  loadAboutUsPage()
});

menuBtn.addEventListener("click", () => {
  loadMenuPage()
});

contactBtn.addEventListener("click", ()=> {
  loadContactPage()
})

loadHomePage();

function loadHomePage() {
  homeTitle.textContent = "Welcome to Fratelli!";
  aboutUsBtn.textContent = "About";

  mainDiv.innerHTML = ""
  mainDiv.appendChild(homeTitle)
  mainDiv.appendChild(aboutUsBtn)
};

function loadAboutUsPage() {
  aboutUsTitle.textContent = "About Us"
  aboutUsPara.textContent = aboutUsText

  mainDiv.innerHTML = ""
  mainDiv.appendChild(aboutUsTitle)
  mainDiv.appendChild(aboutUsPara)

};

function loadMenuPage() { 
  menuTitle.textContent = "Our Menu";

  mainDiv.innerHTML = "";
    mainDiv.appendChild(menuTitle);
  mainDiv.appendChild(menuDiv)

  loadItems()


};

function loadItems() {


  for (let i = 0; i < 10; i++) {
    const menuItem = document.createElement("section");
    const menuItemTitle = document.createElement("h3");
    const menuItemPrice = document.createElement("span");
    
    menuItem.classList.add("menu-item-section")
    menuItem.style.backgroundImage = `url(${smallImg})`;
    menuItemTitle.textContent = "Food Item"
    menuItemPrice.textContent = "10 GBP"
    
    menuDiv.appendChild(menuItem)
    menuItem.appendChild(menuItemTitle)
    menuItem.appendChild(menuItemPrice)
  }

};

function loadContactPage() {
  contactNumber.textContent = "Phone number: 0123846292";
  mapLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.373791753437!2d-1.8648494!3d52.4723675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbe2ab363cd1%3A0x180f10231a78f6d1!2sFRATELLI!5e0!3m2!1sen!2sma!4v1755552285746!5m2!1sen!2sma"
  mapLocation.classList.add("google-maps-style")

  mainDiv.innerHTML = "";
  mainDiv.appendChild(contactTitle)
  mainDiv.appendChild(contactDiv);
  contactDiv.appendChild(contactNumber)
  contactDiv.appendChild(mapLocation)

};

console.log(menuGreeting);
