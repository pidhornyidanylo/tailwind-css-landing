import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

        <form onSubmit={() => alert("We'll contact you back via email!")}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-red-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-400 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
