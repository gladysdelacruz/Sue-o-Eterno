const toggle = document.querySelector('.toggle');

const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    
})