document.addEventListener('DOMContentLoaded', function() {
    const contactIcons = document.querySelectorAll('.contact-item i');

    contactIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            icon.style.transform = 'scale(1.5)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 200); 
        });
    });
});
