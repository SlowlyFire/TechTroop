async function getDashboard() {
  try {
    // Fetch all three sources in parallel
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/comments')
    ]);

    if (!usersRes.ok || !postsRes.ok || !commentsRes.ok) {
      throw new Error('One or more data sources failed to load');
    }

    const [users, posts, comments] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      commentsRes.json()
    ]);

    // --- Summary stats ---
    const totalUsers    = users.length;
    const totalPosts    = posts.length;
    const totalComments = comments.length;
    const avgPostsPerUser    = totalPosts    / totalUsers;
    const avgCommentsPerPost = totalComments / totalPosts;

    // --- Top 3 users by post count ---
    const topUsers = users
      .map(user => {
        const userPosts    = posts.filter(p => p.userId === user.id);
        const postIds      = new Set(userPosts.map(p => p.id));
        const commentCount = comments.filter(c => postIds.has(c.postId)).length;
        return { name: user.name, postCount: userPosts.length, commentCount };
      })
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 3);

    // --- Last 5 posts (highest IDs) ---
    const recentPosts = [...posts]
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);

    return {
      summary: { totalUsers, totalPosts, totalComments, avgPostsPerUser, avgCommentsPerPost },
      topUsers,
      recentPosts
    };

  } catch (error) {
    console.error('Dashboard error:', error.message);
    return null;
  }
}

// Test
getDashboard().then(data => console.log(JSON.stringify(data, null, 2)));