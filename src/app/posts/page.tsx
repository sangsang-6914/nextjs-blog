import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/FilterablePosts';
import React from 'react';

async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}

export default PostsPage;
