const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

const index = posts.findIndex(post => post.id === 2);

posts.splice(index, 1); // remove one item starting at "index" position

console.log(posts);
