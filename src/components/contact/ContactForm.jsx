import { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  // () => {}
  return (
    <section className="col-start-2 col-end-12 flex flex-col justify-center items-start gap-11">
      <h3 className="text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold">
        Connect with us
      </h3>
      <form className="w-full text-bodyText grid gap-10">
        <div className="relative">
          <label className="absolute top-0 left-8 text-xl -tracking-[0.31px]" htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="pl-8 pb-5 w-full outline-none border-b border-veryDarkBlue"
            value={formValues?.name}
            onChange={(e) => {
              setFormValues((oldValues) => {
                return {...oldValues, name: e.target.value}
              })
            }}
          />
        </div>
        <div className="relative">
          <label className="absolute top-0 left-8 text-xl -tracking-[0.31px]" htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            className="pl-8 pb-5 w-full outline-none border-b border-veryDarkBlue"
            value={formValues?.email}
            onChange={(e) => {
              setFormValues((oldValues) => {
                return {...oldValues, email: e.target.value}
              })
            }}
          />
        </div>
        <div className="relative">
          <label className="absolute top-0 left-8 text-xl -tracking-[0.31px]" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="pl-8 pb-5 min-h-[92px] resize-none outline-none border-b border-veryDarkBlue"
            value={formValues?.message}
            onChange={(e) => {
              setFormValues((oldValues) => {
                return {...oldValues, message: e.target.value}
              })
            }}
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
