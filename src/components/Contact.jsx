import React from "react";
import "../index.css";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  md:h-screen bg-[#0a192f] flex justify-center items-center p-4 mt-40"
    >
      <form
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            vutukuri.kumar192st.niituniversity.in
          </p>
        </div>
        <input
          id="input"
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          id="input"
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          id="input"
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:rounded-md hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
