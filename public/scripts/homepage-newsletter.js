function initHomepageNewsletterSignup() {
  const form = document.getElementById('homepage-newsletter-form');

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value) {
      form.reset();
      return;
    }

    const emailInput = form.querySelector('input[name="email"]');
    if (!(emailInput instanceof HTMLInputElement) || !emailInput.value) {
      return;
    }

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailPattern.test(emailInput.value)) {
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput.value.trim() }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      form.reset();
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.textContent = 'Subscribed!';
        setTimeout(() => {
          submitBtn.textContent = 'SUBSCRIBE';
          submitBtn.disabled = false;
        }, 3000);
      }
    } catch {
      if (submitBtn instanceof HTMLButtonElement) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SUBSCRIBE';
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomepageNewsletterSignup, { once: true });
} else {
  initHomepageNewsletterSignup();
}
