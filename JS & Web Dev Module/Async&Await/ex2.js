async function getUserWithPosts(userId) {
  try {
    // Step 1: Fetch the user
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error(`User ${userId} not found`);
    }
    const user = await userResponse.json();

    // Step 2: Fetch all posts by that user (only if user exists)
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsResponse.ok) {
      throw new Error(`Could not fetch posts for user ${userId}`);
    }
    const posts = await postsResponse.json();

    // Step 3: Return combined data
    return { user, posts };

  } catch (error) {
    console.error('Error in getUserWithPosts:', error.message);
    return null;
  }
}

// Test
getUserWithPosts(1).then(data => console.log(data));
getUserWithPosts(999); // stops after user fetch fails, won't attempt posts