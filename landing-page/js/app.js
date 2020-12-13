

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const ul = document.querySelector('ul');   
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * build the nav
 * Build menu
 */
 

// make a loop to get all sections
    sections.forEach((section,i)=>{
// creat li for all sections
    let creatLi = document.createElement('li');
// put the created li in the ul element
    ul.appendChild(creatLi);
// creat link and put 1 link in one li
    let creatA = document.createElement('a');
    creatLi.appendChild(creatA);
// creat class '"menu__link" to all links
    creatA.className="menu__link";
// get the value of 'data-nav'from every section
    let dataNav=section.getAttribute('data-nav');
// make the text content of link = data nav value
    creatA.textContent=dataNav;
// creat att 'data-link'
    let att = document.createAttribute("data-link");
// make the value of att = the section id
    att.value=section.id
    creatA.setAttributeNode(att);
    //console.log(creatA);
    
});










/**
 *  Scroll to section on link click
 * declare variable links to get all links with class '.menu__link'
 * make a loop and get the section has id with the same data-link value in links. 
 */
let links = document.querySelectorAll(".menu__link");
links.forEach((item)=>{
    item.addEventListener("click", function(){
        let element = document.getElementById(item.getAttribute("data-link"));
        element.scrollIntoView({behavior:"smooth",block:"nearest"});
    });
});
    
    


/**
 * Set sections as active
 * Add class 'active' to section when near top of viewport
 
 */

    onscroll = function(){
       
        const scrollPosition = document.documentElement.scrollTop+150;
        sections.forEach((section)=>{
                // You must ensure that have been erased active class from all sections
            section.classList.remove('your-active-class');
            if(scrollPosition >= section.offsetTop && 
                scrollPosition < section.offsetTop+ section.offsetHeight ){
                   
               let actClass=document.querySelectorAll(".your-active-class");
                // add active class to the section on viewport.
               section.classList.add('your-active-class');
// Scroll to anchor ID using scrollTO event

               // ac: to get active class datanav content
               const ac =section.getAttribute("data-nav");
               links.forEach((item)=>{
                item.classList.remove('your-active-class');
                   let linkcontent = item.textContent;
                    if (linkcontent==ac){
                        item.classList.add('your-active-class');
                    }
               })
               
            }
            
        })
    };
    

  

  



