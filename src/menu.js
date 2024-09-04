

class menu{
    constructor(){

        const title = document.createElement("h1")
    }
}

class menuItem{
    constructor(name, discription,imagepath,price){
        this.name = name;
        this.discription = discription;
        this.imagepath = imagepath;
        this.price = price;
    }
}
// Define the createMenuItem function
function createMenuItem(menuItem) {
    const item = document.createElement("div") 
    const textWrapper = document.createElement("div");
    const menuItemName = document.createElement("h2");
    const price = document.createElement("h3");
    const imgsrc = document.createElement('img');
    const description = document.createElement('p');

    menuItemName.textContent = menuItem.name;
    price.textContent = menuItem.price;
    imgsrc.src = menuItem.imagepath;
    description.textContent = menuItem.discription;

    textWrapper.append(menuItemName, description, price);
    item.append(imgsrc, textWrapper);
    item.classList.add('item')
    textWrapper.classList.add('textwrapper')
    return item;
}

// Create a menu item
const lemonade = new menuItem('Lemonade','mmmm very nice','citron','14')

const lemonJuice = createMenuItem(lemonade)
// Create the menu page and append the menu item
const menu_page = document.createElement("div");
menu_page.classList.add('menu-page')
menu_page.append(lemonJuice);

// Export the menu_page
export { menu_page };

// Problem: we need to create a menu page
// How do we want it to look like?
// Needs to be centered and gaps between the items

// needs to be centerd and gaps between the items 
//inspiration from: https://dkaplunskyi.github.io/restaurant-page/
