const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});