// Exercise 2: Function with queryType ("isbn" or "title") and queryValue
function fetchBook(queryType, queryValue) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching book:", error);
    });
}

// Test it:
fetchBook("isbn", 9780575087057);           // Name of the Wind
fetchBook("title", "The Wise Man's Fears"); // Wise Man's Fear
fetchBook("isbn", 9789814561778);           // From Third World to First
fetchBook("title", "How to Win Friends and Influence People");