
import home from './home.js'



const LeftContainer = document.createElement("div");
	LeftContainer.setAttribute("class","mainLeftContainer");

	const RightContainer = document.createElement("div");
	RightContainer.setAttribute("class","mainRightContainer");

	// Select the <main> element
const mainElement = document.getElementById("main");

// Append both containers at once
mainElement.append(LeftContainer, RightContainer);

RightContainer.append(document.querySelector("header"),document.querySelector("footer"))

//add js to elements the heading ul so that it has style

const myHome = new home();