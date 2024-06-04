// header
const HeaderComponent = (function HeaderComponent() {

	let body = document.querySelector('body');
	let mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
	let showNestedLevelLinks = document.querySelectorAll('.sub-menu-toggle');
    let closeNestedLevelLinks = document.querySelectorAll('.sub-menu-back');
	let closedNestedLevel = document.querySelectorAll('.has-sub');
	let desktopSearch = document.querySelector('.show-search');
	let headerSearch = document.querySelector('.site-search-frame');
	let closeSearchBtn = document.querySelector('.close-search');



	// Open & close the mobile menu
	function openMenu(e) {
        body.classList.add('mobile-nav-shown');
    }
    function closeMenu(e) {
        body.classList.remove('mobile-nav-shown');
		closedNestedLevel.forEach(el => {
			el.classList.remove('sub-menu-shown');
		});
    }
	function toggleMobileMenu() {
        body.classList.contains('mobile-nav-shown') ? closeMenu() : openMenu();
    }

	// Reveal the mobile sub menu items.
	function showMobileNestedLevel(e) {
		e.target.closest('.has-sub').classList.add('sub-menu-shown');
    }
	function closeMobileNestedLevel(e) {
        e.target.closest('.has-sub').classList.remove('sub-menu-shown');
    }

	// Open & close the desktop search
	function openSearch() {
		headerSearch.classList.add('search-shown');
		desktopSearch.classList.add('active');
	}
	function closeSearch() {
		headerSearch.classList.remove('search-shown');
		desktopSearch.classList.remove('active');
	}


    function attachEvents() {
        mobileMenuBtn && mobileMenuBtn.addEventListener('click', () => {
            toggleMobileMenu();
        })
        showNestedLevelLinks && showNestedLevelLinks.forEach(el => {
            el.addEventListener("click", (e) => {
                showMobileNestedLevel(e);
            })
        })
        closeNestedLevelLinks && closeNestedLevelLinks.forEach(el => {
            el.addEventListener("click", (e) => {
                closeMobileNestedLevel(e);
            })
        })
		desktopSearch && desktopSearch.addEventListener('click', () => {
			openSearch();
		})
		closeSearchBtn && closeSearchBtn.addEventListener('click', () => {
			closeSearch();
		})
        window.addEventListener("resize", () => {
        	closeMenu();
			closeSearch();
        })
    }



    function init() {
        attachEvents();
    }
    return {
        init: init
    }
}());

window.addEventListener('load', function() {
    HeaderComponent.init();
})