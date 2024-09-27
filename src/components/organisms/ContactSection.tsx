import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </section>
  );
};

export default ContactSection;
