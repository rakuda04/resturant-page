

import home from "./home.js";
// import menu from "./menu";
// import about from "./about";

export default class loadPage{
constructor(){}

mainUI = new home();


deinitialize() {
    console.log("Deinitializing...");
    console.log(this.mainUI);
    if (this.mainUI && this.mainUI.parentNode) {
        console.log("Removing mainUI from its parent node.");
        this.mainUI.parentNode.removeChild(this.mainUI);
        console.log("mainUI removed.");
    } else {
        console.log("mainUI or its parent node is not available.");
    }
}

// deinitialize();

loadPage(event){
    const buttonPressed = event.target.id

    //check if dom loaded and then load home page


    this.deinitialize()

    switch(buttonPressed){
        case 'homeNav':
        mainUI = new home();
        break;
        
        case 'aboutNav':
        mainUI = new about();
        break;
    
        case'menuNav':
        mainUI = new menu();
        break;
    }

}



}
/*  problem: update the main to refer to the modules once the nav buttons are clicked including erasing previous module

    desired input: click of nav button
    solution

    create a function/method that obtains the id of the clicked button and then compares it in the switch statement
    if its true it initizes the required page
*/

