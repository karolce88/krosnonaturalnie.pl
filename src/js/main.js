async function main() {

const offerBtnDesktop = document.querySelector('.offer-show-list')
const dropdownDesktopItem = document.querySelector('.desktop-offer-menu')
const arrowIconDesktopMenu = document.querySelector('.nav__arrow-icon')
const nav = document.querySelector('.nav')
const burgerBTN = document.querySelector('.nav__burger-btn')
const spanBTN1 = document.querySelector('.nav__burger-btn-span1')
const spanBTN2 = document.querySelector('.nav__burger-btn-span2')
const spanBTN3 = document.querySelector('.nav__burger-btn-span3')
const mobileMenu = document.querySelector('.nav__mobile-menu-container')
const showMobileMenuByOfferClick = document.querySelector('.mobile-menu-offer-item')
const showedMobileMenuByOfferClick = document.querySelector('.nav__mobile-menu-container-offer-submenu')
const submenuULitems1 = document.querySelector('.submenu-LI-link1')
const submenuULitems2 = document.querySelector('.submenu-LI-link2')
const submenuULitems3 = document.querySelector('.submenu-LI-link3')
const submenuULitems4 = document.querySelector('.submenu-LI-link4')
const submenuULitems5 = document.querySelector('.submenu-LI-link5')
const submenuULitems6 = document.querySelector('.submenu-LI-link6')
const submenuULitems7 = document.querySelector('.submenu-LI-link7')
const submenuBackBtn = document.querySelector('.nav__mobile-menu-items-back-btn')
const accordionAll = document.querySelectorAll('.accordion')
const footerYear = document.querySelector('.footer-year')
const cookieBox = document.querySelector('.cookies__cookie-box')
const cookieBtn = document.querySelector('.cookies__cookie-btn')
const navTransparentColorToWhite = document.querySelector('.nav')
const navWhiteMenuToBlack = document.querySelectorAll('.nav__desktop-menu-items')
const mobileNavBurgerBtn = document.querySelectorAll('.nav__burger-btn-items')
const logoDesktop = document.querySelector('.nav__logo')
const headerShadow = document.querySelector('.header__shadow')

//dropdown menu for "offer" item (desktop):
const showDekstopOfferMenu = () => {
	dropdownDesktopItem.classList.add('active')
	arrowIconDesktopMenu.classList.add('rotate')
	arrowIconDesktopMenu.classList.remove('rotate-rev')
}

const hideDekstopOfferMenu = () => {
	dropdownDesktopItem.classList.remove('active')
	arrowIconDesktopMenu.classList.remove('rotate')
	arrowIconDesktopMenu.classList.add('rotate-rev')
}

// nav shadow and white color from transparent to navigation, and resize navigation menu and logo, changing arrow down color
function addShadow() {
	if (window.scrollY <= 200) {
		nav.classList.remove('nav-bottom-shadow')
		navTransparentColorToWhite.style.backgroundColor = 'transparent'
		navWhiteMenuToBlack.forEach((el) => el.classList.remove('nav__desktop-menu-items-js'))
		navWhiteMenuToBlack.forEach((el) => el.classList.add('nav__desktop-menu-items'))
		arrowIconDesktopMenu.removeAttribute('src')
		arrowIconDesktopMenu.setAttribute('src', 'dist/img/icon/arrow-icon-bottom-white.svg')
		mobileNavBurgerBtn.forEach((el) => (el.style.backgroundColor = '#ffffff'))
		logoDesktop.classList.remove('nav__logo-show')

		if (mobileMenu.classList.contains('mobile-menu-active')) {
			mobileNavBurgerBtn.forEach((el) => (el.style.backgroundColor = '#000000'))
		}
	} else {
		nav.classList.add('nav-bottom-shadow')
		navTransparentColorToWhite.style.backgroundColor = '#edede9'
		navWhiteMenuToBlack.forEach((el) => el.classList.remove('nav__desktop-menu-items'))
		navWhiteMenuToBlack.forEach((el) => el.classList.add('nav__desktop-menu-items-js'))
		arrowIconDesktopMenu.removeAttribute('src')
		arrowIconDesktopMenu.setAttribute('src', 'dist/img/icon/arrow-icon-bottom.svg')
		mobileNavBurgerBtn.forEach((el) => (el.style.backgroundColor = '#000000'))
		logoDesktop.classList.add('nav__logo-show')
	}
}

const closeMobileMenu = () => {
	mobileMenu.classList.remove('mobile-menu-active')
	burgerBTN.classList.remove('burger-btn-border')
	spanBTN1.classList.remove('burger-span1')
	spanBTN2.classList.remove('burger-span2')
	spanBTN3.classList.remove('burger-span3')
	showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const closeMobileMenuByClickElements = () => {
	const mobileMenuLinks1 = document.querySelector('.mobile-nav-links1')
	const mobileMenuLinks2 = document.querySelector('.mobile-nav-links2')
	const mobileMenuLinks3 = document.querySelector('.mobile-nav-links3')
	const mobileMenuLinks4 = document.querySelector('.mobile-nav-links4')
	const mobileMenuLinks5 = document.querySelector('.mobile-nav-links5')
	const mobileMenuLinks6 = document.querySelector('.mobile-nav-links6')
	mobileMenuLinks1.addEventListener('click', showMobileMenu)
	mobileMenuLinks2.addEventListener('click', showMobileMenu)
	mobileMenuLinks3.addEventListener('click', showMobileMenu)
	mobileMenuLinks4.addEventListener('click', showMobileMenu)
	mobileMenuLinks5.addEventListener('click', showMobileMenu)
	mobileMenuLinks6.addEventListener('click', showMobileMenu)
}

const closeSubmenuOffer = () => {
	showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const showOfferSubmenu = () => {
	if (!showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
		showedMobileMenuByOfferClick.classList.add('mobile-menu-active')
		submenuULitems1.addEventListener('click', showMobileMenu)
		submenuULitems2.addEventListener('click', showMobileMenu)
		submenuULitems3.addEventListener('click', showMobileMenu)
		submenuULitems4.addEventListener('click', showMobileMenu)
		submenuULitems5.addEventListener('click', showMobileMenu)
		submenuULitems6.addEventListener('click', showMobileMenu)
		submenuULitems7.addEventListener('click', showMobileMenu)
		submenuBackBtn.addEventListener('click', closeSubmenuOffer)
	} else if (showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
		showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
	}
}

const showMobileMenu = () => {
	if (!mobileMenu.classList.contains('mobile-menu-active')) {
		closeMobileMenuByClickElements()
		logoDesktop.addEventListener('click', closeMobileMenu)
		showMobileMenuByOfferClick.addEventListener('click', showOfferSubmenu)
		mobileMenu.classList.add('mobile-menu-active')
		burgerBTN.classList.add('burger-btn-border')
		spanBTN1.classList.add('burger-span1')
		spanBTN2.classList.add('burger-span2')
		spanBTN3.classList.add('burger-span3')

		if (window.scrollY < 1) {
			mobileNavBurgerBtn.forEach((el) => (el.style.backgroundColor = '#000000'))
		}
	} else if (mobileMenu.classList.contains('mobile-menu-active')) {
		mobileMenu.classList.remove('mobile-menu-active')
		burgerBTN.classList.remove('burger-btn-border')
		spanBTN1.classList.remove('burger-span1')
		spanBTN2.classList.remove('burger-span2')
		spanBTN3.classList.remove('burger-span3')
		showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')

		if (window.scrollY < 1) {
			mobileNavBurgerBtn.forEach((el) => (el.style.backgroundColor = '#ffffff'))
		}
	}
}

// dropdown "offer" menu:
offerBtnDesktop.addEventListener('mouseover', showDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseover', showDekstopOfferMenu)
offerBtnDesktop.addEventListener('mouseleave', hideDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseleave', hideDekstopOfferMenu)

// nav shadow & media bar:
window.addEventListener('scroll', addShadow)

// burger btn:
burgerBTN.addEventListener('click', showMobileMenu)

// FAQ :
const showAndHideFAQeducation = (e) => {
	if (!e.target.nextElementSibling.classList.contains('show-panel')) {
		e.target.querySelector('.h3-faq-svg-icon').classList.remove('rotate-rev-icon-aboutme')
		e.target.nextElementSibling.classList.remove('hide-panel')
		e.target.nextElementSibling.classList.add('show-panel')
		e.target.querySelector('.h3-faq-svg-icon').classList.add('rotate-icon-aboutme')
		e.target.classList.add('faq-bg-accordion')
	} else if (e.target.nextElementSibling.classList.contains('show-panel')) {
		e.target.classList.remove('faq-bg-accordion')
		e.target.nextElementSibling.classList.add('hide-panel')
		e.target.nextElementSibling.classList.remove('show-panel')
		e.target.querySelector('.h3-faq-svg-icon').classList.remove('rotate-icon-aboutme')
		e.target.querySelector('.h3-faq-svg-icon').classList.add('rotate-rev-icon-aboutme')
	}

	e.target.classList.toggle('accordion-bgc')
}

accordionAll.forEach((listen) => listen.addEventListener('click', showAndHideFAQeducation))

// Footer - year
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

// HANDLE COOKIES:

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')

	if (cookieEaten) {
		cookieBox.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide-cookies')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()

// dynamic shadow for header

window.addEventListener('scroll', () => {
	let scrolled = window.scrollY;

	scrolled /= 10
	scrolled -= 0.5
	scrolled *= 0.09

	if (scrolled > 0.7) {
		scrolled -= 1.2;
		headerShadow.style.backgroundColor = `rgba(17,11,5,${scrolled})`
	} else {
		headerShadow.style.backgroundColor = ''
	}
})









}
window.addEventListener("load", main);