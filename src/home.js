//design the home ui in js
export default class home{
  constructor() {
	const LeftContainer = document.createElement("div");
	LeftContainer.setAttribute("class","mainLeftContainer");

	const RightContainer = document.createElement("div");
	RightContainer.setAttribute("class","mainRightContainer");

	// Select the <main> element
const mainElement = document.getElementById("main");

// Append both containers at once
mainElement.append(LeftContainer, RightContainer);

RightContainer.append(document.querySelector("header"),document.querySelector("footer"))
  }
}