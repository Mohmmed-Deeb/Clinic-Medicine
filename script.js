
  const navbar = document.querySelector('.navbar');
  const hero = document.getElementById('hero');

  window.addEventListener('scroll', () => {
    const heroHeight = hero.offsetHeight;

    if (window.scrollY > heroHeight - 50) { // 50px قبل نهاية الهيرو
      navbar.style.transform = 'translateY(-100%)'; // يخفي Navbar للأعلى
    } else {
      navbar.style.transform = 'translateY(0)'; // يظهر Navbar
    }
  });





//   ======================= ازرار التوجيه ==========================

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ===========================
                         === ✅ MOBILE RESPONSIVE FIX
   بدون المساس بالكود الأساسي
=========================== */

@media (max-width: 768px) {

  /* ===== NAVBAR ===== */
  .navbar {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }

  .center-links {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .scan-btn {
    position: fixed;
    width: 35%;
    max-width: 220px;
    left: 1px;
    top: 120px;
  }

  /* ===== HERO ===== */
  .hero {
    padding: 0 25px;
    justify-content: center;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;

  }

  h1 {
    font-size: 2px;
  }

  .desc {
    font-size: 15px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn-main,
  .btn-secondary {
    width: 100%;
  }

  /* ===== DOCTORS SECTION ===== */
  .doctors-section {
    padding: 60px 20px;
  }

  .doctors-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }


  .doctor-photo {
    width: 200px;
    height: 200px;
    top: -35px;
  }

  /* ===== FOOTER ===== */
  .footer {
    padding: 40px 20px;
  }

  .footer-logo {
    font-size: 26px;
  }

  .footer-quote {
    font-size: 15px;
  }

  .footer-buttons a {
    display: block;
    margin: 10px auto;
    max-width: 220px;
  }

  /* ===== SCROLL BUTTONS ===== */
  .scroll-buttons {
    right: 10px;
    top: 31%;
  }

  .scrl-btn {
    padding: 8px 12px;
    font-size: 13px;
  }

}



