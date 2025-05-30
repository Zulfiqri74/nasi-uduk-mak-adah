const toggleBtn = document.getElementById('toggleDark');

toggleBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('popupMessage').style.display = 'flex';
    form.reset();

    setTimeout(closePopup, 3000);
});

function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
}