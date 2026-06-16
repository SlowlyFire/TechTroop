function Renderer() {
  function renderPosts(posts) {
    const $postsContainer = $("#posts");
    $postsContainer.empty();

    posts.forEach(function (post) {
      const $post = $(`
        <div class="post" data-id="${post.id}">
          <div class="post-text">${post.text}</div>
          <div class="delete" data-id="${post.id}">Delete Post</div>
          <div class="comments"></div>
          <div class="add-comment">
            <input type="text" placeholder="Got something to say?" class="comment-input" />
            <button class="comment-button">Comment</button>
          </div>
        </div>
      `);

      const $comments = $post.find(".comments");

      post.comments.forEach(function (comment) {
        const $commentRow = $(`
          <div class="comment-row">
            <div class="comment" data-id="${comment.id}">${comment.text}</div>
            <div class="delete-comment" data-id="${comment.id}">X</div>
          </div>
        `);
        $comments.append($commentRow);
      });

      $postsContainer.append($post);
    });
  }

  return { renderPosts };
}