// Variables globales
const header = document.querySelector('.header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Gestionnaire d'événements - Chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initScrollReveal();
    initFaq(); // Ensure this is called on page load
    initClientsSlider();
});

// Effet de header au défilement
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Menu mobile
function initMobileMenu() {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');

        const isActive = mobileMenuToggle.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        mobileMenuToggle.setAttribute('aria-label', isActive ? 'Fermer le menu' : 'Ouvrir le menu');

        // Animer les barres du hamburger en X
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Dropdown mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // Fermer le menu au clic à l'extérieur
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-content') && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Ouvrir le menu');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Animations au défilement
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (!revealElements.length) return;

    const handleRevealIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || 0;

                setTimeout(() => {
                    element.classList.add('active');
                }, delay);

                observer.unobserve(element);
            }
        });
    };

    const options = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(handleRevealIntersection, options);
    revealElements.forEach(element => observer.observe(element));
}

// Lien d'ancrage en douceur
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            // 100px : la capsule flottante (16px de marge + ~68px de haut) plus une marge de lecture.
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Gestionnaire pour les FAQ. Un seul chevron pivote via CSS (.faq-item.active
// .toggle-icon) — plus besoin de permuter le HTML de l'icône ici.
function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqItems.length) return;

    faqItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', (e) => {
            e.preventDefault();

            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            item.classList.toggle('active', !isActive);
            question.setAttribute('aria-expanded', String(!isActive));
        });
    });
}

// Animation des logos clients
function initClientsSlider() {
    const clientsTrack = document.querySelector('.clients-track');

    if (!clientsTrack) return;

    // Pause de l'animation au survol
    clientsTrack.addEventListener('mouseenter', () => {
        clientsTrack.style.animationPlayState = 'paused';
    });

    clientsTrack.addEventListener('mouseleave', () => {
        clientsTrack.style.animationPlayState = 'running';
    });
}
