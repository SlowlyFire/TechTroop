const tweeter = Tweeter();
const renderer = Renderer();

// Initial render
renderer.renderPosts(tweeter.getPosts());

// Add new post (Twit button)
$("#twit-btn").on("click", function () {
  const text = $("#input").val().trim();
  if (!text) return;
  tweeter.addPost(text);
  $("#input").val("");
  renderer.renderPosts(tweeter.getPosts());
});

// Event delegation for dynamically rendered elements
$("#posts").on("click", ".delete", function () {
  const postID = $(this).data("id");
  tweeter.removePost(postID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".comment-button", function () {
  const $post = $(this).closest(".post");
  const postID = $post.data("id");
  const text = $post.find(".comment-input").val().trim();
  if (!text) return;
  tweeter.addComment(postID, text);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  const commentID = $(this).data("id");
  const postID = $(this).closest(".post").data("id");
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});