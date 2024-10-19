const toggleThemeButton = document.getElementById('toggleTheme');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        toggleThemeButton.textContent = 'Cambiar a Modo Claro';
    } else {
        toggleThemeButton.textContent = 'Cambiar a Modo Oscuro';
    }
});