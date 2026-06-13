const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

let postIndex = posts.findIndex(post => post.id === 2);
console.log(postIndex);

let commentIndex = posts[postIndex].comments.findIndex(comment => comment.id === 3);
console.log(commentIndex);

posts[postIndex].comments.splice(commentIndex, 1); // remove one item starting from comments[commentIndex]

console.log(posts[postIndex]);
