document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('font') === 'vujahday') {
        document.body.classList.add('custom-font');
        console.log('Custom font is applied.');
    } else {
        console.log('Custom font is not applied.');
    }

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        console.log('Dark mode is enabled.');
    } else {
        console.log('Dark mode is not enabled.');
    }
});

function toggleFont() {
    console.log('Toggle font function called.');
    document.body.classList.toggle('custom-font');

    if (document.body.classList.contains('custom-font')) {
        localStorage.setItem('font', 'vujahday');
        console.log('Font switched to Vujahday Script');
    } else {
        localStorage.removeItem('font');
        console.log('Font reset to default');
    }
}

function toggleDarkMode() {
    console.log('Toggle dark mode function called.');
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        console.log('Dark mode is enabled.');
    } else {
        localStorage.removeItem('dark-mode');
        console.log('Dark mode is disabled.');
    }
}

// Example button event listeners (assuming you have buttons to toggle font and dark mode)
document.getElementById('font-toggle-btn').addEventListener('click', toggleFont);
document.getElementById('dark-mode-toggle-btn').addEventListener('click', toggleDarkMode);
