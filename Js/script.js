// Menu Button Automatic
const tombol = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-link');

tombol.addEventListener('click', () => {
  menu.classList.toggle('aktif'); // Tambah/hapus class "aktif"
});
tombol.addEventListener('mouseenter', () => {
  menu.classList.toggle('aktif'); // Tambah/hapus class "aktif"
  tombol.classList.toggle('aktif'); // Tambah/hapus class "aktif"
});
menu.addEventListener('mouseleave', () => {
  menu.classList.toggle('aktif'); // Tambah/hapus class "aktif"
  tombol.classList.toggle('aktif'); // Tambah/hapus class "aktif"
});


// DarkTheme Button
const moonBtn = document.querySelector('.moon-btn');
const sunBtn = document.querySelector('.sun-btn');
const bodyTheme = document.querySelector('body')

moonBtn.addEventListener('click', () => {
  sunBtn.classList.add('aktif'); // Tambah/hapus class "aktif"
  sunBtn.classList.remove('deaktif'); // Tambah/hapus class "aktif"
  moonBtn.classList.add('deaktif'); // Tambah/hapus class "aktif"
  moonBtn.classList.remove('aktif'); // Tambah/hapus class "aktif"
  bodyTheme.classList.add('dark-mode'); // Tambah/hapus class "aktif"
  bodyTheme.classList.remove('light-mode'); // Tambah/hapus class "aktif"
});
sunBtn.addEventListener('click', () => {
  sunBtn.classList.add('deaktif'); // Tambah/hapus class "aktif"
  sunBtn.classList.remove('aktif'); // Tambah/hapus class "aktif"
  moonBtn.classList.add('aktif'); // Tambah/hapus class "aktif"
  moonBtn.classList.remove('deaktif'); // Tambah/hapus class "aktif"
  bodyTheme.classList.add('light-mode'); // Tambah/hapus class "aktif"
  bodyTheme.classList.remove('dark-mode'); // Tambah/hapus class "aktif"
});




// ComingSoon Announcement
const comingSoonBtn = document.getElementById('whatsappbtn');
const comingSoonCard = document.getElementById('comingSoonCard');
const progressBar = document.querySelector('.progress-bar');

comingSoonBtn.addEventListener('click', () => { // Munculkan kartu
comingSoonCard.classList.add('active');
progressBar.style.width = '100%';
setTimeout(() => { // Auto close setelah 3 detik
    comingSoonCard.classList.remove('active');
    progressBar.style.width = '0%';
}, 3000);
});