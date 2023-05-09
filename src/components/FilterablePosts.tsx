'use client';

import { PostData } from '@/service/posts';
import React, { useState } from 'react';
import Category from './Category';
import GridPosts from './GridPosts';

interface Props {
  posts: PostData[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filteredPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);
  return (
    <section className="flex m-4">
      <div>
        <GridPosts posts={filteredPosts} />
      </div>
      <div>
        <Category
          selected={selected}
          onClick={setSelected}
          categories={[ALL_POSTS, ...categories]}
        />
      </div>
    </section>
  );
}

export default FilterablePosts;
