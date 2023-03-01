import { React, useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));

    setIsSubmit(true);
    if (isSubmit) {
      emailjs
        .sendForm(
          "service_7rlkr1w",
          "template_9kdqbyo",
          form.current,
          "bYgYE6BBhyNvy3Qwp"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    setFormValues(initialValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#EAE8DC] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[500px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E98074] text-[#D8C3A4]">
            Contact
          </p>
          <p className="text-[#8E8D89] py-4">
            Submit the form below or send me an email -
            ljiljanamojsilovic@yahoo.com
          </p>
        </div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p className="text-[#8E8D89]">Message send successfully</p>
        ) : null}
        <input
          className="bg-[#D8C3A4] p-2 text-[#8E8D89]"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
        <p className="text-[#8E8D89]">{formErrors.name}</p>
        <input
          className="my-4 p-2 bg-[#D8C3A4]"
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formValues.email}
        />
        <p className="text-[#8E8D89]">{formErrors.email}</p>
        <input
          className="my-4 p-2 bg-[#D8C3A4]"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="bg-[#D8C3A4] p-1"
          name="message"
          rows="10"
          placeholder="Message"
          onChange={handleChange}
          value={formValues.message}
        ></textarea>
        <p className="text-[#8E8D89]">{formErrors.message}</p>
        <button
          type="submit"
          value="Send"
          className="text-[#8E8D8A] border-2 hover:transpatent hover:border-[#E98074] px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
