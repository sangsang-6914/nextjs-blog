import { getPost } from '@/api/posts';
import { readFileSync } from 'fs';
import path from 'path';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);

  return <pre>{post.content}</pre>;
}

export default PostDetailPage;
