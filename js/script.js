/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100)
  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['BTS SIO'],
    typeSpeed: 200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
});

/*===================== bouton flèche ===================*/

const scrollToTopButton = document.querySelector('.footer-iconTop a');

// Fait défiler la page vers le haut lorsque le bouton est cliqué
scrollToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    window.scrollTo({
        top: 0, // Défile jusqu'au haut de la page
        behavior: 'smooth' // Défilement fluide
    });
});

/*==================== scroll reveal pour la timeline ====================*/
ScrollReveal().reveal('.timeline-container', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200, // Délai entre chaque élément
});

/*==================== scroll reveal pour les certifications ====================*/
ScrollReveal().reveal('.certifications-box', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200, // Délai entre chaque élément
});


/*==================== scroll reveal pour les certifications ====================*/
ScrollReveal().reveal('.certifications-box', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200, // Délai entre chaque élément
});


/*==================== Filtrage des documentations ====================*/
const filterButtons = document.querySelectorAll('.filter-btn');
const documentationBoxes = document.querySelectorAll('.documentations-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retire la classe active de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Ajoute la classe active au bouton cliqué
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        documentationBoxes.forEach(box => {
            if (filter === 'all' || box.classList.contains(filter)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

ScrollReveal().reveal('.veille-box', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});