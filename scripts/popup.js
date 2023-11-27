/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score. 
 */
function afficherPopupBackground() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
}

function cacherPopupBackground() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
}

function afficherPopupPartage(){
    afficherPopupBackground()
    document.getElementById(`popupPartage`).style.display = 'block'
}

function cacherPopupPartage(){
    cacherPopupBackground()
    document.getElementById(`popupPartage`).style.display = 'none'
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function closeModalEndGame() {
    document.getElementById('endGameModal').style.display = 'none';
    cacherPopupBackground()
}

function openModalEndGame() {
    document.getElementById('endGameModal').style.display = 'block';
}

function initEndGameModal(){
    afficherPopupBackground()
    openModalEndGame()
}

function initAddEventListenerPopup() {
    endGameModal = document.getElementById('endGameModal')
    btnPartage = document.querySelector(".partagerBtn")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartage.addEventListener("click", () => {
        afficherPopupPartage()
    })

    // On écoute le click sur la div "popupBackground"
    popupBackground.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        console.log("click back", event.target)
        if (event.target === popupBackground ) {
            console.log("here", event.target)
            closeModalEndGame()
            cacherPopupPartage()
        }
    })
}