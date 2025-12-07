window.addEventListener('DOMContentLoaded', (event) => {
  // prêt à injecter du code dans le DOM
  const videoZoneElt = document.getElementById('devis-video');
  if (videoZoneElt) {

    // bloc texte + vidéo (colonne gauche)
    const leftBlock = videoZoneElt.closest('.devis-left-block');

    const btn1 = createButtonElt('Découvrez nos services');
    const btn2 = createButtonElt('Fermer la vidéo');
    btn2.classList.add('d-none'); // le bouton 2 n'est pas visible au départ (classe bootstrap)

    // container pour insérer la vidéo
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-placeholder');

    btn1.addEventListener('click', () => {
      const videoUrl =
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
      const videoElt = document.createElement('video');
      videoElt.id = 'devis-video-player';
      videoElt.src = videoUrl;
      videoElt.controls = true;
      videoElt.autoplay = true;
      videoElt.classList.add('devis-video-player');
      videoContainer.appendChild(videoElt);
      requestAnimationFrame(() => {
        videoElt.classList.add('d-block'); // classe bootstrap, déclenche l'animation CSS
      });

      toggleButton();

      // on ajoute la classe qui anime le bloc texte/boutons
      if (leftBlock) {
        leftBlock.classList.add('video-open');
      }
    });

    btn2.addEventListener('click', () => {
      const videoElt = document.getElementById('devis-video-player');
    
      if (videoElt) {
        videoElt.pause();
        videoElt.classList.remove('d-block');
        // Suppression immédiate → le conteneur se vide, donc grâce à :empty il se ferme
        videoElt.remove();
      }

      if (leftBlock) {
        leftBlock.classList.remove('video-open');
      }

      // on échange les boutons tout de suite
      toggleButton();
    });

    function toggleButton() {
      btn1.classList.toggle('d-none');
      btn2.classList.toggle('d-none');
    }

    // insertion des éléments dans la zone réservée
    videoZoneElt.appendChild(btn1);
    videoZoneElt.appendChild(btn2);
    videoZoneElt.appendChild(videoContainer);
  }
});

/**
 * Fonctions auxiliaires utilitaires
 */

/**
 * Créer un bouton
 * @param {string} name - Le texte du bouton
 * @param {string} className - La classe CSS (par défaut 'devis-video-button')
 * @returns {HTMLButtonElement} - L'élément bouton créé
 */
function createButtonElt(name, className = 'devis-video-button') {
  const btn = document.createElement('button');
  btn.textContent = name;
  btn.type = 'button';
  btn.classList.add(className);
  return btn;
}
