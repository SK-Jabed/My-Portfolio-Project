import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSkype,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yxvyo3u", // Replace with your EmailJS Service ID
        "template_sgmr1ua", // Replace with your EmailJS Template ID
        formData,
        "JutGtW8LXBsU_Pt6F" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error(error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center text-white py-20"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/BcSPdbq/2148578099.jpg')",
      }}
    >
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Feel free to reach out for any project or collaboration!
        </p>
      </div>






      {/* Contact Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20">
        <div className="text-center p-4 border-2 border-gray-500 rounded-md bg-gray-700">
          <h4 className="text-lg font-semibold">Address</h4>
          <p className="mt-2 text-gray-300">
            999 Carter Street, Sailor Springs, IL 62434
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Phone</h4>
          <p className="mt-2 text-gray-300">+1 618-689-9409</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Email</h4>
          <p className="mt-2 text-gray-300">hello@example.com</p>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold">Facebook Chat</h4>
          <p className="mt-2 text-gray-300">me.freelancer3</p>
        </div>
      </div>

      {/* Form and Social Links */}
      <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-center gap-16 px-6 md:px-20">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-blue-400">Contact Me</h3>
          <h4 className="text-xl font-semibold">Let's Talk for Your Project</h4>
          <p className="text-gray-300">
            I'm available to collaborate on exciting projects and ideas.
          </p>
          <div className="flex space-x-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-red-500"
            >
              <FaPinterest />
            </a>
            <a
              href="https://skype.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
            >
              <FaSkype />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <form
          className="bg-gray-900 bg-opacity-75 p-8 rounded-lg w-full md:w-2/3"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 mt-4 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 mt-4 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 mt-4 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-400 hover:bg-blue-600 transition text-white font-bold py-2 px-4 rounded-md"
          >
            Send a Message
          </button>
        </form>
      </div>

      {/* Submission Feedback */}
      {isSubmitted && (
        <div className="text-center mt-8 text-green-400">
          Thank you! Your message has been sent successfully.
        </div>
      )}
    </section>
  );
};

export default ContactSection;
