document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            this.classList.add('active');
            // Implement the functionality to switch between "Work", "Play", and "About" sections
        });
    });
});
