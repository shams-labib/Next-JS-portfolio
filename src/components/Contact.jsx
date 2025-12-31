"use client";

import React, { useRef } from "react";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
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
        "qAo87EgVJLY4cIA-A"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#fb923c",
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
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-br from-[#0a0a0a] via-[#1b003d] to-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,40,255,0.2),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Let’s build something
            epic together.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT INFO */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Mail />,
                title: "Email",
                value: "shamsallabib@gmail.com",
              },
              { icon: <Phone />, title: "Phone", value: "+880 1784768887" },
              {
                icon: <MapPin />,
                title: "Location",
                value: "Rangpur, Bangladesh",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.08]
        to-white/[0.02]
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-purple-400/40
        hover:shadow-lg
        hover:shadow-purple-500/10
      "
              >
                {/* subtle glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_60%)]" />

                <div className="relative flex items-center gap-5">
                  {/* icon */}
                  <div
                    className="
            grid
            place-items-center
            h-12
            w-12
            rounded-xl
            bg-purple-400/15
            text-purple-400
            transition
            group-hover:scale-110
            group-hover:bg-purple-400/25
          "
                  >
                    {item.icon}
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm md:text-base font-semibold text-gray-100">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* SOCIAL */}
            <div className="pt-8 border-t border-white/10">
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
                Connect With Me
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="
            grid
            place-items-center
            h-11
            w-11
            rounded-xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            text-gray-200
            hover:text-purple-400
            hover:border-purple-400/40
            hover:bg-purple-400/10
            transition-all
          "
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div className="relative group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
        w-full
        rounded-xl
        bg-white/5
        px-4
        py-3
        text-gray-100
        placeholder:text-gray-400/60
        border
        border-white/10
        backdrop-blur-md

        focus:outline-none
        focus:border-purple-400/60
        focus:bg-white/10
        focus:ring-2
        focus:ring-purple-400/20

        transition-all
        duration-300
      "
                />
                {/* glow */}
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 group-focus-within:ring-purple-400/30 transition"></span>
              </div>

              {/* EMAIL */}
              <div className="relative group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="
        w-full
        rounded-xl
        bg-white/5
        px-4
        py-3
        text-gray-100
        placeholder:text-gray-400/60
        border
        border-white/10
        backdrop-blur-md

        focus:outline-none
        focus:border-purple-400/60
        focus:bg-white/10
        focus:ring-2
        focus:ring-purple-400/20

        transition-all
        duration-300
      "
                />
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 group-focus-within:ring-purple-400/30 transition"></span>
              </div>

              {/* MESSAGE */}
              <div className="relative group">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="
        w-full
        rounded-xl
        bg-white/5
        px-4
        py-3
        text-gray-100
        placeholder:text-gray-400/60
        border
        border-white/10
        backdrop-blur-md
        resize-none

        focus:outline-none
        focus:border-purple-400/60
        focus:bg-white/10
        focus:ring-2
        focus:ring-purple-400/20

        transition-all
        duration-300
      "
                />
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 group-focus-within:ring-purple-400/30 transition"></span>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="
      btn
      w-full
      rounded-xl
      bg-gradient-to-r
      from-purple-500
      to-pink-500
      text-black
      font-semibold
      shadow-lg
      shadow-purple-500/30
      hover:shadow-purple-500/60
      transition-all
    "
              >
                <Send className="w-4 h-4 mr-2" />
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
