import { PostData } from '@/api/posts';
import React from 'react';
import PostCard from './PostCard';

function GridPosts({ posts }: { posts: PostData[] }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}

export default GridPosts;
