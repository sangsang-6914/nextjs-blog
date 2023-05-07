import { PostData } from '@/api/posts';
import Image from 'next/image';
import React from 'react';

interface Props {
  post: PostData;
}

function PostCard({ post }: Props) {
  const { path, date, description, category, title } = post;
  return (
    <section className="shadow-md">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="flex flex-col items-center p-2">
        <p className="text-gray-400 self-end">{date}</p>
        <p className="font-bold">{title}</p>
        <p>{description}</p>
        <p className="my-2 bg-green-200">{category}</p>
      </div>
    </section>
  );
}

export default PostCard;
