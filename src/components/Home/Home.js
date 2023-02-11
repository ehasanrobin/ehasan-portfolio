import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner.js/Banner";
import ContactForm from "../ContactForm/ContactForm";
import MySkills from "../MySkills/MySkills";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <MySkills></MySkills>
      <ProjectsSection></ProjectsSection>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </>
  );
};

export default Home;
