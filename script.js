// ===== ENCEA - BUSINESS AND ENGINEERING SCHOOL =====
// Script principal d'interactivité et de conversion

document.addEventListener('DOMContentLoaded', function () {

  // 1. NAVBAR STICKY & SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. MENU MOBILE AVANCÉ
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fermer le menu lors du clic sur un lien de navigation
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 3. FAQ ACCORDÉON INTERACTIF
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. DONNÉES DÉTAILLÉES DES PROGRAMMES DE LICENCE (MODALES)
  const programmesData = {
    ma: {
      titre: "Licence Management des Affaires (MA)",
      domaine: "Sciences Économiques et de Gestion • 180 ECTS (Bac+3)",
      badge: "Domaine MDI",
      slogan: "Former les stratèges et dirigeants d'entreprises de la nouvelle Afrique.",
      image: "contenu/PHOTO-2026-09-28-12-39-49.jpg",
      debouches: [
        "Cadre en stratégie et management d'entreprise",
        "Chef de projet & Business Developer junior",
        "Gestionnaire financier et contrôleur de gestion junior",
        "Entrepreneur et dirigeant de start-up / PME"
      ],
      modules: [
        "Stratégie d'entreprise & Gouvernance opérationnelle",
        "Management d'équipe, négociation & leadership",
        "Comptabilité générale, analytique & finance d'entreprise",
        "Marketing stratégique & e-business panafricain",
        "Droit des affaires OHADA & environnement juridique",
        "Entrepreneuriat, création de valeur & business planning"
      ],
      conditions: "Baccalauréat Séries L2, G, S1, S2 ou diplôme équivalent reconnu. Sélection sur étude de dossier et entretien."
    },
    gct: {
      titre: "Licence Gouvernance des Collectivités Territoriales (GCT)",
      domaine: "Sciences Juridiques, Politiques et de l'Administration • 180 ECTS (Bac+3)",
      badge: "Domaine MDI",
      slogan: "Bâtir des territoires inclusifs, performants et résilients.",
      image: "contenu/PHOTO-2026-09-28-12-39-49 (3).jpg",
      debouches: [
        "Administrateur des services publics locaux (Mairies, Conseils départementaux)",
        "Chargé de mission en aménagement et développement territorial",
        "Coordonnateur de projets pour ONG et agences internationales",
        "Consultant junior en politiques publiques et gouvernance locale"
      ],
      modules: [
        "Droit administratif & droit des collectivités territoriales",
        "Finances publiques locales, fiscalité & budget communal",
        "Planification territoriale & urbanisme durable",
        "Politiques publiques, participation citoyenne & démocratie locale",
        "Gestion des marchés publics & partenariats public-privé (PPP)",
        "Coopération décentralisée & gestion des crises territoriales"
      ],
      conditions: "Baccalauréat Séries L1, L2, S1, S2, G ou diplôme équivalent. Sélection sur dossier scolaire et motivation."
    },
    info: {
      titre: "Licence Ingénierie Informatique",
      domaine: "Sciences et Technologies (ST) • 180 ECTS (Bac+3)",
      badge: "Domaine ST",
      slogan: "Créer des solutions technologiques et logicielles à fort impact.",
      image: "contenu/PHOTO-2026-09-28-12-39-49 (1).jpg",
      debouches: [
        "Développeur Web & Mobile Full-Stack",
        "Administrateur systèmes, réseaux et infrastructure Cloud",
        "Consultant junior en cybersécurité et protection des données",
        "Analyste de données & intégrateur d'outils d'Intelligence Artificielle"
      ],
      modules: [
        "Algorithmique avancée, structures de données & POO (Python, Java, JS)",
        "Architecture Web moderne, APIs & frameworks contemporains",
        "Bases de données relationnelles (SQL) et NoSQL",
        "Réseaux informatiques, protocoles TCP/IP & sécurité applicative",
        "Introduction à l'Intelligence Artificielle & automatisation",
        "Méthodologies Agiles (Scrum), DevOps & déploiement Cloud"
      ],
      conditions: "Baccalauréat Séries S1, S2, S3, T1, T2 ou Bac L avec forte appétence aux technologies de l'information."
    },
    gc: {
      titre: "Licence Ingénierie Génie Civil",
      domaine: "Sciences et Technologies (ST) • 180 ECTS (Bac+3)",
      badge: "Domaine ST",
      slogan: "Concevoir et réaliser les infrastructures durables du Sénégal et d'Afrique.",
      image: "contenu/PHOTO-2026-09-28-12-39-49 (2).jpg",
      debouches: [
        "Conducteur de travaux & conducteur de chantiers junior",
        "Technicien / Ingénieur d'études en bureau d'études BTP",
        "Métreur-vérificateur et chargé d'études de prix",
        "Contrôleur technique de structures et d'ouvrages d'art"
      ],
      modules: [
        "Résistance des matériaux (RDM) & mécanique des structures",
        "Béton armé, structures métalliques et géotechnique",
        "Topographie, dessin technique & conception assistée par ordinateur (CAO/AutoCAD)",
        "Organisation, gestion et sécurité sur les chantiers",
        "Matériaux de construction locaux et écologiques",
        "Hydraulique urbaine, assainissement et voiries réseaux divers (VRD)"
      ],
      conditions: "Baccalauréat Séries S1, S2, S3, T1, T2 ou diplôme équivalent en sciences exactes."
    }
  };

  // 5. GESTION DU SYSTÈME DE MODALES
  const modalOverlay = document.getElementById('globalModalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalCloseBtn');

  function openModal(titleHtml, bodyHtml) {
    if (modalTitle) modalTitle.innerHTML = titleHtml;
    if (modalBody) modalBody.innerHTML = bodyHtml;
    if (modalOverlay) {
      modalOverlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('visible');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('visible')) {
      closeModal();
    }
  });

  // Écouteurs sur les boutons des cartes de programme
  document.querySelectorAll('[data-programme]').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const progKey = this.getAttribute('data-programme');
      const data = programmesData[progKey];
      if (!data) return;

      const bodyHtml = `
        <div class="modal-programme-layout">
          <div class="modal-prog-header">
            <span class="modal-badge">${data.badge}</span>
            <p class="modal-domaine">${data.domaine}</p>
            <p class="modal-slogan">« ${data.slogan} »</p>
          </div>

          <div class="modal-grid-details">
            <div class="modal-section-box">
              <h4>Débouchés Professionnels</h4>
              <ul>
                ${data.debouches.map(d => `<li><strong>${d}</strong></li>`).join('')}
              </ul>
            </div>
            <div class="modal-section-box">
              <h4>Compétences & Modules Clés</h4>
              <ul>
                ${data.modules.map(m => `<li>${m}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="modal-admission-box">
            <h4>Conditions d'Accès</h4>
            <p>${data.conditions}</p>
          </div>

          <div class="modal-cta-row">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdD6D-xojxqB0qYChm_WseroPWYDv8Hwrv59n6qkQO9-8q7mA/viewform" target="_blank" rel="noopener" class="btn-modal-apply">
              Postuler à la Licence → (-50%)
            </a>
            <a href="https://wa.me/221787206666?text=Bonjour%20ENCEA,%20je%20souhaite%20des%20informations%20d%C3%A9taill%C3%A9es%20sur%20la%20${encodeURIComponent(data.titre)}" target="_blank" rel="noopener" class="btn-modal-whatsapp">
              Échanger sur WhatsApp
            </a>
          </div>
        </div>
      `;

      openModal(data.titre, bodyHtml);
    });
  });

  // Modal Agrément Ministériel
  const openAgrementBtn = document.getElementById('btnOpenAgrementModal');
  if (openAgrementBtn) {
    openAgrementBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const bodyHtml = `
        <div class="modal-doc-viewer">
          <p style="margin-bottom:15px; color:var(--text-secondary); font-size:0.95rem;">
            Arrêté ministériel d'ouverture <strong>N°RepSEN/Ensup-Priv/AP/n° 478-2026</strong> délivré par la République du Sénégal — Ministère de l'Enseignement Supérieur, de la Recherche et de l'Innovation.
          </p>
          <div class="doc-frame-wrapper">
            <img src="contenu/PHOTO-2026-09-28-12-47-41.jpg" alt="Agrément officiel ENCEA signé par le Pr Mamadou SIDIBE" style="width:100%; height:auto; border-radius:4px; box-shadow:0 4px 15px rgba(0,0,0,0.15);">
          </div>
          <div style="margin-top:20px; display:flex; justify-content:center; gap:15px;">
            <a href="contenu/PHOTO-2026-09-28-12-47-41.jpg" target="_blank" class="btn-hero-primary" download="Autorisation-ENCEA-Ministere.jpg">
              ⬇ Télécharger l'Arrêté Officiel
            </a>
          </div>
        </div>
      `;
      openModal("Autorisation Officielle de l'État du Sénégal", bodyHtml);
    });
  }

  // Modale Portail Étudiant & Enseignant
  document.querySelectorAll('.open-portal-notice').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const bodyHtml = `
        <div style="text-align:center; padding:15px 10px;">
          <div style="font-size:3rem; margin-bottom:10px;"></div>
          <h4 style="font-size:1.3rem; color:var(--bleu-nuit); margin-bottom:12px;">Espace Numérique de Travail (ENT) ENCEA</h4>
          <p style="color:var(--text-secondary); line-height:1.6; margin-bottom:20px;">
            Le portail en ligne pour les étudiants inscrits et le corps professoral ouvrira officiellement ses accès lors de la rentrée solennelle 2026-2027.
          </p>
          <div style="background:var(--or-light); border-left:4px solid var(--or-dore); padding:12px 16px; text-align:left; margin-bottom:25px; font-size:0.92rem;">
            <strong>Nouvel étudiant ou candidat ?</strong> Vous pouvez déposer votre dossier d'admission ou solliciter une bourse d'excellence en ligne dès aujourd'hui.
          </div>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdD6D-xojxqB0qYChm_WseroPWYDv8Hwrv59n6qkQO9-8q7mA/viewform" target="_blank" rel="noopener" class="btn-hero-primary">
              Déposer ma Candidature
            </a>
            <a href="https://wa.me/221787206666?text=Bonjour%20ENCEA,%20je%20souhaite%20contacter%20l'administration%20de%20l'%C3%A9cole." target="_blank" rel="noopener" class="btn-hero-secondary">
              Contacter l'Administration
            </a>
          </div>
        </div>
      `;
      openModal("Portail Académique ENCEA", bodyHtml);
    });
  });

  // Modales Mentions Légales & Confidentialité
  const legalLink = document.getElementById('linkMentionsLegales');
  if (legalLink) {
    legalLink.addEventListener('click', function (e) {
      e.preventDefault();
      const bodyHtml = `
        <div style="font-size:0.95rem; line-height:1.7; color:var(--text-secondary);">
          <h4 style="color:var(--bleu-nuit); margin-bottom:8px;">1. Informations Institutionnelles</h4>
          <p>
            <strong>Établissement :</strong> École des Nouveaux Chefs d'Entreprises Africains — ENCEA Business and Engineering School.<br>
            <strong>Statut :</strong> Établissement d'Enseignement Supérieur Privé sénégalais habilité par l'État.<br>
            <strong>Autorisation d'ouverture :</strong> N°RepSEN/Ensup-Priv/AP/n° 478-2026 (Expire le 30/08/2030).<br>
            <strong>Campus :</strong> Yoff, Apécsy 1, à côté du CEM, face à la plage BCAO, Dakar, Sénégal.<br>
            <strong>Contacts :</strong> +221 78 720 66 66 / +221 77 875 40 18 / contact@encea.sn
          </p>
          <h4 style="color:var(--bleu-nuit); margin-top:18px; margin-bottom:8px;">2. Propriété Intellectuelle & Protection des Données</h4>
          <p>
            L'ensemble des contenus, marques, logos et cursus présentés sur ce site sont la propriété exclusive de l'ENCEA.
            Les informations recueillies via les formulaires de candidature font l'objet d'un traitement destiné exclusivement à la commission d'admission de l'ENCEA conformément à la réglementation sénégalaise relative à la protection des données à caractère personnel.
          </p>
        </div>
      `;
      openModal("Mentions Légales & Réglementation", bodyHtml);
    });
  }

  // 6. FORMULAIRE DE RAPPEL & CONTACT RAPIDE
  const contactForm = document.getElementById('quickContactForm');
  const formSuccess = document.getElementById('formSuccessMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nom = document.getElementById('contactNom').value.trim();
      const telephone = document.getElementById('contactTel').value.trim();
      const filiere = document.getElementById('contactFiliere').value;
      const message = document.getElementById('contactMsg').value.trim();

      if (!nom || !telephone) {
        alert("Veuillez renseigner au moins votre nom et votre numéro de téléphone / WhatsApp.");
        return;
      }

      // Simulation d'envoi et affichage confirmation
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.innerHTML = `
          <div style="background:#eaf8ef; border:1px solid #27ae60; border-radius:8px; padding:24px; text-align:center;">
            <div style="font-size:2.5rem; margin-bottom:8px;"></div>
            <h4 style="color:#27ae60; font-size:1.3rem; margin-bottom:10px;">Merci ${nom} ! Votre demande a été reçue.</h4>
            <p style="color:#333; margin-bottom:18px;">
              Un conseiller d'orientation ENCEA vous contactera sous 24h au <strong>${telephone}</strong> pour répondre à vos questions sur <em>${filiere}</em>.
            </p>
            <a href="https://wa.me/221787206666?text=Bonjour,%20je%20viens%20de%20remplir%20le%20formulaire%20au%20nom%20de%20${encodeURIComponent(nom)}%20pour%20${encodeURIComponent(filiere)}." target="_blank" rel="noopener" class="btn-whatsapp-direct">
              Discuter avec l'Admissibilité sur WhatsApp
            </a>
          </div>
        `;
      }
    });
  }


  // LIGHTBOX / ZOOM PHOTO GALERIE CAMPUS & ÉVÉNEMENTS
  const galleryItems = document.querySelectorAll('.campus-gallery-item, .campus-featured-hero');
  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const imgSrc = this.getAttribute('data-img') || this.querySelector('img')?.src;
      const title = this.getAttribute('data-title') || this.querySelector('h4, h3')?.innerText || 'Cérémonie Officielle ENCEA';
      const desc = this.getAttribute('data-desc') || this.querySelector('p')?.innerText || '';
      
      const modalHtml = `
        <div style="text-align:center;">
          <div style="background:#021632; border-radius:6px; overflow:hidden; margin-bottom:16px; box-shadow:0 8px 24px rgba(2,22,50,0.25);">
            <img src="${imgSrc}" alt="${title}" style="width:100%; max-height:68vh; object-fit:contain; display:block; margin:0 auto;">
          </div>
          <h4 style="color:var(--bleu-nuit); font-size:1.15rem; font-weight:700; margin:0 0 8px;">${title}</h4>
          <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.55; max-width:680px; margin:0 auto;">${desc}</p>
        </div>
      `;
      openModal('Cérémonie Officielle & Promotion ENCEA', modalHtml);
    });
  });


  // FILTRAGE DYNAMIQUE DES PROGRAMMES (STYLE GROUPE IAM)
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const academicCards = document.querySelectorAll('.academic-card');
  const domainTitles = document.querySelectorAll('.domain-group-title');

  if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Update active class
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        if (filter === 'cert') {
          // Smooth scroll to certifications section
          const certSec = document.getElementById('certifications');
          if (certSec) {
            certSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          return;
        }

        // Filter academic cards
        academicCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        // Hide or show domain group titles according to filter
        if (domainTitles.length >= 2) {
          if (filter === 'all') {
            domainTitles[0].style.display = 'flex';
            domainTitles[1].style.display = 'flex';
          } else if (filter === 'mdi') {
            domainTitles[0].style.display = 'flex';
            domainTitles[1].style.display = 'none';
          } else if (filter === 'st') {
            domainTitles[0].style.display = 'none';
            domainTitles[1].style.display = 'flex';
          }
        }
      });
    });
  }


  // ==========================================================================
  // DYNAMISME, DÉFILEMENT & ANIMATIONS (INSPIRATION GROUPE IAM)
  // ==========================================================================

  // ===== 9. EFFET MACHINE À ÉCRIRE HERO (TYPEWRITER DYNAMIQUE) =====
  const typewriterEl = document.getElementById('typewriterWord');
  if (typewriterEl) {
    const words = [
      "Ingénierie Informatique & IA",
      "Bâtiment & Génie Civil",
      "Management des Affaires (MDI)",
      "Gouvernance & Droit Territorial",
      "Entrepreneuriat & Leadership"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    function typeEffect() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 85;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 2200; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400; // Pause before new word
      }

      setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
  }

  // ===== 10. GRAND CARROUSEL INTERACTIF DE PHOTOS ("LES IMAGES QUI BOUGENT") =====
  const sliderWrapper = document.getElementById('campusSliderWrapper');
  if (sliderWrapper) {
    const slides = sliderWrapper.querySelectorAll('.campus-slide');
    const prevBtn = document.getElementById('sliderPrevBtn');
    const nextBtn = document.getElementById('sliderNextBtn');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let sliderTimer = null;

    function goToSlide(index) {
      if (slides.length === 0) return;
      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoSlide() {
      stopAutoSlide();
      sliderTimer = setInterval(nextSlide, 4200);
    }

    function stopAutoSlide() {
      if (sliderTimer) clearInterval(sliderTimer);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoSlide();
      });
    });

    // Pause au survol
    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);

    // Support tactile (swipe smartphone)
    let touchStartX = 0;
    let touchEndX = 0;
    sliderWrapper.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    sliderWrapper.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 45) {
        nextSlide();
      } else if (touchEndX > touchStartX + 45) {
        prevSlide();
      }
      startAutoSlide();
    }, { passive: true });

    // Clic pour zoom Lightbox
    slides.forEach(slide => {
      slide.addEventListener('click', (e) => {
        // Do not trigger if clicking navigation buttons
        if (e.target.closest('.slider-control') || e.target.closest('.slider-dots')) return;
        const img = slide.getAttribute('data-img');
        const title = slide.getAttribute('data-title');
        const desc = slide.getAttribute('data-desc');
        if (img && typeof openLightbox === 'function') {
          openLightbox(img, title, desc);
        }
      });
    });

    startAutoSlide();
  }

  // ===== 11. LIGHTBOX SUR LE RUBAN DE PHOTOS DÉFILANT =====
  const photoStripItems = document.querySelectorAll('.photo-strip-item');
  photoStripItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      if (img && typeof openLightbox === 'function') {
        openLightbox(img, title, desc);
      }
    });
  });

  // ===== 12. CHIFFRES CLÉS ANIMÉS AU SCROLL =====
  const counters = document.querySelectorAll('.counter-number');
  if (counters.length > 0 && 'IntersectionObserver' in window) {
    let countersAnimated = false;
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 1600;
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeProgress * target);
              counter.textContent = currentVal;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target;
              }
            }

            requestAnimationFrame(updateCounter);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const statsBar = document.getElementById('stats');
    if (statsBar) {
      counterObserver.observe(statsBar);
    }
  }

  // ===== 13. ANIMATIONS AU SCROLL (SANS DISPARITION DE CONTENU) =====
  // Tous les elements restent 100% visibles et lisibles pour garantir la clarte du texte.

  // ===== 14. EXPÉRIENCE UI/UX : MODALE VIDÉO DU CAMPUS =====
  const videoModal = document.getElementById('videoModalOverlay');
  const videoElem = document.getElementById('campusOfficialVideo');
  const videoCloseBtn = document.getElementById('videoModalCloseBtn');
  const playHeroBtn = document.getElementById('btnPlayHeroVideo');
  const playCampusBtn = document.getElementById('btnPlayCampusVideo');

  function openVideoModal() {
    if (videoModal && videoElem) {
      videoModal.classList.add('visible');
      videoElem.currentTime = 0;
      videoElem.play().catch(() => {});
      document.body.style.overflow = 'hidden';
    }
  }

  function closeVideoModal() {
    if (videoModal && videoElem) {
      videoModal.classList.remove('visible');
      videoElem.pause();
      document.body.style.overflow = '';
    }
  }

  if (playHeroBtn) playHeroBtn.addEventListener('click', openVideoModal);
  if (playCampusBtn) playCampusBtn.addEventListener('click', openVideoModal);
  if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', function (e) {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // ===== 15. EXPÉRIENCE UI/UX : SIMULATEUR DE BOURSE D'ÉTUDES =====
  const simFiliere = document.getElementById('simFiliere');
  const simMention = document.getElementById('simMention');
  const simDiscountValue = document.getElementById('simDiscountValue');
  const simDiscountDesc = document.getElementById('simDiscountDesc');
  const simWhatsappBtn = document.getElementById('simWhatsappBtn');

  function updateSimulator() {
    if (!simMention || !simFiliere || !simDiscountValue || !simDiscountDesc || !simWhatsappBtn) return;
    const rate = simMention.value;
    const filiere = simFiliere.value;

    let discountText = "Bourse jusqu'à -50%";
    let descText = "Félicitations ! Votre profil vous rend éligible à la <strong>Bourse d'Excellence Académique (-50%)</strong> pour la formation en <strong>" + filiere + "</strong>.";

    if (rate === '40') {
      discountText = "Bourse jusqu'à -40%";
      descText = "Excellent ! Vous êtes éligible à la <strong>Bourse Sociale & Fraternité (-40%)</strong> pour la formation en <strong>" + filiere + "</strong>.";
    } else if (rate === '35') {
      discountText = "Bourse jusqu'à -35%";
      descText = "Votre dossier est pré-qualifié pour la <strong>Bourse Innovation & Soutien (-35%)</strong> en <strong>" + filiere + "</strong> sur examen des relevés de notes.";
    }

    simDiscountValue.textContent = discountText;
    simDiscountDesc.innerHTML = descText;

    const message = "Bonjour ENCEA, d'après le simulateur, je suis éligible à la Bourse -" + rate + "% pour la formation " + filiere + ". Voici mon relevé de notes :";
    simWhatsappBtn.href = "https://wa.me/221787206666?text=" + encodeURIComponent(message);
  }

  if (simFiliere) simFiliere.addEventListener('change', updateSimulator);
  if (simMention) simMention.addEventListener('change', updateSimulator);

  // ===== 16. EXPÉRIENCE UI/UX : 4 PILIERS DE LA VIE ÉTUDIANTE =====
  const pillarData = {
    ocean: {
      badge: "Environnement Serein",
      title: "Étudier au Bord de l'Atlantique : Sérénité et Concentration",
      text: "Situé à Yoff Apécsy 1, face à la plage BCAO, notre campus offre un cadre d'air pur et de calme apaisant. Loin du tumulte et des embouteillages du centre-ville, les étudiants profitent d'une brise marine vivifiante propice à la réflexion profonde, à la créativité et aux sessions d'études en plein air.",
      list: [
        "Campus aéré face au littoral atlantique de Yoff",
        "Salles d'études lumineuses et connectées haut débit",
        "Cadre sécurisé et reposant favorisant l'équilibre mental"
      ],
      img: "contenu/photo/promotion-plage-yoff-bcao.jpg"
    },
    mentorship: {
      badge: "Proximité & Accompagnement",
      title: "Mentorat 1-pour-1 : Un Enseignant Référent pour Chaque Étudiant",
      text: "À l'ENCEA, nous refusons l'anonymat des universités de masse. Nos classes à effectifs plafonnés (max 35 étudiants) permettent aux professeurs de connaître personnellement chaque étudiant, d'identifier ses points forts et de l'accompagner pas à pas dans sa montée en compétences.",
      list: [
        "Tutorat individualisé et entretiens d'orientation réguliers",
        "Disponibilité directe des enseignants en dehors des cours",
        "Suivi rigoureux de l'assiduité et des performances LMD"
      ],
      img: "contenu/photo/etudiants-campus-yoff-encea.jpg"
    },
    projects: {
      badge: "Pédagogie Active",
      title: "Projets Pratiques, Hackathons & Résolution de Cas Réels",
      text: "Dès la première année, les cours théoriques sont immédiatement mis en pratique. Les étudiants en informatique développent des applications avec IA, ceux de Génie Civil modélisent des structures BTP, et ceux de Management pilotent des études de marché et des business plans réels.",
      list: [
        "Hackathons et challenges d'innovation semestriels",
        "Visites régulières de chantiers, d'entreprises et de datacenters",
        "Stages pratiques obligatoires intégrés au cursus LMD"
      ],
      img: "contenu/photo/etudiantes-presentation-encea.jpg"
    },
    community: {
      badge: "Vie Associative & Éthique",
      title: "Esprit de Famille, Clubs Étudiants & Leadership Panafricain",
      text: "Rejoindre l'ENCEA, c'est entrer dans une communauté soudée où l'entraide entre promotions est la règle. Nos clubs (art oratoire, tech, sport, entrepreneuriat féminin) forgent l'esprit d'équipe, la prise de parole en public et le sens des responsabilités citoyennes.",
      list: [
        "Club d'Éloquence et de Débat Citoyen",
        "Comité Leadership Féminin et Mentorat des Nouvelles Arrivantes",
        "Réseau d'anciens et d'ambassadeurs solidaires à travers l'Afrique"
      ],
      img: "contenu/photo/esprit-communaute-encea.jpg"
    }
  };

  const pillarButtons = document.querySelectorAll('.pillar-nav-btn');
  const pillarBadge = document.getElementById('pillarBadge');
  const pillarTitle = document.getElementById('pillarTitle');
  const pillarText = document.getElementById('pillarText');
  const pillarList = document.getElementById('pillarList');
  const pillarImage = document.getElementById('pillarImage');

  pillarButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const key = this.getAttribute('data-pillar');
      const data = pillarData[key];
      if (!data) return;

      pillarButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      if (pillarBadge) pillarBadge.textContent = data.badge;
      if (pillarTitle) pillarTitle.textContent = data.title;
      if (pillarText) pillarText.textContent = data.text;
      if (pillarImage) {
        pillarImage.style.opacity = '0.3';
        setTimeout(() => {
          pillarImage.src = data.img;
          pillarImage.style.opacity = '1';
        }, 150);
      }
      if (pillarList) {
        pillarList.innerHTML = data.list.map(item => '<li>' + item + '</li>').join('');
      }
    });
  });

  // ===== 17. EXPÉRIENCE UI/UX : DOCK D'ASSISTANCE HUMAINE & PROXIMITÉ =====
  const humanTrigger = document.getElementById('humanDockTrigger');
  const humanPopover = document.getElementById('humanDockPopover');
  const humanCloseBtn = document.getElementById('hdpCloseBtn');
  const hdpSimLink = document.getElementById('hdpSimLink');
  const hdpContactLink = document.getElementById('hdpContactLink');

  if (humanTrigger && humanPopover) {
    humanTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      humanPopover.classList.toggle('visible');
    });

    if (humanCloseBtn) {
      humanCloseBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        humanPopover.classList.remove('visible');
      });
    }

    if (hdpSimLink) {
      hdpSimLink.addEventListener('click', function () {
        humanPopover.classList.remove('visible');
      });
    }

    if (hdpContactLink) {
      hdpContactLink.addEventListener('click', function () {
        humanPopover.classList.remove('visible');
      });
    }

    document.addEventListener('click', function (e) {
      if (!humanPopover.contains(e.target) && !humanTrigger.contains(e.target)) {
        humanPopover.classList.remove('visible');
      }
    });
  }

});
