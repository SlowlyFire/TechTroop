class SearchForm {
    constructor(element) {
        this.element = element;
        this.callback = null;
        this.render();
    }

    render() {
        this.element.innerHTML = `
      <form class="search-form">
        <input type="text" placeholder="Search Nasdaq companies..." />
        <button type="submit">Search</button>
      </form>`;

        const form = this.element.querySelector('form');
        const input = this.element.querySelector('input');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.search(input.value.trim());
        });

        // Step 2.1: auto-search with debounce
        const debounced = this.debounce((value) => {
            if (value.trim().length > 0) this.search(value.trim());
        }, 400);
        input.addEventListener('input', (e) => debounced(e.target.value));
    }

    debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    onSearch(cb) {
        this.callback = cb;
    }

    async search(query) {
        if (!query) return;
        if (this.callback) this.callback(null, query); // signal loading

        try {
            const res = await fetch(
                `${BASE_URL}/search-symbol?query=${encodeURIComponent(query)}&apikey=${API_KEY}`
            );
            let companies = await res.json();
            // keep NASDAQ only + cap at 10, since stable search ignores those params
            companies = (companies || []).filter(c => c.exchange === 'NASDAQ').slice(0, 10);

            // Step 3.1: enrich with profile data (image + change) in one batched call
            let profiles = [];
            if (companies.length) {
                const profileArrays = await Promise.all(
                    companies.map(c =>
                        fetch(`${BASE_URL}/profile?symbol=${c.symbol}&apikey=${API_KEY}`).then(r => r.json())
                    )
                );
                profiles = profileArrays.map(arr => arr[0]).filter(Boolean);
            }
            const profileMap = {};
            (profiles || []).forEach(p => { profileMap[p.symbol] = p; });

            const enriched = (companies || []).map(c => ({
                ...c,
                image: profileMap[c.symbol]?.image,
                price: profileMap[c.symbol]?.price,
                changes: profileMap[c.symbol]?.changes,
                changesPercentage: profileMap[c.symbol]?.changePercentage,
            }));

            if (this.callback) this.callback(enriched, query);
        } catch (e) {
            if (this.callback) this.callback([], query);
        }
    }
}