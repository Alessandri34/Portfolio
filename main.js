document.addEventListener('DOMContentLoaded', () => {

    // ===== MARQUEE CLIENT LIST =====
    const clients = [
        { name: 'Caldeira', symbol: '◆' },
        { name: 'Justix', symbol: '⬡' },
        { name: 'Save Your Car', symbol: '▲' },
        { name: 'Mama Noï', symbol: '✦' },
        { name: 'Naan Restaurant', symbol: '●' },
        { name: 'Ocean Beef', symbol: '◇' },
        { name: 'MoneyInflu', symbol: '◈' },
        { name: 'Wizit', symbol: '▣' },
    ];
    const marqueeTrack = document.getElementById('marqueeTrack');
    if (marqueeTrack) {
        // Triple the list for seamless loop
        const allClients = [...clients, ...clients, ...clients];
        marqueeTrack.innerHTML = allClients.map(c =>
            `<div class="marquee-item">
                <span style="font-size:1.2rem;color:var(--primary)">${c.symbol}</span>
                <span class="marquee-item-name">${c.name}</span>
            </div>`
        ).join('');
    }

    // Custom Cursor Tracker
    const follower = document.getElementById('cursor-follower');

    // Check if device supports hover (desktop vs mobile)
    if (window.matchMedia("(any-hover: hover)").matches) {
        document.addEventListener('mousemove', (e) => {
            // Using requestAnimationFrame for smoother performance
            requestAnimationFrame(() => {
                follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            });
        });

        // Add visual feedback when hovering over interactive elements
        const interactiveElements = document.querySelectorAll('button, a, .hamburger, .bento-card, .close-btn');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.classList.add('hover-active');
            });
            el.addEventListener('mouseleave', () => {
                follower.classList.remove('hover-active');
            });
        });
    } else {
        // Disable cursor follower on touch devices
        if (follower) {
            follower.style.display = 'none';
        }
        document.body.style.cursor = 'auto';
    }

    // Parallax effect on hero background
    const heroBg = document.querySelector('.hero-background');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            requestAnimationFrame(() => {
                heroBg.style.transform = `translateY(calc(-50% + ${scrollValue * 0.3}px))`;
            });
        });
    }

    // Modal Logic & Content Dictionary
    const projectsData = {
        'save-your-car': {
            title: 'Save Your Car',
            category: 'APPLICATION MOBILE',
            description: `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">LA PRÉSENTATION</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Découvrez la vision derrière Save Your Car. Une interface fluide pour une gestion automobile sans friction. Ce film présente l'écosystème novateur du projet.</p>
                    <video width="100%" controls style="border-radius: 12px; border: 1px solid rgba(164,165,255,0.2);">
                        <source src="assets/Vidéo Présentation APP.mp4" type="video/mp4">
                    </video>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">L'INTERVIEW CLIENT</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Le retour d'expérience compte. Écoutez le témoignage authentique du fondateur sur notre accompagnement et la co-création du produit.</p>
                    <video width="100%" controls style="border-radius: 12px; border: 1px solid rgba(0,238,252,0.2);">
                        <source src="assets/INTERVIEW Client.mp4" type="video/mp4">
                    </video>
                </div>
                <div style="margin-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; font-size: 1.1rem; color: var(--on-surface-variant);">
                    <p>Création d'une application mobile complète (UI/UX), déploiement sur les plateformes (iOS/Android), gestion et réalisation du projet de A à Z : de l'audit stratégique avec le client jusqu'à la réalisation totale du produit.</p>
                </div>
            `,
            pdf: null
        },
        'justix': {
            title: 'Justix',
            category: 'IMAGE DE MARQUE & WEB',
            description: `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">IDENTITÉ & PLATEFORME WEB</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Pour Justix, nous avons conçu une identité visuelle complète. Le projet englobe la création d'un logo distinctif, la définition d'une charte graphique forte et le développement d'une présence web moderne visant à communiquer avec autorité dans l'écosystème juridique.</p>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">CAMPAGNE PROMOTIONNELLE & GROWTH</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Au-delà du branding, nous avons déployé un entonnoir de conversion de pointe pour la marque : <br><br>
                    <strong style="color: #fff">Marketing Ciblé</strong> ➔ <strong style="color: #fff">Génération de Leads qualifiés</strong> ➔ <strong style="color: #fff">Pré-conversion agressive</strong><br><br>
                    Cette mécanique a propulsé les taux d'engagement et optimisé le coût par acquisition final pour notre client.</p>
                </div>
            `,
            pdf: null
        },
        'caldeira': {
            title: 'Caldeira',
            category: 'E-COMMERCE & IDENTITÉ',
            description: `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">L'ESSENCE DE LA MARQUE</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Caldeira est une expérience e-commerce premium. Nous avons sculpté l'identité de marque à travers de multiples itérations de logo, aboutissant à une charte graphique luxueuse, directement inspirée des codes intemporels de la haute parfumerie.</p>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">PRODUCTION CINÉMATOGRAPHIQUE</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Pour transcender la simple boutique en ligne, notre studio a réalisé une série de vidéos promotionnelles captivantes. Ces visuels immersifs sont conçus pour éduquer l'audience et maximiser drastiquement le tunnel de conversion e-commerce.</p>
                </div>
            `,
            pdf: null
        },
        'maison-siraya': {
            title: 'Maison Siraya',
            category: 'CHARTE GRAPHIQUE',
            description: `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">IDENTITÉ MINIMALISTE</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Maison Siraya s'articule autour d'une élégance absolue. Ce projet met en lumière notre capacité à créer des logotypes et des identités de marque extrêmement raffinées, axées sur l'espace négatif et la sophistication d'une typographie sculpturale.</p>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">GUIDE DE MARQUE STRICT</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Un brandbook exhaustif accompagne cette identité. Les standards établis garantissent une cohérence absolue de la marque Maison Siraya à travers l'ensemble des supports numériques et imprimés, et encadre son ton éditorial.</p>
                </div>
            `,
            pdf: 'assets/Maison Siraya.pdf'
        },
        'mama-noi': {
            title: 'Mama Noï',
            category: 'DIRECTION ARTISTIQUE',
            description: `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">CRÉATION D'IDENTITÉ</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Pour Mama Noï, nous avons déployé une direction artistique intégrale afin d'établir un univers de marque percutant. De la conception typographique unique jusqu'à la charte iconographique, l'objectif était de créer une empreinte visuelle mémorable et instantanément reconnaissable.</p>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">DÉPLOIEMENT DIGITAL & PRINT</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Le profil de la marque a été décliné habilement sur de multiples plateformes : conception des assets réseaux sociaux, formats immersifs pour le marketing de contenu, et design des supports d'impression. La fluidité du logotype garantit une esthétique inébranlable sur chaque point de contact client.</p>
                </div>
            `,
            pdf: null
        },
        'naan': {
            title: 'Naan Restaurant',
            category: 'IDENTITÉ & COMMUNICATION',
            description: `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--primary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">DYNAMISME GASTRONOMIQUE</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Pour Naan Restaurant, nous avons réinventé l'énergie visuelle. De la conception d'un logotype évocateur jusqu'au design incisif des visuels de devanture physique, l'esthétique vibrante capture parfaitement l'essence de leur cuisine.</p>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-family: 'Space Grotesk', monospace; color: var(--secondary); margin-bottom: 0.5rem; font-size: 1rem; letter-spacing: 0.1em;">VISIBILITÉ SOCIAL MEDIA</h3>
                    <p style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">Déclinaison de l'identité sur de puissantes campagnes pour les réseaux sociaux. La direction artistique permet une création de contenu (Snack Content) rapide, répondant directement aux exigences visuelles agressives de la restauration.</p>
                </div>
            `,
            pdf: 'assets/PROJET NAAN .pdf'
        }
    };

    const modal = document.getElementById('project-modal');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const closeBtn = document.querySelector('.close-btn');
    const bentoCards = document.querySelectorAll('main .bento-card'); // Limit to main gallery to not trigger on "Nos Sites" cards
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalBody = document.getElementById('modal-body');

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (data) {
            modalTitle.innerHTML = data.title;
            modalCategory.innerHTML = data.category;

            // Build the modal contents
            let contentHTML = data.description;

            // Embed PDF if provided
            if (data.pdf) {
                contentHTML += `
                <div style="margin-top: 2rem; border-radius: 12px; overflow: hidden; border: 1px solid rgba(72, 71, 74, 0.15); background: #131315; height: 800px; position: relative;">
                    <embed src="${data.pdf}" type="application/pdf" width="100%" height="100%" style="display: block;" />
                </div>
                `;
            }

            modalBody.innerHTML = contentHTML;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Clear modal body securely to stop iframe/video/PDF playback if any
        setTimeout(() => modalBody.innerHTML = '', 400);
    }

    bentoCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = card.getAttribute('data-project');
            openModal(projectId);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // -- Scroll Reveal Logic --
    const cardsToReveal = document.querySelectorAll('.bento-card, .nos-sites-section h2, #contact');
    cardsToReveal.forEach(el => el.classList.add('reveal-up'));

    const revealOptions = { rootMargin: "0px 0px -50px 0px", threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    cardsToReveal.forEach(el => revealObserver.observe(el));

    // Staggered animation for services mini-cards
    const heroServices = document.querySelectorAll('.hero-services .glass-panel');
    heroServices.forEach((el, index) => {
        el.classList.add('reveal-up');
        el.style.transitionDelay = `${index * 0.1}s`;
        revealObserver.observe(el);
    });

    // -- Lazy Loading Videos --
    const lazyVideos = document.querySelectorAll('video.lazy-video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let video = entry.target;
            if (entry.isIntersecting) {
                let source = video.querySelector('source');
                if (source && source.dataset.src) {
                    source.src = source.dataset.src;
                    source.removeAttribute('data-src');
                    video.load();
                }
                video.play().catch(e => console.log('Autoplay blocked:', e));
            } else {
                video.pause(); // Save battery & CPU when off-screen
            }
        });
    }, { threshold: 0.1 });

    lazyVideos.forEach(video => {
        videoObserver.observe(video);
    });
});
