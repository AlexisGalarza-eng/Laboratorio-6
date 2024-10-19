var enlaces = document.querySelectorAll('.navbar a');

enlaces.forEach(function(enlace) {
    if (enlace.href === window.location.href) {
        enlace.classList.add('active');
    }
});