import React, { useState } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../molecules/Footer";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ContactPageTemplate: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`Name: ${name}, Message: ${message}`);
  };

  return (
    <div>
      <Navbar />
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPageTemplate;
