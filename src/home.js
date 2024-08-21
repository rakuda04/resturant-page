//design the home ui in js
export default class home{
  constructor() {

	const bodyContainer = document.createElement("div");
	bodyContainer.setAttribute("class","bodyContainer");

	const mainRightContainer = document.getElementsByClassName("mainRightContainer");

	 // Check if there are any elements with the class name "mainRightContainer"
	 if (mainRightContainer.length > 0) {
		// Append the bodyContainer to the first element in the collection
		mainRightContainer[0].append(bodyContainer);
	  } else {
		// Log an error if no elements with the class name "mainRightContainer" are found
		console.error("No elements with class 'mainRightContainer' found.");
	  }


  }
}