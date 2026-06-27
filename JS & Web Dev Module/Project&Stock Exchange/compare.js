(async function () {
    const root = document.getElementById('compareRoot');
    const params = new URLSearchParams(location.search);
    const symbols = (params.get('symbols') || '').split(',').filter(Boolean).slice(0, 3);

    if (!symbols.length) {
        root.innerHTML = '<div class="loader">No companies selected.</div>';
        return;
    }

    root.innerHTML = '<div class="loader">Loading comparison…</div>';
    try {
        const results = await Promise.all(
            symbols.map(s =>
                fetch(`${BASE_URL}/profile?symbol=${s}&apikey=${API_KEY}`).then(r => r.json())
            )
        );
        const companies = results.map(arr => arr[0]).filter(Boolean);

        root.innerHTML = `<div class="compare-grid">${companies.map(p => {
            const pct = p.changesPercentage ?? 0;
            const cls = (p.changes ?? 0) >= 0 ? 'pos' : 'neg';
            const sign = (p.changes ?? 0) >= 0 ? '+' : '';
            return `
        <div class="compare-card">
          <img src="${p.image}" alt="${p.symbol}" style="width:64px;height:64px;background:#fff;border-radius:8px;object-fit:contain;" onerror="this.style.visibility='hidden'"/>
          <h2 style="font-size:18px;margin-top:8px;">${p.companyName}</h2>
          <div class="result__sym">${p.symbol}</div>
          <div class="company__price" style="margin:8px 0;">$${p.price} <span class="${cls}">${sign}${Number(pct).toFixed(2)}%</span></div>
          <div>Market Cap: ${p.marketCap?.toLocaleString() ?? '-'}</div>
          <div>Industry: ${p.industry ?? '-'}</div>
          <div>CEO: ${p.ceo ?? '-'}</div>
          <div>Sector: ${p.sector ?? '-'}</div>
        </div>`;
        }).join('')}</div>`;
    } catch (e) {
        root.innerHTML = '<div class="loader">Failed to load comparison.</div>';
    }
})();