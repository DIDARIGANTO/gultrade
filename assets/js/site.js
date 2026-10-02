/* GULTRADE — лёгкая интерактивность: прогресс прокрутки, параллакс коллажа, счётчики */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Полоса прогресса прокрутки
  var bar = document.createElement('div');
  bar.className = 'gt-progress';
  document.body.appendChild(bar);
  var ticking = false;
  function progress() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(progress); }
  }, { passive: true });
  progress();

  // Параллакс фото-коллажа в герое (только мышь, без «меньше движения»)
  var hero = document.querySelector('.gt-hero--split');
  var collage = document.querySelector('.gt-collage');
  if (hero && collage && !reduce && window.matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      collage.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      collage.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    hero.addEventListener('mouseleave', function () {
      collage.style.setProperty('--mx', 0);
      collage.style.setProperty('--my', 0);
    });
  }

  // Счётчики: плавный набор числа при появлении
  var counters = document.querySelectorAll('.gt-counter');
  if (counters.length && 'IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, raw = el.textContent.trim();
        var m = raw.match(/^([\d\s ]+)(.*)$/);
        if (!m) return;
        var target = parseInt(m[1].replace(/[\s ]/g, ''), 10), suffix = m[2];
        if (!target) return;
        var start = null, dur = 1500;
        function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3)))) + suffix;
          if (p < 1) requestAnimationFrame(step); else el.textContent = raw;
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { io.observe(c); });
  }
})();
