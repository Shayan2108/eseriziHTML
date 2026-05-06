/* ── MATRIX RAIN ── */
(function () {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  const chars = 'アイウエオカキクケコ01ABCDEF<>[]{}';
  let drops = [];
  function initDrops() {
    const cols = Math.floor(canvas.width / 18);
    drops = Array(cols).fill(1);
  }
  initDrops();
  window.addEventListener('resize', initDrops);
  function draw() {
    ctx.fillStyle = 'rgba(5,10,5,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff88';
    ctx.font = '13px Share Tech Mono, monospace';
    drops.forEach((y, i) => {
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 18, y * 18);
      if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }
  setInterval(draw, 60);
})();

/* ── NAVBAR HIDE ON SCROLL ── */
(function () {
  const header = document.querySelector('header');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('nav-hidden', y > lastY && y > 80);
    lastY = y;
  });

  /* active link */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();
