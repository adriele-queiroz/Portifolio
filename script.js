document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-item');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajuste o valor conforme necessário
            behavior: 'smooth',
          });
        }
      });
    });
  });