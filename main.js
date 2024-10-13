/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add("show-menu")
  })
}

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove("show-menu")
  })
}

/*=============== remove the menu from mobile ===============*/

const navLink = document.querySelectorAll(".nav__link")
const linkAction =() =>{
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))



/*=============== SWIPER FAVORITES ===============*/ 
const swiperFavorites = new Swiper('.fav-swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto', // Correct key name is slidesPerView
  centeredSlides: true   // Correct key name is centeredSlides
});


/*===============showing the scroll up  ===============*/ 

const scrollUpArrow = document.getElementById("scroll-up");

        // Regular function to handle scroll event
        function scrollUp() {
            // Check if the scroll position is greater than or equal to 350px
            if (window.scrollY >= 350) {
                scrollUpArrow.classList.add("show-scroll"); // Show Arrow
            } else {
                scrollUpArrow.classList.remove("show-scroll"); // Hide Arrow
            }
        }

        // Add an event listener to the window object for the scroll event
        window.addEventListener("scroll", scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () =>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId =current.getAttribute("id"),
          sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId +"]")
          
          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active-link")
          }else{
            sectionsClass.classList.remove("active-link")
          }
  })
}
window.addEventListener("scroll", scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/
//ScrollReveal, a JavaScript library used to create animations when elements scroll into view.

const sr = ScrollReveal({
  origin:"top", // Defines where the animation should start (top, bottom, left, right)
  distance: "60px", // Specifies how far the element moves during the animation (60px from the origin)
  duration: 2500, // Sets the duration of the animation in milliseconds (2.5 seconds)
  delay: 100,  // Adds a delay before the animation starts (300ms)
  reset: true,  //animation repeat
})

sr.reveal(".home-data, .favorite-container, .footer-container")
//home-section
sr.reveal(".home-circle, .home-image", {delay: 400, scale: .5})
sr.reveal(".home-chips-1, .home-chips-2, .home-chips-3", {delay: 1400, interval: 50}) //option in ScrollReveal is used to control the time gap (in milliseconds) between revealing multiple elements in a sequence.
sr.reveal(".home-leaf", {delay: 1200})
sr.reveal(".home-tomato-1, .home-tomato-2", {delay: 1400, interval: 100})
//care-section
sr.reveal(".care-img, .contact-img", {origin: "left"})
sr.reveal(".care-list, .contact-data", {origin: "right"})
//banner-section
sr.reveal(".banner-item, .products-card", {interval: 50})


