/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
const menuItems = document.querySelectorAll('section');

const mainNav = document.querySelector('#navbar__list');

for (const menuItem of menuItems) {
    sectionHeader = menuItem.firstElementChild.firstElementChild;
    const navLi = document.createElement('li');
    navLi.innerHTML = '<a class ="menu__link" href="#'+menuItem.id+'">'+ sectionHeader.textContent +'</a>'
    mainNav.append(navLi);
}

const links = document.querySelectorAll("#navbar__list li a");
 
for (const link of links) {
     link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
    //the action of the eventlistener.
    e.preventDefault();
    //prevents the dafult from the click. 
    const href = this.getAttribute("href");
    const allLinks = document.querySelectorAll(".menu__link");

    for ( link of allLinks) {
        link.classList.remove('menu__link__active');
    };

    this.classList.add('menu__link__active');

    const section = document.querySelector(href);

    const offsetTop = section.offsetTop; 
    const activeElement = section;

    window.scrollTo({
        top : offsetTop,
        behaviour : "smooth"
    });
}

document.addEventListener('scroll', scrollHandler); 

function scrollHandler(e) {
    menuItems = e.getBoundingClientRect();
    return (
        view.top >= 0 && 
        view.left >= 0 && 
        view.bottom <= window.innerHeight&&
        view.right <= window.innerWidth
    );
}
