// Light/Dark mode logic

const themeBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('portfolio-theme');
const codeBlock = document.getElementById('typing-code');

if (codeBlock) {
    const htmlString = codeBlock.innerHTML;

    codeBlock.innerHTML = '';

    let i = 0;
    let isTag = false;
    let currentHTML = '';

   const typeWriter = () => {
        if (i < htmlString.length) {
            let char = htmlString.charAt(i);
            currentHTML += char;
            codeBlock.innerHTML = currentHTML;

            if (char === '<') isTag = true;
            if (char === '>') isTag = false;

            let delay;
            if (isTag || char === ' ' || char === '\n') {
                delay = 0;
            } else {
                delay = 25;
            }

            i++;
            setTimeout(typeWriter, delay);
        }
    };
    
    setTimeout(typeWriter, 500);
}

const changeTheme = () => {
    themeBtn.classList.add('spinning');

    setTimeout(applyTheme, 170);
}



const applyTheme = () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeBtn.innerText = '🌙';
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        themeBtn.innerText = '☀️';
        localStorage.setItem('portfolio-theme', 'dark');
    }

    themeBtn.classList.remove('spinning');
}



// Main Script
if (currentTheme === 'light' && themeBtn) {
    themeBtn.innerText = '🌙';
}

if (themeBtn) {
    themeBtn.addEventListener('click', changeTheme);
}

window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});