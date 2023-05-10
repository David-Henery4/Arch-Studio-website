import { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  //
  return (
    <section className="col-start-2 col-end-12">
      <h3>Connect with us</h3>
      <form className="w-full">
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="w-full outline-none"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            className="w-full outline-none"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="resize-none outline-none"
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
