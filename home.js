// =====================================================================
// Page d'accueil IT Shore — interactions
//  - sections épinglées au scroll (grand écran uniquement)
//  - vidéo du hero qui s'agrandit en arrivant à l'écran
//  - carrousels « un élément à la fois » (témoignages, projets)
//  - liens d'ancre à saut direct (pas de défilement animé à travers les sections épinglées)
// Sans JavaScript, sur mobile ou avec « réduire les animations », tout s'affiche normalement.
// =====================================================================
(function () {
    'use strict';

    const HEADER = 100;      // hauteur occupée par le header flottant
    const GAP = 100;         // espace visé entre le contenu de deux sections qui se suivent
    const root = document.documentElement;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const lerp = (p, a, b) => clamp((p - a) / (b - a), 0, 1);

    const wide = window.matchMedia('(min-width: 1024px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scrollyOn = () => wide.matches && !reduce.matches;

    // ---------------------------------------------------------------
    // Sections épinglées
    // ---------------------------------------------------------------
    const stages = [...document.querySelectorAll('[data-stage]')].map((el) => ({
        el,
        screens: parseFloat(el.dataset.screens || '2'),
        align: el.dataset.align || 'center',
        content: el.querySelector('.home-stage-content'),
        reveals: [...el.querySelectorAll('[data-reveal-at]')],
        segments: el.querySelector('[data-segments]'),
        rail: el.querySelector('[data-rail]'),
    }));

    function layoutStages() {
        const on = scrollyOn();
        root.classList.toggle('is-scrolly', on);
        const vh = window.innerHeight;
        stages.forEach((s) => {
            if (!on) {
                s.el.style.height = '';
                s.el.style.marginTop = '';
                s.el.style.marginBottom = '';
                return;
            }
            s.el.style.height = `${s.screens * 100}vh`;
            // L'écran épinglé est plus haut que son contenu : le vide est « rendu »
            // aux sections voisines (marges négatives) pour éviter les grands blancs.
            const h = s.content.offsetHeight;
            // contenu centré sous le header : HEADER + blank au-dessus, blank en dessous ;
            // chaque section n'en garde que GAP/2 de chaque côté.
            const blank = Math.max(0, (vh - HEADER - h) / 2);
            s.el.style.marginTop = `${-Math.max(0, HEADER + blank - GAP / 2)}px`;
            s.el.style.marginBottom = `${-Math.max(0, blank - GAP / 2)}px`;
        });
    }

    // progression : 0 quand le haut de la section entre par le bas de l'écran, 1 à la fin de l'épinglage
    function progressOf(el) {
        const r = el.getBoundingClientRect();
        return clamp((window.innerHeight - r.top) / el.offsetHeight, 0, 1);
    }

    function segmentOpacity(p, i, n, from) {
        const size = (1 - from) / n;
        const start = from + i * size;
        const end = start + size;
        const f = Math.min(0.015, size * 0.06);
        const fadeIn = i === 0 ? 1 : lerp(p, start - f, start + f);
        const fadeOut = i === n - 1 ? 1 : 1 - lerp(p, end - f, end + f);
        return Math.min(fadeIn, fadeOut);
    }

    function renderStages() {
        if (!scrollyOn()) {
            stages.forEach((s) => {
                s.reveals.forEach((r) => { r.style.opacity = ''; r.style.transform = ''; });
                if (s.rail) s.rail.style.transform = '';
                if (s.segments) s.segments.querySelectorAll('[data-segment]').forEach((x) => { x.style.opacity = ''; x.style.transform = ''; x.style.pointerEvents = ''; });
            });
            return;
        }
        stages.forEach((s) => {
            const p = progressOf(s.el);
            const enter = 1 / s.screens; // part de la progression où la section entre à l'écran

            s.reveals.forEach((r) => {
                const at = parseFloat(r.dataset.revealAt);
                const t = lerp(p, at, at + 0.07);
                r.style.opacity = String(t);
                r.style.transform = `translateY(${(1 - t) * 28}px)`;
            });

            if (s.rail) s.rail.style.transform = `scaleX(${lerp(p, 0.28, 0.82)})`;

            if (s.segments) {
                const panels = [...s.segments.querySelectorAll('[data-segment]')];
                const n = panels.length;
                const size = (1 - enter) / n;
                panels.forEach((panel, i) => {
                    const o = segmentOpacity(p, i, n, enter);
                    const start = enter + i * size;
                    const shift = i > 0 && p < start + size / 2 ? (1 - o) * 60 : (i < n - 1 ? -(1 - o) * 60 : 0);
                    panel.style.opacity = String(o);
                    panel.style.transform = `translateY(${shift}px)`;
                    panel.style.pointerEvents = o > 0.5 ? 'auto' : 'none';
                });
                s.segments.querySelectorAll('[data-seg-fill]').forEach((bar) => {
                    const i = parseInt(bar.dataset.segFill, 10);
                    bar.style.transform = `scaleY(${lerp(p, enter + i * size, enter + (i + 1) * size)})`;
                });
                const counter = s.segments.querySelector('[data-seg-counter]');
                if (counter) {
                    const current = clamp(Math.floor((p - enter) / size) + 1, 1, n);
                    counter.textContent = String(current).padStart(2, '0');
                }
            }
        });
    }

    // ---------------------------------------------------------------
    // Vidéo du hero : s'agrandit en arrivant à l'écran
    // ---------------------------------------------------------------
    const video = document.querySelector('[data-grow]');
    function renderVideo() {
        if (!video) return;
        if (!scrollyOn()) { video.style.transform = ''; return; }
        const r = video.getBoundingClientRect();
        // 0 quand le haut de la vidéo touche le bas de l'écran, 1 quand son centre est au centre
        const t = clamp((window.innerHeight - r.top) / (window.innerHeight / 2 + r.height / 2), 0, 1);
        video.style.transform = `scale(${0.84 + 0.16 * t})`;
    }

    if (video) {
        const media = video.querySelector('video');
        const toggle = video.querySelector('[data-video-toggle]');
        const hasSource = media && media.querySelector('source');
        if (hasSource) {
            media.addEventListener('loadeddata', () => video.classList.add('has-video'), { once: true });
            if (media.readyState >= 2) video.classList.add('has-video');
        }
        const sound = video.querySelector('[data-video-sound]');
        if (sound && media) {
            sound.addEventListener('click', () => {
                media.muted = !media.muted;
                if (!media.muted && media.paused) media.play();
                sound.innerHTML = media.muted ? '<i class="fas fa-volume-xmark"></i>' : '<i class="fas fa-volume-high"></i>';
                sound.setAttribute('aria-label', media.muted ? 'Activer le son' : 'Couper le son');
            });
        }
        if (toggle && media) {
            toggle.addEventListener('click', () => {
                if (media.paused) { media.play(); toggle.innerHTML = '<i class="fas fa-pause"></i>'; toggle.setAttribute('aria-label', 'Mettre en pause'); }
                else { media.pause(); toggle.innerHTML = '<i class="fas fa-play"></i>'; toggle.setAttribute('aria-label', 'Lire la vidéo'); }
            });
        }
    }

    // ---------------------------------------------------------------
    // Pôles d'expertise : la carte recouverte par la suivante recule légèrement
    // ---------------------------------------------------------------
    const stackCards = [...document.querySelectorAll('.home-stack-card')];
    const stack = document.querySelector('.home-stack');
    // Toutes les cartes prennent la hauteur de la plus haute, et se fixent sous le titre de la section
    const stackHead = document.querySelector('.home-poles-section .home-section-head');
    function equalizeStack() {
        if (!stack) return;
        const measure = () => {
            stackCards.forEach((c) => { c.style.height = 'auto'; });
            const h = Math.max(...stackCards.map((c) => c.offsetHeight));
            stackCards.forEach((c) => { c.style.height = ''; });
            return h;
        };
        stack.classList.remove('is-compact');
        let h = measure();
        if (scrollyOn() && stackHead) {
            const top = 96 + stackHead.offsetHeight + 24 + 8;
            const available = window.innerHeight - top - 20 - (stackCards.length - 1) * 14;
            if (h > available) { stack.classList.add('is-compact'); h = measure(); }
            stack.style.setProperty('--stack-top', `${top}px`);
        }
        stack.style.setProperty('--card-h', `${h}px`);
    }

    function renderStack() {
        // Quand la dernière carte commence à remonter, le titre remonte avec elle
        if (stackHead && stackCards.length) {
            if (scrollyOn()) {
                const last = stackCards[stackCards.length - 1];
                const pinnedTop = parseFloat(getComputedStyle(last).top) || 0;
                const lift = Math.min(0, last.getBoundingClientRect().top - pinnedTop);
                stackHead.style.transform = lift < -0.5 ? `translateY(${lift}px)` : '';
            } else {
                stackHead.style.transform = '';
            }
        }
        stackCards.forEach((card, i) => {
            const next = stackCards[i + 1];
            if (!scrollyOn() || !next) { card.style.transform = ''; card.style.filter = ''; return; }
            const r = card.getBoundingClientRect();
            const n = next.getBoundingClientRect();
            const covered = clamp((r.bottom - n.top) / r.height, 0, 1);
            card.style.transform = `scale(${1 - covered * 0.05})`;
            card.style.filter = `brightness(${1 - covered * 0.12})`;
        });
    }

    // ---------------------------------------------------------------
    // Boucle de rendu
    // ---------------------------------------------------------------
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { renderStages(); renderVideo(); renderStack(); ticking = false; });
    }
    function relayout() { layoutStages(); equalizeStack(); renderStages(); renderVideo(); renderStack(); }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', relayout);
    wide.addEventListener('change', relayout);
    reduce.addEventListener('change', relayout);
    if ('ResizeObserver' in window) {
        const ro = new ResizeObserver(() => layoutStages());
        stages.forEach((s) => ro.observe(s.content));
    }
    relayout();

    // ---------------------------------------------------------------
    // Carrousels : un seul élément affiché, flèches, points, défilement auto
    // ---------------------------------------------------------------
    document.querySelectorAll('[data-carousel]').forEach((carousel) => {
        const items = [...carousel.querySelector('.home-carousel-viewport').children];
        const dotsWrap = carousel.querySelector('[data-dots]');
        const delay = parseInt(carousel.dataset.autoplay || '0', 10);
        let index = 0;
        let timer = null;

        const dots = items.map((_, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('aria-label', `Afficher l'élément ${i + 1}`);
            b.addEventListener('click', () => { go(i); restart(); });
            dotsWrap.appendChild(b);
            return b;
        });

        function go(next) {
            const prev = index;
            index = (next + items.length) % items.length;
            items.forEach((item, i) => {
                item.classList.toggle('is-active', i === index);
                item.classList.toggle('is-leaving', i === prev && prev !== index);
                item.setAttribute('aria-hidden', String(i !== index));
            });
            dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
        }
        function restart() {
            if (!delay || reduce.matches) return;
            clearInterval(timer);
            timer = setInterval(() => go(index + 1), delay);
        }

        carousel.querySelector('[data-prev]').addEventListener('click', () => { go(index - 1); restart(); });
        carousel.querySelector('[data-next]').addEventListener('click', () => { go(index + 1); restart(); });
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { go(index - 1); restart(); }
            if (e.key === 'ArrowRight') { go(index + 1); restart(); }
        });
        go(0);
        restart();
    });

    // ---------------------------------------------------------------
    // Projets : liste + détail (onglets accessibles au clavier)
    // ---------------------------------------------------------------
    document.querySelectorAll('[data-tabs]').forEach((box) => {
        const tabs = [...box.querySelectorAll('[role="tab"]')];
        const panels = [...box.querySelectorAll('[role="tabpanel"]')];
        function select(i, focus) {
            tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(j === i)); t.tabIndex = j === i ? 0 : -1; });
            panels.forEach((p, j) => { p.hidden = j !== i; p.classList.toggle('is-active', j === i); });
            if (focus) tabs[i].focus();
        }
        tabs.forEach((t, i) => {
            t.addEventListener('click', () => select(i));
            t.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
                if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
            });
        });
        select(0);
    });

    // ---------------------------------------------------------------
    // Liens d'ancre : saut direct (capturé avant le défilement animé de main.js)
    // ---------------------------------------------------------------
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - HEADER, behavior: 'auto' });
        history.replaceState(null, '', id);
    }, true);
})();
