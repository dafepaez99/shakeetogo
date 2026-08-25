function configurarCambioImagen(selectorContenedor, selectorImagen) {

    const elementos = document.querySelectorAll(selectorContenedor);

    elementos.forEach(container => {

        const image = container.querySelector(selectorImagen);

        container.addEventListener('click', () => {

            const original = image.dataset.original;
            const hover = image.dataset.hover;

            if (image.src.includes(original)) {
                image.src = hover;
                container.classList.add('is-active');
            } else {
                image.src = original;
                container.classList.remove('is-active');
            }

        });

    });
}


// Primer caso: Amino X
configurarCambioImagen('.drink-container', '.drink');