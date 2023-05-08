import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col items-center mt-2">
      <Image
        src={'/images/sanghun.jpg'}
        alt="profile"
        width={200}
        height={200}
        className="rounded-full mb-2"
      />
      <h1 className="text-2xl font-bold">{"Hi, I'm Sanghun"}</h1>
      <p className="font-bold">Fronted Engineer</p>
      <p>트렌디한 협업 중심의 개발자, 우상훈</p>
      <Link href="/contact">
        <button className="bg-yellow-500 px-4 py-1 font-bold rounded-xl my-2 hover:brightness-110">
          Contact Me
        </button>
      </Link>
    </section>
  );
}

export default Hero;
