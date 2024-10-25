document.addEventListener('DOMContentLoaded', function () {
    // Oculta todas las secciones al cargar la página
    const sections = document.querySelectorAll('.section-hidden');
    sections.forEach(section => section.style.display = 'none');

    // Función para mostrar solo la sección correspondiente al hacer clic
    const menuLinks = document.querySelectorAll('nav ul li .dropdown-content li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Oculta todas las secciones nuevamente
            sections.forEach(section => section.style.display = 'none');

            // Muestra la sección correspondiente
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).style.display = 'block';
        });
    });
});
