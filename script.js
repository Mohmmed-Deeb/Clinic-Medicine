
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
