document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeSwitch.checked = true;
        }
    }

    if (currentTheme) {
        setTheme(currentTheme);
    }

    themeSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});
