import { PostData } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Props {
  post: PostData;
  type: 'next' | 'prev';
}

function AdjacentPostCard({ post, type }: Props) {
  const { path, title, description } = post;
  return (
    <Link className="relative w-full bg-black max-h-56" href={`/posts/${path}`}>
      <Image
        className="opacity-80 w-full"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group text-white w-full flex items-center justify-around absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {type === 'prev' && (
          <FaArrowLeft className="text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl" />
        )}
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === 'next' && (
          <FaArrowRight className="text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl" />
        )}
      </div>
    </Link>
  );
}

export default AdjacentPostCard;
