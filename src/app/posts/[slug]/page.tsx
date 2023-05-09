import { getPost } from '@/api/posts';
import AdjacentPostCard from '@/components/AdjacentPostCard';
import NextPostCard from '@/components/NextPostCard';
import PostContent from '@/components/PostContent';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: {
    slug: string;
  };
}

async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { title, path, prev, next } = post;

  return (
    <article className="bg-gray-200 rounded-2xl overflow-hidden m-4 shadow-lg">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
        className="w-full max-h-96"
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <NextPostCard post={prev} type="prev" />}
        {next && <NextPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

export default PostDetailPage;
