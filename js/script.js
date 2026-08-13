window.dataLayer = window.dataLayer || [];
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const onScroll = () => navbar && navbar.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('active'));
  });
});
