"use client";

import React, { useRef } from "react";
import {
  Mail,
  Linkedin,
  Facebook,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/shams-al-labib",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    url: "https://www.facebook.com/shamsallabib",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-5 h-5" />,
    url: "https://wa.me/8801784768887",
  },
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
        "qAo87EgVJLY4cIA-A",
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#a855f7",
          });
          formRef.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again.",
            confirmButtonColor: "#ef4444",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      /* Background matches exactly with the Hobbies section above */
      className="relative py-16 md:py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* BACKGROUND GLOWS - ধারাবাহিকতা বজায় রাখতে */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 rounded-full mt-4" />
          <p className="mt-6 text-gray-400 max-w-lg">
            Have a project in mind or just want to chat? Let’s build something
            epic together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
          {/* LEFT INFO SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                title: "Email",
                value: "shamsallabib@gmail.com",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                title: "Phone",
                value: "+880 1784768887",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: "Location",
                value: "Rangpur, Bangladesh",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex items-center gap-5 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 text-purple-400 grid place-items-center group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-base font-bold text-gray-200">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Icons */}
            <div className="pt-6">
              <p className="mb-4 text-xs uppercase tracking-widest text-gray-500 font-bold">
                Connect With Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 grid place-items-center text-gray-400 hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-400/10 transition-all shadow-lg"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM SIDE */}
          <motion.div
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl bg-white/5 px-5 py-4 text-white border border-white/10 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl bg-white/5 px-5 py-4 text-white border border-white/10 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full rounded-xl bg-white/5 px-5 py-4 text-white border border-white/10 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
