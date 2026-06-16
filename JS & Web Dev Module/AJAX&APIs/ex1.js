// Exercise 1: Function that accepts an ISBN parameter
function fetchBook(isbn) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching book:", error);
    });
}

// Test it:
fetchBook(9780575087057);  // Name of the Wind
fetchBook(9782806269171);  // The Little Prince: Book Analysis
fetchBook(1440633908);     // Of Mice and Men
fetchBook(9781945048470);  // The Alchemist
fetchBook(9780307417138);  // Hitchhiker's Guide to the Galaxy