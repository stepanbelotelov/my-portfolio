// Light/Dark mode logic

const themeBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('portfolio-theme');

const changeTheme = () => {
    themeBtn.classList.add('spinning');

    setTimeout(() => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeBtn.innerText = '🌙';
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            themeBtn.innerText = '☀️';
            localStorage.setItem('portfolio-theme', 'dark');
        }

        themeBtn.classList.remove('spinning');
    }, 200);
}



// Main Script
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');

    if (themeBtn) {
        themeBtn.innerText = '🌙';
    }
}

if (themeBtn) {
    themeBtn.addEventListener('click', changeTheme);
}