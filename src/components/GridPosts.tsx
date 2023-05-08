import { PostData } from '@/api/posts';
import React from 'react';
import PostCard from './PostCard';

function GridPosts({ posts }: { posts: PostData[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default GridPosts;
