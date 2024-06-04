// Get the header element
const header = document.querySelector('header');
const homePageHero = document.querySelector('.homepage-hero');

// Add an event listener for scroll events
window.addEventListener('scroll', () => {
	// Check if the header has the 'home' class
	if (homePageHero) {
		// Check if the user has scrolled
		if (window.scrollY > 50) {
			// Remove the 'home' class from the header
			header.classList.remove('home');
		} else {
			// Add the 'home' class to the header
			header.classList.add('home');
		}
	}
});