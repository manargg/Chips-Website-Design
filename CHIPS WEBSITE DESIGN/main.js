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