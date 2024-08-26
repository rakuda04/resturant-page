

import home from "./home";
import menu from "./menu";
import about from "./about";

export default class loadPage{
constructor(){}
mainUI = new home()
/* 
deinitialize() {
    
    // check if this.bodyContainer exsists and if its connected to a parent node
if (this.mainUI && this.mainUI.parentNode == bodycontainer) {
    //removes child from parent node
    this.mainUI.parentNode.removeChild(this.mainUI);
}
// check if the parent node is mainright container if it is 


}

 mainUI = new home();

loadPage(event){
    const buttonPressed = event.target.id

    //check if dom loaded and then load home page


    mainUI.deinitialize()

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
*/


}
/*  problem: update the main to refer to the modules once the nav buttons are clicked including erasing previous module

    desired input: click of nav button
    solution

    create a function/method that obtains the id of the clicked button and then compares it in the switch statement
    if its true it initizes the required page
*/

