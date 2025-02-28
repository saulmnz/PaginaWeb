// Ajustar el tamaño de las imágenes al de la más pequeña
function ajustarTamanioImagenes() {
    const imagenes = document.querySelectorAll('.carrusel-item img');
    let minWidth = Infinity;
    let minHeight = Infinity;

    // Encontrar la imagen más pequeña
    imagenes.forEach(img => {
        if (img.naturalWidth < minWidth) minWidth = img.naturalWidth;
        if (img.naturalHeight < minHeight) minHeight = img.naturalHeight;
    });

    // Aplicar el tamaño de la imagen más pequeña a todas
    imagenes.forEach(img => {
        img.style.width = `${minWidth}px`;
        img.style.height = `${minHeight}px`;
    });
}

// Iniciar el carrusel automático
let currentIndex = 0;
const items = document.querySelectorAll('.carrusel-item');
const totalItems = items.length;

function showNext() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarrusel();
}

function updateCarrusel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carrusel-inner').style.transform = `translateX(${offset}%)`;
}

// Ajustar el tamaño de las imágenes al cargar la página
window.addEventListener('load', () => {
    ajustarTamanioImagenes();
    setInterval(showNext, 3000); // Cambiar automáticamente cada 3 segundos
});