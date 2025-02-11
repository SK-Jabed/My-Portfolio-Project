import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSkype,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuSend } from "react-icons/lu";

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
        "service_yxvyo3u",
        "template_sgmr1ua",
        formData,
        "JutGtW8LXBsU_Pt6F"
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

  // Initialize AOS Animation
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#120820] to-[#1a0e2d] text-white"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-alegreya">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg font-nunito text-gray-300">
            Let's discuss your next big project!
          </p>
        </div>

        {/* Contact Info */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-20 font-nunito"
          data-aos="fade-right"
        >
          <div className="text-center p-6 border border-gray-500 rounded-lg bg-[#1e1433] shadow-lg hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-blue-400">Address</h4>
            <p className="mt-2 text-gray-300">Narayanganj, Dhaka, Bangladesh</p>
          </div>
          <div className="text-center p-6 border border-gray-500 rounded-lg bg-[#1e1433] shadow-lg hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-purple-400">Phone</h4>
            <p className="mt-2 text-gray-300">+880 1863 646 515</p>
          </div>
          <div className="text-center p-6 border border-gray-500 rounded-lg bg-[#1e1433] shadow-lg hover:shadow-xl transition">
            <h4 className="text-lg font-semibold text-sky-400">Email</h4>
            <p className="mt-2 text-gray-300">sheikhjabed69@gmail.com</p>
          </div>
        </div>

        {/* Form and Social Links */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20">
          {/* Left Section */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-blue-400 font-robotoSlab">Contact Me</h3>
            <p className="text-gray-300 text-lg font-nunito">
              I’m excited to work with you! Let’s bring your vision to life.
            </p>
            <div className="flex space-x-6 mt-6">
              {[FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaSkype].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl hover:scale-110 transition"
                  >
                    <Icon className="text-blue-400 hover:text-blue-600" />
                  </a>
                )
              )}
              
            </div>
          </div>

          {/* Right Section - Form */}
          <form
            className="bg-[#1e1433] p-8 rounded-lg w-full md:w-2/3 shadow-lg font-nunito"
            onSubmit={handleSubmit}
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 mt-4 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 mt-4 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 mt-4 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-105 transition text-white font-semibold py-2 px-4 rounded-md shadow-lg flex items-center gap-1"
            >
              <LuSend className="text-lg font-bold" />
              <p>Send Message</p>
            </button>
            {/* Submission Feedback */}
        {isSubmitted && (
          <div className="text-start mt-8 text-green-400 font-medium font-nunito">
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}
          </form>
          
        </div>

        
      </div>
    </section>
  );
};

export default ContactSection;
