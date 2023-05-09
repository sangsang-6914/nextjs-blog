import { getPost } from '@/api/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import Image from 'next/image';
import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';

interface Props {
  params: {
    slug: string;
  };
}

async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const { title, description, content, path, date } = post;

  return (
    <article className="bg-gray-200 rounded-2xl overflow-hidden m-4">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={500}
        height={300}
        className="w-full max-h-96"
      />
      <div className="p-5 flex flex-col">
        <time className="self-end text-sky-400 font-bold flex items-center gap-2">
          <AiTwotoneCalendar size={20} /> {date}
        </time>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="font-bold">{description}</p>
        <div className="border-2 border-sky-500 w-48 mt-2 mb-5" />
        <MarkdownViewer content={content} />
      </div>
    </article>
  );
}

export default PostDetailPage;
