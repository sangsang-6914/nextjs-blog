import React from 'react';

interface Props {
  categories: string[];
  onClick: (item: string) => void;
  selected: string;
}

function Category({ categories, onClick, selected }: Props) {
  return (
    <section className="text-center p-4">
      <h1 className="font-bold text-lg border-b border-sky-300 mb-1">
        Category
      </h1>
      <ul className="text-center">
        {categories.map((item, index) => (
          <li
            onClick={() => onClick(item)}
            className={`hover:text-sky-300 cursor-pointer ${
              selected === item && 'text-sky-500 font-bold'
            }`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
