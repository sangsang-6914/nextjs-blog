import { getFeaturedPosts } from '@/api/posts';
import React from 'react';
import GridPosts from './GridPosts';

async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mt-3">
      <h1 className="text-2xl font-bold my-5">Featured Posts</h1>
      <GridPosts posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
