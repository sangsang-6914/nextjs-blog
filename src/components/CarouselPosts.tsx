import { getNonFeaturedPosts } from '@/api/posts';
import React from 'react';

import 'react-multi-carousel/lib/styles.css';
import MultiCarouselPosts from './MultiCarouselPosts';

async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-5">
      <h1 className="text-2xl font-bold">You May Like</h1>
      <MultiCarouselPosts posts={posts} />
    </section>
  );
}

export default CarouselPosts;
