import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience ";
import Hobbies from "@/components/Hobbies";
import Profile from "@/components/Profile";

import Projects from "@/components/Projects";

import Skill from "@/components/Skill";
import CertificatesSection from "@/components/Testimonials ";
import React from "react";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Profile></Profile>
      </section>

      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="skills">
        <Skill></Skill>
      </section>
      <section id="experience ">
        <Experience></Experience>
      </section>
      <section id="education ">
        <Education></Education>
      </section>
      {/* <section>
        <CertificatesSection></CertificatesSection>
      </section> */}
      <section>
        <Hobbies></Hobbies>
      </section>

      <Contact></Contact>
    </div>
  );
};

export default Home;
