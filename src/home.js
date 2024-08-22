//design the home ui in js
export default class home{
  constructor() {

	const bodyContainer = document.createElement("div");
	bodyContainer.setAttribute("class","bodyContainer");
	bodyContainer.classList.add("bodyContainer", "homeBodyContainer");

	const mainRightContainer = document.getElementsByClassName("mainRightContainer");

	 // Check if there are any elements with the class name "mainRightContainer"
	 if (mainRightContainer.length > 0) {
		// Append the bodyContainer to the first element in the collection
		mainRightContainer[0].append(bodyContainer);
	  } else {
		// Log an error if no elements with the class name "mainRightContainer" are found
		console.error("No elements with class 'mainRightContainer' found.");
	  }

	  //title creation
	  const homeTitle = document.createElement("div");
	  homeTitle.setAttribute("id","homeTitle");
	  homeTitle.textContent = "柚子の湯"
	  bodyContainer.append(homeTitle);

	  //slogan creation
	  const homeSlogan = document.createElement("div");
	  homeSlogan.setAttribute("id","homeSlogan");
	  homeSlogan.textContent = "なんちゃらなんちゃら"
	  bodyContainer.append(homeSlogan);

	  //subtitle creation
	  const homeSubTitle = document.createElement("div");
	  homeSubTitle.setAttribute("id","homeSubtitle");
	  homeSubTitle.textContent = "なんちゃらなんちゃら"
	  bodyContainer.append(homeSubTitle);

	  //button creation
	  const homeButton = document.createElement("button");
	  homeButton.setAttribute("id", "homeButton");
	  homeButton.textContent = "Click Me";
	  bodyContainer.append(homeButton);
  }
}