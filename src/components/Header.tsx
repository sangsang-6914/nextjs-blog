import Link from 'next/link';
import React from 'react';

const HEADER_ITEMS = ['home', 'about', 'posts', 'contact'];

function Header() {
  return (
    <header className="flex justify-between p-4 items-center">
      <h1 className="font-bold text-3xl">{"Sang's Blog"}</h1>
      <ul className="flex gap-4">
        {HEADER_ITEMS.map((item, index) => (
          <li key={index}>
            <Link href={`/${item === 'home' ? '' : item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
