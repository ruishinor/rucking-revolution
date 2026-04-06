function initLayoutInteractions() {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');

  if (button instanceof HTMLButtonElement && menu instanceof HTMLElement) {
    const hamburgerIcon = button.querySelector('.icon-hamburger');
    const closeIcon = button.querySelector('.icon-close');

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('hidden');

      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (!button.contains(event.target) && !menu.contains(event.target)) {
        button.setAttribute('aria-expanded', 'false');
        menu.classList.add('hidden');

        if (hamburgerIcon && closeIcon) {
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
        button.setAttribute('aria-expanded', 'false');
        menu.classList.add('hidden');
        button.focus();

        if (hamburgerIcon && closeIcon) {
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  }

  document.getElementById('cookie-prefs-btn')?.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('showCookieBanner'));
  });

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    const printTrigger = event.target.closest('[data-print-trigger]');
    if (printTrigger instanceof HTMLElement) {
      event.preventDefault();
      window.print();
    }
  });

  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) {
        return;
      }

      if (target.dataset.hideOnError === 'true') {
        target.classList.add('hidden');
      }

      if (
        target.dataset.imageFallback === 'next' &&
        target.nextElementSibling instanceof HTMLElement
      ) {
        target.classList.add('hidden');
        target.nextElementSibling.classList.remove('hidden');
        target.nextElementSibling.classList.add('flex');
      }
    },
    true,
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLayoutInteractions, { once: true });
} else {
  initLayoutInteractions();
}
