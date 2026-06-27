class Marquee {
    constructor(element) {
        this.element = element;
    }

    async fetchData() {
        const res = await fetch(`${BASE_URL}/biggest-gainers?apikey=${API_KEY}`);
        const data = await res.json();
        return Array.isArray(data) ? data.slice(0, 30) : [];
    }

    render(items) {
        const inner = items.map(item => {
            const change = item.change ?? 0;
            const cls = change >= 0 ? 'pos' : 'neg';
            const sign = change >= 0 ? '+' : '';
            return `<span class="marquee__item">
        <span class="marquee__symbol">${item.symbol}</span>
        <span> ${item.price ?? '-'}</span>
        <span class="${cls}"> ${sign}${(item.changesPercentage ?? 0).toFixed(2)}%</span>
      </span>`;
        }).join('');

        this.element.classList.add('marquee');
        // Duplicate the track for a seamless loop
        this.element.innerHTML = `<div class="marquee__track">${inner}${inner}</div>`;
    }

    async load() {
        try {
            const items = await this.fetchData();
            this.render(items);
        } catch (e) {
            this.element.innerHTML = `<div class="loader">Marquee unavailable</div>`;
        }
    }
}