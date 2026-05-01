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
