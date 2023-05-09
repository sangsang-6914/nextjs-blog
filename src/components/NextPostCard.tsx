import { PostData } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

interface Props {
  post: PostData;
  type: 'prev' | 'next';
}

const ICON_CLASS = 'text-5xl font-bold text-yellow-300 group-hover:text-6xl';

function NextPostCard({ post, type }: Props) {
  const { title, description, path } = post;
  return (
    <Link
      href={`/posts/${path}`}
      className="w-full relative bg-black cursor-pointer group"
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
        className="w-full opacity-60 max-h-64"
      />
      <div className="w-full flex items-center justify-around absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold px-8">
        {type === 'prev' && <BiLeftArrowAlt className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h1 className="text-2xl">{title}</h1>
          <p>{description}22</p>
        </div>
        {type === 'next' && <BiRightArrowAlt className={ICON_CLASS} />}
      </div>
    </Link>
  );
}

export default NextPostCard;
