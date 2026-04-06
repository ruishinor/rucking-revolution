const CONSENT_KEY = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;
const CONSENT_TIMESTAMP_KEY = 'cookie_consent_timestamp';

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  const secure = window.location.protocol === 'https:' ? ';Secure' : '';
  document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/;SameSite=Strict' + secure;
}

function getCookie(name) {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
}

function getCookieConsent() {
  return getCookie(CONSENT_KEY);
}

function setCookieConsent(value) {
  setCookie(CONSENT_KEY, value, CONSENT_EXPIRY_DAYS);
  setCookie(CONSENT_TIMESTAMP_KEY, new Date().toISOString(), CONSENT_EXPIRY_DAYS);
}

function hideBanner() {
  const banner = document.getElementById('cookie-consent');
  if (banner) {
    banner.classList.add('hidden');
    banner.setAttribute('aria-hidden', 'true');
  }
}

function showBanner() {
  const banner = document.getElementById('cookie-consent');
  if (banner) {
    banner.classList.remove('hidden');
    banner.setAttribute('aria-hidden', 'false');
  }
}

function isConsentExpired() {
  const timestamp = getCookie(CONSENT_TIMESTAMP_KEY);
  if (!timestamp) {
    return true;
  }

  const consentDate = new Date(timestamp);
  const now = new Date();
  const expiryDate = new Date(consentDate.getTime() + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);

  return now > expiryDate;
}

function blockNonEssentialCookies() {
  const trackingPatterns = ['_ga', '_gid', '_gat', '_fbp', '_fb', '_pixel', 'analytics', 'tracking', 'hotjar', '_hj', 'mixpanel', '__utm', 'gclid', 'fbclid', 'tt', '_tt', 'snaptr'];

  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    const isTracking = trackingPatterns.some(pattern => name.includes(pattern));
    if (isTracking) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=' + window.location.hostname;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  });
}

function initializeAnalytics() {
  // Reserved for analytics bootstrapping when consented.
}

function getConsentRecord() {
  return {
    consent: getCookieConsent(),
    timestamp: getCookie(CONSENT_TIMESTAMP_KEY),
    expired: isConsentExpired(),
  };
}

window.addEventListener('showCookieBanner', () => {
  showBanner();
});

function initCookieConsent() {
  const consent = getCookieConsent();

  if (!consent || isConsentExpired()) {
    showBanner();
  } else if (consent === 'accepted') {
    initializeAnalytics();
  } else if (consent === 'rejected') {
    blockNonEssentialCookies();
  }

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    setCookieConsent('accepted');
    hideBanner();
    initializeAnalytics();
  });

  document.getElementById('cookie-reject')?.addEventListener('click', () => {
    setCookieConsent('rejected');
    blockNonEssentialCookies();
    hideBanner();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieConsent, { once: true });
} else {
  initCookieConsent();
}
