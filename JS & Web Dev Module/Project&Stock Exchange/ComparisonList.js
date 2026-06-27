class ComparisonList {
  constructor(element, max = 3) {
    this.element = element;
    this.max = max;
    this.companies = [];
    this.render();
  }

  add(company) {
    if (!company || !company.symbol) return;
    if (this.companies.some(c => c.symbol === company.symbol)) return;
    if (this.companies.length >= this.max) {
      alert(`You can compare up to ${this.max} companies.`);
      return;
    }
    this.companies.push(company);
    this.render();
  }

  remove(symbol) {
    this.companies = this.companies.filter(c => c.symbol !== symbol);
    this.render();
  }

  render() {
    const chips = this.companies.map(c => `
      <span class="compare-chip">
        ${c.symbol}
        <button data-symbol="${c.symbol}" title="Remove">×</button>
      </span>`).join('');

    this.element.classList.add('compare-bar');
    this.element.innerHTML = `
      ${chips || '<span class="result__sym">Add companies to compare…</span>'}
      <span class="compare-bar__spacer"></span>
      <button class="btn" id="goCompare" ${this.companies.length < 2 ? 'disabled' : ''}>Compare</button>`;

    this.element.querySelectorAll('.compare-chip button').forEach(btn => {
      btn.addEventListener('click', () => this.remove(btn.dataset.symbol));
    });

    const goBtn = this.element.querySelector('#goCompare');
    goBtn.addEventListener('click', () => {
      if (this.companies.length < 2) return;
      const symbols = this.companies.map(c => c.symbol).join(',');
      location.href = `compare.html?symbols=${encodeURIComponent(symbols)}`;
    });
  }
}