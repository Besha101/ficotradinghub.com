// Mobile hamburger
const header = document.querySelector('.site-header');
const burger = document.querySelector('.hamburger');
burger?.addEventListener('click', ()=>{
  const isOpen = header.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Join form demo
document.querySelector('.join-form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = e.currentTarget.querySelector('input[type="email"]').value.trim();
  if(!email) return;
  alert(`Thanks for joining, ${email}!`);
  e.currentTarget.reset();
});

// Godina u footeru
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

function waitForPaypalLoaded(callback, retries = 10) {
  if (window.paypal && window.paypal.Buttons) {
    callback();
  } else if (retries > 0) {
    setTimeout(() => waitForPaypalLoaded(callback, retries - 1), 500);
  } else {
    alert("PayPal SDK nije učitan (provjeri skriptu ili adblocker).");
  }
}



/* === Auto ACTIVE link u glavnom meniju ===
   Ukloni ručni class="active" iz HTML-a; ovaj kod će ga postaviti za tekuću stranicu. */
(function setActiveNav(){
  const links = document.querySelectorAll('.main-nav a');
  if(!links.length) return;

  // Trenutna datoteka (index.html za root)
  const path = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(a => {
    const href = a.getAttribute('href');
    // Reset
    a.classList.remove('active');
    // Poredi samo ime fajla (npr. 'kontakt.html')
    if(href && href.split('/').pop() === path){
      a.classList.add('active');
    }
  });
})();
