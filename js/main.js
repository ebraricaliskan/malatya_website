document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// 2) Galeri modal
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.id = 'img-overlay';
    Object.assign(overlay.style, {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      cursor: 'pointer'
    });
    // Büyük resim
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.alt = img.alt;
    Object.assign(largeImg.style, {
      maxWidth: '90%',
      maxHeight: '90%',
      boxShadow: '0 0 10px #000'
    });
    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});


// 3) İletişim formu işlemleri
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();
  if (!name || !email) {
    alert('Lütfen adınız ve e-posta adresinizi girin.');
    return;
  }
  const thankYou = document.createElement('p');
  thankYou.textContent = `Teşekkürler, ${name}! Mesajınız alındı. En kısa sürede dönüş yapacağız.`;
  thankYou.style.marginTop = '16px';
  thankYou.style.color = '#fff';
  form.parentNode.insertBefore(thankYou, form.nextSibling);
  form.reset();
});
