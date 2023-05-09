'use client';

import { PostData } from '@/service/posts';
import React from 'react';
import Carousel from 'react-multi-carousel';
import PostCard from './PostCard';

function MultiCarouselPosts({ posts }: { posts: PostData[] }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive} autoPlay infinite itemClass="m-2">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </Carousel>
  );
}

export default MultiCarouselPosts;
