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
 * Define Global Variables
 * 
*///-----------------------build the nav bar----------------------------
const allsections=document.querySelectorAll("section");
//define all sections using querySelectorAll
const navlist=document.getElementById("navbar__list");
// define navbar list 
const fregment=document.createDocumentFragment();
//creat docfragment to store all data init

allsections.forEach((Element)=>{
    // loop for allsections using forEach
    const link=document.createElement("a");
    // create new anchor tag
     link.href=("#section");
let section=link.href;
// make the sections linked by adding #
    const linktext=Element.getAttribute("data-nav");
    // using dataAttribute to return the value of data-nav
    const li=document.createElement("li");
    //create new list
    li.addEventListener("click",function(){
      Element.scrollIntoView({behavior:"smooth",block:"center"});
    });
    // make click event on links 
    const textnode=document.createTextNode(linktext);
    //create textnode
    link.appendChild(textnode);
    //make textnod a child of link
    li.appendChild(link);
    // make link child of li
    fregment.appendChild(li);
    //make li child of fregment
});
navlist.appendChild(fregment);
//make fregment child of navlist
// nav bar created sucsessfuly

//--------------------------active section---------------------
window.addEventListener("scroll",()=>{
//make scroll event to highlight sections and links 
  allsections.forEach((activesection)=>{
  // make loop for all sections
  const rect=activesection.getBoundingClientRect();
  // define rect by getBoundClientrect to use properties like top ,bottom 
  if(rect.top > 0 && rect.top<=200){
  let section=document.querySelectorAll("section");
  allsections.forEach((section)=>{
  // create nested loop inside the main loop to select all section
    section.classList.remove("your-active-class");
    console.log("the class removed");
   //remove the rest of sections when selecting one anthor
   
  });
  activesection.classList.add("your-active-class")
  console.log("the class added");
  // add the section we need
  activeLink(activesection);
  // call the activeLink function to connect sections with links
};  
}); 
//-----------------------------activeLink----------------------------------
  function activeLink(activesection){
    // make function active links 
  let links =document.querySelectorAll("a");
  // define links using querySelectorAll
  const sectionnav=activesection.getAttribute("data-nav");
  // define sectionnav by get Attribute to return the value of data-nav
  links.forEach((link)=>{
    //loop on all links
  if(link.innerText==sectionnav){
    let remove=document.querySelectorAll("a");
    links.forEach((remove)=>{
      // create nested loop inside the main loop to select all links
      remove.classList.remove("activelink");
     //remove the rest of links when selecting one anthor 
    });
  link.classList.add("activelink");
  // add the link we need matching with the same section 

  
};
});
 
}



});



  
  
  





