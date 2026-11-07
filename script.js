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
            <div style="font-size:2.5rem; margin-bottom:8px;">✅</div>
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

});
