// where you create and export code, it's like a component/ module file
/*
<!--Menu-->
    <h1>Our Menu</h1>
    <div>
      <section >
        <!--each section is essentially a background-image-->
        <h3>Item1</h3>
        <!-- generate images using js-->
      </section>
    </div>
*/

// ********* MenuPage ********* 
const menuBtn = document.querySelector("#menu-btn");
const menuTitle = document.createElement("h1");
const menuDiv = document.createElement("div");
import smallImg from "./asset/300x300.png";
import { mainDiv  } from ".";

function loadMenuPage() {
  menuTitle.textContent = "Our Menu";
  menuDiv.classList.add("container")

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
export {menuBtn, loadMenuPage, loadItems}

