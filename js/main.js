// Navigation
const nav = document.querySelector('.header__nav');
const mainMenuItems = document.querySelectorAll('.header__nav-item');

// Modal
const modal = document.querySelector('.modal');
const modalBackground = document.querySelector('.modal__background');
const modalClose = document.querySelector('.modal__close');
const modalCloseElements = [modalBackground, modalClose];

const headerCTA = document.querySelector('.header__cta');
const sectionGetStarted = document.querySelector('#get-started');




// -----------------------
// Event Listeners
// -----------------------

// Header button listener
headerCTA.addEventListener('click', e => {
    e.preventDefault();
    scrollTo(headerCTA, sectionGetStarted);
});

// Modal Window Functionality
const timer = (sec) => {
    const timeout = setTimeout(() => {
        modal.classList.remove('hidden');
    }, sec * 1000);
};


// Smooth scroll behavior
const scrollToTop = _ => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

const scrollTo = (el, target) => {
    const targetCoords = target.getBoundingClientRect();
    console.log(el, targetCoords);

    if (target === 'top') {
        scrollToTop();
    } else {
        window.scrollTo({
            left: targetCoords.x + window.pageXOffset,
            top: targetCoords.y + window.pageYOffset,
            behavior: 'smooth'
        });
    }
};