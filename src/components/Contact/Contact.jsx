import { Button, TextInput } from "@mantine/core";
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to your server
  };
  return (
    <div className="md:mt-20 mt-10 m-4" id="contact">
      <h2 className="text-5xl text-center text-rose-500 font-mono font-semibold md:mb-20 mb-10">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-stone-100 border border-spacing-10 rounded-2xl shadow-2xl p-10">
        <div className="animate-pulse">
          <img
            src="https://d15yx0mnc9teae.cloudfront.net/sites/default/files/2021-10/contact-us-showcase.png"
            alt=""
          />
        </div>
        <div>
          <form className="contact-form " onSubmit={handleSubmit}>
            <TextInput
              className="text-xl my-2"
              label="Name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              className="text-xl my-2"
              label="Email"
              placeholder="Enter your email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              className="text-xl my-2 "
              label="Message"
              placeholder="Enter your message"
              required
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="btn btn-outline text-white bg-sky-500 hover:bg-sky-800 mt-4"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
