import { useState } from "react";
import {ArrowIcon} from "../../assets/icons"
import useValidation from "../../hooks/useValidation";

const ContactForm = () => {
  const [isNameActive, setIsNameActive] = useState(false);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isMessageActive, setIsMessageActive] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  //
  const handleFinalSubmit = (finalValues) => {
    console.log("form submitted")
  }
  //
  const {validation} = useValidation(handleFinalSubmit)
  //
  const hanldeInitialSubmit = () => {
    validation(formValues)
  }
  //
  const handleInputValues = (ev) => {
    setFormValues((oldValues) => {
      return { ...oldValues, [ev.target.name]: ev.target.value };
    });
  };
  // () => {}
  return (
    <section className="col-start-2 col-end-12 flex flex-col justify-center items-start gap-11 pb-[72px] smLap:flex-row smTab:justify-between">
      <h3 className="text-lrgHeadingMob leading-lrgHeadingMob tracking-lrgMedHeadingMob font-bold smTab:text-medHeading smTab:leading-medHeading smTab:tracking-lrgMedHeading">
        Connect with us
      </h3>
      <form
        className="w-full text-bodyText grid gap-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative">
          <label
            className={`absolute top-0 left-8 text-lightGrey text-xl -tracking-[0.31px] pointer-events-none ${
              isNameActive && "hidden"
            } `}
            htmlFor="name"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className="pl-8 pb-5 w-full outline-none border-b border-veryDarkBlue"
            value={formValues?.name}
            onChange={(e) => handleInputValues(e)}
            onFocus={() => setIsNameActive(true)}
            onBlur={(e) =>
              e.target.value.length >= 1
                ? setIsNameActive(true)
                : setIsNameActive(false)
            }
          />
        </div>
        <div className="relative">
          <label
            className={`absolute top-0 left-8 text-lightGrey text-xl -tracking-[0.31px] pointer-events-none ${
              isEmailActive && "hidden"
            }`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            className="pl-8 pb-5 w-full outline-none border-b border-veryDarkBlue"
            value={formValues?.email}
            onChange={(e) => handleInputValues(e)}
            onFocus={() => setIsEmailActive(true)}
            onBlur={(e) =>
              e.target.value.length >= 1
                ? setIsEmailActive(true)
                : setIsEmailActive(false)
            }
          />
        </div>
        <div className="relative">
          <label
            className={`absolute top-0 left-8 text-lightGrey text-xl -tracking-[0.31px] pointer-events-none ${
              isMessageActive && "hidden"
            }`}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="block pl-8 pb-5 w-full min-h-[92px] resize-none outline-none border-b border-veryDarkBlue"
            value={formValues?.message}
            onChange={(e) => handleInputValues(e)}
            onFocus={() => setIsMessageActive(true)}
            onBlur={(e) =>
              e.target.value.length >= 1
                ? setIsMessageActive(true)
                : setIsMessageActive(false)
            }
          ></textarea>
          <button
            className="w-20 h-20 ml-auto bg-veryDarkBlue grid place-items-center hover:bg-darkGrey"
            onClick={() => hanldeInitialSubmit()}>
            <ArrowIcon className="stroke-white" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
