const header = document.querySelector("header");
// Set the initial scroll position
let lastScrollPosition = 0;
// // Add an event listener for the scroll event
window.addEventListener("scroll", () => {
  // Get the current scroll position
  let currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition - lastScrollPosition > 0) {
    // If the scroll direction is down and the user has scrolled past the navbar, hide the navbar
    header.classList.add("hide");
  } else {
     // If the scroll direction is up or the user is at the top of the page, show the navbar
    header.classList.remove("hide");
  }
  // Set the last scroll position to the current scroll position
  lastScrollPosition = currentScrollPosition;
})