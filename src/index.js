

import home from "./home.js";
import {menu_page} from "./menu.js";
// import about from "./about.js";



const LeftContainer = document.createElement("div");
	LeftContainer.setAttribute("class","mainLeftContainer");

const RightContainer = document.createElement("div");
	RightContainer.setAttribute("class","mainRightContainer");

	// Select the <main> element
const mainElement = document.getElementById("main");

//TO DO:change location of body container from home to index 
const bodyContainer = document.createElement("div");
bodyContainer.setAttribute("class","bodyContainer");
RightContainer.append(bodyContainer);

// Append both containers at once
mainElement.append(LeftContainer, RightContainer, document.querySelector("header"));

RightContainer.append(document.querySelector("footer"))



//testing:
// const mainUI = new home();

const clearpage = () => {
	while (bodyContainer.hasChildNodes()){
		bodyContainer.removeChild(bodyContainer.firstChild)
	}
}

//TODO: Object object
const navButtons = document.querySelectorAll(".nav-item");
navButtons.forEach(element => {
	element.addEventListener('click',() =>{
		const page = document.getElementById(element.id);
		if (page) {
			clearpage();
			switch (page.id) {
			  case 'homeNav':
				bodyContainer.append(new home);
				
				break;
			  case 'aboutNav':
				bodyContainer.append(about);
				break;
			  case 'menuNav':
				bodyContainer.append(menu_page);
				break;
			  default:
				console.log(page.id);
				break;
			}
		  } else {
			console.log("Element not found:", element.id);
		  }
		
	});
});





//add js to elements the heading ul so that it has style

// const myHome = new home();
