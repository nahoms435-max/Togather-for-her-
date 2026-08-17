const menuToggle = document.getElementById('menuToggle');
const teamModal = document.getElementById('teamModal');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  teamModal.classList.toggle('active');
  if (teamModal.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});