let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// toggle icon nav bar
newIcon.onclick = () => {
    newIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll section  
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    //  sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// remove toggle icon and navbar
newIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .Services-containers, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'MERN Stack Developer','React Developer','Java Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// Get all portfolio box elements
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// Add click event listener to each portfolio box
portfolioBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Toggle a class to open/close the box
        box.classList.toggle('open');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const redirectButton = document.getElementById('redirectBtn');

    // Add click event listener to the button
    redirectButton.addEventListener('click', function() {
        // Redirect to another page
        window.location.href = 'https://mhasiemmalik.github.io/FarmPlusRepo/'; // Replace 'https://example.com' with your desired URL
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const redirectButton2 = document.getElementById('redirectBtn2');

    // Add click event listener to the button
    redirectButton2.addEventListener('click', function() {
        // Redirect to another page
        window.location.href = 'https://vamshicompililng.github.io/NEWSFEED/'; // Replace 'https://example.com' with your desired URL
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const redirectButton3 = document.getElementById('redirectBtn3');

    // Add click event listener to the button
    redirectButton3.addEventListener('click', function() {
        // Redirect to another page
        window.location.href = 'https://vamshicompililng.github.io/Speechify/'; // Replace 'https://example.com' with your desired URL
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const redirectButton4 = document.getElementById('redirectBtn4');

    // Add click event listener to the button
    redirectButton4.addEventListener('click', function() {
        // Redirect to another page
        window.location.href = 'https://github.com/vamshicompililng/Realtime-tracker'; // Replace 'https://example.com' with your desired URL
    });
});
