document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', function(e) {
                e.stopPropagation();
                document.body.classList.toggle('sidebar-open');
            });
        }
    });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.sidebar') && !e.target.closest('.hamburger') && document.body.classList.contains('sidebar-open')) {
            document.body.classList.remove('sidebar-open');
        }
    });