export default class Home {
	constructor() {
	  const bodyContainer = document.querySelector(".bodyContainer");
  
	  // Check if bodyContainer exists before modifying it

		bodyContainer.classList.add("homeBodyContainer");
  
		const mainRightContainer = document.querySelector(".mainRightContainer");
  
		  mainRightContainer.append(bodyContainer);
  
		// Title creation
		const homeTitle = document.createElement("div");
		homeTitle.setAttribute("id", "homeTitle");
		homeTitle.textContent = "柚子の湯";
		bodyContainer.append(homeTitle);
  
		// Slogan creation
		const homeSlogan = document.createElement("div");
		homeSlogan.setAttribute("id", "homeSlogan");
		homeSlogan.textContent = "なんちゃらなんちゃら";
		bodyContainer.append(homeSlogan);
  
		// Subtitle creation
		const homeSubTitle = document.createElement("div");
		homeSubTitle.setAttribute("id", "homeSubtitle");
		homeSubTitle.textContent = "なんちゃらなんちゃら";
		bodyContainer.append(homeSubTitle);
  
		// Button creation
		const homeButton = document.createElement("button");
		homeButton.setAttribute("id", "homeButton");
		homeButton.textContent = "Click Me";
		bodyContainer.append(homeButton);

	}
  }
  