// gallery.js

function upDate(previewPic) {
    // Cambiar la url de la imagen de fondo del div con el id "image"
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Cambiar el texto del div con el id "image" al texto alternativo de la imagen
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Restaurar la url de la imagen de fondo del div con el id "image" al valor original
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    
    // Restaurar el texto del div con el id "image" al texto original
    imageDiv.innerHTML = "Hover over an image below to display here.";
}