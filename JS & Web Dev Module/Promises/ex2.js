function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename,
          size: Math.floor(Math.random() * 1000) + 100,
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg",    time: 1500 },
  { name: "data.csv",      time: 3000 },
  { name: "report.docx",   time: 1000 }
];

// --- Promise.all (fails fast if any file fails) ---
const startTime = Date.now();
const promises = files.map(f => processFile(f.name, f.time));

Promise.all(promises)
  .then(results => {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`All files processed in ${elapsed}s`);
    console.log(results);
  })
  .catch(error => console.log("Processing failed:", error.message));

// --- Bonus: Promise.allSettled (always gets all results) ---
Promise.allSettled(promises).then(results => {
  results.forEach(r => {
    if (r.status === "fulfilled") {
      console.log("✓", r.value.filename, "processed at", r.value.processedAt);
    } else {
      console.log("✗", r.reason.message);
    }
  });
});