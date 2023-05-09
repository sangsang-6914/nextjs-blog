import Hero from '@/components/Hero';
import React from 'react';

function AboutPage() {
  return (
    <div>
      <Hero />
      <div className="bg-gray-100 rounded-sm p-10 flex flex-col items-center mt-5">
        <h1 className="font-bold text-2xl mb-2">Who Am I?</h1>
        <p>개발을 사랑하는 프론트엔드 개발자</p>
        <p>협업을 중시하고 트렌디함을 추구함</p>
        <h1 className="font-bold text-2xl mb-2 mt-3">Career</h1>
        <p>반디에스앤씨 (~2022)</p>
        <h1 className="font-bold text-2xl mb-2 mt-3">Skills</h1>
        <p>React, Vue</p>
        <p>Git, Clean Code</p>
        <p>VS Code, IntelliJ, Oracle</p>
      </div>
    </div>
  );
}

export default AboutPage;
