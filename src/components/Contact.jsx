// Contact.js
import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7cg685g", "template_my6oa77", form.current, {
        publicKey: "5J-sMlQ0MCQ1pw5Lo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 relative ">
      <div className="container mx-auto text-center">
        <div className="flex flex-col pt-10 items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-5">
            CONTACT
          </h2>
          <div className="w-6 h-1 rounded-md bg-purple-700"></div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed mt-6 text-gray-600 mx-auto md:max-w-3xl pb-10">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-[60%] mt-8 mx-auto p-6 rounded-lg shadow-2xl mb-20"
      >
        <div className="mb-8">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="shadow appearance-none border rounded w-full h-[55px] py-2 px-3 bg-[#f0f0f0] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-sm text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="shadow appearance-none border rounded w-full h-[55px] py-2 px-3 bg-[#f0f0f0] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            placeholder="Enter Your Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-sm text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full h-[250px] py-4 px-4 text-gray-700 bg-[#f0f0f0] leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Enter Your Message"
          />
        </div>
        <div className="flex items-right justify-end">
          <motion.button
            className="bg-purple-700 text-white font-bold py-4 px-10 rounded ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toast.success("message send successfully", {
              autoClose: 3000, // The toast will automatically close after 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            })}
          >
            CONTACT
          </motion.button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
