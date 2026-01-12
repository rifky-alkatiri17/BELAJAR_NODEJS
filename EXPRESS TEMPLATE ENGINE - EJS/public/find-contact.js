const cari = document.querySelector('#cari');
const tbody = document.querySelector('tbody');

cari.addEventListener('keyup', (e) => {
  const keyword = e.target.value.trim();
  if (!keyword) return;

  fetch('/data/data-contacts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
});
