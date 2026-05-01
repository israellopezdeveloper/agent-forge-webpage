document.getElementById('year').textContent = new Date().getFullYear();

// Subtle parallax glow that follows the cursor on desktop
const glow = document.querySelector('.bg-glow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    glow.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// First-visit language auto-redirect.
// If the user lands on the English root and their browser prefers Spanish,
// send them to /es/. Only runs once (remembered in localStorage), and any
// click on the EN/ES switcher locks the choice.
(function () {
  try {
    const path = location.pathname.replace(/\/+$/, '');
    const isEnglishRoot = !path.includes('/es/');
    const stored = localStorage.getItem('af-lang');

    if (!stored && isEnglishRoot) {
      const preferSpanish = (navigator.languages || [navigator.language || ''])
        .some(l => l.toLowerCase().startsWith('es'));
      if (preferSpanish) {
        const file = (path.split('/').pop() || 'index.html');
        location.replace('es/' + file);
        return;
      }
    }

    document.querySelectorAll('.lang-switch').forEach(el => {
      el.addEventListener('click', () => {
        localStorage.setItem('af-lang', el.textContent.trim().toLowerCase());
      });
    });
  } catch (_) {
    /* localStorage unavailable — ignore */
  }
})();
