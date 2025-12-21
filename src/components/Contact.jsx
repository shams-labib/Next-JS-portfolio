"use client";

import React, { useRef } from "react";
import { Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/shams-al-labib",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "https://www.facebook.com/shamsallabib",
  },
  { name: "Instagram", icon: <Instagram className="w-6 h-6" />, url: "#" },
];

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vyedps4",
        "template_gu4xayn",
        formRef.current,
        "qAo87EgVJLY4cIA-A"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#FACC15", // yellow
          });
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again.",
            confirmButtonColor: "#F87171", // red
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden"
    >
      {/* Animated floating circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-20 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        {/* Form Card */}
        <motion.div
          className="max-w-3xl mx-auto bg-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full bg-gray-900 border-gray-600 placeholder-gray-400 text-gray-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 rounded-xl"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full bg-gray-900 border-gray-600 placeholder-gray-400 text-gray-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 rounded-xl"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              required
              className="textarea textarea-bordered w-full bg-gray-900 border-gray-600 placeholder-gray-400 text-gray-100 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 rounded-xl"
              rows={6}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="btn btn-gradient bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl shadow-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 animate-bounce" />
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                className="text-gray-100 hover:text-yellow-400"
                whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
