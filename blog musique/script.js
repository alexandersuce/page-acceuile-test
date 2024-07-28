document.addEventListener('DOMContentLoaded', () => {
    const settingsIcon = document.getElementById('settings-icon');
    const settingsMenu = document.getElementById('settings-menu');
    const lightThemeButton = document.getElementById('light-theme');
    const darkThemeButton = document.getElementById('dark-theme');

    // Fonction pour ouvrir/fermer le menu des paramètres
    settingsIcon.addEventListener('click', () => {
        const isMenuVisible = settingsMenu.style.display === 'block';
        settingsMenu.style.display = isMenuVisible ? 'none' : 'block';
    });

    // Fonction pour changer le thème clair
    lightThemeButton.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    });

    // Fonction pour changer le thème sombre
    darkThemeButton.addEventListener('click', () => {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    });

    // Appliquer le thème sauvegardé lors du chargement de la page
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(`${savedTheme}-theme`);
    }
});
