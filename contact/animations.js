// Contact Page Animation Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Add page entrance animation
    document.body.classList.add('page-entrance');
    
    // Initialize the loading animation
    initLoadingAnimation();
    
    // Initialize form field animations
    initFormFieldAnimations();
    
    // Initialize form submission animation
    initFormSubmission();
    
    // Initialize FAQ interactions
    initFaqInteractions();
    
    // Initialize scroll reveal animations
    initScrollRevealAnimations();
    
    // Initialize timeline animations
    initTimelineAnimations();
    
    // Initialize benefit cards hover effects
    initBenefitCardEffects();
    
    // Initialize testimonial animations
    initTestimonialAnimations();
});

// Loading Animation
function initLoadingAnimation() {
    // Create loading overlay if it doesn't exist
    if (!document.querySelector('.loading-overlay')) {
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        
        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'loading-spinner';
        
        loadingOverlay.appendChild(loadingSpinner);
        document.body.appendChild(loadingOverlay);
        
        // Hide loading overlay after page has loaded
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingOverlay.classList.add('hidden');
                
                // Remove from DOM after transition
                setTimeout(function() {
                    loadingOverlay.remove();
                }, 500);
            }, 500);
        });
    }
}

// Form Field Animations
function initFormFieldAnimations() {
    const formControls = document.querySelectorAll('.form-control');
    
    // Add placeholder attribute to work with the floating label effect
    formControls.forEach(input => {
        input.setAttribute('placeholder', ' ');
        
        // Move label if field already has a value (e.g. on page refresh)
        if (input.value.trim() !== '') {
            const label = input.previousElementSibling;
            if (label && label.classList.contains('form-label')) {
                label.style.top = '-10px';
                label.style.left = '10px';
                label.style.fontSize = '12px';
                label.style.color = 'var(--primary-color)';
                label.style.backgroundColor = 'var(--white)';
                label.style.padding = '0 5px';
            }
        }
        
        // Focus effects
        input.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        // Blur effects
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.classList.remove('focused');
            }
        });
    });
}

// Form Submission Animation
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error-shake');
                    
                    // Remove error class after animation completes
                    setTimeout(function() {
                        field.classList.remove('error-shake');
                    }, 500);
                }
            });
            
            if (isValid) {
                // Animate submit button
                const submitBtn = contactForm.querySelector('.btn-submit');
                if (submitBtn) {
                    submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Envoi en cours...';
                    submitBtn.disabled = true;
                }
                
                // Simulate form submission - replace with actual AJAX call in production
                setTimeout(function() {
                    // Hide form with animation
                    contactForm.style.opacity = '0';
                    contactForm.style.transform = 'translateY(-20px)';
                    
                    // Show success message
                    setTimeout(function() {
                        contactForm.style.display = 'none';
                        formSuccess.style.display = 'block';
                        
                        // Trigger animation
                        setTimeout(function() {
                            formSuccess.classList.add('active');
                        }, 100);
                    }, 500);
                }, 1500);
            }
        });
    }
}

// FAQ Interactions
function initFaqInteractions() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Check if already active
                const isActive = item.classList.contains('active');
                
                // Close all other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        
                        // Animate icon rotation
                        const otherIcon = otherItem.querySelector('.toggle-icon i');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0)';
                        }
                    }
                });
                
                // Toggle current FAQ
                if (isActive) {
                    item.classList.remove('active');
                    
                    // Animate icon rotation
                    const icon = item.querySelector('.toggle-icon i');
                    if (icon) {
                        icon.style.transform = 'rotate(0)';
                    }
                } else {
                    item.classList.add('active');
                    
                    // Animate icon rotation
                    const icon = item.querySelector('.toggle-icon i');
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        }
    });
}

// Scroll Reveal Animations
function initScrollRevealAnimations() {
    const animatedElements = document.querySelectorAll('.timeline-item, .contact-testimonial-card');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Timeline Animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length) {
        // Create staggered animation delays
        timelineItems.forEach((item, index) => {
            item.style.transitionDelay = `${0.1 * index}s`;
        });
    }
}

// Benefit Card Effects
function initBenefitCardEffects() {
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    benefitItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.benefit-icon');
            if (icon) {
                icon.style.backgroundColor = 'var(--btn-green)';
                icon.style.color = 'var(--white)';
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.benefit-icon');
            if (icon) {
                icon.style.backgroundColor = 'rgba(148, 167, 80, 0.12)';
                icon.style.color = 'var(--primary-color)';
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Testimonial Animations
function initTestimonialAnimations() {
    const testimonialCards = document.querySelectorAll('.contact-testimonial-card');
    
    testimonialCards.forEach(card => {
        // Add quote icon if not present
        if (!card.querySelector('.testimonial-quote')) {
            const quoteIcon = document.createElement('span');
            quoteIcon.className = 'testimonial-quote';
            quoteIcon.innerHTML = '"';
            card.prepend(quoteIcon);
        }
        
        // Hover animations are handled in CSS
    });
}

// Smooth Scroll function for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Add floating label effect to form fields
function addFloatingLabelEffect() {
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('.form-control');
        const label = group.querySelector('.form-label');
        
        if (input && label) {
            // Move label inside the input for floating effect
            if (label.parentNode === group) {
                group.removeChild(label);
                input.parentNode.insertBefore(label, input.nextSibling);
            }
        }
    });
}

// Initialize floating labels
addFloatingLabelEffect();


// Add support for browser back button - reset animations
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page was restored from back/forward cache
        // Reset all animations
        document.querySelectorAll('[style*="animation"]').forEach(element => {
            element.style.animation = 'none';
            element.style.opacity = '1';
            element.style.transform = 'none';
        });
    }
});