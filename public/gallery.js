window.addEventListener('DOMContentLoaded', () => {
  fetch('/media.json')
    .then(res => res.json())
    .then(media => {
      const gallery = document.getElementById('gallery');
      media.forEach(item => {
        const div = document.createElement('div');
        div.className = 'relative group overflow-hidden';
        const img = document.createElement('img');
        img.src = `/${item.src}`;
        img.alt = item.alt;
        img.className = 'w-full h-auto';
        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition';
        div.appendChild(img);
        div.appendChild(overlay);
        gallery.appendChild(div);
      });
    });
});