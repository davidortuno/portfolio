document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.querySelector('.cursor');
  let posX = 0;
  let posY = 0;

  document.addEventListener('mousemove', (e) => {
      posX = e.clientX;
      posY = e.clientY;
  });

  function updateCursor() {
      cursor.style.left = posX + 'px';
      cursor.style.top = posY + 'px';
      requestAnimationFrame(updateCursor);
  }

  requestAnimationFrame(updateCursor);


  function agregarEventosHover(elementos) {
      elementos.forEach(el => {
          el.addEventListener('mouseenter', () => cursor.classList.add('active'));
          el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
      });
  }

  // Inicializar eventos para elementos estáticos
  const elementosIniciales = document.querySelectorAll('a, button, input, .slider, .progress-wrap');
  agregarEventosHover(elementosIniciales);

  // Observar cambios en el DOM para elementos dinámicos (SimpleLightbox u otros)
  const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
              if (node instanceof Element) {
                  const nuevosElementos = node.querySelectorAll('a, button');
                  agregarEventosHover(nuevosElementos);

                  if (node.matches('a, button')) {
                      agregarEventosHover([node]);
                  }
              }
          });
      });
  });

  const targetNode = document.body;
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);

});