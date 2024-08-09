window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  // Elimina la clase is-active después de que la transición se haya completado
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
      // Si el enlace es un lightbox, permitir el comportamiento por defecto
      if (anchor.classList.contains('popupBox')) {
        return;
      }

      e.preventDefault();
      const target = e.currentTarget.href;
      const targetAttr = e.currentTarget.getAttribute('target');

      if (targetAttr === '_blank') {
        // Abrir en nueva pestaña
        window.open(target, '_blank');
      } else {
        // Aplicar transición
        transition_el.classList.add('is-active');

        // Redirigir después de la duración de la transición
        setTimeout(() => {
          window.location.href = target;
        }, 500); // Debe coincidir con la duración de la transición
      }
    });
  });
}
