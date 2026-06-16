function Tweeter() {
  // Private data
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" }
      ]
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." }
      ]
    }
  ];

  let postIdCounter = 2;   // next post will be p3
  let commentIdCounter = 6; // next comment will be c7

  // Public functions
  function getPosts() {
    return posts;
  }

  function addPost(text) {
    postIdCounter++;
    posts.push({
      text: text,
      id: "p" + postIdCounter,
      comments: []
    });
  }

  function removePost(postID) {
    posts = posts.filter(function (post) {
      return post.id !== postID;
    });
  }

  function addComment(postID, text) {
    commentIdCounter++;
    const post = posts.find(function (p) {
      return p.id === postID;
    });
    if (post) {
      post.comments.push({
        id: "c" + commentIdCounter,
        text: text
      });
    }
  }

  function removeComment(postID, commentID) {
    const post = posts.find(function (p) {
      return p.id === postID;
    });
    if (post) {
      post.comments = post.comments.filter(function (c) {
        return c.id !== commentID;
      });
    }
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment
  };
}