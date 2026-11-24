(() => {
  const $ = s => document.querySelector(s);
  const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12 });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));

  // Contact-based enquiry: opens the visitor's SMS app. Nothing is sent or stored by this site.
  $('#en-go').addEventListener('click', () => {
    const name = $('#en-name').value.trim() || '[student name]';
    const body = `Hello Arvind Tutorials, I would like admission/free demo details for ${name}, ${$('#en-class').value}.`;
    $('#en-msg').textContent = 'Opening your messaging app… if nothing happens, call 9892516908 instead.';
    location.href = 'sms:+919892516908?body=' + encodeURIComponent(body);
  });
})();
