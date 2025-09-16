// Анимация фона — пульсация
window.addEventListener('load', () => {
  const bg = document.querySelector('.bg-gif');
  let offset = 0;

  function animate() {
    offset += 0.005;
    bg.style.opacity = 0.6 + Math.sin(offset) * 0.2;
    requestAnimationFrame(animate);
  }

  animate();
});