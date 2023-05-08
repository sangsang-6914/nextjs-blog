import { PostData } from '@/api/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  post: PostData;
}

function PostCard({ post }: Props) {
  const { path, date, description, category, title } = post;
  return (
    <Link href={`/posts/${path}`}>
      <section className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          className="w-full"
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-400 text-sm">
            {date.toString()}
          </time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {category}
          </span>
        </div>
      </section>
    </Link>
  );
}

export default PostCard;
