// ==============================**********************========================================
// ==============================**********************========================================
// ================================SCRIPT======================================================
// ==============================**********************========================================
// ==============================**********************========================================

// selecting the  menu element
const menu = document.querySelector("#menuIcon");

// selecting the close elment
const close = document.querySelector("#closeIcon");

// selecting the nav
const nav = document.querySelector("nav");

// selecting the all links
const links = document.querySelectorAll(".sub-link");


// When click on a menu icon , it will run
menu.addEventListener("click",()=>{

// adding class to the navbar and so we can style according to the requirement 
nav.classList.toggle("active");

// toggle helps to create a class or remove a class, only if it already contain with the same name
});

// When click on a close icon , it will remove the active class .
close.addEventListener("click",()=>{

  // removing the added class
  nav.classList.toggle("active");
  
  
  });

  // removing the active class , when clicked on a links.
  links.addEventListener("click",()=>{
    nav.classList.toggle("active");

  })
  