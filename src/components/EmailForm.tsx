'use client';

import React, { useState } from 'react';

const INITIAL_FORM = {
  email: '',
  subject: '',
  message: '',
};

function EmailForm() {
  const [emailInfo, setEmailInfo] = useState(INITIAL_FORM);
  const [success, setSuccess] = useState<string | null>(null);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setEmailInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess('메일 보내기에 성공했습니다.');
    setEmailInfo(INITIAL_FORM);

    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };
  return (
    <section className="w-full max-w-md">
      {success && (
        <div className="bg-green-300 p-1 w-full font-bold text-center my-2 rounded-lg">
          {success}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 bg-slate-700 w-full text-white font-bold"
      >
        <label htmlFor="email" className="my-1">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          className="text-black p-1"
          onChange={handleChange}
          required
        />
        <label htmlFor="subject" className="my-1">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          className="text-black p-1"
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className="my-1">
          Message
        </label>
        <textarea
          name="message"
          rows={10}
          className="text-black p-1"
          onChange={handleChange}
          required
        />
        <button className="bg-yellow-300 text-black mt-1 hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}

export default EmailForm;
