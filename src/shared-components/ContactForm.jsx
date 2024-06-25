import React, { useRef, useState } from "react";

const ContactForm = ({ contact }) => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // input text change function
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    // Sending a message based on your email information from sanity via https://formsubmit.co. contact page
    <form
      ref={formRef}
      action={`https://formsubmit.co/${contact?.email}`}
      method="POST"
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-[#1f1f1f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-[#1f1f1f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Message</span>
        <textarea
          rows={7}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="bg-[#1f1f1f] py-4 px-6 resize-none placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <button
        type="submit"
        className="bg-[#1f1f1f] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
