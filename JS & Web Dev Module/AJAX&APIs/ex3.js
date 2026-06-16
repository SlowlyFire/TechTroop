// Exercise 3: Print title, author, and ISBN for each item in results
function fetchBook(queryType, queryValue) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`)
    .then(response => response.json())
    .then(data => {
      data.items.forEach(book => {
        const info = book.volumeInfo;
        const title   = info.title || "N/A";
        const authors = info.authors ? info.authors.join(", ") : "N/A";
        const isbn    = info.industryIdentifiers
          ? info.industryIdentifiers.map(id => id.identifier).join(", ")
          : "N/A";

        console.log(`Title:   ${title}`);
        console.log(`Author:  ${authors}`);
        console.log(`ISBN:    ${isbn}`);
        console.log("---");
      });
    })
    .catch(error => {
      console.error("Error fetching book:", error);
    });
}

// Test it:
fetchBook("title", "The Wise Man's Fears");
fetchBook("isbn", 9780575087057);