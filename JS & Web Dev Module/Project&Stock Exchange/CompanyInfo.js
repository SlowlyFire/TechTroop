class CompanyInfo {
    constructor(element, symbol) {
        this.element = element;
        this.symbol = symbol;
        this.profile = null;
    }

    async load() {
        this.element.innerHTML = `<div class="loader">Loading company…</div>`;
        if (!this.symbol) {
            this.element.innerHTML = `<div class="loader">No symbol provided.</div>`;
            return;
        }
        const res = await fetch(`${BASE_URL}/profile?symbol=${this.symbol}&apikey=${API_KEY}`);
        const data = await res.json();
        this.profile = Array.isArray(data) ? data[0] : data;
        this.render();
    }

    render() {
        const p = this.profile;
        if (!p) {
            this.element.innerHTML = `<div class="loader">Company not found.</div>`;
            return;
        }
        const change = p.changes ?? 0;
        const pct = p.changePercentage ?? 0;
        const cls = change >= 0 ? 'pos' : 'neg';
        const sign = change >= 0 ? '+' : '';

        this.element.innerHTML = `
      <div class="company">
        <img src="${p.image}" alt="${p.symbol}" onerror="this.style.visibility='hidden'"/>
        <div style="flex:1; min-width:240px;">
          <h2>${p.companyName} (${p.symbol})</h2>
          <div class="company__price">$${p.price}
            <span class="${cls}">${sign}${Number(pct).toFixed(2)}%</span>
          </div>
          <p style="margin:12px 0;">${p.description || ''}</p>
          ${p.website ? `<a class="btn btn--ghost" href="${p.website}" target="_blank" rel="noopener">Visit website</a>` : ''}
        </div>
      </div>
      <canvas id="priceChart" height="120"></canvas>`;
    }

    async addChart() {
        if (!this.profile) return;
        const res = await fetch(`${BASE_URL}/historical-price-eod/light?symbol=${this.symbol}&apikey=${API_KEY}`);
        const data = await res.json();
        const history = (data || []).slice(0, 365).reverse();

        const labels = history.map(h => h.date);
        const prices = history.map(h => h.price);

        const ctx = document.getElementById('priceChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: `${this.symbol} price`,
                    data: prices,
                    borderColor: '#2f81f7',
                    backgroundColor: 'rgba(47,129,247,0.1)',
                    fill: true,
                    pointRadius: 0,
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{ ticks: { maxTicksLimit: 12, fontColor: '#9aa4b2' } }],
                    yAxes: [{ ticks: { fontColor: '#9aa4b2' } }]
                },
                legend: { labels: { fontColor: '#e6e6e6' } }
            }
        });
    }
}