// ====== 萤火虫粒子 ======
(() => {
  const canvas = document.getElementById('fireflies');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, flies = [];

  const COUNT = 35;

  function resize() {
    const hero = canvas.parentElement;
    w = canvas.width = hero.clientWidth;
    h = canvas.height = hero.clientHeight;
  }

  function spawn() {
    flies = [];
    for (let i = 0; i < COUNT; i++) {
      flies.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.85,
        r: 1.2 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.025,
      });
    }
  }

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    for (const f of flies) {
      f.x += f.vx + Math.sin(t * 0.0008 + f.phase) * 0.4;
      f.y += f.vy + Math.cos(t * 0.001 + f.phase) * 0.3;
      if (f.x < -10) f.x = w + 10;
      if (f.x > w + 10) f.x = -10;
      if (f.y < -10) f.y = h + 10;
      if (f.y > h + 10) f.y = -10;

      const alpha = 0.4 + Math.sin(t * f.speed + f.phase) * 0.5;
      const a = Math.max(0, alpha);

      // 光晕
      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 8);
      grad.addColorStop(0, `rgba(255, 235, 150, ${a * 0.9})`);
      grad.addColorStop(0.4, `rgba(255, 215, 112, ${a * 0.4})`);
      grad.addColorStop(1, 'rgba(255, 215, 112, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * 8, 0, Math.PI * 2);
      ctx.fill();

      // 核心点
      ctx.fillStyle = `rgba(255, 250, 200, ${a})`;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  resize();
  spawn();
  requestAnimationFrame(frame);
  window.addEventListener('resize', () => { resize(); spawn(); });
})();

// ====== 视差滚动（HD-2D 关键效果） ======
(() => {
  const sky = document.querySelector('.layer-sky');
  const mid = document.querySelector('.layer-mid');
  const front = document.querySelector('.layer-front');
  const title = document.querySelector('.hero-title');
  if (!sky) return;

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      sky.style.transform   = `translateY(${y * 0.15}px)`;
      mid.style.transform   = `translateY(${y * 0.35}px)`;
      front.style.transform = `translateY(${y * 0.6}px)`;
      if (title) title.style.transform = `translate(-50%, ${y * 0.4}px)`;
      if (title) title.style.opacity = Math.max(0, 1 - y / 500);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ====== 进入视图淡入 ======
(() => {
  const items = document.querySelectorAll('.section, .quest-item, .slot');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .8s ease, transform .8s ease';
    io.observe(el);
  });
})();

// ====== 对话框打字机 ======
(() => {
  const target = document.querySelector('.typed-text');
  if (!target) return;
  const fullText = target.textContent.trim();
  target.textContent = '';
  let i = 0;
  let started = false;

  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      const tick = () => {
        if (i < fullText.length) {
          target.textContent += fullText[i++];
          setTimeout(tick, 28);
        }
      };
      tick();
    }
  }, { threshold: 0.5 });
  io.observe(target);
})();
