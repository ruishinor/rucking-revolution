function initAarSubmit() {
  const form = document.getElementById('aar-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const errorText = document.getElementById('error-text');
  const submitAnotherBtn = document.getElementById('submit-another-btn');
  const turnstileContainer = document.querySelector('.cf-turnstile');

  if (!(form instanceof HTMLFormElement) || !(submitBtn instanceof HTMLButtonElement)) {
    return;
  }

  if (submitAnotherBtn instanceof HTMLButtonElement) {
    submitAnotherBtn.addEventListener('click', () => {
      successMessage?.classList.add('hidden');
      errorMessage?.classList.add('hidden');
      form.reset();
      form.classList.remove('hidden');
      if (window.turnstile && turnstileContainer instanceof HTMLElement) {
        window.turnstile.reset();
      }
    });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    errorMessage?.classList.add('hidden');

    if (turnstileContainer instanceof HTMLElement) {
      const turnstileToken = form.querySelector('[name="cf-turnstile-response"]');
      if (!(turnstileToken instanceof HTMLInputElement) || !turnstileToken.value.trim()) {
        if (errorText) {
          errorText.textContent = 'Complete the spam verification challenge before submitting.';
        }
        errorMessage?.classList.remove('hidden');
        return;
      }
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await response.json().catch(() => ({
        success: false,
        error: 'Unexpected response from the submission service.',
      }));

      if (response.ok && result.success) {
        form.classList.add('hidden');
        successMessage?.classList.remove('hidden');
      } else {
        if (errorText && typeof result.error === 'string') {
          errorText.textContent = result.error;
        }
        errorMessage?.classList.remove('hidden');
      }
    } catch {
      errorMessage?.classList.remove('hidden');
    } finally {
      if (window.turnstile && turnstileContainer instanceof HTMLElement) {
        window.turnstile.reset();
      }
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit AAR';
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAarSubmit, { once: true });
} else {
  initAarSubmit();
}
