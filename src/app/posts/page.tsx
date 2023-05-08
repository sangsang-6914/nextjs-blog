import { getAllPosts } from '@/api/posts';
import Category from '@/components/Category';
import GridPosts from '@/components/GridPosts';
import React from 'react';

async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <section className="flex p-4">
      <GridPosts posts={posts} />
      <Category />
    </section>
  );
}

export default PostsPage;
