import EmailForm from '@/components/EmailForm';
import React from 'react';
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai';

const ICON_CLASS = 'cursor-pointer hover:text-yellow-400';

function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">Contact Me</h1>
      <p className="mt-2">sangsang6914@gmail.com</p>
      <div className="flex gap-2 text-5xl my-4">
        <AiFillGithub className={ICON_CLASS} />
        <AiFillLinkedin className={ICON_CLASS} />
        <AiFillYoutube className={ICON_CLASS} />
      </div>
      <h3 className="font-bold text-2xl my-5">Or Send me email</h3>
      <EmailForm />
    </section>
  );
}

export default ContactPage;
