import { getAllPosts, getFeaturedPosts } from '@/api/posts';
import React from 'react';
import GridPosts from './GridPosts';
import PostCard from './PostCard';

async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mt-3">
      <h1 className="text-xl font-bold">Featured Posts</h1>
      <GridPosts posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
