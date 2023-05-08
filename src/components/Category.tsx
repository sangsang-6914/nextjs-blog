import React from 'react';

const CATEGORY_ITEMS = [
  'All Posts',
  'my story',
  'frontend',
  'backend',
  'javascript',
];

function Category() {
  return (
    <section className="m-4">
      <h1 className="font-bold text-lg border-b border-sky-300 mb-1">
        Category
      </h1>
      <ul className="text-center">
        {CATEGORY_ITEMS.map((item, index) => (
          <li className="hover:text-sky-300 cursor-pointer" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
