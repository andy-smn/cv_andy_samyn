// Récupère l'élément de la modal
const modal = document.getElementById('modal-contact');
// Récupère le bouton de fermeture
const closeBtn = modal.querySelector('.close');

// Récupère le lien "Contact" par l'ID que vous venez d'ajouter
const contactLink = document.getElementById('contact-link');

// Quand on clique sur "Contact", on affiche la modal
contactLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'flex';
});

// Quand on clique sur la croix, on ferme la modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Quand on clique en dehors du contenu, on ferme la modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
