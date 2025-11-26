window.addEventListener('DOMContentLoaded', (event) => {
  // prêt à injecter du code dans le DOM
  const videoZoneElt = document.getElementById('devis-video');
  if (videoZoneElt) {
    const btn1 = createButtonElt('bouton1');
    const btn2 = createButtonElt('bouton2');
    btn2.classList.add('non-visible'); // le bouton 2 n'est pas visible au départ

    btn1.addEventListener('click', () => {
      // recherche : dummy video links for web development
      // source : https://gist.github.com/deepakpk009/99fd994da714996b296f11c3c371d5ee
      const videoUrl =
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
      const videoElt = document.createElement('video');
      videoElt.id = 'devis-video-player';
      videoElt.src = videoUrl;
      videoElt.controls = true;
      videoElt.autoplay = true;
      videoElt.classList.add('devis-video-player');
      videoZoneElt.appendChild(videoElt);
      toggleButton();
    });

    btn2.addEventListener('click', () => {
      const videoElt = document.getElementById('devis-video-player');
      if (videoElt) {
        videoElt.pause();
        videoElt.remove();
      }
      toggleButton();
    });

    function toggleButton() {
      // toggle() ajoute la classe si elle est absente, et l'enlève si elle est présente
      // source : https://developer.mozilla.org/fr/docs/Web/API/DOMTokenList/toggle
      btn1.classList.toggle('non-visible');
      btn2.classList.toggle('non-visible');
    }

    videoZoneElt.appendChild(btn1);
    videoZoneElt.appendChild(btn2);
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
