// Animations additionnelles pour la page d'accueil IT Shore
// Ce fichier contient des effets visuels avancés et des interactions
// Partagé avec ia/parlons-ia.html : chaque fonction se protège via un
// sélecteur absent -> retour anticipé si l'élément ciblé n'existe pas sur la page.

document.addEventListener('DOMContentLoaded', () => {
    // Animation des particules en arrière-plan
    initParticlesEffect();

    // Galerie de projets défilable
    initProjectsShowcase();

    // Pôle d'expertise en vedette + index cliquable
    initExpertiseSpotlight();

    // Barre de la timeline "Notre méthode" qui se dessine au scroll
    initTimelineProgress();

    // Schéma animé Audit / Identification / Build / Monitoring
    initProcessDiagram();

    // Défilement des problèmes, un par un, dans le hero
    initHeroProblems();
});

// Fait avancer un repère le long d'un rail continu (le remplissage EST la
// progression Pré-audit -> Monitoring), et fait défiler la description en
// fondu dans le même emplacement — pas de flèches, pas de hidden instantané.
function initProcessDiagram() {
    const nodes = document.querySelectorAll('.diagram-node');
    const railFill = document.querySelector('.diagram-rail-fill');
    const descriptions = document.querySelectorAll('.diagram-description-text');
    if (!nodes.length) return;

    const steps = Array.from(nodes).map(node => node.getAttribute('data-step'));
    const lastIndex = steps.length - 1;
    let currentIndex = 0;
    let timer = null;

    function setActive(step) {
        currentIndex = steps.indexOf(step);
        nodes.forEach((node, i) => {
            node.classList.toggle('active', i === currentIndex);
            // Les étapes déjà passées restent marquées en vert, pas seulement l'étape courante.
            node.classList.toggle('reached', i <= currentIndex);
        });

        if (railFill) {
            railFill.style.transform = `scaleX(${currentIndex / lastIndex})`;
        }

        descriptions.forEach(desc => {
            desc.classList.toggle('active', desc.getAttribute('data-step') === step);
        });
    }

    function startAutoPlay() {
        stopAutoPlay();
        timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % steps.length;
            setActive(steps[currentIndex]);
        }, 4000);
    }

    function stopAutoPlay() {
        if (timer) clearInterval(timer);
        timer = null;
    }

    nodes.forEach(node => {
        const step = node.getAttribute('data-step');
        node.addEventListener('mouseenter', () => {
            setActive(step);
            stopAutoPlay();
        });
        node.addEventListener('click', () => {
            setActive(step);
            startAutoPlay();
        });
        node.addEventListener('focus', () => {
            setActive(step);
            stopAutoPlay();
        });
    });

    const track = document.querySelector('.diagram-track');
    if (track) {
        track.addEventListener('mouseleave', startAutoPlay);
        track.addEventListener('focusout', (e) => {
            if (!track.contains(e.relatedTarget)) startAutoPlay();
        });
    }

    setActive(steps[0]);
    startAutoPlay();
}

// Fait défiler les problèmes un par un dans le hero : le problème se barre
// puis cède sa place à la solution dans le même emplacement (voir
// .hero-problem-stage, empilement grid — pas deux lignes fixes + flèche).
function initHeroProblems() {
    const wrap = document.querySelector('.hero-problems-wrap');
    if (!wrap) return;

    const stage = wrap.querySelector('.hero-problem-stage');
    const problemLine = wrap.querySelector('.hero-problem-line-problem');
    const solutionLine = wrap.querySelector('.hero-problem-line-solution');
    const problemCopy = problemLine.querySelector('.hero-problem-copy');
    const solutionCopy = solutionLine.querySelector('.hero-problem-copy');
    const progressBar = wrap.querySelector('.hero-problems-progress-bar');
    const counterEl = wrap.querySelector('.hero-problems-counter-current');

    const steps = [
        {
            problem: 'Vos équipes perdent des heures à chercher, nettoyer et croiser des données à la main.',
            solution: 'On automatise la collecte et la consolidation, avec une donnée fiable et à jour.'
        },
        {
            problem: 'Le reporting mensuel prend plusieurs jours et repose sur une seule personne.',
            solution: 'On construit un reporting automatisé, disponible à tout moment.'
        },
        {
            problem: 'Certains process sont encore gérés sur papier ou par échange d\'e-mails.',
            solution: 'On numérise et on automatise le flux, avec une traçabilité complète.'
        },
        {
            problem: 'Des fichiers Excel critiques sont devenus fragiles et dépendants d\'une seule personne.',
            solution: 'On remplace cette dépendance par des outils fiables, suivis dans la durée.'
        },
        {
            problem: 'Des décisions se prennent au feeling, faute de visibilité en temps réel.',
            solution: 'On met en place des tableaux de bord et des alertes automatiques.'
        }
    ];

    const STEP_DURATION = 9000;
    const STRIKE_DELAY = 3200;
    const SOLVE_DELAY = 4000;

    let index = 0;
    let timers = [];
    let pending = [];
    let stepStart = 0;
    let elapsed = 0;

    function restartProgress() {
        progressBar.style.animation = 'none';
        void progressBar.offsetWidth; // force reflow pour relancer l'animation CSS
        progressBar.style.animation = '';
    }

    // Programme les phases qui n'ont pas encore eu lieu, en tenant compte du
    // temps déjà écoulé — permet de reprendre exactement là où on s'était
    // arrêté plutôt que de tout relancer depuis le début.
    function scheduleRemaining() {
        timers = pending.map(phase => setTimeout(() => {
            pending = pending.filter(p => p !== phase);
            phase.run();
        }, Math.max(0, phase.delay - elapsed)));
    }

    function playStep() {
        const step = steps[index];

        counterEl.textContent = String(index + 1).padStart(2, '0');
        problemCopy.textContent = step.problem;
        solutionCopy.textContent = step.solution;
        stage.classList.remove('stage-struck', 'stage-solved');
        restartProgress();

        elapsed = 0;
        stepStart = Date.now();
        pending = [
            // Le problème se barre...
            { delay: STRIKE_DELAY, run: () => stage.classList.add('stage-struck') },
            // ...puis cède la place à la solution, au même endroit.
            { delay: SOLVE_DELAY, run: () => stage.classList.add('stage-solved') },
            // Le temps de lire, puis on passe au problème suivant.
            { delay: STEP_DURATION, run: () => { index = (index + 1) % steps.length; playStep(); } }
        ];
        scheduleRemaining();
    }

    function pause() {
        if (!timers.length) return; // déjà en pause
        elapsed += Date.now() - stepStart;
        timers.forEach(t => clearTimeout(t));
        timers = [];
    }

    function resume() {
        if (timers.length || !pending.length) return; // déjà en cours
        stepStart = Date.now();
        scheduleRemaining();
    }

    playStep();

    // Survol = pause exacte (texte ET barre de progression, celle-ci via
    // :hover en CSS), pas un redémarrage de l'étape en cours.
    wrap.addEventListener('mouseenter', pause);
    wrap.addEventListener('mouseleave', resume);
}

// Fait progresser la barre verticale de la timeline en fonction du scroll
function initTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    const dots = timeline.querySelectorAll('.timeline-dot');

    let ticking = false;

    function updateProgress() {
        const rect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = (viewportHeight - rect.top) / (rect.height + viewportHeight);
        const clamped = Math.min(Math.max(progress, 0), 1);
        timeline.style.setProperty('--timeline-progress', (clamped * 100) + '%');

        // Chaque dot passe au vert exactement quand la barre l'atteint
        const progressPixels = clamped * rect.height;
        dots.forEach(dot => {
            const dotOffset = dot.getBoundingClientRect().top - rect.top;
            dot.classList.toggle('reached', dotOffset <= progressPixels);
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });

    updateProgress();
}

// Effet de particules interactives — mis en pause hors champ et onglet masqué
// pour éviter de consommer CPU/batterie quand personne ne le voit.
function initParticlesEffect() {
    // Effet propre à la landing page (index.html)
    const host = document.querySelector('.hero-problems-wrap');
    if (!host) return;

    // Canvas fixé au viewport : un fond très discret sur toute la page,
    // pas juste le hero, et toujours derrière le contenu (z-index négatif).
    const canvas = document.createElement('canvas');
    canvas.classList.add('particles-canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';

    document.body.appendChild(canvas);

    // Configuration du canvas
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Peu de particules, très discrètes
    const particleCount = 14;
    const particleColor = 'rgba(148, 167, 80, 0.35)';
    const particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2.5 + 1;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x + this.size > width || this.x - this.size < 0) {
                this.speedX = -this.speedX;
            }

            if (this.y + this.size > height || this.y - this.size < 0) {
                this.speedY = -this.speedY;
            }
        }

        draw() {
            ctx.fillStyle = particleColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        const maxDistance = 220;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = 1 - (distance / maxDistance);
                    ctx.strokeStyle = `rgba(148, 167, 80, ${opacity * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    let rafId = null;
    let running = false;

    function frame() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        connectParticles();
        rafId = requestAnimationFrame(frame);
    }

    function start() {
        if (running) return;
        running = true;
        rafId = requestAnimationFrame(frame);
    }

    function stop() {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
    }

    // Ne tourne que si l'onglet est visible...
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stop();
        } else if (inView) {
            start();
        }
    });

    // ...et seulement pendant que le hero (son ancre visuelle) est à l'écran :
    // le fond ne sert à rien une fois que le visiteur lit la FAQ ou le CTA.
    let inView = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            inView = entry.isIntersecting;
            if (inView && !document.hidden) {
                start();
            } else {
                stop();
            }
        });
    }, { rootMargin: '200px 0px' });

    observer.observe(host);
}

// Initialisation du carrousel horizontal des projets récents,
// avec une barre de progression animée en transform (pas en width)
// pour rester sur le compositeur plutôt que de déclencher un reflow.
function initProjectsShowcase() {
    const scrollEl = document.querySelector('.projects-scroll');
    if (!scrollEl) return;

    const progressBar = document.querySelector('.projects-progress-bar');
    const prevBtn = document.querySelector('.projects-nav-btn[data-dir="-1"]');
    const nextBtn = document.querySelector('.projects-nav-btn[data-dir="1"]');

    function cardStep() {
        const card = scrollEl.querySelector('.project-card-v2');
        return card ? card.offsetWidth + 24 : 300;
    }

    let ticking = false;

    function updateProgress() {
        if (!progressBar) return;
        const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
        const ratio = maxScroll > 0 ? scrollEl.scrollLeft / maxScroll : 0;
        const scale = Math.min(1, Math.max(0.15, ratio));
        progressBar.style.transform = `scaleX(${scale})`;
        ticking = false;
    }

    scrollEl.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });
    updateProgress();

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scrollEl.scrollBy({ left: -cardStep(), behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            scrollEl.scrollBy({ left: cardStep(), behavior: 'smooth' });
        });
    }

    // Défilement à la souris (glisser-déposer)
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    scrollEl.addEventListener('mousedown', (e) => {
        isDragging = true;
        scrollEl.classList.add('dragging');
        startX = e.pageX;
        startScroll = scrollEl.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        scrollEl.classList.remove('dragging');
    });

    scrollEl.addEventListener('mouseleave', () => {
        isDragging = false;
        scrollEl.classList.remove('dragging');
    });

    scrollEl.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        scrollEl.scrollLeft = startScroll - (e.pageX - startX);
    });
}

// Un pôle mis en avant à la fois (description, tags, exemple concret) + un
// index cliquable pour les 4 autres, sans autoplay : contrairement à une
// citation courte, il y a ici assez à lire pour que le visiteur ait besoin
// de choisir son rythme plutôt que de le voir défiler tout seul.
function initExpertiseSpotlight() {
    const root = document.querySelector('.expertise-spotlight');
    if (!root) return;

    const main = root.querySelector('.expertise-spotlight-main');
    const iconEl = main.querySelector('.expertise-spotlight-icon i');
    const titleEl = main.querySelector('.expertise-spotlight-title');
    const descEl = main.querySelector('.expertise-spotlight-desc');
    const tagsEl = main.querySelector('.expertise-spotlight-tags');
    const exampleEl = main.querySelector('.expertise-spotlight-example');
    const items = root.querySelectorAll('.expertise-index-item');

    const poles = [
        {
            icon: 'fa-code',
            title: 'Développement Produit',
            desc: "De l'application web à l'app mobile, en passant par la reprise d'un code existant : on conçoit et on maintient vos produits digitaux, du premier commit à la mise en production.",
            tags: ['Développement Web', 'Développement Mobile', 'Reprise de code', "Audit d'applications", 'Applications SaaS'],
            example: "reprise d'une application vieillissante pour un client retail, refonte progressive sans interruption de service."
        },
        {
            icon: 'fa-diagram-project',
            title: 'Intégrateur ERP',
            desc: 'On déploie et on audite les ERP qui font tourner votre back-office — en priorité Odoo — pour que vos équipes travaillent enfin dans un seul outil, pas dix.',
            tags: ['Intégrateur Odoo', 'Audit ERP'],
            example: "migration d'une PME industrielle de tableurs Excel dispersés vers un Odoo unifié (stock, facturation, CRM)."
        },
        {
            icon: 'fa-robot',
            title: 'Data & AI',
            desc: 'De la donnée brute au modèle qui décide : pipelines de données, systèmes prédictifs et IA générative appliquée à vos process métier.',
            tags: ['IA Générative', 'Systèmes prédictifs', 'Data Engineering'],
            example: 'un agent qui lit les demandes clients entrantes et les route automatiquement vers le bon service.',
            link: { href: 'ia/parlons-ia.html', label: 'Voir Parlons IA →' }
        },
        {
            icon: 'fa-compass',
            title: 'Conseil & Transformation',
            desc: 'Avant de coder, on prend du recul : diagnostic de votre existant, stratégie de transformation, montée en compétence de vos équipes.',
            tags: ['Transformation digitale', 'Conseil IT & Infrastructure', 'Formations'],
            example: "audit d'infrastructure pour une scale-up avant une levée de fonds, feuille de route sur 12 mois."
        }
    ];

    const CROSSFADE_OUT = 220;
    let current = 0;

    function setContent(i) {
        const pole = poles[i];
        iconEl.className = `fas ${pole.icon}`;
        titleEl.textContent = pole.title;
        descEl.textContent = pole.desc;
        tagsEl.innerHTML = pole.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        exampleEl.innerHTML = `<strong>Concrètement&nbsp;:</strong> ${pole.example}`
            + (pole.link ? ` <a href="${pole.link.href}">${pole.link.label}</a>` : '');
        items.forEach((item, idx) => item.classList.toggle('active', idx === i));
    }

    function goTo(i) {
        if (i === current) return;
        current = i;
        main.classList.remove('is-visible');
        setTimeout(() => {
            setContent(i);
            main.classList.add('is-visible');
        }, CROSSFADE_OUT);
    }

    items.forEach((item, i) => {
        item.addEventListener('click', () => goTo(i));
    });

    // Premier rendu immédiat, sans le fondu de sortie (rien à faire disparaître).
    setContent(0);
    main.classList.add('is-visible');
}
