function initNewsletterSignup(formId, successMessageId) {
  const form = document.getElementById(formId);
  const successMessage = successMessageId ? document.getElementById(successMessageId) : null;

  if (!(form instanceof HTMLFormElement)) {
    return false;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) {
      form.reset();
      return;
    }

    const emailInput = form.querySelector('input[name="email"]');
    if (!(emailInput instanceof HTMLInputElement) || !emailInput.value.trim()) {
      return;
    }

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn instanceof HTMLButtonElement ? submitBtn.textContent : '';
    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
    }

    const nameInput = form.querySelector('input[name="name"]');
    const name = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : '';
    const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked')).map(
      (cb) => cb.value
    );

    const data = {
      email: emailInput.value.trim(),
      ...(name ? { name } : {}),
      ...(interests.length > 0 ? { interests } : {}),
    };

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || 'Subscription failed');
      }

      form.reset();
      if (successMessage instanceof HTMLElement) {
        successMessage.classList.remove('hidden');
      }
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.textContent = 'Subscribed!';
        setTimeout(() => {
          submitBtn.textContent = originalBtnText || 'Subscribe';
          submitBtn.disabled = false;
        }, 3000);
      }
    } catch {
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText || 'Subscribe';
      }
    }
  });

  return true;
}

function initAllNewsletterSignups() {
  const footerInitialized = initNewsletterSignup('footer-newsletter-form');
  if (!footerInitialized) {
    initNewsletterSignup('newsletter-form', 'success-message');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllNewsletterSignups, { once: true });
} else {
  initAllNewsletterSignups();
}
