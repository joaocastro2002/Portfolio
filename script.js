//! script that will manipulate the buttons that are on the right side of the page
const sections = document.querySelectorAll('.section');
// sectBtn is the parent container - the column that contains the 5 buttons
const secBTns = document.querySelector('.controls');
// secBTn serves for the individual buttons
// with querySelector we receive a list of buttons
const secBTn = document.querySelector('.control');
// select the body - class main-content
const allSections = document.querySelector('.main-content');

// function that serves to transit to the active section
function PageTransitions(){
    // Button click active class
    // in where we will iterate through the buttons (we have 5 buttons)
    // for(let i = 0; i < secBTn.length; i++){
    //     secBTn[i].addEventListener('click', function(){
    //         // when a button is activated and i press another button,the button that was previously active will be deactivated - his class will be removed when will assume a empty string
    //         // in the tag of tha activated buton we will add the to the class (active-btn) and will remove 'active-btn' to the previous button
    //         let currentBtn = document.querySelectorAll('.active-btn');
    //         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //         this.className += ' active-btn'; /* this will add to the name of the class that corresponds to the active button the name ' active-button'*/
    //     })
    // }

    // we have 5 buttons - each button allows us to click on them 
    // when we click on a button, this will look for all buttons and remove the class active-btn to the button that is active at the moment of the click
    // and will add to the class ('active') to the button that we clicked
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn"); // this will add to the name of the class that corresponds to the active button the name ' active-button'
            // where we are going to remove the name 'active' to the class of the sections that was previously active
            document.querySelector(".active").classList.remove("active");
            // and had the name 'active' to the class that corresponds to the button that we clicked
            document.getElementById(button.dataset.id).classList.add("active"); 
        })
    });
    // these will switch between the light mode and the dark mode
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
}

PageTransitions();