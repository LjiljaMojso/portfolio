import { React, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_9kdqbyo", form.current, "bYgYE6BBhyNvy3Qwp")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
    e.target.reset();
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[500px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or send me an email - ljmojso@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          value="Send"
          className="text-white border-2 hover:transpatent hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
