class SearchResult {
  constructor(element) {
    this.element = element;
    this.compareCallback = null;
    this.lastQuery = '';
  }

  onCompare(cb) {
    this.compareCallback = cb;
  }

  // Step 7: wrap matched substring in a highlight span
  highlight(text, query) {
    if (!text || !query) return text || '';
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${safe})`, 'ig');
    return String(text).replace(re, '<span class="highlight">$1</span>');
  }

  showLoading() {
    this.element.innerHTML = `<div class="loader">Searching…</div>`;
  }

  renderResults(companies, query = '') {
    this.lastQuery = query;

    if (companies === null) { this.showLoading(); return; }
    if (!companies.length) {
      this.element.innerHTML = `<div class="loader">No results found.</div>`;
      return;
    }

    this.element.innerHTML = companies.map((c, i) => {
      const change = c.changesPercentage ?? 0;
      const cls = change >= 0 ? 'pos' : 'neg';
      const sign = change >= 0 ? '+' : '';
      const img = c.image
        ? `<img src="${c.image}" alt="${c.symbol}" onerror="this.style.visibility='hidden'"/>`
        : `<div class="result__img-empty"></div>`;
      return `
        <div class="result" data-index="${i}">
          ${img}
          <a class="result__main" href="company.html?symbol=${encodeURIComponent(c.symbol)}">
            <div class="result__name">${this.highlight(c.name, query)}</div>
            <div class="result__sym">${this.highlight(c.symbol, query)}</div>
          </a>
          <span class="${cls}">${sign}${Number(change).toFixed(2)}%</span>
          <button class="btn btn--ghost compare-btn" data-index="${i}">Compare</button>
        </div>`;
    }).join('');

    // Step 8: compare button callback with the company object
    this.element.querySelectorAll('.compare-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const company = companies[Number(btn.dataset.index)];
        console.log('Compare clicked:', company);
        if (this.compareCallback) this.compareCallback(company);
      });
    });
  }
}