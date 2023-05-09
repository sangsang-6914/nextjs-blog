import { Post, PostData } from '@/service/posts';
import React from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import MarkdownViewer from './MarkdownViewer';

function PostContent({ post }: { post: Post }) {
  const { date, title, description, content } = post;
  return (
    <div className="p-5 flex flex-col">
      <time className="self-end text-sky-400 font-bold flex items-center gap-2">
        <AiTwotoneCalendar size={20} /> {date}
      </time>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-bold">{description}</p>
      <div className="border-2 border-sky-500 w-48 mt-2 mb-5" />
      <MarkdownViewer content={content} />
    </div>
  );
}

export default PostContent;
