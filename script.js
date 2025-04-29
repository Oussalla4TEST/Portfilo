// Fonction pour afficher/masquer les détails des projets
function afficherDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle('active');
    
    // Changer le texte du bouton
    const btn = details.previousElementSibling;
    if (details.classList.contains('active')) {
        btn.textContent = 'Voir moins';
    } else {
        btn.textContent = 'Voir plus';
    }
}

// Animation de la navigation lors du défilement
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(93, 155, 126, 0.95)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.backgroundColor = 'var(--vert-fonce)';
        navbar.style.padding = '1rem 0';
    }
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupération des valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Ici, vous pourriez ajouter une logique pour envoyer le formulaire
    // Par exemple avec fetch() vers un serveur backend
    
    // Simulation d'envoi réussi
    alert(Merci ${name} ! Votre message a été envoyé. Je vous répondrai à ${email} dès que possible.);
    
    // Réinitialisation du formulaire
    this.reset();
});

// Animation douce lors du clic sur les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});