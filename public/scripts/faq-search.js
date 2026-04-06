function initFaqSearch() {
  const searchInput = document.getElementById('faq-search');
  const resultsCount = document.getElementById('search-results-count');
  const sections = Array.from(document.querySelectorAll('.faq-section'));
  const minChars = 4;

  if (!(searchInput instanceof HTMLInputElement)) {
    return;
  }

  searchInput.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    const query = target.value.toLowerCase().trim();

    if (query.length < minChars) {
      sections.forEach((section) => {
        section.style.display = 'block';
      });
      resultsCount?.classList.add('hidden');
      return;
    }

    let matchCount = 0;
    sections.forEach((section) => {
      const heading = section.querySelector('h2')?.textContent?.toLowerCase() || '';
      const questions = Array.from(section.querySelectorAll('h3'));
      const answers = Array.from(section.querySelectorAll('p, li'));

      const sectionHasMatch =
        heading.includes(query) ||
        questions.some((question) => question.textContent?.toLowerCase().includes(query)) ||
        answers.some((answer) => answer.textContent?.toLowerCase().includes(query));

      if (sectionHasMatch) {
        section.style.display = 'block';
        matchCount += 1;
      } else {
        section.style.display = 'none';
      }
    });

    if (resultsCount) {
      resultsCount.textContent =
        matchCount > 0
          ? `Found ${matchCount} section${matchCount !== 1 ? 's' : ''} matching "${query}"`
          : `No results found for "${query}"`;
      resultsCount.classList.remove('hidden');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaqSearch, { once: true });
} else {
  initFaqSearch();
}
