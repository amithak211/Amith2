import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef();

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <form
          ref={formRef}
          action="https://formspree.io/f/your-form-id"  // <-- replace with your Formspree ID
          method="POST"
          data-aos="fade-up"
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
